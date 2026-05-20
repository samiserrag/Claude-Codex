# E5-J - Codex Dashboard Template Design

## Agent
Codex

## Phase
architecture

## Files touched this turn
- `.agent-handoff/turns/E5-J-codex-dashboard-template-design.md` (created)
- `.agent-handoff/COLLAB.md` (edited)

## Trigger

USER SAID E5-I is accepted as a successful Phase 1 backport implementation and
authorized E5-J as a design-only dashboard template/location turn.

## Scope

Design only. E5-J decides how `DASHBOARD.md` should be introduced into
Claude-Codex and `kit/v1` later. It does not create a live
`.agent-handoff/DASHBOARD.md`, does not create `.agent-handoff/reflections/`,
does not edit kit templates, and does not implement any dashboard file.

## Read-First Files

- `.agent-handoff/PROTOCOL.md`
- `.agent-handoff/COLLAB.md`
- `.agent-handoff/turns/E5-I-codex-phase-1-backport-implementation.md`
- `.agent-handoff/turns/E5-I-claude-critique-phase-1-backport-implementation.md`
- `kit/v1/README.md`
- `kit/v1/.agent-handoff/PROTOCOL.md.template`
- `kit/v1/.agent-handoff/COLLAB.md.template`
- `kit/v1/.agent-handoff/prompts/starter-turn-note.md`
- `kit/v1/.gitignore.snippet`

## Design Answers

### 1. Live Dashboard Now?

Claude-Codex should not create a live `.agent-handoff/DASHBOARD.md` yet.
Phase 1 successfully backported the rules that make a dashboard safe, but a
live dashboard would introduce another current-state surface before there is a
concrete operational need for it in this repo.

Keep the live repo on `COLLAB.md` + append-only turn notes until Sami approves
a specific dashboard implementation with current values.

### 2. Live Dashboard Path

If a live dashboard is introduced later, the exact path should be:

```text
.agent-handoff/DASHBOARD.md
```

This matches the pilot convention and the Phase 1 protocol wording: when
`.agent-handoff/DASHBOARD.md` exists, agents start there, then confirm against
`COLLAB.md` and relevant turn notes.

### 3. Kit Shape

`kit/v1` should include a dashboard template, not a ready-rendered dashboard.

Recommended later implementation shape:
- Add `kit/v1/.agent-handoff/DASHBOARD.md.template`.
- Add a short `kit/v1/README.md` section explaining optional dashboard creation
  only if the implementation scope explicitly includes that README edit.
- Do not add a ready-rendered `kit/v1/.agent-handoff/DASHBOARD.md`.
- Do not add a live `.agent-handoff/DASHBOARD.md` in Claude-Codex unless Sami
  separately approves that exact file.

Reason: a template teaches the structure without shipping stale current-state
values. A ready-rendered dashboard in the kit would look operational but would
be obsolete immediately in an adopter repo.

### 4. Minimal Dashboard Sections

A Phase 2 dashboard template should include only:
- Authority / `COLLAB.md` wins
- Dashboard freshness timing
- Current coordination state
- Human attention state
- Human Decision Packet
- Technical Review Packet
- Artifact visibility
- Local-only / duplicate-noise status
- Next safe action

Avoid long history, prior experiment recaps, risk registers, pilot commit
references, and pilot or live Open Mic Colorado identity language.

### 5. Stale Source-Of-Truth Prevention

Dashboard creation should preserve these rules:
- `DASHBOARD.md` is a human-readable operational view, not durable source of
  truth.
- `DASHBOARD.md` does not grant approval.
- `COLLAB.md` wins on conflict.
- If dashboard state is stale and dashboard edits are in scope, refresh before
  relying on it.
- Refresh again at handoff when freshness triggers change.
- If dashboard edits are out of scope, record mismatch/action-needed in the
  current turn note and Human Decision Packet / artifact-visibility fields.
- Template values must be placeholders or examples, not pilot current state.

### 6. Safest First Implementation Shape

After E5-J critique, the safest first implementation is a narrow Phase 2
dashboard-template turn:

1. Create `kit/v1/.agent-handoff/DASHBOARD.md.template`.
2. Optionally update `kit/v1/README.md` with a short optional-dashboard note if
   explicitly authorized.
3. Do not create live `.agent-handoff/DASHBOARD.md` in Claude-Codex unless
   Sami explicitly adds it to the approved write set.
4. Do not modify `.agent-handoff/PROTOCOL.md`,
   `kit/v1/.agent-handoff/PROTOCOL.md.template`, or starter-turn-note unless
   the approval explicitly names those files.
5. Keep dashboard examples neutral and adopter-safe.

### 7. Out Of Scope

- Automation
- Notification/wake
- Reflection paths
- Live Open Mic Colorado work
- Claude Dreams
- Hermes
- Bridges, MCP, or plugins
- Product/runtime changes
- Global config
- Staging, commits, pushes, branches, or PRs

## Human Decision Packet

- State: `none` during E5-J critique.
- What is being proposed: after critique, authorize a Phase 2 implementation
  that adds a dashboard template to `kit/v1` and optionally documents how
  adopters create a live dashboard.
- Why it matters: the pilot showed the dashboard is useful only when paired
  with freshness and `COLLAB.md` authority rules. A template lets the kit teach
  that pattern without creating stale live state too early.
- Consensus recommendation: create a kit dashboard template first; defer live
  `.agent-handoff/DASHBOARD.md` until there is a concrete need and approved
  current values.
- Divergent opinions: none recorded by Codex.
- Exact approval text for first implementation turn:

```text
Authorize a Phase 2 dashboard-template implementation turn in Claude-Codex.
Allowed files: kit/v1/.agent-handoff/DASHBOARD.md.template,
kit/v1/README.md only if needed for a short optional-dashboard note,
.agent-handoff/COLLAB.md, and one new append-only turn note. Do not create
live .agent-handoff/DASHBOARD.md unless separately approved. Do not edit
PROTOCOL.md, starter-turn-note, root docs other than the allowed kit README,
product/runtime files, live Open Mic Colorado, pilot repo files,
.agent-handoff/reflections/, automation, bridges, MCP, plugins, Hermes,
Claude Dreams, timers, cron, webhooks, or global config. Do not stage, commit,
push, branch, or PR.
```

## Technical Review Packet

- Needed: yes, Claude critique for E5-J.
- Intended reviewer: Claude.
- Question: should Claude-Codex defer a live dashboard and introduce only a
  `kit/v1/.agent-handoff/DASHBOARD.md.template` plus optional README note in
  Phase 2?
- Evidence paths:
  `.agent-handoff/PROTOCOL.md`,
  `.agent-handoff/COLLAB.md`,
  `.agent-handoff/turns/E5-I-codex-phase-1-backport-implementation.md`,
  `.agent-handoff/turns/E5-I-claude-critique-phase-1-backport-implementation.md`,
  `kit/v1/README.md`,
  `kit/v1/.agent-handoff/PROTOCOL.md.template`,
  `kit/v1/.agent-handoff/COLLAB.md.template`,
  `kit/v1/.agent-handoff/prompts/starter-turn-note.md`,
  `kit/v1/.gitignore.snippet`.
- Constraints: critique only; no dashboard implementation; no kit edit; no
  live dashboard creation; no reflections path; no automation.
- Output requested: blockers vs nits, plus whether the Phase 2 approval text
  is safe.
- Status: `prepared local-only`.

## Decisions (binding)

- Do not create live `.agent-handoff/DASHBOARD.md` in E5-J.
- Do not create `.agent-handoff/reflections/` in E5-J.
- Do not edit kit templates in E5-J.
- Do not edit `PROTOCOL.md` or starter-turn-note in E5-J.
- Do not touch pilot repo or live Open Mic Colorado.
- Do not enable automation, bridges, MCP, plugins, Hermes, Claude Dreams,
  timers, cron, webhooks, or global config.

## Open questions for the other agent

- Is `kit/v1/.agent-handoff/DASHBOARD.md.template` the correct first template
  path?
- Should `kit/v1/README.md` get a short optional-dashboard section in the same
  Phase 2 implementation, or should that be separate?
- Is deferring live `.agent-handoff/DASHBOARD.md` still the safest choice?

## Blockers (must-fix before continuing)

- None known for E5-J handoff.
- Claude critique must land before any dashboard template implementation.

## Nits (suggested, not required)

- Existing `COLLAB.md` still carries older historical summaries. E5-J leaves
  them intact under the append-only/history policy.

## Browser verification

- Tool used: N/A
- URL or file path opened: N/A
- Action: N/A
- Visible outcome: N/A
- Console/network issues: N/A

Browser verification was not used because E5-J changed only Markdown planning
and handoff files.

## Evidence Basis

- USER SAID: E5-J dashboard template/location turn is design-only and allowed
  files are `COLLAB.md` plus this turn note.
- FILE VERIFIED: pre-work `git status --short --untracked-files=all` was clean.
- FILE VERIFIED: required Phase 1 protocol and kit files were read.
- FILE VERIFIED: `.agent-handoff/DASHBOARD.md` was absent before this turn and
  remains uncreated.
- FILE VERIFIED: `.agent-handoff/reflections/` was absent before this turn and
  remains uncreated.
- AGENT SUMMARY: E5-I critique accepted Phase 1 backport and recommended Phase
  2 dashboard template/design.
- INFERENCE: a kit template is safer than a ready-rendered dashboard because it
  avoids stale current-state values.
- UNKNOWN: whether Sami will want a live Claude-Codex dashboard in the same
  implementation turn later.

## Portability Findings

- Repo-local assumptions: Claude-Codex currently has Phase 1 rules but no live
  dashboard.
- Machine/local-tool assumptions: none.
- Browser/connector assumptions: N/A.
- Any workaround used: none.

## Verification

- `git status --short --untracked-files=all` before edits: clean.
- `git diff --check`: passed.
- Confirm no `DASHBOARD.md` was created: passed;
  `.agent-handoff/DASHBOARD.md` does not exist.
- Confirm no kit template was modified: passed for `kit/v1/README.md`,
  `kit/v1/.agent-handoff/PROTOCOL.md.template`,
  `kit/v1/.agent-handoff/COLLAB.md.template`,
  `kit/v1/.agent-handoff/prompts/starter-turn-note.md`, and
  `kit/v1/.gitignore.snippet`.
- Confirm `PROTOCOL.md` was not modified: passed.
- Confirm starter-turn-note was not modified: passed.
- Confirm `.agent-handoff/reflections/` was not created: passed.
- Confirm pilot repo was not modified: passed; `git status --short
  --untracked-files=all` was clean in `open-mic-colorado-agent-pilot`.
- Confirm live Open Mic Colorado was not touched: passed; `git status --short
  --untracked-files=all` was clean in `colorado-songwriters-collective`.
- Confirm no installs, automation, bridges, MCP/plugins, Hermes, Claude
  Dreams, or global config changes: passed; no such commands were run and no
  related files changed.
- Confirm only allowed files changed: passed; `git status --short
  --untracked-files=all` shows only `.agent-handoff/COLLAB.md` and this E5-J
  turn note.
- Browser verification: N/A; no browser used.
- Tests: not run; Markdown-only planning turn.

## Handoff

- Next agent: Claude
- Specific ask: Critique E5-J after these artifacts are visible. Verify the
  dashboard location/template decision, minimal section list, stale-source
  prevention, implementation-shape recommendation, no-touch compliance, and
  Phase 2 approval text.
