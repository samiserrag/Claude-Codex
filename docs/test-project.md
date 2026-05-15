# Test Project: Decision Ledger

## Purpose

Decision Ledger is a tiny static app for testing Claude Code <-> Codex
collaboration. It should be useful enough to require actual product and
engineering choices, but small enough that coordination remains the main test.

## Product Brief

Build a local-only web app that helps a small team record decisions during a
collaborative coding session.

Users should be able to:

- add a decision with a title, rationale, owner, and status,
- see decisions in a scannable list,
- filter by status,
- search by title or rationale,
- edit or delete a decision,
- export decisions as JSON,
- import previously exported JSON,
- clear all decisions after a confirmation.

## Technical Constraints

- No dependencies unless Sami explicitly approves them.
- Static files only: `app/index.html`, `app/styles.css`, `app/app.js`.
- Use browser `localStorage` with key `decision-ledger:v1`.
- Keep data format simple and documented in code.
- App should work by opening `app/index.html` directly in a browser.
- Keep accessibility basics: labels, buttons, focus states, and useful empty
  states.

## Suggested Data Shape

```json
{
  "id": "string",
  "title": "string",
  "rationale": "string",
  "owner": "string",
  "status": "proposed | accepted | rejected | revisiting",
  "createdAt": "ISO-8601 string",
  "updatedAt": "ISO-8601 string"
}
```

## Suggested Collaboration Split

Claude first:

- product flow,
- HTML structure,
- first-pass visual layout.

Codex first:

- state model,
- localStorage read/write,
- import/export edge cases,
- verification notes.

Shared:

- final integration,
- cross-review,
- concise README updates.

## Acceptance Checks

- Add, edit, delete, filter, search, export, and import work.
- Empty state is clear.
- Reloading the page preserves saved decisions.
- Invalid import JSON is rejected without losing existing decisions.
- The final report states how Claude and Codex communicated and where the loop
  broke down, if anywhere.
