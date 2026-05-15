Previous experiment terminal turn: Experiment 2 / E2-004-claude-second-critique.md

# E2-005 - Claude re-scope based on prior-art evidence

## Agent
Claude

## Phase
rescope

## Schema
Reuses the Experiment 1 turn-note schema explicitly, matching the rest
of E2. Adds Evidence Basis and Portability Findings sections (both
PROTOCOL.md schema additions, optional-but-active per E1-FIX-001). The
phase value `rescope` is a schema extension flagged as a nit for future
housekeeping; the original Phase enum is
`architecture | critique | implementation | smoke | retrospective` and
`fix` (added implicitly by E1-FIX-001). `rescope` is consistent with
both as a forward-looking turn that revises prior architecture in
response to new evidence rather than fixing a defect.

## Files touched this turn
- `.agent-handoff/turns/E2-005-claude-rescope.md` (created)
- `.agent-handoff/COLLAB.md` (edited)

## Evidence Basis
- USER SAID: Sami explicitly authorized "Path A: I write E2-005
  re-scope turn (lighter)" via AskUserQuestion in the consultant
  Claude thread on 2026-05-15. Scope: re-scope E2 to the governance
  layer only, drop §3 async tier from binding scope, open the
  transport+council question for Experiment 3 evaluation.
- FILE VERIFIED: read all four prior E2 turn notes (E2-001 through
  E2-004), `PROTOCOL.md` (with E1-FIX-001 active), and `COLLAB.md`
  before drafting this re-scope.
- FILE VERIFIED: read GitHub repo metadata and READMEs for
  raysonmeng/agent-bridge, sherifkozman/the-llm-council, and
  bfly123/claude_codex_bridge directly via the GitHub API; findings
  filed at `.agent-handoff/digests/002-prior-art-audit.md`.
- AGENT SUMMARY: GPT 5.5 Pro response 003 (filed at
  `.agent-handoff/consultants/gpt-5.5-pro-response-003.md`) flagged
  that several open-source projects already cover major pieces of
  what E2 designed, and recommended pausing E2 approval pending
  prior-art evaluation.
- INFERENCE: the genuine differentiation of our project is the
  governance layer (signed events, Stopgate Rule, trust registry,
  approval ledger), not the transport or council layers. None of the
  audited candidates implement the governance layer.
- UNKNOWN: which transport runtime (file-based, AgentBridge, CCB,
  tmux variants) will be selected when Experiment 3 is scoped;
  whether The LLM Council adoption is worth the runtime/credential
  cost; whether any audited candidate has supply-chain risk that
  would surface only on installation.

## Decisions (binding)

- **The four-turn E2 design rhythm (E2-001, E2-002, E2-003, E2-004)
  remains valid as filed.** No turn note is rewritten or invalidated.
  The architecture documented in those turns stands. This re-scope
  changes the forward interpretation, not the historical record.

- **E2 is re-scoped to the governance layer only.** Forward, "E2
  architecture as proposed protocol" refers exclusively to:
  - State model: append-only signed event log + derived COLLAB.md
    (E2-001 §2 + E2-003 nit handling for derived_state.updated events)
  - Security model: all seven subsections (E2-001 §4 + E2-003 §1, §3)
  - Trust bootstrap: Sami-controlled Ed25519 root with
    root-signed registry, coordinator possession proofs, normal and
    emergency rotation paths (E2-003 Blocker 1 revision)
  - Branch/fork tiebreaker: lowest-event-hash with Sami-mandatory
    exception list (E2-003 Blocker 2 revision)
  - Quarantine recovery channel:
    `.agent-handoff/local/recovery/recovery.txt` (E2-003 Blocker 3
    revision)
  - Sync primitives: `blocked_on_you`, audit gates, parallel/
    sequential allocation (E2-001 §5)
  - Token + friction budget: caps and human-friction targets
    (E2-001 §6)
  - Portability: repo-local, zero global config by default (E2-001 §7)
  - Open-source packaging: docs-first, threat model published
    alongside (E2-001 §8)

- **E2-001 §3 (async model: inbox/outbox first, cron second, webhooks
  last) is reclassified as exploratory, not binding.** The runtime
  transport question (file-based async, AgentBridge live MCP, CCB
  tmux, or other) is deferred to Experiment 3 scoping. The
  governance layer is designed to be transport-agnostic; whichever
  transport is selected must satisfy the governance layer's
  requirements (signed events, approval gates, append-only audit).

- **The council/multi-model layer is also deferred.** The current
  manual-paste-and-file pattern (Level 0 in GPT 5.5 Pro's framing,
  reflected in `.agent-handoff/consultants/`) remains the default.
  The LLM Council and similar runtime adoptions are evaluated only
  if Experiment 3 needs them.

- **Experiment 3 is now scoped as: select transport runtime + implement
  minimum signed-event primitive on top of it.** Concrete sub-decisions
  for Experiment 3 (each requires Sami's explicit authorization to
  begin):
  1. License inspection on CCB (`bfly123/claude_codex_bridge`) and
     Claude Squad before any code reuse consideration.
  2. Choice between file-based default (Experiment 1 baseline,
     proven) and a live transport (AgentBridge or CCB).
  3. Implementation spike: trust bootstrap only — root key import,
     signed `trust.registry.initialized` event, single coordinator
     registration with possession proof. Per E2-004 §3-Q4
     recommendation.

- **The "compose, don't replace" architecture is the working model.**
  Users of the eventual open-source kit pick a transport (file-based
  default, AgentBridge for live MCP, CCB for tmux) and a council
  layer (manual paste default, LLM Council for automated). Our
  protocol is the governance contract under both choices.

- **All previous Stopgate Rule constraints remain active.** No
  installs, no vendoring, no forks, no commits/pushes/PRs without
  Sami's per-action explicit approval. Per the active Stopgate Rule
  in PROTOCOL.md, only Sami can move proposed-to-approved.

## Open questions for Sami
- Do you want a separate small turn that updates `PROTOCOL.md` to
  reflect this re-scope, or does the re-scope live in E2-005 only and
  PROTOCOL.md stays clean of E2-specific architecture references?
- Do you want license inspection on CCB and Claude Squad to happen
  before Experiment 3 scoping, or as part of Experiment 3?
- Do you want Codex to author its own E2-006 critique of this
  re-scope (mirror of the four-turn rhythm), or do you accept the
  re-scope as Sami-authorized without further Codex review?
- For Experiment 3, do you want the implementation spike to begin
  on the proposed E2 architecture (treating it as approved
  in-practice for Experiment 3 work) or do you want a formal
  protocol-edit fix turn that lands the architecture in
  `PROTOCOL.md` first?
- The LLM Council requires API keys (OPENAI_API_KEY etc.). If
  Experiment 3 includes a council runtime, do you want to use API
  keys (added attack surface, paid usage) or stay CLI-only (Claude
  Code + Codex CLI as providers, no API keys needed)?

## Blockers (must-fix before continuing)
- None for the re-scope itself. Experiment 3 has its own decision
  surface (above) that requires Sami's authorization before any
  Codex or Claude work begins.

## Nits (suggested, not required)
- The Phase enum in PROTOCOL.md should explicitly include `rescope`
  alongside `fix` in a future small housekeeping turn, so the
  schema reflects the actual phase values now in use.
- Digest 002's "compose, don't replace" framing should be cited in
  the eventual open-source README so adopters understand they have
  transport and council choices, not a forced stack.
- The "Original Hard-Stop Note" section currently in COLLAB.md
  (preserved from E2-003 handoff) is now stale and should be
  removed or replaced with a reference to this re-scope. Cosmetic.

## Browser verification
- Tool used: N/A
- URL or file path opened: N/A
- Action: N/A
- Visible outcome: N/A
- Console/network issues: N/A

Reason: re-scope is a forward-interpretation document. No app
behavior, browser surface, runtime bridge, or automation path
changed.

## Portability Findings
- Repo-local assumptions: the re-scope explicitly preserves
  repo-local-by-default. The compose-don't-replace model means
  adopters can pick transports that respect their local context.
- Machine/local-tool assumptions: each candidate transport has its
  own runtime requirements (Bun for AgentBridge, Python for The LLM
  Council, tmux + Python for CCB). Experiment 3 scoping should pick
  the lightest-footprint option that meets the governance
  requirements.
- Browser/connector assumptions: none introduced by this re-scope.
  The Chrome `file://` finding from Experiment 1 still applies; that
  is a separate runtime concern from the coordination protocol.
- Any workaround used: none.

## Handoff
- Next agent: Sami
- Specific ask: review this re-scope. Decide on the five Experiment
  3 sub-decisions in §Decisions above (license inspection timing,
  transport choice, implementation spike scope, protocol-edit
  timing, council-runtime API-key tradeoff). Authorize Experiment 3
  scoping when ready, or pause until further consultation. Per the
  active Stopgate Rule, no Codex or Claude work on Experiment 3
  begins without your explicit per-decision authorization.
