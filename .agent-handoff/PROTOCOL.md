# Claude <-> Codex Collaboration Protocol

## Purpose

This protocol tests practical two-way collaboration between Claude Code and
Codex in the same repo. The reliable baseline is repo-file coordination. The
protocol is local-first, not local-only: it works with manual repo files by
default, and separately approved bridges or adapters may be layered on later.
Experiment 1 was file-based only. Live MCP/plugin bridges are later
experiments, not the first run and not enabled by default.

## Source Of Truth

- `.agent-handoff/COLLAB.md` holds current shared state.
- `.agent-handoff/turns/` holds append-only turn notes.
- `docs/test-project.md` defines the sample app.
- Hidden chat context is not authoritative unless it is summarized into these
  files.

## Baseline And Optional Layers

- File-based handoff is the minimal binding reference path: Tier 0 manual
  paste plus `COLLAB.md` and append-only turn notes, and Tier 1 inbox/outbox
  file exchange only when an experiment scopes it.
- Signed event governance is an optional add-on for adopters that need
  cryptographic event verification. It is not required for the v1 file-based
  kit.
- Live bridges and adapters remain disabled until Sami separately approves the
  exact MCP registration, plugin setup, bridge enablement, `.mcp.json`, or
  global config change.
- Turn caps are per-experiment authorization values. Experiment 1 used a
  four-turn cap; later experiments use the cap recorded in their own
  authorizing approval.
- Browser verification must name the runner or explicitly mark browser QA
  `N/A` with a reason. Silent omission is not acceptable.
- Automation budget is `N/A` unless polling, cron, webhook, or heartbeat
  automation is explicitly approved for the experiment.
- Council, GPT, Claude, and Codex consultation is optional and file-based by
  default through prompts, filed responses, digests, and turn notes.
- Prior art such as gstack, AgentBridge, tmux bridges, LLM Council, Zenith,
  CCB, and Claude Squad is prior art only unless a later approval explicitly
  scopes dependency use, vendoring, installation, or runtime setup.
- Kit extraction is a separate action after docs alignment. This protocol does
  not authorize copying kit files into another repo.

## Turn Loop

1. Read `COLLAB.md`, `PROTOCOL.md`, `docs/test-project.md`, and the latest turn
   note.
2. Decide whether you are architecting, implementing, reviewing, or handing off.
3. Before editing `COLLAB.md`, re-read it so stale state is not overwritten.
4. Update `COLLAB.md` before delegating to the other agent.
5. Use file-based handoff unless the current experiment explicitly approves a
   bridge or adapter. Write the next request into `COLLAB.md`, add a turn note,
   and stop so Sami can paste the matching prompt into the other agent when the
   active mode is manual.
6. Add a new turn note named with the next sequence number, for example
   `001-claude-architecture.md` or `002-codex-review.md`.

## Dashboard Freshness Timing

If `.agent-handoff/DASHBOARD.md` exists, start there for orientation, then
confirm dashboard state against `.agent-handoff/COLLAB.md` and the latest
relevant turn notes. `COLLAB.md` is authoritative on conflict.

Refresh `DASHBOARD.md` before relying on it when it is stale and dashboard
edits are in scope. Refresh it again at handoff when any freshness trigger
changed: next actor, active role, human-attention state, artifact visibility,
latest artifact, next safe action, or dashboard-vs-COLLAB conflict status.

If `DASHBOARD.md` is stale but dashboard edits are out of scope, do not rely on
it silently. Record the mismatch in the current turn note and in any Human
Decision Packet or artifact-visibility fields.

## Packet Field Vocabulary

When a Human Decision Packet is used, use these fields:

- State
- Decision needed from Sami
- Why Sami is needed
- Consensus recommendation
- Divergent opinions
- Options
- Risk / tradeoff
- Exact approval text, if approval is required
- Technical packet

When no separate technical packet exists, a proposal file may set
`Technical packet` to the proposal path itself.

Technical Review Packet statuses are: `not prepared`, `prepared local-only`,
`sent`, `responded`, `incorporated`, and `summarized`.

## Manual Visibility And Duplicate-Noise Gate

Before staging, committing, or pushing, list local-only artifacts and untracked
noise. Classify each as approved work, pre-existing duplicate/noise, unrelated
local artifact, or unknown.

Finder duplicate files such as `* 2.md` must not be staged unless Sami
explicitly authorizes that exact path. If a non-local reviewer needs local-only
artifacts, the next safe action is sharing, pushing, or exporting, not further
implementation.

If duplicate/noise files recur, propose cleanup separately. Do not silently
delete them, ignore them, or fold cleanup into unrelated work.

## Artifact Visibility

Use these artifact visibility states when visibility affects the next action:
`local-only`, `pushed`, `visible to web-GPT`, and `action needed`.

When visibility is `action needed`, the next safe action is the visibility
action itself, such as sharing, pushing, or exporting. It is not further
implementation.

## Reflection Safety And Approval

Reflection may generate proposals. Reflection may not apply proposals, and
agents must not autonomously self-modify the harness, project, runtime, or
backport targets.

Classify reflection proposals as:

- `harness`: changes collaboration scaffolding or agent workflow.
- `project`: changes the product, runtime, docs, or repo under collaboration.
- `mixed`: contains both and must be split before any builder turn.

Proposal-only reflection artifacts should include classification, observed
friction, evidence, proposed change, risk, files that would change, reviewer,
Human Decision Packet, Technical Review Packet if needed, and exact approval
text.

No proposal becomes approved without Sami's explicit approval of exact files
and scope. Prior acceptance, silence, model consensus, or "good idea" language
is not approval. Unclear proposals must be classified before action.

## Review Routing

Sami reviews vision, priority, risk tolerance, and approval. Claude and Codex
critique or build only within explicit scope. GPT-5.5 Pro or other third-model
review may provide useful technical cross-checks, but it is not approval.

## Node Capability And Advisor Rules

Describe each participant by four separate properties:

- Write capability: whether the node can directly create or modify
  repo-visible artifacts in the current workspace.
- Operational role: the per-turn assignment, such as builder, auditor, advisor,
  coordinator, scribe, or handoff writer.
- Approval capability: the ability to approve scope, files, risk, priority, or
  movement from proposal to implementation.
- Tier: the per-turn role-fit class, such as architect-class, worker-class, or
  external-advisor.

Write capability does not imply operational role. Operational role is assigned
per turn, and tier is assigned or declared per turn. Operational work must
produce repo-visible output. Sami alone has approval capability.

External advisor output is non-operational until Sami approves it or a
repo-visible record captures it. Self-scribed external advisor notes should use
`.agent-handoff/advisor-notes/`; creating that path still requires explicit
scope. Operational turn notes that use advisor input must cite the advisor note
path or quote block.

If Sami or a repo-writing node scribes advisor input, include the advisor name,
verbatim text in a code block with no length cap, a structured summary, and
what Sami accepted, rejected, or left undecided. For non-text or unavailable
transient artifacts, state the gap explicitly. Do not truncate advisor text to
save storage or tokens.

Use vendor diversity as a spectrum:

- strong: different model families, such as Anthropic, OpenAI, Google, Mistral,
  or Meta.
- moderate: different tiers, sizes, versions, or runtimes within one family.
- weak: same model with different prompts, context, sampling, or role framing.

Stronger diversity often catches more blind spots, but this is a guideline;
Sami may override.

Architect-tier nodes may delegate scoped subagent work inside an authorized turn
without separate per-subagent approval when the task fits the parent scope, the
architect reviews the output, and the turn note attributes the delegation.
Subagents do not own `COLLAB.md`, `DASHBOARD.md`, turn notes, commits, pushes,
approvals, or scope expansion. Subagent output is advisory to the architect.

Two architect-tier nodes may be assigned as co-architects for a turn. A
reconciliation note must include `Convergence Status: converged | synthesized |
divergent | escalated`. No implementation proceeds while status is `divergent`
or `escalated` without explicit Sami routing.

## Turn Note Schema

Every Experiment 1 turn note must use this schema:

```markdown
# NNN - <agent> <phase>

## Agent
Claude | Codex

## Phase
architecture | critique | implementation | smoke | retrospective

## Files touched this turn
- path (created | edited | deleted)

## Decisions (binding)
- short bullets, each is a commitment the next agent must respect

## Open questions for the other agent
- specific, answerable

## Blockers (must-fix before continuing)
- empty or numbered

## Nits (suggested, not required)
- empty or bullets

## Browser verification
- Tool used: Claude in Chrome MCP | Codex Chrome plugin | N/A
- URL or file path opened:
- Action:
- Visible outcome:
- Console/network issues:

## Handoff
- Next agent: Claude | Codex | Sami
- Specific ask:
```

Use Blockers vs Nits strictly. A critique turn may list at most 3 blockers.
Nits are optional and must not expand the required scope.

## Turn Note Schema Additions

Agent values may include:
Claude | Codex | Sami | Consultant

Add this optional section to all future turn notes:

```markdown
## Evidence Basis
- USER SAID:
- FILE VERIFIED:
- AGENT SUMMARY:
- INFERENCE:
- UNKNOWN:
```

Add this optional section to all implementation, smoke, architecture, and
portability-relevant turns:

```markdown
## Portability Findings
- Repo-local assumptions:
- Machine/local-tool assumptions:
- Browser/connector assumptions:
- Any workaround used:
```

## Response History Policy

Do not overwrite another agent's existing turn note or consultant response. Do
not use mutable "latest response" fields as the only record of prior work.
`COLLAB.md` may summarize latest state, but durable responses must be stored as
append-only files or append-only event entries.

## Unscheduled Fix-Turn Shape

If an unscheduled fix turn is required, the turn note must include:

- Trigger:
- Sami approval basis:
- Scope limit:
- Files touched:
- Verification performed:
- Why this does not expand the experiment:
- Next handoff:

## Experiment 1

Experiment 1 is file-based only and limited to one feature:

`Add decision + persist to localStorage + reload preserves it`

Do not design or implement filter, edit, delete, import, export, or clear-all
during Experiment 1.

Experiment 1's authorizing turn cap was 4 experiment turn notes:

1. `001-claude-architecture.md`
2. `002-codex-critique.md`
3. `003-claude-implementation.md`
4. `004-codex-implementation-smoke.md`

After turn 004, stop and hand off to Sami for retrospective. Do not create turn
005 without explicit approval.

## Later Bridge Or Adapter Experiments

After the file-based contract is proven, a later experiment may test
Claude-hosted Codex through the official Codex plugin, a direct
`codex mcp-server` wrapper, or another adapter. This requires Sami's explicit
approval for the exact adapter and setup because it changes tool configuration
and the failure mode under test.

Codex-hosted Claude is out of scope until the file-based and Claude-hosted Codex
experiments both show clear value.

Adapter, council, and harness prior art may be cited for design patterns, but
gstack, AgentBridge, tmux bridges, LLM Council, Zenith, CCB, Claude Squad, and
similar projects are not dependencies of this protocol unless a later approval
explicitly scopes that dependency.

## Ownership

Use explicit ownership in `COLLAB.md` before editing:

- Claude-owned files
- Codex-owned files
- Shared files
- No-touch files

For Experiment 1, use this split:

- Claude: turn 001 architecture, `app/index.html`, first-pass `app/styles.css`
- Codex: turn 002 critique, `app/app.js`, Chrome smoke evidence
- Shared: `README.md`, `.agent-handoff/COLLAB.md`, turn notes
- No-touch: `.github/`, `.claude/`, `docs/`, `package.json`, `README.md`,
  `AGENTS.md`, `CLAUDE.md`, `PROTOCOL.md` after this setup pass

## Stopgates

Stop and ask Sami before:

- installing dependencies,
- committing, pushing, merging, or creating a PR,
- using dangerous sandbox or approval-bypass modes,
- changing global Claude/Codex config,
- running network-dependent setup,
- registering MCP, setting up plugins, enabling bridges, adding timers, cron,
  webhooks, automation, or editing `.mcp.json`,
- enabling Hermes, Claude Dreams, or other autonomous self-modification paths,
- editing signed trust/event/private-key files,
- continuing past the current experiment's authorized turn cap.

## Stopgate Rule

A consultant, coordinator, or subagent may advise, critique, classify risks,
draft architecture, and propose changes.

A consultant, coordinator, or subagent may not treat a proposal as approved,
authorize implementation, bypass approvals, delete files, change permissions,
enable bridges, install dependencies, modify global Claude/Codex configuration,
commit, push, merge, create a PR, or instruct another agent to do any of those
things unless Sami has explicitly approved that exact action and scope.

Only Sami can move an item from "proposed" to "approved."

Approval must be explicit, scoped, and recorded in `COLLAB.md`, a turn note, or
a protocol file. Absence of objection, prior delegation, or model consensus is
not approval.

## Success Criteria

The test is successful when:

- both agents have written at least one turn note,
- `COLLAB.md` accurately captures decisions, rejected ideas, and ownership,
- turn notes 001 through 004 follow the schema,
- at least one Codex blocker is addressed by Claude,
- at least one nit is deferred in writing,
- the scoped sample feature works locally,
- Chrome verification is recorded with tool, path, action, and visible outcome,
- no installs, commits, pushes, PRs, global config changes, or bridge calls
  happen during the experiment,
- a retrospective identifies the most expensive friction point before any
  bridge or adapter experiment begins.
