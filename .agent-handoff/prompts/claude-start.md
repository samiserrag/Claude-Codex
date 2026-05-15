# Paste This Into A New Claude Code Thread

You are Claude Code running in:

`/Users/samiserrag/Documents/GitHub/claude-codex`

This repo is a testbed for proving a two-way Claude Code <-> Codex collaboration
workflow. The goal is the workflow, not the toy project. This is Experiment 1:
file-based only, no bridge calls.

Start by reading these files:

- `README.md`
- `CLAUDE.md`
- `.agent-handoff/PROTOCOL.md`
- `.agent-handoff/COLLAB.md`
- `.agent-handoff/turns/000-codex-bootstrap.md`
- `.agent-handoff/turns/000-claude-opus-consultation.md`
- `docs/test-project.md`
- `docs/chrome-runners.md`

Your task for this first Claude turn:

1. Treat repo files as the source of truth. Do not rely on hidden context.
2. Keep scope to one feature only: add decision + persist to localStorage +
   reload preserves it.
3. Update `.agent-handoff/COLLAB.md` to show Codex is next and critique is
   pending.
4. Write `.agent-handoff/turns/001-claude-architecture.md` using the required
   schema from `PROTOCOL.md`.
   - The turn note must use the exact schema headings:
     `Agent`, `Phase`, `Files touched this turn`, `Decisions (binding)`,
     `Open questions for the other agent`, `Blockers (must-fix before
     continuing)`, `Nits (suggested, not required)`, `Browser verification`,
     and `Handoff`.
   - Do not replace the schema with custom sections such as `Summary`,
     `Scope For This Turn`, `Next`, or `Proposed File Ownership`.
   - For this architecture turn, include `Browser verification` with
     `Tool used: N/A` and a short reason.
5. Cover only:
   - decision data shape,
   - ID generation rule,
   - localStorage key and parse-failure behavior,
   - exact DOM contract for the Add form,
   - validation rules,
   - explicit non-goals for filter/edit/delete/import/export.
6. Ask Codex to critique the architecture before implementation.

Experiment path:

- Do not call Codex through any MCP/plugin bridge.
- Do not create `app/` files in this turn.
- Write the Codex request into `Next Request To Codex` in
  `.agent-handoff/COLLAB.md`.
- Stop and tell Sami to paste `.agent-handoff/prompts/codex-response.md` into
  Codex.

Next Codex request to write into `COLLAB.md`:

```text
You are Codex collaborating with Claude Code in
/Users/samiserrag/Documents/GitHub/claude-codex.

Read:
- AGENTS.md
- .agent-handoff/PROTOCOL.md
- .agent-handoff/COLLAB.md
- .agent-handoff/turns/001-claude-architecture.md
- docs/test-project.md

This is Experiment 1, turn 002. Review Claude's proposed architecture for the
scoped feature only: add decision + persist to localStorage + reload preserves
it. Focus on:
- whether the scope is small enough for a workflow test,
- whether file ownership avoids collisions,
- whether the app can be implemented without dependencies,
- edge cases for localStorage parse failure, quota, schema drift, and empty
  states,
- the simplest verification path.

Update .agent-handoff/COLLAB.md with your critique, add
.agent-handoff/turns/002-codex-critique.md using the schema, list at most 3
blockers, separate nits, and hand back a concrete next request to Claude. Do not
install dependencies, commit, push, or edit app files.
```

Stopgates:

- Do not install dependencies.
- Do not commit, push, merge, or create a PR.
- Do not use dangerous permission bypass modes.
- Do not use Playwright as the browser validation path. Use Chrome MCP if
  browser validation is needed.
- Do not call Codex through a bridge in Experiment 1.
- Do not create app files in turn 001.
- Do not continue past turn note 004 without Sami's explicit approval.
