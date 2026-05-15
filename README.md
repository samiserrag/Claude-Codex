# Claude-Codex

This repo is a small testbed for proving a two-way Claude Code <-> Codex
collaboration workflow. The sample build is intentionally simple: a static
Decision Ledger app. The app matters less than the coordination loop.

## Goal

Prove a workflow where Claude and Codex can:

- co-architect a small feature,
- split ownership without overwriting each other,
- ask each other for review or implementation help,
- preserve shared state in repo files,
- stop at explicit approval gates instead of free-running indefinitely.

## Current Test Project

Build a no-dependency static web app named **Decision Ledger**. The project brief
is in [docs/test-project.md](docs/test-project.md).

Expected app files once the loop starts:

- `app/index.html`
- `app/styles.css`
- `app/app.js`

## Collaboration Files

- [CLAUDE.md](CLAUDE.md) - instructions for Claude Code.
- [AGENTS.md](AGENTS.md) - instructions for Codex.
- [.agent-handoff/PROTOCOL.md](.agent-handoff/PROTOCOL.md) - shared loop rules.
- [.agent-handoff/COLLAB.md](.agent-handoff/COLLAB.md) - current shared state.
- [.agent-handoff/turns/](.agent-handoff/turns/) - append-only turn log.
- [.agent-handoff/prompts/claude-start.md](.agent-handoff/prompts/claude-start.md) - prompt to paste into a new Claude Code thread.
- [docs/chrome-runners.md](docs/chrome-runners.md) - Chrome-first browser runner setup.
- [docs/ubicloud-runners.md](docs/ubicloud-runners.md) - Ubicloud GitHub Actions runner setup.

## First Run

1. Open a new Claude Code thread in this repo.
2. Paste the contents of
   [.agent-handoff/prompts/claude-start.md](.agent-handoff/prompts/claude-start.md).
3. Let Claude try the full-loop path if a Codex bridge is available.
4. If Claude cannot call Codex directly, use the file-based fallback:
   Claude writes the next request into `.agent-handoff/COLLAB.md`, then you paste
   [.agent-handoff/prompts/codex-response.md](.agent-handoff/prompts/codex-response.md)
   into Codex.

## Optional Bridge Setup

Local checks showed both CLIs are installed:

- `codex-cli 0.130.0`
- `claude 2.1.58`

The repo-side scaffold works without extra setup. For a stronger full-loop test,
register Codex inside Claude Code:

```bash
claude mcp add --scope project --transport stdio codex -- codex mcp-server
```

The reverse direction is possible but should be treated as experimental until
the one-way bridge is working:

```bash
codex mcp add claude-code -- claude mcp serve
```

Do not use dangerous approval-bypass modes for this repo. Keep sandboxing and
human approvals enabled while testing the loop.

## Chrome Runner Setup

Browser validation in this repo is Chrome-first:

- Codex should use the Codex Chrome plugin/connector.
- Claude Code should use Claude in Chrome MCP if available.
- Do not default to Playwright for this repo.

Local Chrome health checks passed during setup:

- Google Chrome is installed and running.
- The Codex Chrome Extension is installed and enabled.
- The Codex Chrome native host manifest is installed and correct.

The old `denver-songwriters-collective` repo name is stale. The current renamed
repo is `colorado-songwriters-collective`.

## Ubicloud CI Runners

This repo has a GitHub Actions workflow at
[.github/workflows/ci.yml](.github/workflows/ci.yml). It uses:

```yaml
runs-on: ubicloud-standard-2
```

That is the repo-side change Ubicloud requires after the GitHub app is connected
to the repository. The workflow runs the local collaboration scaffold check on
pushes, pull requests, and manual `workflow_dispatch`.

## Local Check

Run the protocol check:

```bash
npm test
```
