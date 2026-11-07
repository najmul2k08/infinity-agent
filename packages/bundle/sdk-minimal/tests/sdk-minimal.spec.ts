/** The standalone SDK-minimal bundle's complete declared Cordis tree. */

import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import * as yaml from 'js-yaml'
import { describe, expect, it } from 'vitest'
import { entryListSchema } from '@infinity-agent/cordis-plugin-include'

function packageName(specifier: string): string {
  return specifier.startsWith('@') ? specifier.split('/').slice(0, 2).join('/') : specifier.split('/')[0]!
}

describe('dsh-sdk-minimal bundle', () => {
  it('declares one standalone allowlisted tree with every row dependency', () => {
    const root = fileURLToPath(new URL('..', import.meta.url))
    const manifest = JSON.parse(readFileSync(resolve(root, 'package.json'), 'utf8')) as {
      dependencies?: Record<string, string>
      dsh?: { bundle?: { patch?: string } }
    }
    expect(manifest.dsh?.bundle?.patch).toBe('./cordis.patch.yml')
    const patches = yaml.load(
      readFileSync(resolve(root, manifest.dsh!.bundle!.patch!), 'utf8'),
      { schema: entryListSchema },
    ) as Array<{ insert?: Array<{ id?: string; inject?: string[]; name?: string; config?: Record<string, unknown>; disabled?: unknown }> }>
    expect(patches).toHaveLength(1)
    const rows = patches[0]?.insert ?? []
    expect(rows.map(row => [row.id, row.name])).toEqual([
      ['sdk-app-startup', '@infinity-agent/sdk-app'],
      ['sdk-jsonrpc-server', '@infinity-agent/sdk-jsonrpc-server'],
      ['deepseek-llm-api-extensions', '@infinity-agent/deepseek-llm-api-extensions'],
      ['session-log-deepseek', '@infinity-agent/session-log-deepseek'],
      ['plugin-package-inventory-deepseek', '@infinity-agent/plugin-package-inventory-deepseek'],
      ['llm-deepseek', '@infinity-agent/llm-deepseek-api-key'],
      ['sandbox', '@infinity-agent/sandbox-local'],
      ['filesystem', '@infinity-agent/fs-local'],
      ['attachment-local', '@infinity-agent/attachment-local'],
      ['tool-fs', '@infinity-agent/tool-fs'],
      ['working-directory', '@infinity-agent/working-directory'],
      ['tool-working-directory', '@infinity-agent/tool-working-directory'],
      ['session-projection', '@infinity-agent/session-projection'],
      ['token-meter', '@infinity-agent/token-meter'],
      ['compaction-basic', '@infinity-agent/compaction-basic'],
      ['image-offload', '@infinity-agent/compaction-image-offload'],
      ['sandbox-policy', '@infinity-agent/sandbox-policy'],
      ['subprocess', '@infinity-agent/subprocess-local'],
      ['pty', '@infinity-agent/terminal'],
      ['terminal-bash', '@infinity-agent/terminal-bash'],
      ['terminal-pwsh', '@infinity-agent/terminal-bash'],
      ['timer', '@infinity-agent/cordis-plugin-timer'],
      ['llm', '@infinity-agent/llm'],
      ['session', '@infinity-agent/session'],
      ['session-title', '@infinity-agent/session-title'],
      ['system-prompt', '@infinity-agent/system-prompt'],
      ['tools', '@infinity-agent/tools'],
      ['tool-executor-native', '@infinity-agent/tool-executor-native'],
      ['mcp-resources', '@infinity-agent/mcp-resources'],
      ['agent', '@infinity-agent/agent'],
      ['llm-retry', '@infinity-agent/llm-retry'],
      ['jobs', '@infinity-agent/jobs-local'],
      ['agent-loop', '@infinity-agent/agent-loop'],
      ['persistent-bash', '@infinity-agent/tool-bash-persistent'],
      ['persistent-pwsh', '@infinity-agent/tool-pwsh-persistent'],
      ['sessions', '@infinity-agent/session-persistence-jsonl'],
      ['session-checkpoint-policy', '@infinity-agent/session-checkpoint-policy'],
    ])
    expect(rows.find(row => row.id === 'sdk-app-startup')?.config).toEqual({ profile: 'sdk-minimal' })
    expect(rows.find(row => row.id === 'sdk-jsonrpc-server')).toMatchObject({
      inject: ['sdkAppStartup', 'loader'],
      config: { maxTokensAsSuccess: false },
    })
    expect(rows.find(row => row.id === 'llm-deepseek')?.config).toEqual({
      apiKeyEnv: 'DEEPSEEK_API_KEY',
      defaultContextWindow: { __jsExpr: 'Number(process.env.INFINITY_CONTEXT_WINDOW ?? 1000000)' },
      streamIdleTimeoutMs: 172800000,
    })
    expect(rows.find(row => row.id === 'system-prompt')?.config).toEqual({
      includeHarnessIdentity: false,
      includeRuntimeContext: false,
      personaPrefix: { __jsExpr: "process.env.INFINITY_SYSTEM_PROMPT ?? 'You are a helpful software engineer assistant.'" },
    })
    expect(rows.find(row => row.id === 'agent-loop')?.config).toEqual({ agents: [] })
    expect(rows.find(row => row.id === 'tool-fs')?.config).toEqual({ read: false, readImage: true, write: false, edit: false })
    expect(rows.find(row => row.id === 'compaction-basic')?.config).toBeUndefined()
    expect(rows.find(row => row.id === 'terminal-bash')).toMatchObject({
      disabled: { __jsExpr: "process.platform === 'win32'" },
    })
    expect(rows.find(row => row.id === 'terminal-pwsh')).toMatchObject({
      disabled: { __jsExpr: "process.platform !== 'win32'" },
      config: { shellDialect: 'pwsh', timeoutMs: 300000 },
    })
    expect(Object.keys(manifest.dependencies ?? {}).sort()).toEqual(
      [...new Set(rows.map(row => row.name).filter((name): name is string => name !== undefined).map(packageName))].sort(),
    )
  })
})
