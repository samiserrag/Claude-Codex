# Claude-Codex Agent Dashboard

This dashboard is a human-readable operational view for current handoff state.
It is not durable source of truth and does not grant approval.

## Authority / COLLAB.md Wins

- `.agent-handoff/COLLAB.md` remains authoritative.
- On conflict, `COLLAB.md` wins.
- If this dashboard is stale and dashboard edits are in scope, refresh it
  before relying on it.
- If dashboard edits are out of scope, record the mismatch in the current turn
  note and in the Human Decision Packet / artifact visibility fields.

## Dashboard Freshness Timing

Refresh this dashboard before reliance and again at handoff when these change:
next actor, active role, human-attention state, artifact visibility, latest
artifact, next safe action, or dashboard-vs-COLLAB conflict status.

## Current Coordination State

| Field | Current value |
| --- | --- |
| Current coordinator | Codex for E5-Q live dashboard adoption test |
| Current builder | Codex |
| Current advisor | None active |
| Current auditor | Claude for E5-Q critique after local handoff |
| Current next actor | Claude |
| Active role per agent | Codex: builder/handoff; Claude: next auditor; Sami: final approver |
| Secondary role / lens | Dashboard adoption and handoff-friction lens |
| Subagents active | None |

## Human Attention State

Current state: `none`

No Sami answer is needed during E5-Q. After Claude critique, Sami may decide
whether to accept, request fixes, or authorize staging/commit/push.

## Human Decision Packet

| Field | Current value |
| --- | --- |
| State | none |
| Decision needed from Sami | None now |
| Why Sami is needed | N/A until after E5-Q critique |
| Consensus recommendation | None yet; await critique |
| Divergent opinions | None recorded for E5-Q |
| Options | N/A |
| Risk / tradeoff | Live dashboard can drift from COLLAB; mitigated by authority and freshness rules |
| Exact approval text, if approval is required | N/A |
| Technical packet | `.agent-handoff/turns/E5-Q-codex-live-dashboard-adoption-test.md` |

## Technical Review Packet

Allowed statuses: `not prepared`, `prepared local-only`, `sent`, `responded`,
`incorporated`, `summarized`.

| Field | Current value |
| --- | --- |
| Needed | yes |
| Intended reviewer | Claude |
| Question | Does this first live dashboard stay concise, accurate, operational-only, and subordinate to COLLAB.md? |
| Evidence paths | `.agent-handoff/DASHBOARD.md`; `.agent-handoff/COLLAB.md`; `.agent-handoff/turns/E5-Q-codex-live-dashboard-adoption-test.md` |
| Constraints | No automation, model calls, MCP/plugins/bridges, CommonGround, cron/timers/webhooks/launch agents, kit edits, root-doc edits, product/runtime changes, pilot touch, or live Open Mic Colorado touch |
| Output requested | E5-Q critique with blockers, nits, and accept/fix recommendation |
| Status | prepared local-only |

## Artifact Visibility

Current visibility: `local-only`

- Latest pushed commit: `5c1f79b E5-P Claude critique: accept alert-state helper script`
- Latest local artifacts: `.agent-handoff/DASHBOARD.md`,
  `.agent-handoff/COLLAB.md`,
  `.agent-handoff/turns/E5-Q-codex-live-dashboard-adoption-test.md`
- If a non-local reviewer needs these local artifacts, the next safe action is
  sharing/pushing/exporting, not implementation.

## Local-Only / Duplicate-Noise Status

- Approved local-only artifacts: E5-Q allowed files listed above.
- Pre-existing duplicate/noise files: none observed at E5-Q start.
- Unrelated local artifacts: none observed at E5-Q start.
- Unknown local artifacts: none observed at E5-Q start.

## Next Safe Action

Claude critiques E5-Q using the local dashboard, COLLAB update, and turn note.
No further implementation, staging, commit, push, automation, or runtime setup
is authorized by E5-Q.
