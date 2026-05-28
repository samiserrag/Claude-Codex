# Decision Cockpit v1

Static reference cockpit snapshot for the current handoff and public showcase.
This file is a view, not the source of truth or the primary public entrypoint.

## Source Of Truth

- `.agent-handoff/COLLAB.md` is authoritative.
- On conflict, `COLLAB.md` wins.
- `DASHBOARD.md` and `DASHBOARD.html` do not grant approval.
- Do not infer approval from UI state, copy buttons, agent satisfaction,
  auditor pass, model consensus, silence, or visual status.
- Human approval authorizes only the exact named consequence.

## Current Reference State: Public Showcase Snapshot

**Start with `START_HERE.md`, then use `COLLAB.md` for live state.**

The repo is now positioned as a public showcase / build journal for the
Git-native approval-boundary protocol. Decision Cockpit v1 is a reference
cockpit snapshot: useful evidence and optional adoption surface, but not the
copyable kit and not a live approval mechanism.

This is not a human approval request. No consequence is authorized by viewing
or copying dashboard text.

## Simple Signals / Focus Panel

| Field | Value |
| --- | --- |
| What is happening? | Public showcase positioning has moved from scope-lock into implementation. |
| Decision needed | No approval decision from this dashboard. Use `COLLAB.md` for the active handoff. |
| Your role right now | Reader / reviewer. Human approval still requires exact text outside this dashboard. |
| Can this wait? | Yes. The dashboard grants no runtime or release consequence. |
| Current protocol state | Build journal + adopter kit framing is being made public-facing; kit dry-run remains future proof. |
| Human approval required | Required later for any commit, push, PR, merge, launch, public release, trust-layer work, or new scope. |

## Primary Action Surfaced

Public entrypoint: `START_HERE.md`.

Live source of truth: `.agent-handoff/COLLAB.md`.

Visible copy target in `DASHBOARD.html`: `copy-primary-note`.

```text
Read START_HERE.md first. Use kit/v1/README.md if you want the copyable
adopter kit. Use COLLAB.md for live repo state. This dashboard is a reference
cockpit snapshot and does not grant approval.
```

## Current Assignments Metadata

| Role | Current assignment |
| --- | --- |
| Human approver | Configured human approver. Reusable role is human approver. |
| Coordinator | Current local assignment is instance metadata. Reusable role is Coordinator. |
| Builder | Current local assignment is instance metadata. Reusable role is Builder. |
| Auditor | Current local assignment is instance metadata. Reusable role is Auditor. |
| Role rule | Roles are model-agnostic and swappable. Model names are current assignments, not protocol vocabulary. |

## Evidence Summary

- Decision Cockpit v1 was implemented and audited in E6-DASH-003.
- Root README stranger-orientation was audited in E6-README-001.
- Adopter-facing name scrub passed in E6-NAME-SCRUB-001.
- `kit/v1` first-pass implementation passed in E6-KIT-001.
- Public showcase positioning was scoped and audited in E6-PUBLIC-POSITION-001.
- This dashboard refresh is copy/state-only and keeps the static reference
  cockpit nature intact.

## Wait-Risk Signal

Waiting does not authorize anything. The cost is delayed public-position
implementation review and preservation. No runtime, deploy, public release, or
external action is pending from the dashboard.

## Safety Language

- `satisfied` is not approval.
- Auditor pass is not approval.
- Model consensus is not approval.
- Human approval authorizes only the exact named consequence.
- `COLLAB.md` is authoritative; dashboard is view-only.

## Required Cockpit State: Human Decision Pending

Agents may be satisfied. Human approval is still pending. The human must
choose an exact decision action. No consequence is authorized until exact
human approval.

This state is not the current live handoff. It is the required cockpit
behavior when approval or rejection is genuinely pending.

## Required Cockpit State: Agents Running / Execution Mode

Agents are working inside approved reversible scope. No human approval is
needed for every reversible micro-turn. The human may interrupt, pause,
reject/redo, reject/close, ask Coordinator, or steer anytime. Irreversible
actions still require exact human approval.

Execution Mode must show packet, iteration, builder/auditor status, allowed
files, no-touch list, stop conditions, latest evidence, and reversibility
status.

## Decision Options

These are the portable decision actions for a real Human Decision Pending
state. They are shown as visible templates, not active approval for the
current reference snapshot.

### Authorize exact action

Action id: `authorize_exact_action`

Meaning: authorizes only the named consequence and scope.

Visible copy target in `DASHBOARD.html`: `copy-authorize`.

```text
Action: authorize_exact_action
I authorize only: [exact named consequence or scope].
This does NOT authorize: [excluded scope, launch, merge, protocol change, public release, or other excluded consequence].
Evidence refs: [repo-visible turn notes or audit paths].
Decision rationale: optional for routine authorization.
```

### Reject / Redo

Action id: `reject_redo`

Meaning: returns work for revision inside the approved packet when possible.

Visible copy target in `DASHBOARD.html`: `copy-redo`.

```text
Action: reject_redo
Requested state: needs_revision
Redo because: [specific evidence, copy, parity, scope, or safety defect].
Scope boundary: stay inside the approved packet unless a new packet is authorized.
Decision rationale: required.
```

### Reject / Close

Action id: `reject_close`

Meaning: closes the request without approval.

Visible copy target in `DASHBOARD.html`: `copy-close`.

```text
Action: reject_close
Requested state: closed_rejected
Close because: [why this outcome should not continue].
This does NOT authorize alternate scope or replacement work.
Decision rationale: required.
```

### Ask Coordinator

Action id: `ask_coordinator`

Meaning: asks for synthesis or clarification before the human decides.

Visible copy target in `DASHBOARD.html`: `copy-coordinator`.

```text
Action: ask_coordinator
Question for Coordinator: [scope, strategy, risk, or judgment question].
Current uncertainty: [what prevents a human decision].
Decision rationale: required.
No implementation, approval, or new scope is authorized by this question.
```

### Pause

Action id: `pause_pending`

Meaning: keeps state pending without approval or rejection.

Visible copy target in `DASHBOARD.html`: `copy-pause`.

```text
Action: pause_pending
Pause until: [time, event, or condition].
Reason: [optional for short non-blocking pause; required if blocking or long-running].
This does NOT authorize approval, rejection, new scope, or irreversible action.
```

## Human Decision Notes

Field label:

```text
Decision rationale
```

Helper copy:

```text
Visible to future agents and preserved in the audit trail. Keep to ~2-4 sentences. Avoid private reasoning, secrets, or content you would not include in a PR review.
```

Required-note warning:

```text
A decision rationale is required for reject, ask, override, or long pause.
```

Rules:

- Notes are descriptive, not normative.
- Agents may cite notes as context but may not adapt thresholds based on them.
- Notes must not include private reasoning, secrets, or content unsuitable for
  a PR review.

## Approval Boundary

### This authorizes

- Only the exact named consequence in the visible human text.
- Only the files, scope, and action explicitly listed.

### This does NOT authorize

- Public release, protocol relaxation, merge, push, deploy, trust-layer work,
  or new scope unless named.
- Turning auditor satisfaction into approval.

## Risk Context

This summarizes what the agents found. It does not decide for you.

| Field | Value |
| --- | --- |
| Consequence | Public readers can see the reference cockpit without stale E6-DASH handoff state. No merge, PR, public release, or protocol change follows from this dashboard. |
| Evidence confidence | Proof layers are repo-visible; this copy refresh still needs independent audit. |
| Reversibility | Local dashboard and public-position edits are reversible until a later exact human authorization preserves them. |
| Open caveats | External adoption, kit dry-run, trust hardening, and scale remain unproven. |
| Unknowns | No external user testing; no public-proof run; no kit dry-run yet. |
| If wrong | Claude should request iteration 2 for copy, parity, self-containment, stale-state, or boundary defects. |
| Human approval required | Yes for any commit, push, PR, merge, launch, protocol change, or irreversible consequence. |

## Trust Footer

Audit trail: Git-visible. Verifiable through PR and commit history.
Tamper-evident when protected branches, signing, manifests, or external
witnesses are configured. Not tamper-proof. No blockchain or legal compliance
claim is made by this dashboard.

Static self-contained file. No external CSS or JavaScript. No network,
storage, backend, notification, webhook, model, or runtime behavior. Copy
buttons copy only visible text from this page.

## Deferred By This Dashboard

- Kanban / Operations Board.
- Board Mode / Outcome Board.
- Three-panel concurrent layout.
- Real-time agent status.
- Analytics, throughput, lead-time, leaderboard, or agent-online metrics.
- Trust manifests, signing, hash manifests, transparency logs, and blockchain.
- Notification, wakeup, webhook, cron, or auto-routing.
- Public release / top-of-funnel launch.
- Public-alpha packaging.
- Kit dry-run.
- Public-proof runs.
- Protocol relaxation.
- Runtime/backend integration.
