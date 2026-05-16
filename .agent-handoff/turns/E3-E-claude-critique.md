Previous experiment terminal turn: Experiment 3 / E3-E-codex-kit-extraction-harness-design.md

# E3-E Claude consultant critique

## Agent
Claude

## Phase
critique

## Schema
Reuses the Experiment 1 turn-note schema explicitly. Includes
Evidence Basis and Portability Findings sections per the active
PROTOCOL.md additions. Critique-only turn over a design-only
kit-extraction + harness-control turn. Does not approve the design
as protocol, install tools, copy files outside this repo, or move
any proposal to approved.

## Files touched this turn
- `.agent-handoff/turns/E3-E-claude-critique.md` (created)
- `.agent-handoff/COLLAB.md` (edited)

## Evidence Basis
- USER SAID: Sami authorized E3-E on 2026-05-15 as kit-extraction +
  harness-control design only with strict Zenith handling rules.
  Sami also explicitly restarted this critique against verified
  state at or after commit `a77860b`.
- FILE VERIFIED: re-read E3-E in full at HEAD `a77860b` from
  `.agent-handoff/turns/E3-E-codex-kit-extraction-harness-design.md`.
  Re-read PROTOCOL.md Stopgate Rule and Success Criteria sections.
  Re-read COLLAB.md current Owner/Phase. No prior local critique
  draft existed (the interrupted Write was rejected before file
  creation).
- AGENT SUMMARY: E3-E covers all 12 required sections, defines a
  conservative repo-local v1 kit (file-based handoff is binding
  reference; signed governance is optional add-on), extracts the
  six-element harness-control loop with explicit citations to this
  repo's own experience, and cites II Zenith only as article/report
  prior art with all implementation details marked UNKNOWN.
- INFERENCE: E3-E is the strongest design-extraction turn possible
  given the proven repo evidence. Remaining nits are refinements
  that can be addressed either by Codex in a tiny housekeeping
  turn or by the adopting repo at first use. None blocks
  acceptance.
- UNKNOWN: I did not independently fetch the Intelligent Internet
  Zenith pages cited by Codex. Codex's labeling of Zenith details
  as UNKNOWN is itself the right discipline; I trust the labels
  rather than re-verifying.

## Decisions (binding)

- E3-E is accepted as a successful kit-extraction + harness-control
  design-only turn. Zero blockers stand against this critique.
- Per the active Stopgate Rule, this critique does not authorize
  any kit-extraction action. Each kit-extraction action remains a
  separate scoped sub-experiment requiring Sami's explicit
  per-action approval recorded in COLLAB.md before any file is
  created or modified outside this Claude-Codex repo.

## Per-focus-area assessment

### 1. Minimal vs optional kit split — endorsed

The minimal six-file set (PROTOCOL.md, COLLAB.md, AGENTS.md,
CLAUDE.md, turns/.gitkeep, .gitignore) is genuinely the smallest
usable surface for the protocol. Anything smaller would lose
either the schema contract, the source-of-truth state, or the
secret-safety baseline.

The optional layer (trust-bootstrap.mjs, prompts/, adapter
runner docs, threat model, scaffold check, schemas/) is correctly
gated on adopter-side capability decisions, not forced.

The conservative v1 default to ship empty digests/ and consultants/
directories alongside turns/ is the right pragmatic call —
zero-cost, prevents first-consultation directory-fumbling, and
aligns with the proven council pattern.

### 2. Signed governance properly optional — endorsed

File-based handoff already passed full Definition of Done in
Experiment 1 without any signing infrastructure. Signed
governance is correctly classified as an optional add-on for
adopters that want cryptographic event verification. Including
the verifier in v1 would raise the no-install bar without
proportional benefit for most adopters.

The kit's path between layers is also clean: an adopter can
start file-based, add signed governance later when they need it,
and add adapters/wrappers later still. Each layer composes;
none is forced.

### 3. Harness-control loop preserves the proven pattern — endorsed

The six-element framing (state preservation, repeated gap-finding,
revisable planning, independent verification, adaptive
orchestration, stopping discipline) maps cleanly onto our 33-commit
experience. Each element is grounded in concrete examples from
this repo (E2-005/E2-006/E2-007 for revisable planning;
E3-A/E3-B for concrete mechanism gap; E3-B-FIX-001 for
integrity-check gap; E3-D-FIX-001 for identity/signature
semantics gap). The loop isn't aspirational — it's the actual
pattern that produced the working artifacts on disk.

The Gap-finding triggers section (eight categories) and
Replanning triggers section (six categories) translate the loop
from process description into operational signals. That's the
piece a future adopter actually needs.

### 4. Zenith cited only as article/report prior art — endorsed

Two cited public URLs (`ii.inc/web/blog/post/zenith-research`,
`github.com/Intelligent-Internet/zenith`). All Zenith
implementation details explicitly marked UNKNOWN. The disclaimer
"the kit design stands on this repo's proven Claude-Codex
evidence even if every Zenith reference is removed" is the
correct defensive framing — it makes the Zenith citation
removable without invalidating the kit.

No fabricated source claims. No implied direct access. The
labeling discipline is exactly what Sami's authorization required.

### 5. Stopping discipline / token budget strong enough before extraction — endorsed

The Stopping discipline / token budget section is concrete with
real numbers (2 model wakeups/hour per repo, 50K input tokens/day
for polling/heartbeat work) and real mechanisms (Stopgate Rule,
turn caps, experiment caps, empty-poll pause, per-cycle human
friction target, per-consultant response budget, hard-stop phrase
discipline).

The "What NOT to extract" section (eleven items, including the
meta-rule "Unbounded agent loops are a cost hazard, not a
product feature") is the actual discipline that prevents kit
bloat. Most agent-collaboration designs proudly list what they
include; this one explicitly lists what it refuses to include.

Strong enough to extract — yes.

### 6. colorado-songwriters-collective portability concrete enough — partially

The Repo-specific placeholders section names ten placeholders
with example values mapped to colorado-songwriters-collective
specifically (e.g., `{{REPO_IDENTITY}}: example
github:samiserrag/colorado-songwriters-collective`). That's
concrete enough to start.

But the kit doesn't yet know what colorado-songwriters-collective's
actual ownership split, no-touch files, browser runner, or CI
runner is. Those are explicitly placeholders, not defaults.
That's the right discipline (don't inherit silently), but means
the first extraction action will require either Sami's input on
those values OR a discovery turn that reads
colorado-songwriters-collective's actual state to fill them.

E3-E correctly leaves this as an open question for Sami (open
question 7: "what is the correct browser-runner default and CI
runner label? Do not inherit this repo's values by accident.").
Acceptable for design-only scope.

## Answers to Codex's four open questions

1. **Signed-event trust bootstrap optional for minimal kit?** Yes.
   File-based handoff was the proven Experiment 1 baseline.
   Adopters who need cryptographic provenance can layer it on;
   adopters who need only coordinated handoff can run the minimal
   kit immediately.

2. **Required minimal file missing from the list?** One small
   recommendation: a starter turn-note template (e.g., a
   `.example` file in `turns/` or a starter prompt in `prompts/`).
   The first turn an adopter writes is the highest-friction part
   of cold start; a template skeleton drops that friction. Not
   blocking; flag as nit.

3. **Digests and consultants directories as cheap empty
   directories in v1?** Yes. The protocol pattern is most
   coherent when digest and consultant artifacts live in their
   canonical homes from day one. Empty directories are
   zero-cost.

4. **Any Zenith reference that overclaims beyond article/report
   prior art?** No. Zenith citations are appropriately scoped
   and explicitly marked. The "kit design stands on its own
   without Zenith" disclaimer is the right defensive framing.

## Strengths worth naming explicitly

- **The "What NOT to extract" section.** Eleven explicit items
  including the meta-rule about unbounded agent loops. This is
  the discipline that keeps the kit small.
- **Zenith handling.** UNKNOWN labels on every implementation
  detail; explicit "kit stands without Zenith" disclaimer. This
  is what conservative prior-art citation looks like in a
  fast-moving space.
- **Conservative v1 default with reasoning.** Codex didn't just
  pick the smallest set; it explained why digests/ and
  consultants/ ship even though they're not strictly required.
- **Concrete examples from this repo throughout.** Each abstract
  pattern in the harness-control loop has a real citation.
- **Six harness-control elements + eight gap-finding triggers +
  six replanning triggers.** Process spec translated into
  operational signals adopters can actually fire on.
- **Repo-specific placeholders enumerated against
  colorado-songwriters-collective.** Concrete, not abstract.
- **Open questions for Sami section is exceptional.** Ten
  well-formed decisions enumerated, none answerable by another
  agent.

## Open questions for Sami
- E3-E surfaces ten well-formed decisions in §Open questions
  for Sami. All ten are real decisions for you. The two I'd
  prioritize: (a) which exact files become the v1 minimal kit
  (Codex's conservative default vs your call); (b) whether the
  first extraction action writes into
  colorado-songwriters-collective directly or first builds a
  portable folder inside this Claude-Codex repo (e.g.,
  `kit/v1/`) that you can review before copying out.
- Of the five small consultant nits below, which (if any) do
  you want addressed in a small E3-E-FIX-001 housekeeping turn
  before any actual kit-extraction action begins?

## Blockers (must-fix before continuing)
- None. E3-E is acceptable as filed.

## Nits (suggested, not required for E3-E acceptance)

1. **`{{IDLE_AUTOMATION_BUDGET}}` placeholder applicability.**
   The E2 budget defaults (2 model wakeups/hour, 50K input
   tokens/day) are specifically for polling/heartbeat work in a
   multi-agent coordinator topology. For an adopter who doesn't
   enable any automation, the budget is N/A. Recommend the
   placeholder explicitly say "N/A if no automation is enabled"
   and only become required when polling/cron/webhook
   capabilities are scoped.

2. **`{{TURN_CAP}}` placeholder vs per-experiment cap discipline.**
   The kit treats turn cap as a per-repo placeholder, but our
   actual cap discipline was set per-experiment by Sami's
   authorization, not as a static repo-wide value. Recommend
   reframing: turn cap is set in each experiment's authorization,
   not repo-wide.

3. **`{{BROWSER_RUNNER_CHOICE}}` lacks a "no browser QA" path.**
   Most placeholders have example defaults. Browser runner
   doesn't, but the kit also doesn't say "N/A is acceptable for
   adopters with no browser surface." Recommend adding "N/A
   acceptable; document why in PROTOCOL.md" as an explicit
   option.

4. **Starter turn-note template missing from optional files.**
   The first turn an adopter writes is highest-friction. A
   template skeleton (e.g., a `.example` file in `turns/` or in
   `prompts/`) would drop that friction. Codex listed
   `prompts/` as optional but didn't name a starter turn
   template inside it.

5. **Zenith citation read-date not pinned.** Recommend appending
   "read 2026-05-15" to each Zenith URL citation so future
   readers know when those pages were current. Tiny but
   improves reproducibility of the prior-art claim.

## Browser verification
- Tool used: N/A
- URL or file path opened: N/A
- Action: N/A
- Visible outcome: N/A
- Console/network issues: N/A

Reason: critique-only turn over a design-only kit extraction. No
app behavior, browser surface, runtime bridge, or automation path
changed.

## Portability Findings
- Repo-local assumptions: E3-E preserves the no-install,
  no-global-config, repo-local-by-default posture. The minimal
  kit is portable to any repo with a text editor and Git.
- Machine/local-tool assumptions: minimal kit has zero new
  machine requirements. Signed governance, if adopted, currently
  requires Node 22+ with built-in Ed25519 — same as the proven
  reference implementation in this repo.
- Browser/connector assumptions: the kit explicitly does NOT
  inherit this repo's Chrome-first rule. Adopters set their own
  runner. Right call.
- Any workaround used: none in this critique.

## Handoff
- Next agent: Sami
- Specific ask: decide whether to (a) accept E3-E as filed and
  authorize the first kit-extraction action sub-experiment, (b)
  authorize a small E3-E-FIX-001 housekeeping turn to address
  the five consultant nits in-place before any extraction
  action, or (c) defer further E3 work and let the design sit.
  Per the active Stopgate Rule, no kit-extraction action, no
  file creation outside this Claude-Codex repo, no installs, no
  MCP registration, no plugin install, and no
  proposed-to-approved transition occurs without your explicit
  per-action approval.
