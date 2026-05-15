# 000 - Codex Bootstrap

## Agent

Codex

## Summary

Created the initial repo-side collaboration scaffold for testing a two-way
Claude Code <-> Codex workflow.

## Decisions

- Use a static no-dependency Decision Ledger app as the sample build.
- Keep collaboration state in `.agent-handoff/COLLAB.md`.
- Use append-only turn notes under `.agent-handoff/turns/`.
- Use Claude as the first visible host because the intended next step is a new
  Claude Code thread in this same repo.

## Next

Claude should start with `.agent-handoff/prompts/claude-start.md`, write the
first architecture turn, and attempt to call Codex directly if a Codex bridge is
available. If not, Claude should stop with a repo-visible request for Codex.
