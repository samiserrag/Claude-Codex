Previous experiment terminal turn: Experiment 2 / E2-005-claude-rescope.md

# E2-006 - Codex re-scope critique

## Agent
Codex

## Phase
critique

## Schema
Reuses the Experiment 1 turn-note schema explicitly, matching the rest
of E2. Includes Evidence Basis and Portability Findings sections
because both are active per E1-FIX-001 and used by E2-005. This is a
critique-only turn; it proposes no protocol edit and applies no
proposed-to-approved transition.

## Files touched this turn
- `.agent-handoff/turns/E2-006-codex-rescope-critique.md` (created)
- `.agent-handoff/COLLAB.md` (edited)

## Evidence Basis
- USER SAID: Sami authorized E2-006 as a critique-only Codex turn
  reviewing Claude consultant's E2-005 re-scope. Constraints: no code,
  no installs, no bridge enablement, no commits, no pushes; file edits
  limited to this turn note and a `COLLAB.md` handoff update.
- FILE VERIFIED: read `PROTOCOL.md`, current `COLLAB.md`, E2-001
  through E2-005, GPT 5.5 Pro response 003, prior-art digest 002, and
  `AGENTS.md` in the requested order before editing. Also read
  `docs/test-project.md` and `docs/chrome-runners.md` per `AGENTS.md`.
- FILE VERIFIED: E2-001 made manual handoff, inbox/outbox file
  exchange, cron polling, and webhooks a tiered async model; E2-005
  reclassifies that entire section as exploratory after prior-art
  evidence.
- FILE VERIFIED: prior-art digest 002 deeply read AgentBridge, The LLM
  Council, and CCB, and explicitly states none provides signed events,
  the Stopgate Rule, append-only auditable governance, or a trust
  registry.
- AGENT SUMMARY: GPT 5.5 Pro response 003 warned that transport and
  council layers are not greenfield, but identified the likely unique
  value as repo-local signed/auditable coordination state with explicit
  human approval gates.
- INFERENCE: transport prior art should narrow our implementation
  surface, not erase the file-based reference path that makes the
  governance layer portable and testable without installing a bridge.
- UNKNOWN: whether AgentBridge, CCB, Claude Squad, Ruflo, Codex Mate,
  OpenClaw, official Codex plugin paths, or The LLM Council behave
  safely in Sami's local environment without controlled installation.

## Decisions (binding)
- The E2-005 re-scope is directionally correct but not ready to proceed
  straight to Sami's Experiment 3 authorization without revision. The
  right product stance is governance-first, transport-composable,
  council-optional. The current re-scope overcorrects by demoting too
  much of E2-001 Section 3 and by letting Experiment 3 jump from
  transport selection to implementation without an event-envelope schema
  gate.
- "Compose, don't replace" is the correct architectural stance for the
  open-source kit. We should not pick AgentBridge as the universal
  product path because AgentBridge solves one live Claude<->Codex MCP
  shape, has fixed-port and single-thread assumptions, and is explicitly
  not a hardened security boundary. But Experiment 3 must still pick one
  primary spike path instead of keeping all transports equally live.
  My recommended spike path is file-based governance fixture first, then
  one live adapter evaluation only after schema and trust bootstrap are
  proven.
- E2-001 Section 3 should be split, not wholly reclassified as
  exploratory. Tier 0 manual handoff and Tier 1 inbox/outbox file
  exchange should remain the binding default/reference transport for the
  governance layer. Cron polling, webhooks, AgentBridge, CCB, tmux, and
  official plugin/MCP bridge paths should be exploratory opt-in
  adapters. External transports can replace delivery mechanics; they do
  not replace the durable signed envelope, import validation, quarantine,
  audit log, or file-based fallback.
- Council layer deferral is correct. Manual paste plus filed consultant
  responses should remain the default until a separate council experiment
  is authorized. The LLM Council is credible prior art for automating
  consultations, but it adds Python/runtime/API-key or local-CLI auth
  surfaces that are not needed before a trust-bootstrap spike.
- Experiment 3 should be reordered. Before implementation, run a narrow
  schema/spec turn or make schema definition the first E3 work item:
  canonical event envelope, signature coverage, trust-registry snapshot,
  file naming/storage convention, minimal fixtures, and acceptance
  checks. Then implement trust bootstrap only against the file-based
  reference path. Transport adapter selection can run in parallel only
  as read-only evaluation; it should not block schema-first governance
  work.
- The prior-art digest did not miss anything that invalidates the
  governance re-scope, but it underweights two categories for transport
  choice: official Codex plugin / `codex mcp-server` paths already named
  in this repo's protocol history, and control-plane projects such as
  Codex Mate or Ruflo that may influence packaging, dashboard, session,
  or safety UX. OpenHands, CrewAI, and LangGraph are broader framework
  displacement candidates; they are useful comparison points but should
  not drive this repo away from local Claude Code + Codex CLI workflows.
- Nothing in this turn approves E2 as protocol, approves Experiment 3,
  authorizes bridge setup, authorizes installs, authorizes code reuse,
  or moves any proposal to approved. Under the Stopgate Rule, only Sami
  can do that explicitly.

## Open questions for the other agent
- To Sami: do you want the E2-005 re-scope revised before you make any
  Experiment 3 authorization decision, or do you want to authorize only
  a read-only E3 schema/transport-scoping prelude with these blockers
  carried forward?
- To Sami: should the file-based default/reference path remain binding
  for portability, even if a later live adapter is selected for a
  bridge experiment?
- To Sami: should official OpenAI Codex plugin / `codex mcp-server`
  paths be included in the Experiment 3 transport-choice matrix before
  AgentBridge or CCB is selected as the live path?
- To Claude consultant: revise E2-005 so Section 3 is split into
  binding file-based reference transport versus exploratory automation
  and live-transport adapters.
- To Claude consultant: revise Experiment 3 ordering so event-envelope
  schema/spec comes before any implementation spike, and so live
  transport evaluation remains read-only until Sami authorizes install
  or bridge enablement.

## Blockers (must-fix before continuing)
1. E2-005 must stop treating all of E2-001 Section 3 as exploratory.
   Manual handoff and inbox/outbox file exchange should be restored as
   the binding default/reference path for the governance layer, with
   cron, webhooks, AgentBridge, CCB, tmux, and plugin/MCP bridges treated
   as optional adapters.
2. Experiment 3 must include an explicit event-envelope schema/spec gate
   before implementation. Trust bootstrap cannot be implemented
   coherently until the spike defines canonical envelope fields,
   signature coverage, trust-registry snapshot shape, file naming,
   minimal fixtures, and pass/fail acceptance checks.
3. The Experiment 3 transport-choice surface must be corrected before
   Sami authorizes it: include the official Codex plugin /
   `codex mcp-server` route alongside AgentBridge, CCB, tmux-style
   bridges, and the file-based default; keep CCB and Claude Squad
   license inspection as a pre-code-reuse gate, not as permission to
   install or vendor anything.

## Nits (suggested, not required)
- Implement later: add `rescope` to the Phase enum if the repo intends
  to keep using that phase value. E2-005 correctly flagged this as
  housekeeping, not a blocker.
- Implement in the next `COLLAB.md` cleanup: align the count of
  Experiment 3 decisions. E2-005 lists three concrete sub-decisions in
  Decisions but the handoff references five, mixing open questions with
  scoped sub-decisions.
- Defer: The LLM Council API-key tradeoff should move out of the
  Experiment 3 trust-bootstrap path and into a later council experiment
  unless Sami explicitly chooses to combine them.
- Defer: Codex Mate and Ruflo deserve a shallow "control-plane
  patterns only" read before open-source packaging claims are made, but
  not before a file-based schema and trust-bootstrap spike.
- Defer: The stale "Original Hard-Stop Note" in `COLLAB.md` can be
  removed in housekeeping. I did not remove it because this turn's edit
  scope is critique and handoff.

## Browser verification
- Tool used: N/A
- URL or file path opened: N/A
- Action: N/A
- Visible outcome: N/A
- Console/network issues: N/A

Reason: critique-only architecture turn. No app behavior, browser
surface, runtime bridge, install path, or automation path changed.

## Portability Findings
- Repo-local assumptions: file-based manual handoff and inbox/outbox
  exchange remain the most portable reference path because they require
  only repo files and Git review. Removing them from binding scope would
  make the governance layer harder to verify without installing a
  transport.
- Machine/local-tool assumptions: live transports carry different local
  requirements: AgentBridge uses Bun and fixed localhost ports; CCB uses
  tmux/Python and project-local `.ccb`; The LLM Council uses Python and
  either API keys or authenticated local CLIs; official plugin/MCP paths
  may require Claude/Codex config changes. All remain stopgated.
- Browser/connector assumptions: none introduced. Chrome-first browser
  QA remains relevant only when app behavior or browser surfaces change.
- Any workaround used: none.

## Handoff
- Next agent: Claude consultant
- Specific ask: revise E2-005 before Sami is asked to authorize
  Experiment 3. Keep the governance-only re-scope, but (1) restore
  manual/file inbox-outbox as the binding default/reference transport,
  with cron/webhooks/live bridges as optional adapters; (2) add an
  event-envelope schema/spec gate before trust-bootstrap implementation;
  and (3) include official Codex plugin / `codex mcp-server` in the
  transport-choice matrix alongside AgentBridge, CCB, tmux-style
  bridges, and the file-based default. Do not implement, install, enable
  bridges, edit global config, commit, push, open a PR, or treat any
  proposal as approved.
