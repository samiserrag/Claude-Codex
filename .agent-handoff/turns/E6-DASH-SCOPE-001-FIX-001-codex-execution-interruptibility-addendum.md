# E6-DASH-SCOPE-001-FIX-001 - Codex execution interruptibility addendum

## Coordinator Trigger

- State: ROUTINE
- Reason: Sami explicitly authorized this narrow design-only addendum to the existing Decision Cockpit v1 scope lock; no dashboard implementation, protocol edit, bootstrap relaxation, or new Outcome Circle is started.

## Project Mode Estimate

- Dominant mode: Coordinator / design-scope addendum
- Reason: this turn adds a missing dashboard state requirement for execution-mode visibility and interruptibility without editing product files.

## Sources Read

- `.agent-handoff/turns/E6-DASH-SCOPE-001-codex-decision-cockpit-v1-scope-lock.md`
- `.agent-handoff/turns/E6-DASH-SCOPE-001-claude-audit-decision-cockpit-v1-scope-lock.md`
- `.agent-handoff/turns/E6-RETRO-001-codex-bootstrap-retrospective.md`
- `.agent-handoff/turns/E6-RETRO-001-claude-audit-bootstrap-retrospective.md`
- `.agent-handoff/PROTOCOL.md`
- `.agent-handoff/OPERATING-MODEL.md`
- `.agent-handoff/STRATEGY.md`
- `.agent-handoff/mockups/decision-cockpit-v3.html`
- `.agent-handoff/COLLAB.md`

## Entry State

Current repo HEAD:

```text
42614be6a7c258366d4cbd332fd365ca7d0b3447
```

Pre-write `git status --short --branch --untracked-files=all`:

```text
## e6-dash-scope-001-decision-cockpit-v1-scope-lock...origin/e6-dash-scope-001-decision-cockpit-v1-scope-lock
```

The active branch is the E6-DASH-SCOPE-001 scope-lock branch, not `main`. The working tree was clean before this addendum. The addendum stays inside the active scope-lock stack and touches only the allowed files.

## 1. Execution Mode Purpose

Decision Cockpit v1 needs a distinct **Agents Running / Execution Mode** state.

Purpose:

- The human approver has already approved an Outcome Packet.
- Agents are working inside that packet.
- The human should not need to approve every builder/auditor micro-turn.
- The human must remain able to interrupt, steer, pause, reject, close, or ask the Coordinator if they notice drift.

Execution Mode is not approval mode. It is not "all clear." It means:

```text
Agents are working inside approved scope, and the next ordinary step does not require human action.
```

The cockpit should reduce human routing burden without making the inner loop a black box.

## 2. Required Dashboard State

Decision Cockpit v1 must include a minimal `Agents Running` state for active Outcome Circles and other approved execution loops.

Exact copy:

```text
Agents are working inside approved scope.
```

Supporting copy:

```text
No human action is needed right now.
You may pause, stop, ask Coordinator, or steer at any time.
You will be called back for satisfied, revision, blocker, scope conflict, iteration cap, irreversible action, or approval boundary.
```

Recommended Simple Signals for this state:

```text
What is happening? Agents running inside approved scope.
Your role right now: Human approver, standing by.
Can this wait? Yes. No action needed unless you want to interrupt.
Current protocol state: Execution Mode.
Human approval required: Not for the current reversible micro-turn.
```

Do not use:

```text
Approved
Auto-approved
All clear
No oversight needed
Agents are authorized for anything
```

## 3. Human Interrupt Actions During Execution

Execution Mode must expose these interrupt actions:

| UI label | Protocol action / state | Note requirement | Meaning |
| --- | --- | --- | --- |
| Pause | `pause_pending` / `paused_pending_human` | Required if blocking or long-running | Stop the loop temporarily without rejecting the work. |
| Reject / Redo | `reject_redo` / `needs_revision` | Required | Stop current trajectory and request another attempt within packet limits or with a new packet if needed. |
| Reject / Close | `reject_close` / `closed_rejected` | Required | Close the current scope without another attempt. |
| Ask Coordinator | `ask_coordinator` / `paused_pending_coordinator` or `needs_gpt` | Required | Pause for coordinator synthesis when scope, strategy, or judgment is unclear. |
| Stop / Escalate blocker | `blocker` or `scope_conflict` | Required | Stop when work appears unsafe, out of scope, stale, or non-reversible. |
| Add steering note | Human Decision Note / steering note | Required if it changes direction; optional for observational notes | Preserve human context without silently changing protocol. |

Exact interrupt copy:

```text
Interrupt options
Pause, stop, ask Coordinator, or steer this loop. Interrupts do not approve new scope.
```

The static MVP may show copy buttons for each interrupt action. It must not perform live agent cancellation, routing, webhook calls, or hidden state mutation.

## 4. Reversibility Rule

Execution Mode is allowed only while inner-loop work remains reversible by default.

Allowed within packet scope:

- local diffs
- draft turn notes
- evidence collection
- proposed patches
- read-only checks
- local verification commands
- builder/auditor iteration notes

Explicit human authorization is required for:

- commit
- push
- branch or PR creation when not explicitly allowed by the packet
- merge
- deploy
- publish
- external send
- deletion
- credential use
- trust-layer change
- protocol relaxation
- scope expansion
- public release
- modifying no-touch files
- any irreversible external side effect

Rule:

```text
If an internal step is not reversible, agents must stop and call the human approver before doing it.
```

Dashboard copy:

```text
Reversibility: Inner-loop work is reversible. Irreversible actions require explicit human authorization.
```

If reversibility is unknown:

```text
Reversibility: Unknown. Stop and call the human approver.
```

## 5. Visibility Rule

Execution Mode must show or link to:

- active Outcome Packet
- current iteration
- builder status
- auditor status
- allowed files
- no-touch list
- stop conditions
- latest evidence
- reversibility status
- last repo-visible artifact
- next expected callback condition

Minimum compact view:

```text
Active packet: <packet name>
Iteration: <n> of <max>
Builder: <state>
Auditor: <state>
Allowed files: <summary or link>
No-touch: <summary or link>
Stop conditions: <summary or link>
Latest evidence: <turn note / audit path>
Reversibility: reversible | unknown | human required
```

This is visibility, not a live runner. The dashboard may show stale snapshots, so it must keep the source-of-truth disclaimer: `COLLAB.md` and turn notes remain authoritative.

## 6. Callback Conditions

The human approver must be called back for:

- `satisfied`
- `needs_revision`
- `blocker`
- `scope_conflict`
- `max_iterations_reached`
- `failed`
- `interrupted`
- irreversible proposed action
- stale or unknown state
- human interrupt
- agent disagreement
- GPT / Coordinator uncertainty
- no-touch ambiguity
- scope drift
- packet missing or corrupted
- evidence gap that prevents audit

Callback copy:

```text
You will be called back when the loop reaches a decision boundary or when agents cannot safely continue inside the packet.
```

The dashboard must not say "No human action needed" when any callback condition is already active.

## 7. Failure Modes And Mitigations

| Failure mode | Risk | Mitigation |
| --- | --- | --- |
| Loop becomes black box | Human cannot tell what agents are doing | Show packet, iteration, builder/auditor state, latest evidence, and stop conditions. |
| Agents proceed after human concern | Human interrupt is ignored | Provide visible interrupt actions; copied interrupt text must explicitly stop work pending human/coordinator disposition. |
| Irreversible action hidden as routine | Commit/push/deploy/delete happens inside "running" state | Reversibility status is required; non-reversible steps force human callback. |
| Human cannot tell what is happening | "Agents running" is too vague | Include current packet, iteration, role states, allowed/no-touch summaries, and latest artifact link. |
| Steering note becomes silent protocol drift | Human note changes future thresholds without approval | Notes are descriptive, not normative; steering affects only current packet unless codified later. |
| Agents treat "running" as "approved" | Execution state becomes broad authorization | Copy says "inside approved scope"; approval boundary remains visible; no new scope or irreversible action authorized. |
| Dashboard says "nothing needed" when callback is pending | Human misses a decision boundary | Callback conditions override Execution Mode and switch cockpit into decision-pending state. |
| Interrupt buttons imply live cancellation | UI promises automation not implemented | Buttons copy visible text only; no runner, webhook, notification, or live transport. |
| Too much execution detail overloads cockpit | Human stops reading | Compact summary first; packet/evidence details behind links or collapsible sections. |

## 8. Implementation Consequence

Recommendation: **Execution Mode should be a required v1 state, minimal.**

Decision Cockpit v1 implementation packet should include:

- one compact `Agents Running` view
- interrupt action buttons
- links/summaries for packet, evidence, stop conditions, and latest artifact
- reversibility status
- callback conditions
- source-of-truth warning

Do not build:

- full auto-runner
- agent-to-agent transport
- wakeups
- notifications
- webhooks
- live cancellation
- runtime backend
- trust manifests/signing
- queue/worker infrastructure

The build target is a static, view-only cockpit state that makes execution visible and interruptible. It does not execute or route agents.

## Relationship To E6-DASH-SCOPE-001

This addendum preserves the original scope lock and adds one required state:

```text
Decision Cockpit v1 must handle both:
1. Decision Pending: human action required.
2. Agents Running / Execution Mode: no human action required now, but interruptible and reversible.
```

This does not change:

- default single-panel Decision Cockpit direction
- Kanban deferral
- five human decision actions
- Human Decision Notes
- Risk Context
- trust footer
- source-of-truth disclaimer
- static view-only implementation boundary
- no dashboard implementation in this turn

## Verification

`git status --short --branch --untracked-files=all` after writing:

```text
## e6-dash-scope-001-decision-cockpit-v1-scope-lock...origin/e6-dash-scope-001-decision-cockpit-v1-scope-lock
 M .agent-handoff/COLLAB.md
?? .agent-handoff/turns/E6-DASH-SCOPE-001-FIX-001-codex-execution-interruptibility-addendum.md
```

`git diff --check`: exit 0.

Tracked diff names:

```text
.agent-handoff/COLLAB.md
```

The new addendum turn note is untracked, as expected.

No-touch diff check for dashboard, mockups, protocol, operating model,
strategy, kit, root docs, `docs/`, alert-state, advisor-notes, reflections,
and improvements: no output.

New Outcome Circle check:

```text
rg --files .agent-handoff/turns | rg 'E6-OC-00[6-9]|E6-OC-0[1-9][0-9]'
```

Result: no output. No new Outcome Circle was started.

Duplicate-noise check:

```text
find .agent-handoff -name '* 2.md' -print
```

Result: no output.

Confirmed:

- Only allowed files changed by this turn: `.agent-handoff/COLLAB.md` and
  `.agent-handoff/turns/E6-DASH-SCOPE-001-FIX-001-codex-execution-interruptibility-addendum.md`.
- No `DASHBOARD.md` or `DASHBOARD.html` diff.
- No mockup edits.
- No `PROTOCOL.md`, `OPERATING-MODEL.md`, or `STRATEGY.md` diff.
- No kit, README, root docs, or `docs/` diff.
- No trust-layer implementation.
- No new Outcome Circle.
- No staging, commit, push, branch, PR, or merge.

## Result

Addendum recommendation: Decision Cockpit v1 should include a minimal required `Agents Running / Execution Mode` state that makes approved inner-loop work visible, reversible, interruptible, and steerable without requiring human approval on every micro-turn.

Hard stop after local addendum for Claude audit.
