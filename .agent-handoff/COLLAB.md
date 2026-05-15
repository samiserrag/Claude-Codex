# Collaboration State

## Goal

Prove a practical two-way Claude Code <-> Codex collaboration loop in this repo.
The sample build is a small static Decision Ledger app.

## Current Owner

Sami (Experiment 3 authorization decision)

## Current Phase

E2-008 Codex acceptance filed (2026-05-15). Codex accepts E2-007 as
adequately addressing all three E2-006 blockers. Forward interpretation:
- File-based Tier 0 (manual handoff) and Tier 1 (inbox/outbox) restored as
  the binding canonical reference transport. Cron, webhooks, AgentBridge,
  CCB, tmux variants, official Codex plugin, and `codex mcp-server` are
  exploratory opt-in adapters that must satisfy the same governance
  contract.
- Experiment 3 reordered: E3-A event-envelope schema/spec (design only),
  then E3-B trust-bootstrap implementation against the binding reference
  path only, with E3-C adapter evaluation (read-only) running in parallel,
  followed by E3-D Sami adapter selection.
- The LLM Council adoption moved out of Experiment 3 entirely; becomes a
  separate future council experiment.
No E2-006 critique blockers remain. Experiment 3 is not authorized by this
acceptance; Sami must explicitly authorize E3-A or any later E3 work under
the active Stopgate Rule. `COLLAB.md` remains transitional pending the new
state model.

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

## E1 Historical Constraints / Still-Active Approval Stopgates

- Do not install dependencies without Sami's explicit approval.
- Do not commit, push, merge, or create a PR without Sami's explicit approval.
- Do not use dangerous sandbox or approval-bypass modes.
- Do not modify global Claude/Codex config without Sami's explicit approval.
- Stop after the four Experiment 1 turn notes unless Sami says to continue.

## E1 Historical Decisions Made

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

## E1 Historical Considered And Rejected

- Rejected a dependency-heavy app because setup noise would obscure the workflow
  test.
- Rejected a fully free-running loop as the first test because approval and
  context boundaries need to be observed before automation is trusted.
- Rejected bridge use in Experiment 1 because the file-based contract needs a
  baseline before MCP/plugin routing is evaluated.
- Rejected implementing the full Decision Ledger feature list in Experiment 1
  because scope noise would obscure whether the collaboration loop works.

## E1 Historical Proposed File Ownership

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
- E2-003 revision turn added at
  `.agent-handoff/turns/E2-003-codex-revision.md`.
- E2-004 second critique turn added at
  `.agent-handoff/turns/E2-004-claude-second-critique.md`.
- Round-3 consultation: GPT 5.5 Pro response 003 at
  `.agent-handoff/consultants/gpt-5.5-pro-response-003.md` and
  Claude consultant prior-art deeper audit at
  `.agent-handoff/digests/002-prior-art-audit.md`. Both pushed to
  `origin/main` in commit `b6e6999`.
- E2-005 re-scope turn added at
  `.agent-handoff/turns/E2-005-claude-rescope.md`. Locally
  uncommitted at filing; awaiting Sami's commit/push authorization.
- E2-006 Codex re-scope critique added at
  `.agent-handoff/turns/E2-006-codex-rescope-critique.md`. Locally
  uncommitted at filing; requests Claude consultant revision before
  Experiment 3 authorization.
- Round-4 consultation: GPT 5.5 Pro response 004 at
  `.agent-handoff/consultants/gpt-5.5-pro-response-004.md` (trifecta
  vs gstack skill catalog framing; council skill pack as future
  Experiment 4 scope). Pushed to `origin/main` in commit `75eeb5a`.
- E2-007 Claude rescope revision added at
  `.agent-handoff/turns/E2-007-claude-rescope-revision.md`. Accepts
  all three E2-006 blockers, splits E2-001 §3 into binding reference
  + exploratory adapters, reorders Experiment 3 with E3-A schema spec
  before E3-B trust bootstrap. Locally uncommitted at filing;
  awaiting Sami's commit/push authorization.
- E2-008 Codex rescope acceptance added at
  `.agent-handoff/turns/E2-008-codex-rescope-acceptance.md`. Accepts
  E2-007 as adequately resolving all three E2-006 blockers. Hands off
  to Sami for the Experiment 3 authorization decision. Locally
  uncommitted at filing; awaiting Sami's commit/push authorization.

## Latest Claude Response

E2-007 rescope revision written at
`.agent-handoff/turns/E2-007-claude-rescope-revision.md` accepting all
three E2-006 blockers. (1) E2-001 §3 split into binding reference path
(Tier 0 manual handoff + Tier 1 inbox/outbox file exchange) and
exploratory opt-in adapters (Tier 2 cron, Tier 3 webhooks, AgentBridge,
CCB, tmux variants, official Codex plugin, `codex mcp-server`). External
transports replace delivery mechanics but not the durable signed
envelope, import validation, quarantine, audit log, or human-readable
fallback. (2) Experiment 3 reordered: E3-A event-envelope schema/spec
(design only — canonical envelope fields, JSON serialization, signature
coverage, registry snapshot shape, file naming, fixtures, acceptance
checks), then E3-B trust-bootstrap implementation against the binding
reference path only, with E3-C adapter evaluation (read-only license
inspection on CCB and Claude Squad, plus read-only evaluation of
AgentBridge, CCB, tmux variants, official Codex plugin and
`codex mcp-server`) running in parallel, followed by E3-D Sami adapter
selection per scoped sub-experiment. (3) Transport-choice matrix now
includes official Codex plugin in Claude Code and `codex mcp-server`
project-scoped MCP entry alongside AgentBridge, CCB, tmux variants, and
the file-based default. The LLM Council adoption moved out of
Experiment 3 to a separate future council experiment. All five E2-006
nits addressed in writing (deferred housekeeping for Phase enum,
sub-decision count alignment, council API-key tradeoff, Codex Mate /
Ruflo control-plane read, stale "Original Hard-Stop Note" cleanup).

## Earlier Claude Response

E2-005 re-scope written at `.agent-handoff/turns/E2-005-claude-rescope.md`
after round-3 prior-art consultation. Narrowed E2 to governance-only
and deferred transport+council to Experiment 3. Codex E2-006 critique
identified three blockers: §3 over-demoted, missing schema gate before
trust bootstrap, missing Codex-plugin/mcp-server in transport matrix.
All three accepted and addressed by E2-007.

## Latest Codex Response

E2-008 acceptance written at
`.agent-handoff/turns/E2-008-codex-rescope-acceptance.md`. Codex accepts
E2-007 as adequately resolving all three E2-006 blockers: Tier 0 manual
handoff and Tier 1 inbox/outbox are restored as the binding canonical
reference transport; E3-A event-envelope schema/spec now precedes E3-B
trust-bootstrap implementation; and the transport matrix now includes the
official Codex plugin in Claude Code and `codex mcp-server` as a
project-scoped Claude MCP path alongside file-based, cron, webhook,
AgentBridge, CCB, and tmux-style options. No E2-006 blockers remain. This
does not authorize Experiment 3 work; Sami must explicitly authorize E3-A or
any later E3 step. No code, installs, bridge enablement, git operations,
global config changes, protocol edits, trust files, keys, directories, or
automation were created.

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

- Do you authorize E3-A as a design-only event-envelope schema/spec turn, with
  no implementation, installs, bridge enablement, commits, pushes, or protocol
  approval implied?
- Should the official Codex plugin and `codex mcp-server` paths receive the
  same read-only license/security inspection as CCB and Claude Squad before
  any adapter selection or configuration change is considered?
- Later only, if separately authorized: should we install the official OpenAI
  Codex plugin in Claude Code?
- Later only, if separately authorized: should we register `codex mcp-server`
  as a project-scoped Claude MCP server?
- Later only, if separately authorized: should we register `claude mcp serve`
  inside Codex for the reverse-direction experiment?

## Next Request To Claude

None active. E2-007 revision is accepted by Codex in E2-008.

## Next Request To Codex

None active. Hard stop after E2-008 unless Sami explicitly authorizes
the next turn.

## Next Request To Sami

Decide whether to authorize Experiment 3 E3-A as a design-only
event-envelope schema/spec turn. Also decide whether official Codex
plugin / `codex mcp-server` paths should receive the same read-only
license/security inspection standard as CCB and Claude Squad before
adapter selection. Do not treat Codex's E2-008 acceptance as
Experiment 3 authorization.
