# Loadable Harness plugin packages

This file is GENERATED from workspace manifests (`scripts/gen-plugin-packages.ts`) and verified fresh by `pnpm run verify-plugin-packages` (part of `doc-sync`); do not edit it by hand.

Every package below exports a Cordis plugin that a bundle patch can name in a Loader row. `Config` marks packages whose row accepts a `config` mapping; query `Config.listConfigs` through `cordis_inspect_query` (filter by `name`, then query the `entry` id) for the mounted schema. Packages under `experimental` are pre-stable.

## acp

| Package | Config | Description |
|---|---|---|
| `@infinity-agent/acp` | yes | Automation-only Agent Client Protocol server for driving Infinity agent turns over JSON-RPC stdio |

## api

| Package | Config | Description |
|---|---|---|
| `@infinity-agent/api-account-controller` | no | Expose safe account operations over authenticated Remote |
| `@infinity-agent/api-gateway` | yes | Typert Remote Host dispatcher and Client API endpoint |
| `@infinity-agent/api-job-controller` | yes | Job Remote observation stream and the reference-counted client job-output service |
| `@infinity-agent/api-remote-access` | no | Method-level Remote access control for non-owner Peers and the per-Peer access snapshot |
| `@infinity-agent/api-remotes` | no | Remote BFF assembly for application-selected Host capabilities |
| `@infinity-agent/api-session-controller` | yes | Session Remote commands, cold reads, and live control transport |
| `@infinity-agent/api-settings-controller` | yes | Remote owner for the configuration surfaces over the settings-domain seams |
| `@infinity-agent/api-terminal-controller` | yes | Session-owned interactive terminals with shell discovery, screen recovery and typed Remote control |
| `@infinity-agent/api-workspace-controller` | yes | Workspace Remote commands and reconnect-safe state transport |
| `@infinity-agent/api-workspace-files` | yes | Workspace file service and Client resource provider: bounded reads, directory listing, and live metadata over the workspaceFiles Remote namespace |

## attachment

| Package | Config | Description |
|---|---|---|
| `@infinity-agent/attachment-local` | yes | Private content-addressed INFINITY_HOME attachment storage |

## boot

| Package | Config | Description |
|---|---|---|
| `@infinity-agent/config-editor` | no | Persist plugin configuration through profile patches and Loader reconciliation |
| `@infinity-agent/hmr` | yes | Coordinated module and profile configuration hot reload |
| `@infinity-agent/plugin-manager` | yes | Current-profile plugin and bundle management shared by dsh CLI, Web and agent tools |
| `@infinity-agent/plugin-market` | yes | Configured plugin market indexes for the Web Discover page and the plugin_market agent tool |

## browser-use

| Package | Config | Description |
|---|---|---|
| `@infinity-agent/browser-use` | no | Exclusive named browser-use provider registration |

## bundle

| Package | Config | Description |
|---|---|---|
| `@infinity-agent/acp-app` | no | The dsh ACP profile bundle: automation-only JSON-RPC stdio and process lifecycle over dsh-base |
| `@infinity-agent/headless` | yes | The dsh one-shot bundle: a direct core Agent/Session runner over dsh-base with no Host, HTTP, or browser layer |
| `@infinity-agent/sdk-app` | yes | The dsh SDK profile bundle: stdio JSON-RPC serving and process lifecycle over dsh-base |
| `@infinity-agent/web-app` | yes | The dsh browser-surface bundle: the web patch layer over dsh-base plus the runtime glue plugin (frontend dist serving, bash runtime variables, URL line) |

## client

| Package | Config | Description |
|---|---|---|
| `@infinity-agent/client-connection` | yes | Authenticated RPC transport and generation lifecycle |
| `@infinity-agent/client-file-upload` | no | Agent-scoped browser file upload, streaming intake, and staged receipt service |
| `@infinity-agent/client-hmr` | yes | Web client graph synchronization and rebuilt-bundle reload transport |
| `@infinity-agent/client-locale` | no | Locale plugin: Host-backed preference, extensible language catalog, browser fallback, and typed built-in dictionaries |
| `@infinity-agent/client-modules` | no | Client module system, dual-face: node half composes the __INFINITY_BOOT__ entry graph (incremental dsh.client scan, bundle route, index tap, webPlugins service); browser half is the lazy-CJS module table the vendored cordis Loader consumes as its internal seam |
| `@infinity-agent/client-product-analytics` | yes | Desktop product event collection and authenticated Host reporting |
| `@infinity-agent/client-resources` | no | Unified client resource model: protocol-registered providers turn URL addresses into live values, consumed through the useResource global standard hook |
| `@infinity-agent/client-shortcuts` | yes | Application keyboard command registry and physical-key routing |
| `@infinity-agent/client-ui-agent-preset` | no | Agent-preset surfaces: the default for later sessions, this session's seat, and the composition editor |
| `@infinity-agent/client-ui-agent-team` | no | Web shared task board for a subagent tree |
| `@infinity-agent/client-ui-approval` | no | Approval composer takeover over the scoped Remote Event waterfall |
| `@infinity-agent/client-ui-attachment` | no | Dynamic attachment presentation plugin for conversation input, message-image, and trajectory image slots |
| `@infinity-agent/client-ui-brand-official` | no | Official Infinity agent brand artwork and click-triggered home background |
| `@infinity-agent/client-ui-chat` | no | Chat Conversation target, node definitions, renderers, and details surface |
| `@infinity-agent/client-ui-commands` | no | Client command surface: global directory cache, '/' source, three command UI kinds, popupSelect registry |
| `@infinity-agent/client-ui-context-menu` | no | Typed, plugin-extensible context menus with captured targets and shared Web presentation |
| `@infinity-agent/client-ui-conversation` | no | Target-neutral Conversation assembly, shell, composer, queue, and view navigation |
| `@infinity-agent/client-ui-deliverables` | no | Changed-files card with per-file comparison tabs, delivery cards, and clickable final-response file references for Web |
| `@infinity-agent/client-ui-directory-picker-browse` | no | In-app directory browsing surface: the workspace directory-flow owner rendering the host's listing and creation primitives |
| `@infinity-agent/client-ui-directory-picker-native` | no | Native directory-picker surface: the renderless workspace directory-flow occupant driving the local Desktop or Host OS chooser |
| `@infinity-agent/client-ui-entry-customization` | no | Customize plugin entries in the left sidebar, conversation views, and right sidebar, and quickly create new plugins. |
| `@infinity-agent/client-ui-file-actions` | no | Original-file saving and image clipboard actions for Web and Desktop |
| `@infinity-agent/client-ui-file-drag` | no | Application-owned file drag transfers and localized failure feedback |
| `@infinity-agent/client-ui-goal` | no | Session goal surface: GoalBar docked above the composer, read from the goal session projection |
| `@infinity-agent/client-ui-input-trigger` | no | Input trigger pipeline: '/' and '@' detection, candidate menu, pick routing to registered sources |
| `@infinity-agent/client-ui-jobs` | no | Session-header background-job list with on-demand streaming record panels |
| `@infinity-agent/client-ui-layout` | no | Shell plugin: three-column AppFrame with drag handles, ctx.layout viewing-state service (navigation + panels) |
| `@infinity-agent/client-ui-message-feedback` | no | The Web feedback surface: per-message Like/Dislike in the assistant-message action strip and the feedback dialog behind both ratings and /feedback, backed by the messageFeedback and sessionFeedback Host Remotes |
| `@infinity-agent/client-ui-model-selection` | no | Model selection over the shared model catalog, Session projection, and session.selectModel |
| `@infinity-agent/client-ui-open-in-app` | no | Session application submenus and native opening controls for directories and previewed files |
| `@infinity-agent/client-ui-permission-presets` | no | Permission surfaces: a new-session default in General settings and a current-session /permission popup over the permissions projection |
| `@infinity-agent/client-ui-plan` | no | Plan mode controls, persistent transcript plan cards, and sidebar Markdown previews |
| `@infinity-agent/client-ui-plugin-manager` | yes | Plugin management for the dsh web client: the sidebar Plugins panel installs, enables, disables, retries, and composes installed plugin packages |
| `@infinity-agent/client-ui-plugin-market` | no | Discover tab of the dsh web Plugins page: browse configured plugin market indexes and install their bundles |
| `@infinity-agent/client-ui-reference` | no | Unified Web @file and @session reference source |
| `@infinity-agent/client-ui-renderer` | no | Browser UI renderer: React slot bindings, ctx.uiRenderer, and the assembled application root |
| `@infinity-agent/client-ui-schedule` | no | Host task management page and Session reminder catalog |
| `@infinity-agent/client-ui-secret-mask` | no | Web display masking for recognized credentials in sent user text |
| `@infinity-agent/client-ui-session` | no | Session Controller adapter for React and session-scoped slots |
| `@infinity-agent/client-ui-settings` | no | Settings domain base plugin: shared configuration forms and the canonical settings slot-type contract |
| `@infinity-agent/client-ui-settings-account` | yes | Manage DeepSeek login and open Platform billing pages |
| `@infinity-agent/client-ui-settings-agent-loop` | no | Settings page of the agent loop on the dsh web client's Plugins page: the parallel tool-call cap of the agent-loop namespace |
| `@infinity-agent/client-ui-settings-general` | no | Settings ownerless-copy and product onboarding plugin: the General section, shell trigger/header chrome content, settings dictionaries, and the versioned welcome notice |
| `@infinity-agent/client-ui-settings-models` | yes | Models settings and shared product-onboarding dialogs over existing settings and credential joins |
| `@infinity-agent/client-ui-settings-plugin-inventory` | no | Read-only Cordis Loader inventory tab in Web Plugins settings |
| `@infinity-agent/client-ui-settings-plugins` | no | Built-in plugins settings section for the dsh web client: the Settings navigation entry and the tab chrome feature-owned tabs register into |
| `@infinity-agent/client-ui-settings-session-log` | no | General settings control for Session-log upload with DeepSeek API requests |
| `@infinity-agent/client-ui-settings-shell` | no | Settings page of the shell executor on the dsh web client's Plugins page: the command timeout and the per-stream output cap of the shell namespace |
| `@infinity-agent/client-ui-settings-subagent` | no | Settings page of Subagent delegation on the dsh web client's Plugins page: recursion depth, parallel capacity, and the models agents may choose for subagents |
| `@infinity-agent/client-ui-settings-web-search` | no | Settings page for web search and fetch on the dsh web client's Plugins page: the Search and Fetch provider menus, the DeepSeek Search API result count, and legacy Messages search settings |
| `@infinity-agent/client-ui-shortcuts` | no | Keyboard shortcut reference, recording, and local preference editing |
| `@infinity-agent/client-ui-sidebar` | no | Sidebar plugin: session multi-level tree, search, grouping, state dots |
| `@infinity-agent/client-ui-sidebar-browser` | no | Sandboxed Web browser tabs for the right Sidebar |
| `@infinity-agent/client-ui-sidebar-documentpreview` | yes | Extensible Sidebar previews for Office documents, spreadsheets, Markdown, code, images, PDF, HTML, and plain text |
| `@infinity-agent/client-ui-sidebar-files` | no | The workspace files page and one workspace directory tree per pane beside docked and floating file previews, listed lazily over the workspaceFiles Remote namespace |
| `@infinity-agent/client-ui-sidebar-right` | no | Right Sidebar: the docking surface's session-bound state, its panel and header expand control, and the navigation service over it |
| `@infinity-agent/client-ui-sidebar-terminal` | no | Interactive shell tabs for the right Sidebar |
| `@infinity-agent/client-ui-skill` | no | Web skill references and the dedicated skill tool row |
| `@infinity-agent/client-ui-subagent` | no | Subagent conversation catalog, continuation routing UI, and '@' reference source |
| `@infinity-agent/client-ui-theme` | yes | Theme plugin: Host bootstrap for the pre-plugin palette; ThemeRuntime for light/dark/system state and icon replacements; --ia-* token styles and Appearance settings row |
| `@infinity-agent/client-ui-tool` | no | Client Tool call-tree renderer and keyed per-tool presentation slot |
| `@infinity-agent/client-ui-trajectory` | yes | Trajectory event ledger and timing overview with live tool-result inspection |
| `@infinity-agent/client-ui-user-questions` | no | Web ask_user_question composer takeover and plan-review presentation UI |
| `@infinity-agent/client-ui-workflow-run` | no | Durable workflow-run Conversation Node and nested member disclosure for dsh web |
| `@infinity-agent/client-ui-workspace` | no | Workspace picker plugin: one WorkspacePicker registered into the sidebar and empty-state workspace slots |

## compaction

| Package | Config | Description |
|---|---|---|
| `@infinity-agent/command-compact` | no | Human-facing slash command for explicit session compaction |
| `@infinity-agent/compaction-basic` | yes | Token-meter-driven compaction policy and LLM summarization backend for the Infinity agent |
| `@infinity-agent/compaction-image-offload` | no | Durable image offload for image-capable routes: replace over-budget request images with placeholders and retry |
| `@infinity-agent/compaction-tool-result-pruner` | yes | Replay-safe model-free head/middle/tail pruning for tool-result surface nodes |

## computer-use

| Package | Config | Description |
|---|---|---|
| `@infinity-agent/computer-use` | no | Exclusive named computer-use provider registration |

## context

| Package | Config | Description |
|---|---|---|
| `@infinity-agent/agent-instructions` | yes | Workspace context loader for AGENTS.md/CLAUDE.md instruction files |
| `@infinity-agent/file-reference-local` | yes | Local-filesystem ctx.fileReferences provider with bounded fuzzy indexes |
| `@infinity-agent/harness-dev-context` | no | Model context naming the Infinity agent checkout and Web GUI URL without letting either change the system prompt |
| `@infinity-agent/session-reference` | yes | Cross-session snapshot references and durable untrusted model context (ctx.sessionReferenceResolver) |
| `@infinity-agent/time-context` | yes | Durable per-step context with the current time and elapsed time |
| `@infinity-agent/tmux-context` | yes | Opt-in durable per-step context with this agent's tmux pane and window location |

## core

| Package | Config | Description |
|---|---|---|
| `@infinity-agent/agent` | no | Agent interface, registry, initiator scope, and event vocabulary for the Infinity agent |
| `@infinity-agent/agent-default-model` | yes | Default model selection shared by Agent entry points |
| `@infinity-agent/agent-loop` | yes | The concrete agent loop plugin for the Infinity agent |
| `@infinity-agent/agent-tool-presentation` | yes | Deprecated tool presentation selector; use dsh-tool-executor-native or dsh-tool-executor-ptc directly |
| `@infinity-agent/session` | no | Event-sourced session store for the Infinity agent |
| `@infinity-agent/system-prompt` | yes | System prompt assembly registry for the Infinity agent |
| `@infinity-agent/tool-executor-native` | no | Native tool execution plugin |
| `@infinity-agent/tool-executor-ptc` | yes | PTC program execution, tool bindings, and generated SDK prompts |
| `@infinity-agent/tools` | no | Tool registry and execution pipeline for the Infinity agent |

## credentials

| Package | Config | Description |
|---|---|---|
| `@infinity-agent/authorization` | no | Authorization seam (ctx.authorization): plugin-owned flows that obtain a credential through a conversation with the human |
| `@infinity-agent/credentials-local` | yes | File-backed credentials provider ($INFINITY_HOME/.env under the live process environment) for the Infinity agent |
| `@infinity-agent/deepseek-account-platform` | yes | Authorize DeepSeek accounts through browser PKCE |

## deliverables

| Package | Config | Description |
|---|---|---|
| `@infinity-agent/deliverable-file-references` | no | Shared model guidance for file links and deliverables across Infinity agent hosts |
| `@infinity-agent/tool-present` | yes | Explicit workspace file delivery declarations for the Infinity agent |
| `@infinity-agent/workspace-changes` | yes | Per-turn workspace file changes recorded from git working-tree snapshots and whole-file captures, with per-file comparisons, for the Infinity agent |

## document

| Package | Config | Description |
|---|---|---|
| `@infinity-agent/office-to-pdf` | yes | Shared Office-to-PDF conversion with bounded queues and caching |

## experimental

| Package | Config | Description |
|---|---|---|
| `@infinity-agent/action-cards` | yes | Optional action cards below answers: one shared proposal tool, card state, user actions and status notices |
| `@infinity-agent/client-ui-action-cards` | no | Action cards below completed answers: the shared card frame, kind bodies and the compact tool row |
| `@infinity-agent/client-ui-creation-recommendations` | no | Body of the personalized page card: location choice, creation progress, Undo and Restore |
| `@infinity-agent/client-ui-plugin-recommendations` | no | Official plugin card body with catalog text and enabling |
| `@infinity-agent/creation-recommendations` | no | Create persistent removable interface plugins from explicit conversation needs |
| `@infinity-agent/cua` | no | Shared Computer Use application objects, authorization, and logged tool execution |
| `@infinity-agent/experimental-api-speech-to-text` | yes | Authenticated experimental speech transcription for browser clients |
| `@infinity-agent/experimental-auto-review` | no | Per-tool LLM authorization review for the Infinity agent Auto permission preset |
| `@infinity-agent/experimental-browser-use-chrome-devtools-mcp` | yes | Experimental per-Session Chromium browser tools through chrome-devtools-mcp |
| `@infinity-agent/experimental-browser-use-playwright-mcp` | yes | Experimental per-Session Chromium browser tools through @playwright/mcp |
| `@infinity-agent/experimental-browser-use-stagehand-native` | yes | Experimental Stagehand browser tools with separately configured native models |
| `@infinity-agent/experimental-claude-code-mods` | yes | Experimental bridge: load Claude Code mods (hooks modules) and run their hook chains on Infinity agent extension points |
| `@infinity-agent/experimental-client-ui-claude-code-mods` | no | Web band above the prompt for Claude Code mods: draws each session's mod tree and sends button presses back to the bridge |
| `@infinity-agent/experimental-client-ui-cot-translation` | yes | Optional machine translation of expanded reasoning, preserving original Session text |
| `@infinity-agent/experimental-client-ui-forge` | yes | Sidebar panel for a Session's change requests, with a worktree option for new Sessions and its Host Remote |
| `@infinity-agent/experimental-client-ui-stats` | no | Per-turn and per-step context, timing, cache, and tool-cost table contributed as an experimental conversation View |
| `@infinity-agent/experimental-client-ui-voice-input` | no | Record speech and insert editable text into the conversation draft |
| `@infinity-agent/experimental-computer-use-cua-driver-mcp` | yes | Experimental computer use through an installed Cua Driver MCP executable |
| `@infinity-agent/experimental-computer-use-cua-driver-native` | no | Experimental computer-use provider embedding the Cua Driver native npm SDK |
| `@infinity-agent/experimental-cua-macos` | yes | macOS native provider for shared Computer Use application and window objects |
| `@infinity-agent/experimental-forge` | yes | Provider-neutral change request registry with shared status polling |
| `@infinity-agent/experimental-forge-github` | yes | GitHub provider for the experimental forge registry, read through the GitHub CLI on the host |
| `@infinity-agent/experimental-forge-session` | yes | Binds change requests to the Session that created, pushed, or tracked them |
| `@infinity-agent/experimental-inspector` | yes | Experimental cross-realm CDP hub for Host debugging and Client Runtime inspection |
| `@infinity-agent/experimental-ptc-runtime-python` | yes | CPython subprocess implementation of the Infinity agent PTC execution seam |
| `@infinity-agent/experimental-session-inspector` | no | Experimental virtualized Session log and live Chat group/node inspectors |
| `@infinity-agent/experimental-speech-to-text` | yes | Experimental speech recognition with independently selectable providers |
| `@infinity-agent/experimental-speech-to-text-sensevoice` | yes | Local SenseVoice ONNX transcription with a managed sherpa-onnx process |
| `@infinity-agent/experimental-subagent-oar` | yes | Experimental one-shot subagents through OAR runtimes |
| `@infinity-agent/experimental-tool-subagent-oar` | yes | Delegate standalone tasks to configured external subagent providers |
| `@infinity-agent/experimental-tool-worktree` | no | Model tool that creates and enters a new Git worktree |
| `@infinity-agent/experimental-translator` | yes | Machine translation with reusable Session results |
| `@infinity-agent/experimental-worktree` | yes | Creates a named Git worktree and changes the calling Session working directory |
| `@infinity-agent/hooks-claude-code` | yes | Bridge plugin: run a Claude Code hooks.json / settings hook config on the Infinity agent interception seams |
| `@infinity-agent/hooks-codex` | yes | Bridge plugin: run a Codex hooks.json hook config on the Infinity agent interception seams |
| `@infinity-agent/plugin-recommendations` | no | Official plugin suggestions with explicit user activation and persistent conversation decisions |
| `@infinity-agent/session-title-all-prompts-llm` | yes | All-user-messages LLM provider plugin for Infinity agent session titles |
| `@infinity-agent/skill-badge` | no | Bundled dsh badge skill provider for Infinity agent |
| `@infinity-agent/tool-ralph` | yes | Model-facing fresh-agent Ralph loop over the workflow and subagent seams |
| `@infinity-agent/tool-session-query` | yes | Workspace-authorized model-facing session history search, trace, and event read tools |
| `@infinity-agent/tool-terminal` | yes | Six model-facing persistent PTY tools with owner isolation and generic background-job integration |
| `@infinity-agent/webhook` | no | Fire-and-forget webhook rule runtime that creates Workspace-backed Infinity agent Sessions |
| `@infinity-agent/webhook-github` | yes | Signed GitHub HTTP webhook adapter for the Infinity agent webhook runtime |

## extensions

| Package | Config | Description |
|---|---|---|
| `@infinity-agent/client-ui-cordis` | no | Cordis dynamic-plugin definition card: the keyed cordis_define tool row with its run/stop switch |
| `@infinity-agent/cordis-client-runner` | no | Browser half of dynamic dual-half plugin packages: event subscription, closure evaluation, guard facade, and loader entries |
| `@infinity-agent/cordis-host-runner` | yes | Dynamic package definition registry, host-half sandbox lifecycle, and invoke handler table for model-mounted dual-half packages |
| `@infinity-agent/tool-cordis` | no | Read-only runtime API inspection for Harness plugin development |

## feedback

| Package | Config | Description |
|---|---|---|
| `@infinity-agent/command-feedback` | no | Log-only session feedback: the record event, the sessionFeedback Host Remote, and the human-facing slash command |
| `@infinity-agent/message-feedback` | yes | Canonical Session-log ratings and notes for finalized assistant messages |

## fs

| Package | Config | Description |
|---|---|---|
| `@infinity-agent/fs-local` | yes | Local-filesystem implementation of the Infinity agent filesystem seam (ctx.fs) |
| `@infinity-agent/fs-observation-policy` | no | File-context policy plugin for the Infinity agent — observed-state, read-before-edit, and version-guarded write/edit added over the ctx.fs provider seam through the fs/* event gate (no service API) |
| `@infinity-agent/fs-sandbox` | yes | Sandbox-enforcing implementation of the Infinity agent filesystem seam: fences write/edit by the per-call sandbox mode (read-only denies mutation, workspace-write contains it to the workspace + temp roots) while reads pass through |
| `@infinity-agent/tool-fs` | yes | Model-facing filesystem tools (read, write, edit) over the Infinity agent filesystem seam (ctx.fs) |
| `@infinity-agent/tool-fs-search` | yes | Model-facing filesystem discovery tools (glob, grep) backed by the packaged ripgrep binary (@vscode/ripgrep) |
| `@infinity-agent/tool-str-replace-editor` | yes | Model-facing view, create, literal replace, and line insert tool over the Harness filesystem service |

## goal

| Package | Config | Description |
|---|---|---|
| `@infinity-agent/command-goal` | no | Human-facing slash command for persisted same-session goals |
| `@infinity-agent/goal` | yes | Event-sourced same-session goal state and lifecycle service for the Infinity agent |
| `@infinity-agent/goal-round-driver` | no | Race-fenced same-session goal-round driver |
| `@infinity-agent/tool-goal` | yes | Model-facing same-session goal tools with execution-time authority checks |

## guard

| Package | Config | Description |
|---|---|---|
| `@infinity-agent/repeat-tool-reminder` | yes | Repeat-tool-call guard plugin: advisory reminders when an agent loops on identical tool calls |
| `@infinity-agent/tool-call-timeout-policy` | no | Tool-call timeout policy: a tools/execute wrapper that arms a per-tool deadline on exec.signal and returns TOOL_TIMEOUT when it wins |

## host

| Package | Config | Description |
|---|---|---|
| `@infinity-agent/host-directory-picker-auto` | no | Adaptive chooser of the directory-picker seam: resolves the host situation at boot and mounts the native or browse backend for the Infinity agent web GUI host |
| `@infinity-agent/host-directory-picker-browse` | yes | In-app browsing backend of the directory-picker seam (listing/creation primitives over the host filesystem) |
| `@infinity-agent/host-directory-picker-native` | no | Native-OS-chooser backend of the directory-picker seam for the Infinity agent web GUI host |
| `@infinity-agent/host-frontend-static` | yes | SPA dist server for the Web shell: owns the webserver fallback seat, serving explicit index entries and static assets with traversal rejection and 404 misses |
| `@infinity-agent/host-open-in-app` | yes | Host half of open-in-app: resolved application catalog, icons, and the launch endpoint as three webServer routes |
| `@infinity-agent/host-plugin-inventory` | no | Read-only Remote projection of current Cordis Loader plugin state |
| `@infinity-agent/host-product-telemetry-otel` | yes | Explicit product usage events exported through OpenTelemetry HTTP logs |
| `@infinity-agent/host-webserver` | yes | Web route-registration plugin: HTTP and upgrade routes, per-Peer index transform taps, and static dist fallback |

## interaction

| Package | Config | Description |
|---|---|---|
| `@infinity-agent/commands` | no | Plugin-owned human command registry for Infinity agent UIs |
| `@infinity-agent/permission-presets` | yes | User-facing permission presets (ctx.permissionPresets) for the Infinity agent: one product-level Permissions select bundling the sandbox-mode and approval-policy knobs, written through to their own session events |
| `@infinity-agent/tool-ask-user` | yes | Model-facing ask_user_question tool over the ctx.userQuestions seam |
| `@infinity-agent/user-approval` | yes | User-approval seam (ctx.approval) for the Infinity agent: one-shot permission decisions dispatched to composed answerers over the approval/request waterfall, fail-closed by default |
| `@infinity-agent/user-questions` | no | Abstract user-questions seam (ctx.userQuestions) for asking the human during agent runs |

## jobs

| Package | Config | Description |
|---|---|---|
| `@infinity-agent/jobs-local` | yes | Process-local implementation of the Infinity agent background job registry seam |
| `@infinity-agent/tool-jobs` | yes | Model-facing background job control tools (job_output, job_list, job_kill) over the ctx.jobs registry |

## llm

| Package | Config | Description |
|---|---|---|
| `@infinity-agent/deepseek-llm-api-extensions` | no | Additive request-field registry for the official DeepSeek LLM API adapter |
| `@infinity-agent/llm` | no | Provider-neutral LLM service interface for the Infinity agent |
| `@infinity-agent/llm-deepseek-account` | yes | DeepSeek account provider authentication and discovery |
| `@infinity-agent/llm-deepseek-api-key` | yes | DeepSeek api-key provider authentication and discovery |
| `@infinity-agent/llm-pi-ai` | yes | pi-ai-backed DeepSeek adapter for the Infinity agent LLM seam (design-verification twin of dsh-llm-deepseek) |
| `@infinity-agent/llm-retry` | yes | Provider-routed LLM request retry policy for the Infinity agent |
| `@infinity-agent/plugin-package-inventory-deepseek` | yes | Active Loader-backed plugin package inventory for official DeepSeek LLM API requests |
| `@infinity-agent/token-meter` | yes | Replay-aware token measurement service (ctx.tokenMeter) for the Infinity agent |

## lsp

| Package | Config | Description |
|---|---|---|
| `@infinity-agent/lsp` | no | Abstract LSP capability seam (ctx.lsp) for the Infinity agent — language-server provider registry keyed by branded id and extension mapping, order-independent per-query selection, normalized definition/references/implementation/hover requests and results, and the LspError taxonomy |
| `@infinity-agent/lsp-stdio` | yes | Generic stdio language-server provider for the Infinity agent LSP capability seam (ctx.lsp) — spawns configured servers, translates JSON-RPC, and serves transient-open goToDefinition/findReferences/goToImplementation/hover queries in the host filesystem namespace |
| `@infinity-agent/tool-lsp` | yes | Model-facing lsp tool over the Infinity agent LSP capability seam (ctx.lsp) — one read-only tool with goToDefinition/findReferences/goToImplementation/hover operations, one-based UTF-16 cursor coordinates, bounded location rendering, and hover normalization |

## mcp

| Package | Config | Description |
|---|---|---|
| `@infinity-agent/mcp-client` | yes | MCP client bridge: connects to MCP servers and registers their tools on ctx.tools |
| `@infinity-agent/mcp-manager` | yes | MCP server manager: a settings-driven fleet of mcp-client instances with runtime status, restart, and probe |
| `@infinity-agent/mcp-resources` | no | Scoped MCP resource discovery and reading through shared model tools |

## plan

| Package | Config | Description |
|---|---|---|
| `@infinity-agent/plan-mode` | yes | Logged per-agent plan mode with deployment guidance, a direct slash command, and a user-reviewed exit |

## preset

| Package | Config | Description |
|---|---|---|
| `@infinity-agent/agent-preset` | yes | Declare an Agent capability composition in Cordis YAML |
| `@infinity-agent/agent-preset-registry` | yes | Declarative Agent preset registry and profile-backed editing |
| `@infinity-agent/persona` | yes | Composition-authored deployment persona section for the Infinity agent |

## ptc-runtime

| Package | Config | Description |
|---|---|---|
| `@infinity-agent/ptc-runtime-node` | yes | Node PTC execution with async function, REPL and VM Script evaluators and optional retained state |

## sandbox

| Package | Config | Description |
|---|---|---|
| `@infinity-agent/sandbox-local` | yes | Local process-sandbox backends for the Infinity agent sandbox seam: bwrap, the npm-distributed landlock-run launcher, macOS Seatbelt, or the Windows ACL restricted-token runner — functionally probed, fail-closed |
| `@infinity-agent/sandbox-policy` | yes | Per-call sandbox policy resolver and current model context: deployment fallbacks plus each session's mode and workspace root, shared by every enforcing capability family |

## schedule

| Package | Config | Description |
|---|---|---|
| `@infinity-agent/schedule` | yes | Host-wide durable reminders with shared management and delivery to existing or new Sessions |
| `@infinity-agent/tool-schedule` | no | Model-facing scheduled task tools (schedule_create, schedule_list, schedule_view, schedule_edit) over the Host ctx.schedule service |

## sdk

| Package | Config | Description |
|---|---|---|
| `@infinity-agent/sdk-jsonrpc-server` | yes | Stdio JSON-RPC server plugin for out-of-process Infinity agent SDK clients |

## session

| Package | Config | Description |
|---|---|---|
| `@infinity-agent/message-quotes` | no | Selected-text quotation and Markdown blockquote presentation |
| `@infinity-agent/session-checkpoint-policy` | no | Semantic session durability checkpoints before model requests and tool side effects |
| `@infinity-agent/session-log-deepseek` | yes | Incremental lossless session-log request extension for the official DeepSeek LLM API |
| `@infinity-agent/session-persistence-jsonl` | yes | JSONL durable session persistence backend for the Infinity agent |
| `@infinity-agent/session-projection` | no | Session-projection seam: the merge-extensible projection type table, the provider contract, and the ctx.sessionProjections registry serving whole current values of log-derived per-session state |
| `@infinity-agent/session-projection-cache` | yes | Persisted projection cache (ctx.sessionProjectionCache): durable per-session checkpoint records on the session_projcache storage domain (per-record layout), throttled write-behind, and the cached listing read |
| `@infinity-agent/session-stats` | no | Whole-log conversation counts and wall times projection (sessionStats) for the Infinity agent |
| `@infinity-agent/session-telemetry-otel` | yes | Feedback-authorized Session logs over byte-bounded OpenTelemetry HTTP requests |
| `@infinity-agent/session-title` | yes | Log-backed session title service and provider registry for the Infinity agent |
| `@infinity-agent/session-title-first-prompt-llm` | yes | First-message LLM provider plugin for Infinity agent session titles |
| `@infinity-agent/session-turn-outline` | no | Whole-log turn outline projection (turnOutline) for the Infinity agent |
| `@infinity-agent/tool-working-directory` | no | Read and change the active Session working directory |
| `@infinity-agent/working-directory` | yes | Session working directories with durable changes and model context |

## session-query

| Package | Config | Description |
|---|---|---|
| `@infinity-agent/session-log-export` | yes | Web Session-log ZIP export and Session Markdown copy |
| `@infinity-agent/session-query-sqlite` | yes | Concrete ctx.sessionQuery backend with SQLite FTS5 search |

## settings

| Package | Config | Description |
|---|---|---|
| `@infinity-agent/settings` | no | Abstract user-settings seam (ctx.settings) for the Infinity agent |

## shell

| Package | Config | Description |
|---|---|---|
| `@infinity-agent/bash-local` | yes | Local-subprocess implementation of the Infinity agent bash executor seam |
| `@infinity-agent/bash-sandbox` | yes | Sandbox-consuming implementation of the Infinity agent bash executor seam (confines every command via ctx.sandbox, reports denial/enforcement result facts) |
| `@infinity-agent/pwsh-local` | yes | Local PowerShell implementation of the Infinity agent bash executor seam |
| `@infinity-agent/pwsh-sandbox` | yes | Sandbox-consuming implementation of the Infinity agent PowerShell executor seam (confines every command via ctx.sandbox, reports denial/enforcement result facts) |
| `@infinity-agent/shell-env` | yes | Tool-independent managed INFINITY_* shell environment registry |
| `@infinity-agent/tool-bash` | yes | Model-facing bash tool with optional generic background-job and sandbox-escalation support |
| `@infinity-agent/tool-bash-persistent` | yes | Model-facing owner-scoped persistent Bash tool backed by the Harness PTY service |
| `@infinity-agent/tool-pwsh` | yes | Model-facing pwsh tool over the bash executor seam |
| `@infinity-agent/tool-pwsh-persistent` | yes | Model-facing owner-scoped persistent PowerShell tool backed by the Harness PTY service |

## skill

| Package | Config | Description |
|---|---|---|
| `@infinity-agent/skill` | yes | Agent skill provider registry for the Infinity agent |
| `@infinity-agent/skill-filesystem` | yes | Local filesystem skill provider for the Infinity agent |
| `@infinity-agent/skill-office` | yes | Bundled Word, PowerPoint, and Excel workflows and LibreOffice Kit operations |
| `@infinity-agent/tool-skill` | yes | Model-facing skill loading tool for the Infinity agent |
| `@infinity-agent/tool-workspace-dependencies` | yes | The load_workspace_dependencies tool: absolute paths into a bundled Python, Node.js, and pnpm payload |

## spill

| Package | Config | Description |
|---|---|---|
| `@infinity-agent/spill-local` | yes | Local-filesystem implementation of the Infinity agent spill storage seam (private session-scoped files) |
| `@infinity-agent/spill-policy` | yes | Token-budgeted tool-result retention with recoverable text and image paths |

## ssh

| Package | Config | Description |
|---|---|---|
| `@infinity-agent/fs-ssh` | no | Filesystem provider over the shared POSIX SSH helper |
| `@infinity-agent/sandbox-ssh` | no | Remote POSIX sandbox argv provider over the shared SSH helper |
| `@infinity-agent/ssh` | yes | Shared OpenSSH connection and versioned POSIX remote helper |
| `@infinity-agent/subprocess-ssh` | no | Subprocess and terminal provider over the shared POSIX SSH helper |

## storage

| Package | Config | Description |
|---|---|---|
| `@infinity-agent/storage` | no | Storage hub (ctx.storage): named backend registry plus mounted data-form facilities for the Infinity agent |
| `@infinity-agent/storage-domain` | yes | Domain data form (ctx.storage.domain): schema-validated, event-emitting KV domains over storage backends for the Infinity agent |
| `@infinity-agent/storage-json` | yes | JSON file KV storage backend for the Infinity agent storage hub |
| `@infinity-agent/storage-sqlite` | yes | SQLite storage backend (kv facet) for the Infinity agent storage hub |

## subagent

| Package | Config | Description |
|---|---|---|
| `@infinity-agent/subagent` | yes | Abstract subagent seam (ctx.subagents): named-provider registry for delegating to child agents |
| `@infinity-agent/subagent-acp` | yes | Out-of-process ACP subagent backend: drives a child agent in a spawned subprocess over the Agent Client Protocol |
| `@infinity-agent/subagent-claude-code` | yes | One-shot Claude Code subagent provider over the official Agent SDK |
| `@infinity-agent/subagent-codex` | yes | One-shot Codex subagent provider over the official app-server protocol |
| `@infinity-agent/subagent-dsh-sdk` | yes | Out-of-process SDK subagent backend: drives a child Infinity agent runtime subprocess over stdio JSON-RPC through the TypeScript SDK client |
| `@infinity-agent/subagent-fork-in-process` | yes | In-process fork subagent backend: runs a child agent seeded with a prefix of the parent's log |
| `@infinity-agent/subagent-spawn-in-process` | yes | In-process spawn subagent backend: runs a fresh child agent on ctx.agents |
| `@infinity-agent/tool-subagent` | yes | Model-facing subagent delegation tool over the ctx.subagents seam |
| `@infinity-agent/tool-subagent-control` | yes | Shared messaging, interruption, and child discovery tools for subagents |

## subprocess

| Package | Config | Description |
|---|---|---|
| `@infinity-agent/subprocess-local` | no | Local-subprocess implementation of the Infinity agent subprocess seam |

## team

| Package | Config | Description |
|---|---|---|
| `@infinity-agent/agent-team` | yes | Shared task DAG and change waits for subagent trees |
| `@infinity-agent/tool-agent-team` | yes | Scoped model-facing Agent Teams tools over ctx.agentTeams |

## telemetry

| Package | Config | Description |
|---|---|---|
| `@infinity-agent/otel` | no | Cordis service for independent ordinary-event and byte-bounded Session-log OTLP channels |

## terminal

| Package | Config | Description |
|---|---|---|
| `@infinity-agent/terminal` | no | Persistent PTY session seam for the Infinity agent — owner-scoped ids, backend registry, interactive sends, reads, signals, and awaited cleanup |
| `@infinity-agent/terminal-bash` | yes | Persistent shell PTY backend over the Infinity agent subprocess terminal primitive |

## test-support

| Package | Config | Description |
|---|---|---|
| `@infinity-agent/llm-replay` | yes | Replay LLM plugin: short-circuits llm/stream with model chunks reconstructed from a recorded session JSONL (keyless snapshot tests) |

## todo

| Package | Config | Description |
|---|---|---|
| `@infinity-agent/tool-todo` | yes | Model-facing todo_write tool over the Infinity agent event-sourced session log |

## typert

| Package | Config | Description |
|---|---|---|
| `@infinity-agent/typert-loader` | yes | Loader integration for generated Typert package contributions |

## web

| Package | Config | Description |
|---|---|---|
| `@infinity-agent/tool-web` | yes | Model-facing web tools (web_search, web_fetch) over the Infinity agent web capability seam (ctx.web) |
| `@infinity-agent/web` | yes | Abstract web access capability seam (ctx.web) for the Infinity agent — search/fetch provider registry, registration-order-independent selection, request/result vocabulary, and the WebError taxonomy |
| `@infinity-agent/web-deepseek-api` | yes | DeepSeek Search and Fetch API providers for the Infinity agent web capability seam (ctx.web) |
| `@infinity-agent/web-fetch-http` | yes | Anonymous HTTP(S) fetch provider for the Infinity agent web capability seam (ctx.web) |
| `@infinity-agent/web-search-deepseek` | yes | DeepSeek-backed search provider (native web_search via the Anthropic-compatible API) for the Infinity agent web capability seam (ctx.web) |

## workflow

| Package | Config | Description |
|---|---|---|
| `@infinity-agent/tool-workflow` | yes | Model-facing workflow tool: run a JavaScript orchestration script over ctx.workflowEngine |
| `@infinity-agent/workflow-ptc` | yes | Workflow orchestration in the shared sandboxed Node PTC runtime |

## workspace

| Package | Config | Description |
|---|---|---|
| `@infinity-agent/workspace` | no | Workspace entity registry (ctx.workspaceRegistry): durable workspace records with validated session attachment over the domain data form for the Infinity agent |
