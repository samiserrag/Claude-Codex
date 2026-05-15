Previous experiment terminal turn: Experiment 3 / E3-A-claude-critique.md

# E3-C - Codex adapter inspection

## Agent
Codex

## Phase
critique

## Schema
Reuses the Experiment 1 turn-note schema explicitly. Includes Evidence Basis
and Portability Findings sections per the active PROTOCOL.md additions. This
is a read-only adapter/security inspection turn. It does not install, clone,
vendor, enable, register, execute, approve, commit, push, create branches,
open PRs, or move any proposed bridge path to approved.

## Files touched this turn
- `.agent-handoff/turns/E3-C-codex-adapter-inspection.md` (created)

## Decisions (binding)
- No inspected candidate satisfies the E3-A governance contract as-is.
  Signed events, schema validation, append-only audit, quarantine, and
  approval gates remain ours to implement above any transport.
- CCB and Claude Squad are AGPL-3.0. Do not copy, vendor, fork, or adapt their
  code into this repo unless Sami explicitly accepts AGPL obligations or a
  separate license exists. Treat them as pattern reads for now.
- The official Codex Claude Code plugin and direct `codex mcp-server` route are
  Apache-2.0 and license-compatible, but both expose real config and execution
  surface. They are candidates to wrap later, not candidates to use as-is.
- The command in the prompt,
  `claude mcp add --scope project --transport stdio codex -- codex mcp-server`,
  is best classified as the direct MCP-server path, not the marketplace plugin
  path. The marketplace plugin path is `openai/codex-plugin-cc` with
  `/plugin marketplace add openai/codex-plugin-cc` and
  `/plugin install codex@openai-codex`.
- E3-C does not update `COLLAB.md` because E3-B owns that handoff update and
  E3-C was explicitly told not to race on it.

## Inspection sources
- CCB / Claude Code Bridge: https://github.com/SeemSeam/claude_codex_bridge
  (verified redirect from `bfly123/claude_codex_bridge`)
- CCB license: https://raw.githubusercontent.com/SeemSeam/claude_codex_bridge/main/LICENSE
- CCB shared-memory/config docs:
  https://github.com/SeemSeam/claude_codex_bridge/blob/main/docs/ccb-project-shared-memory-plan.md
- Claude Squad: https://github.com/smtg-ai/claude-squad
- Claude Squad license:
  https://raw.githubusercontent.com/smtg-ai/claude-squad/main/LICENSE.md
- Claude Squad public docs: https://smtg-ai.github.io/claude-squad/
- Official Codex plugin for Claude Code:
  https://github.com/openai/codex-plugin-cc
- Codex plugin license:
  https://raw.githubusercontent.com/openai/codex-plugin-cc/main/LICENSE
- Codex plugin command/agent/hook files under
  `plugins/codex/{commands,agents,hooks}` in `openai/codex-plugin-cc`
- OpenAI Codex repo: https://github.com/openai/codex
- OpenAI Codex license:
  https://raw.githubusercontent.com/openai/codex/main/LICENSE
- OpenAI Codex security policy:
  https://raw.githubusercontent.com/openai/codex/main/SECURITY.md
- Codex MCP interface:
  `openai/codex:codex-rs/docs/codex_mcp_interface.md`
- Codex app-server interface:
  `openai/codex:codex-rs/app-server/README.md`
- Codex MCP docs:
  https://developers.openai.com/codex/mcp
- Codex approvals/security docs:
  https://developers.openai.com/codex/agent-approvals-security
- Claude Code MCP docs:
  https://code.claude.com/docs/en/mcp

## Candidate 1: CCB / claude_codex_bridge

URL verified: `https://github.com/bfly123/claude_codex_bridge` redirects to
`https://github.com/SeemSeam/claude_codex_bridge`.

### A. License analysis
- Exact license: AGPL-3.0. The repository LICENSE states Affero GPL v3 and
  explicitly calls out open-source/network-use obligations and separate
  closed-source commercial licensing.
- Compatibility with eventual open-source release: compatible only if our
  distribution strategy accepts AGPL terms for derived/combined work. It is
  not compatible with a permissive open-source release if we copy or adapt CCB
  code into this repo.
- Code-reuse restrictions: no vendoring, copying, or fork-based adaptation
  unless the repo is released under compatible AGPL terms or a separate license
  is obtained. Documentation-level pattern borrowing remains lower risk.

### B. Security model analysis
- Authentication/authorization: delegates to underlying CLIs/providers.
  README config supports per-agent `key`, `url`, and `model`; docs warn not to
  commit real API keys. No independent cryptographic authorization model was
  documented.
- Network exposure: local terminal/tmux orchestrator by default. Network
  exposure comes from underlying LLM provider calls or configured API URLs, not
  from a documented public bridge listener.
- Secret handling: project `.ccb/ccb.config` may contain provider URLs and
  key material. CCB docs recommend ignoring `.ccb` by default because it may
  contain runtime state, provider-state, local config, session data,
  auth/config projections, and private memory.
- Prompt-injection defenses: no documented prompt-injection detection or
  quarantine. The shared-memory docs add runtime coordination rules to steer
  agents toward CCB `ask`, but that is coordination guidance, not a security
  boundary.
- Quarantine/recovery patterns: has useful operational recovery primitives:
  `ccb kill`, `ccb reinstall`, heartbeat timeout handling, worktree isolation,
  and provider-state isolation. No signed-event quarantine or malicious-input
  recovery channel was documented.
- Known warnings: API keys may appear in config if users put them there;
  `.ccb` is local/ignored by default; implicit delegation requires the ask
  skill basics or agents may use provider-native hidden subagents instead.

### C. Config-surface analysis
- Installation modifies system/user command surface by installing/linking
  global `ccb` and `ask` commands. Source/dev installs link back to the clone;
  managed updates can replace the installed runtime.
- Project surface: `.ccb/ccb.config`, `.ccb/ccb_memory.md`,
  `.ccb/agents/<agent>/...`, provider-state homes, generated memory bundles,
  runtime state, and optional worktrees.
- Global provider state: current docs try to avoid mutating `~/.claude`,
  `~/.codex`, `~/.gemini`, or OpenCode global config for shared memory
  projection, but provider-specific launch/config inheritance is still a
  substantial integration surface.
- Approval boundaries: CCB itself does not provide E3-A-style approval gates.
  It relies on underlying provider permission modes and user choices. The
  `ccb -s` safe-start path preserves configured/manual permission behavior.
- Sandbox interactions: optional git worktrees isolate working sets; provider
  sandboxes remain provider-owned. No repo-level signed import sandbox exists.
- Cross-tool context flow: `.ccb/ccb_memory.md` and generated provider-facing
  memory bundles move project context into managed Claude/Codex/Gemini/OpenCode
  homes. `/ask` and `$ask` move messages between named agents.

### D. Governance contract fitness
CCB cannot satisfy E3-A directly. It has useful transport/state patterns
(`ask`, named agents, project memory, provider-state isolation, heartbeat
timeouts), but lacks signed envelopes, root trust registry, deterministic
schema validation, append-only accepted-event storage, quarantine, and
proposed-to-approved gates. To use it at all, we would need an external wrapper
that only passes validated E3-A events through CCB or converts CCB messages
into E3-A events before import.

### E. Verdict
borrow pattern only

Reason: mature and useful ideas, but AGPL plus missing governance layer makes
direct dependency too costly for this repo's current release path.

## Candidate 2: Claude Squad

URL verified: `https://github.com/smtg-ai/claude-squad`.

### A. License analysis
- Exact license: AGPL-3.0.
- Compatibility with eventual open-source release: compatible only if our
  release accepts AGPL obligations for copied/adapted code. It is not suitable
  for permissive code reuse.
- Code-reuse restrictions: do not copy, vendor, or fork into this repo without
  explicit AGPL acceptance or separate licensing. Worktree/TUI workflow ideas
  can be studied as prior art.

### B. Security model analysis
- Authentication/authorization: delegates to the launched agent program and
  to `gh` for GitHub operations. README says Codex use requires setting
  `OPENAI_API_KEY`; other agents depend on their own local auth.
- Network exposure: local TUI plus tmux sessions. Network operations come from
  launched agents and GitHub push flows, not from a documented public service.
- Secret handling: configuration lives in `~/.claude-squad/config.json`.
  Secret protection is not documented beyond relying on underlying tools and
  environment variables.
- Prompt-injection defenses: none documented.
- Quarantine/recovery patterns: isolates each task in a git worktree and has
  stored-instance reset. No signed quarantine, malicious-input handling, or
  cryptographic recovery path.
- Known warnings: README advertises an experimental `--autoyes` mode that
  auto-accepts prompts for Claude Code and Aider. The TUI can commit/push
  branches and can checkout/commit changes, so approval discipline is external
  to this tool.

### C. Config-surface analysis
- Installation modifies the user command surface through Homebrew or a shell
  install script, producing `claude-squad`/`cs`.
- Project/repo surface: creates git worktrees and branches per session.
- Global/user surface: writes `~/.claude-squad/config.json`; depends on `tmux`
  and `gh`.
- Approval boundaries: human review UI/diff workflow helps users inspect work,
  but the tool also exposes `--autoyes` and push/commit actions. No E3-A
  event approval gate exists.
- Sandbox interactions: git worktree isolation is useful, but it is not a
  security sandbox. Launched agents keep their own filesystem and command
  policies.
- Cross-tool context flow: primarily session supervision. It does not document
  a structured cross-agent message/audit protocol comparable to E3-A.

### D. Governance contract fitness
Claude Squad cannot satisfy the E3-A contract. It can contribute worktree and
review-queue patterns, but it does not provide signed event provenance,
canonical payload validation, append-only audit, quarantine, or explicit
proposal/approval state transitions.

### E. Verdict
borrow pattern only

Reason: worktree/session-management patterns are relevant, but AGPL and lack
of governance primitives make dependency or fork inappropriate for E3.

## Candidate 3: Official OpenAI Codex plugin for Claude Code

URL verified: `https://github.com/openai/codex-plugin-cc`.

### A. License analysis
- Exact license: Apache-2.0.
- Compatibility with eventual open-source release: compatible with permissive
  or copyleft open-source release, subject to preserving license/notice terms.
- Code-reuse restrictions: attribution, license copy, NOTICE handling, and
  patent-termination terms. No AGPL-style network copyleft.

### B. Security model analysis
- Authentication/authorization: uses the local Codex CLI authentication. If
  Codex is already signed in, the same ChatGPT/API-key state is used. If not,
  `/codex:setup` tells the user to run `codex login`; setup can ask before
  installing Codex with npm if Codex is missing.
- Network exposure: delegates through the local Codex CLI and Codex app
  server on the same machine. Network use is the same as local Codex: upstream
  OpenAI/model/provider calls and any user-enabled tools.
- Secret handling: no separate plugin auth store documented. Secrets remain in
  Codex's local auth/config state. Project `.codex/config.toml` can affect
  model/effort only when the project is trusted.
- Prompt-injection defenses: the plugin defines narrow command prompts:
  `/codex:review` and `/codex:adversarial-review` are read-only; status/result
  commands disable model invocation; the rescue subagent is a thin forwarder.
  These are routing constraints, not content-level injection detection.
- Quarantine/recovery patterns: background job lifecycle is visible through
  `/codex:status`, `/codex:result`, and `/codex:cancel`. No signed-event
  quarantine or recovery registry exists.
- Known warnings: optional review gate uses a Claude `Stop` hook and the README
  warns it can create long-running Claude/Codex loops and drain usage limits.

### C. Config-surface analysis
- Installation modifies Claude Code plugin marketplace/install state through
  `/plugin marketplace add openai/codex-plugin-cc`, `/plugin install
  codex@openai-codex`, and `/reload-plugins`.
- Plugin contents add slash commands, one `codex:codex-rescue` subagent,
  skills/prompts/scripts, and optional hooks. The hook file includes
  `SessionStart`, `SessionEnd`, and `Stop`; the Stop review gate has a long
  timeout.
- It uses the global `codex` binary and inherited Codex configuration:
  user-level `~/.codex/config.toml` plus trusted project `.codex/config.toml`.
- Approval boundaries: `/codex:setup` asks before npm install; review commands
  ask wait/background when not specified; rescue defaults to write-capable Codex
  unless the user requested read-only/review/diagnosis. Actual file/command
  approval then depends on Codex's own sandbox/approval configuration.
- Sandbox interactions: inherits Codex sandbox and approval policy. Installing
  the plugin itself is a Claude config change and remains a Sami stopgate.
- Cross-tool context flow: Claude sends task/review text through the plugin's
  companion scripts into Codex. Results, job ids, and Codex session ids flow
  back into Claude; tasks can be resumed directly in Codex.

### D. Governance contract fitness
This is the strongest practical transport candidate among the four, but it
still needs a wrapper layer. A future approved experiment would need to:

- make read-only/review the default unless an E3-A event explicitly grants a
  write-capable task;
- emit every delegated task/result as an E3-A signed envelope;
- validate imported results against schema before treating them as state;
- write accepted events append-only and quarantine malformed/untrusted output;
- disable or carefully scope the Stop review gate until loop policy exists.

### E. Verdict
wrap

Reason: Apache-licensed, first-party, and already shaped around review/rescue
flows, but not a governance/audit implementation.

## Candidate 4: `codex mcp-server` standalone from `openai/codex`

URL verified: `https://github.com/openai/codex`. The public tree contains
`codex-rs/mcp-server` plus the architecture document
`codex-rs/docs/codex_mcp_interface.md`.

### A. License analysis
- Exact license: Apache-2.0.
- Compatibility with eventual open-source release: compatible with permissive
  or copyleft open-source release, subject to standard Apache notice/license
  terms.
- Code-reuse restrictions: attribution, license copy, NOTICE handling, and
  patent-termination terms. No AGPL network copyleft.

### B. Security model analysis
- Authentication/authorization: exposes account APIs for Codex auth state,
  login, logout, and rate limits. Codex supports API-key auth and ChatGPT
  managed/device-code login, with tokens persisted by Codex and refreshed by
  Codex.
- Network exposure: `codex mcp-server` is documented as standard MCP over
  stdio. Direct Claude registration with `--transport stdio` should launch it
  as a local child process. The related app-server has other transports
  including stdio, unix socket, websocket, and off; websocket is explicitly
  experimental/unsupported and rejects requests with an `Origin` header.
- Secret handling: credentials live in Codex's normal auth/config state under
  `CODEX_HOME`/`~/.codex`, not in this repo by default. MCP client config may
  still pass env vars or cwd depending on registration.
- Prompt-injection defenses: inherits Codex defaults. OpenAI docs say local
  Codex defaults to network off in workspace-write, and warn that enabling
  network/web search increases prompt-injection risk. The MCP server itself
  does not document E3-A-style prompt-injection quarantine.
- Quarantine/recovery patterns: supports interruption, cancellation,
  account/logout, thread read/list/resume/fork, and server-initiated
  approvals. No signed-event quarantine or provenance registry exists.
- Known warnings: the MCP server interface is explicitly experimental and
  subject to change without notice.

### C. Config-surface analysis
- Project-scoped Claude setup with
  `claude mcp add --scope project --transport stdio codex -- codex mcp-server`
  writes project MCP configuration (`.mcp.json`) and is shared/versionable by
  design. Claude Code docs say project-scoped MCP servers require approval
  before use.
- User/global Codex surface: uses installed `codex` binary and
  `~/.codex/config.toml`; can also read trusted project `.codex/config.toml`.
- API surface is broad. The app-server/MCP interface includes thread/turn
  control, config read/write, account login/logout, model listing, apps,
  skills, hooks, filesystem read/write/remove/copy/watch, command execution,
  and experimental process spawning.
- Approval boundaries: Codex can issue `applyPatchApproval` and
  `execCommandApproval` server-to-client requests that require allow/deny
  responses. Whether Claude exposes those to a human exactly as needed must be
  proven in a future enabled experiment.
- Sandbox interactions: inherits Codex sandbox and approval policies.
  Documentation says local Codex defaults to no network and workspace-limited
  writes in normal local modes, but config can change those defaults.
- Cross-tool context flow: Claude MCP client can start/resume/fork Codex
  threads and inject turns; Codex streams events and can ask the client for
  approvals. This is rich enough for a live bridge, and therefore too broad to
  enable without an allow-list wrapper.

### D. Governance contract fitness
`codex mcp-server` can be a low-level transport for E3-A events, but not a
governance layer. A safe future wrapper would need to:

- expose only the minimal thread/turn/status/result methods initially;
- block config/account/fs/process APIs unless separately approved;
- translate each outbound/inbound message into an E3-A event envelope;
- require schema validation before import;
- write accepted events append-only and quarantine rejected envelopes;
- map Codex approval requests to our stopgate/event model instead of treating
  MCP client approval as sufficient governance.

### E. Verdict
wrap

Reason: Apache-licensed and first-party, but experimental and broad. It should
only be enabled behind a narrow project-scoped wrapper/allow-list after Sami
approves that exact registration.

## Cross-candidate findings
- License split is decisive: CCB and Claude Squad are AGPL-3.0; first-party
  OpenAI routes are Apache-2.0.
- The terminal orchestrators solve workspace visibility and parallelism. They
  do not solve provenance, schema validation, or approvals as durable repo
  state.
- The first-party OpenAI routes solve Claude-to-Codex invocation. They do not
  solve the repo governance contract and expose enough config/runtime surface
  to require explicit allow-listing.
- Direct MCP registration is not "less risky" just because it avoids a
  third-party bridge. It changes project Claude MCP config and gives Claude a
  live control plane into Codex.
- No candidate should define our contract. The E3-A envelope remains the
  contract; adapters are replaceable delivery mechanics.

## Open questions for the other agent
- Does Claude agree that AGPL candidates should stay pattern-only unless Sami
  explicitly chooses an AGPL-compatible release/dependency strategy?
- Does Claude think the official plugin or direct MCP path should be the first
  future enabled transport experiment, assuming E3-B lands the file-based
  trust bootstrap first?
- What minimum allow-list should a future direct `codex mcp-server` wrapper
  expose: review/task/status/result only, or any thread/read/resume surface?

## Blockers (must-fix before continuing)
1. Before any CCB or Claude Squad dependency/fork/vendoring decision, Sami
   must choose an AGPL-compatible strategy or reject code reuse.
2. Before any official plugin or direct MCP setup, E3-B or a later approved
   turn must provide the signed-event validation/import layer; neither path
   may become the source of truth by itself.
3. Before direct `codex mcp-server` registration, define a minimal method
   allow-list and prove how Claude surfaces Codex approval requests to the
   human operator.

## Nits (suggested, not required)
- If bridge work continues, add a small license matrix to the eventual
  adapter-selection turn so future agents do not re-open AGPL analysis.
- Treat plugin Stop-hook review gate as a separate sub-experiment from basic
  Claude-to-Codex delegation.
- Record exact installed Claude/Codex versions again immediately before any
  future enabled transport test; these surfaces are moving quickly.

## Browser verification
- Tool used: N/A
- URL or file path opened: N/A
- Action: N/A
- Visible outcome: N/A
- Console/network issues: N/A

Reason: E3-C is public-document/security inspection only. No app behavior,
browser surface, plugin, MCP server, or bridge was enabled.

## Evidence Basis
- USER SAID: Sami separately authorized E3-C on 2026-05-15 as read-only
  inspection of CCB, Claude Squad, the official Codex plugin, and
  `codex mcp-server`, with no setup approval implied.
- FILE VERIFIED: read `.agent-handoff/PROTOCOL.md`, `.agent-handoff/COLLAB.md`,
  `.agent-handoff/digests/002-prior-art-audit.md`,
  `.agent-handoff/turns/E2-007-claude-rescope-revision.md`, `AGENTS.md`,
  `docs/test-project.md`, `docs/chrome-runners.md`, latest turn
  `.agent-handoff/turns/E3-A-claude-critique.md`, and source E3-A spec
  `.agent-handoff/turns/E3-A-codex-envelope-schema.md`.
- FILE VERIFIED: inspected the public README/LICENSE/docs surfaces listed in
  `Inspection sources` above. Used the GitHub API only for read-only public
  file/tree reads; no clone, install, plugin registration, MCP registration, or
  candidate execution occurred.
- AGENT SUMMARY: prior-art digest 002 already identified CCB as a mature
  tmux/team substrate but unresolved on license/security depth; this E3-C
  confirms AGPL and expands the security/config inspection to Claude Squad and
  the first-party OpenAI routes.
- INFERENCE: "wrap" for first-party OpenAI paths means use only after an E3-A
  event/audit wrapper exists; it does not mean enable now. "borrow pattern
  only" for AGPL paths means no code dependency under current assumptions.
- UNKNOWN: exact runtime behavior of Claude Code when servicing
  `codex mcp-server` approval requests, because E3-C did not register or run
  the server; exact local plugin install paths, because E3-C did not install
  the plugin; whether Sami ultimately wants a permissive, copyleft, or dual
  licensing strategy for this repo.

## Portability Findings
- Repo-local assumptions: direct project-scoped Claude MCP registration writes
  project MCP configuration (`.mcp.json`); the official plugin can read trusted
  project `.codex/config.toml`; CCB writes `.ccb/`; Claude Squad creates git
  worktrees/branches.
- Machine/local-tool assumptions: CCB requires Python 3.10+ and tmux; Claude
  Squad requires tmux and `gh`; official plugin requires Node 18.18+ plus local
  Codex CLI/auth; `codex mcp-server` requires an installed Codex binary.
- Browser/connector assumptions: none. Browser QA was not part of E3-C.
- Any workaround used: shell network access to GitHub was blocked in the
  sandbox, so read-only `gh api` calls were rerun with explicit escalation.
  This fetched public docs/tree contents only and did not clone or execute
  candidate code.

## Handoff
- Next agent: Claude
- Specific ask: critique this E3-C inspection before any adapter is selected.
  Focus on whether the license classifications, config-surface boundaries, and
  "wrap" versus "borrow pattern only" verdicts are defensible against the E3-A
  governance contract. Do not install, clone, vendor, enable, register MCP,
  change configs, commit, push, open PRs, or treat any adapter path as approved.
