# E6-ROUTING-COCKPIT-001 - Codex Routing Cockpit Scope-Lock

## Turn Type

Design-only scope-lock draft.

No dashboard implementation, protocol edit, kit edit, scratch work, automation,
branch, commit, push, PR, merge, or execution occurred in this turn.

## Coordinator Trigger

- State: ROUTINE
- Reason: Sami supplied a bounded design-only scope-lock request with exact
  allowed files and no-touch list; this turn drafts the requested scope-lock
  only, with audit and approval still required.

## Entry Evidence

Requested clean-entry checks before editing:

```text
$ git status --short --branch --untracked-files=all
## main...origin/main

$ git rev-parse HEAD
943ea38d2ec42e33e6bb6f9eeeb327d109eee9a8
```

Entry state satisfied the requested proceed gate:

- local `main` clean
- `HEAD` exactly `943ea38d2ec42e33e6bb6f9eeeb327d109eee9a8`
- no modified, staged, deleted, or untracked files before drafting

## Evidence Basis

- USER SAID:
  - Draft a design-only scope-lock for
    `E6-ROUTING-COCKPIT-001 - deterministic handoff routing + exact-action
    surfacing in Decision Cockpit`.
  - Do not implement dashboard changes or touch no-touch surfaces.
  - Stage A is preserved as `guided_clean`; Stage B is preserved as
    `kit_led_clean_enough`; PR #32 is merged on main.
  - Next bottleneck is human routing burden, not more proof.
- FILE VERIFIED:
  - `.agent-handoff/COLLAB.md`
  - `.agent-handoff/PROTOCOL.md`
  - `.agent-handoff/OPERATING-MODEL.md`
  - `.agent-handoff/STRATEGY.md`
  - `.agent-handoff/DASHBOARD.md`
  - `.agent-handoff/DASHBOARD.html`
  - `.agent-handoff/turns/E6-KIT-DRY-RUN-001-EXEC-A-claude-audit-guided-clean-room-execution-iter-1.md`
  - `.agent-handoff/turns/E6-KIT-DRY-RUN-001-EXEC-B-claude-audit-kit-led-self-sufficiency-iter-1.md`
  - `.agent-handoff/turns/E6-KIT-DRY-RUN-001-EXEC-B-stage-b-proposal.md`
- AGENT SUMMARY:
  - Sami relayed Codex and Claude milestone opinions: proceed narrowly toward
    Decision Cockpit plus deterministic routing, use standard review/gate/risk
    patterns, and preserve the approval-boundary distinction.
- INFERENCE:
  - The next useful artifact is a routing/cockpit scope-lock, not another
    dry-run proof loop.
- UNKNOWN:
  - Whether the eventual cockpit implementation should optimize first for
    internal routing speed, public-reference readability, or both.

## Scope-Lock Status

This file is the proposed scope-lock for a later implementation Outcome Circle.
It is not an implementation packet and does not authorize dashboard edits.

`satisfied` is not approval. Auditor pass is not approval. Model consensus is
not approval. Sami remains the only approver.

## Outcome Description

Define the smallest next step that reduces Sami's copy-paste and routing burden
while preserving the approval-boundary discipline proven by the harness.

The scope-lock should prepare a later Decision Cockpit v1 implementation that:

- displays a deterministic current route state
- shows the next actor and exact paste/action target
- distinguishes human approval, coordinator synthesis, auditor/builder work,
  and routine read-only/drafting work
- maps repo practice to familiar engineering gates instead of inventing a new
  routing theory
- keeps all approval consequences human-only and exact-scope
- avoids automation, hidden state, live routing scripts, runtime work, and
  dashboard overdesign

The work is justified by the milestone evidence:

- Stage A showed `kit/v1` can be extracted and operated once under guided
  clean-room procedure.
- Stage B showed the copied kit can guide the core adoption loop, while
  honestly exposing kit gaps.
- The remaining near-term friction is not "does the kit exist"; it is "who does
  Sami send what to next, and what exactly does that action authorize?"

## Non-Goals

This scope-lock does not authorize:

- dashboard implementation
- `DASHBOARD.md` or `DASHBOARD.html` edits
- `PROTOCOL.md`, `OPERATING-MODEL.md`, or `STRATEGY.md` edits
- kit cleanup or Stage B retry
- Stage C
- public-proof run
- public launch or public claim
- trust-layer implementation
- scratch repo creation, cleanup, deletion, or mutation
- automation, notifications, background agents, live routing scripts, global
  config, credentials, memory, skills, subagents, or scheduled checks

## 1. Routing States

Reuse existing vocabulary where possible. The cockpit should not invent a new
state model when the repo already has Coordinator Trigger and Outcome Circle
states.

Recommended routing states:

- `ROUTINE`
  - Meaning: the next step is already scoped, low-risk, and does not trigger
    coordinator or human-required conditions.
  - Critical boundary: `ROUTINE` does not authorize mutation by itself. It only
    means no additional coordinator/human routing is needed beyond already
    approved scope.
- `NEEDS_GPT`
  - Meaning: coordinator synthesis or strategy/rubric/routing judgment is
    needed before the next operational action.
  - Dashboard surface: show exact question for Coordinator and paste target.
- `NEEDS_HUMAN`
  - Meaning: exact human authorization or decision is required.
  - Dashboard surface: show exact decision action, consequence, exclusions,
    evidence links, and decision-rationale field if needed.
- `UNCLEAR`
  - Meaning: active node cannot safely classify the route.
  - Default: ask Coordinator unless a deterministic human-required trigger is
    active. If an irreversible/approval/scope-expanding action is implicated,
    route to `NEEDS_HUMAN`.
- `blocked`
  - Meaning: work cannot proceed inside current scope.
  - Dashboard surface: show blocker, owner, and whether Coordinator or human is
    needed.
- `paused_pending_human`
  - Meaning: human has intentionally paused the lane; no approval/rejection is
    implied.
- `paused_pending_coordinator`
  - Meaning: coordinator synthesis has been requested and the lane is waiting
    on that response.

Outcome Circle result states such as `satisfied`, `needs_revision`,
`scope_conflict`, `failed`, `needs_gpt`, `needs_human`, and
`max_iterations_reached` are evidence/result states, not human approval states.
The cockpit may display them as evidence, but must not treat them as approval.

## 2. Who Decides The Route

Routing is a proposal/classification process, not an approval process.

Recommended deterministic rule:

1. The active repo-writing node proposes the route state and one-sentence
   reason.
2. The auditor may upgrade or challenge the route when critique detects
   ambiguity, scope risk, safety boundary, architecture/strategy choice, or
   missing evidence.
3. The coordinator resolves ambiguity, strategy/rubric questions, public-claim
   risk, and builder/auditor disagreement.
4. The human approver approves exact consequences, risk/taste decisions,
   preservation, irreversible actions, and scope expansion.
5. No classifier may waive human approval for deterministic human-required
   triggers.

The classifier never decides whether approval is required for irreversible or
approval-boundary actions. It only identifies that the trigger exists and routes
to `NEEDS_HUMAN`.

## 3. Deterministic Human-Required Triggers

These are non-overridable by builder, auditor, coordinator, dashboard, or model
consensus. They require exact Sami authorization:

- commit
- push
- branch creation or branch deletion
- PR creation
- merge
- public release / publication
- public claim or top-of-funnel announcement
- scope expansion
- protocol change
- kit change
- dashboard implementation
- trust-layer action
- credential, permission, OAuth, token, or global config change
- scratch cleanup, deletion, archival, commit, remote, or push
- durable behavior creation or change
- memory creation or change
- skill creation or change
- automation, scheduled check, webhook, heartbeat, notifier, subagent, or
  background-agent creation/change
- dependency install, runtime setup, bridge/plugin/MCP registration, or
  external service setup

The cockpit should show these as "human-required because consequence changes
state outside the already approved reversible scope."

## 4. Coordinator-Required Triggers

Route to `NEEDS_GPT` when any of these applies and no deterministic
human-required trigger is already primary:

- routing uncertainty
- `UNCLEAR` classification
- conflicting builder/auditor findings
- proof-classification disagreement
- public-claim or claim-boundary risk
- architecture/strategy/product-positioning choice
- outcome/rubric definition or revision
- repeated UX/cognitive-load failure
- "are we wasting time?" or milestone sequencing question
- standard-pattern mapping uncertainty
- trust/security/automation/tooling architecture question
- auditor upgrades the route to `NEEDS_GPT`
- Sami requests coordinator synthesis

Coordinator output is advice/synthesis until scribed into repo-visible state
and accepted or acted on by the human approver where approval is required.

## 5. Routine Triggers

Agents may classify work as `ROUTINE` only when it is already scoped and no
human/coordinator trigger fires.

Examples:

- read-only repo checks
- reading named evidence
- drafting proposals or audit notes inside an explicit design-only scope
- producing paste-ready text for the next actor
- updating an allowed turn note or allowed handoff field inside an already
  authorized scope
- source-of-truth refreshes only when separately authorized and limited to the
  named files
- mechanical verification inside an approved Outcome Circle

Critical boundary:

`ROUTINE` does not mean "authorized to mutate." It means "no additional routing
decision is needed." Mutation still requires the mutation to already be inside
the current exact approved scope.

## 6. Standard-Pattern Mapping

Do not invent a bespoke routing theory first. Use familiar software governance
patterns and add the repo's approval-boundary layer.

Mapping:

- Reviewer gates
  - Project analogue: auditor verifies builder output and may upgrade routing.
  - Boundary: auditor pass is evidence, not approval.
- Policy checks
  - Project analogue: no-touch list, allowed files, source-citation evidence,
    proof-classification boundaries, stale-state warnings.
  - Boundary: checks can block or inform; they do not approve.
- Risk tiers
  - Tier 0: read-only / analysis / draft text; usually `ROUTINE`.
  - Tier 1: reversible already-authorized repo-file updates; `ROUTINE` only
    inside exact approved scope.
  - Tier 2: preservation, dashboard implementation, kit/protocol/docs changes;
    usually `NEEDS_HUMAN` for exact authorization and may need Coordinator.
  - Tier 3: public release, trust-layer, credentials/global config,
    automation, irreversible cleanup; always `NEEDS_HUMAN`, often
    `NEEDS_GPT` before approval.
- CODEOWNERS / branch-protection style ownership
  - Project analogue: human approver owns consequences; auditor owns
    independent verification; coordinator owns synthesis; builder owns scoped
    implementation.
  - Boundary: role ownership does not grant approval unless the role is the
    configured human approver.
- CI/status checks
  - Project analogue: `git diff --check`, no-touch diffs, stash checks,
    duplicate-file checks, scratch verification, exact artifact inventories.
  - Boundary: passing checks are evidence inputs, not approval.
- Escalation on ambiguity
  - Project analogue: `UNCLEAR` defaults to Coordinator unless an exact
    human-required trigger is present.
- Human-in-the-loop review
  - Project analogue: exact human action text such as
    `authorize_exact_action`, `reject_redo`, `reject_close`,
    `ask_coordinator`, or `pause_pending`.

None of these standard patterns are implemented by this scope-lock. They are
design constraints for the later cockpit implementation.

## 7. Minimum Decision Cockpit Fields

The smallest cockpit panel that reduces routing burden should display:

- Current route state:
  - `ROUTINE`, `NEEDS_GPT`, `NEEDS_HUMAN`, `UNCLEAR`, `blocked`,
    `paused_pending_human`, or `paused_pending_coordinator`
- Next actor:
  - Builder, Auditor, Coordinator, Human approver, or no actor / waiting
- Recipient / paste target:
  - e.g. Codex, Claude, GPT, Sami decision text, or N/A
- Exact drafted next action:
  - copy-ready text, not a vague recommendation
- Why this route:
  - one sentence tied to documented triggers
- Evidence links:
  - repo-visible turn notes, audits, PRs, dashboard snapshot time, scratch path
    references when local evidence remains relevant
- What is authorized:
  - exact consequence already authorized, or `none`
- What is not authorized:
  - explicit exclusions, especially commit/push/PR/merge/release/scope
    expansion
- Stale/as-of state:
  - snapshot timestamp and source-of-truth warning
- Decision action options when human is needed:
  - `authorize_exact_action`, `reject_redo`, `reject_close`,
    `ask_coordinator`, `pause_pending`
- Drafted text is not approval warning
- `satisfied` is not approval reminder
- Auditor pass / model consensus / dashboard state are not approval reminder

The panel should not show full traces, runtime topology, vanity agent-online
metrics, live execution controls, green "safe to approve" badges, or generic
"Approve" buttons without exact scope.

## 8. Burden Metrics

The later implementation should be judged by whether it reduces routing burden,
not by visual complexity.

Recommended lightweight metrics:

1. Manual routing prompts composed by Sami per circle.
2. Ambiguous "who do I send this to?" moments per circle.
3. Time from builder/auditor report to correct next actor.
4. Copy-paste handoffs per circle, split by Codex / Claude / Coordinator /
   human decision.

Optional secondary metric:

- Number of times coordinator or auditor had to rewrite authorization text
  because the cockpit text was not exact enough.

These are measurement fields, not approval gates. They should be simple enough
to record manually in turn notes or COLLAB without adding automation.

## 9. No-Automation Boundary

This scope-lock explicitly does not authorize:

- autonomous approval
- autonomous commit/push/branch/PR/merge
- hidden state
- background agents
- notification/wakeup automation
- external services
- new credentials
- global config changes
- dashboard implementation
- live routing scripts
- MCP/plugin/bridge registration
- runtime scheduler
- subagents
- memory or skill creation
- scratch cleanup

Future wakeup/handoff triggers may be useful later, but the smallest safe
version should first be visible and manual: a cockpit field that says who to
paste to and what to paste. Any automatic notification or wake layer requires a
separate design and explicit human approval.

## 10. Future Build Packet Outline

If this scope-lock passes audit and Sami later authorizes implementation, the
future implementation Outcome Packet should likely allow only:

- `.agent-handoff/DASHBOARD.md`
- `.agent-handoff/DASHBOARD.html`
- `.agent-handoff/COLLAB.md`
- one implementation turn note

Likely implementation goal:

- replace the stale public-showcase snapshot focus with a current minimal
  routing cockpit panel
- preserve Decision Cockpit v1 view-only nature
- add current route state, next actor, paste target, exact action text,
  why-this-route, authorized/not-authorized, stale/as-of state, and burden
  metric placeholders
- avoid live routing scripts, external dependencies, automation, and broad UI
  redesign

Likely implementation no-touch:

- `PROTOCOL.md`
- `OPERATING-MODEL.md`
- `STRATEGY.md`
- `kit/v1/**`
- README / START_HERE / AGENTS / CLAUDE
- scratch dirs
- trust-layer files
- memory, skills, automations, subagents, scheduled checks, global config
- `.gitignore`

Likely pass evidence:

- dashboard remains static and self-contained
- dashboard copy does not imply approval
- `COLLAB.md` remains source of truth
- exact action text and paste target are visible
- human-required triggers cannot be downgraded by dashboard copy
- no no-touch surfaces changed
- browser QA if dashboard HTML is implemented in that later scope

## 11. Allowed Files For This Scope-Lock

This design-only turn may write only:

- `.agent-handoff/COLLAB.md`
- `.agent-handoff/turns/E6-ROUTING-COCKPIT-001-codex-routing-cockpit-scope-lock.md`

## 12. No-Touch List For This Scope-Lock

Do not edit:

- `.agent-handoff/PROTOCOL.md`
- `.agent-handoff/OPERATING-MODEL.md`
- `.agent-handoff/STRATEGY.md`
- `.agent-handoff/DASHBOARD.md`
- `.agent-handoff/DASHBOARD.html`
- `kit/v1/**`
- README
- START_HERE
- AGENTS
- CLAUDE
- `.gitignore`
- scratch dirs
- trust-layer files
- memory files
- skills
- automations
- subagents
- scheduled checks
- global config
- runtime/product files
- unrelated files

## 13. Stop Conditions

Stop and call Sami back if:

- entry tree is dirty before drafting
- HEAD is not `943ea38d2ec42e33e6bb6f9eeeb327d109eee9a8` or a descendant
- drafting would require dashboard implementation
- routing rules require protocol changes in this turn
- scope-lock would require kit edits or Stage B retry
- scope-lock would authorize automation, hidden state, global config, scratch
  cleanup, or public claims
- no-touch paths change
- branch/commit/PR/push/merge is requested without separate exact approval

## 14. Pass / Fail Criteria

PASS if all are true:

- scope-lock answers the ten requested routing/cockpit questions
- routing states reuse existing vocabulary where possible
- deterministic human-required triggers are non-overridable
- coordinator-required triggers are clear
- `ROUTINE` is explicitly not mutation authorization
- standard engineering gate patterns are mapped without claiming they are
  implemented
- minimum cockpit fields are defined
- burden metrics are defined
- no-automation boundary is explicit
- future build packet outline is narrow and implementation-free
- no no-touch files changed

FAIL if any are true:

- dashboard implementation is performed
- routing theory is invented while ignoring standard gate/review/risk patterns
- human-required triggers can be downgraded by builder, auditor, coordinator,
  or dashboard
- `satisfied`, audit pass, CI/check pass, or model consensus is treated as
  approval
- live automation, notification, hidden state, global config, scratch cleanup,
  public release, or trust-layer work is authorized
- no-touch paths change

## 15. When The Human Approver Is Called Back

Call Sami back for:

- approval or rejection of this scope-lock
- any dashboard implementation
- any protocol/operating-model/strategy change
- any kit change
- any commit, push, branch, PR, merge
- any public claim, publication, release, or top-of-funnel action
- any scratch cleanup/deletion/disposition
- any automation, wakeup, notification, skill, memory, subagent, scheduled
  check, global config, credential, or external service setup
- any ambiguity that would otherwise expand scope

## 16. When Coordinator Is Called Back

Call Coordinator for:

- builder/auditor disagreement on routing design
- uncertainty about standard-pattern mapping
- public-claim or launch-readiness implications
- architecture/strategy conflict
- whether to sequence kit cleanup before dashboard implementation
- whether the burden metric is too heavy or too weak

## 17. Commit / Push Rule

No commit, push, branch, PR, merge, or branch deletion is authorized in this
scope-lock.

Any preservation PR requires separate exact Sami authorization naming branch,
commit message, files, and PR creation.

## 18. Artifact Visibility

This scope-lock is local repo state until preserved by a separately authorized
PR.

No scratch artifacts are created, copied, edited, archived, or deleted.

## 19. Recommended Next Step

Claude should audit this scope-lock for:

- whether deterministic routing reduces Sami's burden without adding hidden
  authority
- whether the human/coordinator split follows `PROTOCOL.md` and
  `OPERATING-MODEL.md`
- whether standard gate/risk/reviewer patterns are mapped accurately
- whether the future implementation scope is narrow enough
- whether any wording accidentally authorizes implementation

After audit, Sami decides whether to preserve the scope-lock and whether to
authorize a later Decision Cockpit implementation Outcome Circle.

