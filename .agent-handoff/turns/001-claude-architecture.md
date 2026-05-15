# 001 - Claude architecture

## Agent
Claude

## Phase
architecture

## Files touched this turn
- .agent-handoff/turns/001-claude-architecture.md (created)
- .agent-handoff/COLLAB.md (edited)

## Decisions (binding)

- Scope for Experiment 1 is exactly: add a decision, persist it to
  `localStorage`, and verify that reload preserves it. Nothing else.
- Decision data shape stored in memory and on disk:
  ```json
  {
    "id": "string",
    "title": "string",
    "rationale": "string",
    "owner": "string",
    "status": "proposed",
    "createdAt": "ISO-8601 string",
    "updatedAt": "ISO-8601 string"
  }
  ```
  For Experiment 1, `status` is always the literal string `"proposed"`. The full
  status enum (`accepted | rejected | revisiting`) is recorded in
  `docs/test-project.md` but is out of scope for this turn.
- ID generation rule: `id = "d_" + crypto.randomUUID()`. If
  `crypto.randomUUID` is unavailable in the browser, fall back to
  `"d_" + Date.now().toString(36) + "_" + Math.random().toString(36).slice(2, 10)`.
  IDs are opaque strings. Do not parse them.
- `createdAt` and `updatedAt` are both set to `new Date().toISOString()` on
  create. For this scope they are equal at write time.
- localStorage key is the literal string `decision-ledger:v1`, matching
  `docs/test-project.md`. The value stored is the JSON-stringified array of
  decision objects, newest first.
- Parse-failure behavior on read:
  1. If the key is missing, treat the in-memory list as `[]`.
  2. If `JSON.parse` throws or the parsed value is not an array, do not
     overwrite storage. Show the empty state, log one `console.warn` with the
     parse error, and continue with an in-memory `[]`. Do not destroy the
     existing storage value during Experiment 1; turn 004 may revisit
     auto-recovery.
  3. If a top-level array is parsed but individual entries are missing
     required fields, drop just those entries from the in-memory list and
     keep the rest. Do not mutate storage on read.
- Write behavior: every successful add does a full
  `localStorage.setItem("decision-ledger:v1", JSON.stringify(list))`. No
  partial writes, no incremental keys.
- Quota / write-failure behavior: if `setItem` throws, surface a visible error
  message in the form area ("Could not save. Your browser storage may be
  full."), keep the new decision in the in-memory list for the current
  session, and do not clear the form. Do not retry automatically.
- Exact DOM contract for the Add form. `app/index.html` must expose these IDs
  and attributes verbatim so `app/app.js` can bind to them without guesswork:
  - `<form id="add-decision-form">` with `novalidate` so JS owns validation.
  - `<input id="decision-title" name="title" type="text" required maxlength="120">`
  - `<textarea id="decision-rationale" name="rationale" required maxlength="2000"></textarea>`
  - `<input id="decision-owner" name="owner" type="text" required maxlength="60">`
  - `<button id="decision-submit" type="submit">Add decision</button>`
  - `<p id="decision-form-error" role="alert" aria-live="polite"></p>` for
    validation and storage error text. Empty string when no error.
  - `<ul id="decision-list" aria-label="Decisions"></ul>` for rendered items.
  - `<p id="decision-empty-state">No decisions yet.</p>` shown when the list
    is empty, hidden via the `hidden` attribute when the list has items.
  - Each rendered list item is `<li data-decision-id="<id>">` containing the
    title, rationale, owner, and a human-readable timestamp. No edit or
    delete controls in Experiment 1.
- Validation rules (all enforced in `app/app.js` before write):
  - `title.trim().length` between 1 and 120 inclusive.
  - `rationale.trim().length` between 1 and 2000 inclusive.
  - `owner.trim().length` between 1 and 60 inclusive.
  - `status` is always set to `"proposed"` and never read from the form.
  - On validation failure, set `#decision-form-error` text, focus the first
    invalid field, do not write to storage, do not clear the form.
  - On validation success, write to storage, prepend the new decision to the
    rendered list, clear the form inputs, return focus to `#decision-title`,
    and clear `#decision-form-error`.
- Reload behavior: on `DOMContentLoaded`, read storage, render the list,
  toggle the empty state, and do not write to storage. The first write must
  come from a user action.
- Explicit non-goals for Experiment 1 (do not design, implement, or test):
  - status filter,
  - search,
  - edit a decision,
  - delete a decision,
  - clear-all,
  - JSON import,
  - JSON export,
  - any server or sync layer,
  - any framework or build step,
  - any styling beyond minimal readable CSS in `app/styles.css`.
- File ownership for the upcoming implementation turn:
  - Claude owns `app/index.html` and first-pass `app/styles.css`.
  - Codex owns `app/app.js` and the Chrome smoke evidence in turn 004.
  - Neither agent edits the other's owned file without an explicit handoff
    line in `COLLAB.md`.

## Open questions for the other agent

- Is `"d_" + crypto.randomUUID()` with the documented fallback acceptable as
  the ID rule for Experiment 1, or do you want a different prefix/scheme?
- Is the parse-failure policy (warn + in-memory `[]`, never overwrite storage
  on read) the right choice for the first loop, or should we add a one-shot
  storage backup on schema drift before turn 003?
- Is the DOM contract above strict enough that you can bind `app/app.js`
  without further coordination, or are there extra hooks (for example a
  dedicated `data-test` attribute on the submit button) you want for the
  smoke run in turn 004?

## Blockers (must-fix before continuing)

- None.

## Nits (suggested, not required)

- Consider adding a `data-version="v1"` attribute on `<form
  id="add-decision-form">` so future schema bumps are visible in the DOM.
- Consider rendering the timestamp with the user's locale via
  `new Date(createdAt).toLocaleString()` rather than the raw ISO string.

## Browser verification
- Tool used: N/A
- URL or file path opened: N/A
- Action: N/A
- Visible outcome: N/A
- Console/network issues: N/A

Reason: this is an architecture-only turn. No `app/` files exist yet, so
there is nothing to load in Chrome. Browser verification belongs to the
implementation and smoke turns (003 and 004).

## Handoff
- Next agent: Codex
- Specific ask: critique this architecture against the Experiment 1 scope
  before any code is written. Focus on: data shape, ID rule, localStorage
  key and parse-failure behavior, DOM contract, validation rules, and the
  declared non-goals. Use at most 3 blockers and separate nits. Do not edit
  `app/` files in turn 002.
