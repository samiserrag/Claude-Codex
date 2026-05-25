# E6-DASH-003 Codex Decision Cockpit v1 Implementation Iteration 1

## Clean Entry Evidence

Recorded before any E6-DASH-003 file write.

```sh
$ git rev-parse HEAD
8a2e0528ca6328707e3355238568498448db67cf

$ git status --short --branch --untracked-files=all
## main...origin/main

$ find .agent-handoff -name '* 2.md' -print
```

Result: clean entry confirmed. Duplicate-file check printed nothing.

## Approved Outcome Packet Scribed For Record

Lane / thread:
`[Lane 1: Claude-Codex Harness | Codex / OpenAI | Thread: E6-DASH-003 Decision Cockpit v1 implementation | Role: builder inside approved Outcome Circle]`

Approved Outcome Circle: E6-DASH-003 Decision Cockpit v1 implementation

ENTRY RULE:
Before writing any file, run and record:
- git rev-parse HEAD
- git status --short --branch --untracked-files=all
- find .agent-handoff -name '* 2.md' -print

Required entry state:
- main should be clean at or after PR #14 merge commit `8a2e0528ca6328707e3355238568498448db67cf`
- git status should show only the branch line, no modified/untracked files
- duplicate-file check should print nothing

If entry is not clean, stop with `blocker`. Do not create the E6-DASH-003 turn note.

If entry is clean, create:
.agent-handoff/turns/E6-DASH-003-codex-decision-cockpit-v1-implementation-iter-1.md

In that note, first record the clean-entry evidence, then scribe this full Outcome Packet before implementation.

### 1. Outcome description

Implement Decision Cockpit v1 in the live Polaris dashboard as a static, self-contained, human-facing cockpit that reduces cognitive load while preserving approval-boundary discipline.

This implementation should:
- replace the current dense dashboard experience with a calmer Decision Cockpit v1 structure
- preserve `DASHBOARD.md` and `DASHBOARD.html` parity
- keep the dashboard view-only
- preserve COLLAB.md as authoritative
- use current post-implementation handoff state honestly
- include both cockpit states:
  - Human Decision Pending
  - Agents Running / Execution Mode
- avoid becoming a Kanban board, IDE, runtime dashboard, or trace viewer

### 2. Rubric

PASS only if all criteria are satisfied:

#### A. Entry / packet discipline
- clean entry recorded before any file write
- full packet scribed before implementation
- no `* 2.md` duplicate files
- no unexpected dirty files

#### B. Live files
- `DASHBOARD.html` updated
- `DASHBOARD.md` updated
- both reflect the same cockpit state/content
- dashboard remains static and self-contained
- COLLAB.md updated only for handoff
- Codex turn note created

#### C. Required v1 components
Dashboard must include:
- Simple Signals / Focus Panel
- Human role
- Decision needed
- Primary action surfaced, not “recommended action”
- all five decision actions:
  - `authorize_exact_action`
  - `reject_redo`
  - `reject_close`
  - `ask_coordinator`
  - `pause_pending`
- Human Decision Notes
- approval boundary:
  - this authorizes
  - this does NOT authorize
- Risk Context, not risk permission
- Evidence summary
- Wait-risk signal
- Trust footer
- Source-of-truth disclaimer
- Current assignments metadata
- Execution Mode / Agents Running state

#### D. Required two-state support
Dashboard must support and clearly distinguish:

1. Human Decision Pending
Copy:
- agents may be satisfied
- human approval is still pending
- the human must choose an exact decision action
- no consequence is authorized until exact human approval

2. Agents Running / Execution Mode
Copy:
- agents are working inside approved reversible scope
- no human approval is needed for every reversible micro-turn
- human may interrupt, pause, reject/redo, reject/close, ask Coordinator, or steer anytime
- irreversible actions still require exact human approval

#### E. Current live snapshot
Because this builder turn will end by asking Claude to audit:
- the current live dashboard should present the next handoff honestly
- the likely current human role is `COURIER ONLY` or equivalent, not approval, unless Codex determines a different state from COLLAB.md
- do not fake an approval request if the next action is just “paste this audit prompt to Auditor”
- if using a generic Decision Cockpit component, distinguish the live current action from example/available decision actions

#### F. Decision options
Include these labels and meanings:
- Authorize exact action — approves only the named consequence/scope
- Reject / Redo — returns work for revision inside approved packet when possible
- Reject / Close — closes the request without approval
- Ask Coordinator — asks for synthesis/clarification
- Pause — keeps state pending without approval or rejection

#### G. Human Decision Notes
Include exact or close copy:
- “Decision rationale”
- “Visible to future agents and preserved in the audit trail.”
- “Keep to ~2–4 sentences.”
- “Avoid private reasoning, secrets, or content you would not include in a PR review.”
- Required-note warning for reject / ask / override / long pause
- Notes are descriptive, not normative
- Agents may cite notes as context but may not adapt thresholds based on them

#### H. Risk Context
Use multi-part context, not a score:
- consequence
- evidence confidence
- reversibility
- open caveats
- unknowns
- if wrong
- human approval required

Forbidden risk copy:
- “safe to approve”
- “low risk, approve”
- “all agents agree”
- “all systems go”

#### I. Trust footer
Use truthful copy:
- Git-visible
- verifiable via PR + commit history
- tamper-evident when protected branches/signing/manifests are configured
- not tamper-proof
- no blockchain claim
- no legal/compliance claim

#### J. Visual/UX direction
- single-panel Decision Cockpit is default
- modern but calm
- serious but not boring
- no AI-demo hype
- no progress rings implying approval
- no drag/drop approval
- no agent-online vanity metrics
- no throughput/leaderboard/analytics
- no Kanban as default
- Kanban/Operations Board deferred

#### K. Interaction behavior
- copy buttons copy only visible text
- no hidden payload copy
- no external CSS/JS
- no network APIs
- no storage APIs
- no backend/runtime
- no notifications/webhooks
- no auto-routing
- no one-click approval without exact visible text
- no approval inferred from UI state

#### L. Safety language
Include visibly:
- `satisfied` is not approval
- auditor pass is not approval
- model consensus is not approval
- human approval authorizes only the exact named consequence
- COLLAB.md is authoritative; dashboard is view-only

#### M. No-touch discipline
No changes to no-touch files.

### 3. Allowed files

Builder may write:
- `.agent-handoff/DASHBOARD.md`
- `.agent-handoff/DASHBOARD.html`
- `.agent-handoff/COLLAB.md`
- `.agent-handoff/turns/E6-DASH-003-codex-decision-cockpit-v1-implementation-iter-1.md`

Auditor may later write:
- `.agent-handoff/COLLAB.md`
- `.agent-handoff/turns/E6-DASH-003-claude-audit-decision-cockpit-v1-implementation-iter-1.md`

Iteration 2, only if needed:
- `.agent-handoff/DASHBOARD.md`
- `.agent-handoff/DASHBOARD.html`
- `.agent-handoff/COLLAB.md`
- `.agent-handoff/turns/E6-DASH-003-codex-decision-cockpit-v1-implementation-iter-2.md`
- `.agent-handoff/turns/E6-DASH-003-claude-audit-decision-cockpit-v1-implementation-iter-2.md`

Read-only evidence:
- `.agent-handoff/PROTOCOL.md`
- `.agent-handoff/OPERATING-MODEL.md`
- `.agent-handoff/STRATEGY.md`
- `.agent-handoff/COLLAB.md`
- `.agent-handoff/mockups/decision-cockpit-v1.html`
- `.agent-handoff/mockups/decision-cockpit-v2.html`
- `.agent-handoff/mockups/decision-cockpit-v3.html`
- `.agent-handoff/turns/E6-DASH-SCOPE-001-codex-decision-cockpit-v1-scope-lock.md`
- `.agent-handoff/turns/E6-DASH-SCOPE-001-claude-audit-decision-cockpit-v1-scope-lock.md`
- `.agent-handoff/turns/E6-DASH-SCOPE-001-FIX-001-codex-execution-interruptibility-addendum.md`
- `.agent-handoff/turns/E6-DASH-SCOPE-001-FIX-001-claude-audit-execution-interruptibility-addendum.md`
- `.agent-handoff/turns/E6-RETRO-001-codex-bootstrap-retrospective.md`
- `.agent-handoff/turns/E6-RETRO-001-claude-audit-bootstrap-retrospective.md`

### 4. No-touch list

Do not edit, stage, commit, push, branch, PR, merge, or modify:
- `.agent-handoff/PROTOCOL.md`
- `.agent-handoff/OPERATING-MODEL.md`
- `.agent-handoff/STRATEGY.md`
- `.agent-handoff/mockups/**`
- `.agent-handoff/tools/alert-state.sh`
- `.agent-handoff/advisor-notes/`
- `.agent-handoff/reflections/`
- `.agent-handoff/improvements/`
- any `kit/v1/` file
- root `README.md`
- root `AGENTS.md`
- root `CLAUDE.md`
- `docs/`
- product/runtime files
- pilot repo
- live Open Mic Colorado
- trust-layer files
- automation/API/model/NanoClaw/CommonGround/MCP/Notion/plugin/global config
- generated/local/secret files
- unrelated files

### 5. Max iterations

2.

Iteration 2 may only correct dashboard implementation, copy, evidence, self-containment, or audit-record defects. It may not expand scope, edit protocol/strategy/operating model, or start README/public-release/trust work.

### 6. Builder

Codex.

Builder cannot grade own work.

### 7. Auditor / grader

Claude Code.

Auditor must independently inspect the dashboard, HTML/MD parity, copy behavior, self-containment, no-touch discipline, and governance semantics.

### 8. Pass evidence

Builder must record:
- clean-entry evidence
- HEAD
- git status
- duplicate-file check
- full packet scribed before implementation
- files changed
- exact dashboard sections added/removed/changed
- explanation of how current live state is represented
- how Human Decision Pending is represented
- how Agents Running / Execution Mode is represented
- all copy button targets and what visible text they copy
- HTML self-containment checks
- network/storage/API checks
- DASHBOARD.md/html parity check
- no-touch verification
- git diff --check
- `alert-state.sh` run if safe and expected by current protocol; if run, verify it does not modify working tree

Suggested verification commands:

```sh
git rev-parse HEAD
git status --short --branch --untracked-files=all
find .agent-handoff -name '* 2.md' -print
git diff --check
grep -n "satisfied" .agent-handoff/DASHBOARD.html .agent-handoff/DASHBOARD.md || true
grep -n "Human Decision" .agent-handoff/DASHBOARD.html .agent-handoff/DASHBOARD.md || true
grep -n "Agents Running" .agent-handoff/DASHBOARD.html .agent-handoff/DASHBOARD.md || true
grep -n "tamper-proof" .agent-handoff/DASHBOARD.html .agent-handoff/DASHBOARD.md || true
grep -n "safe to approve" .agent-handoff/DASHBOARD.html .agent-handoff/DASHBOARD.md || true
grep -n "localStorage\|sessionStorage\|indexedDB\|fetch(\|XMLHttpRequest\|WebSocket\|EventSource\|<script src\|<link" .agent-handoff/DASHBOARD.html || true
```

## Implementation Notes

Implementation began only after the clean-entry evidence and full Outcome Packet above were written into this turn note.

## Sources Read

- `.agent-handoff/PROTOCOL.md`
- `.agent-handoff/OPERATING-MODEL.md`
- `.agent-handoff/STRATEGY.md`
- `.agent-handoff/COLLAB.md`
- `.agent-handoff/DASHBOARD.md`
- `.agent-handoff/DASHBOARD.html`
- `.agent-handoff/mockups/decision-cockpit-v1.html`
- `.agent-handoff/mockups/decision-cockpit-v2.html`
- `.agent-handoff/mockups/decision-cockpit-v3.html`
- `.agent-handoff/turns/E6-DASH-SCOPE-001-codex-decision-cockpit-v1-scope-lock.md`
- `.agent-handoff/turns/E6-DASH-SCOPE-001-claude-audit-decision-cockpit-v1-scope-lock.md`
- `.agent-handoff/turns/E6-DASH-SCOPE-001-FIX-001-codex-execution-interruptibility-addendum.md`
- `.agent-handoff/turns/E6-DASH-SCOPE-001-FIX-001-claude-audit-execution-interruptibility-addendum.md`
- `.agent-handoff/turns/E6-RETRO-001-codex-bootstrap-retrospective.md`
- `.agent-handoff/turns/E6-RETRO-001-claude-audit-bootstrap-retrospective.md`
- `.agent-handoff/tools/alert-state.sh` before running it as a read-only advisory helper.

## Files Changed

- `.agent-handoff/DASHBOARD.html`
- `.agent-handoff/DASHBOARD.md`
- `.agent-handoff/COLLAB.md`
- `.agent-handoff/turns/E6-DASH-003-codex-decision-cockpit-v1-implementation-iter-1.md`

## Dashboard Sections Changed

Removed from the live dashboard:

- stale dense "Claude-Codex Control Tower" snapshot
- old approval-pending push authorization workflow
- old FIX-001 / RESTORE file list and push framing
- previous five-state cue presentation as the primary surface

Added to `DASHBOARD.html` and mirrored in `DASHBOARD.md`:

- source-of-truth disclaimer
- current live state: `Courier only`
- Simple Signals / Focus Panel
- Primary Action Surfaced for auditor handoff
- current assignments metadata
- evidence summary
- wait-risk signal
- safety language
- Human Decision Pending state
- Agents Running / Execution Mode state
- five decision action templates
- Human Decision Notes field/copy
- approval boundary
- Risk Context
- trust footer
- deferred-items section

## Current Live State Representation

The live dashboard does not fake an approval request.

Current state:

```text
Courier only.
```

Live action:

```text
Paste the E6-DASH-003 audit request to Auditor.
```

The dashboard states that this is not a human approval request and that no commit, push, branch, PR, merge, public release, protocol change, trust-layer work, runtime work, or new scope is authorized.

## Human Decision Pending Representation

The Human Decision Pending state appears as a required cockpit state with the core copy:

```text
Agents may be satisfied. Human approval is still pending. The human must choose an exact decision action. No consequence is authorized until exact human approval.
```

It is explicitly labeled as not the current live handoff.

## Agents Running / Execution Mode Representation

The Agents Running state appears as a required cockpit state with the core copy:

```text
Agents are working inside approved reversible scope. No human approval is needed for every reversible micro-turn. The human may interrupt, pause, reject/redo, reject/close, ask Coordinator, or steer anytime. Irreversible actions still require exact human approval.
```

It also states that Execution Mode must show packet, iteration, builder/auditor status, allowed files, no-touch list, stop conditions, latest evidence, and reversibility status.

## Copy Button Targets

All copy buttons copy visible `<pre>` text from the page. There is no hidden payload distinct from visible text.

| Button | Target id | Visible text copied |
| --- | --- | --- |
| Copy auditor handoff | `copy-audit-prompt` | Visible Claude audit handoff prompt for E6-DASH-003. |
| Copy visible template | `copy-authorize` | Visible `authorize_exact_action` template. |
| Copy visible template | `copy-redo` | Visible `reject_redo` template. |
| Copy visible template | `copy-close` | Visible `reject_close` template. |
| Copy visible template | `copy-coordinator` | Visible `ask_coordinator` template. |
| Copy visible template | `copy-pause` | Visible `pause_pending` template. |

Target/id inventory:

```text
data-copy-target="copy-audit-prompt"
data-copy-target="copy-authorize"
data-copy-target="copy-close"
data-copy-target="copy-coordinator"
data-copy-target="copy-pause"
data-copy-target="copy-redo"

id="copy-audit-prompt"
id="copy-authorize"
id="copy-close"
id="copy-coordinator"
id="copy-pause"
id="copy-redo"
```

## Self-Containment / Network / Storage Checks

`DASHBOARD.html` uses inline CSS and inline JavaScript only.

The following check returned no output:

```sh
grep -n "localStorage\|sessionStorage\|indexedDB\|fetch(\|XMLHttpRequest\|WebSocket\|EventSource\|<script src\|<link" .agent-handoff/DASHBOARD.html || true
```

The following check returned no output:

```sh
grep -n "href=\"http\|src=\"http\|@import\|url(https\|url(http" .agent-handoff/DASHBOARD.html || true
```

No external CSS, external JavaScript, network API, storage API, backend, runtime, notification, webhook, model call, or auto-routing behavior was added.

## DASHBOARD.md / DASHBOARD.html Parity

Both dashboard files represent the same cockpit state and content:

- current live state is courier-only auditor handoff
- Simple Signals / Focus Panel
- Primary Action Surfaced
- current assignments metadata
- evidence summary
- wait-risk signal
- safety language
- Human Decision Pending
- Agents Running / Execution Mode
- five decision actions
- Human Decision Notes
- approval boundary
- Risk Context
- trust footer
- deferred-items section

Heading inventory:

```text
DASHBOARD.html: current state, assignments, evidence summary, wait-risk signal, safety language, Human Decision Pending, Agents Running / Execution Mode, decision options, Human Decision Notes, approval boundary, Risk Context, trust footer, deferred by this dashboard.

DASHBOARD.md: Source Of Truth, Current Live State, Simple Signals / Focus Panel, Primary Action Surfaced, Current Assignments Metadata, Evidence Summary, Wait-Risk Signal, Safety Language, Required Cockpit State: Human Decision Pending, Required Cockpit State: Agents Running / Execution Mode, Decision Options, Human Decision Notes, Approval Boundary, Risk Context, Trust Footer, Deferred By This Dashboard.
```

The Markdown includes the same copy in a documentation-readable shape; the HTML includes the same content in a human-facing cockpit layout with copy buttons.

## Required Copy / Forbidden Copy Checks

Required evidence checks:

```text
grep -n "satisfied" .agent-handoff/DASHBOARD.html .agent-handoff/DASHBOARD.md
```

Found `satisfied` warning and Human Decision Pending copy in both files.

```text
grep -n "Human Decision" .agent-handoff/DASHBOARD.html .agent-handoff/DASHBOARD.md
```

Found Human Decision Pending and Human Decision Notes in both files.

```text
grep -n "Agents Running" .agent-handoff/DASHBOARD.html .agent-handoff/DASHBOARD.md
```

Found Agents Running / Execution Mode in both files.

```text
grep -n "tamper-proof" .agent-handoff/DASHBOARD.html .agent-handoff/DASHBOARD.md
```

Found trust-footer copy in both files:

```text
Not tamper-proof. No blockchain or legal compliance claim is made by this dashboard.
```

Forbidden risk/approval checks returned no output:

```sh
grep -n "safe to approve" .agent-handoff/DASHBOARD.html .agent-handoff/DASHBOARD.md || true
grep -n "all agents agree\|all systems go\|low risk, approve" .agent-handoff/DASHBOARD.html .agent-handoff/DASHBOARD.md || true
grep -n "Recommended\|recommended\|Auto-approved\|All clear" .agent-handoff/DASHBOARD.html .agent-handoff/DASHBOARD.md || true
```

## alert-state.sh

I inspected `.agent-handoff/tools/alert-state.sh` first and confirmed it is documented as a manual read-only advisory helper.

I ran:

```sh
sh .agent-handoff/tools/alert-state.sh
```

It exited 0 and did not modify the working tree. It reported the expected dirty state from this implementation turn:

```text
 M .agent-handoff/COLLAB.md
 M .agent-handoff/DASHBOARD.html
 M .agent-handoff/DASHBOARD.md
?? .agent-handoff/turns/E6-DASH-003-codex-decision-cockpit-v1-implementation-iter-1.md
```

The helper is advisory only and is not used as approval authority.

## No-Touch Verification

No-touch status check for these paths returned no output:

```text
.agent-handoff/PROTOCOL.md
.agent-handoff/OPERATING-MODEL.md
.agent-handoff/STRATEGY.md
.agent-handoff/mockups
.agent-handoff/tools/alert-state.sh
.agent-handoff/advisor-notes
.agent-handoff/reflections
.agent-handoff/improvements
kit/v1
README.md
AGENTS.md
CLAUDE.md
docs
```

No dashboard mockups, protocol, operating-model, strategy, kit, root docs, `docs/`, alert-state, advisor-notes, reflections, improvements, trust-layer, runtime/product, automation/API/model/NanoClaw/CommonGround/MCP/Notion/plugin/global config, pilot repo, live Open Mic Colorado, generated/local/secret, or unrelated files were edited.

## Verification

`git diff --check`: exit 0.

Current `git status --short --branch --untracked-files=all` before final response:

```text
## main...origin/main
 M .agent-handoff/COLLAB.md
 M .agent-handoff/DASHBOARD.html
 M .agent-handoff/DASHBOARD.md
?? .agent-handoff/turns/E6-DASH-003-codex-decision-cockpit-v1-implementation-iter-1.md
```

Duplicate check:

```sh
find .agent-handoff -name '* 2.md' -print
```

Output: no output.

## Result

Builder result: ready for Claude audit.

Hard stop after local implementation. No staging, commit, push, branch, PR, merge, dashboard runtime work, README work, public release, trust implementation, protocol edit, or new Outcome Circle was performed.
