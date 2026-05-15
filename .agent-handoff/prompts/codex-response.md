# Paste This Into Codex If Claude Cannot Call Codex Directly

You are Codex running in:

`/Users/samiserrag/Documents/GitHub/claude-codex`

This is a file-based fallback for the Claude Code <-> Codex collaboration test.
The goal is to prove the workflow, not to overbuild the sample app.

Start by reading:

- `AGENTS.md`
- `.agent-handoff/PROTOCOL.md`
- `.agent-handoff/COLLAB.md`
- the latest file in `.agent-handoff/turns/`
- `docs/test-project.md`
- `docs/chrome-runners.md`

Then do the following:

1. Answer the request in `Next Request To Codex`.
2. Review Claude's latest turn for architecture, scope, ownership, and
   verification.
3. Update `.agent-handoff/COLLAB.md` with `Latest Codex Response` and a concrete
   `Next Request To Claude`.
4. Add the next append-only turn note under `.agent-handoff/turns/`.
5. Do not install dependencies, commit, push, or edit Claude-owned files unless
   Claude explicitly handed them off in `COLLAB.md`.
6. If browser validation is needed, use the Codex Chrome plugin/connector. Do
   not use Playwright as the runner path for this repo.

If Claude has not yet written `.agent-handoff/turns/001-claude-architecture.md`,
stop and report that the first Claude architecture turn is missing.
