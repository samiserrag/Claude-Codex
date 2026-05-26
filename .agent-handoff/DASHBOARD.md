# Polaris - Decision Cockpit v1

Static reference cockpit for the current handoff. This file is a view, not
the source of truth.

## Source Of Truth

- `.agent-handoff/COLLAB.md` is authoritative.
- On conflict, `COLLAB.md` wins.
- `DASHBOARD.md` and `DASHBOARD.html` do not grant approval.
- Do not infer approval from UI state, copy buttons, agent satisfaction,
  auditor pass, model consensus, silence, or visual status.
- Human approval authorizes only the exact named consequence.

## Current Live State: Courier Only

**Paste the E6-DASH-003 audit request to Auditor.**

Codex has implemented the static Decision Cockpit v1 files locally. The next
handoff is Claude audit. This is not a human approval request, and no
consequence is authorized by viewing or copying this prompt.

## Simple Signals / Focus Panel

| Field | Value |
| --- | --- |
| What is happening? | Builder handoff is ready for independent audit. |
| Decision needed | No approval decision. Courier action only. |
| Your role right now | Courier only. |
| Can this wait? | Yes. No agent is authorized to proceed without audit. |
| Current protocol state | E6-DASH-003 builder complete; auditor pending. |
| Human approval required | Not for courier handoff. Required later for any commit, push, PR, merge, launch, or new scope. |

## Primary Action Surfaced

Paste target: Auditor.

Payload type: audit handoff prompt.

Visible copy target in `DASHBOARD.html`: `copy-audit-prompt`.

```text
[Lane 1: Claude-Codex Harness | Claude Code / Anthropic | Thread: E6-DASH-003 Decision Cockpit v1 implementation audit | Role: auditor inside approved Outcome Circle]

Audit E6-DASH-003 Decision Cockpit v1 implementation.

Inspect .agent-handoff/DASHBOARD.html, .agent-handoff/DASHBOARD.md, .agent-handoff/COLLAB.md, and .agent-handoff/turns/E6-DASH-003-codex-decision-cockpit-v1-implementation-iter-1.md.

Grade against the approved E6-DASH-003 rubric: clean entry, full packet before implementation, HTML/MD parity, static self-contained dashboard, Human Decision Pending state, Agents Running / Execution Mode state, five decision actions, Human Decision Notes, approval boundary, Risk Context, Evidence Summary, Wait-risk signal, Trust footer, source-of-truth disclaimer, current assignments metadata, copy-visible-only behavior, no network/storage/backend/runtime behavior, and no-touch discipline.

Auditor pass is not approval. Rubric satisfied is not approval. Model consensus is not approval. Hard stop after audit.
```

## Current Assignments Metadata

| Role | Current assignment |
| --- | --- |
| Human approver | Configured human approver. Reusable role is human approver. |
| Coordinator | GPT-5.5 Pro / OpenAI for packet framing when called. |
| Builder | Codex / OpenAI completed this implementation turn. |
| Auditor | Claude Code / Anthropic is the next requested actor. |
| Role rule | Roles are model-agnostic and swappable. Model names are current assignments, not protocol vocabulary. |

## Evidence Summary

- Clean entry captured at HEAD `8a2e0528ca6328707e3355238568498448db67cf`.
- Full E6-DASH-003 packet was scribed before implementation.
- Dashboard files were replaced with static Decision Cockpit v1 content.
- Builder note records changed sections, copy targets, parity, and no-touch
  verification.

## Wait-Risk Signal

Waiting does not authorize anything. The only cost is delayed Claude audit and
delayed preservation decision. No runtime, deploy, public release, or external
action is pending from the dashboard.

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
current courier handoff.

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
| Consequence | Claude audit begins for the static dashboard implementation. No merge, PR, public release, or protocol change follows from this dashboard. |
| Evidence confidence | Builder evidence is repo-visible; auditor has not graded it yet. |
| Reversibility | Local dashboard and handoff edits are reversible until a later exact human authorization preserves them. |
| Open caveats | Visual judgment and governance semantics still need independent audit. |
| Unknowns | No external user testing; no browser automation evidence unless separately recorded. |
| If wrong | Claude should request iteration 2 for copy, parity, self-containment, or boundary defects. |
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
- Three-panel concurrent layout.
- Real-time agent status.
- Analytics, throughput, lead-time, leaderboard, or agent-online metrics.
- Trust manifests, signing, hash manifests, transparency logs, and blockchain.
- Notification, wakeup, webhook, cron, or auto-routing.
- README / strangerprintability.
- Public-alpha packaging.
- Protocol relaxation.
- Runtime/backend integration.
