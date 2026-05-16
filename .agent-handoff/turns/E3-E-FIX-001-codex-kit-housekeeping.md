Previous experiment terminal turn: Experiment 3 / E3-E-claude-critique.md

# E3-E-FIX-001 - Codex kit housekeeping

## Agent
Codex

## Phase
fix

## Schema
Reuses the Experiment 1 turn-note schema explicitly. Includes Evidence Basis,
Portability Findings, and the Unscheduled Fix-Turn Shape required by
`PROTOCOL.md`. This is a design/prose-only housekeeping turn over E3-E's kit
design. It does not edit E3-E in place, extract a kit, change protocol, install
tools, register MCP, enable bridges, edit global config, commit, push, open a
PR, create a branch, or move any proposed item to approved.

## Files touched this turn
- `.agent-handoff/turns/E3-E-FIX-001-codex-kit-housekeeping.md` (created)
- `.agent-handoff/COLLAB.md` (edited; handoff fields only)

## Evidence Basis
- USER SAID: Sami explicitly accepted E3-E as a successful kit-extraction +
  harness-control design-only turn and authorized E3-E-FIX-001 on 2026-05-15
  as a tiny design/prose-only housekeeping turn addressing exactly five E3-E
  critique nits.
- USER SAID: Sami's scope forbids editing E3-E in place, kit extraction into
  `colorado-songwriters-collective`, file creation outside this repo, installs,
  MCP registration, plugin setup, bridge enablement, global config changes,
  protocol changes unless separately approved, git operations, and any
  proposed-to-approved transition.
- FILE VERIFIED: `.agent-handoff/PROTOCOL.md` contains the Stopgate Rule,
  Experiment 1 turn-note schema, Evidence Basis, Portability Findings,
  Response History Policy, and Unscheduled Fix-Turn Shape.
- FILE VERIFIED: `.agent-handoff/COLLAB.md` records Sami's verbatim
  E3-E-FIX-001 authorization and says only Sami can move proposed-to-approved.
- FILE VERIFIED: `.agent-handoff/turns/E3-E-codex-kit-extraction-harness-design.md`
  is the source design note; it was read and left unedited.
- FILE VERIFIED: `.agent-handoff/turns/E3-E-claude-critique.md` lists exactly
  the five nits this turn addresses and zero blockers against E3-E acceptance.
- FILE VERIFIED: `AGENTS.md`, `docs/test-project.md`, and
  `docs/chrome-runners.md` were read before editing to reconfirm append-only
  notes, COLLAB handoff updates, safety stopgates, and Chrome-first browser
  validation only when browser QA is needed.
- INFERENCE: Browser QA is not applicable because this turn changes only
  Markdown coordination/prose files and no app, browser surface, runner,
  adapter, MCP registration, plugin, or automation path.
- UNKNOWN: The actual future adopter values for ownership, no-touch files,
  browser runner, CI runner, automation budget, and turn caps remain unknown
  until a separately authorized bootstrap or discovery turn fills them in.

## Decisions (binding)
- This turn addresses only the five authorized E3-E critique nits. It does not
  modify E3-E, change current `PROTOCOL.md`, build a kit, or authorize any
  extraction action.
- `{{IDLE_AUTOMATION_BUDGET}}` is N/A by default for adopters with no
  automation enabled. It becomes required only when the adopter scopes a
  polling, cron, webhook, or heartbeat capability.
- `{{TURN_CAP}}` is per-experiment and scope-bounded. Each experiment's
  authorizing approval names its own cap; the kit must not carry a repo-wide
  default turn count as if it applies to every future experiment.
- `{{BROWSER_RUNNER_CHOICE}}` must be either a named runner or an explicit N/A
  with a reason documented in the kit's `PROTOCOL.md` template. Silent omission
  is not acceptable.
- The kit's optional file list should include a starter turn-note template so
  adopters do not have to reconstruct the schema from memory on their first
  turn.
- URL citations in the kit's prior-art pattern should include read dates.
  E3-E's Zenith references should be treated as read on 2026-05-15, but E3-E
  itself stays as-filed under Sami's no-edit-in-place constraint.

## Housekeeping findings

### Nit 1 - `{{IDLE_AUTOMATION_BUDGET}}` N/A path

The kit placeholder should say that automation budget is N/A by default for
adopters with no automation enabled. A file-based handoff repo that has no
watcher, no polling, no cron, no webhook receiver, and no heartbeat does not
need to fill in wakeup or token budgets.

The placeholder becomes required exactly when the adopter scopes a polling,
cron, webhook, or heartbeat capability. At that point, the adopter must name
the model-wakeup limit, token or work budget, empty-poll pause behavior, and
the approval condition for changing those values.

Recommended initial placeholder syntax:

```text
{{IDLE_AUTOMATION_BUDGET}}: N/A (no automation enabled)
```

If automation is later approved, the adopter replaces that N/A value with the
specific approved budget instead of inheriting E2's numbers silently.

### Nit 2 - `{{TURN_CAP}}` per-experiment reframing

The kit should reframe `{{TURN_CAP}}` as a per-experiment scope-bounded value
set in each experiment's authorization. It is not a static repo-wide default.

Updated placeholder description:

```text
{{TURN_CAP}}: per-experiment cap named in the authorizing approval; stop when
that cap is reached unless Sami separately approves continuation.
```

The kit's `PROTOCOL.md` template should say "the authorizing approval names
the cap" rather than carrying a default repo-wide number. A future adopter may
still choose a common rhythm, but that rhythm is only binding when the specific
experiment authorization adopts it.

### Nit 3 - `{{BROWSER_RUNNER_CHOICE}}` N/A path

The kit should allow adopters with no browser surface to set browser QA to N/A,
but only explicitly and with the reason documented in `PROTOCOL.md`.

Recommended syntax examples:

```text
{{BROWSER_RUNNER_CHOICE}}: Codex Chrome plugin (web UI present)
{{BROWSER_RUNNER_CHOICE}}: N/A (no browser surface in this repo)
```

The adopter must choose either a runner or an explicit N/A with a reason.
Silent omission is not acceptable because later agents need to know whether
browser evidence is required, unavailable, or irrelevant.

### Nit 4 - starter turn-note template in optional files

The kit's optional files list should include a starter turn-note template. Two
acceptable locations are:

- `.agent-handoff/prompts/starter-turn-note.md`
- `.agent-handoff/turns/000-bootstrap-template.md.example`

The template should include the standard Experiment 1 schema headings, empty
for the adopter to fill:

- Agent
- Phase
- Files touched this turn
- Decisions (binding)
- Open questions for the other agent
- Blockers (must-fix before continuing)
- Nits (suggested, not required)
- Browser verification
- Handoff

It should also include empty optional sections for Evidence Basis and
Portability Findings so future turns can use the richer schema without
copying from this repo's historical notes.

### Nit 5 - Zenith citation read date

The kit's prior-art citation pattern should require read dates on URL
citations so future readers know when web claims were observed.

Applied to E3-E's Zenith references specifically, the intended citation facts
are:

- `https://ii.inc/web/blog/post/zenith-research` (read 2026-05-15)
- `https://github.com/Intelligent-Internet/zenith` (read 2026-05-15)

This is a documentation update for the future kit pattern. It is not an edit to
E3-E itself; E3-E stays as-filed per Sami's "do not edit E3-E in place"
constraint.

## Open questions for the other agent
- Does Claude agree that this note addresses only the five authorized nits and
  does not silently apply a protocol change or kit extraction action?
- Does Claude see any wording that should be a blocker before Sami considers a
  future extraction or kit-bootstrap turn?

## Blockers (must-fix before continuing)
- Claude architecture-consultant critique of E3-E-FIX-001 is required before
  any further E3 work or kit-extraction action.
- Sami's explicit approval remains required before any protocol edit,
  extraction into another repo, kit-building script, install, MCP registration,
  plugin setup, bridge enablement, global config change, commit, push, PR,
  branch, or proposed-to-approved transition.

## Nits (suggested, not required)
- None.

## Browser verification
- Tool used: N/A
- URL or file path opened: N/A
- Action: N/A
- Visible outcome: N/A
- Console/network issues: N/A

Reason: design/prose-only housekeeping turn. No app behavior, browser surface,
runtime bridge, adapter, MCP registration, plugin, automation path, or Chrome
runner changed.

## Portability Findings
- Repo-local assumptions: this turn stays inside the Claude-Codex repo and only
  records future kit-pattern refinements. It does not create a portable kit
  directory or copy files into another repo.
- Machine/local-tool assumptions: none beyond reading and editing Markdown in
  the existing repo. No installs, no network setup, and no runtime verification
  were needed.
- Browser/connector assumptions: none for this turn. The kit pattern now makes
  browser runner choice explicit, including an N/A path for repos without a
  browser surface.
- Any workaround used: none.

## Unscheduled Fix-Turn Shape
- Trigger: Claude's E3-E critique accepted E3-E with zero blockers but flagged
  five small nits around automation-budget applicability, per-experiment turn
  caps, browser-runner N/A handling, starter turn-note templates, and Zenith
  citation read dates.
- Sami approval basis: Sami explicitly authorized E3-E-FIX-001 on 2026-05-15
  as a tiny design/prose-only housekeeping turn, recorded in `COLLAB.md`, with
  the five exact nits and the no-edit/no-extraction/no-install/no-git
  constraints.
- Scope limit: create only this new fix-turn note and update only
  `COLLAB.md` handoff fields. Do not edit E3-E in place. Do not edit
  `PROTOCOL.md`. Do not create files outside this repo. Do not extract a kit
  into `colorado-songwriters-collective`.
- Files touched: see "Files touched this turn" above.
- Verification performed: required handoff files were read; E3-E was checked
  as the source design note; E3-E-claude-critique was checked as the five-nit
  source; browser/runtime verification was marked N/A because no executable or
  browser surface changed.
- Why this does not expand the experiment: this turn records design/prose
  refinements to E3-E's future kit pattern only. It does not approve,
  implement, package, extract, install, enable, or run anything.
- Next handoff: Claude consultant critiques E3-E-FIX-001 read-only. Further E3
  work waits for Claude's critique and Sami's next explicit approval.

## Handoff
- Next agent: Claude
- Specific ask: perform the E3-E-FIX-001 architecture-consultant critique of
  this note and the COLLAB handoff. Confirm whether the five authorized nits
  are fully addressed without editing E3-E in place, changing protocol,
  extracting kit files, installing tools, enabling bridges, registering MCP,
  modifying global config, committing, pushing, creating a PR, creating a
  branch, or moving any proposed item to approved. Stay read-only and hand back
  findings, blockers, and nits for Sami.
