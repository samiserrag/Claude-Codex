# Portable Collaboration Kit v1

This kit is a reviewable protocol scaffold for running a Claude Code and
Codex collaboration inside an adopting repository. It gives both agents a
shared source of truth, append-only turn notes, explicit approval stopgates,
and a cold-readable handoff shape.

The kit is deliberately small. It is not an installer, not a live bridge, not
a framework, not an MCP registration, and not a plugin setup. It copies
plain repository files that humans and agents can review before use.

## Quick Start

1. Copy the files from this folder into the root of the adopting repository,
   preserving the directory structure (especially `.agent-handoff/` and its
   subdirectories).
2. Append the contents of `.gitignore.snippet` to the adopter repo's existing
   `.gitignore`. Do not overwrite the adopter repo's existing ignore rules.
3. Rename template files by removing the `.template` suffix:
   - `AGENTS.md.template` -> `AGENTS.md`
   - `CLAUDE.md.template` -> `CLAUDE.md`
   - `.agent-handoff/PROTOCOL.md.template` -> `.agent-handoff/PROTOCOL.md`
   - `.agent-handoff/COLLAB.md.template` -> `.agent-handoff/COLLAB.md`
   - `.agent-handoff/DASHBOARD.md.template` -> `.agent-handoff/DASHBOARD.md`
     (optional current-state view)
4. Fill every `{{PLACEHOLDER}}` before the first collaboration turn, or leave
   an explicit `N/A` with a reason where the template allows it.
5. Write the first turn note under `.agent-handoff/turns/` using
   `.agent-handoff/prompts/starter-turn-note.md`.
6. Stop at the turn cap named in the current experiment authorization until
   Sami explicitly approves continuation.

## Operating Defaults

- Work local-first, not local-only. Repo-file coordination is the default;
  bridges and adapters are opt-in later layers only when Sami approves exact
  setup.
- Treat file-based handoff as the minimal binding reference: manual paste plus
  `COLLAB.md` and append-only turn notes, with inbox/outbox files only if a
  later scope authorizes them.
- Treat signed event governance as an optional add-on. It is not required for
  the v1 file-based kit.
- Keep live bridges and adapters disabled until Sami separately approves the
  exact MCP registration, plugin setup, bridge enablement, `.mcp.json`, or
  global config change.
- Treat turn caps as per-experiment authorization values, not repo-wide
  defaults.
- Browser QA must name the runner or explicitly say `N/A` with a reason.
- Automation budget is `N/A` unless polling, cron, webhook, or heartbeat work
  is explicitly approved.
- Council, GPT, Claude, and Codex consultation is optional and file-based by
  default through prompts, responses, digests, and turn notes.
- Treat gstack, AgentBridge, tmux bridges, LLM Council, Zenith, CCB, Claude
  Squad, and related projects as prior art only unless a separate scope
  approves dependency use.
- Copying this kit into another repository is a separate action from designing
  or reviewing the kit. Do not extract into another repo without explicit
  approval for that repo and file list.

## What This Kit Is Not

- Not an installer or bootstrap script.
- Not a dependency package.
- Not a live MCP bridge, plugin, wrapper, or adapter.
- Not a global Claude or Codex configuration.
- Not a signed-event governance implementation.
- Not an authorization to create keys, trust registries, event logs, or
  private-key files.
- Not a CI system or test framework.
- Not permission to commit, push, merge, open a PR, install dependencies, or
  enable automation.

## Included Files

- `AGENTS.md.template`: Codex-facing instructions for the adopter repo.
- `CLAUDE.md.template`: Claude-facing mirror instructions.
- `.agent-handoff/PROTOCOL.md.template`: shared collaboration protocol.
- `.agent-handoff/COLLAB.md.template`: current-state handoff template.
- `.agent-handoff/DASHBOARD.md.template`: optional current-state dashboard.
- `.agent-handoff/turns/.gitkeep`: tracks the turn-log directory.
- `.agent-handoff/digests/.gitkeep`: tracks optional digest storage.
- `.agent-handoff/consultants/.gitkeep`: tracks optional consultant responses.
- `.agent-handoff/prompts/starter-turn-note.md`: first-turn note skeleton.
- `.gitignore.snippet`: ignore rules to append to the adopter repo.

## Optional Dashboard

Adopters may copy/render `.agent-handoff/DASHBOARD.md.template` to
`.agent-handoff/DASHBOARD.md` when they want a human-readable current-state
surface. `COLLAB.md` remains authoritative; the dashboard is operational only,
does not grant approval, and should be refreshed when freshness-trigger fields
change.

## Prior-Art Citation Convention

When citing prior art, record the source, what was verified, and the date it
was read or observed. For URLs, use this pattern:

```text
{{SOURCE_URL}} (read YYYY-MM-DD)
```

For papers, screenshots, talks, local files, or private notes, record the
medium and observation date instead of implying live verification.

Prior art is not a dependency. Do not install, vendor, enable, or copy
third-party tools unless a separate approval explicitly scopes that action.
