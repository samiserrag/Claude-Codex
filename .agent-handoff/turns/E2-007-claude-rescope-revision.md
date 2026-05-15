Previous experiment terminal turn: Experiment 2 / E2-006-codex-rescope-critique.md

# E2-007 - Claude re-scope revision (response to E2-006 critique)

## Agent
Claude

## Phase
rescope

## Schema
Reuses the Experiment 1 turn-note schema explicitly, matching the rest
of E2. Includes Evidence Basis and Portability Findings sections per
E1-FIX-001. Phase value `rescope` continues from E2-005; a future
housekeeping turn should add `rescope` to the Phase enum (per E2-005
Nits and E2-006 Nit 1 — accepted as deferred housekeeping, not
addressed in this turn).

This is a revision-of-rescope, not a new architecture. E2-005 is
preserved as filed; this turn updates the forward interpretation in
response to Codex's E2-006 critique.

## Files touched this turn
- `.agent-handoff/turns/E2-007-claude-rescope-revision.md` (created)
- `.agent-handoff/COLLAB.md` (edited)

## Evidence Basis
- USER SAID: Sami's intentional COLLAB.md edit (visible via system
  reminder) reflects acceptance of Codex's E2-006 critique outcome
  ("Codex E2-006 requires revisions before Sami is asked to authorize
  Experiment 3"). Sami did not author this revision but expects the
  Claude consultant to address Codex's three blockers.
- FILE VERIFIED: read E2-006 in full at
  `.agent-handoff/turns/E2-006-codex-rescope-critique.md`. Read
  E2-001 §3 to verify the binding-vs-exploratory split Codex requested.
  Read PROTOCOL.md to confirm "Later Bridge Experiments" section
  already names `codex mcp-server` and the official Codex plugin
  paths historically.
- AGENT SUMMARY: prior-art digest 002 confirmed file-based default is
  the most portable reference path; it requires only repo files and
  Git review, no transport install. E2-006 reinforces this by making
  it binding rather than just default.
- INFERENCE: each of Codex's three blockers represents a real defect
  in E2-005 that I missed. Accepting all three improves the re-scope
  without changing its governance-first direction.
- UNKNOWN: whether Codex will accept this revision in a (potential)
  E2-008 second critique, or whether further iterations are needed
  before Sami authorizes Experiment 3.

## Decisions (binding)

### Acceptance of E2-006 critique

All three E2-006 blockers are accepted and addressed in this revision.
Nothing in E2-006 is rejected. The governance-first / compose-don't-
replace direction in E2-005 stands.

### Blocker 1 resolution: split Section 3 into binding reference + exploratory adapters

E2-005 reclassified all of E2-001 §3 (async tier model) as exploratory.
That overcorrected. Revised forward interpretation:

**Binding reference path (canonical, must work standalone):**
- E2-001 §3 Tier 0 — manual handoff (turn notes + COLLAB.md handoff
  fields, what Experiment 1 used and what currently operates).
- E2-001 §3 Tier 1 — inbox/outbox file exchange (signed event files
  in per-coordinator directories under `.agent-handoff/`).

These two tiers are the **canonical reference transport** for the
governance layer. The signed event envelope, import validation,
quarantine, audit log, and human-readable fallback all assume this
path works without any external bridge installed. External transports
replace delivery mechanics; they do not replace these properties.

**Exploratory adapter paths (opt-in, none enabled by default):**
- E2-001 §3 Tier 2 — cron/timer polling (with the polling caps already
  defined in E2-001 §3).
- E2-001 §3 Tier 3 — webhooks (with the explicit-Sami-approval gate).
- AgentBridge (`raysonmeng/agent-bridge`) — live MCP bridge.
- CCB (`bfly123/claude_codex_bridge`) — tmux-based multi-agent.
- tmux-style bridges generally (michael-abdo/tmux-claude-mcp-server,
  bfly123/claude_code_bridge, openwong2kim/wmux, etc.).
- Official OpenAI Codex plugin for Claude Code (per E2-006 Blocker 3).
- `codex mcp-server` registered as a project-scoped Claude MCP server
  (per E2-006 Blocker 3 and PROTOCOL.md "Later Bridge Experiments").

Each adapter must satisfy the same governance contract: signed events,
approval gates, append-only audit, quarantine on malformed input.
None replaces the binding reference path; all are alternatives that
can layer on top.

### Blocker 2 resolution: event-envelope schema/spec gate before trust-bootstrap implementation

E2-005 sequenced Experiment 3 as: license inspection, transport
choice, trust-bootstrap implementation. Codex correctly identified
that trust-bootstrap implementation cannot proceed coherently without
a defined event envelope to sign.

**Revised Experiment 3 ordering:**

1. **E3-A: Event-envelope schema/spec turn (design only)**
   - Canonical event envelope: required fields (schema version, repo
     identity, branch, base commit, experiment namespace, event id,
     coordinator id, author role, parent event ids, monotonic
     per-coordinator sequence, created timestamp, nonce, payload
     hash, previous accepted event hash, payload, signature).
   - Canonical JSON serialization rules.
   - Signature coverage rule (which fields the signature covers).
   - Trust-registry snapshot shape (signed `agents.json` structure).
   - File naming convention for events, inbox/outbox, quarantine.
   - Minimal fixtures (example signed events, example invalid events
     for quarantine testing).
   - Pass/fail acceptance checks (what makes an event valid, what
     triggers quarantine).

2. **E3-B: Trust-bootstrap implementation spike (against the binding
   reference path only)**
   - Root key import per E2-003 §1.
   - Signed `trust.registry.initialized` event per the E3-A schema.
   - Single coordinator registration with possession proof.
   - File-based reference path only (Tier 0 + Tier 1). No live
     transport, no cron, no webhook, no plugin, no MCP bridge.

3. **E3-C: Adapter evaluation (read-only, can run in parallel with
   E3-A and E3-B)**
   - License inspection on CCB (`bfly123/claude_codex_bridge`) and
     Claude Squad before any code reuse decision.
   - Read-only evaluation of AgentBridge, CCB, tmux variants, and the
     official Codex plugin / `codex mcp-server` paths against the
     governance contract.
   - No installs. No vendoring. No bridge enablement.

4. **E3-D: Adapter selection (decision only, after E3-A, E3-B, and
   E3-C complete)**
   - Sami picks one or more adapters to authorize for a future
     experiment, or defers all of them.
   - Each authorized adapter is its own scoped sub-experiment with
     explicit Sami approval per adapter.

### Blocker 3 resolution: official Codex plugin / `codex mcp-server` in transport matrix

E2-005 omitted these paths despite their presence in PROTOCOL.md
"Later Bridge Experiments" and in COLLAB.md "Questions Requiring Sami
Approval." Revised transport-choice matrix for E3-C:

| Path | Type | Stopgate cost |
|---|---|---|
| File-based Tier 0 (manual handoff) | Binding reference | None — already operates |
| File-based Tier 1 (inbox/outbox) | Binding reference | None — files only |
| Cron/timer polling (Tier 2) | Exploratory adapter | Sami approval per polling config |
| Webhooks (Tier 3) | Exploratory adapter | Sami approval per endpoint |
| Official Codex plugin in Claude Code | Exploratory adapter | Sami approval to install plugin (changes Claude config) |
| `codex mcp-server` as project-scoped Claude MCP | Exploratory adapter | Sami approval to register MCP entry (project config) |
| AgentBridge (`raysonmeng/agent-bridge`) | Exploratory adapter | Sami approval to install plugin + Bun runtime |
| CCB (`bfly123/claude_codex_bridge`) | Exploratory adapter | Sami approval + license inspection (license is "Other") |
| tmux-bridge variants | Exploratory adapter | Sami approval per chosen variant |

### Other E2-006 nit handling

- **Phase enum housekeeping** (E2-006 Nit 1): accepted as deferred
  housekeeping. A future small fix turn can add `rescope` to the
  Phase enum. Not a blocker for E3 work.
- **Experiment 3 sub-decision count alignment** (E2-006 Nit 2): the
  E2-005 Decisions section listed three sub-decisions; the Open
  Questions for Sami section listed five questions. E2-007's revised
  ordering above (E3-A through E3-D) is the canonical Experiment 3
  scope going forward; the five open questions become inputs to E3-D
  adapter selection.
- **The LLM Council API-key tradeoff** (E2-006 Nit 3): accepted —
  this question moves out of Experiment 3 entirely. The LLM Council
  adoption is a separate future council experiment, not part of the
  trust-bootstrap path.
- **Codex Mate / Ruflo shallow read** (E2-006 Nit 4): accepted as
  deferred. A "control-plane patterns only" read happens before
  open-source packaging claims, not before E3 trust-bootstrap.
- **Stale "Original Hard-Stop Note" in COLLAB.md** (E2-006 Nit 5):
  accepted as deferred housekeeping. Will be removed in a later
  COLLAB.md cleanup turn.

## Open questions for the other agent
- To Codex: do you accept E2-007 as adequately addressing the three
  E2-006 blockers, or do you require an E2-008 second critique
  before Sami authorizes Experiment 3?
- To Sami: do you accept the revised Experiment 3 ordering (E3-A
  schema spec → E3-B trust bootstrap → E3-C adapter evaluation in
  parallel → E3-D adapter selection), or do you want a different
  sequence?
- To Sami: do you want the binding/exploratory split applied to
  E2-001 §3 to be reflected in a small PROTOCOL.md fix turn, or
  does the E2-007 revision stand as the forward-interpretation
  source?
- To Sami: should the official Codex plugin and `codex mcp-server`
  paths get the same license/security inspection that CCB and
  Claude Squad require, since they are first-party but still change
  Claude/Codex configuration?

## Blockers (must-fix before continuing)
- None new. Codex's three E2-006 blockers are addressed in §Decisions
  above. If Codex accepts the revision in a (potential) E2-008
  second critique, this revision-of-rescope is complete and Sami
  can authorize Experiment 3 work.

## Nits (suggested, not required)
- Future small fix turn: add `rescope` to the PROTOCOL.md Phase enum.
- Future COLLAB.md cleanup: remove the stale "Original Hard-Stop
  Note" section, align the historical Decisions Made section with
  current state, and consider archiving E1-historical sections to a
  separate file once the event-log model lands.
- The acceptance of all three E2-006 blockers without revision is a
  data point: the prior-art consultation was correct that I had
  overcorrected. The two-agent review pattern continues to earn its
  keep — Codex caught what I missed, just like Codex caught the
  in-memory-write-failure in E1 turn 002.

## Browser verification
- Tool used: N/A
- URL or file path opened: N/A
- Action: N/A
- Visible outcome: N/A
- Console/network issues: N/A

Reason: revision-of-rescope is a forward-interpretation document.
No app behavior, browser surface, runtime bridge, or automation path
changed.

## Portability Findings
- Repo-local assumptions: making file-based Tier 0 + Tier 1 the
  binding reference strengthens portability. The governance layer
  can be verified against repo files alone, without installing any
  transport. This is the right portability stance for the
  open-source kit's first published version.
- Machine/local-tool assumptions: each exploratory adapter has
  different machine-local requirements (Bun for AgentBridge, tmux +
  Python for CCB, plugin install for official Codex routes,
  Python+API-keys for The LLM Council). The binding reference path
  has zero such requirements beyond Git and a text editor.
- Browser/connector assumptions: none introduced.
- Any workaround used: none.

## Handoff
- Next agent: Codex
- Specific ask: optional E2-008 second critique. If you accept E2-007
  as adequately addressing the three E2-006 blockers, write a brief
  acceptance turn note (or update COLLAB.md to hand off to Sami
  directly) so Sami can move to Experiment 3 authorization. If you
  see remaining gaps, write E2-008 with the specific revisions
  required. Per the active Stopgate Rule, do not implement, install,
  enable bridges, edit global config, commit, push, open a PR, or
  treat any proposal as approved.
