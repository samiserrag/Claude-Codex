Previous experiment terminal turn: Experiment 3 / E3-F-claude-critique.md

# E3-F-FIX-001 - Codex scaffold-check fix

## Agent
Codex

## Phase
fix

## Schema
Reuses the Experiment 1 turn-note schema explicitly. Includes Evidence Basis,
Portability Findings, and the Unscheduled Fix-Turn Shape required by
`PROTOCOL.md`. This is the tiny scaffold-check/docs consistency fix Sami
authorized after accepting E3-F. It does not restructure `COLLAB.md`, edit
E3-F in place, extract a kit, set up adapters, install tools, register MCP,
enable bridges, edit global config, create a branch, commit, push, open a PR,
edit signed trust/event files, edit private keys, or move any proposal to
approved.

## Files touched this turn
- `scripts/check-collab.mjs` (edited)
- `.agent-handoff/COLLAB.md` (edited; handoff fields only)
- `.agent-handoff/turns/E3-F-FIX-001-codex-scaffold-check.md` (created)

## Evidence Basis
- USER SAID: Sami explicitly accepted E3-F as a successful docs-alignment turn
  and authorized E3-F-FIX-001 on 2026-05-15 as a tiny scaffold-check/docs
  consistency fix.
- USER SAID: Scope is limited to the stale heading expectations in the
  scaffold check, `COLLAB.md` handoff fields only, and this new fix-turn note.
  E3-F must not be changed in place, and `COLLAB.md` must not be restructured
  to satisfy an old test.
- FILE VERIFIED: `.agent-handoff/PROTOCOL.md` contains the active Stopgate
  Rule, Experiment 1 turn-note schema, Evidence Basis, Portability Findings,
  and Unscheduled Fix-Turn Shape.
- FILE VERIFIED: `.agent-handoff/COLLAB.md` records Sami's verbatim
  E3-F-FIX-001 authorization and the current state that only Sami can move
  proposed-to-approved.
- FILE VERIFIED: `package.json` defines `npm test` as
  `node scripts/check-collab.mjs`.
- FILE VERIFIED: `scripts/check-collab.mjs` checked required files, required
  directories, presence of at least one turn note, and exact `COLLAB.md`
  section labels. The stale labels were `## Hard Constraints / Approval
  Stopgates` and `## Decisions Made`.
- FILE VERIFIED: current `COLLAB.md` real headings include `## Current Phase`,
  `## Questions Requiring Sami Approval`, `## Next Request To Claude`, and
  `## Next Request To Codex`; the old E1 headings do not exist as current
  headings.
- FILE VERIFIED: `.agent-handoff/turns/E3-F-codex-docs-alignment.md` disclosed
  the pre-existing `npm test` failure and left it unfixed because it was
  outside E3-F scope.
- FILE VERIFIED: `.agent-handoff/turns/E3-F-claude-critique.md` independently
  reproduced the same pre-existing failure and framed it as nit 1 to fix
  before kit extraction.
- FILE VERIFIED: `AGENTS.md`, `docs/test-project.md`, and
  `docs/chrome-runners.md` were read before editing for safety, sample app,
  and browser-runner context.
- FILE VERIFIED: `npm test` passes after the scaffold-check edit.
- FILE VERIFIED: `git diff --check` passes after all edits.
- INFERENCE: Browser QA is not applicable because this turn changes only a
  Node scaffold check and Markdown coordination files, with no app behavior or
  browser surface changed.
- UNKNOWN: No future adopter repo values are known yet for actual browser
  runner, turn cap, automation budget, ownership, or kit extraction layout.

## Decisions (binding)
- Fix shape A was chosen: update the scaffold check to the current `COLLAB.md`
  shape.
- The scaffold check now requires the current load-bearing `COLLAB.md`
  headings `## Current Phase` and `## Questions Requiring Sami Approval`
  instead of the old E1 headings `## Hard Constraints / Approval Stopgates`
  and `## Decisions Made`.
- The scaffold check now validates actual level-2 headings using
  `^## .+$` matches instead of raw substring presence. This prevents quoted
  authorization text from accidentally satisfying a structural heading check.
- The other scaffold checks are preserved: required files, required
  directories, and at least one turn note under `.agent-handoff/turns/`.
- No `COLLAB.md` restructuring was performed to satisfy the test.
- Proposed only, not applied: a future separately approved scaffold/schema
  cleanup could split this check into repo-scaffold invariants vs active
  experiment-state invariants if the kit needs a more portable validation
  surface.

## Diagnosis

`npm test` runs `node scripts/check-collab.mjs`. Before this fix, the script
performed four kinds of checks:

- required repository files exist;
- `COLLAB.md` contains every string in `requiredSections`;
- `.agent-handoff/turns/` contains at least one Markdown turn note;
- required directories exist.

The stale part was `requiredSections`. It still expected these E1-era
`COLLAB.md` section names:

```text
## Hard Constraints / Approval Stopgates
## Decisions Made
```

Current E3 `COLLAB.md` has equivalent governance and state, but no longer uses
those exact headings as current structure. Stopgate governance now lives in
`PROTOCOL.md` and the `COLLAB.md` current phase/authorization record; decisions
live primarily in append-only turn-note Decisions sections and the running
`Current Phase` state. The current real `COLLAB.md` headings include:

```text
## Current Phase
## Questions Requiring Sami Approval
## Next Request To Claude
## Next Request To Codex
```

The mismatch happened because `COLLAB.md` evolved during E2/E3 from a simple
E1 collaboration scratchpad into a richer running state and governance ledger,
while the scaffold check stayed pinned to the original E1 heading names.

One extra current-state nuance: before this edit, `npm test` passed in this
working tree only because Sami's E3-F-FIX-001 authorization quote in
`COLLAB.md` includes the stale strings as quoted text. That pass was
accidental. The script still had the wrong expectations and used raw substring
matching instead of validating actual headings.

## Chosen fix shape

Chosen shape: A, update the scaffold check to current `COLLAB.md` shape.

This is safer and cleaner for a kit adopter than shape B. Allowing both the old
E1 headings and current E3 equivalents would preserve a backwards-compatible
surface, but it would also encode two eras of structure into a tiny scaffold
check and make it less clear which headings a new adopter should actually keep.
The current headings are the load-bearing ones for handoff state: `Current
Phase` carries running state, and `Questions Requiring Sami Approval` carries
the approval queue. The old headings are historical now.

The heading-aware check is intentionally small. It does not parse the whole
document or add a new schema engine. It simply changes "does this string appear
anywhere" to "does this real level-2 heading exist", which matches what the
test says it is checking.

## Verification

Historical pre-fix failure recorded by E3-F and independently reproduced in
E3-F-claude-critique:

```text
> claude-codex-collab-test@0.1.0 test
> node scripts/check-collab.mjs

Collaboration scaffold check failed:
- COLLAB.md missing section: ## Hard Constraints / Approval Stopgates
- COLLAB.md missing section: ## Decisions Made
```

Current pre-edit run in this E3-F-FIX-001 working tree:

```text
> claude-codex-collab-test@0.1.0 test
> node scripts/check-collab.mjs

Collaboration scaffold check passed.
```

That current pre-edit pass was not treated as a real fix because it was caused
by raw substring matching against quoted authorization text, not by valid
current headings.

Post-fix `npm test`:

```text
> claude-codex-collab-test@0.1.0 test
> node scripts/check-collab.mjs

Collaboration scaffold check passed.
```

Post-fix `git diff --check`:

```text
<no output; exit 0>
```

## Open questions for the other agent
- Does Claude agree that shape A is cleaner than accepting both E1 and E3
  heading families for this tiny scaffold check?
- Does Claude agree that heading-aware validation is within the authorized
  scaffold-check fix rather than an unapproved schema expansion?

## Blockers (must-fix before continuing)
- Claude architecture-consultant critique of E3-F-FIX-001 is required before
  any further E3 work or any kit-extraction action.
- Sami's explicit approval remains required before any extraction into another
  repo, adapter setup, install, MCP registration, plugin setup, bridge
  enablement, global config change, git operation, signed trust/event edit,
  private-key edit, or proposed-to-approved transition.

## Nits (suggested, not required)
- None.

## Browser verification
- Tool used: N/A
- URL or file path opened: N/A
- Action: N/A
- Visible outcome: N/A
- Console/network issues: N/A

Reason: scaffold-check/docs consistency turn only. No app behavior, browser
surface, runtime bridge, MCP registration, plugin setup, automation path, or
Chrome runner changed.

## Portability Findings
- Repo-local assumptions: the check still validates this repo's current
  `.agent-handoff/COLLAB.md` structure. It is not yet a generic portable kit
  validator.
- Machine/local-tool assumptions: `npm test` uses the local Node runtime
  already available to run `scripts/check-collab.mjs`; no dependency install
  was needed or performed.
- Browser/connector assumptions: none for this turn. Browser QA is `N/A`
  because no browser surface changed.
- Any workaround used: none. The accidental current pre-edit pass was diagnosed
  but not used as a substitute for fixing the stale scaffold expectations.

## Unscheduled Fix-Turn Shape
- Trigger: E3-F's docs-alignment turn and Claude's E3-F critique both
  identified the pre-existing scaffold-check mismatch where `npm test` expected
  E1-era `COLLAB.md` headings that no longer reflect the current accepted E3
  shape.
- Sami approval basis: Sami explicitly accepted E3-F and authorized
  E3-F-FIX-001 on 2026-05-15 as a tiny scaffold-check/docs consistency fix,
  recorded in `COLLAB.md` and repeated in the current prompt, with allowed
  files limited to the scaffold check, `COLLAB.md` handoff fields, and this new
  turn note.
- Scope limit: update only the stale heading expectations in the scaffold
  check; do not restructure `COLLAB.md`; do not edit E3-F in place; do not
  extract a kit; do not install, set up, register, enable, commit, push, branch,
  or approve any proposal.
- Files touched: see "Files touched this turn" above.
- Verification performed: required files were read; `npm test` was run before
  and after the scaffold-check edit; `git diff --check` was run after all
  edits; browser verification was marked `N/A` with reason.
- Why this does not expand the experiment: the edit only realigns the existing
  scaffold check with accepted current docs. It adds no new adapter,
  governance, kit-extraction, bridge, trust, event, automation, or browser
  behavior.
- Next handoff: Claude consultant critiques E3-F-FIX-001 read-only. Further E3
  work and any kit extraction wait for Claude's critique and Sami's next
  explicit approval.

## Handoff
- Next agent: Claude
- Specific ask: perform the E3-F-FIX-001 architecture-consultant critique of
  this scaffold-check fix and the COLLAB handoff. Confirm whether the
  diagnosis is accurate, shape A is the right fix, the script change is within
  scope, `COLLAB.md` was not restructured to satisfy the test, verification is
  sufficient, and no out-of-scope extraction, setup, install, MCP registration,
  plugin setup, bridge enablement, global config change, git operation, signed
  trust/event edit, private-key edit, or proposed-to-approved transition
  occurred. Stay read-only and return findings, blockers, and nits for Sami.
