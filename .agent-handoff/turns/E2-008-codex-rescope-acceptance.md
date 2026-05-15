Previous experiment terminal turn: Experiment 2 / E2-007-claude-rescope-revision.md

# E2-008 - Codex re-scope acceptance

## Agent
Codex

## Phase
critique

## Schema
Reuses the Experiment 1 turn-note schema explicitly. Includes Evidence
Basis and Portability Findings sections per the active PROTOCOL.md
additions. This is an acceptance-only critique turn; it does not
approve Experiment 3, apply protocol changes, install tools, enable
bridges, commit, push, or move any proposal to approved.

## Files touched this turn
- `.agent-handoff/turns/E2-008-codex-rescope-acceptance.md` (created)
- `.agent-handoff/COLLAB.md` (edited)

## Decisions (binding)
- E2-007 is accepted as adequately addressing all three E2-006
  blockers. No second critique blockers remain.
- E2-006 Blocker 1 is resolved: E2-007 restores manual handoff
  (Tier 0) and inbox/outbox file exchange (Tier 1) as the binding
  canonical reference transport. Cron, webhooks, AgentBridge, CCB,
  tmux variants, the official Codex plugin, and `codex mcp-server`
  are correctly treated as exploratory opt-in adapters that must
  satisfy the same signed-envelope, validation, quarantine, audit, and
  approval-gate contract.
- E2-006 Blocker 2 is resolved: E2-007 puts E3-A event-envelope
  schema/spec before E3-B trust-bootstrap implementation. The
  schema-first ordering is required and now explicit.
- E2-006 Blocker 3 is resolved: E2-007's transport-choice matrix now
  includes the official Codex plugin in Claude Code and
  `codex mcp-server` as a project-scoped Claude MCP path alongside
  file-based Tier 0/Tier 1, cron, webhooks, AgentBridge, CCB, and
  tmux-style variants.
- The binding reference path, schema-first ordering, and corrected
  transport matrix meet my E2-006 requirements. E2-007 is sufficient
  for Sami to make the next authorization decision.
- This acceptance does not authorize Experiment 3 work. Under the
  active Stopgate Rule, only Sami can authorize E3-A or any later
  proposed-to-approved transition.

## Open questions for the other agent
- To Sami: do you authorize E3-A as a design-only event-envelope
  schema/spec turn, with no implementation, installs, bridge
  enablement, commits, pushes, or protocol approval implied?
- To Sami: should the official Codex plugin and `codex mcp-server`
  paths receive the same read-only license/security inspection as CCB
  and Claude Squad before any adapter selection or configuration
  change is considered?

## Blockers (must-fix before continuing)
- None from E2-006 remain. The remaining gate is Sami's explicit
  authorization decision for any E3 work.

## Nits (suggested, not required)
- Defer: add `rescope` to the PROTOCOL.md Phase enum in a small
  housekeeping turn if the repo keeps using that phase value.
- Defer: clean stale or duplicated E1/E2 historical handoff text from
  COLLAB.md once Sami chooses the next experiment path.

## Browser verification
- Tool used: N/A
- URL or file path opened: N/A
- Action: N/A
- Visible outcome: N/A
- Console/network issues: N/A

Reason: critique-only acceptance turn. No app behavior, browser
surface, runtime bridge, install path, or automation path changed.

## Evidence Basis
- USER SAID: Sami requested optional E2-008 critique-only or
  acceptance-only review of E2-007, with edits limited to this named
  turn note and COLLAB.md, and with no code, installs, bridge
  enablement, commits, pushes, or Experiment 3 authorization.
- FILE VERIFIED: PROTOCOL.md contains the active Stopgate Rule: only
  Sami can move proposed items to approved.
- FILE VERIFIED: E2-006 required three blocker revisions: restore
  file-based manual handoff and inbox/outbox as binding reference,
  add event-envelope schema/spec before trust bootstrap, and include
  official Codex plugin / `codex mcp-server` in the transport matrix.
- FILE VERIFIED: E2-007 accepts all three blockers and revises the
  forward interpretation with Tier 0/Tier 1 as binding reference,
  E3-A schema/spec before E3-B implementation, and a transport matrix
  containing official Codex plugin and `codex mcp-server`.
- FILE VERIFIED: AGENTS.md requires COLLAB.md as shared source of
  truth, append-only turn notes, Chrome-first browser validation when
  browser QA is needed, and no installs/commits/pushes without Sami's
  approval.
- INFERENCE: no further architecture critique is needed before Sami
  decides whether to authorize E3-A.
- UNKNOWN: whether Sami wants E3-A to begin now, and whether official
  first-party Codex paths need the same read-only inspection standard
  as third-party adapter candidates.

## Portability Findings
- Repo-local assumptions: E2-007 strengthens portability by keeping
  manual handoff and inbox/outbox files as the standalone reference
  path.
- Machine/local-tool assumptions: E3-A can remain design-only and
  avoid machine-local setup. Any later adapter evaluation must keep
  installs and configuration changes stopgated.
- Browser/connector assumptions: none introduced; Chrome-first browser
  QA remains relevant only for browser behavior or surfaces.
- Any workaround used: none.

## Handoff
- Next agent: Sami
- Specific ask: decide whether to authorize Experiment 3 E3-A as a
  design-only event-envelope schema/spec turn, and decide whether
  official Codex plugin / `codex mcp-server` paths should receive the
  same read-only license/security inspection standard as CCB and
  Claude Squad before adapter selection. Do not treat this acceptance
  as Experiment 3 authorization.
