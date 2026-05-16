Previous experiment terminal turn: Experiment 3 / E3-F-FIX-001-claude-critique.md

# E3-G - Codex kit v1 bootstrap

## Agent
Codex

## Phase
implementation

## Schema
Reuses the Experiment 1 turn-note schema explicitly. Includes Evidence Basis
and Portability Findings sections per the active `PROTOCOL.md` additions.
This is the first kit-bootstrap implementation turn. It creates a reviewable
portable kit folder inside this repo only. It does not copy kit files into any
other repo, install tools, register MCP, set up plugins, enable bridges, edit
global config, edit signed trust/event/private-key files, create a branch,
commit, push, open a PR, or move any proposal to approved.

## Files touched this turn
- `kit/v1/README.md` (created)
- `kit/v1/.gitignore.snippet` (created)
- `kit/v1/AGENTS.md.template` (created)
- `kit/v1/CLAUDE.md.template` (created)
- `kit/v1/.agent-handoff/PROTOCOL.md.template` (created)
- `kit/v1/.agent-handoff/COLLAB.md.template` (created)
- `kit/v1/.agent-handoff/turns/.gitkeep` (created)
- `kit/v1/.agent-handoff/digests/.gitkeep` (created)
- `kit/v1/.agent-handoff/consultants/.gitkeep` (created)
- `kit/v1/.agent-handoff/prompts/starter-turn-note.md` (created)
- `.agent-handoff/turns/E3-G-codex-kit-v1-bootstrap.md` (created)
- `.agent-handoff/COLLAB.md` (edited; handoff fields only)

## Evidence Basis
- USER SAID: Sami explicitly accepted E3-F-FIX-001 and authorized E3-G on
  2026-05-16 as the first kit-bootstrap implementation turn, with create-only
  file list, no extraction into another repo, no installs, no bridge/MCP/plugin
  setup, no global config change, no signed trust/event/private-key edits, and
  hard stop after E3-G for critique.
- USER SAID: Only Sami can move proposed-to-approved. E3-G may record the exact
  authorization but must not approve any further protocol, adapter, extraction,
  install, or governance action.
- FILE VERIFIED: `.agent-handoff/PROTOCOL.md` was read first and contains the
  active Stopgate Rule, Experiment 1 turn-note schema, Evidence Basis,
  Portability Findings, Response History Policy, Unscheduled Fix-Turn Shape,
  and Baseline And Optional Layers section.
- FILE VERIFIED: `.agent-handoff/COLLAB.md` records the E3-G authorization and
  says kit extraction into another repo remains a separate action requiring
  Sami's explicit approval.
- FILE VERIFIED: `README.md`, `AGENTS.md`, `CLAUDE.md`, `docs/test-project.md`,
  `docs/chrome-runners.md`, E3-E, E3-E critique, E3-E-FIX-001, E3-E-FIX-001
  critique, E3-F, E3-F critique, E3-F-FIX-001, E3-F-FIX-001 critique, and
  `scripts/check-collab.mjs` were read before edits.
- FILE VERIFIED: `scripts/check-collab.mjs` was read and left unedited. The
  live scaffold check validates this repo's current `COLLAB.md` headings, not
  the kit template.
- FILE VERIFIED: the created kit files contain no `Claude-Codex`,
  `claude-codex`, `colorado-songwriters`, or `denver-songwriters` strings.
- FILE VERIFIED: `git status --short --untracked-files=all` after edits shows
  only `.agent-handoff/COLLAB.md`, this E3-G turn note, and files under
  `kit/v1/`.
- FILE VERIFIED: `git diff --check` passed after edits with no output.
- FILE VERIFIED: `npm test` passed after edits with "Collaboration scaffold
  check passed."
- INFERENCE: Browser QA is not applicable for this turn because the change is
  a docs/template kit bootstrap with no app behavior, browser surface, runtime
  bridge, adapter, MCP registration, plugin setup, or automation path changed.
- UNKNOWN: Future adopter-specific values remain unknown until a separately
  authorized adoption turn fills them in: ownership split, no-touch files,
  project brief path, browser runner, CI runner, automation budget, experiment
  cap, and any signed-governance root identity.

## Decisions (binding)
- `kit/v1/` is a reviewable portable kit folder inside this repo only. It is
  not copied into another repository.
- The v1 kit is file-based and no-install: `README.md`, `.gitignore.snippet`,
  agent templates, handoff templates, empty tracked handoff directories, and a
  starter turn-note prompt.
- The kit README presents the ten accepted E3 alignment points as adopter
  operating defaults.
- Signed event governance is marked optional in the README, agent templates,
  and protocol template. The kit does not create keys, trust registries, event
  logs, or private-key files.
- Live bridges/adapters are marked disabled until Sami separately approves the
  exact MCP registration, plugin setup, bridge enablement, `.mcp.json`, or
  global config change.
- Browser QA in the templates uses a named-runner-or-explicit-N/A pattern.
  Silent omission is not acceptable.
- Automation budget is `N/A` unless polling, cron, webhook, or heartbeat work
  is explicitly approved.
- Turn caps are per-experiment authorization values, not repo-wide defaults.
- The starter turn-note template canonical location is
  `.agent-handoff/prompts/starter-turn-note.md`.
- Proposed only, not applied: a future separately approved kit-scaffold check
  could validate template placeholder completion, heading uniqueness/order, and
  adopter-specific required files. E3-G does not edit `scripts/check-collab.mjs`.

## Open questions for the other agent
- Does Claude agree the kit is minimal enough for cold adoption while still
  preserving the Stopgate Rule, schema, file-based handoff, explicit N/A paths,
  and optional-layer boundaries?
- Does Claude see any portability leak, hidden repo assumption, or wording that
  could be misread as default install/setup/bridge instructions?
- Does Claude agree the COLLAB handoff fields were updated without
  restructuring current state or moving any proposal to approved?

## Blockers (must-fix before continuing)
- Claude architecture-consultant critique of E3-G is required before any
  further E3 work or any kit extraction into another repo.
- Sami's explicit approval remains required before any extraction into another
  repo, adapter setup, install, MCP registration, plugin setup, bridge
  enablement, global config change, git operation, signed trust/event edit,
  private-key edit, scaffold-script edit, or proposed-to-approved transition.

## Nits (suggested, not required)
- A future separately approved kit-scaffold turn could add an adopter-side
  validation script, but that would be a new artifact and was intentionally
  left out of E3-G.

## Browser verification
- Tool used: N/A
- URL or file path opened: N/A
- Action: N/A
- Visible outcome: N/A
- Console/network issues: N/A

Reason: docs/template kit-bootstrap turn only. No app behavior, browser
surface, runtime bridge, adapter, MCP registration, plugin setup, automation
path, or Chrome runner changed.

## Verification

`git diff --check`:

```text
<no output; exit 0>
```

`npm test`:

```text
> claude-codex-collab-test@0.1.0 test
> node scripts/check-collab.mjs

Collaboration scaffold check passed.
```

`git status --short --untracked-files=all`:

```text
 M .agent-handoff/COLLAB.md
?? .agent-handoff/turns/E3-G-codex-kit-v1-bootstrap.md
?? kit/v1/.agent-handoff/COLLAB.md.template
?? kit/v1/.agent-handoff/PROTOCOL.md.template
?? kit/v1/.agent-handoff/consultants/.gitkeep
?? kit/v1/.agent-handoff/digests/.gitkeep
?? kit/v1/.agent-handoff/prompts/starter-turn-note.md
?? kit/v1/.agent-handoff/turns/.gitkeep
?? kit/v1/.gitignore.snippet
?? kit/v1/AGENTS.md.template
?? kit/v1/CLAUDE.md.template
?? kit/v1/README.md
```

## Portability Findings
- Repo-local assumptions: the kit is inside this repo at `kit/v1/` for review.
  Adopters must fill placeholders before first use. No files were copied into
  another repository.
- Machine/local-tool assumptions: no installs, network setup, global config
  changes, MCP registration, plugin setup, or bridge enablement were performed.
  Verification used the existing local Node/npm setup already present in this
  repo.
- Browser/connector assumptions: kit templates require either a named browser
  runner or explicit `N/A` with reason. E3-G browser QA is `N/A` because no
  browser surface changed.
- Any workaround used: none.

### Portability self-check

1. PASS: No kit file contains `Claude-Codex` or `claude-codex`. Generic
   mentions of Claude Code and Codex describe the collaboration participants,
   not this repo name.
2. PASS: No `colorado-songwriters-collective` files were touched.
   `git status --short --untracked-files=all` shows only `kit/v1/`, this turn
   note, and `.agent-handoff/COLLAB.md`.
3. PASS: No global install/config instructions are presented as defaults. The
   README says the kit is not an installer, MCP registration, plugin setup, or
   global config change.
4. PASS: Signed governance is marked optional in all relevant kit templates.
5. PASS: Adapters and bridges are marked disabled until separately approved.
6. PASS: `AGENTS.md.template` and `CLAUDE.md.template` support a named runner
   or explicit browser QA `N/A` with reason.
7. PASS: Automation budget is `N/A` unless automation is explicitly approved.
8. PASS: Turn cap language is per-experiment, not repo-wide.

## Handoff
- Next agent: Claude
- Specific ask: perform the E3-G architecture-consultant critique of the
  created `kit/v1/` files, this turn note, and the COLLAB handoff. Verify
  minimalism, portability, stopgate/security boundaries, scaffold/test
  evidence, and the eight portability self-check criteria. Stay read-only:
  inspect and report findings, blockers, and nits for Sami without editing
  files, installing tools, enabling bridges, registering MCP, changing global
  config, touching another repo, or moving any proposal to approved.
