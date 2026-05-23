# E6-DASH-002-FIX-001 - Claude Design visual tightening

## Coordinator Trigger
- State: ROUTINE
- Reason: Sami visually inspected the rendered E6-DASH-002 Polaris snapshot
  (in-browser screenshot shared in the same thread) and gave a single specific
  direction: "Much better, but still visually unfocused for human eyes too...
  Go ahead and fold it in please. Visual tightening." Scope is already
  defined: dashboard UX only, same files as E6-DASH-002, same no-touch
  surfaces, applied to the existing PR #5 branch. No architecture, pivot,
  safety, automation, or tooling trigger fired. The fix is a tightening
  pass, not a new design.

## Project Mode (estimated)
- Dominant mode: Execution (~70%, agent heuristic estimate)
- Coordinator: ~20%
- Sami-decision-pending: ~10%
- Unknown: 0%
- Reason: E6-DASH-002 implementation already landed in commit `3057f2d` on
  PR #5; this is execution-mode tightening of that implementation against a
  concrete UX brief from Sami. Coordinator weight is residual (no new
  routing decisions). Sami-decision-pending captures the post-fix accept
  decision (Sami merges PR #5 or asks for another pass).

## Agent
Claude Design (Anthropic) — same role as the parent turn.

## Phase
implementation (fix-turn)

## Trigger

Sami's screenshot of the rendered DASHBOARD.html showed the Human Role Cue
panel and the hero block both occupying ~40% of the visible viewport above
the fold. Sami's exact words: _"Much better, but still visually unfocused
for human eyes too."_ Then: _"Go ahead and fold it in please. Visual
tightening."_

The visual problem was not the cue's information design — the 6 fields
and 5-state taxonomy work. The problem was the cue's **visual weight**
relative to surrounding content:

1. The cue's mint-green background was a large color block that competed
   with the primary action button (also mint/teal `--accent`).
2. The cue's vertical padding + larger font + thicker left border made it
   read as "the main content," not as a status badge.
3. The H1 (`30px`) + subtitle (`16px`) + verbose subtitle copy pushed
   action buttons further down.
4. The role-flow chips were oversized for their information density.
5. The `.cue-fields` grid had generous row gap (`5px`) and 13px values
   when the field labels are short.

## Sami approval basis

Direct quoted authorization in the same thread: _"Go ahead and fold it
in please. Visual tightening."_

Same scope as parent E6-DASH-002:
- Dashboard UX/content only.
- Same 4 files as parent (DASHBOARD.html / DASHBOARD.md / COLLAB.md /
  the parent's two turn notes already in PR #5) — this fix touches 3 of
  those 4 (DASHBOARD.html, DASHBOARD.md, COLLAB.md) and adds this 6th
  turn note.
- Same no-touch surfaces.
- Same branch (`e6-dash-002-human-role-cue`); this is a follow-up
  commit on PR #5, not a new PR.

## Scope limit

- DASHBOARD.html CSS tightening (cue panel + hero block + action buttons).
- DASHBOARD.html prose tightening (subtitle, why panel, cue header
  tagline, cue fields, About-the-5-states list, action button hints).
- DASHBOARD.md mirror tightening (Human Role Cue section, About section
  collapsed into `<details>`, Why-this-snapshot trimmed, subtitle
  trimmed).
- COLLAB.md brief note that FIX-001 was applied on the same branch.
- One new turn note: this file.
- No structural HTML changes (no new components, no removed components,
  no layout refactor).
- No state-class color reassignments (the 5 state colors stay distinct).
- No content removal (all 6 cue fields, all 5 states, all role-flow
  steps, all 3 action buttons preserved).

## Files touched this turn
- `.agent-handoff/DASHBOARD.html` (edited)
- `.agent-handoff/DASHBOARD.md` (edited)
- `.agent-handoff/COLLAB.md` (edited)
- `.agent-handoff/turns/E6-DASH-002-FIX-001-claude-design-visual-tightening.md` (created)

## CSS tightening summary

### Cue panel

| Property | Before | After |
| --- | --- | --- |
| `.human-role-cue` `padding` | `12px 14px` | `9px 12px` |
| `.human-role-cue` `border-radius` | `7px` | `6px` |
| `.human-role-cue` `border-left-width` | `4px` | `3px` |
| `.human-role-cue` `font-size` | `13.5px` | `13px` |
| `.human-role-cue` `margin-bottom` | `16px` | `14px` |
| `.cue-header` `gap` | `6px 10px` | `4px 8px` |
| `.cue-header` `margin-bottom` | `8px` | `5px` |
| `.cue-header` `font-size` | `14px` | `13px` |
| `.cue-header` `align-items` | `center` | `baseline` |
| `.cue-icon` `font-size` | `17px` | `14px` |
| `.cue-label` `letter-spacing` | `0.05em` | `0.04em` |
| `.cue-tagline` `font-size` | `12.5px` | `12px` |
| `.cue-fields` `grid-template-columns` | `minmax(150px, 0.35fr)` | `minmax(140px, 0.3fr)` |
| `.cue-fields` `gap` | `5px 14px` | `2px 12px` |
| `.cue-fields` `font-size` | `13px` | `12.5px` |
| `.cue-note` `margin-top` | `12px` | `7px` |
| `.cue-note` `padding-top` | `10px` | `6px` |
| `.cue-note` `font-size` | `12px` | `11.5px` |
| `.cue-note summary` `font-size` | `12px` | `11.5px` |
| `.cue-note ul/li` `font-size` | `12px` | `11.5px` |
| `.cue-note li` `line-height` | (default) | `1.4` |

### Hero block

| Property | Before | After |
| --- | --- | --- |
| `.eyebrow` `font-size` | `12px` | `11px` |
| `.eyebrow` `margin-bottom` | `6px` | `3px` |
| `h1` `font-size` | `30px` | `24px` |
| `h1` `margin-bottom` | `6px` | `4px` |
| `h1` `line-height` | `1.25` | `1.2` |
| `.subtitle` `font-size` | `16px` | `14px` |
| `.subtitle` `margin-bottom` | `12px` | `10px` |
| `.subtitle` `line-height` | (default) | `1.45` |
| `.why` `font-size` | `14px` | `13px` |
| `.why` `padding` | `8px 12px` | `7px 11px` |
| `.why` `margin-bottom` | `16px` | `12px` |
| `.why` `line-height` | (default) | `1.45` |
| `.role-flow` `font-size` | `13px` | `12px` |
| `.role-flow` `padding` | `8px 10px` | `6px 9px` |
| `.role-flow` `margin-bottom` | `16px` | `12px` |
| `.role-flow` `gap` | `4px 6px` | `3px 5px` |
| `.role-flow .step` `padding` | `3px 9px` | `2px 8px` |
| `.role-flow .step` `border-radius` | `14px` | `12px` |

### Action buttons

| Property | Before | After |
| --- | --- | --- |
| `.actions` `gap` | `8px` | `6px` |
| `.actions` `margin-bottom` | `12px` | `10px` |
| `.action` `padding` | `12px 14px` | `9px 13px` |
| `.action` `gap` | `10px` | `9px` |
| `.action` `border-radius` | `7px` | `6px` |
| `.action` `font-size` | `15px` | `14px` |
| `.action .icon` `font-size` | `17px` | `15px` |
| `.action .hint` `font-size` | `12px` | `11.5px` |
| `.action .hint` `margin-top` | `2px` | `1px` |
| `.action .hint` `line-height` | (default) | `1.35` |

### Route + guardrail (below action buttons)

| Property | Before | After |
| --- | --- | --- |
| `.route` `font-size` | `13px` | `12px` |
| `.route` `margin-top` | `14px` | `12px` |
| `.route` `line-height` | (default) | `1.45` |
| `.guardrail` `font-size` | `12px` | `11.5px` |
| `.guardrail` `margin-top` | `14px` | `11px` |
| `.guardrail` `padding-top` | `12px` | `10px` |
| `.guardrail` `line-height` | (default) | `1.45` |

## Prose tightening summary

### HTML

- **Subtitle**: was 4 sentences (~32 words); now 2 sentences (~18
  words). Removed "4 files touched per authorization" (visible in PR/turn
  note) and "Sami accepts or routes differently after Codex reports"
  (implied by 3-action layout below).
- **Why panel**: was ~50 words; now ~40 words. Tightened "compact Human
  Role Cue above the fold so Sami no longer has to translate" →
  "Human Role Cue above so you don't have to translate"; "not a new
  authored field" wording preserved.
- **Cue header tagline**: removed leading em-dash ("— paste agent-
  authored content; no judgment from you.") → ("paste agent-authored
  content; no judgment needed"). Inline baseline alignment reads more
  like a status badge.
- **Cue fields reorder**: prior order was `GPT needed now / Sami decision
  needed now / Next paste target / Payload type / Why`. New order leads
  with the action ("Next paste target / Payload type") and demotes the
  meta fields ("GPT needed now / Sami decision now") because the actor
  fields answer "what do I do?" first. "Sami decision needed now" →
  "Sami decision now" (less wordy).
- **Cue field values**: tightened ("No — GPT already routed E6-DASH-002
  to Claude Design" → "No — already routed"; "No — Codex verifies file
  scope + self-contained HTML next" → "No — Codex verifies next").
- **About-this-cue collapsible**: heading changed from "About this cue
  (new in E6-DASH-002)" → "About the 5 states" (less self-referential).
  Removed the "what role am I playing right now?" framing sentence
  (redundant with the cue's purpose). Removed the redundant "Project Mode
  remains visible below as descriptive context" line (kept the
  derivation-rule line which is the load-bearing rule).

### Markdown

- Same reorder of cue fields (Next paste target → Payload type → GPT
  needed now → Sami decision now → Why).
- Same "About the 5 states" heading change.
- Wrapped the About-the-5-states list inside `<details>` so it collapses
  by default in renderers that support it (matches HTML behavior).
- Same subtitle / why-panel trimming as HTML.

## Why this does NOT change the cue's design

- All 6 fields preserved (Next paste target, Payload type, GPT needed
  now, Sami decision now, Why, plus the cue header label).
- All 5 states preserved with their icons and color classes.
- Routing map unchanged.
- Derivation rule unchanged (cue is derived from `Coordinator Trigger ×
  inside Outcome Circle? × Next Actor`, not authored).
- UNCLEAR → ASK GPT rule unchanged.
- APPROVAL/COURIER text-label disambiguation unchanged.
- AGENTS RUNNING monitor-for-callback wording unchanged.
- Polaris one-primary-action discipline unchanged.
- COLLAB.md authority + no-approval-inference warning unchanged.

## Verification performed

Pre-edit:
- `git status --short --branch --untracked-files=all` → on
  `e6-dash-002-human-role-cue` branch, clean working tree (parent
  commit `3057f2d` already pushed to PR #5).

Post-edit (this commit):
- `git status --short --untracked-files=all` → exactly 4 entries:
  ```
   M .agent-handoff/COLLAB.md
   M .agent-handoff/DASHBOARD.html
   M .agent-handoff/DASHBOARD.md
  ?? .agent-handoff/turns/E6-DASH-002-FIX-001-claude-design-visual-tightening.md
  ```
- `git diff --check` → empty (no whitespace errors).
- HTML self-containment recheck:
  - `<link rel="stylesheet">` count: 0
  - `<script src=>` count: 0
  - HTTP(S) URLs in browser-resolvable positions: 0
  - Executable storage/network APIs: 0
  - `clipboard.writeText` executable calls: 1 (pre-existing)
- No-touch surface recheck (all unchanged):
  - `.agent-handoff/PROTOCOL.md`
  - `.agent-handoff/OPERATING-MODEL.md`
  - `.agent-handoff/tools/alert-state.sh` (still 6519 bytes)
  - `.agent-handoff/reflections/` (still absent)
  - `.agent-handoff/improvements/` (still absent)
  - `.agent-handoff/advisor-notes/` (still absent)
  - `kit/v1/**`
  - Root `README.md` / `AGENTS.md` / `CLAUDE.md`
  - `docs/`
  - `.mcp.json` (still absent)
- Pilot repo (`open-mic-colorado-agent-pilot`) not touched at all.
- Live Open Mic Colorado not touched at all.

## Decisions (binding)

1. **No state-class color reassignments.** The 5 state colors stay
   distinct. Tightening operates on padding, font size, and border width
   — not on hue or saturation. Sami's "unfocused" feedback is about
   visual weight, not color clarity.
2. **Cue field order is now action-first.** `Next paste target` and
   `Payload type` (the two fields that answer "what do I do?") lead;
   `GPT needed now` and `Sami decision now` (the meta fields that answer
   "is this routine?") follow. `Why` stays last as the one-line
   justification.
3. **About-this-cue is now "About the 5 states"** and is collapsed by
   default in both HTML (`<details>`) and Markdown (`<details>`). The
   in-cue explainer is helpful but should not consume cue real estate
   when the user already knows the states.

## Open questions for the other agent

For Codex (optional re-verify):
- The CSS additions are all reductions of existing values (no new
  selectors, no new classes). Does the no-touch surface check still
  pass? (PROTOCOL.md / OPERATING-MODEL.md / alert-state.sh / kit/v1/ /
  root docs / docs/ / advisor-notes/reflections/improvements all
  unchanged.)
- The HTML self-containment static checks are unchanged in shape; do
  they still pass? (0 external CSS/JS, 0 HTTP URLs in executable
  positions, 0 storage/network APIs, 1 executable clipboard.writeText.)

For Sami (acceptance):
- Does the tightened cue panel feel like a status badge rather than the
  main content?
- Is the hero block + cue compressed enough that the three action
  buttons are now visible without scrolling on a standard laptop
  viewport?

## Blockers (must-fix before continuing)

None.

## Nits (suggested, not required)

1. **`align-items: baseline` on `.cue-header` is a small risk** with
   emoji icons of varying rendering sizes across platforms. If the icon
   sits noticeably off the label baseline on some systems, fall back to
   `align-items: center` and tweak `.cue-icon` `line-height` to compensate.
2. **The cue's mint-green background may still feel close to the primary
   action button** (teal `--accent`). A separate FIX-002 could use a
   neutral background with only the left-border + icon carrying the
   state color, if Sami wants further visual separation between status
   indicator and primary action.
3. **The "About the 5 states" collapsible is now smaller but still adds
   vertical space** when opened. If Sami uses it rarely, could move it
   to a sibling Polaris panel below the hero — but that violates the
   "above the fold" placement, so deferred.

## Browser verification
- Tool used: Launch preview panel (the Claude Code preview hook
  auto-rendered DASHBOARD.html after each edit).
- URL or file path opened: `.agent-handoff/DASHBOARD.html` (file://).
- Action: applied CSS tightening edits incrementally; preview
  auto-refreshed.
- Visible outcome: cue panel + hero block visibly more compact;
  primary action button visible without scrolling on a standard laptop
  viewport.
- Console/network issues: N/A — no console / network access in this
  iteration, only visual layout review.

**Reason browser verification is partial:** the Launch preview is the
in-CLI auto-render; Sami's earlier external Chrome screenshot was the
authoritative pre-FIX-001 visual reference. Codex can re-verify in
Chrome MCP if a second-pair-of-eyes UX check is requested.

## Evidence Basis
- USER SAID: _"Much better, but still visually unfocused for human eyes
  too."_ followed by _"Go ahead and fold it in please. Visual
  tightening."_ These two sentences in the same thread are the
  authorization. Sami's prior screenshot of the rendered HTML is the
  pre-fix reference.
- FILE VERIFIED: pre-fix DASHBOARD.html had `.human-role-cue padding:
  12px 14px / font-size: 13.5px / border-left-width: 4px` confirmed by
  reading; post-fix values match the table above.
- AGENT SUMMARY: prior auditor + GPT proposal + Claude Design
  implementation all framed the cue as "above the fold" — that framing
  is preserved; tightening reduces footprint without removing fields.
- INFERENCE: Sami's "unfocused" feedback maps to two distinct UX
  problems (visual weight + competing color with primary action). The
  fix targets the visual-weight problem; the color-competition problem
  is flagged as a candidate FIX-002 if Sami wants it (see Nit #2).
- UNKNOWN: whether Sami also wants the cue's mint-green replaced with a
  neutral background carrying state via only the icon + left border.
  Not implemented in this fix; flagged as a deferred option.

## Portability Findings
- Repo-local assumptions: same as parent E6-DASH-002 turn note.
- Machine/local-tool assumptions: none new. CSS properties used are
  standard.
- Browser/connector assumptions: emoji icons may render at slightly
  different sizes across platforms (especially older Linux fonts);
  `align-items: baseline` may need adjustment if icon-label alignment
  drifts visibly. Not observed in macOS Chrome preview.
- Any workaround used: none.

## Handoff
- Next agent: Sami (acceptance / merge of PR #5)
- Specific ask: re-review the rendered DASHBOARD.html in Chrome.
  Either:
  (a) merge PR #5 as-is with this tightening commit folded in,
  (b) ask for another tightening pass (FIX-002 — e.g., neutral cue
      background per Nit #2), or
  (c) ask Codex to re-verify the no-touch + self-containment checks on
      the FIX-001 commit before merging.

After PR #5 merges, the next substantive turn remains the first
Outcome Circle scope decision (NEEDS_GPT per the codified protocol
and per the bootstrap policy follow-up `E6-PROTOCOL-FIX-001`, not yet
authored).

## Why this does not expand the experiment
- Same scope as parent E6-DASH-002: dashboard UX/content only.
- Same no-touch surfaces.
- No new PROTOCOL/OPERATING-MODEL/kit/alert-state edits.
- No automation, model calls, API setup, NanoClaw/CommonGround/Notion,
  MCP/plugin/bridge, .mcp.json, cron/timer/webhook/launch agent/global
  config, pilot repo touch, live Open Mic Colorado touch, or
  product/runtime work.
- No Outcome Circle run.
- Same PR (#5), same branch (`e6-dash-002-human-role-cue`), follow-up
  commit only.

## Dashboard status

DASHBOARD.md and DASHBOARD.html were both **refreshed this turn**
(visual tightening pass; content/structure preserved).

Hard stop. Awaiting Sami's review of PR #5 with FIX-001 folded in.
