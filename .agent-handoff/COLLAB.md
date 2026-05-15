# Collaboration State

## Goal

Prove a practical two-way Claude Code <-> Codex collaboration loop in this repo.
The sample build is a small static Decision Ledger app.

## Current Owner

Sami (E3-B-FIX-001 paste-and-run decision + E3-D adapter selection scope decision)

## Current Phase

Sami's three authorizations on 2026-05-15:

  "Approved:
  - Accept E3-B as a successful trust-bootstrap implementation spike,
    without approving broader protocol or adapter work.
  - Authorize Claude consultant E3-C critique as read-only critique
    only.
  - Authorize a tiny E3-B-FIX-001 housekeeping/verifier-hardening
    turn: update .gitignore for .DS_Store and .claude/worktrees/,
    add top-level verify ok/fail semantics with nonzero exit on
    failed critical checks, and check event filename sequence
    prefixes. No installs, bridges, global config changes, commits,
    pushes, PRs, or E3-D adapter selection unless separately
    approved."

E3-B accepted as successful spike (not protocol-wide approval).

E3-C Claude consultant critique filed (2026-05-15) per Sami's
authorization. Zero blockers. E3-C verdicts endorsed: AGPL on CCB and
Claude Squad → "borrow pattern only"; Apache on the official Codex
plugin and `codex mcp-server` → "wrap" with concrete wrapper
requirements. Codex's three blockers correctly framed as E3-D
preconditions, not E3-C blockers. Five small nits (license pinning,
Stop-hook isolation, NOTICE handling, wrap-verdict-type
disambiguation, CCB ownership-transfer follow-up).

Codex's open question on first transport experiment answered: when
E3-D becomes scope, recommend a tightly bounded direct-MCP allow-list
(thread.start, thread.continue, turn.start, turn.read, turn.cancel,
status.read only — block all filesystem/command/config/account/process
methods until proven necessary).

E3-B-FIX-001 housekeeping/verifier-hardening turn authorized by Sami.
Scope: expand .gitignore (.DS_Store, .claude/worktrees/), add
top-level verify ok/fail aggregation with nonzero exit on failed
critical checks, check event filename sequence prefix matches
envelope sequence, optional refusal-to-overwrite self-test fixture.
Codex is the authoring agent (mirrors E3-B authorship). Claude
consultant is the next critique agent.

E3-D adapter selection scope is NOT authorized. It depends on:
- E3-B-FIX-001 landing (verifier hardening)
- E3-C critique landing (just filed)
- Sami's per-adapter approval per scoped sub-experiment

E3-B Claude consultant critique filed (2026-05-15). Zero blockers.
Independent verification by the consultant passed across all checks:
`.gitignore` contains exactly `.agent-handoff/local/`; both private
keys mode 0600 and gitignored; `git check-ignore` confirms protection;
secret-leakage grep returned only filename references (no key material
outside `.agent-handoff/local/`); `node trust-bootstrap.mjs self-test`
passes (canonical_json_vector, duplicate_key_rejection,
ed25519_sign_verify); `node trust-bootstrap.mjs verify` reports `ok:
true` for registry, both events, possession_proof, hash_chain,
parent_link, prior_trust_link, and final_registry_links.

Five small nits flagged for optional future housekeeping: expand
`.gitignore` to add `.DS_Store` and `.claude/worktrees/`; future split
of `trust-bootstrap.mjs` into modules; refusal-to-overwrite test
fixture; redundant-fingerprint-in-proof storage; document
strict-integer-only payload constraint in adapter-author guide.

E3-C concurrently filed by Codex at
`.agent-handoff/turns/E3-C-codex-adapter-inspection.md` per Sami's
parallel authorization. E3-C critique by the Claude consultant is a
separate authorization decision still pending Sami's go-ahead.

E3-B trust-bootstrap implementation completed on 2026-05-15 and handed
to Claude for architecture-consultant critique. Codex created the
secret-safety `.gitignore` rule for `.agent-handoff/local/`, verified
`git check-ignore` before key generation, generated the Sami root and
Codex coordinator Ed25519 keypairs into ignored local paths, wrote the
root-signed trust registry and two root-signed bootstrap events, wrote
the Codex possession proof, and verified the registry/event/proof/hash
chain with `.agent-handoff/src/trust-bootstrap.mjs`.

E3-C concurrently authorized as read-only adapter/security inspection:
CCB (`bfly123/claude_codex_bridge`), Claude Squad, official Codex
plugin for Claude Code, and `codex mcp-server` should all get
license/config/security inspection before any bridge setup is
approved. E3-C must stay read-only and must not block E3-B.

Secret safety status: `.gitignore` now contains `.agent-handoff/local/`.
The private key paths `.agent-handoff/local/keys/sami-root.ed25519` and
`.agent-handoff/local/keys/codex.ed25519` are ignored, untracked, and
mode `0600`.

Single-developer per-repo Sami root key model selected for this
prototype. Org/team signing path deferred to a later design.

Private key backup is Sami's responsibility outside the repo (password
manager or encrypted local/off-machine backup).

Seven E3-A critique nits addressed in E3-B's turn note: time skew
window default, integer-only-numbers rule scope for payloads,
`recipient_coordinator_ids` broadcast semantics, `possession_proof_hash`
byte format, replay-vs-import nonce semantics, branch/force-push
policy, prompt-injection minimum baseline.

E3-A schema is endorsed: JCS-narrowed canonical JSON, Ed25519
signatures, SHA-256 hashing, UUIDv7 opaque event ids, integer-only
envelope numbers, hybrid sequence+hash filenames, domain-separation
prefix `agent-event-envelope:v1\n` for signing. Strengths called out
in the critique: domain-separation prefix prevents cross-protocol
signature reuse; `previous_accepted_event_hash` separated from
`parent_event_ids`; quarantine refuses to store hash of suspected
secret value alone; UUIDv7 treated as opaque (no timestamp trust);
fixtures cite real base commit `4543fc44...`.

E3-A was authorized by Sami on 2026-05-15. Explicit authorization text
recorded in this COLLAB.md entry and the consultation thread:

  "Run E3-A as a design-only event-envelope schema/spec turn. No
  implementation, installs, bridge enablement, commits, pushes, or
  protocol approval implied."

E3-A proposed canonical event envelope fields, deterministic JSON
serialization rules, signature coverage, trust-registry snapshot shape, file
naming conventions, quarantine rules, minimal fixture requirements, and
pass/fail acceptance checks. Design only: no code, no installs, no bridge
enablement, no commits, no protocol approval.

Concurrent decision: official Codex plugin and `codex mcp-server` paths
added to the E3-C read-only adapter/security inspection queue alongside
CCB and Claude Squad. Reason: their security/config surface is real
(approval boundaries, project/global config changes, sandbox
interactions, cross-tool context) even though their license risk
differs from third-party adapters.

Deferred per Sami: council skill pack work waits until E3-A lands;
porting to `colorado-songwriters-collective` waits until E3-B lands.
AgentBridge / CCB / plugin implementation work waits until they are
judged against E3-A's schema and governance contract; they may not
define the contract.

(E2 four-turn re-scope rhythm previously closed cleanly; all E2-006
critique blockers resolved by E2-007 and accepted by E2-008.)

`COLLAB.md` remains transitional pending the new state model.

Hard stop: E3-B implementation is complete and no further E3-B work
continues until Claude critiques it. E3-C remains separately authorized
as read-only adapter/security inspection and must not block E3-B. No
bridge enablement, installs, commits, pushes, PRs, branches, global
config changes, or proposed-to-approved transitions are authorized.

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
- E3-A Codex envelope schema/spec added at
  `.agent-handoff/turns/E3-A-codex-envelope-schema.md`. Proposes the
  event envelope, canonical serialization, signature coverage, trust
  snapshot shape, file naming, quarantine rules, fixture contract, and
  pass/fail checks. Locally uncommitted at filing; awaiting Claude
  consultant critique before further E3 work.

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
(design only: canonical envelope fields, JSON serialization, signature
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

E3-B trust-bootstrap implementation written at
`.agent-handoff/turns/E3-B-codex-trust-bootstrap.md`. Codex added the
minimal `.gitignore` rule for `.agent-handoff/local/`, verified
`git check-ignore .agent-handoff/local/keys/sami-root.ed25519` before
key generation, selected Node v22 built-in `node:crypto` plus a
repo-local no-dependency canonical JSON implementation, generated the
Sami root and Codex Ed25519 private keys under ignored local paths with
mode `0600`, wrote the public root-signed trust registry to
`.agent-handoff/trust/agents.json`, wrote the Codex possession proof
to `.agent-handoff/trust/possession-proofs/codex.ed25519.proof.json`,
and wrote root-signed `trust.registry.initialized` and
`coordinator.registered` events under `.agent-handoff/events/sami-root/`.
Root public-key fingerprint:
`69e123bf79fd82aa57a3e856a423626051ca345d6256eee27048f9cc934a4968`.
Codex public-key fingerprint:
`569db4efca4e9f91ab58d87ab79c069fbb2c7ff6384b5a00537187539cbcecdf`.
`node .agent-handoff/src/trust-bootstrap.mjs verify` passes for the
registry signature, both root events, the possession proof, the hash
chain, parent/prior-trust links, and final registry links. No installs,
bridges, live transport, cron, webhook, global config changes, commits,
pushes, PRs, or branches were performed.

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

- None active for E3-B until Claude's critique returns. Any move from the
  proposed schema or implementation spike to approved protocol still requires
  Sami's explicit approval.
- Later only, if separately authorized: should we install the official OpenAI
  Codex plugin in Claude Code?
- Later only, if separately authorized: should we register `codex mcp-server`
  as a project-scoped Claude MCP server?
- Later only, if separately authorized: should we register `claude mcp serve`
  inside Codex for the reverse-direction experiment?

## Next Request To Claude

Perform the E3-B architecture-consultant critique of
`.agent-handoff/turns/E3-B-codex-trust-bootstrap.md` and the generated
artifacts/source it names. Focus on secret-safety ordering, private-key
handling, canonical JSON portability, Ed25519 signature coverage, registry
snapshot shape, possession-proof byte format, event filenames/hash chain,
and whether all seven E3-A critique nits were adequately resolved. Stay
read-only. Do not implement, install dependencies, enable bridges, edit global
config, commit, push, open a PR, create a branch, rotate keys, delete files,
or treat any proposed schema/implementation item as approved.

## Next Request To Codex

None active. Hard stop after E3-B until Claude's critique is filed and Sami
explicitly authorizes any next scope.

## Next Request To Sami

None immediate unless you want to redirect the experiment. The next expected
action is Claude's E3-B critique.
