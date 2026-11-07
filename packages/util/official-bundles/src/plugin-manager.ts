/** The package names the plugin manager protects, hides, orders, or marks experimental. */

/**
 * Plugin packages the plugin manager refuses to disable or remove, because management itself needs them; a bundle that
 * contains one is read-only as well. Removing a name drops only this `management-required` refusal; the manager's own
 * entry, installation-carried bundles, and unaddressable rows stay protected by their own rules.
 */
export const PROTECTED_PLUGINS: ReadonlySet<string> = new Set([
  '@infinity-agent/plugin-manager', '@infinity-agent/cordis-plugin-loader',
  '@infinity-agent/cordis-plugin-include', '@infinity-agent/api-gateway',
  '@infinity-agent/host-webserver', '@infinity-agent/client-modules',
  '@infinity-agent/client-ui-settings-plugin-inventory', '@infinity-agent/client-ui-plugin-manager',
  '@infinity-agent/host-plugin-inventory', '@infinity-agent/typert-registry',
  '@infinity-agent/api-remotes', '@infinity-agent/api-remote-access',
  '@infinity-agent/cordis-plugin-timer', '@infinity-agent/client-connection',
  '@infinity-agent/host-frontend-static', '@infinity-agent/tools',
  '@infinity-agent/hmr',
])

/**
 * Built-in profile bundles, persistent terminals, and the standalone worktree tool, which have no plugin manager page.
 * Their Host availability and activation stay intact.
 */
export const HIDDEN_BUNDLES: ReadonlySet<string> = new Set([
  '@infinity-agent/base',
  '@infinity-agent/web-app',
  '@infinity-agent/headless',
  '@infinity-agent/sdk-app',
  '@infinity-agent/acp-app',
  '@infinity-agent/sdk-minimal',
  '@infinity-agent/experimental-terminal-bundle',
  '@infinity-agent/experimental-tool-worktree',
])

/**
 * The optional bundles the plugin manager's main and More lists rank first, in this order. {@link MORE_BUNDLES}, not
 * this list, decides whether a bundle appears on the main list.
 */
export const EXTENSION_BUNDLES: readonly string[] = [
  '@infinity-agent/experimental-voice-input-bundle',
  '@infinity-agent/experimental-plugin-market-bundle',
  '@infinity-agent/experimental-auto-review',
]

/**
 * The optional bundles the plugin manager's main list leaves out until the profile enables them; its More list,
 * which includes every eligible bundle, ranks them last in this order.
 */
export const MORE_BUNDLES: readonly string[] = [
  '@infinity-agent/personalized-recommendations',
  '@infinity-agent/experimental-inspector-profile',
  '@infinity-agent/cua-bundle',
  '@infinity-agent/experimental-cot-translation-bundle',
  '@infinity-agent/experimental-session-search',
  '@infinity-agent/experimental-session-titles-bundle',
  '@infinity-agent/experimental-badge-skill-bundle',
  '@infinity-agent/experimental-ralph-bundle',
  '@infinity-agent/subagent-codex',
  '@infinity-agent/subagent-claude-code',
]

/** Official bundles the plugin manager marks with the Experimental badge. */
export const EXPERIMENTAL_BUNDLES: ReadonlySet<string> = new Set([
  '@infinity-agent/personalized-recommendations',
  '@infinity-agent/cua-bundle',
  '@infinity-agent/experimental-voice-input-bundle',
  '@infinity-agent/experimental-auto-review',
  '@infinity-agent/experimental-inspector-profile',
  '@infinity-agent/experimental-forge-bundle',
  '@infinity-agent/experimental-tool-worktree',
  '@infinity-agent/experimental-cot-translation-bundle',
  '@infinity-agent/experimental-session-search',
  '@infinity-agent/experimental-session-titles-bundle',
  '@infinity-agent/experimental-badge-skill-bundle',
  '@infinity-agent/experimental-ralph-bundle',
  '@infinity-agent/experimental-plugin-market-bundle',
  '@infinity-agent/experimental-liveshare',
])
