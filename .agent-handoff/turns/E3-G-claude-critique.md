Previous experiment terminal turn: Experiment 3 / E3-G-codex-kit-v1-bootstrap.md

# E3-G Claude consultant critique

## Agent
Claude

## Phase
critique

## Schema
Reuses the Experiment 1 turn-note schema explicitly. Includes
Evidence Basis and Portability Findings sections per the active
PROTOCOL.md additions. Critique-only turn over the first
kit-bootstrap implementation. Does not approve the kit as
protocol, install tools, copy files outside this repo, extract a
kit, or move any proposal to approved.

## Files touched this turn
- `.agent-handoff/turns/E3-G-claude-critique.md` (created)
- `.agent-handoff/COLLAB.md` (edited)

## Evidence Basis
- USER SAID: Sami authorized E3-G on 2026-05-16 as the first
  kit-bootstrap implementation turn with 10 specific kit files,
  8-criterion portability self-check, and bounded advisory
  subagents.
- FILE VERIFIED: read E3-G turn note in full at HEAD `a612ddf`.
  Read all 7 substantive kit files
  (`kit/v1/README.md`, `.gitignore.snippet`, `AGENTS.md.template`,
  `CLAUDE.md.template`, `.agent-handoff/PROTOCOL.md.template`,
  `.agent-handoff/COLLAB.md.template`,
  `.agent-handoff/prompts/starter-turn-note.md`) plus verified
  3 `.gitkeep` files exist via `find`. Total kit file count
  matches authorized list exactly.
- FILE VERIFIED: independently ran `npm test`. Exit 0,
  "Collaboration scaffold check passed."
- FILE VERIFIED: independently ran `git diff --check`. Exit 0.
- FILE VERIFIED: independent leak/portability greps across
  `kit/v1/`:
  - `claude.?codex`: 4 matches, all "Claude/Codex config"
    referring to the two products, NOT the repo name
    `Claude-Codex`. No repo-name leak.
  - `colorado|songwriters|denver`: zero matches.
  - `decision.ledger`: zero matches (no sample-app leak).
  - `sami-root|wrapper-codex-mcp|agent-event-envelope`: zero
    matches (no this-repo-specific identity leaks).
  - `install`: 9 matches, ALL negative (anti-installer
    framing: "not an installer", "do not install", etc.). No
    matches present install instructions as defaults.
- FILE VERIFIED: `git status` shows working tree clean before
  this critique (verified prior to write).
- AGENT SUMMARY: Codex's 8-criterion portability self-check
  matches my independent verification on every point.
- INFERENCE: The kit is ready for either a small fix turn for
  the nits below OR a discovery turn against
  colorado-songwriters-collective per the Sami focus point 12.
- UNKNOWN: I did not test the kit by actually copy-pasting it
  into a fresh repo and trying to bootstrap. Cold-adoption
  testing is what a discovery/extraction turn would exercise.

## Decisions (binding)

- E3-G is accepted as a successful first kit-bootstrap
  implementation. Zero blockers stand against this critique.
- All 12 Sami focus areas pass (per-area assessment below).
- The 8-criterion portability self-check holds up under
  independent verification on every criterion.
- Per the active Stopgate Rule, this critique does not authorize
  any extraction into another repo. Each extraction action
  remains its own scoped sub-experiment requiring Sami's
  explicit per-action approval recorded in COLLAB.md.

## Per-focus-area assessment

1. **kit/v1 contains only authorized files** — PASS. `find`
   confirms exactly the 10 authorized files (7 substantive + 3
   `.gitkeep`).
2. **Local-first, not local-only** — PASS. Exact phrase in
   README §Operating Defaults, PROTOCOL.md.template §Purpose,
   AGENTS/CLAUDE §Accepted Operating Defaults.
3. **File-based handoff is minimal binding path** — PASS.
   "Treat file-based handoff as the minimal binding reference"
   in README, PROTOCOL.md.template, AGENTS/CLAUDE.
4. **Signed governance clearly optional** — PASS. README §What
   This Kit Is Not: "Not a signed-event governance
   implementation." Templates state it's "optional add-on."
5. **Bridges/adapters disabled until separately approved** —
   PASS. Explicit in all four templates.
6. **Browser runner named or explicit N/A** — PASS.
   AGENTS/CLAUDE §Browser Runner provide both
   `{{BROWSER_RUNNER_CHOICE}}` placeholder AND explicit N/A
   syntax with `{{BROWSER_RUNNER_NA_REASON}}`.
7. **Automation budget N/A unless approved** — PASS. Consistent
   across templates.
8. **Turn cap per-experiment** — PASS. PROTOCOL.md.template
   §Baseline And Optional Layers: "Turn caps are per-experiment
   authorization values. A previous experiment's turn cap is not
   a static repo-wide default."
9. **No Claude-Codex repo leaks beyond labeled examples** —
   PASS. Independent grep: zero `Claude-Codex` / `claude-codex`
   repo-name strings. The four `Claude/Codex` matches refer to
   the two products' configurations, not the repo name.
10. **colorado-songwriters-collective untouched** — PASS.
    Independent grep: zero matches. `git status` during E3-G
    commit showed only kit/v1/, turn note, COLLAB.md.
11. **npm test and git diff --check passed** — PASS.
    Independent verification: both exit 0.
12. **Ready for fix turn OR discovery turn against
    colorado-songwriters-collective** — PASS with nits below.
    Either path is viable; consultant recommendation noted in
    Handoff.

## Answers to Codex's three open questions

1. **Kit minimal enough for cold adoption while preserving
   discipline?** Yes. The minimum 6-file core (PROTOCOL, COLLAB,
   AGENTS, CLAUDE, turns/.gitkeep, .gitignore-snippet) is
   genuinely the smallest usable surface. Adding starter-turn,
   digests, and consultants empty directories is appropriately
   cheap. Adopters can cold-read all four templates plus the
   README in under 15 minutes.

2. **Any portability leak, hidden repo assumption, or wording
   misreadable as default install/setup/bridge instructions?**
   No. The 8-criterion self-check matches independent
   verification. All `install` mentions are negative. All
   bridge mentions are disabled-by-default with explicit
   per-action-approval requirement. Five small nits below are
   refinements, not portability leaks.

3. **COLLAB handoff updated without restructuring current
   state or moving any proposal to approved?** Yes. COLLAB.md
   diff is handoff-fields-only — owner/phase/latest-codex-
   response/next-request. Historical record preserved.

## Strengths worth naming explicitly

- **Independent grep matches Codex's self-check on every
  criterion.** Codex's self-check wasn't aspirational; it
  matches what's actually in the files. That's the discipline
  the protocol is designed to encourage.
- **The `.gitignore.snippet` framing.** "Append these lines to
  the adopter repo's existing .gitignore. Do not overwrite
  existing ignore rules." Two-line guidance prevents the most
  common kit-extraction footgun (wiping adopter's existing
  ignore rules).
- **The "What This Kit Is Not" section** in README.md is
  exactly the discipline E3-E nit recommended. Eight explicit
  negations including "Not an installer," "Not a live MCP
  bridge," "Not a global Claude or Codex configuration."
- **AGENTS.md.template and CLAUDE.md.template are perfect
  mirrors** with only role-specific differences (Codex
  technical-counterparty vs Claude product-architecture
  counterparty; "Next Request To Codex/Claude" handoff field
  naming). Identical operating defaults, identical safety
  rules, identical browser-runner pattern.
- **Prior-art citation policy in PROTOCOL.md.template §Prior-
  Art Citation Policy** explicitly generalizes the read-date
  convention to non-URL prior art (papers, screenshots, talks)
  — addresses E3-E-FIX-001 consultant nit 3.
- **Experiment Authorization Convention in PROTOCOL.md.template
  §Experiment Authorization Convention** explicitly names
  `Turn cap` as one of the 7 fields each authorization should
  state — addresses E3-E-FIX-001 consultant nit 2 (per-
  experiment turn cap mechanism now located).

## Open questions for Sami
- E3-G is ready for either path 12a (small fix turn for the
  nits below) or path 12b (discovery turn against
  colorado-songwriters-collective). My recommendation: 12a
  first because the nits are small and prevent friction at
  first adoption; 12b second when you're ready to actually
  port.
- Of the five small nits below, any you want addressed before
  the first extraction action, or acceptable to defer to a
  future kit-bootstrap or adoption turn?

## Blockers (must-fix before continuing)
- None. E3-G is acceptable as filed.

## Nits (suggested, not required)

1. **`COLLAB.md.template` includes mutable latest-response
   fields** (`Latest Claude response`, `Latest Codex response`
   under Current Phase), but `PROTOCOL.md.template` §Response
   History Policy says "Do not use mutable 'latest response'
   fields as the only record of prior work." Minor tension —
   the fields are fine if used as summary (not authoritative
   record), but the template could call this out explicitly.
   Recommend a one-line note near the latest-response fields:
   "Summary only; durable record lives in append-only turn
   notes."

2. **PROTOCOL.md.template Phase enum doesn't include `fix`
   or `rescope`** despite the Agent values list (later in the
   same file) being explicitly extended to include
   `Sami | Consultant`. The Phase enum still reads
   `architecture | critique | implementation | smoke |
   retrospective` only. We've used `fix` and `rescope` heavily
   in this repo's actual practice. Recommend either (a) adding
   `fix | rescope` to the enum, or (b) noting the enum is a
   guidance default with `fix` and `rescope` as common
   extensions per the Unscheduled Fix-Turn Shape.

3. **`starter-turn-note.md` uses literal `{{ }}` placeholder
   syntax inside fields** (e.g., `## Agent\n{{Claude | Codex |
   Sami | Consultant}}`). Correct kit-template convention, but
   adopters might confuse this with the "leave fields with
   placeholders unfilled" approach. Recommend a one-line
   instruction at the top of starter-turn-note.md: "Replace
   each {{placeholder}} with concrete content before filing."

4. **Experiment Authorization Convention (PROTOCOL.md.template
   §Experiment Authorization Convention) introduces a 7-field
   shape** (Scope, Allowed files, No-touch files, Browser
   runner, Automation budget, Turn cap, Hard stop) that doesn't
   exactly match our own actual authorization practice in this
   repo. The convention is good — it's clearer and more
   consistent than what we've actually done — but adopters
   might assume this is the convention used here. Acceptable
   as forward-looking guidance; consider a forward-flag in
   future repo housekeeping to align our own authorizations
   to the convention OR note in the template that the
   convention is recommended-not-required.

5. **README §Quick Start step 1** says "Copy the files from
   this folder into the root of the adopting repository" but
   doesn't say "preserving the directory structure." An
   inattentive adopter could flatten the kit. Recommend:
   "Copy the files into the root, preserving the directory
   structure (especially `.agent-handoff/` and its
   subdirectories)."

## Browser verification
- Tool used: N/A
- URL or file path opened: N/A
- Action: N/A
- Visible outcome: N/A
- Console/network issues: N/A

Reason: critique-only turn over a docs/template kit bootstrap.
No app behavior, browser surface, runtime bridge, or automation
path changed.

## Portability Findings
- Repo-local assumptions: this critique stays inside the
  Claude-Codex repo. The kit it reviews is internally
  consistent and uses placeholder syntax for adopter-specific
  values throughout.
- Machine/local-tool assumptions: independently ran `npm test`
  (Node) and `git diff --check`. Both pass.
- Browser/connector assumptions: none. Kit templates
  correctly support named-runner-or-N/A per E3-F alignment
  point 6.
- Any workaround used: none. Used independent `grep` for
  leak verification rather than spawning advisory subagents,
  since the kit's file count was small enough for direct
  read-and-grep.

## Handoff
- Next agent: Sami
- Specific ask: decide whether to (a) accept E3-G as filed
  and authorize a small E3-G-FIX-001 housekeeping turn for the
  five consultant nits before the first extraction action, or
  (b) accept E3-G as filed and authorize the first
  kit-extraction action sub-experiment (likely a discovery
  turn reading colorado-songwriters-collective's actual state
  to determine ownership split, browser runner, and CI runner
  defaults before any files are copied), or (c) pivot to a
  queued item, or (d) defer further E3 work. Consultant
  recommendation: 12a (small fix turn) first because the nits
  are small and prevent friction at first adoption. Per the
  active Stopgate Rule, no kit-extraction action, no file
  creation outside this Claude-Codex repo, no installs, no
  MCP registration, no plugin install, and no
  proposed-to-approved transition occurs without your
  explicit per-action approval.
