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

## Approver Labeling Convention

Reusable protocol language refers to `the human approver` or `configured human
approver`. An adopting repo may display a local label for that role, such as
the configured person's name, but local labels are instance metadata and must
not become reusable protocol state/action vocabulary. Reusable state/action
names must remain portable, for example `needs_human`, not
`needs_<local_name>`.

## Baseline And Optional Layers

- File-based handoff is the minimal binding reference path: Tier 0 manual
  paste plus `COLLAB.md` and append-only turn notes, and Tier 1 inbox/outbox
  file exchange only when an experiment scopes it.
- Signed event governance is an optional add-on for adopters that need
  cryptographic event verification. It is not required for the v1 file-based
  kit.
- Live bridges and adapters remain disabled until the configured human
  approver separately approves the exact MCP registration, plugin setup,
  bridge enablement, `.mcp.json`, or global config change.
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
   and stop so the configured human approver can paste the matching prompt into
   the other agent when the active mode is manual.
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
- Decision needed from the human approver
- Why the human approver is needed
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

Finder duplicate files such as `* 2.md` must not be staged unless the
configured human approver explicitly authorizes that exact path. If a non-local
reviewer needs local-only artifacts, the next safe action is sharing, pushing,
or exporting, not further implementation.

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

No proposal becomes approved without the configured human approver's explicit
approval of exact files and scope. Prior acceptance, silence, model consensus,
or "good idea" language is not approval. Unclear proposals must be classified
before action.

## Review Routing

The configured human approver reviews vision, priority, risk tolerance, and
approval. Claude and Codex critique or build only within explicit scope.
GPT-5.5 Pro or other third-model review may provide useful technical
cross-checks, but it is not approval.

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
produce repo-visible output. The configured human approver alone has approval
capability.

External advisor output is non-operational until the configured human approver
approves it or a repo-visible record captures it. Self-scribed external advisor
notes should use `.agent-handoff/advisor-notes/`; creating that path still
requires explicit scope. Operational turn notes that use advisor input must
cite the advisor note path or quote block.

If the configured human approver or a repo-writing node scribes advisor input,
include the advisor name, verbatim text in a code block with no length cap, a
structured summary, and what the configured human approver accepted, rejected,
or left undecided. For non-text or unavailable transient artifacts, state the
gap explicitly. Do not truncate advisor text to save storage or tokens.

### GPT Coordinator / Outcome Architect

Stable role model:

- GPT-5.5 Pro: coordinator / outcome architect / external advisor.
- Codex: builder / implementer / investigator.
- Claude Code: auditor / critic / verifier.
- Human approver: approval / priority / risk / taste.
- Repo: source of truth.

GPT may recommend, synthesize, draft prompts, and define outcome/rubric
proposals. GPT does not approve scope, pushes, or completion. Approval remains
the configured human approver's sole authority.

Ask GPT when a milestone, pivot, architecture decision, repeated UX or
cognitive-load failure, "are we wasting time?" question, conflicting
Claude/Codex recommendations, outcome/rubric definition, multi-turn loop
approval consideration, high-stakes/noisy/ambiguous decision, or a request from
the configured human approver for external synthesis appears. GPT is not
required for routine implementation, routine critique, straightforward push
authorization, already-scoped no-choice handoffs, or low-risk verification
where Claude/Codex agree and the configured human approver is not being asked
for strategic judgment.

#### Coordinator Trigger Classification

Every turn note must include this section near the top:

```markdown
## Coordinator Trigger
- State: ROUTINE | NEEDS_GPT | UNCLEAR
- Reason: <one sentence>
```

The configured human approver is never responsible for determining routine
status. The active repo-writing node must classify the Coordinator Trigger
state. If the classification is missing, treat the turn as `UNCLEAR` and
default to Ask GPT.

`ROUTINE` is allowed only when the turn is already scoped, low-risk,
non-strategic, and no architecture, pivot, UX-friction, cognitive-load,
conflict, safety, automation, or tooling trigger is active.

`NEEDS_GPT` applies when any GPT coordinator invocation trigger fires,
including milestone, pivot, architecture decision, repeated UX/cognitive-load
failure, "are we wasting time?", conflicting Claude/Codex recommendations,
outcome/rubric definition, multi-turn loop approval consideration, high-stakes/
noisy/ambiguous decision, or request from the configured human approver.

`UNCLEAR` applies when the active repo-writing node cannot confidently classify
the turn as `ROUTINE`. `UNCLEAR` defaults to Ask GPT.

When state is `NEEDS_GPT` or `UNCLEAR`, the dashboard primary recommendation
should become "Ask GPT-5.5 Pro," not a request for the human approver to decide
whether GPT is needed. The handoff must include the exact question to paste to
GPT. Respect the E5-T-FIX-004 single-recommendation principle.

When critiquing an implementation or design, the auditor may upgrade the
Coordinator Trigger classification with a one-sentence reason, such as when
the auditor detects an unapproved architecture, UX, safety, automation, or
scope decision. Turn notes and handoffs should include the Coordinator Trigger
state and reason; if state is `NEEDS_GPT` or `UNCLEAR`, include the exact GPT
paste question.

When invoked, GPT should produce concise synthesis, consensus recommendation,
divergent opinions, risk/tradeoff summary, exact next prompts for Codex and/or
Claude, outcome/rubric proposal when relevant, exact approval text if the
configured human approver must approve, explicit uncertainty / unknowns, and no
repo-authoritative claims unless scribed.

Near term, the configured human approver pastes GPT output into Claude/Codex,
and the active repo-writing node scribes it with attribution. Include a
verbatim quote in a code block when exact text is available, no length cap for
text, a structured summary, and what the configured human approver accepted,
rejected, or left undecided. Do not silently launder GPT advice into "the
system decided." If no turn is active, the next repo-writing turn that uses the
GPT input scribes it. If GPT input applies to both Codex and Claude, the next
repo-writing node records the shared source once and the other node references
it.

If a GPT invocation trigger fires, the dashboard primary recommendation may
become "Ask GPT-5.5 Pro." Respect the E5-T-FIX-004 single-recommendation
principle: Ask GPT becomes the one recommendation, not an extra competing
surface.

#### Outcome Circles

An Outcome Circle is a bounded builder/auditor loop that may run only after
the configured human approver approves the exact entry phrase and packet:

```text
Approved Outcome Circle: <packet name>
```

Entry requires the full Outcome Packet inline with the approval. Verbal
agreement, agent consensus, dashboard green status, prior approval of similar
work, a GPT recommendation, a Claude/auditor pass, or a Codex/builder
implementation plan is not Outcome Circle entry.

Bootstrap rule for early circles: until at least two Outcome Circles have
completed successfully and been reviewed in repo-visible turn notes, Outcome
Circle entry and Outcome Circle exit are always `NEEDS_GPT`. During this
bootstrap period, an Outcome Packet may not self-classify entry or exit as
`ROUTINE`. Mechanical builder/auditor work inside a valid approved Outcome
Circle may still be `ROUTINE` when it remains within the packet. Entry includes
drafting, finalizing, and approving the packet. Exit includes `satisfied`,
`blocker`, `scope_conflict`, `failed`, `interrupted`,
`max_iterations_reached`, `needs_gpt`, `needs_human`, or final synthesis about
whether the outcome was met. This
bootstrap rule may be revised only by explicit later protocol change after the
first two circles are observed.

Minimum Outcome Packet fields:

- outcome description
- rubric
- allowed files
- no-touch list
- max iterations
- builder
- auditor/grader
- pass evidence
- stop conditions
- when the human approver is called back
- when GPT is called back
- commit/push rule
- artifact visibility requirement
- branch/PR policy if applicable

Result states are `satisfied`, `needs_revision`, `max_iterations_reached`,
`blocker`, `scope_conflict`, `needs_gpt`, `needs_human`, `failed`, and
`interrupted`.

Auditor pass is not approval. Rubric satisfied is not approval. Model
consensus is not approval. `satisfied` means the auditor believes the rubric
is satisfied; it does not authorize commit, push, new scope, or final
completion. Commit, push, new scope, and final completion still require
the configured human approver's exact approval unless the exact Outcome Packet
explicitly permits them. The adopting repo may configure a local label for the
human approver.

Builder cannot grade its own work. The auditor must search for failure modes.
If scope or mode is unclear, stop and Ask GPT.

No commits or pushes occur inside an Outcome Circle unless the packet
explicitly allows them. If the packet allows commit/push, it must state
branch/PR policy and whether direct push to `main` is forbidden. The default
recommendation for CI-heavy or shared repos is PR over direct push unless
the configured human approver explicitly approves direct push.

Outcome Circle protocol/schema is codified here; loop runners, automation,
tooling, and the first test circle remain separate future work.

#### Human Decision Actions And Notes

Human decision actions are action verbs, not auditor result states. Use these
portable action names when recording an explicit human decision:

- `authorize_exact_action`: authorizes only the exact requested action and
  scope. Resulting state may be recorded as `authorized_exact_action` or an
  exact local approval state such as `approved_for_<specific_action>`.
- `reject_redo`: rejects the current result and requests another attempt.
  Resulting state is `needs_revision` when the existing packet still permits
  another iteration; otherwise a new Outcome Packet is required.
- `reject_close`: rejects and closes the scope without another attempt.
  Resulting state is `closed_rejected`.
- `ask_coordinator`: pauses for coordinator synthesis. Resulting state is
  `paused_pending_coordinator` or `needs_gpt`; the decision should re-surface
  after the coordinator response or after the packet's stated deadline, with a
  24-hour default when no deadline is given.
- `pause_pending`: pauses without rejecting. Resulting state is
  `paused_pending_human`.

Do not collapse `reject_redo` and `reject_close` into a generic reject action.
Rejection does not authorize new scope, automatic redo, file edits, commits,
pushes, public release, naming, dashboard changes, protocol changes, or
runtime work unless the packet explicitly authorizes that next action.

Human Decision Notes are decision rationale, not private reasoning. Use this
minimum note shape when a note is required or useful:

- Why I chose this:
- Scope boundary:
- Caveat / condition:

Notes are required for `reject_redo`, `reject_close`, `ask_coordinator`,
`pause_pending` when the pause blocks another agent or is long-running, and
any decision that overrides a Builder, Auditor, or Coordinator recommendation.
Notes are optional for routine `authorize_exact_action`. Do not use fuzzy
"high consequence" classification as a required-note trigger unless a later
protocol turn defines exact thresholds.

Notes are repo-visible audit context. They must not include secrets, private
reasoning, or content the human would not include in a PR review.

Agents may read repo-visible Human Decision Notes as context and may cite them
in turn notes with attribution. Agents may not adjust builder or auditor
thresholds based on past notes, pad evidence to match what was approved last
time, add boilerplate or proactive flags merely to match perceived human
preferences, treat individual past decisions as protocol changes, or silently
modify rubrics or evidence collection based on past notes.

Notes are descriptive, not normative, until codified by an explicit protocol or
doc-lock turn. Redo notes may propose rubric changes, but they do not
automatically modify rubrics.

When an agent cites a past Human Decision Note, include this attribution line:

```text
Citing this note as context only; not adjusting [builder/auditor/coordinator] thresholds based on it.
```

Future meta-audits may look for adaptation patterns, including formulaic audit
findings, declining rejection rates without independent quality evidence, new
sections that mirror past notes, or builder/auditor agreement rising without a
clear quality explanation.

NanoClaw or any transport layer is a possible future option only. NanoClaw was
previously investigated and deferred for governance-fit reasons; reconsidering
it requires a separate review. Do not treat NanoClaw as the default future
path.

Use vendor diversity as a spectrum:

- strong: different model families, such as Anthropic, OpenAI, Google, Mistral,
  or Meta.
- moderate: different tiers, sizes, versions, or runtimes within one family.
- weak: same model with different prompts, context, sampling, or role framing.

Stronger diversity often catches more blind spots, but this is a guideline;
the configured human approver may override.

Architect-tier nodes may delegate scoped subagent work inside an authorized turn
without separate per-subagent approval when the task fits the parent scope, the
architect reviews the output, and the turn note attributes the delegation.
Subagents do not own `COLLAB.md`, `DASHBOARD.md`, turn notes, commits, pushes,
approvals, or scope expansion. Subagent output is advisory to the architect.

Two architect-tier nodes may be assigned as co-architects for a turn. A
reconciliation note must include `Convergence Status: converged | synthesized |
divergent | escalated`. No implementation proceeds while status is `divergent`
or `escalated` without explicit configured human approver routing.

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
- Next agent: Claude | Codex | human approver
- Specific ask:
```

Use Blockers vs Nits strictly. A critique turn may list at most 3 blockers.
Nits are optional and must not expand the required scope.

## Turn Note Schema Additions

Agent values may include:
Claude | Codex | human approver | Consultant

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
- human approval basis:
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

After turn 004, stop and hand off to the configured human approver for
retrospective. Do not create turn 005 without explicit approval.

## Later Bridge Or Adapter Experiments

After the file-based contract is proven, a later experiment may test
Claude-hosted Codex through the official Codex plugin, a direct
`codex mcp-server` wrapper, or another adapter. This requires the configured
human approver's explicit approval for the exact adapter and setup because it
changes tool configuration and the failure mode under test.

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

Stop and ask the configured human approver before:

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
things unless the configured human approver has explicitly approved that exact
action and scope.

Only the configured human approver can move an item from "proposed" to
"approved."

Approval must be explicit, scoped, and recorded in `COLLAB.md`, a turn note, or
a protocol file. Absence of objection, prior delegation, or model consensus is
not approval.

## Proportionality (Verification Weight By Blast Radius)

Verification weight must match blast radius. The default classifier is BINARY, asked
of every action:

> Is this action irreversible, high-blast, or outward/public? Yes, gate it. No, keep it
> light.

`light` means: scoped diff, the cheap always-on floor (a replayable check on any
load-bearing claim, exact human approval on irreversible consequences, 1-in-10
sampling), and stop on anomaly. No multi-agent relay, no cross-vendor review, no
convergence loop.

`gate` means: the configured human approver's exact approval for the named
consequence, plus checks sized to the trigger.

### Objective high-blast triggers

An action is high-blast only if it has an objective trigger:

- irreversible or hard-to-reverse external consequence;
- production data or service mutation beyond normal approved product flow;
- credentials, secrets, auth, permissions, RLS, branch protection, CI, CODEOWNERS,
  hooks, `.claude/settings`, MCP/plugins, automation, or other governance/runtime
  config;
- money or spend;
- external sends, publishing, repo visibility, or public/adopter-facing claims;
- trust infrastructure: seeded probes, arbiter, enforcement wiring, public kit claims.

Complexity alone is not a trigger. Model disagreement alone is not a trigger unless the
disputed action also hits an objective trigger above. "This feels important" is not a
trigger. This is the anti-gaming rule in both directions: an agent cannot self-classify
out of scrutiny, and no one may over-escalate a merely tangled task.

### Exact approval is not heavy ceremony

A commit, push, PR, or merge may still require the human approver's exact approval. That
is NOT the same as requiring Codex, GPT, cross-vendor review, or a full packet.
Conflating the two was the documented 2026-06 drift; do not repeat it.

### Lanes are elaboration, not a per-task checklist

The lane model (Lane 0 normal product work; Lane 1 internal/preservation docs; Lane 2
public/whitepaper/kit; Lane 3 high-blast/trust-infra) elaborates the `gate` branch. Do
not run a four-lane classification on every task. Run the binary; reach for lanes only
when the answer is `gate`.

### Lane 2 re-review trigger

Cross-vendor review of public/adopter-facing claims fires once before a claim set goes
public, and re-fires ONLY when a new load-bearing factual claim or number is added. It
does not fire on wording or editing passes.

### Substrate terminates doubt

The cure for uncertainty about a load-bearing claim is to find the substrate (one
replayable check) and stop. Do not audit the audit. Stacking reviewers is infinite
regress, not rigor. Ground once and terminate.

### Cooldown semantics

A governance cooldown pauses the expensive ceremony (multi-agent relay, cross-vendor
review on low-blast work, convergence loops). It does not turn off the cheap always-on
floor. The failure is bidirectional: too little verification lets a fluent lie through;
too much grinds the work to a halt. Hold the middle.

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
