# E6-BRAND-001 - Claude naming/branding discovery and convergence scribe

## Agent
Claude

## Phase
architecture (discovery + convergence scribe; no implementation)

## Coordinator Trigger
- State: NEEDS_GPT
- Reason: Strategic naming / open-source positioning decision; Sami supplied
  convergence wording directly this turn in lieu of routing to GPT-5.5 Pro,
  but the underlying class of decision remains NEEDS_GPT for future revisits.

## Project Mode (estimated)
- Mode: Coordinator
- Reason: No approved Outcome Circle covers branding/naming work. E6-OC-001 is
  separately in exit / awaiting Sami + GPT callback and is not the scope of
  this turn. This turn is a one-shot discovery + scribe outside any Outcome
  Circle; no builder/auditor loop is being entered.

## Files touched this turn
- `.agent-handoff/turns/E6-BRAND-001-claude-naming-discovery.md` (created)

No other files touched. Per Sami's explicit instruction this turn ("Create a
new doc for anything you write in the repo"), `COLLAB.md` was NOT updated.
The standing `When handing work to Codex, update Next request to Codex in
COLLAB.md` rule is intentionally overridden for this turn only by direct Sami
direction; if Codex picks up the STRATEGY.md handoff before COLLAB.md is
refreshed, Codex should treat this turn note as the authoritative ask and
refresh COLLAB.md itself as part of its STRATEGY.md turn.

## Evidence Basis
- USER SAID:
  - Convergence wording (verbatim, see "Sami convergence" section below).
  - "no subagents for STRATEGY.md. The first strategy doc should be authored
    directly by Codex so the voice and accountability are clear."
  - "I'd add Claude's three-phase framing" (pre-build / during-build /
    post-build, see "Three-phase framing" section below).
  - The original branding question: "If we're open-source-first, the naming
    question is also a branding decision (does the protocol get a name like
    'Outcome Circles Protocol'). Currently we've been using Polaris."
- FILE VERIFIED:
  - `.agent-handoff/PROTOCOL.md` defines `Outcome Circle` as a first-class
    bounded builder/auditor loop with a 14-field packet schema (PROTOCOL.md
    §"Outcome Circles").
  - `.agent-handoff/OPERATING-MODEL.md` §10 defines `Polaris` as the
    "human cockpit/control surface" pointing at `DASHBOARD.md` /
    `DASHBOARD.html`; repeatedly states "Polaris is the cockpit, not the
    coordinator."
  - `.agent-handoff/OPERATING-MODEL.md` 5-layer model: PROTOCOL (enforced) /
    OPERATING-MODEL (reference) / COLLAB (current state) / Polaris (view) /
    turn notes (history).
  - `.agent-handoff/COLLAB.md` (consultant nit #3 in the E6-C synthesis):
    "§3 doesn't include Polaris naming/branding as discrete row." Branding
    is already an acknowledged open thread.
  - `README.md` positions repo as OSS testbed; references "kit extraction"
    as separate future work.
  - `docs/test-project.md` confirms "the workflow is the product"; sample
    app (Decision Ledger) is incidental.
  - The protocol itself is currently unnamed at the brand level — only
    titled "Claude <-> Codex Collaboration Protocol" in `PROTOCOL.md` line 1.
- AGENT SUMMARY:
  - The original framing ("Polaris vs. Outcome Circles Protocol") conflates
    two layers. They name different things in the codebase today: Polaris =
    dashboard layer; Outcome Circle = one mechanism inside the protocol; the
    protocol-as-a-whole = unnamed.
- INFERENCE (NOT file-verified):
  - "Polaris" has heavy market collision (Shopify Polaris design system is
    the dominant public association in dev circles; also used by GitLab and
    several governance/observability tools). Risk to OSS SEO and possible
    trademark friction. This claim was not verified against live web
    sources this turn.
- UNKNOWN:
  - External trademark status of "Polaris" and "Outcome Circles."
  - Whether any prior brand/positioning work for this repo lives in
    external platforms (Notion, Drive, Confluence, Box, M365, Figma,
    Slack). No document platforms were connected to MCP this turn; the
    discover-brand skill's platform-coverage gate was hit and acknowledged
    by Sami choosing "in-tree only."

## Decisions (binding)

Sami this turn made one binding convergence decision and one binding
process decision. Both are recorded verbatim below and summarized here:

1. **Vocabulary convergence (binding):** Polaris names the
   dashboard / reference cockpit only. The broader thing is the
   governance protocol. Protocol-level naming is **deferred** — no
   protocol name is adopted this turn. "Outcome Circles Protocol" is
   NOT adopted; nothing is renamed.
2. **STRATEGY.md authorship (binding):** STRATEGY.md is to be authored
   directly by Codex. No subagents. Voice and accountability must be
   clear in the first strategy doc.

## Sami convergence (verbatim)

> "For STRATEGY.md, I'd add Claude's three-phase framing. That is
> probably the clearest methodology statement so far:
>
> Pre-build: convergence loop: GPT frames, Codex reviews/builds, Claude
> audits, Sami decides.
> During-build: Outcome Circle: builder/auditor loop inside exact
> packet.
> Post-build: exit synthesis, evidence review, lessons, bootstrap
> counter.
> That is stronger than 'dashboard' or 'multi-agent harness.' It
> describes a reusable governance method.
>
> I also agree: no subagents for STRATEGY.md. The first strategy doc
> should be authored directly by Codex so the voice and accountability
> are clear.
>
> Recommended convergence wording:
>
> Polaris is the dashboard/reference cockpit. The broader thing is the
> governance protocol. Naming remains deferred.
>
> That avoids accidentally making 'Polaris' mean dashboard, protocol,
> product, kit, and philosophy all at once."

## Three-phase framing (for STRATEGY.md)

Per Sami's directive, STRATEGY.md should be anchored on this three-phase
framing:

- **Pre-build — convergence loop:** GPT frames, Codex reviews/builds,
  Claude audits, Sami decides.
- **During-build — Outcome Circle:** builder/auditor loop inside the
  exact packet.
- **Post-build — exit synthesis:** evidence review, lessons, bootstrap
  counter.

This describes a reusable governance method, not a dashboard or a
multi-agent harness.

## Discovery findings (compact)

Full discovery analysis was produced in-conversation. The load-bearing
points:

1. **The original question framing was a category error.** "Polaris" and
   "Outcome Circles" name different layers. Today: Polaris = the
   dashboard (OPERATING-MODEL §10); Outcome Circle = one mechanism in
   the protocol (PROTOCOL.md §"Outcome Circles"); the protocol-as-a-
   whole = currently unnamed at the brand level.
2. **A nomenclature family already exists organically in the docs:**
   Outcome Circle / Outcome Packet / Outcome Architect. Whether or not
   this becomes a protocol name later, it is already coherent vocabulary
   and should not be churned.
3. **"Polaris" carries OSS SEO and trademark-collision risk** (inferred,
   not verified this turn). If the repo goes OSS-first, that risk lands
   on a public surface; if Polaris stays internal-only as the reference
   cockpit, the risk is contained.
4. **There are at least four naming questions, not one:**
   protocol name, kit name, dashboard name (Polaris today), and
   mechanism names (Outcome Circle et al.). Per convergence above, all
   four are deferred this turn except the dashboard/protocol boundary.

## Open questions for the other agent (Codex)

These are for Codex to either resolve while authoring STRATEGY.md or to
explicitly defer in STRATEGY.md itself:

1. Does STRATEGY.md state the convergence wording verbatim, or paraphrase
   into Codex's voice? (Recommendation: verbatim quote at least once,
   then paraphrase as needed for flow.)
2. Where does STRATEGY.md live? Top-level `STRATEGY.md`, `docs/STRATEGY.md`,
   or `.agent-handoff/STRATEGY.md`? (Recommendation: top-level for OSS
   discoverability, but Codex should pick and justify.)
3. Should STRATEGY.md explicitly cite this turn note as the convergence
   source? (Recommendation: yes — single-source attribution.)
4. Does STRATEGY.md introduce the kit-vs-protocol boundary, or defer it?
   (Recommendation: name the boundary, defer the kit name.)

## Blockers (must-fix before continuing)

None. Codex can author STRATEGY.md as soon as Sami releases the next turn.

## Nits (suggested, not required)

1. The Polaris naming/branding open thread (consultant nit #3 in COLLAB.md
   §"E6-C Codification Summary" area) is now partially resolved by the
   convergence above (dashboard/protocol boundary clarified; protocol
   naming deferred). A future turn could fold this into a §3 row in
   OPERATING-MODEL, but that is out of scope this turn.
2. External brand discovery (web/trademark checks on "Polaris" collision
   risk, "Outcome Circles" uniqueness) was not run. Recommended for the
   turn where any actual naming decision is made; not needed for this
   convergence.

## Browser verification
- Tool used: N/A
- URL or file path opened: N/A
- Action: N/A
- Visible outcome: N/A
- Console/network issues: N/A
- Reason for N/A: Discovery and scribe turn only; no UI surface touched,
  no dashboard regenerated, no app verified.

## Portability Findings
- Repo-local assumptions: None new. This turn cites existing repo files
  only.
- Machine/local-tool assumptions: None.
- Browser/connector assumptions: discover-brand skill expected MCP
  document-platform connectivity (Notion, Drive, Confluence, Box, M365,
  Figma). None were connected; gate hit; Sami chose in-tree-only scope.
- Any workaround used: Discovery was scoped to repo files only. No
  external platform was queried; no MCP authenticate hook was fired.

## Handoff
- Next agent: Codex
- Specific ask:
  1. Author `STRATEGY.md` directly, no subagents, single-author voice.
  2. Anchor on Claude's three-phase framing (pre-build convergence loop /
     during-build Outcome Circle / post-build exit synthesis).
  3. Include Sami's convergence wording verbatim at least once.
  4. State that Polaris = dashboard/reference cockpit; the broader thing
     is the governance protocol; protocol-level naming is deferred.
  5. Cite this turn note (`E6-BRAND-001-claude-naming-discovery.md`) as
     the convergence source.
  6. Resolve or explicitly defer the four open questions above.
  7. Per CLAUDE.md/PROTOCOL.md: do NOT commit, push, or open a PR;
     produce STRATEGY.md as a local-only artifact and update `COLLAB.md`
     `Next request To Codex` / `Latest Codex response` / `Current Owner`
     fields as part of the same turn so the next actor (Sami) sees the
     handoff correctly.
  8. Stop after STRATEGY.md is drafted and hand back to Sami for review.

If Codex disagrees with any of the four open questions' recommendations,
Codex should resolve them in STRATEGY.md and note the divergence in its
own turn note rather than blocking.
