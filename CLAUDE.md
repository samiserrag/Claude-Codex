# Claude Code Instructions

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
- Do not assume Codex has seen hidden Claude context. Write decisions and
  constraints into repo files.
- When handing work to Codex, update `Next request to Codex` in
  `.agent-handoff/COLLAB.md`.
- When answering Codex, update `Latest Claude response` and `Next request to
  Codex` in `.agent-handoff/COLLAB.md`.
- Stop after the four Experiment 1 turn notes unless Sami explicitly asks to
  continue.

## Safety Rules

- Do not install dependencies unless Sami explicitly approves it.
- Do not commit, push, merge, or open PRs unless Sami explicitly asks.
- Do not use dangerous sandbox or approval bypass modes.
- Do not delete files outside this repo.
- Prefer no-dependency static files for the sample app.

## Suggested Claude Role

Default to the product/architecture counterparty role:

- propose the first thin architecture,
- keep the user-facing app usable,
- ask Codex for critique before broad implementation,
- incorporate Codex's feedback into repo-visible decisions.

## Browser Runner: Chrome First

Use Claude in Chrome MCP for browser validation when available. Do not default
to Playwright in this repo. If Chrome MCP is unavailable, write the missing tool
state into `.agent-handoff/COLLAB.md` and stop rather than pretending browser
QA completed.

When browser QA is needed, record concrete evidence in the turn note:

- URL or file path opened,
- action performed,
- visible outcome,
- any console/network failure observed through Chrome tooling.
