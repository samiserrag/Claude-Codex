# E6-ROUTING-COCKPIT-001 - Codex Implementation Packet Draft

Turn type: implementation Outcome Packet draft only.

No cockpit implementation, dashboard edit, protocol edit, kit edit, scratch
work, automation, branch, commit, push, PR, merge, or execution occurred in
this turn.

This draft is not approval and is not an execution trigger.

## Coordinator Trigger

- State: ROUTINE
- Reason: Sami explicitly authorized drafting an implementation packet only,
  after GPT exit synthesis accepted the routing-cockpit scope-lock as
  satisfied; no implementation or irreversible action is authorized here.

## Durable Behavior Active This Turn

```text
Durable behavior active this turn:
- skills: none
- subagents: none
- automations: none
- memory files consulted: none
- standing rules invoked: platform/system/developer instructions; repo
  AGENTS.md; this drafting request; PROTOCOL.md; COLLAB.md; OPERATING-MODEL.md;
  DASHBOARD.md; the E6-ROUTING-COCKPIT-001 scope-lock and Claude audit
```

## Evidence Read

- `.agent-handoff/COLLAB.md`
- `.agent-handoff/turns/E6-ROUTING-COCKPIT-001-codex-routing-cockpit-scope-lock.md`
- `.agent-handoff/turns/E6-ROUTING-COCKPIT-001-claude-audit-routing-cockpit-scope-lock.md`
- `.agent-handoff/OPERATING-MODEL.md`, especially §8 Outcome Circle Model and
  §10 Polaris
- `.agent-handoff/DASHBOARD.md`
- `kit/v1/.agent-handoff/templates/outcome-packet-template.md`
- Required repo-orientation files from `AGENTS.md`: `PROTOCOL.md`,
  `README.md`, `STRATEGY.md`, and latest turn note

## Draft Status

This is a draft implementation Outcome Packet for later Sami review and
independent Claude audit. It is grounded in the now-merged
E6-ROUTING-COCKPIT-001 scope-lock and Claude's scope-lock audit.

Sami remains the only approver. GPT synthesis is not approval. Packet existence
is not execution authorization.

---

# Draft Outcome Packet: E6-ROUTING-COCKPIT-001-IMPL-A

## 1. Outcome Description

Implement the smallest static Decision Cockpit update that reduces handoff
routing burden by surfacing deterministic next-actor routing and exact action
text, while preserving the repo's approval-boundary layer.

The work is standard engineering routing discipline plus this repo's explicit
approval-boundary method:

- use familiar reviewer-gate, policy-check, risk-tier, CODEOWNERS /
  branch-protection, CI/status-check, escalation-on-ambiguity, and
  human-in-the-loop patterns as the routing mental model
- add the repo-visible approval-boundary layer so `done`, `audited`,
  `satisfied`, `approved`, `merged`, and `released` do not collapse
- keep the cockpit static and view-only
- make the next actor, paste target, exact action, authorized/not-authorized
  boundary, and evidence links more visible
- add a lifecycle-stage indicator distinct from routing state
- record a baseline burden snapshot from the Stage A/B to preservation arc
  before claiming any reduction

This authorizes, if Sami later approves this packet for implementation:

- static updates to the Decision Cockpit reference files and handoff state only
- no runtime behavior, no automation, no hidden state, no live routing script,
  and no approval mechanism

This does not authorize:

- dashboard rebuild
- bespoke routing theory
- protocol, operating-model, strategy, README, START_HERE, AGENTS, CLAUDE, or
  kit edits
- branch, commit, push, PR, merge, public release, public claim, or launch
- scratch repo work, cleanup, deletion, mutation, archive, remote, or push
- memory, skill, automation, subagent, scheduled check, heartbeat, notifier,
  global config, plugin, MCP, bridge, dependency install, or runtime setup

## 2. Rubric

PASS only if all of the following are true:

- The cockpit update frames routing as standard reviewer / policy / risk /
  escalation / human-in-the-loop practice plus the repo's approval-boundary
  layer, not as a new routing theory.
- The deterministic rule is non-overridable: irreversible, approval,
  scope-expanding, permission-changing, public, or durable-behavior actions
  route to the human approver; a classifier never waives human approval.
- The explicit invariant appears in cockpit copy:
  `done ≠ audited ≠ satisfied ≠ approved ≠ merged ≠ released`.
- The cockpit displays a lifecycle-stage indicator distinct from routing
  state. Routing state answers "who acts next"; lifecycle stage answers "how
  far toward approved / merged / released is this item?"
- The cockpit displays or links a burden baseline from the Stage A/B to
  preservation arc before claiming reduced copy-paste burden.
- The cockpit surfaces at least these minimum fields:
  - current route state
  - lifecycle stage
  - next actor
  - recipient / paste target
  - exact drafted next action
  - route reason tied to documented triggers
  - evidence links
  - what is authorized
  - what is not authorized
  - stale/as-of state
  - human decision action options when needed
  - "drafted text is not approval" warning
  - `satisfied` is not approval reminder
  - auditor pass / model consensus / dashboard state are not approval reminder
- The current routing-architecture adoption decision is recorded as correctly
  escalated to GPT synthesis before this implementation packet draft.
- The cockpit remains static and self-contained; `DASHBOARD.html` must not add
  external network calls, storage, backend behavior, model calls, notification,
  webhook, scheduler, install, or runtime dependency.
- `COLLAB.md` remains the authoritative source of truth; dashboard state must
  say it is a view and stale on conflict.
- Dashboard copy does not say or imply "safe to approve", "approved",
  "merged", "released", or equivalent unless exact human approval and Git /
  release evidence exist.
- The implementation stays within the allowed files.
- Browser QA is performed on `DASHBOARD.html` using the repo's Chrome-first
  rule, or explicitly marked `N/A` only if the auditor agrees no browser-rendered
  surface changed.
- `git diff --check` passes and no no-touch file changes.

Public-claim and approval reminders:

- `satisfied` is not approval.
- Auditor pass is not approval.
- Model consensus is not approval.
- GPT synthesis is not approval.
- Dashboard copy is not approval.
- Human approval authorizes only the exact named consequence.

## 3. Allowed Files

Builder may write, during later implementation only if Sami explicitly approves
this packet:

- `.agent-handoff/DASHBOARD.md`
- `.agent-handoff/DASHBOARD.html`
- `.agent-handoff/COLLAB.md`
- `.agent-handoff/turns/E6-ROUTING-COCKPIT-001-codex-routing-cockpit-implementation-iter-1.md`

Auditor may write, during later audit only if this implementation packet is
approved and implementation occurs:

- `.agent-handoff/COLLAB.md`
- `.agent-handoff/turns/E6-ROUTING-COCKPIT-001-claude-audit-routing-cockpit-implementation-iter-1.md`

Read-only evidence:

- `.agent-handoff/turns/E6-ROUTING-COCKPIT-001-codex-routing-cockpit-scope-lock.md`
- `.agent-handoff/turns/E6-ROUTING-COCKPIT-001-claude-audit-routing-cockpit-scope-lock.md`
- Stage A/B builder and audit notes
- `.agent-handoff/OPERATING-MODEL.md`
- `.agent-handoff/PROTOCOL.md`
- `.agent-handoff/STRATEGY.md`
- `kit/v1/.agent-handoff/templates/outcome-packet-template.md`

## 4. No-Touch List

Do not edit:

- `.agent-handoff/PROTOCOL.md`
- `.agent-handoff/OPERATING-MODEL.md`
- `.agent-handoff/STRATEGY.md`
- `kit/v1/**`
- `README.md`
- `START_HERE.md`
- `AGENTS.md`
- `CLAUDE.md`
- `.gitignore`
- scratch directories, including `/private/tmp/claude-codex-kit-dry-run-001`
  and `/private/tmp/claude-codex-kit-dry-run-002`
- trust-layer files
- public-release files
- public-proof-run files
- runtime/product files
- memory files
- skills
- automations
- subagents
- scheduled checks
- global config
- `.mcp.json`
- plugin, MCP, bridge, NanoClaw, CommonGround, or Notion files
- unrelated files

## 5. Max Iterations

2.

Iteration 2 may only correct:

- dashboard copy that accidentally blurs approval boundaries
- missing minimum cockpit field
- missing lifecycle-stage indicator
- missing or overclaiming burden baseline
- `DASHBOARD.md` / `DASHBOARD.html` parity mismatch
- browser QA defect
- stale/as-of or source-of-truth defect
- no-touch evidence defect
- auditor-identified implementation defect inside the same allowed files

Iteration 2 may not:

- edit no-touch files
- create runtime behavior
- create automation, memory, skills, subagents, or scheduled checks
- add dependencies, installs, network fetches, services, bridges, plugins, or
  MCP registrations
- touch scratch dirs
- broaden to kit cleanup, Stage B retry, Stage C, public proof, trust layer, or
  public launch
- commit, push, branch, PR, merge, or release

## 6. Builder

Builder: Codex.

Builder cannot grade own work.

Before implementation, builder must record:

- exact Sami approval phrase for this packet, if approval is given
- HEAD / repo ref
- working tree status
- browser runner plan for `DASHBOARD.html`
- model/runtime disclosure:
  - model/client used
  - effort level if visible
  - autonomous / parallel workflow mode active? yes/no
  - subagents/workflows active? yes/no
  - mid-task system/developer/runtime instruction updates allowed? yes/no

If the implementation prompt does not contain a distinct Sami execution
authorization for this packet, do not implement; treat it as design/audit input.

## 7. Auditor / Grader

Auditor: Claude Code.

Auditor must independently verify the rubric and search for failure modes,
including:

- whether the cockpit follows standard routing/reviewer/escalation patterns
  rather than inventing a bespoke routing theory
- whether irreversible / approval / scope-expanding actions still route to the
  human approver
- whether lifecycle stage and routing state are distinct
- whether the anti-collapse invariant is present and correct
- whether the burden baseline exists before any reduction claim
- whether dashboard copy can be mistaken for approval
- whether `COLLAB.md` remains authoritative
- whether `DASHBOARD.md` and `DASHBOARD.html` are semantically aligned
- whether browser QA evidence is concrete and Chrome-first
- whether any no-touch file changed

## 8. Pass Evidence

Builder must record:

- HEAD / repo ref before implementation
- `git status --short --branch --untracked-files=all` before implementation
- exact files changed
- source readings used
- model/runtime disclosure
- current adoption-decision lineage:
  - scope-lock satisfied
  - Claude audit satisfied with four soft observations
  - GPT exit synthesis accepted the scope-lock as satisfied and approved moving
    to implementation packet drafting
  - Sami approval remains required for implementation
- burden baseline section, captured before any reduction claim, with at least:
  - manual routing prompts / exact authorizations observed in the Stage A/B to
    preservation arc, or `unknown` with reason
  - ambiguous "who do I send this to?" moments, or `unknown` with reason
  - handoff count by actor class where repo evidence supports it, or `unknown`
    with reason
  - any coordinator/auditor rewrite or correction count where repo evidence
    supports it, or `unknown` with reason
  - explicit statement that unknown baseline fields cannot support a reduction
    claim yet
- before/after summary of `DASHBOARD.md`
- before/after summary of `DASHBOARD.html`
- `DASHBOARD.md` / `DASHBOARD.html` parity check
- browser QA evidence for `DASHBOARD.html`:
  - runner: Chrome-first, or N/A with reason if no rendered surface changed
  - URL or file path opened
  - visible outcome
  - console/network failures if observable through Chrome tooling
- `git diff --check`
- no-touch verification:
  - no diff in `.agent-handoff/PROTOCOL.md`
  - no diff in `.agent-handoff/OPERATING-MODEL.md`
  - no diff in `.agent-handoff/STRATEGY.md`
  - no diff in `kit/v1`
  - no diff in `README.md`, `START_HERE.md`, `AGENTS.md`, `CLAUDE.md`,
    `.gitignore`
- `git status --short --branch --untracked-files=all` after implementation
- unresolved risks or human-decision needs

## 9. Stop Conditions

Stop if:

- implementation would require a file outside the allowed files
- cockpit work becomes a dashboard rebuild rather than a narrow routing /
  exact-action update
- routing logic would require protocol or operating-model edits
- the deterministic human-required trigger rule cannot be represented cleanly
- the lifecycle-stage indicator cannot be kept distinct from routing state
- the burden baseline cannot be represented honestly without overclaiming
- dashboard copy would imply approval, public readiness, merge/release status,
  or "safe to approve" without exact evidence
- browser QA cannot be completed or produces a material rendering defect
- no-touch files change
- scratch dirs would need inspection, cleanup, mutation, or deletion
- implementation would require network, install, runtime setup, bridge/plugin
  registration, MCP, credentials, global config, automation, subagents, memory,
  skills, or scheduled checks
- public claim, release, launch, trust-layer work, kit cleanup, Stage B retry,
  Stage C, commit, push, branch, PR, or merge would be required
- more than 2 iterations would be needed

## 10. When The Human Approver Is Called Back

Call the human approver for:

- approval or rejection of this implementation packet
- any dashboard implementation start
- final approval after implementation/audit
- any commit, push, branch, PR, merge, release, launch, public claim, or other
  irreversible consequence
- any scope expansion
- any no-touch conflict
- any protocol, operating-model, strategy, kit, README, START_HERE, AGENTS,
  CLAUDE, `.gitignore`, trust-layer, runtime, global config, memory, skill,
  automation, subagent, scheduled-check, plugin, MCP, bridge, credential, or
  external-service change
- any scratch repo cleanup, deletion, mutation, archive, commit, remote, or push
- blocker / failed / max iterations / scope conflict / ambiguous state
- `satisfied` result, because `satisfied` is not approval

## 11. When GPT Is Called Back

Call GPT / Coordinator for:

- builder/auditor disagreement on routing or lifecycle-stage representation
- uncertainty about whether the cockpit is standard-pattern mapping or bespoke
  routing theory
- uncertainty about whether the burden baseline is sufficient or overclaimed
- public-claim or launch-readiness implications
- architecture/strategy conflict
- proposed scope expansion beyond this packet
- whether implementation should pause for kit cleanup, Stage B retry, or a
  different milestone
- exit synthesis if the auditor classifies the implementation result as a
  milestone or strategic adoption decision

## 12. Commit / Push Rule

No commit, push, branch, PR, merge, or branch deletion is authorized inside
this implementation circle.

Any preservation PR requires separate exact Sami authorization naming branch,
commit message, files, and PR creation.

## 13. Artifact Visibility

Local-only until separately preserved.

All evidence, commands, judgments, replacements, and conclusions must be
recorded in repo-visible turn notes. Do not rely on chat-only state.

The cockpit remains a view over repo-visible state. It does not grant approval,
create state, trigger routing, notify agents, or execute consequences.

Scratch evidence from Stage A/B remains local and untouched unless Sami
separately approves exact scratch disposition.

## 14. Branch / PR Policy

No branch or PR is authorized inside this implementation circle.

If the implementation and audit later satisfy the rubric, preservation requires
a separate exact Sami authorization that names:

- branch name
- commit message
- files to stage
- whether PR creation is authorized
- whether the PR is draft or ready
- whether merge is excluded or separately authorized

## Required Turn-Note Breadcrumb

Implementation and audit turn notes must include:

```text
Durable behavior active this turn:
- skills:
- subagents:
- automations:
- memory files consulted:
- standing rules invoked:
```

## Draft Handoff

Recommended next actor: Claude Code.

Audit focus:

- Does this packet use the full 14-field Outcome Packet schema?
- Does it stay implementation-packet-only and avoid implementing the cockpit?
- Does it fold in all four Claude soft observations?
- Does it keep standard routing/reviewer/escalation patterns plus the
  approval-boundary layer, rather than bespoke routing theory?
- Are irreversible / approval / scope-expanding actions still non-overridable
  human-required triggers?
- Are allowed files and no-touch boundaries narrow enough?
- Does any wording accidentally authorize implementation, branch, commit, push,
  PR, merge, scratch work, automation, or public claim?

Hard stop after this draft for independent Claude audit.

