# Chrome Runner Setup

## Purpose

This repo uses Chrome-based browser runners for UI validation. The goal is to
exercise the same real-browser, logged-in-session path the user's other repos
use, without relying on Playwright.

## Current Repo Rule

- Codex browser runner: Codex Chrome plugin/connector.
- Claude browser runner: Claude in Chrome MCP, when available.
- Do not default to Playwright for this repo.
- If Chrome tooling is unavailable, report the missing connector state and stop.

## Local Chrome Health Check

Setup checks run from this repo showed:

- Google Chrome is installed at `/Applications/Google Chrome.app`.
- Google Chrome is currently running.
- The Codex Chrome Extension is installed and enabled in the default Chrome
  profile.
- The Codex Chrome native host manifest exists and allows the expected
  extension origin.

This means Codex-side Chrome setup appears ready. Claude-side Chrome MCP still
has to be verified from inside the Claude Code thread because its tool surface
is owned by Claude Code.

## Renamed Repo Note

`denver-songwriters-collective` is the old repo name. The current sibling repo
is:

`/Users/samiserrag/Documents/GitHub/colorado-songwriters-collective`

Do not chase old Denver paths when copying guidance from prior repos.

## Browser QA Protocol

For the Decision Ledger sample app:

1. Prefer opening `app/index.html` directly once it exists.
2. If a local server becomes necessary, keep it explicit and record the URL.
3. Use Chrome tooling to verify visible behavior, not just file contents.
4. Record evidence in the current turn note:
   - page opened,
   - action taken,
   - observed result,
   - any console/network issue visible through Chrome tools.

## Failure Handling

If Chrome cannot be controlled:

- Confirm whether Chrome is running.
- Confirm whether the Codex Chrome Extension or Claude in Chrome extension is
  installed and enabled.
- Confirm whether the native host is present.
- Ask Sami before opening Chrome windows or changing extension setup.
- Do not switch to Playwright as a workaround.

## Suggested Smoke Prompt

Use `.agent-handoff/prompts/chrome-smoke-runner.md` after the app exists.
