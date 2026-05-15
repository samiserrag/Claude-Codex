# Collaboration State

## Goal

Prove a practical two-way Claude Code <-> Codex collaboration loop in this repo.
The sample build is a small static Decision Ledger app.

## Current Owner

Sami

## Current Phase

Experiment 1 turn 004 Codex implementation and smoke complete. The four-turn
cap has been reached; stop here unless Sami explicitly approves a next turn.

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
- Codex Chrome connector smoke verification blocked direct `file://`
  navigation by URL policy, so turn 004 used an explicit local static server at
  `http://localhost:8765/app/index.html` and stopped it after verification.
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
- Stop after the four Experiment 1 turn notes unless Sami says to continue.

## Decisions Made

- Use repo files as the source of truth for collaboration state.
- Use a no-dependency static web app as the sample project.
- Use append-only turn notes to avoid both agents rewriting the same history.
- Run Experiment 1 file-based only. Do not use an MCP/plugin bridge in the
  first loop.
- Limit Experiment 1 to one feature: add a decision, persist it to
  localStorage, and verify reload preservation.
- Stop Experiment 1 after four turn notes: 001 Claude architecture, 002 Codex
  critique, 003 Claude implementation, 004 Codex implementation + smoke.
- Use Chrome-based browser runners for validation: Codex Chrome connector for
  Codex and Claude in Chrome MCP for Claude Code.
- Use Ubicloud for GitHub Actions CI via `runs-on: ubicloud-standard-2`.

## Considered And Rejected

- Rejected a dependency-heavy app because setup noise would obscure the workflow
  test.
- Rejected a fully free-running loop as the first test because approval and
  context boundaries need to be observed before automation is trusted.
- Rejected bridge use in Experiment 1 because the file-based contract needs a
  baseline before MCP/plugin routing is evaluated.
- Rejected implementing the full Decision Ledger feature list in Experiment 1
  because scope noise would obscure whether the collaboration loop works.

## Proposed File Ownership

- Claude owns turn 001 architecture, `app/index.html`, and first-pass
  `app/styles.css`.
- Codex owns turn 002 critique, `app/app.js`, and Chrome smoke evidence.
- Both agents may update `.agent-handoff/COLLAB.md` and add turn notes.
- Neither agent should edit another agent's existing turn note.
- Experiment 1 no-touch files after this setup pass: `.github/`, `.claude/`,
  `docs/`, `package.json`, `README.md`, `AGENTS.md`, `CLAUDE.md`,
  `.agent-handoff/PROTOCOL.md`.

## Current Diff / Branch

- Branch: `main`
- Turn 001 architecture note added at
  `.agent-handoff/turns/001-claude-architecture.md`.
- Turn 002 critique note added at
  `.agent-handoff/turns/002-codex-critique.md`.
- Turn 003 implementation note added at
  `.agent-handoff/turns/003-claude-implementation.md`.
- Turn 004 implementation/smoke note added at
  `.agent-handoff/turns/004-codex-implementation-smoke.md`.
- `app/index.html`, `app/styles.css`, and `app/app.js` are in place. No
  dependencies were installed and no commits, pushes, merges, or PRs were
  created.

## Latest Claude Response

Turn 003 implementation written at
`.agent-handoff/turns/003-claude-implementation.md`. Claude addressed
Codex's single blocker on write-failure semantics with a binding rule for
turn 004: build a candidate decision and candidate list in memory, attempt
`localStorage.setItem` first, and only render/clear/focus after a
successful write. On `setItem` failure: keep the previous in-memory list
untouched, leave the form values in place, and show a visible message in
`#decision-form-error`. Created `app/index.html` and `app/styles.css` with
the exact turn 001 DOM IDs and attributes, real `<label for>` elements for
each of `#decision-title`, `#decision-rationale`, `#decision-owner`,
`aria-describedby="decision-form-error"` on all three inputs, an empty-by-
default `#decision-form-error` that switches to a red error panel as soon
as text is set, an empty-by-default `#decision-list`, an
`#decision-empty-state` that hides via a CSS sibling fallback the instant
a list item is appended, and `<script src="app.js" defer></script>` so
Codex can land turn 004 without editing `index.html`. Browser verification
was done with Claude in Chrome MCP against
`http://localhost:8765/app/index.html` (Python http.server was used because
the Chrome MCP refuses `file://` URLs; the server was stopped at the end
of the turn). All eight required IDs verified present, all required
attributes verified, error panel and empty-state toggles verified, and no
application console errors were observed. The expected `app.js` request
came back missing because Codex has not created it yet — that resolves in
turn 004.

## Earlier Claude Response

Turn 001 architecture written at
`.agent-handoff/turns/001-claude-architecture.md`. It scopes Experiment 1 to
add + localStorage persistence + reload preservation only. It locks the
decision data shape, the ID rule (`"d_" + crypto.randomUUID()` with a
documented fallback), the localStorage key (`decision-ledger:v1`),
parse-failure behavior (warn and use in-memory `[]`, never overwrite storage
on read), the exact DOM contract for the Add form (form/input/button IDs,
the `#decision-form-error` live region, the `#decision-list` and
`#decision-empty-state` elements), validation rules (trimmed length bounds
for title, rationale, owner; status hardcoded to `"proposed"`), and explicit
non-goals (filter, search, edit, delete, clear-all, import, export). Three
open questions are routed to Codex for the critique. No `app/` files were
created in this turn. Browser verification is `N/A` for an architecture-only
turn.

## Latest Codex Response

Turn 004 implementation/smoke written at
`.agent-handoff/turns/004-codex-implementation-smoke.md`. Codex created
`app/app.js` only. It binds the exact required IDs, uses
`decision-ledger:v1` with a bare-array shape, generates opaque `d_` IDs using
`crypto.randomUUID()` with the specified fallback, stores the hardcoded
`"proposed"` status, validates trimmed title/rationale/owner lengths, and
implements the write-first / render-after rule from turn 002 and turn 003.
On read, missing storage maps to `[]`; invalid JSON or non-array values warn
once and map to `[]`; malformed entries are dropped from memory only; storage
is never written during read. `node --check app/app.js` passed.

Codex Chrome smoke verification opened
`http://localhost:8765/app/index.html`, filled the form, clicked
`Add decision`, confirmed the new decision rendered, reloaded, and confirmed
the same decision survived reload. Chrome console warnings/errors were `[]`.
Direct `file://` navigation was blocked by the Codex Chrome connector URL
policy, so the smoke used a local HTTP server; the server was stopped after
verification.

## Earlier Codex Response

Turn 002 critique written at `.agent-handoff/turns/002-codex-critique.md`.
Codex accepts the Experiment 1 scope, bare-array `localStorage` shape, ID rule,
DOM contract, and hardcoded `"proposed"` status. Codex listed one blocker:
write-failure behavior must not render or treat a new decision as saved when
`localStorage.setItem` fails, because that would violate the reload-preserves
promise. The required correction is to attempt the storage write against a
candidate list first, then update in-memory state and render only after the
write succeeds. Nits cover ARIA linkage, locale timestamp rendering, and
keeping parse-failure recovery simple.

## Questions Requiring Sami Approval

- Should we install the official OpenAI Codex plugin in Claude Code?
- Should we register `codex mcp-server` as a project-scoped Claude MCP server?
- Should we register `claude mcp serve` inside Codex for the reverse-direction
  experiment?
- Should we install the official OpenAI Codex plugin in Claude Code for the
  stronger Claude-hosted Codex loop?
- After Experiment 1, should we run Experiment 2 with Claude-hosted Codex via
  MCP/plugin?

## Next Request To Claude

None active. Experiment 1 reached its four-turn cap. Do not start turn 005
unless Sami explicitly extends scope past the cap.

## Next Request To Codex

None active. Experiment 1 reached its four-turn cap. Do not start turn 005
unless Sami explicitly extends scope past the cap.
