import { executeToolFixture } from '@infinity-agent/tool-testkit'
import { fileURLToPath } from 'node:url'
import { agentEvents, type Agent } from '@infinity-agent/agent'
import { ToolCallId } from '@infinity-agent/llm'
import { boot, loadOverlayPatches } from '@infinity-agent/app-boot'
import { SessionId } from '@infinity-agent/session'
import type {} from '@infinity-agent/skill'
import type {} from '@infinity-agent/tools'
import { unsupportedModel, unsupportedInbox } from '@infinity-agent/agent-loop-testkit'

const overlayPath = process.argv[2]
if (overlayPath === undefined) throw new Error('infinity-badge snapshot requires an overlay path')
const rootConfigPath = fileURLToPath(new URL('../../../../../packages/bundle/base/tests/fixtures/root.cordis.yml', import.meta.url))
const basePatchPath = fileURLToPath(new URL('../../../../../packages/bundle/base/cordis.patch.yml', import.meta.url))
// The fixture owns the optional provider; the base bundle has no dependency on it.
const overlays = loadOverlayPatches('infinity-badge-snapshot', overlayPath).map(patch => patch.insert === undefined ? patch : {
  ...patch,
  insert: patch.insert.map(row => row.name === '@infinity-agent/skill-badge'
    ? { ...row, name: import.meta.resolve('@infinity-agent/skill-badge') }
    : row),
})
const ctx = await boot('infinity-badge-snapshot', rootConfigPath, [
  ...loadOverlayPatches('infinity-badge-snapshot', basePatchPath),
  ...overlays,
])

try {
  const agentId = SessionId('infinity-badge-snapshot')
  const session = ctx.sessions.create(agentId, { meta: { cwd: process.cwd() } })
  const agent: Agent = {
    ctx,
    id: agentId,
    options: {},
    session,
    model: unsupportedModel(),
    inbox: unsupportedInbox(),
    status: 'idle',
    send: () => {},
    followup: () => {},
    steer: () => {},
    inject: () => { throw new Error('infinity-badge snapshot must receive the catalog at the step boundary') },
    cancel: () => {},
    runMaintenance: job => job(new AbortController().signal),
    whenIdle: () => Promise.resolve(),
  }
  const decision = await agentEvents(ctx, agent).waterfall(
    'agent/pre-step',
    { modelSelection: { provider: 'mock', model: 'mock' }, messages: [], turn: 1, step: 1, signal: new AbortController().signal },
    () => Promise.resolve({ kind: 'enter' as const, messages: [] }),
  )
  const catalog = decision.kind === 'enter'
    ? decision.messages.find(message => message.role === 'user'
      && message.source.kind === 'skill-catalog')?.content
    : undefined
  const summary = (await ctx.skills.list()).find(skill => skill.name === 'infinity-badge')
  const result = await executeToolFixture(ctx, {
    callId: ToolCallId('infinity-badge-snapshot'),
    name: 'skill',
    arguments: { name: 'infinity-badge' },
    signal: new AbortController().signal,
  })
  process.stdout.write(`${JSON.stringify({ catalog: catalog ?? null, summary: summary ?? null, result })}\n`)
} finally {
  await ctx.fiber.dispose()
}
