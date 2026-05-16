Previous experiment terminal turn: Experiment 3 / E3-D-codex-adapter-selection.md

# E3-D Claude consultant critique

## Agent
Claude

## Phase
critique

## Schema
Reuses the Experiment 1 turn-note schema explicitly. Includes
Evidence Basis and Portability Findings sections per the active
PROTOCOL.md additions. Critique-only turn over an adapter-selection
design turn. Does not approve any adapter wrapper, install, or move
any proposal to approved.

## Files touched this turn
- `.agent-handoff/turns/E3-D-claude-critique.md` (created)
- `.agent-handoff/COLLAB.md` (edited)

## Evidence Basis
- USER SAID: Sami authorized E3-D on 2026-05-15 as adapter-selection
  design only and the Claude consultant is the next critique agent
  per E3-D's Handoff section.
- FILE VERIFIED: read E3-D in full from
  `.agent-handoff/turns/E3-D-codex-adapter-selection.md`. Cross-
  referenced against E3-A schema (envelope contract), E3-B
  trust-bootstrap implementation (binding reference), E3-B-FIX-001
  verifier hardening, E3-C inspection, and the round-3 prior-art
  digest.
- AGENT SUMMARY: E3-D endorses Sami's framing recommendation
  (direct codex mcp-server first; official Codex plugin second
  with Stop-hook isolated), adopts the consultant's six-method
  allow-list verbatim, and produces a substantive wrapper
  specification covering preconditions, allow-list, signed-event
  boundary, approval surfacing, rollback, and verification evidence.
- INFERENCE: the wrapper specification is the right shape and the
  right scope for an adapter-selection design turn. The remaining
  gaps are identity/signature-semantics clarifications that must be
  crisp before any future direct-MCP enablement sub-experiment, not
  before E3-D acceptance.
- UNKNOWN: I have not modeled the actual direct-MCP wrapper
  process behavior. The critique is over the specification text,
  not over a running wrapper.

## Decisions (binding)

- E3-D is accepted as a successful adapter-selection design-only
  turn. Zero blockers stand against this critique.
- Direct codex mcp-server wrapper as first future enablement
  candidate is endorsed. Codex's framing — "not a risk downgrade,
  but the cleaner first wrapper target because the wrapper can sit
  at a small method boundary" — is correct and improves on Sami's
  original framing without rejecting it.
- The six-method allow-list (`thread.start`, `thread.continue`,
  `turn.start`, `turn.read`, `turn.cancel`, `status.read`) is
  endorsed. Starting broader would blur the experiment's central
  question of whether the wrapper boundary is enforceable.
- The blocked-by-default surface enumeration (filesystem, command
  execution, config, account/auth, process spawning, model
  management, app/skill/hook/plugin/extension, experimental/
  unknown, sandbox/network/approval/global-config-policy) is
  endorsed.
- The signed-event import/export boundary (outbound: signed
  envelope first, transport second; inbound: parse-validate-verify
  before actionable) is endorsed and matches E3-A/E3-B contracts.
- The 9-step rollback procedure is endorsed, especially the
  defensive "plugin install during direct-MCP rollback = unexpected
  precondition failure, stop for Sami rather than improvise
  global/plugin-state edits" rule.
- The 10-item verification evidence list is endorsed — it's what an
  engineering review would actually require.
- The Stop-hook isolation as a separate sub-experiment from basic
  plugin enablement is endorsed.
- Per the active Stopgate Rule, this critique does not authorize
  any adapter enablement. Each adapter enablement remains its own
  scoped sub-experiment requiring Sami's explicit per-adapter
  approval.

## Answers to Codex's four open questions

1. **Direct MCP first despite higher raw attack surface because
   cleaner primitive for a wrapper proof?** Yes. The whole point
   of starting with the lower primitive is provable boundary
   enforcement. The plugin's bundled behaviors (slash commands,
   rescue subagent, optional Stop hook, inherited Codex config)
   hide where the wrapper boundary actually is. Direct MCP makes
   the boundary explicit.

2. **Missing method categories in blocked-by-default?** A few
   worth adding to the explicit deny list:
   - **Server-initiated notifications/event subscriptions** —
     Codex MCP can push events to the client. Any push that isn't
     a signed envelope must be rejected at the wrapper boundary.
   - **Session/connection lifecycle methods** beyond `status.read`
     (e.g., session list, session end, reconnect). These can leak
     state or coerce Codex side-effects.
   - **Telemetry/logging methods** if Codex MCP exposes any. These
     could exfiltrate context.
   - The catch-all "any unrecognized or experimental method" rule
     covers all of the above implicitly, but explicit enumeration
     hardens reviewer audit.

3. **Registered Claude or wrapper coordinator before actionable
   cross-agent flow?** Yes, this is a real precondition. See nit 1
   below — E3-D should make the Claude/wrapper coordinator
   registration step explicit in the precondition list, with a
   clear answer to "who signs Claude's outbound events to Codex
   through the wrapper."

4. **Rollback steps requiring global config edits?** No, the
   procedure's "Do not edit global Claude or Codex config unless
   Sami separately authorized that exact rollback step" is the
   right rule. If a future incident requires global cleanup
   (e.g., a stuck `~/.codex/` auth token), that's a separate
   incident response with its own scoped Sami authorization, not
   part of the direct-MCP rollback path.

## Strengths worth naming explicitly

- **Codex correctly disagreed with Sami's "riskier" framing** while
  endorsing the same conclusion. "Direct MCP is not a risk
  downgrade. It is selected first because the wrapper can sit at a
  small method boundary." That's the kind of honest pushback the
  two-agent review pattern is designed to surface.
- **Verification evidence list reads like an engineering review
  acceptance test plan.** Unit tests for allow-list, launch
  policy, envelope construction, import rejection, round-trip,
  allow-list integration, approval mapping, quarantine, rollback
  dry-run, plus operator evidence. This is what "safe to enable"
  means concretely.
- **Plugin install during direct-MCP rollback = unexpected
  precondition failure rule** is the right defensive posture. Many
  rollback procedures improvise across unrelated state; E3-D
  refuses to and stops for Sami.
- **Stop-hook isolation breakdown** correctly identifies that the
  Stop hook changes session-end behavior + creates feedback loops,
  so it deserves its own evidence and rollback path independent of
  basic plugin functionality.
- **Sami's open-questions list is genuinely actionable.** Nine
  specific decisions enumerated with no padding. Saves a future
  back-and-forth.

## Open questions for Sami

- Codex routed nine open questions to you in §"Open questions for
  Sami". The answers will gate the future direct-MCP enablement
  sub-experiment. The two I'd prioritize: (a) what Sami-visible
  approval UX is required before the wrapper may answer Codex
  approval requests (signed event only vs signed event + COLLAB
  summary vs signed event + explicit turn-note handoff); (b)
  whether the first enablement test is read-only or write-capable.
- Do you want the five nits below addressed in an E3-D-FIX-001
  housekeeping turn before any future direct-MCP enablement
  sub-experiment, or as in-line clarifications inside that
  sub-experiment's design turn?

## Blockers (must-fix before continuing)
- None. E3-D is acceptable as filed.

## Nits (suggested, not required for E3-D acceptance, but
  must be resolved before any future direct-MCP enablement)

1. **Claude/wrapper coordinator registration must be explicit in
   the precondition list.** E3-D §Preconditions §5 says "If Claude
   or a wrapper coordinator will send tasks to Codex, that
   coordinator needs a Sami-rooted registration and possession
   proof before its events can be accepted as actionable." This is
   correct but ambiguous about WHEN the registration happens. The
   future direct-MCP enablement sub-experiment must answer: is
   Claude coordinator registration a sub-step of direct-MCP
   enablement, or a separate prior trust turn? Recommend separate
   prior trust turn so trust-bootstrap and adapter-enablement
   stay independently testable.

2. **"Wrapper coordinator" identity needs a design choice.** E3-D
   uses "Claude or a wrapper coordinator" interchangeably. Two
   distinct designs are possible: (a) the wrapper is transport-
   only and requires Claude's coordinator key to sign Claude's
   outbound events; (b) the wrapper is itself a coordinator
   (`wrapper-codex-mcp`) with its own Sami-rooted keypair, signing
   "Claude said this via me" events. (a) is simpler but requires
   Claude's keys to be accessible to the wrapper process; (b)
   adds an attestation layer but creates trust separation. Pick
   one; document why. My preference: (b), because it lets the
   wrapper process run with its own scoped credentials while
   Claude's coordinator key stays where Claude controls it.

3. **Inbound signature semantics need clarification.** Codex (the
   tool, not the coordinator) does not natively sign its MCP
   responses with E3-A envelopes. So inbound results must either
   (a) be wrapped by something that does sign (the wrapper, per
   nit 2 design (b)), or (b) be signed retroactively by an
   observer with the caveat that the observer is attesting "this
   is what Codex said" rather than Codex cryptographically
   committing. The wrapper-observed event idea in §Signed-event
   import/export boundary handles this but should be sharpened:
   the wrapper-observed envelope must explicitly mark itself as
   `attested_by_observer`, not as a Codex-signed event.

4. **Approval timing race.** When the wrapper responds "allow" to
   a Codex approval request, the actual side-effect (filesystem
   write, command execution) may happen synchronously inside the
   MCP response window. The flow must be: signed approval event
   accepted append-only → wrapper sends allow → Codex acts. If
   the order inverts (allow sent before approval event durably
   persists), there's a window where the action happens but the
   audit trail hasn't been written. E3-D's approval-surfacing
   section should explicitly state the durability ordering.

5. **Wrapper binary identity verification.** The wrapper is itself
   a process running on the user's machine. Future enablement
   should verify the running wrapper binary matches an approved
   reference (e.g., committed source hash, build artifact
   signature) before granting it any approval-event-emission
   capability. Otherwise a malicious replacement wrapper could
   self-grant approvals. This is wrapper-bootstrap-trust
   analogous to coordinator key bootstrap. Document in the
   future enablement sub-experiment's preconditions.

## Browser verification
- Tool used: N/A
- URL or file path opened: N/A
- Action: N/A
- Visible outcome: N/A
- Console/network issues: N/A

Reason: critique-only turn over a design-only adapter-selection
turn. No app behavior, browser surface, runtime bridge, or
automation path changed.

## Portability Findings
- Repo-local assumptions: E3-D's wrapper specification keeps the
  binding reference path under `.agent-handoff/`. Adapter wrappers
  do not become source of truth. Portable to any repo that adopts
  the protocol, with adapter choice per repo.
- Machine/local-tool assumptions: a future direct-MCP enablement
  needs a pinned local Codex binary and the wrapper's chosen
  runtime. None of that touches global config by default.
- Browser/connector assumptions: none.
- Any workaround used: none.

## Handoff
- Next agent: Sami
- Specific ask: decide whether to (a) accept E3-D as filed and
  move to per-adapter authorization decisions on your own clock,
  or (b) authorize a small E3-D-FIX-001 housekeeping turn to
  address the five nits in-place before any future direct-MCP
  enablement sub-experiment is scoped, or (c) defer further E3
  work and pivot to one of the queued items (Experiment 4 council
  skill pack, kit extraction toward
  colorado-songwriters-collective). Per the active Stopgate Rule,
  no adapter enablement, install, MCP registration, plugin
  install, or `.mcp.json` edit occurs without your explicit
  per-adapter approval.
