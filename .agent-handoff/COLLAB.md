# Collaboration State

## Goal

Prove a practical two-way Claude Code <-> Codex collaboration loop in this repo.
The sample build is a small static Decision Ledger app.

## Current Owner

Codex (E3-F docs-alignment turn, authorized by Sami on
2026-05-15)

## Current Phase

E3-E-FIX-001 accepted. E3-F authorized by Sami on 2026-05-15 as a
docs-alignment turn before any kit extraction. Explicit
authorization text recorded here and in the consultation thread:

  "Approved:
  1. Accept E3-E-FIX-001 as a successful design/prose-only
     housekeeping turn.
  2. Authorize E3-F as a docs-alignment turn before any kit
     extraction.

  Scope:
  - Update existing docs only to align the repo with the accepted
    E3 state.
  - No kit extraction into colorado-songwriters-collective.
  - No new adapter setup.
  - No installs, MCP registration, plugin setup, bridge
    enablement, or global config changes.
  - No branches, PRs, or pushes unless separately approved.
  - Do not move any proposal to approved except by recording this
    exact E3-F authorization.
  - Hard stop after E3-F and hand off for critique.

  Allowed files:
  - README.md
  - AGENTS.md
  - CLAUDE.md
  - .agent-handoff/PROTOCOL.md
  - .agent-handoff/COLLAB.md
  - optionally docs/chrome-runners.md only if stale browser-runner
    language needs alignment
  - new turn note:
    .agent-handoff/turns/E3-F-codex-docs-alignment.md

  Required alignment points:
  1. Local-first, not local-only.
  2. File-based handoff is the minimal binding reference path.
  3. Signed event governance is optional add-on, not required v1
     kit.
  4. Live bridge/adapters remain disabled until separately
     approved.
  5. Turn caps are per-experiment authorization values.
  6. Browser runner can be named or explicit N/A with reason.
  7. Automation budget is N/A unless polling/cron/webhook/
     heartbeat is approved.
  8. Council/GPT/Claude/Codex consultation is optional and
     file-based by default.
  9. Prior art such as gstack, AgentBridge, tmux bridge, LLM
     Council, Zenith is cited as prior art only, not dependency.
  10. Kit extraction remains a separate action after docs
      alignment."

Codex authors E3-F. Claude consultant critiques after the docs
alignment lands.

E3 status: E3-A spec, E3-B trust-bootstrap, E3-C adapter
inspection, E3-B-FIX-001 verifier hardening, E3-D
adapter-selection design, E3-D-FIX-001 wrapper preconditions,
E3-E kit-extraction + harness-control design, and E3-E-FIX-001
kit housekeeping all accepted. E3-F docs-alignment pending.
Kit extraction remains a separate sub-experiment requiring
Sami's explicit per-action approval AFTER E3-F lands and is
critiqued.

E3-E-FIX-001 Claude consultant critique filed (2026-05-15) at
HEAD `10227c5`. Zero blockers. All five authorized nits resolved
with precision: `{{IDLE_AUTOMATION_BUDGET}}` N/A-by-default with
anti-pattern call-out against silently inheriting E2's numbers;
`{{TURN_CAP}}` per-experiment scope-bounded set by authorizing
approval; `{{BROWSER_RUNNER_CHOICE}}` named-runner-or-explicit-N/A
with documented reason; starter turn-note template with full schema
plus optional sections; Zenith citations include
"read 2026-05-15" annotation captured in the fix-turn note rather
than retroactively edited into E3-E (correct append-only
discipline).

Three small consultant nits-of-the-fix flagged as forward-flags
for future kit-bootstrap or first extraction turn (NOT for
E3-E-FIX-001 acceptance):
1. Two starter-turn-template locations proposed; future
   kit-bootstrap should pick one. Consultant preference:
   `.agent-handoff/prompts/starter-turn-note.md`.
2. Per-experiment turn cap mechanism now framed but not located;
   future PROTOCOL.md template should specify where in
   authorization wording the cap appears (e.g., "Cap: N turns"
   labeled line).
3. Read-date convention specified for URL citations only; should
   generalize to non-URL prior art (papers, screenshots, talks).

Codex's two open questions answered: yes, only authorized nits
addressed without silent protocol/extraction action (verified
E3-E itself unedited); no blocker wording before future extraction.

E3 status: E3-A spec, E3-B trust-bootstrap, E3-C adapter
inspection, E3-B-FIX-001 verifier hardening, E3-D
adapter-selection design, E3-D-FIX-001 wrapper preconditions,
E3-E kit-extraction + harness-control design, and E3-E-FIX-001
kit housekeeping all accepted. E3 enablement (actual adapter
setup, install, MCP registration, plugin install, kit extraction
into another repo) remains a separate per-action sub-experiment
requiring Sami's explicit approval recorded in COLLAB.md.

Sami's decision queue:
- Accept E3-E-FIX-001 as filed, then choose between:
  (a) authorize the first kit-extraction action sub-experiment
      (likely portable folder inside this repo or discovery turn
      reading colorado-songwriters-collective's actual state);
  (b) pivot to a queued item (Experiment 4 council skill pack,
      separate wrapper-codex-mcp trust turn for future direct-MCP
      enablement);
  (c) defer further E3 work.

Hard stop remains active. No kit files were created outside this
repo, no protocol change was applied, no signed governance
packaging was performed, no adapter was enabled, and no proposed
item was moved to approved.

E3-E accepted. E3-E-FIX-001 was authorized by Sami on 2026-05-15 as
a design/prose-only housekeeping turn. Explicit authorization text
is recorded here and in the consultation thread:

  "Approved:
  1. Accept E3-E as a successful kit-extraction + harness-control
     design-only turn.
  2. Authorize E3-E-FIX-001 as a tiny design/prose-only
     housekeeping turn.

  Scope:
  - Do not edit E3-E in place.
  - Create a new fix-turn note:
    .agent-handoff/turns/E3-E-FIX-001-codex-kit-housekeeping.md
  - Update COLLAB.md handoff only.
  - Address only the five E3-E critique nits:
    1. {{IDLE_AUTOMATION_BUDGET}} explicitly says N/A if no
       automation is enabled.
    2. {{TURN_CAP}} is reframed as per-experiment, not repo-wide.
    3. {{BROWSER_RUNNER_CHOICE}} includes an explicit N/A
       acceptable path.
    4. Starter turn-note template is added to the future kit
       contents.
    5. Zenith citations include read date, e.g. \"read 2026-05-15.\"

  Constraints:
  - Design/prose only.
  - No kit extraction into colorado-songwriters-collective.
  - No file creation outside this Claude-Codex repo.
  - No installs, MCP registration, plugin setup, bridge
    enablement, or global config changes.
  - No protocol changes unless proposed and stopped for approval.
  - No commits, pushes, PRs, or branches unless separately
    approved.
  - Hard stop after the fix note and COLLAB.md handoff update."

Codex filed `.agent-handoff/turns/E3-E-FIX-001-codex-kit-housekeeping.md`
as the authorized tiny housekeeping turn. It addresses only the five
E3-E critique nits: automation budget N/A path, per-experiment turn
cap framing, browser-runner N/A path, starter turn-note template, and
Zenith citation read dates. E3-E itself remains unedited.

Claude consultant critiques E3-E-FIX-001 next. No further E3 work or
kit-extraction action is authorized while that critique is pending.

E3 status: E3-A spec, E3-B trust-bootstrap, E3-C adapter
inspection, E3-B-FIX-001 verifier hardening, E3-D
adapter-selection design, E3-D-FIX-001 wrapper preconditions,
and E3-E kit-extraction + harness-control design all accepted.
E3-E-FIX-001 housekeeping is filed and awaiting Claude critique.
E3 enablement (actual adapter setup, install, MCP registration,
plugin install, kit extraction into another repo) remains a separate
per-action sub-experiment requiring Sami's explicit approval recorded
in COLLAB.md.

E3-E Claude consultant critique filed (2026-05-15) at HEAD
`a77860b`. Zero blockers. All six focus areas endorsed:
minimal/optional file split correct; signed governance properly
optional; harness-control loop preserves the proven pattern with
six elements + eight gap-finding triggers + six replanning
triggers; Zenith cited only as article/report prior art with
exemplary UNKNOWN labeling; stopping discipline / token budget
strong (concrete numbers + "What NOT to extract" enumeration);
colorado-songwriters-collective portability concrete enough as
placeholders (right discipline to not inherit this repo's values
silently).

Codex's four open questions answered: yes to signed-event trust
bootstrap optional in minimal kit; one minimal-file recommendation
(starter turn-note template); yes to digests/ and consultants/ as
cheap empty directories in v1; no Zenith reference overclaims.

Five small consultant nits (NOT for E3-E acceptance):
1. `{{IDLE_AUTOMATION_BUDGET}}` placeholder should explicitly say
   N/A if no automation is enabled.
2. `{{TURN_CAP}}` is per-experiment in our actual practice, not
   per-repo; reframe placeholder to match.
3. `{{BROWSER_RUNNER_CHOICE}}` lacks an explicit "N/A acceptable"
   path for adopters with no browser surface.
4. Starter turn-note template missing from optional files (would
   drop highest-friction part of cold start).
5. Zenith citation read-date not pinned ("read 2026-05-15" would
   improve reproducibility of the prior-art claim).

Sami's decision queue:
- None immediate while Claude's E3-E-FIX-001 critique is pending.
- Later only, if separately authorized: choose whether the next E3
  step is kit extraction toward `colorado-songwriters-collective`, a
  portable kit folder inside this repo, a protocol/template update, or
  deferral of further E3 work.

Hard stop remains active. No kit files were created outside this
repo, no protocol change was applied, no signed governance
packaging was performed, no adapter was enabled, and no proposed
item was moved to approved.

E3-D accepted. E3-D-FIX-001 was authorized by Sami on 2026-05-15 as
design/prose only. Explicit authorization text recorded here and in
the consultation thread:

  "Approved:
  - Accept E3-D as a successful adapter-selection design turn.
  - Authorize E3-D-FIX-001 as design/prose only.
  Scope:
  - Edit only COLLAB.md and a new E3-D-FIX-001 turn note, unless
    the agent proposes a tiny PROTOCOL.md note and stops for
    approval.
  - Address only the five E3-D critique nits:
    1. make Claude/wrapper coordinator registration explicit;
    2. choose wrapper-as-own-coordinator vs Claude-key signing;
    3. define inbound attested_by_observer semantics;
    4. define durable approval-event-before-allow ordering;
    5. define wrapper binary/source identity verification.
  - No installs, MCP registration, plugin setup, .mcp.json, bridge
    enablement, global config changes, commits, pushes, PRs,
    branches, or adapter execution.
  - Hard stop after E3-D-FIX-001 and hand off for critique."

Sami's preferred answers (Codex may agree, push back, or refine each
in writing):
- Nit 2: wrapper gets its own coordinator identity/keypair.
- Nit 3: inbound MCP responses are `attested_by_observer`, not
  Codex-signed.
- Nit 4: approval events must be durably accepted before the
  wrapper sends `allow`.
- Nit 5: wrapper source/binary identity must be verified before it
  can emit approval-related events.

Codex authored E3-D-FIX-001 (mirrors E3-B-FIX-001 authorship pattern).
Claude consultant is the next critique agent.

E3 status: E3-A spec accepted, E3-B trust-bootstrap accepted, E3-C
adapter inspection accepted, E3-B-FIX-001 verifier hardening
accepted, E3-D adapter-selection design accepted. E3-D-FIX-001 will
tighten direct-MCP wrapper preconditions before any future
enablement sub-experiment. E3 enablement (actual adapter setup,
install, MCP registration, plugin install) remains a separate
per-adapter sub-experiment requiring Sami's explicit approval
recorded in COLLAB.md.

E3-D Claude consultant critique filed (2026-05-15). Zero blockers.
Independent review endorsed: direct codex mcp-server first selection
(with Codex's correction that direct MCP is "not a risk downgrade,
just the cleaner first wrapper target"); the six-method allow-list
verbatim; the blocked-by-default surface enumeration; the
signed-event boundary; the 9-step rollback procedure (especially the
plugin-install-during-direct-MCP-rollback defensive rule); the
10-item verification evidence list; the Stop-hook isolation as a
separate sub-experiment.

Five nits flagged for future direct-MCP enablement sub-experiment
(NOT for E3-D acceptance):
1. Make Claude/wrapper coordinator registration step explicit in
   preconditions (recommend separate prior trust turn, not a
   sub-step of direct-MCP enablement).
2. Pick wrapper-coordinator identity design: transport-only using
   Claude's keys vs the wrapper as its own coordinator with
   Sami-rooted keypair. Recommend the latter for trust separation.
3. Sharpen inbound signature semantics: wrapper-observed envelopes
   must mark themselves `attested_by_observer`, not as
   Codex-signed events.
4. Document approval-timing ordering: signed approval event
   durably persisted BEFORE wrapper sends allow response BEFORE
   Codex acts.
5. Add wrapper binary identity verification (committed source hash
   or build artifact signature) before granting approval-event-
   emission capability.

Plus consultant-side answers to Codex's two structural open questions
(yes to direct-MCP first; additional blocked-method categories
enumerated for the deny list: server-initiated push, session
lifecycle, telemetry/logging).

E3 status: E3-A spec accepted, E3-B trust-bootstrap accepted, E3-C
adapter inspection accepted, E3-B-FIX-001 verifier hardening
accepted, E3-D adapter-selection design accepted. E3 enablement
(actual adapter setup, install, MCP registration, plugin install)
remains a separate per-adapter sub-experiment requiring Sami's
explicit approval recorded in COLLAB.md.

Sami's immediate decision queue:
- None while Claude's E3-D-FIX-001 critique is pending.
- Later only, if separately authorized: decide whether the next E3
  step is a wrapper-coordinator trust turn, a direct-MCP enablement
  design, Experiment 4 council skill pack work, or kit extraction
  toward colorado-songwriters-collective.

Codex filed `.agent-handoff/turns/E3-D-codex-adapter-selection.md`
as the authorized adapter-selection design-only turn. E3-D selects
direct `codex mcp-server` wrapper as the first future enablement
candidate, official Codex plugin wrapper as the second future
candidate, and keeps CCB and Claude Squad pattern-only under the
current AGPL posture. File-based handoff remains the binding
reference path.

Sami's verbatim E3-D authorization is preserved in the E3-D turn note;
it was also recorded in prior `COLLAB.md` state at commit `0a1f326`.

E3-D does not authorize any install, plugin setup, MCP registration,
`.mcp.json` edit, bridge enablement, live transport, global config
change, commit, push, PR, branch, wrapper code, or proposed-to-approved
transition. Any actual adapter enablement remains a separate
per-adapter sub-experiment requiring Sami's explicit approval recorded
in `COLLAB.md`.

E3 status: E3-A spec accepted, E3-B trust-bootstrap accepted, E3-C
adapter inspection accepted, E3-B-FIX-001 verifier hardening accepted,
and E3-D design filed for Claude critique.

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
parallel authorization. E3-C critique by the Claude consultant was
filed and accepted with zero blockers.

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

Secret safety status: `.gitignore` contains `.agent-handoff/local/`,
`.DS_Store`, and `.claude/worktrees/`.
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

E3-E-FIX-001 tiny kit-housekeeping turn written at
`.agent-handoff/turns/E3-E-FIX-001-codex-kit-housekeeping.md`.
Codex left E3-E as-filed and addressed only the five authorized
consultant nits in a new append-only note:
`{{IDLE_AUTOMATION_BUDGET}}` is N/A by default unless polling, cron,
webhook, or heartbeat automation is scoped; `{{TURN_CAP}}` is
per-experiment and named by the authorizing approval, not a repo-wide
default; `{{BROWSER_RUNNER_CHOICE}}` must be either a named runner or
explicit N/A with reason; the optional kit files should include a
starter turn-note template; and URL prior-art citations should include
read dates, with E3-E's Zenith references treated as read 2026-05-15.

No E3-E edit, PROTOCOL.md edit, kit extraction, file creation outside
this repo, install, MCP registration, plugin setup, bridge enablement,
global config change, git operation, or proposed-to-approved transition
was performed. Hard stop now waits for Claude's read-only
E3-E-FIX-001 critique.

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

- None immediate while Claude's E3-E-FIX-001 critique is pending.
- Later only, if separately authorized: which files become the v1
  minimal kit?
- Later only, if separately authorized: should the kit include the
  trust-bootstrap verifier or only the file-based reference protocol?
- Later only, if separately authorized: should a
  `colorado-songwriters-collective`-specific bootstrap turn template
  be drafted?
- Later only, if separately authorized: what distribution mechanism
  and open-source license should the kit use?
- Later only, if separately authorized: should direct
  `codex mcp-server`, official Codex plugin, council runtime, or any
  other adapter/council path be scoped separately?

## Next Request To Claude

Perform the E3-E-FIX-001 architecture-consultant critique of
`.agent-handoff/turns/E3-E-FIX-001-codex-kit-housekeeping.md` and
this COLLAB handoff update. Confirm whether the fix note addresses
only the five authorized nits: automation-budget N/A path,
per-experiment turn cap framing, browser-runner N/A path, starter
turn-note template, and Zenith citation read dates. Verify that E3-E
was not edited in place and that no protocol change, kit extraction,
file creation outside this repo, install, MCP registration, plugin
setup, bridge enablement, global config change, git operation, or
proposed-to-approved transition occurred. Stay read-only and return
findings, blockers, and nits for Sami.

## Next Request To Codex

None active. Hard stop after E3-E-FIX-001 until Claude's critique is
filed and Sami explicitly authorizes any next scope.

## Next Request To Sami

None immediate unless you want to redirect the experiment. The next expected
action is Claude's E3-E-FIX-001 critique.
