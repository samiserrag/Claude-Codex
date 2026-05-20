# E5-L - Codex Reflection Paths Template Design

## Agent
Codex

## Phase
design

## Files touched this turn
- `.agent-handoff/turns/E5-L-codex-reflection-paths-template-design.md` (created)
- `.agent-handoff/COLLAB.md` (edited; handoff update only)

## Decisions (binding)
- E5-K is accepted as a successful Phase 2 kit dashboard-template
  implementation.
- E5-L is design-only. No reflection directory, improvement directory, template,
  protocol, starter-turn-note, dashboard, root-doc, product/runtime, pilot, or
  live Open Mic Colorado file is created or modified in this turn.
- Reflection remains proposal-only. No proposal becomes approved without Sami's
  explicit approval of exact files and scope.
- Mixed reflection proposals must be split before implementation. Unclear
  proposals must be classified before action.
- No automation, notification/wake, Hermes, Claude Dreams, bridges, MCP,
  plugins, timers, cron, webhooks, global config, installs, staging, commit,
  push, branch, or PR occurred.

## Read-First Basis

Read before designing:
- `.agent-handoff/PROTOCOL.md`
- `.agent-handoff/COLLAB.md`
- `.agent-handoff/turns/E5-I-codex-phase-1-backport-implementation.md`
- `.agent-handoff/turns/E5-I-claude-critique-phase-1-backport-implementation.md`
- `.agent-handoff/turns/E5-K-codex-dashboard-template-implementation.md`
- `.agent-handoff/turns/E5-K-claude-critique-dashboard-template-implementation.md`
- `kit/v1/README.md`
- `kit/v1/.agent-handoff/PROTOCOL.md.template`
- `kit/v1/.agent-handoff/COLLAB.md.template`
- `kit/v1/.agent-handoff/DASHBOARD.md.template`
- `kit/v1/.agent-handoff/prompts/starter-turn-note.md`
- `kit/v1/.gitignore.snippet`

The E5-K Claude critique file was visible locally and was read; there is no
E5-K critique visibility gap for this design turn.

## Design Question 1: Reflection Paths Later

Recommended later path model:

- `.agent-handoff/reflections/harness/`
  - For proposal-only improvements to the collaboration scaffold: protocol,
    dashboard, packet vocabulary, role routing, visibility handling, turn-note
    shape, kit templates, or backport mechanics.
- `.agent-handoff/reflections/project/`
  - For proposal-only improvements to the repo or product under collaboration:
    product docs, bugs, tests, UI, cleanup, deployment risk, or project
    decisions.
- `.agent-handoff/reflections/mixed-needs-classification/`
  - Temporary holding area for mixed or unclear observations. Items here cannot
    become builder work until split or classified.

Paths considered but not recommended for the first implementation:

- `.agent-handoff/improvements/backlog.md`
  - Useful later if proposal volume grows, but premature before any reflection
    proposals exist. A backlog creates a second planning surface and could
    drift from `COLLAB.md`.
- `.agent-handoff/improvements/proposals/`
  - Too generic for the current dual-level model. It risks hiding the
    harness/project boundary that the protocol intentionally makes explicit.

## Design Question 2: First Implementation Paths

Recommended first implementation after E5-L critique:

- Add a reusable proposal template at:
  - `kit/v1/.agent-handoff/prompts/reflection-proposal-template.md`
- Add kit-only placeholder directories with `.gitkeep` files:
  - `kit/v1/.agent-handoff/reflections/harness/.gitkeep`
  - `kit/v1/.agent-handoff/reflections/project/.gitkeep`
  - `kit/v1/.agent-handoff/reflections/mixed-needs-classification/.gitkeep`
- Add a short `kit/v1/README.md` note and Included Files entries explaining
  that reflection paths are optional proposal-only surfaces.

Recommended not to create in the first implementation:

- Live Claude-Codex `.agent-handoff/reflections/` directories. Create live
  reflection paths only when a specific Claude-Codex reflection proposal is
  authorized or filed.
- Any `.agent-handoff/improvements/` path. Revisit only after several
  proposals prove a backlog/index is needed.
- Any `DASHBOARD.md` change unless the implementation explicitly needs a
  one-line pending-reflection pointer.

## Design Question 3: Proposal Template Location

Yes, kit/v1 should include a reflection proposal template.

Recommended path:

```text
kit/v1/.agent-handoff/prompts/reflection-proposal-template.md
```

Rationale:
- It matches the existing kit convention for prompt/template material under
  `.agent-handoff/prompts/`.
- It keeps proposal structure close to `starter-turn-note.md` without bloating
  the starter note.
- It avoids creating live Claude-Codex reflection artifacts before a real
  reflection proposal exists.

Optional later active Claude-Codex mirror, only if separately approved:

```text
.agent-handoff/prompts/reflection-proposal-template.md
```

## Design Question 4: Required Template Fields

Recommended template fields:

- Title
- Improvement Classification: `harness` | `project` | `mixed` | `unclear`
- Observed friction
- Evidence
- Proposed change
- Risk
- Files that would change
- Reviewer
- Human Decision Packet
  - State
  - Decision needed from Sami
  - Why Sami is needed
  - Consensus recommendation
  - Divergent opinions
  - Options
  - Risk / tradeoff
  - Exact approval text, if approval is required
  - Technical packet
- Technical Review Packet, if needed
  - Needed
  - Intended reviewer
  - Question
  - Evidence paths
  - Constraints
  - Output requested
  - Status: `not prepared` | `prepared local-only` | `sent` | `responded` |
    `incorporated` | `summarized`
- Exact approval text
- Out-of-scope / no-touch list
- Artifact visibility
- Next safe action

The proposal itself may be the `Technical packet` when no separate technical
packet exists.

## Design Question 5: Mixed Proposals

Mixed proposals must not go directly to implementation.

Required handling:
- If a proposal contains both harness and project/product changes, split it
  into separate `harness` and `project` proposals before any builder turn.
- If classification is unclear, file it under
  `.agent-handoff/reflections/mixed-needs-classification/` and set the next
  safe action to classification, not implementation.
- If the mixed or unclear proposal affects approval/risk, include a Human
  Decision Packet that asks Sami to choose the classification or split.
- If technical classification would benefit from another model, prepare a
  Technical Review Packet; third-model review is advice, not approval.

## Design Question 6: Dashboard Appearance Without Clutter

Reflection proposals should appear in `DASHBOARD.md` only as a small operational
pointer, not as a full proposal body.

Recommended dashboard shape:
- Add or use one compact field when relevant:
  - `Reflection proposals: {{NONE_OR_PENDING_COUNT_AND_LATEST_PATH}}`
- If a proposal requires Sami attention, reflect that through the existing
  Human attention state and Human Decision Packet.
- If a proposal is local-only and needed by a non-local reviewer, reflect that
  through Artifact visibility as `action needed`.
- Do not copy proposal details into the dashboard. The durable proposal lives
  in the reflection file; `COLLAB.md` remains authoritative for current state.

No dashboard change is recommended until the reflection template/path
implementation is actually authorized.

## Design Question 7: Out Of Scope

Remain out of scope for E5-L and the immediate Phase 3 implementation:

- automation
- notification/wake
- live Open Mic Colorado work
- pilot repo writes
- Claude Dreams / Hermes
- bridges / MCP / plugins
- product/runtime changes
- global config
- installs
- live Claude-Codex `.agent-handoff/DASHBOARD.md` creation
- live Claude-Codex `.agent-handoff/reflections/` creation, unless a later
  approval explicitly scopes a first live reflection proposal
- `.agent-handoff/improvements/` backlog/proposal paths

## Design Question 8: Safest First Implementation Shape

Recommended next implementation after Claude critique and Sami approval:

E5-M: kit-only reflection proposal template and optional proposal directories.

Proposed allowed files for that implementation:
- `kit/v1/.agent-handoff/prompts/reflection-proposal-template.md`
- `kit/v1/.agent-handoff/reflections/harness/.gitkeep`
- `kit/v1/.agent-handoff/reflections/project/.gitkeep`
- `kit/v1/.agent-handoff/reflections/mixed-needs-classification/.gitkeep`
- `kit/v1/README.md`
- `.agent-handoff/COLLAB.md`
- `.agent-handoff/turns/E5-M-codex-reflection-template-implementation.md`

Proposed no-touch list:
- live `.agent-handoff/reflections/`
- live `.agent-handoff/improvements/`
- live `.agent-handoff/DASHBOARD.md`
- `.agent-handoff/PROTOCOL.md`
- `.agent-handoff/prompts/starter-turn-note.md`
- root README/AGENTS/CLAUDE
- product/runtime files
- pilot repo
- live Open Mic Colorado
- automation, notification/wake, bridges, MCP/plugins, Hermes, Claude Dreams,
  timers, cron, webhooks, global config, installs

Why this is safest:
- It gives adopters a concrete proposal home and template.
- It preserves the no-live-dashboard and no-live-reflections posture in
  Claude-Codex until there is an actual reflection proposal to file.
- It avoids premature backlog/index infrastructure.
- It keeps the kit reusable while keeping the active repo's state small.

## Human Decision Packet

State: prepared local-only.

Decision needed from Sami: after Claude critique, decide whether to authorize
E5-M as the kit-only reflection proposal template/path implementation described
above.

Why Sami is needed: creating new kit reflection paths and a proposal template
changes the reusable scaffold surface and should not be self-approved by model
consensus.

Consensus recommendation: Codex recommends E5-M as a kit-only implementation:
template plus three kit `.gitkeep` directories, README note, COLLAB handoff,
and one turn note. Do not create live Claude-Codex reflection directories yet.

Divergent opinions: none recorded in this turn. E5-K Claude critique
recommended Phase 3 design first, then narrow implementation.

Options:
- A: Authorize E5-M kit-only reflection template/path implementation
  (recommended).
- B: Authorize active Claude-Codex prompt template too, but still no live
  reflection directories.
- C: Defer kit paths and create only the proposal template.
- D: Skip Phase 3 and run an informal manual reflection pilot.
- E: Defer/pivot.

Risk / tradeoff: adding kit reflection directories improves adoption clarity
but slightly expands the kit file surface. Deferring live Claude-Codex
reflection dirs reduces stale/noise risk until a real proposal exists.

Exact approval text, if approval is required:

```text
Approved: Accept E5-L as a successful design-only reflection paths/template
turn. Authorize E5-M as a kit-only reflection proposal template/path
implementation using the E5-L recommended allowed files and no-touch list.
```

Technical packet: this turn note.

## Technical Review Packet

Needed: yes.

Intended reviewer: Claude.

Question: Does E5-L choose the right first implementation boundary for Phase 3:
kit-only proposal template plus kit reflection directory placeholders, while
deferring live Claude-Codex reflection directories and all improvement backlog
paths?

Evidence paths:
- `.agent-handoff/PROTOCOL.md`
- `.agent-handoff/COLLAB.md`
- `.agent-handoff/turns/E5-K-claude-critique-dashboard-template-implementation.md`
- `kit/v1/README.md`
- `kit/v1/.agent-handoff/PROTOCOL.md.template`
- `kit/v1/.agent-handoff/DASHBOARD.md.template`
- `.agent-handoff/turns/E5-L-codex-reflection-paths-template-design.md`

Constraints: design-only; no reflection/improvement paths created; no kit
templates modified; no protocol, starter-turn-note, live dashboard, root doc,
product/runtime, pilot, or live Open Mic Colorado touch.

Output requested: critique with blockers, nits, and recommendation for whether
E5-M should proceed.

Status: prepared local-only.

## Open questions for the other agent
- Does Claude agree that the first implementation should be kit-only rather
  than creating live Claude-Codex reflection directories?
- Does Claude agree `.agent-handoff/improvements/` should remain future optional
  infrastructure rather than part of Phase 3's first implementation?
- Should the proposal template include both `Improvement Classification` and a
  separate `Exact approval text` field even though the Human Decision Packet
  also includes exact approval text? Codex recommends yes for scanability.

## Blockers (must-fix before continuing)
- None known for Claude critique.
- Any implementation of paths, templates, dashboard pointers, or live
  reflection artifacts requires Sami's separate approval after critique.

## Nits (suggested, not required)
- Consider using `mixed-needs-classification/` instead of just `mixed/` because
  it encodes the stopgate in the path name.
- If E5-M is authorized, keep the README note to one short paragraph plus
  Included Files entries; avoid turning the kit README into a manual.

## Browser verification
- Tool used: N/A
- URL or file path opened: N/A
- Action: N/A
- Visible outcome: N/A
- Console/network issues: N/A

Reason: E5-L is Markdown handoff/design-only and does not change any app,
browser, runtime, bridge, or automation surface.

## Evidence Basis
- USER SAID: accept E5-K as successful and authorize E5-L as Phase 3 reflection
  proposal paths/template design.
- USER SAID: do not create `.agent-handoff/reflections/`, do not implement
  reflection paths, do not enable automation/notification/wake/Hermes/Claude
  Dreams/bridges/MCP/plugins/timers/cron/webhooks/global config, and hard stop
  after E5-L.
- FILE VERIFIED: pre-edit `git status --short --untracked-files=all` was clean.
- FILE VERIFIED: E5-K Claude critique exists locally and recommends E5-L as a
  design-only Phase 3 turn with zero blockers.
- FILE VERIFIED: current protocol already codifies reflection safety,
  classification, proposal-only behavior, and mixed-proposal split-before-build.
- FILE VERIFIED: kit dashboard template already has artifact visibility,
  Human Decision Packet, Technical Review Packet, and next-safe-action surfaces.
- INFERENCE: kit-only first implementation is lower risk than creating live
  Claude-Codex reflection directories before a real proposal exists.
- UNKNOWN: Claude's E5-L critique outcome and Sami's preferred E5-M scope.

## Portability Findings
- Repo-local assumptions: current kit template paths live under
  `kit/v1/.agent-handoff/`.
- Machine/local-tool assumptions: none.
- Browser/connector assumptions: none.
- Any workaround used: requested write permission for the two authorized
  Claude-Codex files because this session's default writable root was the pilot
  repo.

## Verification

- Pre-edit `git status --short --untracked-files=all`: clean.
- Post-edit `git status --short --untracked-files=all`: only the two
  authorized E5-L files changed or appeared:
  - `M .agent-handoff/COLLAB.md`
  - `?? .agent-handoff/turns/E5-L-codex-reflection-paths-template-design.md`
- `git diff --check`: passed.
- `.agent-handoff/reflections/`: absent.
- `.agent-handoff/improvements/`: absent.
- Live `.agent-handoff/DASHBOARD.md`: absent.
- `.agent-handoff/PROTOCOL.md`: not modified.
- Starter-turn-note files: not modified.
- Kit templates and kit `.gitignore.snippet`: not modified.
- Root README/AGENTS/CLAUDE: not modified.
- Pilot repo status: clean; no pilot files modified.
- Live Open Mic Colorado status: clean; no live repo files modified.
- Browser verification: N/A; no browser used.
- Tests: not run; E5-L is Markdown design-only.

## Handoff
- Next agent: Claude.
- Specific ask: critique E5-L's design and recommend whether Sami should
  authorize the proposed E5-M kit-only reflection proposal template/path
  implementation.
