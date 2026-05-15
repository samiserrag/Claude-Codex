# Chrome Smoke Runner Prompt

Use this after the Decision Ledger app exists.

You are running browser QA for:

`/Users/samiserrag/Documents/GitHub/claude-codex`

Use the Chrome runner available to your agent:

- Codex: Codex Chrome plugin/connector.
- Claude Code: Claude in Chrome MCP.

Do not use Playwright.

Read first:

- `docs/chrome-runners.md`
- `.agent-handoff/COLLAB.md`
- latest file in `.agent-handoff/turns/`
- `docs/test-project.md`

Then verify the app:

1. Open `app/index.html` in Chrome.
2. Add a decision.
3. Reload and verify persistence.
4. Search/filter the decision.
5. Edit the decision.
6. Export JSON.
7. Try invalid import JSON and verify existing data remains.
8. Delete or clear test data.

Update `.agent-handoff/COLLAB.md` with the result and add a new turn note under
`.agent-handoff/turns/` with concrete browser evidence.
