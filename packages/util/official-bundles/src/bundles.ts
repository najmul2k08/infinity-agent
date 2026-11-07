/** The bundle package names the dsh installation selects, offers, installs on demand, or retires. */

/** Installation-owned defaults used when a shipped profile is first opened. */
export interface ProfileTemplate {
  /** Ordered bundle layer list. */
  bundles: readonly string[]
}

/** The shipped profile templates auto-initialized on first use, by name. */
export const PROFILE_TEMPLATES: Record<string, ProfileTemplate> = {
  acp: {
    bundles: ['@infinity-agent/base', '@infinity-agent/acp-app'],
  },
  web: {
    bundles: ['@infinity-agent/base', '@infinity-agent/web-app'],
  },
  headless: {
    bundles: ['@infinity-agent/base', '@infinity-agent/headless'],
  },
  sdk: {
    bundles: ['@infinity-agent/base', '@infinity-agent/sdk-app'],
  },
  'sdk-minimal': {
    bundles: ['@infinity-agent/sdk-minimal'],
  },
}

/**
 * Installation-owned bundle tuples that an earlier release wrote into a shipped profile; app-boot replaces an exact
 * match with the {@link PROFILE_TEMPLATES} entry of the same name and leaves every other list untouched.
 */
export const INSTALLATION_OWNED_PROFILE_TUPLES: Readonly<Record<string, readonly string[]>> = {
  headless: ['@infinity-agent/base', '@infinity-agent/web-app', '@infinity-agent/headless'],
}

/** Bundles an earlier release shipped and the installation no longer carries; app-boot removes them from profiles. */
export const RETIRED_BUNDLES: ReadonlySet<string> = new Set([
  // The Web composition mounts Schedule itself
  // ([upgrade guide](../../../../docs/upgrade-guide/v0.2.0-rc.2/schedule-bundle-retired/guide.md)).
  '@infinity-agent/experimental-schedule-bundle',
  '@infinity-agent/experimental-agent-team-profile',
])

/** The bundle list a `dsh plugin` init uses for a name with no shipped template. */
export const DEFAULT_PROFILE_BUNDLES: readonly string[] = ['@infinity-agent/base']

/**
 * The bundles the dsh installation ships for a person to switch on: each a
 * runtime dependency of the installation that declares `dsh.bundle.patch`,
 * an `icon`, and `./locale/*.json` display metadata, selected by no shipped
 * template, and offered switched off by the plugin manager except persistent
 * terminals, which have no page switch
 * ([rationale](../../../../.agents/notes/implemented/process/2026-09-15-shipped-optional-bundles.md),
 * [admission](../../../../.agents/notes/implemented/architecture/2026-09-21-experimental-capabilities-as-optional-bundles.md)).
 */
export const OPTIONAL_BUNDLES: readonly string[] = [
  '@infinity-agent/personalized-recommendations',
  '@infinity-agent/cua-bundle',
  '@infinity-agent/experimental-session-search',
  '@infinity-agent/experimental-ralph-bundle',
  '@infinity-agent/experimental-terminal-bundle',
  '@infinity-agent/experimental-badge-skill-bundle',
  '@infinity-agent/experimental-session-titles-bundle',
  '@infinity-agent/experimental-voice-input-bundle',
  '@infinity-agent/experimental-cot-translation-bundle',
  '@infinity-agent/experimental-auto-review',
  '@infinity-agent/experimental-inspector-profile',
  '@infinity-agent/experimental-liveshare',
  '@infinity-agent/experimental-plugin-market-bundle',
  '@infinity-agent/experimental-tool-worktree',
  '@infinity-agent/experimental-forge-bundle',
]

/** Public DSH release members available through the ordinary on-demand bundle installer. */
export const ON_DEMAND_BUNDLES: readonly string[] = [
  '@infinity-agent/subagent-claude-code',
  '@infinity-agent/subagent-codex',
]
