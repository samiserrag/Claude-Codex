Previous experiment terminal turn: Experiment 3 / E3-G-claude-critique.md

# E3-G-FIX-001 - Codex kit template housekeeping

## Agent
Codex

## Phase
fix

## Schema
Reuses the Experiment 1 turn-note schema explicitly. Includes Evidence Basis,
Portability Findings, and the Unscheduled Fix-Turn Shape required by the active
`PROTOCOL.md`. This is a tiny housekeeping turn for the five E3-G critique nits
only. It does not expand the kit beyond those nits, extract files into another
repo, install tools, enable bridges, register MCP, set up plugins, modify
global config, edit signed trust/event/private-key files, create a branch,
commit, push, open a PR, or move any proposal to approved.

## Files touched this turn
- `kit/v1/README.md` (edited)
- `kit/v1/AGENTS.md.template` (edited)
- `kit/v1/CLAUDE.md.template` (edited)
- `kit/v1/.agent-handoff/PROTOCOL.md.template` (edited)
- `kit/v1/.agent-handoff/COLLAB.md.template` (edited)
- `kit/v1/.agent-handoff/prompts/starter-turn-note.md` (edited)
- `.agent-handoff/COLLAB.md` (edited; handoff fields only)
- `.agent-handoff/turns/E3-G-FIX-001-codex-kit-template-housekeeping.md`
  (created)

## Evidence Basis
- USER SAID: Sami explicitly accepted E3-G and authorized E3-G-FIX-001 on
  2026-05-16 as a tiny kit-template housekeeping turn addressing only the five
  E3-G critique nits.
- USER SAID: Allowed edits were limited to eight files: the six kit template
  files listed above, `.agent-handoff/COLLAB.md`, and this new turn note.
- USER SAID: Do not touch colorado-songwriters-collective, install anything,
  enable bridges, register MCP, set up plugins, modify global config, edit
  signed trust/event/private-key files, create branches, open PRs, push, or
  expand the kit beyond the five nits.
- FILE VERIFIED: `.agent-handoff/PROTOCOL.md` contains the active Stopgate Rule,
  Response History Policy, and Unscheduled Fix-Turn Shape.
- FILE VERIFIED: `.agent-handoff/COLLAB.md` records the E3-G-FIX-001
  authorization and exact allowed file list.
- FILE VERIFIED: `kit/v1/README.md`, `AGENTS.md.template`,
  `CLAUDE.md.template`, `.agent-handoff/PROTOCOL.md.template`,
  `.agent-handoff/COLLAB.md.template`, and
  `.agent-handoff/prompts/starter-turn-note.md` contained the five nit targets.
- FILE VERIFIED: `.agent-handoff/turns/E3-G-codex-kit-v1-bootstrap.md` was read
  as the E3-G source turn and left unedited.
- FILE VERIFIED: `.agent-handoff/turns/E3-G-claude-critique.md` was read for
  the consultant's exact five nits and left unedited.
- FILE VERIFIED: `AGENTS.md`, `docs/test-project.md`, and
  `docs/chrome-runners.md` were read before edits.
- FILE VERIFIED: `git status --short --untracked-files=all` before edits was
  clean.
- FILE VERIFIED: `git diff --check` passed with exit 0 after edits.
- FILE VERIFIED: `npm test` passed with exit 0 and "Collaboration scaffold
  check passed."
- FILE VERIFIED: leak/portability grep checks over `kit/v1/` found no
  colorado/songwriters/denver leaks, no decision-ledger sample-app leaks, and
  no Sami root / wrapper / signed-event implementation leaks.
- INFERENCE: Browser QA is `N/A` because this is a docs/template housekeeping
  turn with no app behavior, browser surface, runtime bridge, adapter, MCP
  registration, plugin setup, or automation path changed.
- UNKNOWN: Whether future adopters prefer the exact authorization convention
  wording remains unknown until a separately authorized adoption or feedback
  turn. This turn marks it as the kit's forward-looking standard without
  rewriting historical authorizations.

## Decisions (binding)
- Nit 1 resolved by adding a Response History Policy disclaimer beside
  `Latest Claude response` / `Latest Codex response` in
  `kit/v1/.agent-handoff/COLLAB.md.template`.
- Nit 1 also updated `AGENTS.md.template` and `CLAUDE.md.template` so their
  latest-response handoff instructions call those fields summary-only.
- Nit 2 resolved with literal enum addition:
  `architecture | critique | implementation | smoke | retrospective | fix |
  rescope`.
- Defense for nit 2: literal addition is the clearest option because this repo
  has already used `fix` and `rescope` as real phase values; cold adopters
  should not have to infer sanctioned extensions from prose.
- Nit 3 resolved by adding top-of-file starter-note instructions to replace
  every `{{placeholder}}` before filing and use `N/A` with a brief reason for
  empty fields.
- Nit 4 resolved by marking the Experiment Authorization Convention as the
  recommended convention for kit adopters and the kit's forward-looking
  standard, not a retroactive requirement on older source-repo prose
  authorizations.
- Defense for nit 4: this avoids silently changing human authorization practice
  in this repo while giving adopters a cleaner convention to use going forward.
- Nit 5 resolved by updating README Quick Start step 1 to say the copy must
  preserve directory structure, especially `.agent-handoff/` and subdirectories.
- Subagents were not used; the authorized changes were small enough for direct
  read/edit/verify without extra coordination overhead.

## Open questions for the other agent
- Does Claude agree the five nits were addressed without expanding the kit
  beyond the authorized housekeeping scope?
- Does Claude agree the nit 2 and nit 4 choices are defensible and consistent
  with the current Stopgate Rule?
- Does Claude see any new portability leak, default install/config instruction,
  or mutable-history ambiguity in the edited kit templates?

## Blockers (must-fix before continuing)
- Claude architecture-consultant critique of E3-G-FIX-001 is required before
  further E3 work or any kit-extraction action.
- Sami's explicit approval remains required before any extraction into another
  repo, adapter setup, install, MCP registration, plugin setup, bridge
  enablement, global config change, git operation, signed trust/event edit,
  private-key edit, or proposed-to-approved transition.

## Nits (suggested, not required)
- None for this fix turn.

## Browser verification
- Tool used: N/A
- URL or file path opened: N/A
- Action: N/A
- Visible outcome: N/A
- Console/network issues: N/A

Reason: docs/template housekeeping only. No app behavior, browser surface,
runtime bridge, adapter, MCP registration, plugin setup, automation path, or
Chrome runner changed.

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

Leak/portability greps over `kit/v1/`:

```text
grep -rinE "colorado|songwriters|denver" kit/v1/
<no output; exit 1, expected for zero matches>

grep -rinE "decision.ledger" kit/v1/
<no output; exit 1, expected for zero matches>

grep -rinE "sami-root|wrapper-codex-mcp|agent-event-envelope" kit/v1/
<no output; exit 1, expected for zero matches>
```

`grep -rinEi "claude.?codex" kit/v1/`:

```text
kit/v1/AGENTS.md.template:67:- Do not modify global Claude/Codex config.
kit/v1/.agent-handoff/PROTOCOL.md.template:184:- changing global Claude/Codex config,
kit/v1/.agent-handoff/PROTOCOL.md.template:197:enable bridges, install dependencies, modify global Claude/Codex configuration,
kit/v1/CLAUDE.md.template:67:- Do not modify global Claude/Codex config.
```

Exit 0. All four matches are product/config references, not repo-name leaks.

`grep -rinEi "install" kit/v1/`:

```text
kit/v1/AGENTS.md.template:62:- Do not install dependencies unless Sami explicitly approves it.
kit/v1/.agent-handoff/PROTOCOL.md.template:41:  scopes dependency use, vendoring, installation, or runtime setup.
kit/v1/.agent-handoff/PROTOCOL.md.template:181:- installing dependencies,
kit/v1/.agent-handoff/PROTOCOL.md.template:197:enable bridges, install dependencies, modify global Claude/Codex configuration,
kit/v1/README.md:8:The kit is deliberately small. It is not an installer, not a live bridge, not
kit/v1/README.md:60:- Not an installer or bootstrap script.
kit/v1/README.md:68:- Not permission to commit, push, merge, open a PR, install dependencies, or
kit/v1/README.md:95:Prior art is not a dependency. Do not install, vendor, enable, or copy
kit/v1/CLAUDE.md.template:62:- Do not install dependencies unless Sami explicitly approves it.
```

Exit 0. All nine matches are negative/anti-installer or explicit-approval
framing; none present install or global config as a default action.

## Portability Findings
- Repo-local assumptions: edits stayed inside the authorized file list in this
  repo. No prior turn note was edited, and no files were copied into another
  repository.
- Machine/local-tool assumptions: verification used existing local git and npm
  tooling. No dependency install, network setup, global config change, MCP
  registration, plugin setup, or bridge enablement was performed.
- Browser/connector assumptions: browser QA is `N/A` for this docs/template
  turn. The kit still requires named runner or explicit `N/A` with reason.
- Any workaround used: none.

## Unscheduled Fix-Turn Shape
- Trigger: E3-G Claude consultant critique listed five small nits after
  accepting E3-G with zero blockers.
- Sami approval basis: Sami explicitly authorized E3-G-FIX-001 on 2026-05-16;
  the authorization is recorded in `.agent-handoff/COLLAB.md` and names this
  exact tiny kit-template housekeeping scope.
- Scope limit: address only the five E3-G critique nits in the eight allowed
  files; do not expand the kit, edit prior turn notes, alter active protocol,
  or perform setup/git/extraction actions.
- Files touched: the eight files listed in "Files touched this turn".
- Verification performed: `git diff --check`, `npm test`, and the E3-G
  leak/portability grep checks over `kit/v1/`, with outputs and exit codes
  recorded above.
- Why this does not expand the experiment: every edit maps directly to one of
  the five authorized nits and preserves the existing stopgates, no-install
  posture, disabled-bridge posture, optional signed governance, and
  append-only turn history.
- Next handoff: Claude performs a read-only E3-G-FIX-001 architecture-consultant
  critique, then Sami decides whether to accept the fix or authorize a separate
  next scope.

## Handoff
- Next agent: Claude
- Specific ask: perform the E3-G-FIX-001 architecture-consultant critique of
  the edited kit files, this turn note, and the COLLAB handoff update. Verify
  the five nits were addressed, especially the literal `fix | rescope` phase
  enum choice and the "recommended convention for kit adopters" authorization
  choice. Stay read-only: inspect and report findings, blockers, and nits for
  Sami without editing files, installing tools, enabling bridges, registering
  MCP, setting up plugins, changing global config, touching another repo, or
  moving any proposal to approved.
