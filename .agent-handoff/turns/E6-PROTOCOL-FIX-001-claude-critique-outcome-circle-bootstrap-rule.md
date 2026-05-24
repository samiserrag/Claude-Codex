# E6-PROTOCOL-FIX-001 - Claude critique

## Coordinator Trigger
- State: ROUTINE
- Reason: auditor pass on an already-scoped protocol fix routed by GPT
  and Sami (post-E6-DASH-002 follow-up). Per the Coordinator Trigger
  Classification rule, upgrade only on detection of an architecture /
  safety / governance defect. One defect detected (HTML Polaris refresh
  exceeded "no redesign" scope) is a scope-creep issue inside an already-
  approved category, not a NEEDS_GPT architectural matter. Foldable into
  a tiny FIX-001-RESTORE turn or accepted with caveat per Sami judgment.

## Project Mode (estimated)
- Dominant mode: Coordinator (~70%, agent heuristic estimate)
- Sami-decision-pending: ~25%
- Execution: ~5%
- Reason: no Outcome Circle is active. Bootstrap rule is being audited
  before the first circle's authorization sequence begins. After this
  critique, Sami picks accept / accept-with-fix / reject.

## Agent
Claude Code (Anthropic) — auditor/advisor.

## Phase
critique

## Files touched this turn
- `.agent-handoff/turns/E6-PROTOCOL-FIX-001-claude-critique-outcome-circle-bootstrap-rule.md` (created)
- `.agent-handoff/COLLAB.md` (handoff update only)

DASHBOARD.md / DASHBOARD.html: **not refreshed this turn.** Reason: the
Polaris snapshot already points at Claude critique (Codex refreshed it
this turn); re-refreshing would just add churn. The substantive Polaris
issue is the HTML regression flagged below; addressing it requires a
separate turn or a tiny FIX-001-RESTORE, not another snapshot text
refresh.

## Headline

**Protocol fix: PASS.** The bootstrap rule's wording, placement, and
mirror discipline are exemplary. PROTOCOL.md and kit template received
byte-identical 12-line additions; entry/exit semantics are stated
correctly; ROUTINE eligibility for mechanical builder/auditor work
inside a valid packet is preserved; packet self-classification of entry/
exit as ROUTINE is explicitly forbidden during bootstrap.

**HTML Polaris refresh: REGRESSION (blocker).** Codex removed the
`role-courier` state class from the cue panel, dropped the "About the 5
states" cue-note collapsible, and removed two top-level `<details>`
panels ("Who's who right now" and "What changed in this snapshot") that
landed in PR #5 less than two hours earlier. This exceeds the authorized
"refresh Polaris/COLLAB without redesigning Polaris" scope. The
DASHBOARD.md cue retained the "About the 5 states" block — so HTML and
MD now diverge.

## Focus-area assessment

### 1. Does Codex satisfy E6-D2 Outcome Circle protocol? — **PASS**

Bootstrap paragraph sits inside `#### Outcome Circles` at line 270 of
PROTOCOL.md (after the non-entry cases paragraph, before the Minimum
Outcome Packet fields). Correct structural placement: the rule
applies to circle entry/exit, which is the topic of the surrounding
section. Adds 12 lines, removes 0.

### 2. Is the fix tiny? — **PASS**

12 lines of new prose in PROTOCOL.md; 12 byte-identical lines in kit
template; small COLLAB.md update; Polaris snapshot refresh; one turn
note. Within "tiny fix" scope for the protocol-level work.

### 3. Byte-identical / byte-equivalent mirror discipline? — **PASS (verified)**

Independent verification:
- `grep -c '^Bootstrap rule for early circles:'` returns 1 in both files.
- Extracting the bootstrap paragraph from both files and diffing returns
  exit code 0 (byte-identical).
- Diffing the entire `#### Outcome Circles` section (70 lines each
  between `#### Outcome Circles` and the line before `Use vendor
  diversity as a spectrum:`) returns exit code 0.

This means the live PROTOCOL.md and kit template are now ready for the
first Outcome Circle (`one-doc protocol mirror verification`) to PASS
on its own rubric.

### 4. Until 2 circles complete, entry/exit always NEEDS_GPT? — **PASS**

Verbatim wording: _"until at least two Outcome Circles have completed
successfully and been reviewed in repo-visible turn notes, Outcome
Circle entry and Outcome Circle exit are always `NEEDS_GPT`."_

Stronger than just "completed" — also requires "reviewed in repo-visible
turn notes." This blocks a soft path where a circle silently "completes"
without auditor witness. Good defensive design.

### 5. Preserves ROUTINE eligibility for mechanical builder/auditor work inside valid packet? — **PASS**

Verbatim: _"Mechanical builder/auditor work inside a valid approved
Outcome Circle may still be `ROUTINE` when it remains within the
packet."_

Critical: this prevents the bootstrap rule from making every iteration
NEEDS_GPT once a circle is live, which would have destroyed the entire
point of having Outcome Circles (low-overhead iteration loops).

### 6. Prevents Outcome Packet from self-classifying entry/exit as ROUTINE during bootstrap? — **PASS**

Verbatim: _"During this bootstrap period, an Outcome Packet may not
self-classify entry or exit as `ROUTINE`."_

Closes the obvious bypass attempt: an agent drafting a packet that
includes `Coordinator Trigger: ROUTINE` for entry would otherwise have
been a clean evasion of the bootstrap rule. Explicit prohibition closes
that.

### 7. Defines entry and exit clearly enough? — **PASS with one nit**

Entry definition: _"drafting, finalizing, and approving the packet."_
Three distinct sub-steps, all gated. Clean.

Exit definition: _"`satisfied`, `blocker`, `failed`, `interrupted`,
`max_iterations_reached`, `needs_gpt`, `needs_sami`, or final synthesis
about whether the outcome was met."_

**Nit #1**: The exit list enumerates **7 of the 9 codified result
states**. Missing: `needs_revision` and `scope_conflict`. Per
PROTOCOL.md L287-289, all 9 result states exist.

- `needs_revision` is correctly omitted — it's iteration-internal
  (auditor returns to builder; builder fixes; auditor regrades). Not
  a true circle exit.
- `scope_conflict` is **incorrectly omitted** — it explicitly IS a
  circle exit (work demanded exceeds packet allowance; circle cannot
  continue without re-authorization). Should be in the bootstrap rule's
  exit list so that hitting `scope_conflict` cleanly triggers GPT-in-
  loop during bootstrap.

Foldable into a tiny one-line edit; not a blocker on its own.

### 8. Did Codex avoid starting the first Outcome Circle? — **PASS**

Turn note explicitly states: "No Outcome Circle execution. No Outcome
Packet template. No loop runner." Verified by file inventory: no
`E6-OC-001-*` turn notes created, no packet file created, no runner
script created.

### 9. Did Codex avoid OPERATING-MODEL.md / alert-state.sh / kit-outside-template / advisor-notes-reflections-improvements / automation / API / NanoClaw / CommonGround / MCP/plugin/bridge / Notion / live OMC / pilot touches? — **PASS (verified)**

Per-surface check:

| Surface | Status |
| --- | --- |
| `.agent-handoff/OPERATING-MODEL.md` | unchanged |
| `.agent-handoff/tools/alert-state.sh` | unchanged (6519 bytes) |
| `kit/v1/` other than `PROTOCOL.md.template` | unchanged |
| Root `README.md` / `AGENTS.md` / `CLAUDE.md` | unchanged |
| `docs/` | unchanged |
| `.agent-handoff/reflections/` | still absent |
| `.agent-handoff/improvements/` | still absent |
| `.agent-handoff/advisor-notes/` | still absent |
| `.mcp.json` | still absent |
| Pilot repo (`open-mic-colorado-agent-pilot`) | not touched |

`sh .agent-handoff/tools/alert-state.sh` ran successfully; pre/post
`git status` byte-identical (diff exit 0). Working tree unmodified by
the script.

**Nit #2**: OPERATING-MODEL.md §8 (the "current architecture" doc-lock
of Outcome Circles) does not yet reference the bootstrap rule. Per
OPERATING-MODEL.md §0, "After codification, PROTOCOL.md wins on
conflicts," so this is not a contradiction — just a documentation
freshness gap. Foldable into a future small docs-lock turn. Not a
blocker.

### 10. Did Polaris/COLLAB refresh from stale post-PR5 state without redesigning Polaris? — **PARTIAL PASS / BLOCKER**

**COLLAB.md refresh: PASS.** Current Owner / Coordinator Trigger /
Project Mode / handoff sections all reflect FIX-001 implementation
state and point at Claude critique as the next actor. Historical
content preserved below. Clean refresh.

**DASHBOARD.md refresh: PASS.** Cue text content updated for the new
handoff (Next paste target: Claude Code; Why: Claude verifies mirror
discipline...). About-the-5-states `<details>` block retained. No
structural removals.

**DASHBOARD.html refresh: REGRESSION (blocker).** Three structural
elements that landed in PR #5 (E6-DASH-002 + FIX-001) less than two
hours earlier were removed:

1. **`role-courier` state class removed from the cue panel.** Before
   (origin/main `fbdb0b3`): `<div class="human-role-cue role-courier"
   role="region" ...>`. After: `<div class="human-role-cue"
   role="region" ...>`. The state class is the visual differentiator
   defined by E6-DASH-002 — without it, the cue renders with the
   default uncolored treatment instead of the mint-green
   `--courier-soft` background that signals COURIER ONLY at a glance.
   Grep verifies: `role-(courier|approval|ask-gpt|agents-running|stop)`
   class occurrences went from 12 in origin/main → 0 in the current
   working tree.

2. **"About the 5 states" cue-note `<details>` removed from HTML
   only.** The MD version retained it (verified by reading the cue
   section in DASHBOARD.md L29-42). HTML and MD now diverge — one
   shows the explainer, the other does not. The cue-note explainer was
   a deliberate FIX-001 element (compressed but kept) so Sami could
   reference the 5-state taxonomy without leaving the cockpit.

3. **Two top-level `<details>` collapsibles removed:** "Who's who
   right now" and "What changed in this snapshot." Both landed in
   E6-DASH-002 as standing panels (not per-snapshot content). Their
   removal is a structural change, not a text refresh.

Tally: `<details>` count went from **10 in origin/main → 6 in current
working tree** (-4). `<summary>` tags removed: `About the 5 states`,
`Who's who right now`, `What changed in this snapshot`. (The 4th
removal is the cue-note's `<summary>` inside the cue panel.)

**Why this matters:** the focus-area question Sami asked is "did
Polaris refresh from stale post-PR5 state without redesigning
Polaris?" Removing recently-landed structural elements IS redesign,
not refresh. A snapshot refresh updates text content (H1, subtitle,
role-flow, cue field values, paste-block contents, snapshot status
fields); it does not remove standing panels or drop visual classes.

The DASHBOARD.md kept structural parity. The HTML diverged. This
divergence violates the implicit invariant that the two file formats
mirror each other in structure.

### 11. DASHBOARD.html remains self-contained? — **PASS**

Static checks on the refreshed HTML:
- `<link rel="stylesheet">` count: 0
- `<script src=...>` count: 0
- HTTP(S) URLs in browser-resolvable positions: 0
- Executable storage APIs (`localStorage` / `sessionStorage` /
  `IndexedDB`): 0
- Executable network APIs (`fetch` / `XMLHttpRequest` / `EventSource`
  / `WebSocket`): 0
- Executable `clipboard.writeText` calls: 1 (pre-existing copy
  behavior at L532)
- Inline `<script>`: 1, inline `<style>`: 1
- Server requirement: none — opens from `file://`

Self-containment contract held.

### 12. Is E6-PROTOCOL-FIX-001 safe to accept? — **NO as-is; YES with one of two paths**

The protocol-level fix is sound and important — landing the bootstrap
rule is a prerequisite for the first Outcome Circle. The Polaris HTML
regression is real but bounded (visual contract regression, not
protocol-level defect). Two acceptable paths:

**Path A (recommended): tiny FIX-001-RESTORE turn before push.** Codex
restores the three removed HTML elements (role-courier class on the
cue, About-the-5-states cue-note, two top-level collapsibles) to
match DASHBOARD.md structure. Same branch / same PR scope. ~50 lines
of HTML restored. Then push the combined PROTOCOL-FIX-001 +
FIX-001-RESTORE.

**Path B: Sami accepts the HTML regression as a deliberate tightening
follow-up to FIX-001's tightening, treats the divergence-with-MD as a
defect to fix in a separate turn, and authorizes push of the current
state.** Less clean — leaves HTML/MD structurally divergent until a
later turn — but unblocks the protocol fix immediately.

I lean toward **Path A** because the bootstrap rule is going to need
the visual contract anyway when the first circle's cue resolves to
AGENTS RUNNING.

## Blockers (max 3)

1. **HTML Polaris regression of E6-DASH-002 + FIX-001 structure.** The
   `role-courier` class removal, the cue-note removal, and the two
   top-level collapsible removals exceed the "refresh without
   redesigning Polaris" authorized scope. DASHBOARD.md kept structural
   parity; HTML diverged. Fix path: small FIX-001-RESTORE turn that
   restores the 3 elements (Path A above) OR explicit Sami
   acknowledgment of the regression as scope expansion (Path B).

No other blockers.

## Nits (suggested, not required)

1. **Exit-state list omits `scope_conflict`.** The bootstrap rule's
   exit definition lists 7 of 9 codified result states. `needs_revision`
   is correctly omitted (iteration-internal). `scope_conflict` is
   incorrectly omitted (it IS a circle exit; demands re-authorization).
   One-line edit: add `scope_conflict` to the comma-separated list in
   PROTOCOL.md L275 and the kit template mirror. Foldable into the
   FIX-001-RESTORE if Path A is taken, or into a follow-up FIX-002.

2. **OPERATING-MODEL.md §8 doesn't yet reference the bootstrap rule.**
   PROTOCOL.md is authoritative on conflicts, so this is not a
   contradiction — but §8 currently describes the Outcome Circle
   contract without the bootstrap-period caveat. A future small
   docs-lock turn could fold §8 into freshness with PROTOCOL.md. Not
   blocking.

3. **The bootstrap rule's "final synthesis about whether the outcome
   was met" phrase is slightly vague.** This catches the case where
   no terminal result state is reached but a circle still "ends" via
   informal sign-off. Defensive language is good, but a future
   tightening could replace it with a more explicit phrase like "any
   write of a final auditor turn note that asserts or denies the
   outcome." Style nit, not blocking.

## Browser verification
- Tool used: N/A
- URL or file path opened: N/A
- Action: static-grep verification of DASHBOARD.html structure against
  origin/main `fbdb0b3` (which includes E6-DASH-002 + FIX-001 as
  merged).
- Visible outcome: N/A — no browser used; the regression was caught
  by static structure-counting (state class occurrences, `<details>`
  count, `<summary>` tags).
- Console/network issues: N/A

**Reason for N/A:** the regression is detectable by static comparison,
which is faster and more auditable than visual inspection. If Sami
wants visual confirmation, opening
`/Users/samiserrag/Documents/GitHub/claude-codex/.agent-handoff/DASHBOARD.html`
in Chrome will show the uncolored cue panel (no mint-green background)
versus the FIX-001-merged version (mint-green `--courier-soft`
background).

## Evidence Basis
- USER SAID: Sami's critique prompt enumerates 12 focus areas including
  "Did Polaris/COLLAB refresh from stale post-PR5 state without
  redesigning Polaris?" (focus 10). The regression is detected against
  that explicit criterion.
- FILE VERIFIED:
  - `git log --oneline -5` shows main at `fbdb0b3 Merge pull request
    #5 from samiserrag/e6-dash-002-human-role-cue`.
  - `git status --short --untracked-files=all` shows exactly 6 files
    changed (matches Codex's authorization scope).
  - `git diff .agent-handoff/PROTOCOL.md` and the kit template diff
    are identical patches (verified visually + `diff` of extracted
    paragraphs returns exit 0).
  - `grep -c '^Bootstrap rule for early circles:'` returns 1 in both
    PROTOCOL.md and kit template.
  - `sed`-based extraction of `#### Outcome Circles` section in both
    files + `diff` returns exit 0 (mirror byte-identical).
  - Static structure counts on DASHBOARD.html: `role-(courier|...)`
    class occurrences = 0 (was 12); `<details>` count = 6 (was 10);
    cue-note count = 0 (was 1).
  - `sh .agent-handoff/tools/alert-state.sh` ran successfully; pre/post
    `git status` byte-identical.
  - `wc -c .agent-handoff/tools/alert-state.sh` = 6519 (unchanged).
- AGENT SUMMARY: Codex's turn note documents the bootstrap rule with
  good fidelity. Codex's claim that "DASHBOARD.html remains a static
  self-contained view" is true for the self-containment dimension but
  does not address the structural removals from E6-DASH-002.
- INFERENCE: Codex's intent may have been to tighten the dashboard
  further (consistent with FIX-001's tightening philosophy). The
  authorization for E6-PROTOCOL-FIX-001 did not include further
  tightening scope; it scoped Polaris work to "refresh without
  redesigning." The structural removals are out of scope under that
  reading.
- UNKNOWN: Whether Sami implicitly approved further dashboard
  tightening in a prior turn or chat that I don't have visibility
  into. If yes, my regression flag is wrong. If no, the flag stands.

## Portability Findings
- Repo-local assumptions: bootstrap rule's effectiveness depends on
  PROTOCOL.md being read by future agents before they classify any
  Outcome Circle entry/exit. The CLAUDE.md "Required Reading"
  directive already includes PROTOCOL.md, so this assumption is met.
- Machine/local-tool assumptions: none new. The bootstrap rule is
  pure prose.
- Browser/connector assumptions: HTML regression matters in any
  browser that renders Polaris. The MD/HTML divergence matters in
  any reader that consumes one but not the other.
- Any workaround used: none.

## Handoff

- Next agent: Sami (decision)
- Specific ask: choose between:
  - **Path A (recommended)**: authorize a tiny FIX-001-RESTORE turn
    where Codex restores the role-courier class on the cue,
    re-adds the "About the 5 states" cue-note in HTML, and re-adds
    the two top-level collapsibles. Optionally fold in nit #1 (add
    `scope_conflict` to the bootstrap exit list). Then push the
    combined PROTOCOL-FIX-001 + FIX-001-RESTORE.
  - **Path B**: accept the HTML regression, push as-is, schedule a
    separate turn later to restore HTML/MD parity. Less clean but
    unblocks the protocol fix immediately.
  - **Path C**: pause and observe; leave the working tree as-is
    until you decide.

After PR push and merge of FIX-001 (in whichever shape), the next
substantive turn is the first Outcome Circle scope decision — now
properly gated as NEEDS_GPT per the bootstrap rule that just landed.

## Why this critique does not expand the experiment

- No PROTOCOL.md / OPERATING-MODEL.md / kit / alert-state edits.
- No advisor-notes / reflections / improvements path creation.
- No automation / API / model calls / NanoClaw / CommonGround / Notion
  / MCP / plugin / bridge / .mcp.json / cron / timer / webhook / launch
  agent / global config / product / runtime work.
- No first Outcome Circle execution.
- No packet template, loop runner, notifier.
- No staging, commit, push, branch, or PR.
- No pilot repo or live Open Mic Colorado touch.
- Two files touched: this critique turn note (new) + COLLAB.md handoff
  update.

## Dashboard status

DASHBOARD.md and DASHBOARD.html were **not refreshed this turn**.
Reason: Polaris already points at Claude critique (Codex refreshed it
this turn). Re-refreshing would just add churn; the substantive issue
is the HTML regression flagged above, and that requires a separate
turn or a tiny FIX-001-RESTORE to actually fix — not another snapshot
text refresh.

Hard stop after critique.
