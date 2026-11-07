---
kind: upgrade-guide
description: "The `agent-instructions` row no longer accepts `dshHome`; instruction loading always resolves the harness home from `$INFINITY_HOME` or `~/.infinity-agent`."
---

# Instruction loading resolves one harness home

English | [中文](guide.zh.md)

## Change

`@infinity-agent/agent-instructions` removed its `dshHome` config field. The plugin resolves the harness home through `resolveDshHome()` from `@infinity-agent/home-paths`, like every other harness consumer: the home is `$INFINITY_HOME` when it is set and non-blank, otherwise `~/.infinity-agent`, with tilde expansion.

A `cordis.yml`, profile patch, or `--patch` overlay that still sets `dshHome` on the `agent-instructions` row has no effect: the row keeps the stray key and the plugin ignores it, so instruction loading follows the process home. Other providers, such as `dsh-skill-filesystem` and `dsh-shell-env`, keep their own home fields; this removal covers the instruction loader only.

## Migration

1. Delete `dshHome` from the `agent-instructions` row in `cordis.yml`, `$INFINITY_HOME/cordis.patch.yml`, `$INFINITY_HOME/profiles/<profile>/cordis.patch.yml`, and any `--patch` overlay.
2. Where the override pointed at a non-default home, export `INFINITY_HOME` for the process instead, so every harness consumer reads that home.
3. Confirm with `infinity --profile <profile> --dump-config` that the `agent-instructions` row lists only its remaining fields, and that a new session's first request shows `Instructions from: $INFINITY_HOME/AGENTS.md` (or `~/.infinity-agent/AGENTS.md`) when that file exists.
