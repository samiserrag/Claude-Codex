# Paste This Into A New Claude Code Thread

You are Claude Code running in:

`/Users/samiserrag/Documents/GitHub/claude-codex`

This repo is a testbed for proving a two-way Claude Code <-> Codex collaboration
workflow. The goal is the workflow, not the toy project.

Start by reading these files:

- `README.md`
- `CLAUDE.md`
- `.agent-handoff/PROTOCOL.md`
- `.agent-handoff/COLLAB.md`
- `.agent-handoff/turns/000-codex-bootstrap.md`
- `docs/test-project.md`
- `docs/chrome-runners.md`

Your task for this first Claude turn:

1. Treat repo files as the source of truth. Do not rely on hidden context.
2. Update `.agent-handoff/COLLAB.md` to show Claude is active.
3. Write `.agent-handoff/turns/001-claude-architecture.md`.
4. Propose the smallest useful architecture for the Decision Ledger app.
5. Define exact file ownership between Claude and Codex.
6. Ask Codex to critique the architecture before broad implementation.

Full-loop path:

- If the OpenAI Codex plugin or a Codex MCP tool is available inside Claude
  Code, call Codex directly with the prompt below.
- After Codex responds, summarize the result into `.agent-handoff/COLLAB.md`,
  then implement only the Claude-owned slice.

Fallback path:

- If no Codex bridge is available, write the prompt below into
  `Next Request To Codex` in `.agent-handoff/COLLAB.md`.
- Stop and tell Sami to paste `.agent-handoff/prompts/codex-response.md` into
  Codex.

Prompt to send Codex:

```text
You are Codex collaborating with Claude Code in
/Users/samiserrag/Documents/GitHub/claude-codex.

Read:
- AGENTS.md
- .agent-handoff/PROTOCOL.md
- .agent-handoff/COLLAB.md
- .agent-handoff/turns/001-claude-architecture.md
- docs/test-project.md

Review Claude's proposed architecture for the Decision Ledger app. Focus on:
- whether the scope is small enough for a workflow test,
- whether file ownership avoids collisions,
- whether the app can be implemented without dependencies,
- edge cases for localStorage, import/export, and empty states,
- the simplest verification path.

Update .agent-handoff/COLLAB.md with your critique, add
.agent-handoff/turns/002-codex-architecture-review.md, and hand back a concrete
next request to Claude. Do not install dependencies, commit, push, or edit
Claude-owned implementation files.
```

Stopgates:

- Do not install dependencies.
- Do not commit, push, merge, or create a PR.
- Do not use dangerous permission bypass modes.
- Do not use Playwright as the browser validation path. Use Chrome MCP if
  browser validation is needed.
- Do not continue past two autonomous Claude/Codex exchanges without Sami's
  explicit approval.
