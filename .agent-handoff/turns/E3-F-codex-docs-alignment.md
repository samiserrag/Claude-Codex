Previous experiment terminal turn: Experiment 3 / E3-E-FIX-001-claude-critique.md

# E3-F - Codex docs alignment

## Agent
Codex

## Phase
fix

## Schema
Reuses the Experiment 1 turn-note schema explicitly. Includes Evidence Basis,
Portability Findings, and the Unscheduled Fix-Turn Shape required by
`PROTOCOL.md`. This is an authorized docs-alignment turn before any kit
extraction. It updates existing allowed docs only and does not extract a kit,
set up adapters, install tools, register MCP, enable bridges, edit global
config, create a branch, commit, push, open a PR, edit signed trust/event
files, edit private keys, or move any proposal to approved.

## Files touched this turn
- `README.md` (edited)
- `AGENTS.md` (edited)
- `CLAUDE.md` (edited)
- `.agent-handoff/PROTOCOL.md` (edited)
- `.agent-handoff/COLLAB.md` (edited; handoff fields only)
- `.agent-handoff/turns/E3-F-codex-docs-alignment.md` (created)

## Evidence Basis
- USER SAID: Sami explicitly accepted E3-E-FIX-001 and authorized E3-F on
  2026-05-15 as a docs-alignment turn before any kit extraction, limited to
  existing allowed docs plus this new turn note.
- USER SAID: E3-F must align the docs to ten points: local-first not
  local-only; file-based handoff as minimal binding reference; signed event
  governance optional; live adapters disabled; per-experiment turn caps;
  named browser runner or explicit N/A; automation budget N/A unless scoped;
  optional file-based consultation; prior art only; kit extraction separate.
- FILE VERIFIED: `.agent-handoff/PROTOCOL.md` contains the active Stopgate
  Rule, Response History Policy, Evidence Basis, Portability Findings, and
  Unscheduled Fix-Turn Shape.
- FILE VERIFIED: `.agent-handoff/COLLAB.md` records Sami's verbatim E3-F
  authorization and says only Sami can move proposed-to-approved.
- FILE VERIFIED: `README.md`, `AGENTS.md`, `CLAUDE.md`, and
  `.agent-handoff/PROTOCOL.md` had stale or incomplete language around
  file-based scope, turn caps, adapter setup, automation, consultation, prior
  art, and kit extraction.
- FILE VERIFIED: `docs/chrome-runners.md` already names the repo's Chrome
  runner and says not to fall back to Playwright, so it did not require an
  edit for alignment point 6.
- FILE VERIFIED: `docs/test-project.md` was read for context only and left
  unedited.
- FILE VERIFIED: E3-A, E3-B, E3-D, E3-D-FIX-001, E3-E, E3-E-FIX-001, and the
  latest E3-E-FIX-001 Claude critique were read for accepted E3 state.
- FILE VERIFIED: `git diff --check` passed after edits.
- FILE VERIFIED: `npm test` failed because the existing scaffold check expects
  `COLLAB.md` sections named `## Hard Constraints / Approval Stopgates` and
  `## Decisions Made`; `git show HEAD:.agent-handoff/COLLAB.md` confirms
  those headings were already absent before E3-F.
- INFERENCE: The safest docs shape is to preserve Experiment 1 history while
  adding current E3 portability defaults, rather than rewriting the repo as if
  the kit has already been extracted.
- UNKNOWN: No future adopter values are known yet for actual browser runner,
  CI runner, automation budget, turn cap, trust root, or adapter choice.

## Decisions (binding)
- E3-F applies docs alignment only. It does not authorize kit extraction into
  `colorado-songwriters-collective` or any other repo.
- `README.md`, `AGENTS.md`, `CLAUDE.md`, and `PROTOCOL.md` now state the
  current E3 posture: local-first, file-based reference by default, optional
  signed governance, disabled live adapters, per-experiment caps, explicit
  browser-runner or N/A, automation budget N/A unless scoped, optional
  file-based consultation, prior art only, and extraction as a separate action.
- `docs/chrome-runners.md` was audited and left unchanged because it already
  names this repo's browser runner and does not conflict with the explicit N/A
  path for future adopters with no browser surface.
- `PROTOCOL.md` edits are language alignment only. No new schema fields, event
  kinds, payload schemas, approval mechanics, adapter setup steps, or
  signed-governance requirements were added.
- Proposed only, not applied: a future separately approved protocol/schema
  housekeeping turn could add historical phase values such as `fix` and
  `rescope` to the Phase enum and define a conventional `Cap: N turns` line in
  experiment authorizations. E3-F intentionally did not make that schema edit.

## Alignment audit

### `README.md`

- Needed text changes: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10.
- Already aligned before E3-F: partial only. It mentioned file-based
  Experiment 1, Chrome-first validation, and bridge setup as later work, but
  did not clearly separate accepted E3 portability defaults from first-run
  history.
- Edited sections: added `Accepted E3 Alignment`; changed `First Run`; renamed
  `Optional Bridge Setup` to `Bridge And Adapter Status`.
- Alignment intent: make the README's adopter-facing surface accurate without
  overpromising a packaged kit or implying bridge commands are approved.
- Before/after shape: before, README was mostly E1 setup plus example bridge
  commands. After, it explicitly states local-first/default-file behavior,
  optional layers, disabled adapters, N/A defaults, prior-art status, and
  separate kit extraction.

### `AGENTS.md`

- Needed text changes: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10.
- Already aligned before E3-F: safety rules already blocked installs/git
  operations without approval, and browser validation already named Codex
  Chrome. It still framed the turn cap as the static four-turn E1 cap.
- Edited sections: added `Accepted E3 Operating Defaults`; changed the
  collaboration rule about stopping after four E1 notes.
- Alignment intent: make Codex cold-start instructions match accepted E3 state
  while preserving Codex-specific handoff fields.
- Before/after shape: before, Codex saw E1-era instructions with Chrome-first
  validation. After, Codex also sees the ten E3 defaults and a per-experiment
  turn-cap rule.

### `CLAUDE.md`

- Needed text changes: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10.
- Already aligned before E3-F: safety rules already blocked installs/git
  operations without approval, and browser validation already named Claude in
  Chrome MCP. It still framed the turn cap as the static four-turn E1 cap.
- Edited sections: added `Accepted E3 Operating Defaults`; changed the
  collaboration rule about stopping after four E1 notes.
- Alignment intent: keep CLAUDE.md parallel with AGENTS.md so cold-read Claude
  and Codex agents receive the same E3 defaults.
- Before/after shape: before, Claude saw E1-era instructions with Chrome-first
  validation. After, Claude also sees the same ten E3 defaults and
  per-experiment cap framing as Codex.

### `.agent-handoff/PROTOCOL.md`

- Needed text changes: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10.
- Already aligned before E3-F: partial. The Stopgate Rule already protected
  approvals; the turn-note schema already allowed browser verification as N/A;
  E1 already documented file-based operation; bridge experiments already
  required explicit approval.
- Edited sections: `Purpose`, new `Baseline And Optional Layers`, `Turn Loop`,
  `Experiment 1`, `Later Bridge Or Adapter Experiments`, `Stopgates`, and
  `Success Criteria`.
- Alignment intent: align language only, preserving the existing protocol
  structure and avoiding new schema/event/payload mechanics.
- Before/after shape: before, the protocol could be read as file-based only
  and as having a repo-wide four-turn cap. After, it says file-based is the
  binding baseline, adapters are opt-in, and turn caps belong to the current
  experiment authorization.

### `.agent-handoff/COLLAB.md`

- Needed text changes: handoff fields only, not substantive alignment content.
- Already aligned before E3-F: all ten alignment points were already present
  in Sami's verbatim E3-F authorization block.
- Edited sections: `Current Owner`, the top current-state paragraphs under
  `Current Phase`, `Latest Codex Response`, `Questions Requiring Sami
  Approval`, `Next Request To Claude`, `Next Request To Codex`, and
  `Next Request To Sami`.
- Alignment intent: hand work to Claude for E3-F critique without
  restructuring the historical record.
- Before/after shape: before, COLLAB still pointed at Codex authoring E3-F and
  at the older E3-E-FIX-001 critique handoff. After, it points at Claude's
  E3-F critique, records the E3-F summary, and preserves hard-stop posture.

### `docs/chrome-runners.md`

- Needed text changes: none.
- Already aligned before E3-F: point 6 for this repo. It names Codex Chrome
  plugin/connector and Claude in Chrome MCP, says not to default to Playwright,
  and requires missing connector state to be reported instead of silently
  substituting another runner.
- Edited sections: none.
- Alignment intent: leave repo-specific Chrome runner docs stable because they
  do not conflict with the kit rule that a future adopter can choose a named
  runner or explicit `N/A` with reason.
- Before/after shape: unchanged.

## Open questions for the other agent
- Does Claude agree that the PROTOCOL.md changes are conservative language
  alignment only, with no new schema fields, event kinds, or approval
  mechanics?
- Does Claude see any remaining README, AGENTS, or CLAUDE wording that could
  still be misread as local-only, static-four-turn, or bridge-ready?
- Does Claude agree that leaving `docs/chrome-runners.md` unchanged is correct
  because this repo has a named Chrome runner?

## Blockers (must-fix before continuing)
- None for E3-F filing.
- Claude architecture-consultant critique of E3-F is required before any
  further E3 work or any kit-extraction action.
- Sami's explicit approval remains required before any extraction into another
  repo, adapter setup, install, MCP registration, plugin setup, bridge
  enablement, global config change, git operation, signed trust/event edit, or
  proposed-to-approved transition.

## Nits (suggested, not required)
- A future kit-bootstrap turn should pick one canonical starter-turn-template
  location, likely `.agent-handoff/prompts/starter-turn-note.md`.
- A future protocol/schema housekeeping turn could add historical `fix` and
  `rescope` phase values to the schema if Sami wants the enum to match actual
  practice.
- A future kit template should generalize read-date conventions beyond URLs to
  papers, screenshots, talks, and other prior-art sources.

## Browser verification
- Tool used: N/A
- URL or file path opened: N/A
- Action: N/A
- Visible outcome: N/A
- Console/network issues: N/A

Reason: docs-alignment turn only. No app behavior, browser surface, runtime
bridge, MCP registration, plugin setup, automation path, or Chrome runner
changed.

## Portability Findings
- Repo-local assumptions: the accepted baseline remains ordinary repo files in
  `.agent-handoff/`; this turn did not create a portable kit directory or copy
  files into another repo.
- Machine/local-tool assumptions: none beyond reading and editing Markdown in
  this repo. No installs, network setup, MCP registration, plugin setup,
  bridge enablement, or global config changes were performed.
- Browser/connector assumptions: this repo remains Chrome-first. Future
  adopters must name their runner or explicitly document browser QA as `N/A`
  with a reason.
- Any workaround used: none.

## Unscheduled Fix-Turn Shape
- Trigger: E3-E-FIX-001 was accepted and Sami explicitly authorized E3-F to
  align existing docs with accepted E3 state before any kit extraction.
- Sami approval basis: explicit 2026-05-15 authorization recorded in
  `COLLAB.md` at commit `4a78794`, limiting E3-F to the allowed docs and this
  new turn note, with no extraction, setup, installs, git operations, or
  proposed-to-approved transition.
- Scope limit: update existing allowed docs only for the ten alignment points;
  optionally edit `docs/chrome-runners.md` only if stale browser-runner
  language conflicted. It did not conflict and was not edited.
- Files touched: see `Files touched this turn` above.
- Verification performed: required files were read in the requested order;
  E3 context turn notes and the latest E3-E-FIX-001 Claude critique were read;
  docs were searched for stale local-only/file-only/bridge/turn-cap/browser/
  automation/council/prior-art/kit language; `docs/test-project.md` and prior
  turn notes were left unedited; `git diff --check` passed; `npm test` failed
  on pre-existing COLLAB section-name expectations outside E3-F's handoff-only
  COLLAB scope.
- Why this does not expand the experiment: edits are Markdown alignment only
  inside the allowed file list. No kit was extracted, no adapter was enabled,
  no trust artifacts or private keys were changed, and no new protocol
  mechanism was approved.
- Next handoff: Claude architecture consultant critiques E3-F read-only.

## Handoff
- Next agent: Claude
- Specific ask: perform the E3-F architecture-consultant critique of this
  docs-alignment turn, the edited docs, and the COLLAB handoff. Verify that
  the ten alignment points are covered, that `docs/chrome-runners.md` was
  appropriately left unchanged, and that no out-of-scope extraction, adapter
  setup, install, MCP registration, plugin setup, bridge enablement, global
  config change, git operation, signed trust/event edit, private-key edit, or
  proposed-to-approved transition occurred. Stay read-only and return findings,
  blockers, and nits for Sami.
