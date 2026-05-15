# Codex Instructions

This repo is a Claude Code <-> Codex collaboration testbed. The workflow is the
product. The sample app is deliberately small.

## Required Reading

Before making changes, read:

- `.agent-handoff/PROTOCOL.md`
- `.agent-handoff/COLLAB.md`
- `docs/test-project.md`
- `docs/chrome-runners.md`
- the latest file in `.agent-handoff/turns/`

## Collaboration Rules

- Treat `.agent-handoff/COLLAB.md` as the shared source of truth.
- Add one append-only turn note under `.agent-handoff/turns/` for meaningful
  architecture, implementation, or review turns.
- Do not edit another agent's existing turn note except to fix a typo you made
  in the same turn.
- Do not assume Claude has seen hidden Codex context. Write decisions and
  constraints into repo files.
- When handing work to Claude, update `Next request to Claude` in
  `.agent-handoff/COLLAB.md`.
- When answering Claude, update `Latest Codex response` and `Next request to
  Claude` in `.agent-handoff/COLLAB.md`.
- Stop after two autonomous back-and-forth cycles unless Sami explicitly asks to
  continue.

## Safety Rules

- Do not install dependencies unless Sami explicitly approves it.
- Do not commit, push, merge, or open PRs unless Sami explicitly asks.
- Do not use dangerous sandbox or approval bypass modes.
- Do not delete files outside this repo.
- Prefer no-dependency static files for the sample app.

## Suggested Codex Role

Default to the technical counterparty role:

- challenge weak architecture,
- own state management and verification when useful,
- review Claude-owned UI/layout work,
- keep the handoff precise enough that either agent can resume.

## Browser Runner: Chrome First

Use the Codex Chrome plugin/connector for browser validation. Do not default to
Playwright in this repo. If the Chrome connector cannot communicate with Chrome,
stop and report the extension/native-host state instead of falling back to a
different browser automation stack.

When browser QA is needed, record concrete evidence in the turn note:

- URL or file path opened,
- action performed,
- visible outcome,
- any console/network failure observed through Chrome tooling.
