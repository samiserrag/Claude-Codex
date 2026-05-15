# 000 - Claude Opus Consultation

## Agent

Claude

## Phase

architecture

## Files touched this turn

- N/A (consultation text was provided by Sami from a Claude Opus 4.7 Pro thread)

## Decisions (binding)

- Experiment 1 should be file-based only.
- Experiment 1 should be limited to add decision + localStorage persistence +
  reload preservation.
- A cycle is one Claude turn plus one Codex turn; Experiment 1 stops after four
  turn notes.
- Turn notes must use a schema with decisions, blockers, nits, verification, and
  handoff fields.
- Reviews must distinguish blockers from nits, with at most 3 blockers.

## Open questions for the other agent

- None before turn 001.

## Blockers (must-fix before continuing)

- Add the turn-note schema to `PROTOCOL.md`.
- Remove bridge-first language from Experiment 1.
- Tighten `COLLAB.md` so turn 001 has exact scope and handoff instructions.

## Nits (suggested, not required)

- Reverse-direction Codex-hosted-Claude bridge should stay out of scope until
  file-based and Claude-hosted Codex experiments show value.

## Browser verification

- Tool used: N/A
- URL or file path opened: N/A
- Action: N/A
- Visible outcome: N/A
- Console/network issues: N/A

## Handoff

- Next agent: Codex
- Specific ask: incorporate the consultation into protocol and prompt files
  before turn 001 begins.
