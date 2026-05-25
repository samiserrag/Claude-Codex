# E6-DASH-SCOPE-001 - Codex Decision Cockpit v1 scope lock

## Coordinator Trigger

- State: ROUTINE
- Reason: Sami explicitly authorized this design-only scope-lock turn; dashboard implementation, protocol relaxation, public release, and new Outcome Circles remain out of scope.

## Project Mode Estimate

- Dominant mode: Coordinator / design scope lock
- Reason: this turn translates existing convergence into a buildable dashboard scope without editing the dashboard or starting implementation.

## Sources Read

- `.agent-handoff/PROTOCOL.md`
- `.agent-handoff/OPERATING-MODEL.md`
- `.agent-handoff/STRATEGY.md`
- `.agent-handoff/COLLAB.md`
- `.agent-handoff/turns/E6-RETRO-001-codex-bootstrap-retrospective.md`
- `.agent-handoff/turns/E6-RETRO-001-claude-audit-bootstrap-retrospective.md`
- `.agent-handoff/turns/E6-DOCS-ALIGN-001-codex-decision-notes-trust-doc-alignment.md`
- `.agent-handoff/turns/E6-DOCS-ALIGN-001-claude-audit-decision-notes-trust-doc-alignment.md`
- `.agent-handoff/turns/E6-DOCS-ALIGN-001-FIX-001-codex-portability-wording-sweep.md`
- `.agent-handoff/turns/E6-DOCS-ALIGN-001-FIX-001-claude-audit-portability-sweep.md`
- `.agent-handoff/turns/E6-DOCS-ALIGN-001-FIX-002-codex-approver-label-signpost.md`
- `.agent-handoff/turns/E6-DOCS-ALIGN-001-FIX-002-claude-audit-approver-label-signpost.md`
- `.agent-handoff/mockups/decision-cockpit-v1.html`
- `.agent-handoff/mockups/decision-cockpit-v2.html`
- `.agent-handoff/mockups/decision-cockpit-v3.html`
- Sami/GPT external strategy framing from the E6-DASH-SCOPE-001 prompt.

## Entry State

Current repo HEAD:

```text
cc07dada92bc8e533c985605c806cf3b8c913d0a
```

Pre-write `git status --short --branch --untracked-files=all`:

```text
## main...origin/main
```

Observed state matches the expected clean PR #13 merge state.

## 1. Default View Decision

Decision Cockpit v1 should default to a **single-panel Decision Cockpit / Command View**.

Rationale:

- The core method is cognitive scalability without approval laundering.
- The first screen should answer what the human approver must decide, what evidence supports it, what the action does, and what it does not authorize.
- A Kanban board answers "what exists?" and "where is work?" but not the approval-boundary question.

Scope lock:

- **Default:** single-panel Decision Cockpit.
- **Secondary:** Kanban / Operations Board, deferred. It may later scan workload, but it must not be an approval surface.
- **Deferred:** three-panel concurrent layout, dense analytics, lane dashboard, and IDE-like management.
- **Mockup use:** use `decision-cockpit-v3.html` as the nearest baseline/inspiration, not as final implementation. v3 has the right role-agnostic direction, decision options, risk-context framing, and visual tone. It must be corrected to include all five decision actions and Human Decision Notes.

Mockup lessons:

- v1 is semantically disciplined but too plain as a public-facing default.
- v2 improves craft and hierarchy but still carries some model-name coupling.
- v3 is closest: role-agnostic, polished, not hype-driven, and explicit about approval boundaries.
- None of the mockups are authoritative dashboard implementation.

## 2. MVP Components

Decision Cockpit v1 must include exactly these top-level components:

1. **Simple Signals / Focus Panel**
   - current state summary
   - current human role
   - whether action is needed
   - whether the decision can wait

2. **Human Role**
   - label: `Your role right now`
   - value uses portable role label, usually `Human approver`
   - current assignment metadata may separately show the local person's name

3. **Decision Needed**
   - the actual decision in one sentence
   - no generic "approve" language

4. **Primary Action Surfaced**
   - one prominent action based on current handoff
   - must not say "recommended action"
   - must show paste target and payload type

5. **Decision Options**
   - `authorize_exact_action`
   - `reject_redo`
   - `reject_close`
   - `ask_coordinator`
   - `pause_pending`

6. **Human Decision Note Field**
   - visible near decision options
   - optional or required depending on action
   - preserved as audit rationale, not private reasoning

7. **Approval Boundary**
   - `This authorizes`
   - `This does NOT authorize`

8. **Risk Context**
   - consequence
   - evidence confidence
   - reversibility
   - open caveats
   - unknowns
   - if wrong
   - human approval required

9. **Evidence Summary**
   - three to five concise bullets
   - link/button to full audit or turn-note source

10. **Wait-Risk / Can-This-Wait Signal**
    - whether agents are blocked
    - what happens if the human does nothing now

11. **Trust Footer**
    - truthful Git-visible/audit-visible posture
    - no tamper-proof or blockchain claim

12. **Source-Of-Truth Disclaimer**
    - `COLLAB.md` remains authoritative
    - dashboard is a static view
    - hidden chat and UI state are not approval

## 3. Required Exact Copy

### Header / Status

Use:

```text
Agents are satisfied. Human approval is pending.
```

Alternate when not satisfied:

```text
Agents need a human decision.
```

Do not use:

```text
Approved
All approved
All systems go
Ready to ship
Safe to approve
```

### Simple Signals Labels

Use these labels:

```text
What is happening?
Decision needed
Your role right now
Can this wait?
Current protocol state
Human approval required
```

### Primary Action Label

Use:

```text
Primary action surfaced
```

Button copy pattern:

```text
Copy exact authorization
```

Metadata:

```text
Paste target: <role>
Payload type: <authorization | rejection | coordinator question | pause note>
```

### Decision Option Labels

Use both human-readable labels and portable action ids:

| UI label | Action id |
| --- | --- |
| Authorize exact action | `authorize_exact_action` |
| Reject / Redo | `reject_redo` |
| Reject / Close | `reject_close` |
| Ask Coordinator | `ask_coordinator` |
| Pause pending | `pause_pending` |

### Human Decision Note Field

Field label:

```text
Decision rationale
```

Helper text:

```text
Visible to future agents and preserved in the audit trail. Keep to ~2-4 sentences. Avoid private reasoning, secrets, or content you would not include in a PR review.
```

Placeholder:

```text
Example: "Approving preservation PR only because artifacts are historical and reversible; not approving public release or protocol relaxation."
```

Required-note warning:

```text
A decision rationale is required for this action. It will be preserved with the action.
```

### Risk Context Block

Header:

```text
Risk context
```

Disclaimer:

```text
This summarizes what the agents found. It does not decide for you.
```

Labels:

```text
Consequence
Evidence confidence
Reversibility
Open caveats
Unknowns
If wrong
Human approval required
```

### Trust Footer

Use:

```text
Audit trail: Git-visible. Verifiable through PR and commit history.
Tamper-evident when protected branches, signing, manifests, or external witnesses are configured.
Not tamper-proof. No blockchain or legal compliance claim is made by this dashboard.
```

### Approval Boundary

Use:

```text
This authorizes
```

and:

```text
This does NOT authorize
```

The `does NOT` wording should remain visibly stronger than surrounding text.

### Satisfied Warning

Use:

```text
`satisfied` is not approval. Auditor pass is not approval. Model consensus is not approval.
```

## 4. Human Decision Notes Behavior

Human Decision Notes are decision rationale, not private chain-of-thought.

Required cases:

- `reject_redo`
- `reject_close`
- `ask_coordinator`
- `pause_pending` when the pause blocks another agent or is long-running
- any decision that overrides a Builder, Auditor, or Coordinator recommendation

Optional cases:

- routine `authorize_exact_action`
- short non-blocking `pause_pending`

Content shape:

```text
Why I chose this:
Scope boundary:
Caveat / condition:
```

Rules:

- Notes are visible to future agents and preserved in the audit trail.
- Notes must not include secrets, private reasoning, or content unsuitable for PR review.
- Notes are descriptive, not normative, until codified by explicit protocol or doc-lock turn.
- Agents may cite notes as context with attribution.
- Agents may not adapt builder/auditor thresholds, pad evidence, soften critiques, add boilerplate, or silently modify rubrics based on notes.

Dashboard behavior:

- Show the note field below decision options, not hidden in an evidence drawer.
- When a required action is selected, display the required-note warning inline.
- Do not block copy for optional notes.
- For a static MVP, the field may be plain visible text area plus action-specific generated copy. It does not need storage.

## 5. Risk Context

Risk Context is not permission. It is a structured decision aid.

Use multi-part context:

- **Consequence:** what changes if the action is taken.
- **Evidence confidence:** what evidence quality supports the action.
- **Reversibility:** how hard it is to undo.
- **Open caveats:** known limitations.
- **Unknowns:** what has not been checked.
- **If wrong:** likely failure or recovery path.
- **Human approval required:** always say yes when action has consequences.

Avoid:

- `safe to approve`
- `low risk, approve`
- `all agents agree`
- `all systems go`
- green-only risk stamps
- a single risk score

Risk copy should include prose for caveats, unknowns, and if-wrong. Labels alone will become rubber-stamp bait.

## 6. Trust Footer

Decision Cockpit v1 should include a small persistent trust footer.

Required posture:

- Git-visible evidence is useful.
- PR and commit history make records reviewable.
- Tamper-evident claims require configured hardening.
- This dashboard is not tamper-proof.
- No blockchain claim.
- No legal/compliance claim.

Exact footer copy is in section 3.

Do not show a green "signed" or "anchored" indicator unless those mechanisms actually exist. Trust hardening is future work.

## 7. Interaction Model

Buttons/actions:

1. **Copy exact authorization**
   - copies visible exact authorization text only
   - includes action id `authorize_exact_action`
   - includes explicit scope and not-authorized boundaries

2. **Copy reject / redo instruction**
   - copies visible `reject_redo` instruction
   - requires decision rationale
   - must specify what evidence or work must be redone
   - does not authorize new scope unless text explicitly says so

3. **Copy reject / close instruction**
   - copies visible `reject_close` instruction
   - requires decision rationale
   - closes current scope as `closed_rejected`
   - does not authorize alternate scope

4. **Ask Coordinator**
   - copies visible coordinator question
   - requires decision rationale
   - state maps to `paused_pending_coordinator` or `needs_gpt`

5. **Pause**
   - copies visible pause note
   - note required only for blocking or long-running pauses
   - state maps to `paused_pending_human`

6. **View full audit**
   - opens or points to relevant turn-note source
   - does not grant approval

Forbidden interactions:

- drag/drop approvals
- one-click approval without exact visible text
- auto-routing
- notifications/webhooks
- hidden clipboard payload that differs from visible text
- live API/model calls
- UI state changing protocol state

## 8. State Model / Role Model

Use portable roles:

- Human approver
- Coordinator
- Builder
- Auditor
- Scribe, only where scribing is the actual current action
- Verifier, only where verification is the actual current action

Model/person names may appear only in a `Current assignments` metadata block, for example:

```text
Current assignments
Coordinator: GPT-5.5 Pro
Builder: Codex
Auditor: Claude Code
Human approver: Sami
Roles are protocol concepts; assignments are local and swappable.
```

Do not use model names in action labels:

- Use `Ask Coordinator`, not `Ask GPT`, except where current-assignment metadata clarifies the Coordinator is GPT-5.5 Pro.
- Use `Paste to Builder`, not `Paste to Codex`, except where current-assignment metadata clarifies the Builder is Codex.
- Use `Auditor`, not `Claude`, in core state labels.

Visible state vocabulary:

- `draft`
- `built`
- `audited`
- `satisfied`
- `human approval pending`
- `authorized_exact_action`
- `needs_revision`
- `closed_rejected`
- `paused_pending_coordinator`
- `paused_pending_human`

Never collapse `satisfied` into `approved`.

## 9. Visual Design Direction

Recommended tone:

- serious but not boring
- modern but not AI-demo hype
- calm dark or neutral premium style
- clear typography and spacing
- subtle accent colors
- polished enough to look intentional

Use:

- single focused surface
- restrained cards
- strong typography hierarchy
- clear boundary blocks
- subtle role/status accents
- enough visual craft to signal trust

Avoid:

- progress rings implying approval
- vanity metrics
- agent-online tiles
- throughput/leaderboard/analytics
- heavy glow, celebration, or "AI command center" theater
- generic admin-page dullness
- dense IDE-like panels

## 10. Implementation Boundaries

Future implementation constraints:

- static, self-contained HTML and Markdown
- no external CSS
- no external JavaScript
- no network APIs
- no storage APIs
- no backend
- no runtime integration
- no trust-layer implementation
- copy buttons copy only visible text
- dashboard is view-only
- `COLLAB.md` remains authoritative
- dashboard stale-state warning remains visible
- no approval inferred from UI state
- no hidden payloads

The implementation may refresh `.agent-handoff/DASHBOARD.md` and `.agent-handoff/DASHBOARD.html` only in a separately authorized build turn. This scope-lock turn does not authorize those edits.

## 11. Build Plan For Next Turn

Recommended next implementation turn: **Decision Cockpit v1 implementation Outcome Circle**.

Reason:

- Dashboard v1 is product-facing and governance-semantic.
- The failure modes are not purely visual; they include approval laundering, stale state, role confusion, and risk-context rubber-stamping.
- Claude should audit against a rubric, not merely review taste.

Recommended builder:

- Codex builds.

Recommended auditor:

- Claude Code audits.

Recommended coordinator:

- GPT / Coordinator should frame entry or exit if the human approver wants to preserve the conservative post-bootstrap pattern for dashboard work. The bootstrap rule is not relaxed by this scope lock.

Likely files to touch in the future implementation turn:

- `.agent-handoff/DASHBOARD.md`
- `.agent-handoff/DASHBOARD.html`
- `.agent-handoff/COLLAB.md`
- implementation turn note
- audit turn note

Likely no-touch files in the future implementation turn:

- `.agent-handoff/PROTOCOL.md`
- `.agent-handoff/OPERATING-MODEL.md`
- `.agent-handoff/STRATEGY.md`
- `kit/v1/**`
- root docs
- `docs/`
- trust-layer files
- runtime/product files
- mockups, unless explicitly scoped

Claude audit should verify:

- the UI does not imply approval
- `satisfied` remains distinct from approval
- exact visible copied text matches authorization boundaries
- all five decision actions are present
- notes-required behavior is represented honestly
- model/person names are metadata only
- trust footer is truthful
- no external CSS/JS/network/storage/backend
- dashboard remains view-only and source-of-truth disclaimers remain clear
- responsive layout does not create unreadable density

## 12. Deferred Items

Explicitly deferred:

- Kanban / Operations Board.
- three-panel concurrent layout.
- real-time agent status.
- analytics, throughput, lead-time, leaderboard, or agent-online metrics.
- trust manifests, signing, hash manifests, transparency logs, and blockchain.
- notification, wakeup, webhook, cron, or auto-routing.
- README / strangerprintability.
- public-alpha packaging.
- protocol relaxation.
- formal naming.
- multi-human approval workflow.
- trust-layer implementation.
- runtime/backend integration.

## 13. Failure Modes And Mitigations

| Failure mode | Risk | Mitigation |
| --- | --- | --- |
| UI implies approval | Human rubber-stamps an agent state | Use `Human approval pending`, exact authorization text, and `This does NOT authorize`. |
| `satisfied` looks approved | Auditor result becomes fake approval | Persistent warning: `satisfied` is not approval. Avoid green completion styling for approval states. |
| Risk context becomes rubber-stamp bait | "Low risk" becomes "approve" | Multi-part prose context; no single score; no `safe to approve`. |
| Notes cause sycophantic adaptation | Agents tune to human preference instead of rubric | Notes are descriptive, not normative; cite-only rule; no threshold adaptation. |
| Model names make roles look fixed | Users think protocol requires GPT/Codex/Claude | Portable roles in labels; model/person names only in `Current assignments`. |
| Dashboard stale state | User acts on old handoff | Visible source-of-truth and snapshot warning; `COLLAB.md` authoritative. |
| Visual polish hides authority boundary | UI feels persuasive rather than precise | Approval boundary block above fold; serious restrained visual system. |
| Too much density creates overload | Human stops reading boundary copy | Single-panel layout; progressive disclosure for option details; three to five evidence bullets. |
| Too much minimalism looks unprofessional | Public users assume no design care | Use v3-level polish: strong hierarchy, spacing, subtle accents, no generic admin-page feel. |
| Copy button hides extra payload | Human cannot inspect authorization | Copy only visible text; no hidden payload. |
| Kanban becomes approval surface | Workload scanning bypasses decision discipline | Defer Kanban; when added, label as secondary scan view, not approval view. |

## 14. Final Recommendation

Recommended v1 default:

```text
Single-panel Decision Cockpit / Command View.
```

Exact MVP scope:

- Simple Signals / Focus Panel.
- Human role.
- Decision needed.
- Primary action surfaced.
- Five decision options.
- Human Decision Note field.
- Approval boundary.
- Risk Context.
- Evidence summary.
- Wait-risk signal.
- Trust footer.
- Source-of-truth disclaimer.
- Current assignments metadata.

Exact deferrals:

- Kanban, three-panel layout, analytics, real-time status, trust hardening, notifications, README, public-alpha packaging, protocol relaxation, naming, and runtime/backend work.

Exact implementation sequence:

1. Claude audits this scope-lock note.
2. Preserve the scope-lock artifacts in a PR if accepted.
3. Run a separately approved Decision Cockpit v1 implementation Outcome Circle.
4. Codex builds static dashboard files.
5. Claude audits against the scope-lock rubric and no-touch boundaries.
6. Only after the cockpit is implemented or locked enough to represent the method, proceed to README / strangerprintability.

Ready for Claude audit:

```text
Yes.
```

Open GPT / human decision:

- Human approver must decide whether to accept this scope lock.
- A future implementation packet should decide whether GPT/Coordinator frames the implementation Outcome Circle entry/exit. This scope lock recommends using the conservative Coordinator path for dashboard work, but does not start it.

## Verification

`git status --short --branch --untracked-files=all` after writing:

```text
## main...origin/main
 M .agent-handoff/COLLAB.md
?? .agent-handoff/turns/E6-DASH-SCOPE-001-codex-decision-cockpit-v1-scope-lock.md
```

`git diff --check`: exit 0.

Tracked diff names:

```text
.agent-handoff/COLLAB.md
```

The new scope-lock turn note is untracked, as expected.

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
  `.agent-handoff/turns/E6-DASH-SCOPE-001-codex-decision-cockpit-v1-scope-lock.md`.
- No `DASHBOARD.md` or `DASHBOARD.html` diff.
- No mockup edits.
- No `PROTOCOL.md`, `OPERATING-MODEL.md`, or `STRATEGY.md` diff.
- No kit diff.
- No README, root docs, or `docs/` diff.
- No trust-layer implementation.
- No new Outcome Circle.
- No staging, commit, push, branch, PR, or merge.

## Result

Scope lock recommendation: Decision Cockpit v1 should be a single-panel, role-agnostic, static, view-only approval-boundary cockpit using v3 as inspiration, corrected to include all five human decision actions and Human Decision Notes.

Hard stop after local scope-lock note for Claude audit.
