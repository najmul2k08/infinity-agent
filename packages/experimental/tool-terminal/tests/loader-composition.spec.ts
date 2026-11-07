import { executeToolFixture } from '@infinity-agent/tool-testkit'
import * as NativeToolExecutor from '@infinity-agent/tool-executor-native'
import { mkdtemp, rm, writeFile } from 'node:fs/promises'
import { unsupportedModel, provideWorkingDirectoryFixture, unsupportedInbox } from '@infinity-agent/agent-loop-testkit'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { pathToFileURL } from 'node:url'
import { afterEach, describe, expect, it } from 'vitest'
import { Context } from '@infinity-agent/cordis'
import Loader from '@infinity-agent/cordis-plugin-loader'
import Include from '@infinity-agent/cordis-plugin-include'
import { ToolCallId } from '@infinity-agent/llm'
import { Session, SessionId } from '@infinity-agent/session'
import AgentRegistry from '@infinity-agent/agent'
import type { Agent } from '@infinity-agent/agent'
import SystemPrompt from '@infinity-agent/system-prompt'
import ToolRuntime from '@infinity-agent/tools'
import TerminalSessionService from '@infinity-agent/terminal'
import SandboxProvider from '@infinity-agent/sandbox'
import type { ConfinedArgv, SandboxPolicy } from '@infinity-agent/sandbox'
import SandboxPolicyService from '@infinity-agent/sandbox-policy'
import SessionProjectionRegistry from '@infinity-agent/session-projection'
import LocalSubprocessRuntime from '@infinity-agent/subprocess-local'
import * as TerminalLocal from '@infinity-agent/terminal-bash'
import * as ToolPty from '@infinity-agent/tool-terminal'

let root: string | undefined
let context: Context | undefined

afterEach(async () => {
  await context?.fiber.dispose()
  context = undefined
  if (root !== undefined) await rm(root, { recursive: true, force: true })
  root = undefined
})

class PassthroughSandbox extends SandboxProvider {
  async confine(argv: readonly string[], _policy: SandboxPolicy): Promise<ConfinedArgv> {
    return { argv: [...argv], enforcement: 'full', denialSignatures: [], runnerFailureRules: [] }
  }
}

async function agent(ctx: Context): Promise<Agent> {
  const scope = ctx.plugin(() => {})
  const id = SessionId('pty-loader-agent')
  const session = Session.create(id)
  const value: Agent = {
    id, options: {}, session, model: unsupportedModel(),
    inbox: unsupportedInbox(),
    status: 'idle',
    ctx: scope.ctx,
    send: () => {},
    followup: () => {}, steer: () => {}, inject: () => {}, cancel() {},
    runMaintenance: job => job(new AbortController().signal),
    whenIdle: () => Promise.resolve(),
  }
  await ctx.agents.register(value)
  return value
}

function resultText(result: { content: { type: string; text?: string }[] }): string {
  return result.content.filter(block => block.type === 'text').map(block => block.text).join('')
}

const suite = process.platform === 'linux' || process.platform === 'darwin' ? describe : describe.skip

suite('terminal real Loader composition through cordis.yml', () => {
  it('boots cordis.yml and preserves shell state across real tool calls', async () => {
    root = await mkdtemp(join(tmpdir(), 'dsh-pty-loader-'))
    const configPath = join(root, 'cordis.yml')
    await writeFile(configPath, [
      "- name: '@infinity-agent/agent'",
      "- name: '@infinity-agent/system-prompt'",
      "- name: '@infinity-agent/tools'",
      "- name: '@infinity-agent/tool-executor-native'",
      "- name: '@infinity-agent/terminal'",
      "- name: '@infinity-agent/test-sandbox'",
      "- name: '@infinity-agent/session-projection'",
      "- name: '@infinity-agent/sandbox-policy'",
      '  config:',
      '    mode: danger-full-access',
      `    workspaceRoot: ${JSON.stringify(root)}`,
      "- name: '@infinity-agent/subprocess-local'",
      "- name: '@infinity-agent/terminal-bash'",
      '  config:',
      '    pollIntervalMs: 10',
      '    exactProbeAfterMs: 20',
      '    idleSilenceMs: 250',
      '    handoffGraceMs: 250',
      '    timeoutMs: 2000',
      '    disposeGraceMs: 500',
      "- name: '@infinity-agent/tool-terminal'",
      '',
    ].join('\n'))

    context = new Context()

    provideWorkingDirectoryFixture(context)
    context.baseUrl = pathToFileURL(root).href + '/'
    await context.plugin(Loader)
    context.loader.builtins.include = Include
    const modules = new Map<string, unknown>([
      ['@infinity-agent/agent', AgentRegistry],
      ['@infinity-agent/system-prompt', SystemPrompt],
      ['@infinity-agent/tools', ToolRuntime],
      ['@infinity-agent/tool-executor-native', NativeToolExecutor],
      ['@infinity-agent/terminal', TerminalSessionService],
      ['@infinity-agent/test-sandbox', PassthroughSandbox],
      ['@infinity-agent/session-projection', SessionProjectionRegistry],
      ['@infinity-agent/sandbox-policy', SandboxPolicyService],
      ['@infinity-agent/subprocess-local', LocalSubprocessRuntime],
      ['@infinity-agent/terminal-bash', TerminalLocal],
      ['@infinity-agent/tool-terminal', ToolPty],
    ])
    context.loader.internal = {
      version: 'v2',
      async import(specifier: string) {
        if (!modules.has(specifier)) throw new Error(`unexpected Loader import: ${specifier}`)
        return modules.get(specifier)
      },
    } as unknown as NonNullable<typeof context.loader.internal>
    await context.loader.create({ name: 'cordis:include', config: { path: pathToFileURL(configPath).href } })
    await context.loader.await()

    const owner = await agent(context)
    const signal = new AbortController().signal
    const spawn = await executeToolFixture(context, {
      signal, callId: ToolCallId('spawn'), name: 'terminal_open', arguments: { type: 'shell', name: 'main', cwd: root }, agent: owner,
    })
    expect(resultText(spawn)).toContain('started terminal session pty-1 (main)')

    await executeToolFixture(context, {
      signal, callId: ToolCallId('state'), name: 'terminal_send', arguments: { sessionId: 'pty-1', text: 'export KEEP=loader; cd /' }, agent: owner,
    })
    const read = await executeToolFixture(context, {
      signal, callId: ToolCallId('read'), name: 'terminal_send', arguments: { sessionId: 'pty-1', text: 'printf "cwd=%s keep=%s\\n" "$PWD" "$KEEP"' }, agent: owner,
    })
    expect(resultText(read)).toContain('cwd=/ keep=loader')
    expect(context.terminals.list(owner)).toHaveLength(1)
  }, 15_000)
})
