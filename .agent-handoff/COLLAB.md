# Collaboration State

## Goal

Prove a practical two-way Claude Code <-> Codex collaboration loop in this repo.
The sample build is a small static Decision Ledger app.

## Current Owner

Claude

## Current Phase

Bootstrap complete. Codex created the shared protocol, the test-project brief,
and paste-ready prompts. No app implementation has started yet.

## Tool Observations

- Codex CLI is installed: `/opt/homebrew/bin/codex`, `codex-cli 0.130.0`.
- Claude Code is installed: `/opt/homebrew/bin/claude`, `2.1.58`.
- `codex mcp-server --help` works.
- `claude mcp serve --help` works.
- Claude currently has the Vercel plugin installed, but not the OpenAI Codex
  plugin.
- `claude mcp list` currently reports only a Vercel MCP entry and that health
  check fails.
- No project-level Claude MCP entry for Codex has been confirmed yet.
- Browser runner setup is Chrome-first. Do not default to Playwright.
- Chrome health checks passed: Chrome is installed and running; the Codex Chrome
  Extension is installed/enabled; the Codex Chrome native host manifest is
  correct.
- `denver-songwriters-collective` is the old repo name. Use
  `colorado-songwriters-collective` for current sibling-repo references.
- Ubicloud runner clarification: the CI runner provider is Ubicloud. The
  console project is `pj0qdnp2x6fp4q5p24j13cqv81`; the console shows the
  `samiserrag` GitHub integration and no active runners at setup time.
- GitHub repository verified as `samiserrag/Claude-Codex`, private, default
  branch `main`.

## Hard Constraints / Approval Stopgates

- Do not install dependencies without Sami's explicit approval.
- Do not commit, push, merge, or create a PR without Sami's explicit approval.
- Do not use dangerous sandbox or approval-bypass modes.
- Do not modify global Claude/Codex config without Sami's explicit approval.
- Stop after two autonomous Claude/Codex exchanges unless Sami says to continue.

## Decisions Made

- Use repo files as the source of truth for collaboration state.
- Use a no-dependency static web app as the sample project.
- Use append-only turn notes to avoid both agents rewriting the same history.
- Prefer Claude-hosted Codex bridge first; use file-based fallback when missing.
- Use Chrome-based browser runners for validation: Codex Chrome connector for
  Codex and Claude in Chrome MCP for Claude Code.
- Use Ubicloud for GitHub Actions CI via `runs-on: ubicloud-standard-2`.

## Considered And Rejected

- Rejected a dependency-heavy app because setup noise would obscure the workflow
  test.
- Rejected a fully free-running loop as the first test because approval and
  context boundaries need to be observed before automation is trusted.

## Proposed File Ownership

- Claude owns first-pass product architecture, `app/index.html`, and first-pass
  `app/styles.css`.
- Codex owns state-management critique, `app/app.js`, and verification notes.
- Both agents may update `.agent-handoff/COLLAB.md` and add turn notes.
- Neither agent should edit another agent's existing turn note.

## Current Diff / Branch

- Branch: `main`
- Bootstrap files added by Codex in the working tree.
- No app implementation files exist yet.

## Latest Claude Response

None yet. Next step is to start a new Claude Code thread with
`.agent-handoff/prompts/claude-start.md`.

## Latest Codex Response

Codex scaffolded the collaboration protocol and selected the Decision Ledger
test project.

## Questions Requiring Sami Approval

- Should we install the official OpenAI Codex plugin in Claude Code?
- Should we register `codex mcp-server` as a project-scoped Claude MCP server?
- Should we register `claude mcp serve` inside Codex for the reverse-direction
  experiment?
- Should we install the official OpenAI Codex plugin in Claude Code for the
  stronger Claude-hosted Codex loop?
- After this workflow is pushed, should we trigger a manual GitHub Actions run
  to confirm a Ubicloud runner starts?

## Next Request To Claude

Read `CLAUDE.md`, `.agent-handoff/PROTOCOL.md`, `.agent-handoff/COLLAB.md`, and
`docs/test-project.md`. Start the Decision Ledger architecture turn, write
`.agent-handoff/turns/001-claude-architecture.md`, and ask Codex for critique
through a bridge if available. If no bridge is available, write the Codex request
into `Next Request To Codex` and stop.

## Next Request To Codex

After Claude writes the first architecture turn, review it for scope control,
state-management simplicity, file ownership, and verification. Update
`COLLAB.md`, add the next turn note, and only implement Codex-owned files if
Claude explicitly handed them off.
