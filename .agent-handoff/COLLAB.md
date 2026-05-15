# Collaboration State

## Goal

Prove a practical two-way Claude Code <-> Codex collaboration loop in this repo.
The sample build is a small static Decision Ledger app.

## Current Owner

Sami (E2 design retrospective and Experiment 3 authorization decision)

## Current Phase

Experiment 2 re-scoped after round-3 prior-art consultation. Four-turn design
rhythm (E2-001 through E2-004) remains valid as filed. E2-005 re-scope
(2026-05-15) narrows binding E2 to the governance layer only: state model,
security model, trust bootstrap, fork tiebreaker, recovery channel, sync
primitives, token/friction budget, portability, open-source packaging.
E2-001 §3 async tier model is reclassified as exploratory (transport
choice deferred to Experiment 3 scoping). The "compose, don't replace"
architecture is the working model: users pick a transport (file-based
default, AgentBridge for live MCP, CCB for tmux) and a council layer
(manual paste default, The LLM Council for automated). Our protocol is
the governance contract under both. Sami's authorization is pending on
five Experiment 3 sub-decisions enumerated in E2-005 §Decisions.
`COLLAB.md` remains transitional pending the new state model.

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

## Latest Claude Response

E2-005 re-scope written at `.agent-handoff/turns/E2-005-claude-rescope.md`
after round-3 prior-art consultation surfaced significant overlap with
existing open-source projects (AgentBridge for Claude↔Codex MCP transport;
The LLM Council for multi-model adversarial council; CCB for tmux-based
multi-agent CLI teams). Forward, binding E2 architecture is narrowed to
the governance layer only: append-only signed event log, derived COLLAB.md,
seven-section security model, Sami-controlled Ed25519 trust bootstrap with
root-signed registry and coordinator possession proofs, lowest-event-hash
benign-fork tiebreaker with Sami-mandatory exception list, gitignored
recovery.txt channel, sync primitives, token/friction budget, portability,
open-source packaging. E2-001 §3 async tier model (inbox/outbox, cron,
webhooks) is reclassified exploratory and deferred to Experiment 3
transport selection. Council layer (manual paste vs The LLM Council)
also deferred. Experiment 3 is now scoped to: (1) license inspection on
CCB and Claude Squad, (2) transport choice between file-based default and
a live transport, (3) trust-bootstrap-only implementation spike. None of
the audited candidates implement signed events, the Stopgate Rule, or
append-only auditable governance — that is genuinely our unique value.
Five Experiment 3 sub-decisions await Sami's authorization.

## Earlier Claude Response

E2-004 second critique written at
`.agent-handoff/turns/E2-004-claude-second-critique.md`. The Claude
architecture consultant cleared all three E2-002 blockers as resolved
by E2-003 and closed the four-turn E2 design rhythm. Architecture
stack stood as proposed protocol pending Sami's approval — superseded
in scope by E2-005 re-scope after round-3 prior-art findings.

## Latest Codex Response

E2-003 design-only revision written at
`.agent-handoff/turns/E2-003-codex-revision.md`. Codex revised E2-001 in
response to the three E2-002 blockers. The proposed trust root is a
Sami-controlled Ed25519 root signing key; the first accepted event is a
root-signed `trust.registry.initialized` genesis event; first coordinator key
registrations are root-signed and coordinator-counter-signed; normal rotation
requires old key, new key, and root signatures; emergency rotation requires
the out-of-band recovery channel plus root-signed revocation and replacement.

The proposed branch/fork default tiebreaker is lowest event hash wins, limited
to benign same-coordinator forks that do not touch trust, stopgates, security,
secrets, bridge enablement, global config, git operations, deletion, or
human-only approvals. Sami intervention remains mandatory for trust/key
changes, proposed-to-approved transitions, stopgate changes, security
incidents, suspected compromise, prompt injection, hash collision, repo
identity mismatch, non-ancestor branch lineage, repeated fork storms, and all
Stopgate Rule actions.

The proposed quarantine recovery channel is
`.agent-handoff/local/recovery/recovery.txt`: gitignored, human-writable,
low-trust, strict `RECOVERY v1` key/value format, and non-authorizing. Abuse
of the recovery channel is itself quarantined or paused for Sami inspection.
All E2-002 nit bullets were addressed in writing, including JSONL ledgers with
generated Markdown views, configurable idle-token cap rationale, signed
`COLLAB.md` regeneration events, signed quarantine mutations, downstream kit
update rules, section naming cleanup, and E1 historical labels in this
`COLLAB.md` update. No code, installs, bridge enablement, git operations,
global config changes, trust files, keys, directories, or automation were
created.

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

None active. The four-turn E2 design rhythm is complete. Claude waits
for Sami's authorization decision before any further turn.

## Next Request To Codex

None active. The four-turn E2 design rhythm is complete. Codex waits
for Sami's authorization decision before any further turn.

## Original Hard-Stop Note

(Preserved from E2-003 handoff for traceability.) Hard stop after E2-003;
wait for Claude's E2-004 second critique
before any further Codex work.
