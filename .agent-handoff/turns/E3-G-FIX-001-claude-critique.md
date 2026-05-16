Previous experiment terminal turn: Experiment 3 / E3-G-FIX-001-codex-kit-template-housekeeping.md

# E3-G-FIX-001 Claude consultant critique

## Agent
Claude

## Phase
critique

## Schema
Reuses the Experiment 1 turn-note schema explicitly. Includes
Evidence Basis and Portability Findings sections per the active
PROTOCOL.md additions. Critique-only turn over a tiny
kit-template housekeeping fix. Does not approve the fix as
protocol, install tools, copy files outside this repo, extract a
kit, or move any proposal to approved.

## Files touched this turn
- `.agent-handoff/turns/E3-G-FIX-001-claude-critique.md` (created)
- `.agent-handoff/COLLAB.md` (edited)

## Evidence Basis
- USER SAID: Sami authorized E3-G-FIX-001 on 2026-05-16 as a tiny
  kit-template housekeeping turn addressing the five E3-G
  critique nits.
- FILE VERIFIED: re-read E3-G-FIX-001 in full at HEAD `2a09c02`.
  Read the kit-file diffs at the same commit
  (`kit/v1/.agent-handoff/COLLAB.md.template`,
  `.agent-handoff/PROTOCOL.md.template`,
  `.agent-handoff/prompts/starter-turn-note.md`,
  `AGENTS.md.template`, `CLAUDE.md.template`, `README.md`).
- FILE VERIFIED: independently ran `npm test`. Exit 0,
  "Collaboration scaffold check passed."
- FILE VERIFIED: independently ran leak/portability greps over
  `kit/v1/`:
  - `colorado|songwriters|denver`: zero matches (exit 1).
  - `decision.ledger`: zero matches.
  - `sami-root|wrapper-codex-mcp|agent-event-envelope`: zero
    matches.
  - `claude.?codex`: 4 matches, all "Claude/Codex config"
    product references (NOT repo-name leaks).
  - `install`: 9 matches, ALL negative/anti-installer framing.
- FILE VERIFIED: working tree clean before this critique;
  `git diff --check` exits 0; `git status` shows clean.
- AGENT SUMMARY: Codex resolved all five nits cleanly. Picked
  literal enum addition for nit 2 and "recommended convention"
  marking for nit 4 — both well-defended.
- INFERENCE: Independent verification matches every claim in
  Codex's turn note. No new portability leak, no scope
  expansion, no schema drift.
- UNKNOWN: I did not run the kit through a cold-adoption test
  (copying it into a fresh repo and trying to bootstrap). That
  remains future discovery/extraction work.

## Decisions (binding)

- E3-G-FIX-001 is accepted as a successful tiny kit-template
  housekeeping fix. Zero blockers stand against this critique.
- All eight Sami focus areas pass (per-area assessment below).
- Per the active Stopgate Rule, this critique does not authorize
  any kit-extraction action. The next concrete step (E3-H
  read-only discovery against colorado-songwriters-collective,
  per Sami's stated sequencing) remains its own sub-experiment
  requiring explicit per-action approval.

## Per-focus-area assessment

1. **Addressed only the five E3-G critique nits** — PASS. Diff
   touches exactly the six kit files in the allowed list plus
   COLLAB.md and the new fix-turn note. No other files edited.
   No scope expansion.

2. **Response History Policy disclaimer clear enough** — PASS.
   `COLLAB.md.template` adds: "Summary only — the durable record
   lives in append-only turn notes per the Response History
   Policy in PROTOCOL.md." Placed inline next to the
   latest-response fields. `AGENTS.md.template` and
   `CLAUDE.md.template` also qualify the fields as "summary-only"
   in the collaboration rules. Two surfaces consistent.

3. **`fix` and `rescope` reconciled without schema drift** —
   PASS. Phase enum literal addition: `architecture | critique |
   implementation | smoke | retrospective | fix | rescope`.
   Updated in BOTH places that list the enum
   (`PROTOCOL.md.template` §Turn Note Schema AND
   `starter-turn-note.md` placeholder syntax). Codex picked (a)
   literal addition over (b) prose extension, defended:
   "literal addition is the clearest option because this repo
   has already used `fix` and `rescope` as real phase values;
   cold adopters should not have to infer sanctioned
   extensions from prose." Right call.

4. **Starter-turn-note placeholder instructions clear** — PASS.
   Top-of-file: "Replace each `{{placeholder}}` with concrete
   content before filing. Empty fields should be `N/A` with a
   brief reason, not left as `{{ }}`." Two-sentence, clear,
   actionable.

5. **Experiment Authorization Convention marked as kit
   standard** — PASS. PROTOCOL.md.template §Experiment
   Authorization Convention now starts with: "Recommended
   convention for kit adopters. This is the kit's
   forward-looking standard, not a requirement to retroactively
   rewrite older source-repo prose authorizations." Codex
   picked (b) marking over (a) aligning, defended: "this avoids
   silently changing human authorization practice in this repo
   while giving adopters a cleaner convention to use going
   forward." Conservative and correct.

6. **README Quick Start step 1 says "preserving the directory
   structure"** — PASS. Exact wording: "Copy the files from
   this folder into the root of the adopting repository,
   preserving the directory structure (especially
   `.agent-handoff/` and its subdirectories)." Added the
   useful specificity about which subdirectories matter most.

7. **Verification passed** — PASS. Independent runs by
   consultant: `git diff --check` exit 0; `npm test` exit 0,
   "Collaboration scaffold check passed"; all leak greps return
   expected zero-match or product-only-match results.

8. **colorado-songwriters-collective, global config, bridges,
   MCP, plugins, signed trust/events, private keys, and
   installs untouched** — PASS. Diff confirms only kit/v1/
   files + COLLAB.md handoff + new fix-turn note edited.
   `git log --oneline -- 'kit/v1/**'` shows only E3-G and
   E3-G-FIX-001 commits touching the kit. No scripts/,
   .gitignore, PROTOCOL.md, COLLAB.md schema, or repo-level
   AGENTS/CLAUDE files touched.

## Answers to Codex's three open questions

1. **Five nits addressed without expanding kit?** Yes. Diff
   stat is 295 insertions / 68 deletions across exactly the 8
   authorized files (6 kit + COLLAB + new fix turn note). No
   other kit files touched.

2. **Nit 2 and nit 4 choices defensible and consistent with
   Stopgate Rule?** Yes. Nit 2 (literal enum addition) matches
   actual repo practice and improves cold-readability. Nit 4
   (marking as kit standard, not retroactive requirement)
   correctly preserves this repo's existing authorization
   habits while giving adopters a cleaner convention. Both
   choices avoid silent proposed-to-approved transitions —
   they document the convention without forcing it onto past
   history.

3. **Any new portability leak, default install/config, or
   mutable-history ambiguity?** No. Independent grep
   verification matches Codex's self-check on every criterion.
   The Response History Policy disclaimer actually IMPROVES
   the mutable-history clarity by labeling the fields
   "summary-only" at the point of use.

## Strengths worth naming explicitly

- **Two-place Phase enum consistency.** Codex updated both
  `PROTOCOL.md.template §Turn Note Schema` AND
  `starter-turn-note.md` placeholder syntax. Either would have
  been a partial fix; both is the right move.
- **Disclaimer at point of use.** The "summary-only" qualifier
  is inline next to the latest-response fields in
  COLLAB.md.template, AND the rules in AGENTS/CLAUDE that
  instruct agents to update those fields now describe them as
  "summary-only" too. Adopters can't miss the disclaimer.
- **"Forward-looking standard, not retroactive requirement"
  framing in nit 4.** Recognizes that this repo's historical
  authorizations used prose, and the kit convention is a
  cleaner shape for new adoptions without forcing rewrites of
  history. Good discipline.
- **Tight 295/68 diff stat across exactly the authorized
  files.** No scope creep. Subagents intentionally not used
  given the small scope.

## Open questions for Sami
- Of the two tiny nits-of-the-fix below (both cosmetic), any
  you want addressed before E3-H discovery, or acceptable to
  defer indefinitely?
- Ready to proceed to E3-H read-only discovery against
  colorado-songwriters-collective per your prior stated
  sequencing?

## Blockers (must-fix before continuing)
- None.

## Nits (suggested, not required, both cosmetic)

1. **Phase enum now lives in two places** (PROTOCOL.md.template
   and starter-turn-note.md). Future changes must update both.
   Acceptable for prose templates of this size; flag only if
   you want strict single-source-of-truth discipline as a
   future kit hardening. Not blocking.

2. **The COLLAB.md.template disclaimer line is a bullet
   sibling** of the latest-response fields rather than a
   sub-bullet underneath them. Visually it reads as another
   Current Phase field. Cosmetic; could be tightened in a
   future template-polish pass.

## Browser verification
- Tool used: N/A
- URL or file path opened: N/A
- Action: N/A
- Visible outcome: N/A
- Console/network issues: N/A

Reason: critique-only turn over a docs/template housekeeping
fix. No app behavior, browser surface, runtime bridge, or
automation path changed.

## Portability Findings
- Repo-local assumptions: this critique and the fix it reviews
  both stay inside the Claude-Codex repo. Kit templates remain
  portable to any repo with a text editor and Git.
- Machine/local-tool assumptions: independently ran `npm test`
  (Node) and `grep -rinE` (standard POSIX). Both pass.
- Browser/connector assumptions: none.
- Any workaround used: none. Subagents not used; the kit is
  small enough for direct read-and-grep verification.

## Handoff
- Next agent: Sami
- Specific ask: decide whether to (a) accept E3-G-FIX-001 as
  filed and authorize E3-H read-only discovery against
  colorado-songwriters-collective per your prior stated
  sequencing (consultant recommendation per prior critique:
  this is the natural next step), (b) pivot to a queued item,
  or (c) defer further E3 work. Per the active Stopgate Rule,
  no kit-extraction action, no file creation outside this
  Claude-Codex repo, no installs, no MCP registration, no
  plugin install, and no proposed-to-approved transition
  occurs without your explicit per-action approval.
