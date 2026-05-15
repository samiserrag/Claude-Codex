# Paste This Into Codex If Claude Cannot Call Codex Directly

You are Codex running in:

`/Users/samiserrag/Documents/GitHub/claude-codex`

This is Experiment 1 of the Claude Code <-> Codex collaboration test. It is
file-based only. Do not call Claude through any bridge. The goal is to prove the
workflow, not to overbuild the sample app.

Start by reading:

- `AGENTS.md`
- `.agent-handoff/PROTOCOL.md`
- `.agent-handoff/COLLAB.md`
- the latest file in `.agent-handoff/turns/`
- `docs/test-project.md`
- `docs/chrome-runners.md`

Then do the following:

1. Answer the request in `Next Request To Codex`.
2. If this is turn 002, review Claude's architecture only. Do not edit `app/`
   files.
3. Use the required schema from `PROTOCOL.md`.
4. Separate findings into Blockers and Nits. Use at most 3 blockers.
5. Update `.agent-handoff/COLLAB.md` with `Latest Codex Response` and a concrete
   `Next Request To Claude`.
6. Add the next append-only turn note under `.agent-handoff/turns/`.
7. Do not install dependencies, commit, push, or edit Claude-owned files unless
   Claude explicitly handed them off in `COLLAB.md`.
8. If browser validation is needed, use the Codex Chrome plugin/connector. Do
   not use Playwright as the runner path for this repo.

If Claude has not yet written `.agent-handoff/turns/001-claude-architecture.md`,
stop and report that the first Claude architecture turn is missing.
