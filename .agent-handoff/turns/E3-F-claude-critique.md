Previous experiment terminal turn: Experiment 3 / E3-F-codex-docs-alignment.md

# E3-F Claude consultant critique

## Agent
Claude

## Phase
critique

## Schema
Reuses the Experiment 1 turn-note schema explicitly. Includes
Evidence Basis and Portability Findings sections per the active
PROTOCOL.md additions. Critique-only turn over a docs-alignment
turn. Does not approve the alignment as protocol, install tools,
copy files outside this repo, extract a kit, or move any proposal
to approved.

## Files touched this turn
- `.agent-handoff/turns/E3-F-claude-critique.md` (created)
- `.agent-handoff/COLLAB.md` (edited)

## Evidence Basis
- USER SAID: Sami authorized E3-F on 2026-05-15 as a docs-alignment
  turn before any kit extraction, with ten required alignment
  points and an allowed-file list. Sami also specified six focus
  areas for the critique.
- FILE VERIFIED: re-read E3-F in full at HEAD `fbe8bf5` from
  `.agent-handoff/turns/E3-F-codex-docs-alignment.md`. Read the
  diff of all five edited docs (`README.md`, `AGENTS.md`,
  `CLAUDE.md`, `PROTOCOL.md`, `COLLAB.md`) at the same commit.
- FILE VERIFIED: ran `npm test` independently and observed the
  same pre-existing failure Codex disclosed:
  `COLLAB.md missing section: ## Hard Constraints / Approval
  Stopgates` and `## Decisions Made`. Exit code 1.
  `git show HEAD:.agent-handoff/COLLAB.md` confirms those
  headings were already absent before E3-F's COLLAB.md edits.
  Codex did NOT silently rename headings, did NOT silently change
  the scaffold script, and DID disclose the failure in Evidence
  Basis. This is the right discipline.
- FILE VERIFIED: confirmed `docs/chrome-runners.md` was NOT
  touched, as Codex stated.
- AGENT SUMMARY: E3-F adds an "Accepted E3 Operating Defaults"
  block to AGENTS/CLAUDE, an "Accepted E3 Alignment" section to
  README, a "Baseline And Optional Layers" section to PROTOCOL.md,
  and tightens turn-cap language across docs. Six files changed,
  455 insertions / 77 deletions, mostly additions clarifying the
  current accepted state.
- INFERENCE: All ten alignment points covered. All six Sami focus
  areas pass. The npm-test pre-existing failure is a real
  housekeeping issue but correctly outside E3-F's scope; flagged
  as a forward nit.
- UNKNOWN: I have not modeled cold-read behavior of a fresh agent
  reading the docs. The check is over text content vs. accepted
  state, not over agent comprehension.

## Decisions (binding)

- E3-F is accepted as a successful docs-alignment turn. Zero
  blockers stand against this critique.
- All six Sami focus areas pass (per-area assessment below).
- The `npm test` pre-existing failure is correctly outside E3-F's
  scope, correctly disclosed in Evidence Basis, and should be
  addressed in a separate small fix turn before any future
  kit-extraction action so adopters don't inherit a broken
  scaffold check.
- Per the active Stopgate Rule, this critique does not authorize
  any kit-extraction action. Each kit-extraction action remains
  its own scoped sub-experiment requiring Sami's explicit
  per-action approval recorded in COLLAB.md before any file is
  created or modified outside this Claude-Codex repo.

## Per-focus-area assessment

### 1. Docs aligned with accepted E3 state without expanding scope — pass

All edits are conservative language alignment. New sections
("Accepted E3 Alignment" / "Accepted E3 Operating Defaults" /
"Baseline And Optional Layers") add clarification without
introducing new mechanics. Existing sections were tightened, not
restructured. No turn notes were edited. No consultant response
files were edited. No kit files created. No schema changes.

### 2. PROTOCOL.md changed only in ways authorized — pass

PROTOCOL.md edits are conservative language alignment only:
- §Purpose: clarified local-first vs local-only.
- New §Baseline And Optional Layers: ten alignment points stated
  as protocol baseline.
- §Turn Loop §5: file-based-by-default phrasing.
- §Experiment 1: added "authorizing" qualifier to turn-cap
  history (correct past-tense framing).
- §Later Bridge Experiments → §Later Bridge Or Adapter
  Experiments: scope broadened to include adapters; explicit
  prior-art-only disclaimer for gstack/AgentBridge/tmux/LLM
  Council/Zenith/CCB/Claude Squad.
- §Stopgates: replaced "4 Experiment 1 turn notes" with
  "current experiment's authorized turn cap" — matches the
  per-experiment-cap framing from E3-E-FIX-001.
- §Success Criteria: added "or adapter" — matches scope
  broadening.

No new schema fields, event kinds, payload schemas, approval
mechanics, or signed-governance requirements. Codex correctly
PROPOSED (not applied) future schema additions in §Decisions:
"a future separately approved protocol/schema housekeeping turn
could add historical phase values such as `fix` and `rescope` to
the Phase enum." That's the right discipline.

### 3. README/AGENTS/CLAUDE avoided stale framing — pass

- README: renamed "Optional Bridge Setup" → "Bridge And Adapter
  Status" with explicit disclaimer "No live bridge, adapter,
  plugin, or MCP registration is enabled by this README. The
  examples below are historical setup surfaces for a separately
  approved future experiment, not commands to run during
  ordinary docs or file-based turns." Strong.
- AGENTS/CLAUDE: added parallel "Accepted E3 Operating
  Defaults" blocks (10 bullets each, identical content). Changed
  "Stop after the four Experiment 1 turn notes" → "Stop at the
  turn cap named by the current experiment authorization." Both
  files now consistent for cold-read agents.
- No remaining static-four-turn or local-only framing in the
  edited surfaces. One small clunky compound flagged as nit 3
  below.

### 4. File-based handoff preserved as minimal path — pass

"File-based handoff is the minimal binding reference path"
appears explicitly in README, AGENTS/CLAUDE, and PROTOCOL.md.
Tier 0 manual paste + Tier 1 inbox/outbox file exchange named
in PROTOCOL.md and README. The minimal path is unambiguous
across all four adopter-facing surfaces.

### 5. Signed governance / adapters / council / kit extraction kept optional — pass

All four explicitly marked optional or separately-approved
across all four edited surfaces:
- "Signed event governance is an optional add-on for adopters
  that need cryptographic verification."
- "Live bridges and adapters stay disabled until Sami
  separately approves the exact MCP registration, plugin setup,
  bridge enablement, or global config change."
- "Council, GPT, Claude, and Codex consultation is optional and
  file-based by default."
- "Kit extraction is a separate action after docs alignment."

Consistent wording across docs. Cold-read coherent.

### 6. npm test failure documented as pre-existing — pass

Codex's Evidence Basis line 54-57 explicitly disclosed: "npm
test failed because the existing scaffold check expects
COLLAB.md sections named `## Hard Constraints / Approval
Stopgates` and `## Decisions Made`; `git show HEAD:.agent-handoff/COLLAB.md`
confirms those headings were already absent before E3-F."

Independent verification by the consultant: ran `npm test` from
the repo root. Same failure, exit code 1, same two missing
headings. The headings are E1-era names; COLLAB.md outgrew them
during the E2/E3 evolution.

This is exactly the right discipline. Three things Codex
explicitly did NOT do:
- Did NOT silently rename headings to satisfy the scaffold
  check.
- Did NOT silently change the scaffold script to match current
  COLLAB.md.
- Did NOT skip the failure in the turn note.

All three would have been concerning. The pre-existing
disclosure is correct and the fix is a separate small turn,
which I flag as nit 1 below.

## Answers to Codex's three open questions

1. **PROTOCOL.md changes are conservative language alignment
   only?** Yes. Verified by reading the full diff at `fbe8bf5`.
   No new schema fields, event kinds, or approval mechanics.
   Codex correctly flagged future schema additions as proposals
   only.

2. **Any remaining README/AGENTS/CLAUDE wording that could be
   misread as local-only, static-four-turn, or bridge-ready?**
   Mostly clean. One small clunky compound flagged as nit 3.

3. **Leaving `docs/chrome-runners.md` unchanged is correct
   because this repo has a named Chrome runner?** Yes. The file
   correctly handles this repo's named runner. The kit's
   adopter-side N/A pattern lives in PROTOCOL.md and
   AGENTS/CLAUDE; `chrome-runners.md` is repo-specific
   operational guidance and doesn't need adopter-pattern text.

## Strengths worth naming explicitly

- **Honest disclosure of the npm test failure** instead of
  silently fixing or hiding it. This is exactly the discipline
  the protocol is designed to encourage. A turn that fails a
  test and either pretends it didn't or quietly "fixes" the
  test to make it pass would be a real problem; this turn did
  neither.
- **Parallel AGENTS.md and CLAUDE.md edits.** The two files are
  mirrors and now contain identical "Accepted E3 Operating
  Defaults" blocks. Cold-read Codex and cold-read Claude get
  the same defaults; no asymmetry confusion.
- **README "Bridge And Adapter Status" disclaimer.** The
  explicit "examples below are historical setup surfaces for a
  separately approved future experiment, not commands to run
  during ordinary docs or file-based turns" framing is the
  right safety wording for adopter-facing docs. Without it, an
  adopter could accidentally copy-paste the example bridge
  command and trigger setup the protocol forbids.
- **PROTOCOL.md scope broadening to "Bridge Or Adapter."** The
  rename acknowledges that "adapter" covers more than MCP
  bridges (e.g., tmux multi-CLI teams) and brings the protocol
  language in line with E3-C/E3-D's actual analysis.
- **Past-tense framing of E1's four-turn cap.** "Experiment 1's
  authorizing turn cap was 4 experiment turn notes" reads
  correctly as history, not active rule. Pairs cleanly with the
  per-experiment-cap framing in §Stopgates.

## Open questions for Sami
- Of the three small nits-of-the-alignment below, which (if any)
  do you want addressed before the first kit-extraction action?
  Nit 1 (the pre-existing scaffold-check failure) is the most
  consequential because it would travel into any extraction.
- Decision queue from prior critique still applies: accept E3-F,
  then choose between (a) authorize the first kit-extraction
  action sub-experiment, (b) authorize a small E3-F-FIX-001
  scaffold-check fix turn first, (c) pivot to a queued item, or
  (d) defer.

## Blockers (must-fix before continuing)
- None. E3-F is acceptable as filed.

## Nits (suggested, not required for E3-F acceptance)

1. **Pre-existing scaffold-check failure should be fixed before
   any kit extraction.** `scripts/check-collab.mjs` expects
   E1-era heading names (`## Hard Constraints / Approval
   Stopgates` and `## Decisions Made`) that COLLAB.md outgrew.
   Codex correctly disclosed and correctly didn't fix in E3-F's
   scope. Recommend a small E3-F-FIX-001 (or similar) turn that
   either (a) updates the scaffold check to current section
   names, (b) makes the check more flexible (e.g., check for
   any heading in a category list), or (c) retires the check
   and replaces with something useful for E3 state. Important
   because any kit extraction would carry the broken scaffold
   into the adopter repo.

2. **README "First Run" §4 has a clunky compound.** Current
   wording: "Stop after Experiment 1's authorized cap, turn
   note 004, and write a retrospective before testing bridges."
   The cap IS turn note 004 — they're the same thing. Recommend
   simplifying to "Stop at Experiment 1's authorized cap (turn
   note 004) and write a retrospective before testing bridges."
   Cosmetic, not blocking.

3. **AGENTS.md / CLAUDE.md "Browser Runner: Chrome First"
   section** wasn't touched. It still reads as repo-binding
   ("Use the Codex Chrome plugin/connector for browser
   validation"). Per the kit's named-runner-or-explicit-N/A
   pattern, that's correct for THIS repo (Chrome IS this repo's
   named runner). But a future adopter cold-reading the kit
   template version of these files would see a Chrome
   prescription that isn't repo-agnostic. The kit-extraction
   turn will need to genericize this section per the
   `{{BROWSER_RUNNER_CHOICE}}` pattern from E3-E-FIX-001. Not
   blocking E3-F; just a forward-flag for the extraction turn.

## Browser verification
- Tool used: N/A
- URL or file path opened: N/A
- Action: N/A
- Visible outcome: N/A
- Console/network issues: N/A

Reason: critique-only turn over a docs-alignment turn. No app
behavior, browser surface, runtime bridge, or automation path
changed.

## Portability Findings
- Repo-local assumptions: this critique stays inside the
  Claude-Codex repo. The docs alignment it reviews makes the
  repo's adopter-facing surfaces more accurate without copying
  anything outward.
- Machine/local-tool assumptions: ran `npm test` independently
  to verify the disclosed pre-existing failure. Test runner is
  Node + the `scripts/check-collab.mjs` scaffold check; both
  were already in repo, no install required.
- Browser/connector assumptions: none.
- Any workaround used: none.

## Handoff
- Next agent: Sami
- Specific ask: decide whether to (a) accept E3-F as filed and
  authorize the first kit-extraction action sub-experiment, (b)
  authorize a small E3-F-FIX-001 turn to fix the pre-existing
  scaffold-check failure before any extraction (recommended,
  since the broken check would travel into any adopter repo),
  (c) pivot to a queued item, or (d) defer further E3 work.
  Per the active Stopgate Rule, no kit-extraction action, no
  file creation outside this Claude-Codex repo, no installs, no
  MCP registration, no plugin install, and no
  proposed-to-approved transition occurs without your explicit
  per-action approval.
