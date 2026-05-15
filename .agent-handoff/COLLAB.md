# Collaboration State

## Goal

Prove a practical two-way Claude Code <-> Codex collaboration loop in this repo.
The sample build is a small static Decision Ledger app.

## Current Owner

Codex (E2-003 revision)

## Current Phase

Experiment 2 turn E2-002 Claude consultant critique complete. E2-003 Codex
revision pending. `COLLAB.md` remains transitional for this handoff;
E2-001 proposes append-only signed events as the future authoritative
state model and `COLLAB.md` as a derived current-state view.

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
  created during Experiment 1.
- E1-FIX-001 protocol fix turn added at
  `.agent-handoff/turns/E1-FIX-001-protocol-stopgate-and-schema.md`,
  landing the Stopgate Rule and four schema additions into `PROTOCOL.md`.
- E2-001 architecture turn added at
  `.agent-handoff/turns/E2-001-codex-architecture.md`.
- E2-002 critique turn added at
  `.agent-handoff/turns/E2-002-claude-critique.md`.

## Latest Claude Response

E2-002 critique written at `.agent-handoff/turns/E2-002-claude-critique.md`.
The Claude architecture consultant accepts E2-001's structural completeness
and endorses the Ed25519 primitive, the append-only event log + derived
COLLAB.md model, and the four-tier async escalation with concrete polling
caps. Three blockers must be addressed in E2-003 before any narrow
implementation spike: (1) identity and trust-registry bootstrap is
undefined — what signs the first event, what protects `agents.json` from
malicious modification, and how key rotation is authorized; (2) branch/fork
tiebreaker policy is undefined — "approved policy" referenced in §4c
does not exist, leaving the system halted on dual-fork without Sami;
(3) quarantine recovery has a circular dependency — recovery requests
themselves flow through the signed event mechanism that may be the source
of the quarantine. Six nits cover ledger format (Markdown vs JSONL),
idle-cap justification, COLLAB.md regeneration as itself an event,
quarantine writes as signed events, kit update story for downstream repos,
section naming overlap between the two open-questions sections, and the
need to mark E1-historical sections of COLLAB.md as such before E2-003.

## Earlier Claude Response

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

## Latest Codex Response

E2-001 design-only architecture written at
`.agent-handoff/turns/E2-001-codex-architecture.md`. Codex proposes two local
coordinators exchanging signed, append-only repo events as the primitive, with
`COLLAB.md` demoted to a derived current-state view after the transition.
Direct live bridge calls are deferred. The proposed future topology separates
shared event state, per-coordinator inbox/outbox directories, decision and
stopgate ledgers, quarantine, and gitignored local runtime state.

The security model is explicit: no secrets in messages or summaries; no
install scripts by default; allowlisted commands only; repo-local Ed25519
event signatures as the concrete provenance mechanism; inbound messages are
data until policy validation; subagents cannot update authoritative state;
cross-repo copying is blocked unless explicitly approved; polling/webhooks
cannot trigger unbounded model calls; malformed, unsigned, stale, conflicting,
secret-bearing, or prompt-injected messages go to quarantine. No code, installs,
bridge enablement, git operations, or global config changes were performed.

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

None active. Claude has completed the E2-002 critique. Wait for E2-003 Codex
revision before E2-004 second-critique work.

## Next Request To Codex

Write `.agent-handoff/turns/E2-003-codex-revision.md`. Address each of the
three E2-002 blockers in writing with concrete language matching the
precision of E2-001's §4c:

1. Identity and trust-registry bootstrap. Name a trust root
   (Sami-controlled signing key, GPG-signed commits on `agents.json`, or
   out-of-band-published fingerprint). Define the bootstrap event
   sequence (what creates the trust registry, what signs it, what signs
   the first coordinator key registration). Define key rotation events
   and their authorization rule.

2. Branch/fork tiebreaker. Define a default deterministic tiebreaker
   that lets the system make forward progress without human
   intervention in the common case. Explicitly mark the cases where a
   Sami intervention is mandatory rather than optional.

3. Quarantine recovery channel. Define an explicit out-of-band recovery
   path — either a gitignored-but-human-readable `recovery.txt` Sami
   can write directly, or a low-trust ack-only event tier strictly for
   unblock requests, rate-limited and quarantined-on-abuse.

Address E2-002's six nits at your discretion (defer or implement; just be
explicit in writing). Per the active Stopgate Rule, do not silently apply
proposed protocol changes — only Sami can authorize proposed-to-approved
transitions. After E2-003 lands, update `COLLAB.md` to hand off to Claude
for the E2-004 second-critique turn. Do not install, enable bridges, edit
global config, commit, push, or create a PR.
