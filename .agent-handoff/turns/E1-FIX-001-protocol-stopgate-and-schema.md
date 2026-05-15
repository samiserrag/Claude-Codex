# E1-FIX-001 - Protocol Stopgate rule and schema additions

## Agent
Claude

## Phase
fix

## Files touched this turn
- .agent-handoff/PROTOCOL.md (edited)
- .agent-handoff/turns/E1-FIX-001-protocol-stopgate-and-schema.md (created)

## Evidence Basis
- USER SAID: Sami selected "Fix turn + PROTOCOL together (Recommended)"
  via AskUserQuestion in the consultant Claude thread on 2026-05-15,
  scoped to "draft the fix-turn note, then commit both files in one
  push."
- FILE VERIFIED: PROTOCOL.md additions are verbatim from
  `.agent-handoff/consultants/002-synthesis.md` §5 (the Stopgate Rule
  and the four schema additions: Agent values, Evidence Basis,
  Portability Findings, Response History Policy, Unscheduled Fix-Turn
  Shape). The Claude consultant re-read PROTOCOL.md post-edit before
  staging.
- AGENT SUMMARY: Three consultants (Codex, GPT 5.5 Pro round 2, Claude
  consultant) endorsed the additions and recommended landing them as a
  tiny scope-bounded protocol fix turn before E2-001 begins, because
  E2 is explicitly about security, provenance, and coordinator
  authority and the Stopgate rule should be in force before that turn.
- INFERENCE: The phase value "fix" is not in the original Experiment 1
  schema's Phase enum
  (`architecture | critique | implementation | smoke | retrospective`)
  but is consistent with the Unscheduled Fix-Turn Shape introduced by
  this same turn. Treated as a forward-compatible extension.
- UNKNOWN: Whether the existing `npm test` scaffold check will be
  extended to validate the new schema sections; that is housekeeping,
  out of scope here.

## Decisions (binding)
- The strengthened Stopgate rule and the four schema additions from
  `002-synthesis.md` §5 are now in `PROTOCOL.md` verbatim.
- This is the first use of the Unscheduled Fix-Turn Shape itself.
- Scope of this turn is strictly the protocol additions. No other
  files are edited. No app behavior changes. No implementation.
- All four Experiment 1 turn notes (001-004) remain valid under the
  updated protocol; the new schema sections are explicitly optional
  or forward-applying and do not retroactively invalidate prior
  turns.

## Open questions for the other agent
- None active. Sami is next in line, for E2-001 paste authorization.

## Blockers (must-fix before continuing)
- None.

## Nits (suggested, not required)
- The Phase enum in the original schema does not include `fix`. A
  future small housekeeping turn could either add `fix` to the enum
  explicitly or define the Unscheduled Fix-Turn Shape as creating its
  own phase value implicitly.
- The schema header still says "Every Experiment 1 turn note must
  use this schema" while the new schema additions apply to "all
  future turn notes." Tightening that scope language is also
  housekeeping.

## Browser verification
- Tool used: N/A
- URL or file path opened: N/A
- Action: N/A
- Visible outcome: N/A
- Console/network issues: N/A

Reason: protocol-only edit. No app code changed; no browser
verification applies.

## Portability Findings
- Repo-local assumptions: none
- Machine/local-tool assumptions: none beyond the existing repo
- Browser/connector assumptions: none
- Any workaround used: none

## Unscheduled Fix-Turn Shape
- Trigger: three-way consultant consensus (Codex, GPT 5.5 Pro
  round 2, Claude consultant) on landing the strengthened Stopgate
  rule and schema additions before E2-001 begins.
- Sami approval basis: explicit selection of "Fix turn + PROTOCOL
  together (Recommended)" via AskUserQuestion in the consultant
  Claude thread on 2026-05-15.
- Scope limit: edits to `PROTOCOL.md` only (verbatim from
  `002-synthesis.md` §5) plus one new fix-turn note. No other files.
  No installs, bridges, global config changes, or implementation.
- Files touched: see "Files touched this turn" above.
- Verification performed: visual diff of `PROTOCOL.md` against
  `002-synthesis.md` §5; `npm test` passes per Sami's prior
  confirmation; Claude consultant re-read `PROTOCOL.md` post-edit to
  verify verbatim match.
- Why this does not expand the experiment: this turn adds protocol
  guarantees only. It does not change Experiment 1 results, does not
  start Experiment 2, and does not change any app behavior.
- Next handoff: Sami, for E2-001 paste authorization.

## Handoff
- Next agent: Sami
- Specific ask: when ready, paste the E2-001 prompt from
  `.agent-handoff/consultants/002-synthesis.md` §6 into a fresh Codex
  thread to begin Experiment 2. The Stopgate rule is now in force; do
  not enable bridges, install dependencies, or commit/push from the
  E2-001 thread without explicit per-action approval.
