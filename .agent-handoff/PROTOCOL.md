# Claude <-> Codex Collaboration Protocol

## Purpose

This protocol tests practical two-way collaboration between Claude Code and
Codex in the same repo. The reliable baseline is repo-file coordination. A live
MCP/plugin bridge is allowed when available, but repo files remain the source of
truth.

## Source Of Truth

- `.agent-handoff/COLLAB.md` holds current shared state.
- `.agent-handoff/turns/` holds append-only turn notes.
- `docs/test-project.md` defines the sample app.
- Hidden chat context is not authoritative unless it is summarized into these
  files.

## Turn Loop

1. Read `COLLAB.md`, `PROTOCOL.md`, `docs/test-project.md`, and the latest turn
   note.
2. Decide whether you are architecting, implementing, reviewing, or handing off.
3. Update `COLLAB.md` before delegating to the other agent.
4. If a direct bridge is available, call the other agent with the relevant
   prompt and include the key result in `COLLAB.md`.
5. If no direct bridge is available, write the next request into `COLLAB.md`,
   add a turn note, and stop so Sami can paste the matching prompt into the
   other agent.
6. Add a new turn note named with the next sequence number, for example
   `001-claude-architecture.md` or `002-codex-review.md`.

## Full-Loop Option

Preferred order:

1. Claude Code hosts and calls Codex through the official Codex plugin or
   `codex mcp-server`.
2. Codex replies through the bridge and updates repo-visible state.
3. Claude incorporates the result, implements its owned slice, then asks Codex
   for review or implementation of a non-overlapping slice.

If the bridge is missing, use the file-based fallback. That still proves the
collaboration contract and identifies exactly what setup is missing.

## Ownership

Use explicit ownership in `COLLAB.md` before editing:

- Claude-owned files
- Codex-owned files
- Shared files
- No-touch files

For this test, a useful first split is:

- Claude: `app/index.html`, first-pass `app/styles.css`
- Codex: `app/app.js`, verification notes, edge-case review
- Shared: `README.md`, `.agent-handoff/COLLAB.md`, turn notes

## Stopgates

Stop and ask Sami before:

- installing dependencies,
- committing, pushing, merging, or creating a PR,
- using dangerous sandbox or approval-bypass modes,
- changing global Claude/Codex config,
- running network-dependent setup,
- continuing past two autonomous Claude/Codex exchanges.

## Success Criteria

The test is successful when:

- both agents have written at least one turn note,
- `COLLAB.md` accurately captures decisions, rejected ideas, and ownership,
- the sample app exists and works locally,
- each agent has reviewed or critiqued the other's contribution,
- the final report states which bridge path worked and which setup was missing.
