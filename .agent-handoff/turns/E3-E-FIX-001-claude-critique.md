Previous experiment terminal turn: Experiment 3 / E3-E-FIX-001-codex-kit-housekeeping.md

# E3-E-FIX-001 Claude consultant critique

## Agent
Claude

## Phase
critique

## Schema
Reuses the Experiment 1 turn-note schema explicitly. Includes
Evidence Basis and Portability Findings sections per the active
PROTOCOL.md additions. Critique-only turn over a design/prose-only
fix turn. Does not approve the fix as protocol, install tools,
copy files outside this repo, extract a kit, or move any proposal
to approved.

## Files touched this turn
- `.agent-handoff/turns/E3-E-FIX-001-claude-critique.md` (created)
- `.agent-handoff/COLLAB.md` (edited)

## Evidence Basis
- USER SAID: Sami authorized E3-E-FIX-001 on 2026-05-15 as
  design/prose-only housekeeping with five specific nits and a
  strict no-edit-in-place constraint on E3-E. Sami also explicitly
  restarted-style guidance for the critique to read main at or
  after `10227c5`.
- FILE VERIFIED: re-read E3-E-FIX-001 in full at HEAD `10227c5`
  from `.agent-handoff/turns/E3-E-FIX-001-codex-kit-housekeeping.md`.
  Re-read PROTOCOL.md Stopgate Rule. Re-read COLLAB.md current
  Owner/Phase. No prior local critique draft existed.
- FILE VERIFIED: confirmed E3-E itself
  (`.agent-handoff/turns/E3-E-codex-kit-extraction-harness-design.md`)
  was NOT edited by E3-E-FIX-001 — only the new fix-turn note and
  the COLLAB.md handoff were touched, matching Sami's no-edit
  constraint.
- AGENT SUMMARY: E3-E-FIX-001 addresses each of the five
  consultant nits with concrete placeholder syntax, recommended
  template content, and explicit citation-date convention. The
  fix-turn shape is correctly used.
- INFERENCE: All five nits are resolved with the precision needed
  for future kit-extraction action. Remaining nits-of-the-fix
  (below) are forward-flags for the future kit-bootstrap or
  extraction turn, not acceptance-blockers.
- UNKNOWN: I did not independently re-fetch the Zenith URLs to
  verify their state on 2026-05-15. The "read 2026-05-15"
  convention is a procedural improvement; the underlying
  citations remain UNKNOWN at the implementation-detail level
  per E3-E's original labeling.

## Decisions (binding)

- E3-E-FIX-001 is accepted as a successful design/prose-only
  housekeeping turn. Zero blockers stand against this critique.
- All five authorized E3-E critique nits are resolved with the
  precision needed for the eventual first kit-extraction action.
- The no-edit-in-place constraint on E3-E was honored. The
  Zenith citation read-date is captured in this fix-turn note
  rather than retroactively edited into E3-E, which is the
  right discipline for an append-only history.
- Per the active Stopgate Rule, this critique does not authorize
  any kit-extraction action. Each kit-extraction action remains
  its own scoped sub-experiment requiring Sami's explicit
  per-action approval recorded in COLLAB.md before any file is
  created or modified outside this Claude-Codex repo.

## Per-nit assessment

**Nit 1 — `{{IDLE_AUTOMATION_BUDGET}}` N/A path: resolved.**
N/A by default for adopters with no automation enabled.
Becomes required only when polling/cron/webhook/heartbeat is
scoped. Concrete placeholder syntax provided. Important detail:
"the adopter replaces that N/A value with the specific approved
budget instead of inheriting E2's numbers silently." That's the
right anti-pattern to call out.

**Nit 2 — `{{TURN_CAP}}` per-experiment reframing: resolved.**
Per-experiment scope-bounded value, set by authorizing approval.
Updated placeholder description. Kit PROTOCOL.md template
guidance: "the authorizing approval names the cap." A future
adopter may still choose a common rhythm, but only when the
specific experiment authorization adopts it. Correct framing.

**Nit 3 — `{{BROWSER_RUNNER_CHOICE}}` N/A path: resolved.**
Adopter must choose either a named runner or an explicit N/A
with documented reason. Silent omission is not acceptable.
"Later agents need to know whether browser evidence is
required, unavailable, or irrelevant" — exact right reasoning.

**Nit 4 — Starter turn-note template: resolved.** Two
acceptable locations proposed
(`.agent-handoff/prompts/starter-turn-note.md` or
`.agent-handoff/turns/000-bootstrap-template.md.example`).
Template content specified: all nine standard E1 schema
headings plus optional Evidence Basis and Portability Findings.
Empty for adopter to fill. Drops the highest-friction part of
cold start.

**Nit 5 — Zenith citation read date: resolved.** Citation
pattern updated to require read dates on URL citations.
E3-E's two Zenith URLs captured with "read 2026-05-15"
annotation in this fix-turn note, NOT retroactively edited
into E3-E. Correct discipline: append-only history preserves
the original turn, this fix-turn note carries the procedural
update.

## Answers to Codex's two open questions

1. **Addresses only the five authorized nits without silent
   protocol/extraction action?** Yes. Verified by reading.
   Files touched is exactly the new fix-turn note plus
   COLLAB.md handoff. No PROTOCOL.md edit. No kit extraction.
   No protocol change applied. The fix turn explicitly states
   E3-E is unedited.

2. **Any wording that should be a blocker before future
   extraction or kit-bootstrap turn?** No. The three small
   nits-of-the-fix below are forward-flags for the future
   bootstrap turn, not acceptance-blockers for E3-E-FIX-001.

## Strengths worth naming explicitly

- **No-edit-in-place discipline honored.** Codex captured the
  Zenith read-date in the fix-turn note rather than going back
  and editing E3-E. That preserves append-only history while
  still recording the procedural improvement. Exactly the right
  call for an append-only protocol.
- **"N/A with documented reason" pattern across two
  placeholders.** Both `{{IDLE_AUTOMATION_BUDGET}}` and
  `{{BROWSER_RUNNER_CHOICE}}` now require explicit N/A rather
  than allowing silent omission. That's the difference between
  a kit that's "missing values for adopter to fill" and a kit
  that's "complete and N/A is a valid value." The latter is
  cold-readable.
- **The anti-pattern call-out on inheriting E2's numbers
  silently.** Cited explicitly: "the adopter replaces that N/A
  value with the specific approved budget instead of inheriting
  E2's numbers silently." Future bootstrap turns can cite this
  to refuse copy-paste budgets.
- **Tight scope discipline.** Zero blockers introduced. Codex
  resisted any temptation to address adjacent issues, propose
  PROTOCOL.md changes, or move toward extraction action. The
  fix turn does exactly the five things and nothing else.

## Open questions for Sami
- Of the three small nits-of-the-fix below, any you want
  addressed before the first kit-extraction action begins, or
  acceptable to defer to the future kit-bootstrap or extraction
  turn?
- Decision queue from prior critique still applies: accept
  E3-E-FIX-001, then choose between (a) authorize the first
  kit-extraction action sub-experiment (likely a portable folder
  inside this repo OR a discovery turn that reads
  colorado-songwriters-collective's actual state), (b) pivot to
  a queued item, or (c) defer further E3 work.

## Blockers (must-fix before continuing)
- None.

## Nits (suggested, not required)

1. **Two starter-turn-template locations proposed; future
   kit-bootstrap should pick one.** E3-E-FIX-001 names both
   `.agent-handoff/prompts/starter-turn-note.md` AND
   `.agent-handoff/turns/000-bootstrap-template.md.example` as
   acceptable. Adopters need one canonical convention before
   extraction; two paths create ambiguity. Recommend the
   future kit-bootstrap or extraction turn pick one (my
   preference: `.agent-handoff/prompts/starter-turn-note.md`
   since `.example` suffix in `turns/` could be confused with
   real turn notes, and `prompts/` is already the established
   pattern for paste-ready material).

2. **Per-experiment turn cap mechanism is now framed but not
   located.** The fix correctly says the cap is per-experiment
   and the authorizing approval names it, but doesn't specify
   where in the authorization wording the cap should appear.
   Future kit-bootstrap or PROTOCOL.md template work should
   specify a conventional location (e.g., "Cap: N turns" as a
   labeled line in the authorization block). Not blocking;
   small forward-flag.

3. **Read-date convention specified for URL citations.** What
   about non-URL prior-art (papers, screenshots, books, talks)?
   Probably implicit ("any prior-art citation includes a
   timestamped basis"), but the kit's citation pattern would
   be clearer if it stated the convention generically and then
   listed URL as the most common case. Not blocking; small
   forward-flag.

## Browser verification
- Tool used: N/A
- URL or file path opened: N/A
- Action: N/A
- Visible outcome: N/A
- Console/network issues: N/A

Reason: critique-only turn over a design/prose-only fix. No app
behavior, browser surface, runtime bridge, or automation path
changed.

## Portability Findings
- Repo-local assumptions: this critique and the fix it reviews
  both stay inside the Claude-Codex repo. Kit-pattern refinements
  are documented for the future extraction turn, not applied
  outside this repo.
- Machine/local-tool assumptions: none. No installs, no network
  setup, no executable runs.
- Browser/connector assumptions: none. The fix turn now makes
  browser-runner choice explicit (with an N/A path), which
  improves portability rather than reducing it.
- Any workaround used: none.

## Handoff
- Next agent: Sami
- Specific ask: decide whether to (a) accept E3-E-FIX-001 as
  filed and authorize the first kit-extraction action
  sub-experiment toward colorado-songwriters-collective (or a
  portable folder inside this Claude-Codex repo), (b) defer
  kit-extraction work, or (c) pivot to a queued item
  (Experiment 4 council skill pack, separate
  wrapper-codex-mcp trust turn, etc.). Per the active Stopgate
  Rule, no kit-extraction action, no file creation outside
  this Claude-Codex repo, no installs, no MCP registration,
  no plugin install, and no proposed-to-approved transition
  occurs without your explicit per-action approval.
