Previous experiment terminal turn: Experiment 3 / E3-D-FIX-001-claude-critique.md

# E3-E - Codex kit-extraction and harness-control design

## Agent
Codex

## Phase
architecture

## Schema
Reuses the Experiment 1 turn-note schema explicitly. Includes Evidence Basis
and Portability Findings sections per the active PROTOCOL.md additions. This
is a design-only portability and harness-control extraction turn. It does not
create a kit, copy files into another repo, install tools, register MCP, enable
bridges, edit global config, commit, push, open a PR, create a branch, or move
any proposed item to approved.

## Files touched this turn
- `.agent-handoff/turns/E3-E-codex-kit-extraction-harness-design.md`
  (created)
- `.agent-handoff/COLLAB.md` (edited; handoff fields only)

## Evidence Basis
- USER SAID: Sami explicitly accepted E3-D-FIX-001 and authorized E3-E on
  2026-05-15 as kit-extraction + harness-control design only, with hard stop
  after this design note and the COLLAB.md handoff update.
- USER SAID: Sami required II Zenith to be treated as prior art for
  long-running-agent harness design, while forbidding installs, cloning,
  vendoring, enablement, or source claims unless verified.
- FILE VERIFIED: `.agent-handoff/PROTOCOL.md` contains the Stopgate Rule,
  Experiment 1 turn-note schema, Evidence Basis, Portability Findings,
  Response History Policy, and Unscheduled Fix-Turn Shape.
- FILE VERIFIED: `.agent-handoff/COLLAB.md` records the E3-E authorization
  and says only Sami can move proposed-to-approved.
- FILE VERIFIED: E1-FIX-001, E2-001 through E2-008, E3-A, E3-B, E3-B-FIX-001,
  E3-D, E3-D-FIX-001, their critiques, digest 001, and syntheses 001 and 002
  were read for the control-loop and portability pattern.
- FILE VERIFIED: `AGENTS.md`, `CLAUDE.md`, `README.md`,
  `docs/test-project.md`, and `docs/chrome-runners.md` were read. AGENTS.md
  was re-read before drafting to reconfirm append-only notes, COLLAB handoff,
  Chrome-first browser QA, and no installs/git operations without approval.
- FILE VERIFIED: Public Intelligent Internet pages were read for Zenith as
  article/report prior art only: `https://ii.inc/web/blog/post/zenith-research`
  and `https://github.com/Intelligent-Internet/zenith`.
- AGENT SUMMARY: The proven Claude-Codex pattern is repo-file state
  preservation, critique-driven gap finding, revisable planning, independent
  verification, optional council consultation through frozen digests, and hard
  stopping at Sami approval gates.
- INFERENCE: The minimal portable kit should start with docs/templates and a
  file-based handoff reference path. Signed-event trust bootstrap, adapters,
  and council runtime automation are optional layers, not the v1 minimum.
- UNKNOWN: No Zenith source code was fetched, cloned, installed, run, or
  inspected in this turn. Zenith implementation details are not claimed and
  are not load-bearing for this kit design.

## Decisions (binding)
- The proposed v1 kit is repo-local, docs-first, and no-install. It copies a
  small protocol scaffold into an adopting repo; it does not register MCP,
  install plugins, mutate global Claude/Codex config, or enable live bridges.
- The binding reference path remains file-based handoff: `COLLAB.md` current
  state plus append-only turn notes under `.agent-handoff/turns/`.
- The signed-event trust-bootstrap implementation from E3-B is an optional
  governance add-on for adopters that want cryptographic event verification.
  It is not required for the smallest usable Claude-Codex handoff kit.
- The harness-control loop is portable as a process specification: preserve
  state, reopen gaps, revise plans, verify independently, adapt orchestration,
  and stop on explicit gates or budget limits.
- II Zenith references in this note are article/report prior art
  [USER SAID, FILE VERIFIED]. Zenith implementation/source details remain
  [UNKNOWN] and are not extracted.
- Actual kit extraction into `colorado-songwriters-collective` or any other
  repo is a separate sub-experiment requiring explicit Sami approval recorded
  in COLLAB.md before any file is created or modified outside this repo.

## Minimal kit files
Every adopting repo gets the smallest file-based operating surface:

- `.agent-handoff/PROTOCOL.md`: template with placeholders. Must include the
  Stopgate Rule, required reading loop, append-only turn-note policy,
  Experiment 1 schema, Evidence Basis, Portability Findings, Response History
  Policy, and Unscheduled Fix-Turn Shape.
- `.agent-handoff/COLLAB.md`: template current-state view. Must include Goal,
  Current Owner, Current Phase, ownership/no-touch sections, latest responses,
  next requests, and questions requiring Sami approval.
- `AGENTS.md`: Codex-facing repo instructions. Must name required reading,
  append-only turn notes, COLLAB handoff fields, safety stopgates, and the
  repo's browser-runner rule.
- `CLAUDE.md`: Claude-facing mirror of AGENTS.md with the same shared rules
  and agent-specific handoff fields.
- `.agent-handoff/turns/.gitkeep`: ensures the append-only turn-log directory
  exists before the first turn.
- `.gitignore`: must include `.agent-handoff/local/`. Recommended additions
  are `.DS_Store` and `.claude/worktrees/`; adopters may add repo-specific
  generated artifacts.

Recommended but not strictly required for the v1 minimum:

- `.agent-handoff/digests/.gitkeep`: include in the minimal bundle if the
  repo expects cross-thread or external-consult snapshots from day one.
- `.agent-handoff/consultants/.gitkeep`: include in the minimal bundle if the
  repo expects filed consultant responses from day one.

The conservative v1 default is to ship both empty directories because they are
cheap, repo-local, and align with the proven council pattern, but the protocol
can operate with only `turns/` until the first consultation.

## Optional files
Adopters should add these only when the matching capability is explicitly in
scope:

- `.agent-handoff/src/trust-bootstrap.mjs`: optional if adopting E3-B-style
  signed-event governance. Without it, file-based handoff remains the binding
  reference and COLLAB/turn notes carry the coordination contract.
- `.agent-handoff/trust/README.md` or templates: optional explainer for
  trust registry setup, root fingerprint recording, coordinator registration,
  and possession proofs. Real trust files are generated per repo, not copied.
- `.agent-handoff/prompts/`: optional paste-ready prompt directory for
  starting Claude/Codex turns, consultant critiques, cold-read tests, and
  handoff continuations.
- `.agent-handoff/digests/` and `.agent-handoff/consultants/`: optional but
  recommended for council-style consultation, frozen summaries, and synthesis
  files.
- `docs/<adapter-name>-runners.md`: optional per-adapter runner docs, for
  example Chrome runner, Codex MCP wrapper runner, or repo-specific CI runner
  notes.
- `docs/handoff-threat-model.md`: optional security/threat model extracted
  from E2 if the repo is adopting signed events, automation, or public kit
  distribution.
- `test/scaffold` or repo equivalent: optional scaffold check that verifies
  required files exist, turn notes follow the schema, ignored local paths stay
  ignored, and no known secret paths are tracked.
- `.agent-handoff/schemas/`: optional machine-readable envelope, turn-note, or
  COLLAB schema files if the repo wants validation before signed-event
  implementation.

## Local/generated/secret files
These stay gitignored, repo-local, or generated per adopting repo. They must
not travel with the portable kit:

- `.agent-handoff/local/keys/`: private signing keys per Sami root,
  coordinator, or wrapper. Never tracked.
- `.agent-handoff/local/recovery/recovery.txt`: out-of-band recovery channel.
  Human-readable, low-trust, local-only, and non-authorizing.
- `.agent-handoff/local/watermarks/`: per-coordinator import watermarks.
- `.agent-handoff/local/nonces/`: local replay caches if used.
- `.agent-handoff/local/tmp/` or equivalent scratch state for verifier tests,
  local adapter pid files, or temporary imports.
- Real `.agent-handoff/events/`, `.agent-handoff/trust/agents.json`, and
  `.agent-handoff/trust/possession-proofs/` generated for this repo. A kit may
  ship templates or fake examples, not this repo's real trust/event state.
- `.DS_Store`, `.claude/worktrees/`, editor caches, OS junk, browser-profile
  artifacts, screenshots with private data, and any secrets or credential
  material.

## Repo-specific placeholders
The adopter must fill these before first use. For
`colorado-songwriters-collective`, the examples below are placeholders, not
verified current repo configuration:

- `{{REPO_IDENTITY}}`: example
  `github:samiserrag/colorado-songwriters-collective`.
- `{{SAMPLE_PROJECT_NAME}}`: replace Decision Ledger with the adopting repo's
  actual product surface, for example Colorado Songwriters Collective event
  platform or a narrower lane such as event concierge.
- `{{COORDINATOR_IDS}}`: define initial agents in scope, such as `codex`,
  `claude`, `sami-root`, and any later wrapper coordinators. Do not copy this
  repo's real keys.
- `{{OWNERSHIP_SPLIT}}`: file/directory ownership for the current experiment,
  including shared files and merge/review responsibilities.
- `{{NO_TOUCH_FILES}}`: stopgated paths for the experiment, such as production
  config, migrations, secrets, generated files, signed trust artifacts, or
  unrelated feature areas.
- `{{BROWSER_RUNNER_CHOICE}}`: the repo's actual browser QA path. This repo is
  Chrome-first; another repo may choose Codex Chrome plugin, Claude in Chrome
  MCP, Playwright, or no browser runner only after documenting the choice.
- `{{CI_RUNNER_LABEL}}`: actual runner label, for example Ubicloud or standard
  GitHub Actions. Do not inherit this repo's Ubicloud label by default.
- `{{TRUST_ROOT_KEY_FINGERPRINT}}`: required only if signed governance is
  adopted. Record the adopter's own root fingerprint, not this repo's.
- `{{TURN_CAP}}`: default number of turn notes before Sami re-approval is
  required for that experiment.
- `{{IDLE_AUTOMATION_BUDGET}}`: defaults may be copied from E2, but the repo
  owner must confirm them before enabling any polling or heartbeat automation.

## Harness-control loop
The portable harness is not an adapter. It is the control loop around Claude,
Codex, reviewers, testers, and optional consultants.

1. State preservation: every meaningful turn writes durable repo-visible state
   into `COLLAB.md` and a new append-only turn note. If signed governance is
   adopted, accepted events become the authoritative primitive and COLLAB is a
   derived current-state view. Cold readers must be able to reconstruct owner,
   phase, stopgates, decisions, next request, and blockers from files alone.
2. Repeated gap-finding: critique turns deliberately reopen the distance
   between the current artifact and Sami's original requirement. The trigger is
   not "the prior agent failed"; it is "what is still missing, unsafe, vague,
   or over-scoped?"
3. Revisable planning: plans remain live. E2-005 overcorrected after prior-art
   consultation; E2-006 found the gap; E2-007 re-split the design into binding
   file reference plus exploratory adapters. The kit should preserve that
   ability to re-scope instead of treating the first architecture as final.
4. Independent verification: worker self-reports are not enough. Use cross-agent
   critique, verifier/tester turns, browser evidence when UI changes, scaffold
   checks when available, and cold-read tests before calling a slice done.
5. Adaptive orchestration: the council pattern is frozen digest -> independent
   consultant responses -> synthesis -> scoped next turn. It should be invoked
   only when added signal justifies cost. Per-consultant files are append-only.
6. Stopping discipline: the Stopgate Rule, explicit turn caps, hard handoffs,
   no silent proposed-to-approved transitions, and token/automation caps are
   part of the product, not process decoration.

II Zenith article/report prior art [USER SAID, FILE VERIFIED] reinforces the
same high-level control mechanisms: preserved state, repeated gap-finding,
revisable planning, independent verification, adaptive orchestration, and
stopping discipline. Zenith implementation/source details remain [UNKNOWN] for
this turn, and the kit design stands on this repo's proven Claude-Codex
evidence even if every Zenith reference is removed.

## Gap-finding triggers
Fire a critique or gap-finding turn when any of these signals appear:

- Schema fidelity gap: a turn uses the old schema, omits Evidence Basis, skips
  Portability Findings, or relies on mutable latest-response fields instead of
  append-only records.
- Concrete mechanism gap: architecture names a primitive but not the chain of
  trust, verification step, failure behavior, or recovery path. E3-A and E3-B
  were shaped by this trigger.
- Boundary scope gap: a prior turn demotes or promotes too much. E2-005's
  re-scope correctly moved away from transport-first thinking but over-demoted
  Tier 0/Tier 1, which E2-006 caught.
- Integrity-check gap: verification reports success without a top-level
  `ok`, nonzero exit on critical failure, filename sequence check, or negative
  test evidence. E3-B-FIX-001 is the example.
- Identity/signature semantics gap: an adapter or wrapper can blur who signed
  what, what is merely observed, or what is authorized. E3-D-FIX-001 is the
  example.
- Portability gap: a design assumes global config, installed plugins,
  machine-local paths, browser tooling, runner labels, or private repo context
  without parameterizing them.
- Stopgate gap: a plan implies approval from model consensus, prior delegation,
  silence, or a client approval prompt. That is a blocker under PROTOCOL.md.
- Stale-plan gap: new prior-art evidence, test failures, or implementation
  discoveries invalidate the current plan's assumptions.

## Independent verifier/tester requirements
A kit adopter needs at least one independent path for each adopted layer:

- File-based protocol only: a cold-read test. A fresh agent must read
  PROTOCOL, COLLAB, docs, and the latest turn note and correctly state owner,
  phase, blockers, next agent, stopgates, and allowed files.
- Browser/UI work: browser QA through the repo's declared runner. For this
  repo that is Chrome-first; adopters must document their own runner and record
  URL/path, action, visible outcome, and console/network issues.
- Static/scaffold check: `npm test` or equivalent if the repo has one. It
  should validate required scaffold files, schema headings, gitignored local
  paths, and no obvious tracked secrets.
- Signed governance: run the trust-bootstrap verifier or its adopter-specific
  equivalent. Required evidence should include self-test, verify exit code,
  top-level `ok`, key-ignore checks, event filename/hash/sequence checks, and
  negative tests in scratch state.
- Adapter/wrapper governance: before any enablement, use stubbed transport
  tests for method allow-listing, approval mapping, quarantine, rollback, and
  fail-closed behavior. Live adapter tests are separately approved.
- Council consultation: independent consultant responses must cite their
  evidence base and be filed append-only. Synthesis must distinguish USER SAID,
  FILE VERIFIED, AGENT SUMMARY, INFERENCE, and UNKNOWN.

## Replanning triggers
An experiment should re-scope instead of continuing the old plan when:

- New prior-art evidence changes which layer is novel. E2-005 followed round-3
  consultation and re-centered the work on governance rather than transport.
- A critique blocker shows the next implementation would rest on a weak
  premise. E2-006 forced E2-007 before Experiment 3 authorization.
- The implementation discovers a false assumption about the environment,
  verifier, runner, available runtime, or data shape. None has invalidated the
  E3 design yet, but the kit should make this an explicit stop trigger.
- A local mechanism proves useful but too repo-specific. Example: Decision
  Ledger was a test vehicle; the kit should extract the workflow, not the app.
- A proposed adapter, council runtime, or automation path requires install,
  network setup, global config, `.mcp.json`, plugin state, or new credentials.
  Re-scope to design/read-only until Sami approves exact setup.
- Verification repeatedly fails for the same reason. The next step should be
  a strategy change, narrower test, or independent reviewer, not another blind
  implementation attempt.

## Council-skill triggers
Invoke a third-party or multi-agent consultation only when the added cost buys
independent signal:

- Architecture pivot: major scope changes like Experiment 2's move from sample
  app to governance/control-loop design.
- Prior-art or ecosystem risk: transport, council, gstack-style, license, or
  harness claims that could make local design redundant or unsafe.
- Security-specific review: trust roots, key custody, signatures, recovery,
  prompt injection, cross-repo leakage, or adapter approval boundaries.
- License analysis: AGPL, Apache NOTICE, vendoring, code-copying, or public
  distribution questions.
- Multi-model validation before authorization: when Sami wants dissent before
  moving a proposal toward approved.
- Stale-context repair: frozen digest plus consultant responses when a new
  thread cannot safely reconstruct prior work from raw turns alone.

The council pattern is optional and file-based by default. No LLM Council
runtime, API key, plugin, cron, or bridge is part of this E3-E extraction.

## Stopping discipline / token budget
The kit should enforce restraint through explicit defaults:

- Stopgate Rule: only Sami moves proposed-to-approved and only with explicit,
  scoped, recorded approval.
- Turn caps: default to a four-turn rhythm for architecture/critique/revision/
  acceptance unless Sami sets a different cap. Stop when the cap is reached.
- Experiment caps: define start/end conditions, allowed files, no-touch files,
  and the exact next agent before the first turn.
- Idle automation cap from E2 design: no more than two model wakeups per hour
  per repo and 50,000 input tokens per day for polling/heartbeat work unless
  Sami explicitly changes it.
- Empty-poll pause: after repeated no-op checks, pause model wakeups until a
  new actionable file appears or Sami resumes the watcher.
- Per-cycle human friction target: one clear approval question per stopgate
  bundle, with the smallest safe scope.
- Per-consultant response budget: consultant prompts should request focused
  findings, blockers, nits, and evidence labels, not open-ended essays.
- Hard stop phrases matter. "Hard stop after the design note" means no next
  E3 work, no kit extraction action, and no file creation outside this repo
  until Claude critiques and Sami approves a next scope.

## What NOT to extract
The portable kit should not copy:

- Decision Ledger app specifics. It was a test vehicle, not the deliverable.
- This repo's real Ed25519 private keys, public fingerprints, coordinator ids,
  signed events, possession proofs, or trust-registry state.
- Sami-named historical content, private repo history, long COLLAB narrative,
  consultation transcripts, or the 33-commit story as adopter-facing material.
- E2-001 Section 3 as a binding async hierarchy in full. The binding part is
  Tier 0 manual handoff and Tier 1 file inbox/outbox; cron, webhooks, plugins,
  and bridges are optional adapters.
- gstack-style global install or global config mutation patterns. The v1 kit
  must remain repo-local and no-install.
- Live adapter setup, MCP registration, plugin install, bridge enablement,
  `.mcp.json` edits, Stop hooks, cron jobs, or webhooks.
- CCB or Claude Squad code. They remain pattern-only unless Sami later approves
  a separate license-compatible scope.
- II Zenith code/runtime/source details [UNKNOWN]. This turn cites Zenith only
  as article/report prior art [USER SAID, FILE VERIFIED].
- Browser runner assumptions from this repo without revalidation. Chrome-first
  is this repo's rule, not an automatic rule for every adopter.
- Unbounded agent loops. Repeated gap-finding without stopping discipline is a
  cost hazard, not a product feature.

## Open questions for Sami
- Which files exactly become the v1 minimal kit: only PROTOCOL, COLLAB,
  AGENTS, CLAUDE, turns/.gitkeep, and .gitignore, or also digests/ and
  consultants/ directories by default?
- Should the v1 kit ship the trust-bootstrap verifier as optional included
  source, or should it ship only the file-based reference protocol and point to
  signed governance as a later add-on?
- Should there be a `colorado-songwriters-collective`-specific bootstrap turn
  template, or should that repo first receive only the generic kit plus
  placeholders?
- What distribution mechanism do you want: template repo, gist, copied folder
  from this repo, npm package, or documented manual copy?
- What open-source license should apply to the kit: MIT, Apache-2.0, or
  something else?
- Should II Zenith receive any engagement beyond conceptual article/report
  citation [USER SAID, FILE VERIFIED], such as a deeper paper review, or
  should it stay non-load-bearing?
- For `colorado-songwriters-collective`, what is the correct browser-runner
  default and CI runner label? Do not inherit this repo's values by accident.
- Should the first actual extraction action write files into
  `colorado-songwriters-collective`, create a portable folder inside this repo,
  or first draft a patch plan for critique?
- Should the kit define a default turn cap and token budget verbatim from E2,
  or should each adopter choose those values during bootstrap?
- Should council consultation directories be part of v1, or deferred until the
  first adopter actually needs independent multi-agent review?

## Open questions for the other agent
- Does Claude agree that signed-event trust bootstrap should be optional for
  the minimal kit rather than included in every adoption by default?
- Does Claude see any required minimal file missing from the list above?
- Does Claude agree that digests/ and consultants/ can ship as cheap empty
  directories without forcing council runtime adoption?
- Does Claude see any Zenith reference that overclaims beyond article/report
  prior art?

## Blockers (must-fix before continuing)
- Claude architecture-consultant critique of this E3-E design is required
  before any kit-extraction action.
- Sami's explicit approval is required before creating, editing, copying, or
  installing any kit files outside this Claude-Codex repo.
- Sami's explicit approval is required before any PROTOCOL.md change, signed
  governance packaging, adapter setup, MCP registration, plugin setup, global
  config mutation, commit, push, PR, or branch.

## Nits (suggested, not required)
- A future protocol-housekeeping turn could add `rescope` and `fix` explicitly
  to the Phase enum if the repo wants schema text to match historical usage.
- A future kit README should include a short "What this kit is not" section so
  adopters do not treat it as a bridge installer.
- A future cold-read checklist should be written as a one-page template before
  the first external repo adoption.

## Browser verification
- Tool used: N/A
- URL or file path opened: N/A
- Action: N/A
- Visible outcome: N/A
- Console/network issues: N/A

Reason: design-only portability turn. No app behavior, browser surface,
runtime bridge, adapter, MCP registration, plugin, or Chrome runner changed.

## Portability Findings
- Repo-local assumptions: the minimum kit uses repo files only and assumes an
  adopting repo can commit Markdown templates plus a gitignore rule. It does
  not assume a live bridge, global config, or installed dependency.
- Machine/local-tool assumptions: none for the minimal kit beyond a text
  editor and Git. Signed governance, if adopted, currently assumes Node with
  built-in Ed25519 support because that is what E3-B used here.
- Browser/connector assumptions: browser QA is repo-specific. This repo is
  Chrome-first; adopting repos must set their own runner rather than copying
  the value silently.
- Any workaround used: web search/read was used only to verify the public II
  Zenith article/report prior-art pages. No Zenith source was cloned, installed,
  run, or used.

## Handoff
- Next agent: Claude
- Specific ask: perform the E3-E architecture-consultant critique of this kit
  extraction and harness-control design. Focus on whether the minimal/optional
  file split is correct, whether signed governance is properly optional, whether
  the harness-control loop preserves the proven Claude-Codex pattern, whether
  Zenith is cited only as article/report prior art, and whether the stopping
  discipline is strong enough before any extraction action. Stay read-only. Do
  not implement, install dependencies, enable bridges, register MCP, edit
  `.mcp.json`, modify global config, commit, push, open a PR, create a branch,
  delete files, copy kit files into another repo, or treat any proposal as
  approved.
