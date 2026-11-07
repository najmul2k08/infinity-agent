import { Context } from '@infinity-agent/cordis'
import Sandbox from '@infinity-agent/sandbox-local'
import SandboxPolicy from '@infinity-agent/sandbox-policy'
import SessionProjections from '@infinity-agent/session-projection'
import { onTestFinished } from 'vitest'
import type { SandboxMode } from '@infinity-agent/sandbox'

/** Mount the Python runtime's policy and confinement providers with owned teardown. */
export async function createRuntimeContext(policy: { mode?: SandboxMode; workspaceRoot?: string } = {}): Promise<Context> {
  const ctx = new Context()
  onTestFinished(async () => { await ctx.fiber.dispose() })
  await ctx.plugin(Sandbox, {})
  await ctx.plugin(SessionProjections)
  await ctx.plugin(SandboxPolicy, { mode: 'danger-full-access', ...policy })
  return ctx
}
