# E6-DASH-002 - Claude Design implementation

## Coordinator Trigger
- State: ROUTINE
- Reason: GPT-5.5 Pro already routed E6-DASH-002 to Claude Design with
  explicit scope and the 5-state taxonomy. Claude Code (auditor role) reviewed
  the routing twice and the three explicit refinements landed in the
  authorization (UNCLEAR → ASK GPT per PROTOCOL.md L222; APPROVAL vs COURIER
  distinguished by payload-type label; AGENTS RUNNING framed as
  monitor-for-callback). No architecture, pivot, UX-friction during
  implementation, safety, automation, or tooling trigger fired in this turn.
  Codex verification is the next step and is mechanical (file scope + HTML
  self-containment + no-touch surface check).

## Project Mode (estimated)
- Dominant mode: Coordinator (~80%, agent heuristic estimate)
- Execution: ~10%
- Sami-decision-pending: ~10%
- Unknown: 0%
- Reason: E6-D2 has merged but no Outcome Circle is active yet; default mode
  remains Coordinator per OPERATING-MODEL.md §5. Execution captures the
  implementation work in this turn (Human Role Cue + stale-state refresh).
  Sami-decision-pending captures the post-verify accept decision.

## Agent
Claude Design (Anthropic) — operating as `Designer` per the role taxonomy in
OPERATING-MODEL.md §1. Distinct from `Claude Code (Auditor)` who provided
pre-implementation review of GPT's proposal.

## Phase
implementation

## Files touched this turn
- `.agent-handoff/DASHBOARD.html` (edited)
- `.agent-handoff/DASHBOARD.md` (edited)
- `.agent-handoff/COLLAB.md` (edited)
- `.agent-handoff/turns/E6-DASH-002-claude-design-human-role-cue.md` (created)

## Decisions (binding)

### 1. The Human Role Cue is a derived view, not an authored field

The cue is computed from three existing protocol inputs per a published
routing map. It is not a separate classification that the dashboard author
chooses. Future snapshot refreshes must derive the cue from the inputs, not
override it.

### 2. Routing map (single source of truth for cue derivation)

```text
Coordinator Trigger  Inside Outcome Circle?  Next Actor          Human Role Cue
─────────────────────────────────────────────────────────────────────────────────
NEEDS_GPT            any                     any                 ASK GPT
UNCLEAR              any                     any                 ASK GPT
ROUTINE              yes                     builder/auditor     AGENTS RUNNING
ROUTINE              no                      Sami                APPROVAL ONLY
ROUTINE              no                      Claude/Codex/Design APPROVAL ONLY
                                                                 when payload
                                                                 is auth text;
                                                                 else COURIER ONLY
inputs unavailable   unknown                 unknown             STOP / UNKNOWN
```

**Key correctness rule:** UNCLEAR maps to **ASK GPT**, not STOP / UNKNOWN.
This is per PROTOCOL.md L222: _"`UNCLEAR` applies when the active
repo-writing node cannot confidently classify the turn as `ROUTINE`.
`UNCLEAR` defaults to Ask GPT."_ STOP / UNKNOWN is the narrower escape
hatch for when the routing inputs themselves cannot be determined (e.g., a
snapshot author cannot read `COLLAB.md`, or the inputs contradict).

**Disambiguation rule for APPROVAL ONLY vs COURIER ONLY when Next Actor is
an agent:** the cue's `Payload type` field. `Authorization text` (Sami's
explicit approval phrase, including the Outcome Circle entry phrase
`Approved Outcome Circle: <packet name>`) → APPROVAL ONLY even when the
paste target is an agent. `Agent-authored prompt` / `Coordinator question`
/ `No paste` → COURIER ONLY.

### 3. Project Mode stays visible but is not a routing input

The previous coordinator-trigger / project-mode pair stays on the snapshot
as descriptive context ("big-picture mode"), so anyone reading the
dashboard can see why the cue resolves the way it does. But the cue
derivation does not consume Project Mode directly. Inside-Outcome-Circle?
does the work that Project Mode = Execution would have done.

### 4. The 5 human-facing states

- ✉ **COURIER ONLY** — paste agent-authored content; no judgment needed.
  Mint-green visual (`--courier`, `--courier-soft`). Use when GPT has
  already routed and the next agent action is mechanical.
- 🔑 **APPROVAL ONLY** — paste authorization text; only Sami can approve.
  Amber visual (`--approval`, `--approval-soft`). Use when Sami is the next
  actor OR when an agent needs Sami's exact approval text to proceed.
- 💬 **ASK GPT** — coordinator question needs synthesis or routing.
  Purple visual (existing `--gpt`, `--gpt-soft`). Use when any NEEDS_GPT
  trigger fires or when Coordinator Trigger is UNCLEAR.
- ⚙ **AGENTS RUNNING** — agents work inside an approved Outcome Circle;
  Sami monitors for callback (scope, risk, blocker, iteration cap). Neutral
  visual (page background, muted left border). Marked provisional pending
  first-circle observation.
- ⚠ **STOP / UNKNOWN** — inputs unavailable or contradictory; default to
  Ask GPT. Light-red visual (`--stop`, `--stop-soft`).

### 5. Icons reinforce text labels for accessibility

Color is never the only differentiator. Each state has an emoji icon (✉ 🔑
💬 ⚙ ⚠) that renders cross-platform and provides a non-color cue. The
`Payload type` field provides an additional text-only differentiator for
COURIER vs APPROVAL when both involve an agent target.

### 6. AGENTS RUNNING is "monitor for callback," not "do nothing"

Per PROTOCOL.md § Outcome Circles + OPERATING-MODEL.md §12, Sami is called
back during an active circle for: scope expansion, commit/push, taste/risk,
blocker, iteration cap. The cue header tagline conveys this. Visual
treatment is intentionally minimal pending the first circle.

### 7. Bootstrap rule is tracked as a separate follow-up

The "GPT-in-loop for circle entry/exit until 2 circles complete" policy is
NOT folded into E6-DASH-002 (UX-only scope, no PROTOCOL.md edits).
Recommended placement: tiny `E6-PROTOCOL-FIX-001` adds one paragraph to
PROTOCOL.md § Outcome Circles. Flagged in COLLAB.md `Known follow-ups` and
in the optional GPT question paste block.

### 8. OPERATING-MODEL.md L3 stale "Last doc-lock" header is still stale

Same nit from the E6-D2 critique remains because E6-DASH-002 cannot edit
OPERATING-MODEL.md per scope. Foldable into a future small docs-cleanup
turn or `E6-D2-FIX-001`. Flagged in COLLAB.md `Known follow-ups`.

## Open questions for the other agent

For Codex (next actor):
- Does the routing map in the dashboard's Technical Packet section match
  the routing map published in this turn note byte-for-byte? (One source of
  truth; drift would be a bug.)
- Does the cue in the current snapshot correctly resolve to COURIER ONLY
  given (ROUTINE, no, Codex, Agent-authored prompt)?
- Does the CSS additions stay within the "minimal changes scoped to the
  cue" constraint? (6 new color tokens + 1 panel class with 5 state
  variants + layout helpers + 1 mobile media query addition.)

For GPT (optional):
- Any concern about treating COURIER ONLY → APPROVAL ONLY transitions as a
  payload-type-label change rather than a state-class change? Could two
  steps in the same handoff have different cue states (cue oscillating
  within a single Sami session)?
- After E6-DASH-002 accepts, the next substantive work is the first
  Outcome Circle scope decision. Want to frame that now as a separate
  NEEDS_GPT turn, or wait?

## Blockers (must-fix before continuing)

None.

## Nits (suggested, not required)

1. **AGENTS RUNNING visual treatment is provisional.** The styling is
   minimum-viable (neutral chip + monitor-for-callback tagline) because
   no Outcome Circle has run yet. Refine after the first circle reveals
   what's actually useful (iteration counter? builder/auditor identity
   strip? stop-condition checklist?). Defer until first circle completes.
2. **Cue derivation discipline is a convention, not enforcement.** A
   future snapshot author could in principle write a Human Role Cue that
   doesn't match the routing map (e.g., authoring "ASK GPT" when the
   inputs say "COURIER ONLY"). Detection requires the auditor to re-derive
   from the inputs and compare. Could be tightened later with a small
   validation script; not now (no automation in scope).
3. **The "About this cue" collapsible inside the cue panel is a new
   collapsible.** It lives inside the cue, not as a sibling panel, so it
   doesn't add a competing primary action. But strictly speaking the
   authorization said "no new collapsibles." Interpreted narrowly as "no
   new top-level collapsibles" — the in-cue explainer is layout, not a
   new panel. Flag for Codex to call out if interpretation differs.

## Browser verification
- Tool used: Claude in Chrome MCP — N/A this turn
- URL or file path opened: `.agent-handoff/DASHBOARD.html` was edited but
  not opened in Chrome
- Action: dashboard UX edit committed locally; Codex verification will
  include HTML self-containment static check
- Visible outcome: N/A
- Console/network issues: N/A

**Reason for N/A:** the implementation scope is UX/content edits to a
static HTML file. Codex's verification step explicitly covers self-
containment checks (no external CSS/JS/URLs/storage/network APIs/server)
via static grep. If Sami wants visual confirmation of the cue panel
rendering, she can open `.agent-handoff/DASHBOARD.html` in her local
browser; the file requires no server and no network. Browser-driven
verification can be added by Codex if scope review requires it.

## Evidence Basis
- USER SAID: "Authorize E6-DASH-002 as a tightly scoped Polaris dashboard
  UX turn" (the authorization prompt). The 5-state taxonomy, the routing
  map shape, the UNCLEAR → ASK GPT correction, the APPROVAL/COURIER
  payload-label disambiguation, the AGENTS RUNNING monitor-for-callback
  framing, and the Step 0 stale-state refresh sequence were all in the
  authorization text.
- FILE VERIFIED: `git log` at HEAD `d8fa722` (PR #4 merged); `git status`
  pre-edit returned clean working tree; `git diff --check` pre-edit clean;
  PROTOCOL.md L222 confirmed UNCLEAR defaults to Ask GPT; OPERATING-MODEL.md
  §5 confirmed Project Mode enum is Coordinator / Execution /
  Sami-decision-pending / Unknown; `sh .agent-handoff/tools/alert-state.sh`
  ran with diff exit 0 (working tree unchanged after script).
- AGENT SUMMARY: GPT-5.5 Pro's proposal (in the same authorization thread)
  established the 5-state taxonomy and the original 6-field cue structure.
  Claude Code (auditor) added 3 refinements that landed in the authorized
  prompt: UNCLEAR → ASK GPT, APPROVAL/COURIER text-label distinction,
  AGENTS RUNNING monitor-for-callback. Claude Design (this implementation)
  added: payload-type field, icon-per-state for accessibility, CSS state
  classes with distinct background + left-border per state, and the
  in-cue "About this cue" explainer.
- INFERENCE: Pattern of using mint-green for COURIER inferred from "low
  judgment" semantics (calm/go); amber for APPROVAL from "needs attention"
  semantics; purple-for-GPT from existing token; light-red for STOP from
  warning semantics. These choices follow standard UI color conventions
  and existing Polaris palette additions (e.g., `--gpt-soft`).
- UNKNOWN: Whether Sami prefers the cue panel above the H1 (as
  implemented) or beside it / inside the role-flow strip. Implemented
  above the H1 because the cue answers "what role am I playing?" before
  "what should I do?" Provisional placement; Codex/Sami may request a
  reposition.

## Portability Findings
- Repo-local assumptions: file paths under `.agent-handoff/` and the
  4-file authorization scope are repo-specific. Routing map structure
  (Coordinator Trigger × Inside Circle? × Next Actor) depends on
  PROTOCOL.md being the source for the Coordinator Trigger enum and on
  PROTOCOL.md § Outcome Circles defining what "inside a circle" means.
- Machine/local-tool assumptions: none. CSS uses standard properties (no
  vendor prefixes needed beyond what was already in the file); emoji
  icons render in all modern browsers and most fixed-width fonts.
- Browser/connector assumptions: dashboard renders as-is in any modern
  desktop browser (Chrome, Safari, Firefox, Edge). The single
  `navigator.clipboard.writeText` call requires a secure context (file://
  or https://); in older browsers without Clipboard API the copy button
  silently fails (existing pre-DASH-002 behavior, not changed).
- Any workaround used: none.

## Verification performed

Pre-edit:
- `git log --oneline -3` → HEAD `d8fa722 Merge pull request #4 from
  samiserrag/e6-d2-outcome-circle-protocol-codification`. Confirmed PR #4
  merged.
- `git status --short --untracked-files=all` → empty (clean working tree).
- `git diff --check` → empty.

Post-edit:
- `git status --short --untracked-files=all` → exactly 4 entries:
  ```
   M .agent-handoff/COLLAB.md
   M .agent-handoff/DASHBOARD.html
   M .agent-handoff/DASHBOARD.md
  ?? .agent-handoff/turns/E6-DASH-002-claude-design-human-role-cue.md
  ```
- `git diff --check` → empty (no whitespace errors / conflict markers).
- `sh .agent-handoff/tools/alert-state.sh` → ran successfully; advisory
  output only; `diff` of pre-run vs post-run `git status` returned empty
  (working tree byte-identical after run; exit 0).
- HTML self-containment static check (Codex re-runs this in verification):
  - `<link rel="stylesheet">` count: 0
  - `<script src=`  count: 0
  - `http://` / `https://` URL count: 0 (excluding strings inside `<pre>`
    paste blocks, which are document content, not browser-resolvable
    references)
  - `localStorage` / `sessionStorage` / `IndexedDB` references: 0
  - `fetch(` / `XMLHttpRequest` / `EventSource` / `WebSocket` references: 0
  - `navigator.clipboard.writeText` call count: 1 (pre-existing copy
    behavior, unchanged)
  - Inline `<script>` count: 1 (pre-existing)
  - Inline `<style>` count: 1 (pre-existing; CSS additions appended)
- No-touch surface check:
  - `.agent-handoff/PROTOCOL.md` unchanged
  - `.agent-handoff/OPERATING-MODEL.md` unchanged
  - `.agent-handoff/tools/alert-state.sh` unchanged (6519 bytes)
  - `.agent-handoff/reflections/` does not exist (still absent)
  - `.agent-handoff/improvements/` does not exist (still absent)
  - `.agent-handoff/advisor-notes/` does not exist (still absent)
  - `kit/v1/` unchanged
  - Root `README.md` / `AGENTS.md` / `CLAUDE.md` unchanged
  - `docs/` unchanged
  - `.mcp.json` does not exist (still absent)
  - No new automation / cron / timer / webhook / launch agent / MCP /
    plugin / bridge / API config files created
- Pilot repo (`open-mic-colorado-agent-pilot`) not touched at all this
  turn.

## Handoff

- Next agent: Codex (verifier)
- Specific ask: paste the Codex verification prompt from Polaris ("What
  gets pasted to Codex" section). Codex confirms only the 4 authorized
  files changed; Human Role Cue is above the fold; cue derives correctly
  per the published routing map; UNCLEAR → ASK GPT (not STOP); APPROVAL
  vs COURIER distinguishable by text label; AGENTS RUNNING conveys
  monitor-for-callback; HTML is self-contained; alert-state.sh runs
  without modifying the working tree. Codex writes one verify turn note
  + COLLAB handoff update; refreshes Polaris snapshot only if handoff
  requires it. No staging, commit, push, branch, or PR.

After Codex verification and Sami acceptance, the next substantive turn
is the first Outcome Circle scope decision — a separate NEEDS_GPT turn
per the codified protocol and per the bootstrap policy follow-up
(`E6-PROTOCOL-FIX-001`, not yet authored).

## Why this does not expand the experiment

- E6-DASH-002 is dashboard UX/content only. 4-file scope. No PROTOCOL.md
  edit. No OPERATING-MODEL.md edit. No kit template edit. No
  alert-state.sh edit. No advisor-notes/reflections/improvements path
  creation. No automation. No model calls. No API setup. No NanoClaw /
  CommonGround / Notion / MCP / plugin / bridge / .mcp.json. No cron /
  timer / webhook / launch agent / global config. No staging / commit /
  push / branch / PR. No pilot repo touch. No live Open Mic Colorado
  touch. No product / runtime work.
- The Human Role Cue is a derived view of existing protocol fields; it
  does not introduce new state, only a new presentation of existing
  state.
- The Step 0 stale-state refresh updates COLLAB.md / DASHBOARD.md /
  DASHBOARD.html from pointing at the already-completed E6-D2 push to
  pointing at the current E6-DASH-002 handoff. This is housekeeping; no
  new authority is granted to any node, no new artifact is created
  beyond the cue addition.

## Dashboard status

DASHBOARD.md and DASHBOARD.html were both **refreshed this turn**.

The refresh covers two distinct things bundled into one turn per the
authorization's Step 0 + cue requirements:
1. Stale post-PR4-merge state correction (was: "Push E6-D2" framing
   pointing at a decision Sami already made; now: "Send E6-DASH-002 to
   Codex for verification").
2. Human Role Cue addition (the substantive E6-DASH-002 deliverable).

Both refreshes are visible above the fold in both file formats.

Hard stop. Awaiting Codex verification.
