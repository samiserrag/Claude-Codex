Previous experiment terminal turn: Experiment 3 / E3-D-claude-critique.md

# E3-D-FIX-001 - Codex wrapper preconditions

## Agent
Codex

## Phase
fix

## Schema
Reuses the Experiment 1 turn-note schema explicitly. Includes Evidence Basis,
Portability Findings, and the Unscheduled Fix-Turn Shape required by
PROTOCOL.md. This is a design/prose-only fix turn over E3-D. It does not
approve protocol changes, implement wrapper code, install dependencies,
register MCP, edit `.mcp.json`, enable a bridge, change global config, create
keys, run an adapter, commit, push, open a PR, create a branch, or move any
proposed item to approved.

## Files touched this turn
- `.agent-handoff/turns/E3-D-FIX-001-codex-wrapper-preconditions.md`
  (created)
- `.agent-handoff/COLLAB.md` (edited; handoff fields only)

## Evidence Basis
- USER SAID: Sami explicitly accepted E3-D as a successful adapter-selection
  design turn and authorized E3-D-FIX-001 on 2026-05-15 as design/prose only,
  limited to COLLAB.md plus this new turn note unless a tiny PROTOCOL.md note
  is proposed and separately approved.
- USER SAID: Sami's preferred answers are that the wrapper gets its own
  coordinator identity/keypair, inbound MCP responses are
  `attested_by_observer`, approval events must durably land before `allow`,
  and wrapper source/binary identity must be verified before approval-related
  event emission.
- FILE VERIFIED: `.agent-handoff/PROTOCOL.md` contains the Stopgate Rule and
  the Unscheduled Fix-Turn Shape.
- FILE VERIFIED: `.agent-handoff/COLLAB.md` records the E3-D-FIX-001
  authorization and says only Sami can move proposed-to-approved.
- FILE VERIFIED: `E3-A-codex-envelope-schema.md` defines the signed E3-A
  envelope, strict top-level fields, accepted-event paths, quarantine rules,
  and supported initial event kinds.
- FILE VERIFIED: `E3-B-codex-trust-bootstrap.md` implements the Sami-rooted
  trust registry, Codex coordinator registration, possession proof, event
  signing, and local key path pattern under `.agent-handoff/local/keys/`.
- FILE VERIFIED: `E3-D-codex-adapter-selection.md` selects the direct
  `codex mcp-server` wrapper as the first future enablement candidate and
  already requires signed events, allow-listing, approval surfacing, rollback,
  and verification evidence.
- FILE VERIFIED: `E3-D-claude-critique.md` accepts E3-D with zero blockers and
  raises the five wrapper-precondition nits addressed below.
- FILE VERIFIED: `AGENTS.md`, `docs/test-project.md`,
  `docs/chrome-runners.md`, and the latest turn note were read before edits.
- INFERENCE: These fixes should tighten preconditions for a later direct-MCP
  enablement design without silently converting any future setup, payload
  schema, trust registration, identity manifest, or adapter behavior into an
  approved protocol.
- UNKNOWN: The future wrapper source path, implementation language, launcher
  design, exact Codex MCP request/response fields, and exact payload schemas
  for wrapper-observed events remain unimplemented and unapproved.

## Decisions (binding)
- E3-D-FIX-001 accepts the consultant's five nits as real preconditions for
  any future direct-MCP enablement sub-experiment.
- No PROTOCOL.md edit is applied in this turn. Any dedicated payload schema,
  event kind, authoritative identity-manifest section, or protocol wording
  below remains a proposal for a future Sami-approved turn.
- A future direct-MCP wrapper may not be enabled until the wrapper coordinator
  identity, observer-attestation semantics, approval durability ordering, and
  wrapper identity-verification gate are all reviewed and explicitly approved
  in the future enablement scope.

### Nit 1: coordinator registration is a separate prior trust turn

Registration of the cross-agent signing identity should happen as a separate
prior trust turn, not as a sub-step hidden inside direct-MCP enablement.

I agree with the consultant's recommendation. A separate trust turn keeps the
trust-bootstrap question independently testable from the adapter question. The
future direct-MCP enablement turn should be able to start by verifying that the
wrapper coordinator is already registered, not by generating trust roots,
registering keys, modifying MCP config, and enabling a live transport in one
scope.

Recommended bootstrap sequence for the wrapper coordinator:

1. Trust preflight: run the existing verifier and require exit 0 with top-level
   `"ok": true`; confirm `.agent-handoff/local/` remains ignored before any
   private key is created.
2. Generate the wrapper coordinator keypair only in the separate trust turn.
   Recommended coordinator id: `wrapper-codex-mcp`. Recommended private key
   path: `.agent-handoff/local/keys/wrapper-codex-mcp.ed25519`, mode `0600`,
   gitignored through the existing `.agent-handoff/local/` rule.
3. Write a wrapper possession proof signed by the wrapper private key using
   the existing possession-proof pattern from E3-B, scaled to
   `wrapper-codex-mcp`. Recommended public proof path:
   `.agent-handoff/trust/possession-proofs/wrapper-codex-mcp.ed25519.proof.json`.
4. Have the Sami root sign a `coordinator.registered` event for the wrapper.
   The registration event should use the existing E3-A/E3-B envelope shape:
   root coordinator signs the event; payload identifies
   `coordinator_id: "wrapper-codex-mcp"`, a wrapper public key id, the raw
   public key, `public_key_fingerprint`, `allowed_role: "coordinator"`,
   `sequence_start`, `valid_from`, `valid_until`, `possession_proof_hash`, and
   `prior_trust_event_hash`.
5. Recommended future payload additions, not approved here: record
   `coordinator_purpose: "codex_mcp_wrapper_observer_and_approval_gate"` and
   `allowed_attestation_modes: ["wrapper_observed", "on_behalf_of_claude",
   "approval_gate_observed"]` inside the registration payload or an accepted
   companion governance event. If the future verifier makes
   `coordinator.registered` payloads strict, these fields need separate schema
   approval before use.
6. Update the root-signed trust registry snapshot and verify the registry,
   possession proof, root registration event, hash chain, parent link, and
   final registry links.
7. Only after that separate trust turn succeeds may a future direct-MCP
   enablement design depend on `wrapper-codex-mcp` as a registered signer.

If a future design instead wants Claude's own coordinator to sign outbound
events, that Claude coordinator registration should also be its own prior
trust turn. It should not be folded into adapter enablement.

### Nit 2: wrapper has its own coordinator identity

Pick (b): the wrapper is itself a coordinator with its own Sami-rooted keypair.

I agree with Sami's preferred answer and the consultant's preference. The
wrapper must not borrow Claude's coordinator key. Sharing Claude's key with a
transport wrapper would weaken key custody, blur which process made which
attestation, and make a wrapper compromise look like a Claude cryptographic
claim. A wrapper-owned key gives narrower credentials and clearer audit
semantics.

Concrete identity choice:

- Coordinator id: `wrapper-codex-mcp`.
- Private key path: `.agent-handoff/local/keys/wrapper-codex-mcp.ed25519`
  under the existing gitignored local key directory.
- Public possession proof:
  `.agent-handoff/trust/possession-proofs/wrapper-codex-mcp.ed25519.proof.json`.
- Registration event: root-signed `coordinator.registered` as described in
  Nit 1.
- Allowed role: `coordinator`, constrained by future payload policy to wrapper
  observation and stopgate-request surfacing, not root trust actions.

What the wrapper may attest to:

- `wrapper_observed`: the wrapper observed a Codex MCP request, response,
  approval prompt, denial, durability failure, identity mismatch, or transport
  status. This is the wrapper's claim about what crossed the wrapper boundary.
- `on_behalf_of_claude`: the wrapper observed Claude asking it to send a task
  or continuation to Codex. This means "Claude presented this to the wrapper";
  it does not mean Claude cryptographically signed the content. If a future
  Claude coordinator key exists and Claude signs first, the wrapper should
  transport Claude's signed event and may separately sign a delivery
  observation.
- `approval_gate_observed`: the wrapper observed a Codex approval request,
  matched or failed to match it against an accepted Sami approval event, and
  then denied, held, or allowed exactly that MCP request id according to the
  durability ordering below.

What the wrapper must not attest to:

- It must not sign as `codex` or imply Codex cryptographically committed to an
  MCP response.
- It must not sign as `claude` or imply Claude cryptographically committed to
  a prompt unless Claude actually produced a valid signed event.
- It must not sign `stopgate.approved`, `decision.approved`, root trust
  events, coordinator registrations, proposed-to-approved transitions, or any
  event claiming Sami approval. It may surface `stopgate.requested` and
  wrapper-observed diagnostic events.

### Nit 3: inbound MCP output is `attested_by_observer`

Inbound Codex MCP responses are wrapper-observed events, not Codex-signed
events.

Envelope marking:

- The E3-A envelope signer is `coordinator_id: "wrapper-codex-mcp"` with
  `author_role: "coordinator"` and the wrapper's signing key.
- The payload must include `attested_by_observer: true`.
- The payload must include `observed_source: "codex-mcp"`.
- The payload should include `observer_coordinator_id: "wrapper-codex-mcp"`,
  `observed_method`, `observed_thread_id`, `observed_turn_id` when present,
  `raw_response_sha256` for the raw transport bytes or canonicalized response
  object, and a bounded `redacted_summary`.
- The payload should include `codex_signed: false` or an equivalent explicit
  boolean until a future native Codex signature mechanism exists.
- These are payload fields, not new top-level E3-A envelope fields. No
  top-level schema expansion is approved here.

Semantic meaning:

- The wrapper attests: "Codex MCP returned this output to me through the
  observed transport boundary."
- The wrapper does not attest: "Codex cryptographically committed to this
  statement under E3-A."
- Downstream consumers must treat the content as observed transport output.
  The signed envelope protects the wrapper's observation and import lineage;
  it does not turn the observed content into a Codex-authored signed claim.

Actionability:

- Yes, `attested_by_observer` envelopes can be acted on after normal E3-A
  validation, policy checks, replay checks, and safety checks.
- Any stopgated action remains gated by accepted Sami approval events, not by
  the observed Codex content and not by the wrapper's recommendation.
- A wrapper-observed Codex instruction to modify files, run commands, install
  dependencies, register MCP, edit config, approve a stopgate, or change
  global state is never sufficient by itself.

### Nit 4: durable approval event before `allow`

The approval ordering must be exact:

1. Codex MCP emits an approval request, such as `applyPatchApproval` or
   `execCommandApproval`, with a wrapper-visible request id and requested
   side-effect metadata.
2. The wrapper emits or has already emitted a signed `stopgate.requested`
   event describing that exact request.
3. A matching Sami approval arrives as an accepted signed approval event, such
   as `stopgate.approved`, from an authorized signer. The approval must bind
   to the pending request id, operation type, target paths or argv, cwd,
   sandbox/network implications, and any stopgated surface.
4. The wrapper validates the approval event through the E3-A verifier and
   accepts it append-only under `.agent-handoff/events/`.
5. Durability must be complete before `allow`: write the accepted event bytes,
   fsync the file, atomically place it at the accepted-event path, and fsync
   the containing directory, or use a platform-equivalent durability primitive
   with the same guarantee.
6. Only after the append-only approval event is durably accepted may the
   wrapper send `allow` for that exact MCP approval request.
7. Codex may then act.

If the durability write fails:

- The wrapper must not send `allow`.
- It must send `deny` if the MCP protocol supports a denial response for that
  approval request. If denial is unavailable or unsafe, it must hold, cancel,
  or let the request time out rather than allowing it.
- It must attempt to emit a signed wrapper-observed diagnostic event, using an
  existing non-approval event kind such as `message.created`, with payload
  fields like `attested_by_observer: true`, `observed_source:
  "wrapper-codex-mcp"`, `diagnostic_type: "approval_durability_failure"`,
  the pending approval request id, the failing path, and a redacted error
  summary.
- If the event store itself is unavailable and even that diagnostic cannot be
  accepted, the wrapper must remain deny-all or exit. It cannot compensate for
  missing append-only evidence with a terminal log, chat message, or in-memory
  state.

Required ordering tests before future enablement:

- Kill-after-accept-before-allow test: inject a kill point after the approval
  event is durably accepted and before the wrapper sends `allow`; verify Codex
  did not act, verify the approval event is on disk, and verify restart does
  not replay `allow` without a fresh matching live request.
- Fail-before-durability test: inject a write/fsync/rename failure before the
  approval event is accepted; verify the wrapper did not send `allow`, Codex
  did not act, and a wrapper-observed durability-failure event was accepted if
  the event store remained writable.
- Wrong-approval test: provide a validly signed approval for a different
  request id, path, argv, cwd, or sandbox/network implication; verify the
  wrapper denies or holds and never treats it as matching approval.

### Nit 5: wrapper source/binary identity verification

The wrapper must verify its source/binary identity before it can emit
approval-related events.

Recommended first-prototype mechanism: a Sami-approved wrapper identity
manifest stored in an accepted signed governance event, plus startup
measurement by the wrapper before approval-emitting mode is enabled.

The manifest should record:

- wrapper coordinator id: `wrapper-codex-mcp`;
- wrapper source file list and a deterministic SHA-256 source tree hash over
  the exact approved wrapper files;
- wrapper entrypoint path and runtime command shape;
- build recipe hash if the wrapper is bundled or compiled;
- executable SHA-256 if the future wrapper runs as a built binary;
- allowed Codex binary path/version and MCP interface version;
- approval-emitting capabilities granted to this measured wrapper;
- expiration or review requirement if the wrapper source changes.

I choose this over a COLLAB.md-only approved-list because COLLAB.md is
transitional mutable state, while an accepted signed event fits the E3-A/E3-B
trust model. I choose it over mandatory signed build artifacts for the first
prototype because the future direct-MCP wrapper is likely to be repo-local
source, and source measurement is easier to review without adding packaging
infrastructure. If the wrapper is later distributed as a reusable kit, signed
build artifacts verified against a Sami-controlled or project-controlled
release key should replace or augment source measurement.

Startup behavior:

1. Before handling approval prompts or signing approval-related observations,
   the wrapper loads the latest accepted identity manifest for
   `wrapper-codex-mcp`.
2. It computes its current source tree hash and, if applicable, executable
   SHA-256 and build recipe hash.
3. It compares those values to the accepted manifest.
4. It enables approval-emitting mode only on an exact match and only if the
   wrapper coordinator key is registered and valid.

Failure behavior:

- On mismatch, missing manifest, expired manifest, unmeasurable source, or
  unapproved binary hash, the wrapper refuses approval-emitting mode.
- It may fall back to read-only/status-only or deny-all behavior, depending on
  the future sub-experiment scope. It must not answer Codex approval requests
  with `allow`.
- It must emit, when the event store is writable, a signed wrapper-observed
  diagnostic event recording `diagnostic_type:
  "wrapper_identity_verification_failed"` with the expected hash, observed
  hash, wrapper path, and redacted error summary.
- If it cannot write that diagnostic event, it exits or remains deny-all.

Limitation to carry forward: source/binary self-measurement is a prototype
gate, not a complete defense against same-user machine compromise. A malicious
process with access to the wrapper key can still lie unless key access is
guarded by a launcher, OS code-signing policy, hardware-backed key, or a
similar external control. That stronger control is not required for this
design-only fix, but the future enablement critique should not overclaim what
startup self-checking proves.

## Open questions for the other agent
- Does Claude agree that wrapper coordinator registration should be a separate
  prior trust turn, with direct-MCP enablement only consuming the already
  registered identity?
- Does Claude accept `wrapper-codex-mcp` as the right coordinator id and trust
  boundary, or should the id be more generic for future non-Codex wrappers?
- Does Claude agree that `attested_by_observer` belongs in the payload, not as
  a new E3-A top-level field for this schema version?
- Does Claude accept the approval durability tests, especially killing the
  wrapper after durable accept but before `allow`, as sufficient proof of the
  ordering?
- Does Claude accept the signed identity-manifest plus startup-measurement
  mechanism as enough for a first prototype, given the explicit limitation
  around same-user compromise?

## Blockers (must-fix before continuing)
- None for E3-D-FIX-001 as a design/prose-only fix turn.
- Before any direct-MCP enablement: Claude consultant critique of this fix turn
  is required, and Sami must separately approve any next E3 scope.
- Before any approval-capable wrapper run: `wrapper-codex-mcp` must be
  registered in a separate trust turn, a wrapper identity manifest must be
  approved as accepted signed state, and the future enablement tests must prove
  durable approval-before-allow ordering.

## Nits (suggested, not required)
- A future schema turn should consider a dedicated wrapper-observed payload
  schema so implementations do not invent incompatible `attested_by_observer`
  field names.
- A future protocol turn may want to add a concise "wrapper identity manifest"
  section if direct-MCP enablement moves from design to implementation.
- A future implementation should decide whether diagnostic events use
  `message.created`, `quarantine.created`, or a new event kind; this fix turn
  avoids approving a new event kind.

## Browser verification
- Tool used: N/A
- URL or file path opened: N/A
- Action: N/A
- Visible outcome: N/A
- Console/network issues: N/A

Reason: design/prose-only fix turn. No app behavior, browser surface, runtime
bridge, MCP registration, plugin setup, or wrapper process changed.

## Portability Findings
- Repo-local assumptions: the wrapper identity and event evidence stay under
  `.agent-handoff/`; `.agent-handoff/local/keys/` remains the private key
  location for repo-local coordinator keys.
- Machine/local-tool assumptions: future identity measurement needs a
  deterministic hash procedure and access to the wrapper source or executable.
  This turn does not choose a runtime, install tooling, or run a wrapper.
- Browser/connector assumptions: none. Chrome-first rules remain relevant only
  for UI/browser QA, not this design-only fix.
- Any workaround used: none. This turn writes prose only and does not apply a
  protocol/schema change.

## Unscheduled Fix-Turn Shape
- Trigger: Claude consultant E3-D critique accepted E3-D with zero blockers
  but raised five wrapper-precondition nits that must be resolved before any
  future direct-MCP enablement sub-experiment.
- Sami approval basis: explicit 2026-05-15 authorization recorded in
  COLLAB.md at commit `435597f`, authorizing E3-D-FIX-001 as design/prose only
  and limiting edits to COLLAB.md plus this new turn note unless a PROTOCOL.md
  note is separately proposed and approved.
- Scope limit: address only the five E3-D critique nits. No installs, MCP
  registration, plugin setup, `.mcp.json`, bridge enablement, global config
  changes, commits, pushes, PRs, branches, adapter execution, code, wrapper
  implementation, or proposed-to-approved transition.
- Files touched: see "Files touched this turn" above.
- Verification performed: read the required protocol, collaboration state,
  E3-A envelope spec, E3-B trust bootstrap, E3-D adapter-selection turn,
  E3-D Claude critique, AGENTS.md, docs/test-project.md, docs/chrome-runners.md,
  and latest turn note; verified the working tree was clean before edits.
- Why this does not expand the experiment: it only tightens prose
  preconditions for a future enablement design. It does not register the
  wrapper, create keys, write identity manifests, enable transport, alter
  schema/protocol files, or approve a direct-MCP sub-experiment.
- Next handoff: Claude architecture consultant critique of E3-D-FIX-001.

## Handoff
- Next agent: Claude
- Specific ask: perform the E3-D-FIX-001 architecture-consultant critique of
  `.agent-handoff/turns/E3-D-FIX-001-codex-wrapper-preconditions.md`. Focus on
  whether the fix adequately resolves the five E3-D nits: separate wrapper
  coordinator registration, wrapper-owned identity/keypair, inbound
  `attested_by_observer` semantics, durable approval-event-before-allow
  ordering, and wrapper source/binary identity verification. Stay read-only.
  Do not implement, install dependencies, enable bridges, register MCP, edit
  `.mcp.json`, modify global config, commit, push, open a PR, create a branch,
  delete files, or treat any proposal as approved.
