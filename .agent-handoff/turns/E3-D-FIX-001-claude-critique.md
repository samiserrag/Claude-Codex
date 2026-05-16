Previous experiment terminal turn: Experiment 3 / E3-D-FIX-001-codex-wrapper-preconditions.md

# E3-D-FIX-001 Claude consultant critique

## Agent
Claude

## Phase
critique

## Schema
Reuses the Experiment 1 turn-note schema explicitly. Includes
Evidence Basis and Portability Findings sections per the active
PROTOCOL.md additions. Critique-only turn over a design/prose-only
fix turn. Does not approve the fix as protocol, install tools,
enable bridges, commit, push, or move any proposal to approved.

## Files touched this turn
- `.agent-handoff/turns/E3-D-FIX-001-claude-critique.md` (created)
- `.agent-handoff/COLLAB.md` (edited)

## Evidence Basis
- USER SAID: Sami authorized E3-D-FIX-001 on 2026-05-15 as
  design/prose only with the five wrapper-precondition nits as
  required scope, and the Claude consultant is the next critique
  agent per E3-D-FIX-001's Handoff.
- FILE VERIFIED: read E3-D-FIX-001 in full from
  `.agent-handoff/turns/E3-D-FIX-001-codex-wrapper-preconditions.md`.
  Cross-referenced against E3-A schema, E3-B trust-bootstrap,
  E3-D adapter-selection, and E3-D Claude critique.
- AGENT SUMMARY: E3-D-FIX-001 picks the recommended/Sami-preferred
  answer for each of the five nits with explicit reasoning, adds
  concrete payload fields and ordering steps where the consultant's
  critique left them under-specified, and explicitly defers all
  schema/protocol changes for separate Sami approval.
- INFERENCE: The fix is the right shape and right scope for a
  prose-only precondition tightening. The nits I'm calling are
  refinements for any future direct-MCP enablement, not
  acceptance-blockers for this fix.
- UNKNOWN: I have not modeled the wrapper as a running process. The
  critique is over the specification text and ordering claims, not
  over a live wrapper.

## Decisions (binding)

- E3-D-FIX-001 is accepted as a successful design/prose-only fix
  turn. Zero blockers. All five E3-D nits are resolved with the
  precision required for future enablement scoping.
- The decision to defer all schema/protocol changes (no PROTOCOL.md
  edit, no top-level envelope schema additions, payload-only
  additions for `attested_by_observer`) is endorsed. Keeps the
  schema stable and the future enablement scope clean.
- The wrapper-as-own-coordinator choice (`wrapper-codex-mcp` with
  its own keypair) is endorsed. Codex's defense — "Sharing Claude's
  key with a transport wrapper would weaken key custody, blur which
  process made which attestation, and make a wrapper compromise
  look like a Claude cryptographic claim" — is the right framing.
- The three attestation modes (`wrapper_observed`,
  `on_behalf_of_claude`, `approval_gate_observed`) and the explicit
  enumeration of what the wrapper MUST NOT attest to are endorsed.
  The "may not" list is the actual safety boundary; without it the
  positive enumeration would be incomplete.
- The 7-step approval-event-before-allow ordering with explicit
  fsync requirements and the three required tests
  (kill-after-accept-before-allow, fail-before-durability,
  wrong-approval) is endorsed. The kill test is the right
  experimental proof of the ordering claim, not just paper proof.
- The signed identity manifest mechanism over COLLAB.md-only is
  endorsed; reasoning ("COLLAB.md is transitional mutable state")
  is correct.
- The honest acknowledgment in Nit 5 that "source/binary
  self-measurement is a prototype gate, not a complete defense
  against same-user machine compromise" is endorsed and called out
  separately below as a strength.
- Per the active Stopgate Rule, this critique does not approve the
  fix as protocol or authorize any future enablement
  sub-experiment. Only Sami can move proposed-to-approved.

## Answers to Codex's five open questions

1. **Wrapper coordinator registration as separate prior trust turn?**
   Yes. Keeping trust-bootstrap independently testable from adapter
   enablement is the right separation. A future direct-MCP
   enablement turn should start by verifying the wrapper coordinator
   is already registered, not by mixing key generation, registration,
   and transport setup in one scope.

2. **`wrapper-codex-mcp` coordinator id specificity?** Acceptable
   for this prototype but worth flagging the future-multi-transport
   question. If we later wrap AgentBridge, tmux variants, or the
   official Codex plugin, would each have its own coordinator id
   (`wrapper-codex-mcp`, `wrapper-codex-plugin`,
   `wrapper-codex-agentbridge`)? Or a single `wrapper-codex` with
   transport noted in payload? My preference: separate coordinator
   per transport so each wrapper's identity manifest, key, and
   audit trail stay independent. The prototype `wrapper-codex-mcp`
   id reads correctly under that future convention.

3. **`attested_by_observer` as payload field, not top-level
   envelope field?** Yes. Top-level schema expansion would
   require schema-version bump and re-verifier work. Payload fields
   keep the envelope stable and let the semantic distinction live
   in event-kind-specific schemas. Right call.

4. **Approval durability tests sufficient (especially kill-after-
   accept-before-allow)?** Yes, with one addition I'd recommend
   in any future enablement: also test concurrent approval
   requests. If Codex emits two approval requests in flight,
   verify they serialize through the wrapper without cross-coupling
   (e.g., approval for request A doesn't accidentally allow request
   B). The kill test is necessary; the concurrency test is the
   other half.

5. **Signed identity manifest + startup measurement enough for
   first prototype, given the explicit limitation?** Yes. The
   limitation is correctly named. Beyond the prototype, three
   stronger options exist: launcher with privilege separation, OS
   code-signing policy, hardware-backed key custody. None of those
   are required for the first direct-MCP sub-experiment, but the
   future enablement critique should not overclaim what self-
   measurement proves — Codex already pre-empts this concern in
   the fix turn itself.

## Strengths worth naming explicitly

- **Honest limitation acknowledgment in Nit 5.** "Source/binary
  self-measurement is a prototype gate, not a complete defense
  against same-user machine compromise. A malicious process with
  access to the wrapper key can still lie unless key access is
  guarded by a launcher, OS code-signing policy, hardware-backed
  key, or a similar external control." This is consultant-level
  honesty, not a sales pitch. The "future enablement critique
  should not overclaim what startup self-checking proves" line
  pre-empts the consultant's natural follow-up question.
- **The "may not attest to" enumeration in Nit 2.** Three positive
  attestation modes plus four explicit "may not" boundaries.
  Without the negative list, the wrapper boundary would be
  defined by what's NOT excluded — which always leaks.
- **fsync ordering specified explicitly in Nit 4.** Many durability
  specs say "durably write" without saying which fsync ordering
  matters. Codex specified write bytes → fsync file → atomic
  rename → fsync containing directory. That's the actual
  POSIX-correct ordering.
- **Diagnostic event handling on durability failure.** Even when
  the wrapper can't allow the action, it tries to emit a signed
  wrapper-observed diagnostic event. If even the event store
  fails, it exits or remains deny-all. The escalation ladder is
  complete — there's no "limp along silently" failure mode.
- **`coordinator_purpose` and `allowed_attestation_modes` flagged
  as future schema work, not silently applied.** These would be
  useful payload extensions but Codex correctly noted they require
  separate schema approval. Right discipline.

## Open questions for Sami
- Do you accept E3-D-FIX-001 as a successful precondition fix? If
  yes, the natural next move is the separate prior trust turn that
  registers `wrapper-codex-mcp` as a coordinator (recommendation:
  keep this small and scope it tightly when you authorize it).
- For the future direct-MCP enablement sub-experiment, should
  concurrent approval handling (consultant nit 1 below) be a
  precondition test alongside the three Codex named, or deferred
  until first enablement reveals concurrency in practice?
- For the multi-transport future (consultant nit 2 below), do you
  want to commit now to the per-transport wrapper coordinator
  pattern (`wrapper-codex-mcp`, `wrapper-codex-plugin`,
  `wrapper-codex-agentbridge`) or leave that decision until the
  second adapter is scoped?

## Blockers (must-fix before continuing)
- None. E3-D-FIX-001 is acceptable as filed.

## Nits (suggested, not required)

1. **Concurrent approval requests not addressed.** The 7-step
   ordering covers a single approval request. If Codex emits two
   approval requests in flight, the wrapper must serialize them
   without cross-coupling. Recommend adding a fourth required
   test to the future enablement: concurrent-approval test
   (request A and B in flight simultaneously; verify allow on A
   does not allow B; verify allow on B does not allow A; verify
   neither approval event accidentally satisfies the other's
   pending request id). Not blocking the fix; flag for future
   enablement scope.

2. **Coordinator-id taxonomy question deferred.** `wrapper-codex-mcp`
   reads correctly under a per-transport convention. Worth
   surfacing the broader question now so a future plugin wrapper
   doesn't surprise-collide on naming. Either a new turn establishes
   the convention explicitly, or the second adapter selection turn
   answers it then. Not blocking.

3. **Read-only/status-only fallback in Nit 5 requires architectural
   separation.** "It may fall back to read-only/status-only or
   deny-all behavior" assumes the wrapper can ENFORCE its own mode
   boundary. If the same code path handles both
   approval-emitting and observation, "fall back to read-only" is
   aspirational. Recommend that the future enablement design
   require separation of duties between approval-emission and
   observation in the wrapper architecture (e.g., distinct
   processes or distinct compartments) before the fallback is
   trustworthy. Not blocking.

4. **Diagnostic events overload `message.created`.** The fix turn
   uses `message.created` with `diagnostic_type` payload field for
   wrapper-observed diagnostics (durability failure, identity
   mismatch). That works for now but slightly overloads the event
   kind's semantics. The fix turn already flagged this in its own
   nits — "future implementation should decide whether diagnostic
   events use `message.created`, `quarantine.created`, or a new
   event kind; this fix turn avoids approving a new event kind."
   Reasonable deferral; just confirming the future-design concern
   is real.

5. **Identity manifest rotation/refresh mechanism unspecified.** If
   the manifest expires or the wrapper source legitimately changes,
   how is the new manifest accepted? The fix says "expiration or
   review requirement if the wrapper source changes" but the
   approval-and-acceptance flow for a NEW manifest isn't specified.
   Same path as initial registration (separate trust turn,
   root-signed event)? Probably yes; just worth saying so. Not
   blocking.

## Browser verification
- Tool used: N/A
- URL or file path opened: N/A
- Action: N/A
- Visible outcome: N/A
- Console/network issues: N/A

Reason: critique-only turn over a design/prose-only fix. No app
behavior, browser surface, runtime bridge, or automation path
changed.

## Portability Findings
- Repo-local assumptions: the wrapper identity, manifest, and
  diagnostic events all stay under `.agent-handoff/`. Portability
  preserved.
- Machine/local-tool assumptions: future enablement will require a
  deterministic source-tree-hash procedure (and optionally an
  executable hash if compiled) plus the existing Node 22+ Ed25519
  verifier. None of that imposes new global-config constraints.
- Browser/connector assumptions: none.
- Any workaround used: none.

## Handoff
- Next agent: Sami
- Specific ask: decide whether to (a) accept E3-D-FIX-001 as filed
  and move on, (b) authorize the next concrete E3 step (the
  separate prior `wrapper-codex-mcp` trust turn that registers the
  wrapper coordinator), (c) pivot to a queued item (Experiment 4
  council skill pack design, kit extraction toward
  colorado-songwriters-collective), or (d) defer further E3 work.
  Per the active Stopgate Rule, no adapter enablement, MCP
  registration, plugin install, install of any kind, or
  proposed-to-approved transition occurs without your explicit
  per-action approval.
