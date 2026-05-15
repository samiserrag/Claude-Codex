# 003 - Claude implementation

## Agent
Claude

## Phase
implementation

## Files touched this turn
- app/index.html (created)
- app/styles.css (created)
- .agent-handoff/turns/003-claude-implementation.md (created)
- .agent-handoff/COLLAB.md (edited)

## Decisions (binding)

- Codex blocker 1 (write-failure semantics) is accepted and overrides the
  earlier turn 001 language. The binding rule for `app/app.js` in turn 004 is:
  1. Build the candidate decision object and the candidate list in memory
     only.
  2. Attempt `localStorage.setItem("decision-ledger:v1",
     JSON.stringify(candidateList))` first.
  3. Only if `setItem` resolves without throwing: replace the in-memory list
     with the candidate list, prepend the rendered `<li>` to `#decision-list`,
     clear the three input values, return focus to `#decision-title`, hide
     `#decision-empty-state`, and clear `#decision-form-error`.
  4. If `setItem` throws (quota, security mode, disabled storage, etc.):
     leave the previous in-memory list untouched, do not render the candidate
     as saved, do not clear the form inputs, set `#decision-form-error` text
     to a visible message (suggested copy: "Could not save. Your browser
     storage may be full."), and keep focus where the user left it. No retry,
     no partial state.
  This makes the experiment's reload-preserves promise honest: only writes
  that survive a reload are ever rendered as saved.
- DOM contract from turn 001 is preserved verbatim. Every required ID,
  attribute, and `maxlength` is present:
  - `#add-decision-form` carries `novalidate`.
  - `#decision-title` is `type="text" required maxlength="120"`.
  - `#decision-rationale` is a `textarea required maxlength="2000"`.
  - `#decision-owner` is `type="text" required maxlength="60"`.
  - `#decision-submit` is `type="submit"` with visible text `Add decision`.
  - `#decision-form-error` is a `<p>` with `role="alert"` and
    `aria-live="polite"`, empty by default.
  - `#decision-list` is a `<ul>` with `aria-label="Decisions"`, empty by
    default so Codex owns the first render path.
  - `#decision-empty-state` is a `<p>` with the literal text `No decisions
    yet.`.
- `<script src="app.js" defer></script>` is included in `<head>` so opening
  `index.html` directly works without a server and so Codex can land
  `app/app.js` in turn 004 without touching `index.html`.
- Codex's accessibility nit is taken: each of `#decision-title`,
  `#decision-rationale`, and `#decision-owner` has a sibling
  `<label for="...">` and an `aria-describedby="decision-form-error"` so
  screen readers announce form errors against the focused field. The error
  region is shared across validation errors and storage write errors.
- `#decision-form-error` is invisible when empty (`:empty` selector keeps it
  unstyled) and becomes a high-contrast red panel (background, border, dark
  red text) the moment Codex sets `textContent`. This is purely CSS, so
  Codex does not need to toggle classes — setting/clearing text content is
  enough to show/hide the error styling.
- `#decision-empty-state` is hidden via a CSS sibling-selector fallback
  (`#decision-list:not(:empty) + .empty-state { display: none; }`) so the
  empty state disappears the instant Codex appends a list item, even before
  Codex toggles the `hidden` attribute. Codex remains free to use the
  `hidden` attribute as the authoritative toggle; the CSS rule is a
  defense-in-depth fallback, not a contract change.
- No `app/app.js` exists yet. Creating it is Codex's job in turn 004.
- `python3 -m http.server` was used only for browser verification during this
  turn because the Claude in Chrome MCP refuses `file://` URLs. The server
  was stopped at the end of the turn and is not part of the app contract.
  The app itself must still work when `app/index.html` is opened directly
  via `file://`.

## Open questions for the other agent

- For turn 004, will Codex use synchronous `setItem` inside the submit
  handler so a thrown quota error is caught with a plain `try`/`catch`, or
  is there a reason to wrap it in a `Promise.resolve().then(...)` pattern?
  The synchronous pattern is preferred because it lines up with the
  blocker fix above.
- For the rendered list item, is `<li data-decision-id="...">` with title,
  rationale, owner, and a `toLocaleString()` timestamp sufficient, or does
  Codex want a stricter inner DOM (for example explicit child classes) for
  the turn 004 Chrome smoke evidence?
- Should Codex's smoke run record both the success path (add + reload
  preserves) and a forced-write-failure path (for example by overflowing
  storage or monkey-patching `localStorage.setItem`), or only the success
  path for turn 004?

## Blockers (must-fix before continuing)

- None.

## Nits (suggested, not required)

- Consider adding a tiny `console.info` ping at the top of `app/app.js`
  (for example `console.info("[decision-ledger] booted")`) so the Chrome
  smoke evidence in turn 004 can show that the script actually ran.
- Consider rendering the timestamp via
  `new Date(createdAt).toLocaleString()` to match Codex's earlier nit while
  keeping ISO strings in storage.

## Browser verification
- Tool used: Claude in Chrome MCP
- URL or file path opened: http://localhost:8765/app/index.html (served via
  `python3 -m http.server 8765` from the repo root because the Chrome MCP
  refuses `file://` schemes; the file on disk is `app/index.html`).
- Action: navigated to the page; queried the DOM via
  `mcp__Claude_in_Chrome__javascript_tool` to confirm every required ID is
  present and that `aria-describedby`, `aria-live`, `role`, `aria-label`,
  `novalidate`, `required`, `maxlength`, and `defer` are set as expected;
  mutated `#decision-form-error.textContent` to confirm the empty-versus-
  populated CSS swap; appended and removed a temporary `<li>` to confirm
  `#decision-empty-state` toggles via the CSS sibling fallback; read the
  network log; read the console log.
- Visible outcome:
  - All eight required IDs are present.
  - `formNoValidate: true`, `scriptDefer: true`.
  - `#decision-form-error` has `role="alert"` and `aria-live="polite"`.
  - All three inputs carry `aria-describedby="decision-form-error"`.
  - `#decision-list` has `aria-label="Decisions"`.
  - Labels exist for `decision-title`, `decision-rationale`, `decision-owner`.
  - `maxlength` is `120 / 2000 / 60` on title / rationale / owner.
  - When `#decision-form-error` text is empty, the element has no
    background and no visible panel.
  - When text is set, the element becomes `display: block` with
    `background: rgb(253, 236, 236)` and
    `border-color: rgb(192, 57, 43)` (the red error panel).
  - With an empty `#decision-list`, `#decision-empty-state` is
    `display: block` and reads `No decisions yet.`
  - After appending a temporary `<li>` to `#decision-list`,
    `#decision-empty-state` is `display: none` via the CSS sibling rule.
- Console/network issues:
  - `GET /app/index.html` 200, `GET /app/styles.css` 200, `GET /app/app.js`
    returned a non-2xx response (expected because Codex has not created
    `app/app.js` yet; the same URL returns 404 via `curl` against the
    Python server). This will resolve in turn 004 when Codex adds the
    script. No other failed requests.
  - The page produces no application console errors or warnings. The only
    console entry observed was a deliberate `console.log` ping emitted from
    the verification script itself.

## Handoff
- Next agent: Codex
- Specific ask: create `app/app.js` only, implementing the write-first /
  render-after rule above. Do not edit `app/index.html` or `app/styles.css`
  unless a blocker forces it; if you must, call it out as a blocker in
  turn 004. Then run the Chrome smoke evidence (add a decision, confirm
  it appears, reload, confirm it survives) using the Codex Chrome
  connector and record the page opened, the actions taken, the visible
  outcome, and any console/network issues in
  `004-codex-implementation-smoke.md`. Stop after turn 004 unless Sami
  explicitly extends scope.
