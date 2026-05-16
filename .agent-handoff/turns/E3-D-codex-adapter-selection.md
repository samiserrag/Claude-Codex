Previous experiment terminal turn: Experiment 3 / E3-B-FIX-001-claude-critique.md

# E3-D - Codex adapter selection

## Agent
Codex

## Phase
architecture

## Schema
Reuses the Experiment 1 turn-note schema explicitly. Includes Evidence Basis
and Portability Findings sections per the active PROTOCOL.md additions. This
is an adapter-selection design turn only. It selects the first future adapter
experiment to propose, but it does not enable, install, register, configure,
run, or approve any adapter. Per the active Stopgate Rule, only Sami can move
any proposed adapter setup from proposed to approved.

## Files touched this turn
- `.agent-handoff/turns/E3-D-codex-adapter-selection.md` (created)
- `.agent-handoff/COLLAB.md` (edited)

## Evidence Basis
- USER SAID: Sami explicitly authorized E3-D on 2026-05-15 as adapter-selection
  design only, with no installs, plugin setup, MCP registration, `.mcp.json`
  modification, bridge enablement, global config changes, commits, pushes,
  PRs, or branches.
- USER SAID: Sami's framing recommendation is direct `codex mcp-server`
  wrapper first, official Codex plugin second, and Stop-hook behavior isolated
  as a separate sub-experiment.
- FILE VERIFIED: `.agent-handoff/PROTOCOL.md` contains the active Stopgate
  Rule: only Sami can move proposed items to approved.
- FILE VERIFIED: `.agent-handoff/COLLAB.md` records E3-D authorization at
  commit `0a1f326` and says E3 enablement remains a separate per-adapter
  sub-experiment requiring explicit Sami approval.
- FILE VERIFIED: `E3-A-codex-envelope-schema.md` defines the event envelope,
  canonical JSON, signature coverage, accepted-event filenames, quarantine
  behavior, and import policy that every adapter must satisfy.
- FILE VERIFIED: `E3-B-codex-trust-bootstrap.md` implemented the file-based
  root trust registry, Codex coordinator registration, signed events, and
  no-dependency verifier against the binding reference path.
- FILE VERIFIED: `E3-B-FIX-001-codex-verifier-hardening.md` hardened verifier
  behavior with top-level `ok`, nonzero exit on failed critical checks, and
  filename sequence-prefix validation.
- FILE VERIFIED: `E3-B-FIX-001-claude-critique.md` accepted the verifier
  hardening with zero blockers.
- FILE VERIFIED: `E3-C-codex-adapter-inspection.md` classified CCB and Claude
  Squad as AGPL pattern-only candidates, and the official Codex plugin plus
  direct `codex mcp-server` as Apache-2.0 wrap candidates.
- FILE VERIFIED: `E3-C-claude-critique.md` endorsed those verdicts and
  recommended a direct-MCP starting allow-list of `thread.start`,
  `thread.continue`, `turn.start`, `turn.read`, `turn.cancel`, and
  `status.read` only.
- FILE VERIFIED: `E2-007-claude-rescope-revision.md` makes Tier 0 manual
  handoff and Tier 1 file inbox/outbox the binding reference path; adapters are
  exploratory delivery mechanics that do not replace the governance contract.
- FILE VERIFIED: `AGENTS.md`, `docs/test-project.md`, `docs/chrome-runners.md`,
  and the latest turn note were read before this edit.
- INFERENCE: Direct MCP is not safer than the official plugin in absolute
  terms. It is the better first wrapper target because its boundary is lower
  level and explicit enough to enforce a narrow allow-list and approval mapping
  before any convenience plugin behavior enters the experiment.
- UNKNOWN: exact runtime behavior of Claude Code when a future project-scoped
  direct MCP server returns Codex approval requests remains untested because
  no live MCP registration or transport was enabled in this turn.

## Sami authorization basis

Verbatim authorization provided by Sami:

```text
Approved: run E3-D as adapter-selection design only.
Scope:
- No installs, no plugin setup, no MCP registration, no .mcp.json,
  no bridge enablement, no global config changes, no commits,
  pushes, PRs, or branches.
- Compare: file-based default, official Codex plugin wrapper,
  direct codex mcp-server wrapper, CCB pattern-only, Claude Squad
  pattern-only.
- Select the first future enabled adapter experiment, but do not
  enable it.
- Define exact preconditions, method/command allow-list,
  signed-event import/export boundary, approval-surfacing
  requirements, rollback/disable path, and verification evidence.
- Treat CCB and Claude Squad as pattern-only unless Sami
  separately approves AGPL-compatible use.
- Hard stop after E3-D and hand off for critique.
```

## Decisions (binding)
- The file-based default remains the binding reference and current working
  path. Any adapter is a replaceable delivery mechanism layered above E3-A
  signed events, E3-B trust bootstrap, and E3-B-FIX-001 verifier behavior.
- I endorse Sami's recommended adapter order: first future enablement candidate
  is a direct `codex mcp-server` wrapper; second future enablement candidate is
  the official Codex plugin wrapper.
- The direct-MCP choice is not a risk downgrade. It is selected first because
  the wrapper can sit at a small method boundary, block broad MCP capabilities
  by default, and make approval requests explicit before plugin commands,
  subagents, or hooks add extra behavior.
- The official plugin remains second because it is first-party and practical,
  but its slash commands, rescue subagent, plugin install state, inherited
  Codex config, and optional Stop hook are a larger behavioral bundle than the
  primitive direct-MCP transport.
- CCB and Claude Squad remain pattern-only. No code copying, vendoring,
  forking, or adaptation from either AGPL project is proposed unless Sami
  separately approves AGPL-compatible use or a separate license path.
- The first direct-MCP wrapper proposal starts with exactly these exposed
  methods: `thread.start`, `thread.continue`, `turn.start`, `turn.read`,
  `turn.cancel`, and `status.read`. Everything else is blocked by default.
- Blocked direct-MCP surface includes filesystem, command execution, config,
  account/auth, process spawning, model management, app, hook, skill, and any
  unrecognized or experimental methods until separately scoped and approved.
- Every adapter message crossing the wrapper boundary must be represented as an
  E3-A signed envelope before delivery or before being treated as actionable
  input. Unsigned live transport output is not repo state.
- Codex approval requests such as `applyPatchApproval` and
  `execCommandApproval` are not approvals by themselves. The wrapper must turn
  them into Sami-visible signed stopgate events and fail closed unless explicit
  Sami approval is recorded through the accepted governance path.
- No Stop-hook behavior is part of the second-candidate basic plugin
  experiment. Stop-hook review must be isolated in its own sub-experiment with
  independent enable/disable controls, loop caps, and rollback proof.

## Comparison matrix

| Candidate | License | Governance-contract fitness | Security/config surface | Install/runtime cost | Primary risk | Eligible status |
|---|---|---|---|---|---|---|
| File-based default | Repo-owned path; no external adapter license | Best fit and currently working on disk. It is the binding reference for signed envelopes, append-only events, quarantine, and human-readable handoff. | Repo files under `.agent-handoff/`, ignored local private keys, and Node verifier only. No live transport or global config. | Already present. Requires no install; verifier requires local Node with built-in Ed25519. | Slow/manual delivery and no live bridge ergonomics. | binding reference |
| Official Codex plugin wrapper (`openai/codex-plugin-cc`) | Apache-2.0, subject to license/NOTICE preservation | Wrap candidate only. It can help route Claude-to-Codex work, but it does not provide E3-A signing, schema validation, quarantine, or Stopgate enforcement as repo state. | Claude Code plugin marketplace/install state, slash commands, rescue subagent, optional hooks, Codex auth/config inheritance, possible Stop-hook loop surface. | Plugin install and reload, local Codex CLI/auth, Node 18.18+ if plugin setup scripts require it; no setup authorized here. | Convenience bundle can hide boundaries; Stop hook can create long-running loops or usage drain if included too early. | second-future-enable-candidate |
| Direct `codex mcp-server` wrapper (`openai/codex`) | Apache-2.0, subject to license/NOTICE preservation | Wrap candidate only. Best first low-level primitive because the wrapper can enforce a small method allow-list and signed-event boundary around an explicit stdio transport. | Project MCP registration, Codex stdio child process, inherited Codex auth/config, broad experimental MCP API including thread/turn/config/account/fs/command/process surfaces. | Installed Codex binary and auth; later project-scoped MCP registration if Sami approves; exact interface/version pinning required. No setup authorized here. | Broad experimental control plane if the wrapper fails open or exposes more than the six approved methods. | first-future-enable-candidate |
| CCB pattern-only (`SeemSeam/claude_codex_bridge`) | AGPL-3.0 as observed in E3-C | Does not satisfy E3-A directly. Useful patterns for named agents, tmux orchestration, memory/state isolation, and recovery commands only. | `.ccb` project state, provider configs, shared memory projections, tmux sessions, global command surface, provider auth inheritance. | Python 3.10+, tmux, installed `ccb`/`ask` commands, project config and runtime state. | AGPL obligations plus config/secrets surface; no signed-event governance layer. | pattern-only |
| Claude Squad pattern-only (`smtg-ai/claude-squad`) | AGPL-3.0 as observed in E3-C | Does not satisfy E3-A directly. Useful patterns for worktree/session supervision and review queues only. | `~/.claude-squad/config.json`, tmux sessions, `gh`, git worktrees/branches, launched agents' own auth/config. | Homebrew or shell install, tmux, `gh`, local agent CLIs and auth. | AGPL obligations plus `--autoyes`, commit/push, and branch/worktree control outside our stopgate model. | pattern-only |

No inspected candidate receives "use as-is." No inspected candidate is fully
rejected as prior art; CCB and Claude Squad stay useful as pattern reads, but
not as code dependencies under the current license posture.

## First future enabled adapter selection

I endorse Sami's direct-MCP-first recommendation, with one important framing:
direct MCP is the riskier primitive, but the cleaner first wrapper target. The
official plugin is likely easier for a human to invoke, but it bundles command
prompts, a rescue subagent, plugin installation state, inherited Codex config,
and optional hooks. That makes it harder to prove a minimal governance
boundary in the first enablement test.

The first future adapter sub-experiment should therefore be:

- adapter: direct `codex mcp-server` wrapper;
- transport: local stdio only;
- registration: project-scoped only if Sami separately approves that exact
  `.mcp.json` or equivalent setup;
- exposed methods: the six-method allow-list in this note;
- task mode: signed-envelope import/export only;
- default action on ambiguity: deny, quarantine, or ask Sami;
- success condition: evidence that the wrapper cannot bypass signed events,
  cannot expose blocked MCP methods, and cannot hide Codex approval requests.

The official plugin should be second. Its basic wrapper experiment should test
plugin installation and read-only/basic delegation without the Stop hook. The
Stop hook should be its own separate experiment because it changes session-end
behavior and can create feedback loops independent of ordinary plugin use.

## Wrapper specification for first adapter

### Preconditions

Before any direct-MCP setup attempt, all of the following must be true:

1. Existing signed-event artifacts still verify. Run
   `node .agent-handoff/src/trust-bootstrap.mjs verify` from the repo root and
   require exit 0 plus top-level `"ok": true`.
2. The verifier self-test still passes if included in the future scope:
   `node .agent-handoff/src/trust-bootstrap.mjs self-test` must report passing
   canonical JSON, duplicate-key rejection, and Ed25519 sign/verify checks.
3. A specific per-adapter Sami authorization is recorded in `COLLAB.md`. It
   must name the adapter, exact files that may be edited, exact setup commands
   allowed, exact rollback commands or file restoration steps, and exact
   verification evidence expected.
4. The E3-D proposal has been critiqued by Claude and either accepted or
   revised. Model consensus alone is not approval; Sami must explicitly move
   any proposed setup to approved.
5. A registered signer exists for every coordinator that will emit actionable
   envelopes. If Claude or a wrapper coordinator will send tasks to Codex,
   that coordinator needs a Sami-rooted registration and possession proof
   before its events can be accepted as actionable.
6. Version pins are recorded before setup: Node version if the wrapper or
   verifier uses Node, Codex CLI version, Claude Code version, the observed
   Codex MCP interface source/version, and the wrapper source revision. For a
   direct-MCP-only experiment, the official plugin version must be recorded as
   `not installed / not in scope`; the plugin version is pinned separately
   only for the second-candidate experiment.
7. Pre-wrapper state is captured: current `.mcp.json` presence and contents,
   relevant repo-local `.codex/` config if any, relevant Claude project MCP
   state, active `codex mcp-server` processes, and accepted event/trust file
   hashes. Secret values must be redacted, not copied into turn notes.
8. Rollback/disable procedure is written and dry-run tested against a stub or
   harmless local state before the live wrapper is enabled.
9. The direct-MCP wrapper has a fail-closed policy for unknown methods, schema
   errors, signature failures, duplicate events, stale events, prompt-injection
   indicators, and missing approval events.

### Method and command allow-list

The wrapper exposes only these Codex MCP methods in the first direct-MCP
experiment:

- `thread.start`
- `thread.continue`
- `turn.start`
- `turn.read`
- `turn.cancel`
- `status.read`

The wrapper may launch only the pinned local Codex server process needed for
the transport:

- `codex mcp-server`

The launch must use the resolved pinned Codex binary path, repo root as cwd,
minimal inherited environment, and stdio transport only. The command string
must not be user-provided or event-provided.

Everything else is blocked by default, including but not limited to:

- filesystem read/write/remove/copy/watch methods;
- command execution and shell methods;
- config read/write/trust methods;
- account/auth/login/logout/rate-limit methods;
- process spawning methods;
- model-management methods;
- app, skill, hook, plugin, or extension methods;
- any experimental or unknown MCP method;
- any request to change sandbox, network, approval, or global config policy.

The future setup sub-experiment may allow read-only version checks such as
`codex --version`, `codex mcp-server --help`, and
`node .agent-handoff/src/trust-bootstrap.mjs verify`, but those are operator
verification commands, not methods exposed through the wrapper.

I do not push back on Claude's six-method recommendation. Starting broader
would blur the core experiment. If a later task genuinely needs filesystem,
command, account, config, or process capability, that need should be a separate
sub-experiment with its own signed-event payload shape and approval tests.

### Signed-event import/export boundary

The wrapper boundary is:

- outbound to Codex MCP: signed E3-A envelope first, live transport second;
- inbound from Codex MCP: parse, schema validate, signature verify, import or
  quarantine first, actionable use second.

Outbound rules:

- Every outbound task, continuation, cancellation, or status request that
  represents coordinator intent must be emitted as an E3-A signed envelope
  before delivery to the MCP server.
- Outbound task payloads should use existing E3-A event kinds such as
  `task.requested`, `message.created`, `task.in_flight`, or
  `stopgate.requested` where semantically appropriate. New event kinds are
  only proposals until Sami approves a schema expansion.
- The wrapper writes outbound envelopes append-only to the appropriate
  outbox/event path before sending the corresponding MCP request.
- If signing fails, payload hash mismatches, sequence allocation fails, or the
  signer is not registered, the wrapper does not send the MCP request.

Inbound rules:

- Every inbound message/result must cross the governance boundary as an E3-A
  envelope. Raw MCP output that is not inside a signed envelope is not
  actionable input.
- The wrapper must run schema validation, payload-hash validation, signature
  verification, registry/key validity checks, sequence/hash-chain checks,
  nonce/replay checks, parent checks, branch/base-commit checks, freshness
  checks, and policy/safety checks before accepting the input.
- Accepted inbound events are written append-only to
  `.agent-handoff/events/<coordinator_id>/<sequence_16>-<event_hash>.json`.
- Rejected inbound data is quarantined per E3-A rules under
  `.agent-handoff/quarantine/`, with redacted snippets only. Raw rejected
  payloads, secrets, token-like values, and suspected prompt-injection payloads
  are not stored.
- If the wrapper needs to preserve raw MCP output for debugging, it may emit a
  signed, non-actionable wrapper-observed event that says "untrusted transport
  output observed"; that observation still must pass E3-A validation before it
  is accepted, and it does not make the raw output actionable.
- A live MCP result that cannot be represented as a valid signed envelope is
  not actionable repo state, even if it appears in a terminal, Claude chat, or
  Codex session.

### Approval-surfacing requirements

Codex MCP approval requests must be surfaced as governance events, not hidden
client prompts.

For `applyPatchApproval`, the wrapper emits a signed `stopgate.requested`
event containing:

- originating thread id and turn id;
- requested files and repo-relative paths;
- patch summary and bounded redacted diff metadata;
- whether the patch would modify signed events, trust files, local secrets,
  global config, `.mcp.json`, plugin config, generated worktrees, or other
  stopgated areas;
- the wrapper's recommended default response: deny unless a matching accepted
  approval exists.

For `execCommandApproval`, the wrapper emits a signed `stopgate.requested`
event containing:

- originating thread id and turn id;
- command argv as structured data, not shell text when possible;
- cwd, environment keys, sandbox/network implications, and expected write
  locations;
- whether the command touches installs, MCP registration, plugin setup, git
  operations, deletion, global config, network-dependent setup, or approval
  policy;
- the wrapper's recommended default response: deny unless a matching accepted
  approval exists.

The wrapper must then pause or deny. It may send an allow response to Codex
only when a matching accepted `stopgate.approved` or other explicitly approved
Sami authorization event exists. A model-authored recommendation, a Claude
approval, a Codex approval request, or absence of objection is not sufficient.

The Stopgate Rule remains in force:

- no automated proposed-to-approved transition;
- no auto-approval of installs, bridge enablement, MCP registration, plugin
  install, global config changes, git operations, or destructive actions;
- no treating MCP client approval UX as the repo governance source of truth.

### Rollback and disable path

The first direct-MCP sub-experiment must have a tested disable path before it
is enabled.

Direct-MCP disable steps:

1. Stop accepting new wrapper requests by flipping the repo-local wrapper
   enablement flag or removing the project wrapper entry defined in the future
   setup plan.
2. Cancel any active wrapper-managed turn through `turn.cancel` if available
   and safe; otherwise record that cancellation was unavailable and proceed to
   process shutdown.
3. Kill the wrapper process and its child `codex mcp-server` process using the
   recorded pid file or supervisor state under ignored local state.
4. Restore project MCP registration to pre-wrapper bytes. If `.mcp.json` did
   not exist before setup, remove the created project `.mcp.json`; if it did
   exist, restore the captured pre-wrapper content exactly.
5. Restore any repo-local wrapper config to its pre-wrapper state. Do not edit
   global Claude or Codex config unless Sami separately authorized that exact
   rollback step.
6. Verify no wrapper-managed `codex mcp-server` process remains active.
7. Run `node .agent-handoff/src/trust-bootstrap.mjs verify` and require exit
   0 with top-level `"ok": true`.
8. Attempt a blocked wrapper call and verify it fails closed with
   `adapter_disabled` or equivalent non-actionable status.
9. Write a signed disable/rollback event or turn note recording what changed,
   what was restored, and the verification evidence.

Plugin removal is not part of the first direct-MCP adapter because no plugin is
installed for that path. The second-candidate plugin experiment must define
its own exact uninstall/disable steps before enablement, including removal of
`codex@openai-codex` from Claude Code plugin state, hook disablement, plugin
reload if required, and verification that no plugin Stop hook remains active.
If a plugin install somehow exists during the direct-MCP rollback, the direct
rollback records that as an unexpected precondition failure and stops for Sami
rather than improvising global/plugin-state edits.

### Verification evidence required before safe enablement

A future direct-MCP wrapper is not safe to enable until it produces this
evidence:

- Baseline verifier evidence: `node .agent-handoff/src/trust-bootstrap.mjs
  verify` exits 0 and reports top-level `"ok": true` before and after the
  wrapper test.
- Unit tests for method allow-list: the six allowed methods pass to the stub
  transport; representative blocked methods from filesystem, command, config,
  account, process, hook, skill, model, and unknown namespaces fail closed.
- Unit tests for command launch policy: only the pinned `codex mcp-server`
  launch is possible; event payloads cannot alter the command, cwd, args, or
  environment.
- Unit tests for envelope construction: outbound payloads produce canonical
  payload hashes, event hashes, signatures, monotonically allocated sequence
  values, and expected filenames.
- Unit tests for import rejection: missing signature, bad payload hash,
  duplicate nonce, duplicate sequence, unknown event kind, stale base commit,
  signer mismatch, and prompt-injection indicators go to quarantine before
  action.
- Signed-event round-trip test: a stub Codex result is exported as a signed
  envelope, imported through the verifier, accepted append-only, and replayed
  deterministically.
- Allow-list enforcement integration test: a stub MCP server tries every
  blocked method category and the wrapper denies without emitting an action.
- Approval-mapping test: stub `applyPatchApproval` and `execCommandApproval`
  requests produce signed `stopgate.requested` events, pause or deny by
  default, and only allow when a matching accepted Sami approval event is
  present.
- Quarantine test: malformed or unsigned MCP output is quarantined with
  redacted snippets and does not alter accepted state.
- Rollback dry-run: enabling against a stub, disabling, restoring pre-wrapper
  state, killing child processes, and re-running verifier all produce recorded
  pass/fail evidence.
- Operator evidence: the future turn note records exact commands run, exit
  codes, event filenames/hashes created, process ids started/stopped, config
  files changed/restored, and any approval prompts surfaced.

## Second-candidate Stop-hook isolation

The official plugin should split into at least two future sub-experiments:

1. Basic plugin wrapper, Stop hook disabled:
   - install/use the official plugin only if Sami explicitly approves;
   - verify plugin version, install path, and commands;
   - keep read-only/basic delegation separate from session-end hooks;
   - emit and import signed envelopes around delegated tasks/results;
   - prove plugin use can be disabled without touching signed events.
2. Stop-hook isolation:
   - enable only the plugin Stop hook behavior under a separate explicit Sami
     authorization;
   - use a disposable session and a one-shot review task;
   - cap loop depth at one Stop-triggered Codex review;
   - default to read-only Codex behavior;
   - emit a signed `stopgate.requested` or hook-observed event for every
     automatic trigger;
   - expose a local kill/disable switch independent of basic plugin commands;
   - verify that disabling the Stop hook leaves basic plugin functionality
     intact and that basic plugin disablement removes the hook too.

The Stop hook should not be treated as a convenience option inside the basic
plugin experiment. It changes control flow, usage budget, and loop risk enough
to deserve its own evidence and rollback path.

## Open questions for Sami
- Do you accept direct `codex mcp-server` wrapper as the first future adapter
  enablement candidate and the official Codex plugin as second?
- Do you approve the initial direct-MCP method allow-list exactly as
  `thread.start`, `thread.continue`, `turn.start`, `turn.read`,
  `turn.cancel`, and `status.read`, with all filesystem/command/config/account
  and process methods blocked?
- Before direct-MCP enablement, do you want a Claude coordinator key
  registered, a neutral wrapper coordinator registered, or a Codex-only loopback
  test first?
- What Sami-visible approval UX is required before the wrapper may answer
  Codex `applyPatchApproval` or `execCommandApproval`: signed event only,
  signed event plus COLLAB summary, or signed event plus explicit turn-note
  handoff?
- Should any future adapter be allowed to perform write-capable Codex turns in
  its first enablement test, or should the first test be read-only/status/result
  only?
- Are CCB and Claude Squad permanently pattern-only for this repo, or should a
  later legal/licensing question stay open for AGPL-compatible use?
- Should Apache NOTICE/license preservation be a precondition before any
  wrapper distribution, or only before publishing the eventual kit?
- Do you want the optional official plugin Stop hook considered at all in a
  future iteration, or should it remain out of scope until the direct-MCP
  wrapper has proven the approval model?
- Should rollback verification require manual inspection of Claude/Codex UI
  state, or is file/process/verifier evidence sufficient for the first direct
  MCP experiment?

## Open questions for the other agent
- Does Claude agree that direct MCP should be first despite its higher raw
  attack surface because it is the cleaner primitive for a wrapper proof?
- Does Claude see any missing method category in the blocked-by-default list?
- Does Claude agree that a registered Claude or wrapper coordinator is a
  precondition before actionable cross-agent signed events can flow from Claude
  into Codex?
- Does Claude see any rollback step that would require global config edits and
  therefore must be separated before the first direct-MCP enablement?

## Blockers (must-fix before continuing)
- None for E3-D as a design-selection turn.
- Before any adapter enablement, Sami must explicitly approve a per-adapter
  sub-experiment recorded in `COLLAB.md`; this turn does not approve setup.
- Before direct MCP can become actionable, the chosen sending coordinator
  identity must be registered and able to sign valid E3-A envelopes.

## Nits (suggested, not required)
- A future docs turn should add a durable adapter license matrix outside this
  turn note if the repo continues toward an open-source kit.
- A future schema turn may want dedicated payload schemas for
  `stopgate.requested` approval mapping so wrapper implementations do not
  invent incompatible payload shapes.
- A future test-hardening turn can still add the deferred
  refusal-to-overwrite fixture from E3-B critique; it is not a blocker for
  this adapter-selection design.

## Browser verification
- Tool used: N/A
- URL or file path opened: N/A
- Action: N/A
- Visible outcome: N/A
- Console/network issues: N/A

Reason: E3-D is architecture/design selection only. No app behavior, browser
surface, plugin, MCP server, live transport, or wrapper runtime changed.

## Portability Findings
- Repo-local assumptions: the binding reference remains ordinary repo files
  under `.agent-handoff/`. Future adapter wrappers must not make live transport
  the source of truth.
- Machine/local-tool assumptions: the first future direct-MCP adapter depends
  on a pinned local Codex binary and whatever runtime the wrapper uses. The
  current verifier path depends on local Node with built-in Ed25519. No install
  was performed in this turn.
- Browser/connector assumptions: none. Chrome-first browser rules remain
  relevant only for UI/browser QA, not this design turn.
- Any workaround used: none. This turn read repo files and wrote prose only.

## Handoff
- Next agent: Claude
- Specific ask: perform the E3-D architecture-consultant critique of this
  adapter-selection design. Focus on whether the comparison matrix, direct-MCP
  first selection, six-method allow-list, signed-event boundary,
  approval-surfacing requirements, rollback/disable path, verification evidence,
  and Stop-hook isolation are sufficient and correctly scoped. Stay read-only.
  Do not implement, install dependencies, enable bridges, register MCP, edit
  `.mcp.json`, modify global config, commit, push, open a PR, create a branch,
  delete files, or treat any adapter proposal as approved.
