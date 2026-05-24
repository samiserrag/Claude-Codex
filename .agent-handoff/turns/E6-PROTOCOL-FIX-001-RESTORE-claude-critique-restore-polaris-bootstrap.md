# E6-PROTOCOL-FIX-001-RESTORE - Claude critique

## Coordinator Trigger
- State: ROUTINE
- Reason: auditor pass on a concrete, narrowly-scoped repair of an
  auditor-identified regression. Per the Coordinator Trigger Classification
  rule, upgrade only on detection of an architecture / safety / governance
  defect. None detected this turn — RESTORE is faithful to the repair
  spec; the previously-flagged HTML regression is resolved and the
  optional protocol nit (scope_conflict fold) was applied byte-equivalently.

## Project Mode (estimated)
- Dominant mode: Coordinator (~65%, agent heuristic estimate)
- Sami-decision-pending: ~30%
- Execution: ~5%
- Unknown: 0%
- Reason: no Outcome Circle is active. The combined FIX-001 + RESTORE
  stack is now safe to accept; Sami picks push / pause / one more
  tweak. Sami-decision-pending weight increases because the local
  state is fully repaired and ready for an accept/push decision.

## Agent
Claude Code (Anthropic) — auditor/advisor.

## Phase
critique (repair-of-repair)

## Files touched this turn
- `.agent-handoff/turns/E6-PROTOCOL-FIX-001-RESTORE-claude-critique-restore-polaris-bootstrap.md` (created)
- `.agent-handoff/COLLAB.md` (handoff update + critique summary)
- `.agent-handoff/DASHBOARD.md` (snapshot text refresh — cue / H1 / role-flow / status fields advanced to Sami-decision-pending state)
- `.agent-handoff/DASHBOARD.html` (snapshot text refresh — mirror of MD)

DASHBOARD refresh this turn: text content only. No CSS, no JS, no
structural element additions or removals, no state-class
reassignments. Modeling the same "refresh without redesigning"
discipline that FIX-001 should have observed.

## Headline

**13 of 13 focus areas PASS. Safe to accept.**

Codex's RESTORE is exactly what was needed: surgical repair of the 3
HTML structural removals + 1 state-class regression, plus the optional
`scope_conflict` fold into the bootstrap exit list. The good
bootstrap-rule work from FIX-001 was preserved verbatim. Mirror
discipline still byte-identical between live PROTOCOL.md and kit
template (independently verified, diff exit 0 on both the bootstrap
paragraph extraction and the full Outcome Circles section). No new
no-touch surface violations.

## Focus-area assessment

### 1. RESTORE tiny and repair-only? — **PASS**

5 files changed (3 modifications + 1 new turn note + COLLAB update — same shape as
the original FIX-001). No new design surface. No new architectural
concepts. Repair surgically targets the 3 regressions I flagged plus
the 1 foldable nit (`scope_conflict`). Codex's turn note explicitly
scopes "no new Polaris design, no new dashboard routing model, no new
sections beyond restoring the two removed standing panels."

### 2. Bootstrap-rule work preserved? — **PASS**

The 12-line bootstrap paragraph from FIX-001 is intact, with one
in-place edit: `scope_conflict` inserted between `blocker` and
`failed` in the exit-state list. Surrounding text — entry definition,
ROUTINE-eligibility carve-out for inside-circle mechanical work,
revision-only-via-explicit-later-protocol-change rule — all unchanged.
The bootstrap rule's substance is preserved.

### 3. `role-courier` restored in DASHBOARD.html? — **PASS (verified)**

Grep confirms the cue panel `<div>` at L401:

```html
<div class="human-role-cue role-courier" role="region" aria-label="Human role cue">
```

The 5 state-class CSS definitions (`role-courier`, `role-approval`,
`role-ask-gpt`, `role-agents-running`, `role-stop`) are present in
the stylesheet at L86–L106. The cue panel will now render with the
mint-green `--courier-soft` background per E6-DASH-002 + FIX-001
visual contract.

### 4. "About the 5 states" cue-note `<details>` restored in HTML? — **PASS (verified)**

`<summary>About the 5 states</summary>` is present at L416 inside the
in-cue explainer block. The `cue-note` CSS (L143–L171) is restored.
DASHBOARD.md retains the same explainer (verified by reading L29–42 of
the markdown). HTML and MD are now structurally back in parity.

### 5. Two top-level standing panels restored? — **PASS (verified)**

`<summary>Who's who right now</summary>` at L578.
`<summary>What changed in this snapshot</summary>` at L589.

Both top-level `<details>` panels are back. Structural count of
`<details>` elements: 9 (matches origin/main `fbdb0b3`). Structural
count of `<summary>` tags: 9 (matches origin/main). Codex's content
inside these panels reflects the current FIX-001 state, not stale
E6-DASH-002 text — verified by reading the panel content.

**Note on my earlier count:** in the FIX-001 critique I cited the
`<details>` count as "10 → 6 (−4)." Recounting against the actual
file (excluding a JS comment that mentions `<details>` in source
text), the accurate counts were **9 → 6 (−3)** for top-level/in-cue
details elements + 1 state-class removal = 4 total regressions. The
−3 details + 1 class framing remains correct; the absolute count was
off by one due to grep matching a JS comment line. All 4 regressions
are now repaired.

### 6. No stale content revert? — **PASS**

DASHBOARD.html H1 still reads "Send E6-PROTOCOL-FIX-001 to Claude for
critique" (current handoff state before this critique completed; will
be re-advanced this turn to Sami-decision-pending state per my
refresh). Cue field values still reference "GPT needed now: No —
bootstrap rule already scoped" and "Claude critiques next" (current
FIX-001 framing, not stale E6-DASH-002 "Codex verifies next" text).
Role-flow shows "PR #5 merged → Codex added bootstrap rule → Claude
critiques" — the current FIX-001 flow, not E6-DASH-002's flow.

Codex preserved current content while restoring structural elements.
This is exactly the right repair shape.

### 7. No Polaris redesign? — **PASS**

Verified by structure-counting:
- `<details>` count: 9 (matches origin/main).
- `<summary>` count: 9 (matches origin/main).
- `cue-note` count: 1 (matches origin/main).
- state-class occurrences: 12 (matches origin/main — 5 CSS state
  classes × 2 selectors each + 1 cue panel class + 1 routing-map
  example reference).
- `data-copy` button count: 3 (unchanged — primary/gpt/pause).
- Inline `<script>`: 1; inline `<style>`: 1 (unchanged from FIX-001).
- No new top-level component types introduced.

The repair restores the FIX-001-merged structure exactly.

### 8. `scope_conflict` added byte-equivalently to both files? — **PASS (verified)**

Three independent checks:

a. Grep both files for `scope_conflict` in the bootstrap exit-list
   context — present at line 277 of both PROTOCOL.md and kit template
   with identical wording (`blocker`, `scope_conflict`, `failed`,
   `interrupted`,`max_iterations_reached`, `needs_gpt`, `needs_sami`).

b. Extract the bootstrap paragraph from both files and diff:

```
grep -A11 '^Bootstrap rule for early circles:' .agent-handoff/PROTOCOL.md > /tmp/oc-live-bs.txt
grep -A11 '^Bootstrap rule for early circles:' kit/v1/.agent-handoff/PROTOCOL.md.template > /tmp/oc-kit-bs.txt
diff /tmp/oc-live-bs.txt /tmp/oc-kit-bs.txt
```
→ exit 0 (byte-identical).

c. Extract the entire `#### Outcome Circles` section from both files
   (start marker `#### Outcome Circles` through line before `Use vendor
   diversity as a spectrum:`) and diff:

```
sed -n '/^#### Outcome Circles$/,/^Use vendor diversity as a spectrum:$/p' .agent-handoff/PROTOCOL.md | sed '$d' > /tmp/oc-live.txt
sed -n '/^#### Outcome Circles$/,/^Use vendor diversity as a spectrum:$/p' kit/v1/.agent-handoff/PROTOCOL.md.template | sed '$d' > /tmp/oc-kit.txt
diff /tmp/oc-live.txt /tmp/oc-kit.txt
```
→ exit 0 (mirror byte-identical). 71 lines extracted from each file.

Mirror discipline holds. The first Outcome Circle (`one-doc protocol
mirror verification`) will pass its own rubric.

**Grammar/wording on the in-place edit:** `scope_conflict` was inserted
between `blocker` and `failed`, matching the order in the canonical
result-state list at PROTOCOL.md L301. Position is logically sensible
(after `blocker` because both are stop-class exits; before
`max_iterations_reached` because scope_conflict is detected earlier
than iteration cap).

### 9. OPERATING-MODEL.md avoided? — **PASS**

`git diff --quiet -- .agent-handoff/OPERATING-MODEL.md` returns exit
0 (unchanged). The §8 freshness gap (where §8 describes the Outcome
Circle contract without the bootstrap-period caveat) remains open and
foldable into a future small docs-lock turn. Not blocking.

### 10. All other no-touch surfaces avoided? — **PASS (verified)**

| Surface | Status |
| --- | --- |
| `.agent-handoff/tools/alert-state.sh` | unchanged (6519 bytes) |
| `kit/v1/` other than `PROTOCOL.md.template` | unchanged |
| Root `README.md` / `AGENTS.md` / `CLAUDE.md` | unchanged |
| `docs/` | unchanged |
| `.agent-handoff/reflections/` | still absent |
| `.agent-handoff/improvements/` | still absent |
| `.agent-handoff/advisor-notes/` | still absent |
| `.mcp.json` | still absent |
| Pilot repo (`open-mic-colorado-agent-pilot`) | not touched (Codex's turn note documents this) |
| Live Open Mic Colorado | read-only status check noted; not touched (Codex's turn note documents pre-existing dirty files were observed not touched) |

### 11. DASHBOARD.html self-contained? — **PASS**

- `<link rel="stylesheet">` count: 0
- `<script src=...>` count: 0
- HTTP(S) URLs in browser-resolvable positions: 0
- Executable storage APIs (`localStorage` / `sessionStorage` /
  `IndexedDB`): 0
- Executable network APIs (`fetch` / `XMLHttpRequest` / `EventSource`
  / `WebSocket`): 0
- Executable `clipboard.writeText` calls: 1 (pre-existing, at L645;
  copy buttons still copy only visible text)
- Inline `<script>`: 1, inline `<style>`: 1
- Server requirement: none

Self-containment contract held.

### 12. `alert-state.sh` ran without modifying the working tree? — **PASS**

```
git status --short --untracked-files=all > /tmp/rest_pre.txt
sh .agent-handoff/tools/alert-state.sh > /dev/null 2>&1
git status --short --untracked-files=all > /tmp/rest_post.txt
diff /tmp/rest_pre.txt /tmp/rest_post.txt
```
→ exit 0 (byte-identical pre/post). Working tree unmodified by the
script.

### 13. Combined E6-PROTOCOL-FIX-001 + RESTORE safe to accept? — **YES**

All blockers from the FIX-001 critique are resolved. All nits I named
are either applied (scope_conflict) or explicitly foldable into
future small turns (OPERATING-MODEL.md §8 freshness; the "final
synthesis" phrase tightening — both nits 2 and 3 from the FIX-001
critique). No new blockers introduced.

The combined stack delivers a clean prerequisite for the first
Outcome Circle scope decision. Sami can now:

(a) **Authorize push** of the combined FIX-001 + RESTORE as one PR
    (5 files modified + 3 new turn notes = 8-file PR, similar shape
    to E6-D2 / E6-DASH-002 combined pushes).
(b) **Request one more small tweak** (e.g., fold the
    OPERATING-MODEL.md §8 reference into the same PR, or trim the
    bootstrap paragraph's word wrap which is slightly awkward).
(c) **Pause** — leave the local stack until later.

## Blockers (max 3)

None.

## Nits (suggested, not required)

1. **Bootstrap exit-list line wrap is slightly awkward.** The added
   `scope_conflict` shifted the wrap so that `Exit includes
   `satisfied`,` is on one line, then `` `blocker`, `scope_conflict`,
   `failed`, `interrupted`,`` on the next — and later `or final
   synthesis about` ends one line and `whether the outcome was met.
   This` starts the next, with `bootstrap rule may be revised...` on
   yet another line. The wrap doesn't break semantics (Markdown
   collapses these into a single paragraph at render time) but reads
   slightly clunky in source. Foldable into a future protocol
   tightening turn if Sami values source-file readability. Not
   blocking.

2. **OPERATING-MODEL.md §8 still doesn't reference the bootstrap rule.**
   Same nit as the FIX-001 critique; carried forward unchanged.
   PROTOCOL.md remains authoritative on conflicts so there's no
   contradiction, but §8's "current architecture" doc-lock now
   describes the Outcome Circle contract without the bootstrap-period
   caveat. Foldable into a future small docs-lock turn or
   `E6-D2-FIX-001` (which still has the L3 stale "Last doc-lock"
   header as another foldable item — could batch these together).

3. **The first Outcome Circle packet drafting is now unblocked but
   not yet started.** Per the bootstrap rule, that drafting must be
   NEEDS_GPT (GPT frames packet → Codex builder-reviews → Claude
   audits → Sami approves). I noted this sequence in my earlier
   packet audit; it remains the next substantive turn after FIX-001
   + RESTORE lands. Not a defect of RESTORE; just a pointer to what's
   next.

## Browser verification
- Tool used: N/A
- URL or file path opened: N/A
- Action: static structure verification of DASHBOARD.html against
  origin/main `fbdb0b3` and against my prior FIX-001 critique state
  expectations.
- Visible outcome: N/A — regression repair was confirmed via
  static-grep counting (state-class occurrences, `<details>` count,
  `<summary>` tags, cue-note presence), which is faster and more
  auditable than visual rendering.
- Console/network issues: N/A

If Sami wants visual confirmation that the cue now renders mint-green
again, opening
`/Users/samiserrag/Documents/GitHub/claude-codex/.agent-handoff/DASHBOARD.html`
in Chrome will show the cue panel with the `--courier-soft` background
restored.

## Evidence Basis
- USER SAID: Sami's RESTORE-critique prompt enumerates 13 focus areas
  including HTML structural restoration, scope_conflict fold,
  no-touch preservation, and HTML self-containment.
- FILE VERIFIED:
  - `git status --short --branch --untracked-files=all` shows the
    expected 5-modification + 3-new-turn-note local state on
    `main...origin/main`.
  - `git diff --check` exit 0.
  - `grep -n 'class="human-role-cue'` confirms `role-courier` is
    applied to the cue panel `<div>` at L401.
  - `grep -nE '<summary'` confirms all 9 summary tags including
    `About the 5 states`, `Who's who right now`, and `What changed
    in this snapshot`.
  - `grep -c '^Bootstrap rule for early circles:'` returns 1 in both
    PROTOCOL.md and kit template.
  - Bootstrap paragraph extraction + diff returns exit 0
    (byte-identical mirror).
  - Full Outcome Circles section extraction + diff returns exit 0
    (mirror byte-identical, 71 lines each).
  - `sh .agent-handoff/tools/alert-state.sh` ran successfully; pre/post
    `git status` byte-identical.
  - `wc -c .agent-handoff/tools/alert-state.sh` = 6519 (unchanged).
  - HTML self-containment static checks: 0 external CSS, 0 external
    JS, 0 storage APIs, 0 network APIs, 1 executable `clipboard.writeText`.
- AGENT SUMMARY: Codex's RESTORE turn note documents the repair
  faithfully and explicitly avoids new design surface.
- INFERENCE: The earlier FIX-001 absolute count of 10→6 details was
  off-by-one due to grep matching a JS comment in source text. The
  accurate count was 9→6 (-3) details elements removed + 1 state-class
  removed = 4 regressions. The critique substance (4 regressions
  identified, all 4 repaired by RESTORE) stands regardless of the
  count error.
- UNKNOWN: Whether Sami wants to fold the OPERATING-MODEL.md §8
  freshness (nit #2) into the same PR or defer to a separate turn.
  Recommend separate turn to keep PR scopes clean.

## Portability Findings
- Repo-local assumptions: unchanged from FIX-001 — bootstrap rule's
  effectiveness depends on PROTOCOL.md being read by future agents.
  CLAUDE.md already lists PROTOCOL.md as required reading.
- Machine/local-tool assumptions: none new.
- Browser/connector assumptions: HTML rendering of the restored state
  classes depends on browser CSS support for custom `:root` properties
  and `border-left-width`. All major modern browsers support these.
- Any workaround used: none.

## Handoff
- Next agent: Sami (decision)
- Specific ask: decide one of:
  - **(a) Authorize push** of the combined FIX-001 + RESTORE as one
    PR (5 file modifications + 3 new turn notes; same shape as prior
    combined pushes). Recommend feature branch
    `e6-protocol-fix-001-bootstrap-rule` or similar. Commit message
    can be `E6-PROTOCOL-FIX-001: add Outcome Circle bootstrap rule
    (+ RESTORE repair)`.
  - **(b) Request one more small tweak** (e.g., fix the wrap nit,
    fold OPERATING-MODEL.md §8 reference).
  - **(c) Pause** — leave the local stack until later.

After acceptance/push, the next substantive turn is the first
Outcome Circle scope decision — now properly bootstrap-gated as
NEEDS_GPT (GPT frames packet → Codex builder-reviews → Claude
audits → Sami approves) per the rule that just landed.

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
- Four files touched: this critique turn note (new) + COLLAB.md
  handoff update + DASHBOARD.md text refresh + DASHBOARD.html text
  refresh.

## Dashboard status

DASHBOARD.md and DASHBOARD.html **were refreshed this turn — text
content only**. The Polaris snapshot was advanced from
"Claude critiques (current)" to "Sami decides (current)" with the
cue shifting from COURIER ONLY → APPROVAL ONLY. No CSS, no JS, no
structural additions or removals, no state-class reassignments. The
modeling-the-right-behavior point is that "snapshot refresh" can and
should include cue / H1 / subtitle / role-flow / status fields / cue
field values when the handoff advances — it should not include
structural changes, which is what FIX-001 conflated.

Hard stop after critique.
