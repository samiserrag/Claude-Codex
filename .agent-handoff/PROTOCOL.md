# Claude <-> Codex Collaboration Protocol

## Purpose

This protocol tests practical two-way collaboration between Claude Code and
Codex in the same repo. The reliable baseline is repo-file coordination.
Experiment 1 is file-based only. Live MCP/plugin bridges are later experiments,
not the first run.

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
3. Before editing `COLLAB.md`, re-read it so stale state is not overwritten.
4. Update `COLLAB.md` before delegating to the other agent.
5. For Experiment 1, do not call the other agent through a bridge. Write the
   next request into `COLLAB.md`, add a turn note, and stop so Sami can paste
   the matching prompt into the other agent.
6. Add a new turn note named with the next sequence number, for example
   `001-claude-architecture.md` or `002-codex-review.md`.

## Turn Note Schema

Every Experiment 1 turn note must use this schema:

```markdown
# NNN - <agent> <phase>

## Agent
Claude | Codex

## Phase
architecture | critique | implementation | smoke | retrospective

## Files touched this turn
- path (created | edited | deleted)

## Decisions (binding)
- short bullets, each is a commitment the next agent must respect

## Open questions for the other agent
- specific, answerable

## Blockers (must-fix before continuing)
- empty or numbered

## Nits (suggested, not required)
- empty or bullets

## Browser verification
- Tool used: Claude in Chrome MCP | Codex Chrome plugin | N/A
- URL or file path opened:
- Action:
- Visible outcome:
- Console/network issues:

## Handoff
- Next agent: Claude | Codex | Sami
- Specific ask:
```

Use Blockers vs Nits strictly. A critique turn may list at most 3 blockers.
Nits are optional and must not expand the required scope.

## Experiment 1

Experiment 1 is file-based only and limited to one feature:

`Add decision + persist to localStorage + reload preserves it`

Do not design or implement filter, edit, delete, import, export, or clear-all
during Experiment 1.

The turn cap is 4 experiment turn notes:

1. `001-claude-architecture.md`
2. `002-codex-critique.md`
3. `003-claude-implementation.md`
4. `004-codex-implementation-smoke.md`

After turn 004, stop and hand off to Sami for retrospective. Do not create turn
005 without explicit approval.

## Later Bridge Experiments

After Experiment 1 proves the file-based contract, a later experiment may test
Claude-hosted Codex through the official Codex plugin or `codex mcp-server`.
This requires Sami's explicit approval because it changes tool configuration and
the failure mode under test.

Codex-hosted Claude is out of scope until the file-based and Claude-hosted Codex
experiments both show clear value.

## Ownership

Use explicit ownership in `COLLAB.md` before editing:

- Claude-owned files
- Codex-owned files
- Shared files
- No-touch files

For Experiment 1, use this split:

- Claude: turn 001 architecture, `app/index.html`, first-pass `app/styles.css`
- Codex: turn 002 critique, `app/app.js`, Chrome smoke evidence
- Shared: `README.md`, `.agent-handoff/COLLAB.md`, turn notes
- No-touch: `.github/`, `.claude/`, `docs/`, `package.json`, `README.md`,
  `AGENTS.md`, `CLAUDE.md`, `PROTOCOL.md` after this setup pass

## Stopgates

Stop and ask Sami before:

- installing dependencies,
- committing, pushing, merging, or creating a PR,
- using dangerous sandbox or approval-bypass modes,
- changing global Claude/Codex config,
- running network-dependent setup,
- continuing past the 4 Experiment 1 turn notes.

## Success Criteria

The test is successful when:

- both agents have written at least one turn note,
- `COLLAB.md` accurately captures decisions, rejected ideas, and ownership,
- turn notes 001 through 004 follow the schema,
- at least one Codex blocker is addressed by Claude,
- at least one nit is deferred in writing,
- the scoped sample feature works locally,
- Chrome verification is recorded with tool, path, action, and visible outcome,
- no installs, commits, pushes, PRs, global config changes, or bridge calls
  happen during the experiment,
- a retrospective identifies the most expensive friction point before any
  bridge experiment begins.
