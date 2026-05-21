# E5-O - Codex Alert-Only Watcher Design

## Agent
Codex

## Phase
design

## Files touched this turn
- `.agent-handoff/turns/E5-O-codex-alert-only-watcher-design.md` (created)
- `.agent-handoff/COLLAB.md` (edited; handoff update only)

## Decisions (binding)
- E5-N is accepted as a successful read-only CommonGround feasibility review.
- E5-O is design-only. No watcher script, command file, adapter, MCP, runtime,
  CommonGround artifact, notification/wake setup, cron, timer, webhook, model
  call, protocol edit, template edit, dashboard edit, reflection path edit, kit
  edit, product/runtime edit, pilot repo touch, or live Open Mic Colorado touch
  occurred.
- The watcher design is alert-only and advisory. It cannot edit files, commit,
  push, approve, infer approval, call models, or become source of truth.
- Git, `COLLAB.md`, and append-only turn notes remain authoritative.

## 1. Alert-Only Watcher Principles

- Read-only: inspect repo files and Git state only.
- Manual-first: the first implementation should be manually run on demand.
- Shell-output-first: terminal output is the primary alert destination.
- Advisory-only: output helps Sami decide what to paste or inspect next.
- No model calls: do not summarize with LLMs, classify with LLMs, or ask a
  triage model.
- No writes: do not update `COLLAB.md`, turn notes, dashboard, Git index, or
  any runtime file.
- No approval semantics: do not grant approval, infer approval from silence, or
  turn "looks good" into scope.
- No hidden state: every alert should cite the file or Git command it read.
- Git-authoritative: `COLLAB.md` and committed turn notes remain the source of
  truth; watcher output is disposable.

## 2. Observed Signals

Minimum signals:

- `Current Owner` / next actor from `.agent-handoff/COLLAB.md`
- Human attention state, when present in `COLLAB.md`, `DASHBOARD.md`, or latest
  turn note
- Artifact visibility state and whether visibility is `action needed`
- Next safe action / Next Request sections in `COLLAB.md`
- Latest turn note path from `.agent-handoff/turns/*.md`
- Latest commit from `git log --oneline -1`
- Working tree cleanliness from `git status --short --untracked-files=all`
- Whether a critique appears to be waiting
- Whether an implementation appears to be waiting
- Whether a push appears to be waiting, inferred only from local commit status
  if implementation later includes an explicit upstream check

Preferred read set:

- `.agent-handoff/COLLAB.md`
- latest `.agent-handoff/turns/*.md`
- optional `.agent-handoff/DASHBOARD.md` if present
- `git status --short --untracked-files=all`
- `git log --oneline -1`

Do not parse hidden chat context. Do not inspect sibling repos unless a future
implementation explicitly scopes that read-only check.

## 3. Event Types

Smallest useful event model:

- `claude_next`: COLLAB or latest turn says Claude is next.
- `codex_next`: COLLAB or latest turn says Codex is next.
- `sami_attention`: human attention state is decision needed, approval
  required, or blocker.
- `visibility_action_needed`: artifact visibility is action needed, local-only
  when a non-local reviewer is next, or a push/share/export is the next safe
  action.
- `dirty_unexpected`: `git status --short --untracked-files=all` is non-empty
  outside expected local artifacts.
- `critique_waiting`: latest handoff asks for critique.
- `implementation_waiting`: latest handoff asks for implementation after
  approval.
- `push_or_share_waiting`: local artifacts exist and the next reviewer cannot
  see them until push/share/export.
- `hard_stop`: no safe action exists without explicit approval or artifact.

Event output should be terse:

```text
EVENT: claude_next
WHY: COLLAB.md Next Request To Claude is non-empty
NEXT: paste E5-O critique prompt to Claude
SOURCE: .agent-handoff/COLLAB.md
```

## 4. Alert Destinations

First implementation:

- Terminal/shell output only.
- Optional `--quiet` exit code later:
  - `0`: no action
  - `1`: action needed
  - `2`: blocker/dirty unexpected

Near-future optional, still manual and alert-only:

- macOS notification via `osascript` or `terminal-notifier` only if separately
  approved. Prefer built-in `osascript` if available; do not install
  `terminal-notifier`.
- tmux status/message output if Sami is already running tmux.

Out of scope for first implementation:

- Slack
- Discord
- email
- webhooks
- cron
- launchd/LaunchAgent
- background daemon
- model-calling triage

## 5. No-Touch / No-Action Guarantees

The watcher must explicitly not do:

- no file edits
- no commits
- no pushes
- no branches or PRs
- no staging
- no model calls
- no approvals
- no automation beyond alerting
- no CommonGround install, clone, service, Postgres, or adapter
- no MCP/plugin/bridge
- no global config
- no live Open Mic Colorado touch
- no pilot repo touch unless separately scoped as read-only
- no dashboard creation
- no reflection proposal filing
- no protocol/template edits

The watcher may only read files and Git metadata named in its approved scope.

## 6. Source-Of-Truth Rules

- Watcher output is advisory only.
- `COLLAB.md` remains authoritative for current shared state.
- Append-only turn notes remain authoritative for durable turn history.
- If `DASHBOARD.md` exists, it is an operational view only and `COLLAB.md`
  wins on conflict.
- The watcher cannot grant approval.
- The watcher cannot infer approval from silence, consensus, green status,
  "looks good", or lack of objection.
- If watcher output conflicts with `COLLAB.md`, ignore the watcher and inspect
  `COLLAB.md` plus the latest turn note.
- The watcher should print "source mismatch" instead of resolving conflicts.

## 7. First Implementation Shape

Safest first implementation after Claude critique and Sami approval:

- One local shell script or documented shell command.
- Read-only.
- Manually run.
- Shell output only.
- No daemon.
- No launch agent.
- No cron.
- No webhook.
- No model calls.
- No CommonGround.
- No MCP/plugin/bridge.

Recommended path if implemented as a script later:

```text
.agent-handoff/tools/alert-state.sh
```

Alternative if Sami wants zero new repo files:

```text
zsh -lc '<documented read-only command block>'
```

Recommendation: start with a documented command block or a single script only
if Sami explicitly approves that exact path. Do not create `.agent-handoff/tools/`
in E5-O.

Minimum implementation behavior:

- Print current branch and latest commit.
- Print `git status --short --untracked-files=all`.
- Print current owner / next actor from `COLLAB.md`.
- Print next request sections from `COLLAB.md`.
- Print newest turn note path.
- Print a simple event label from the event model above.
- Print "advisory only; COLLAB.md remains authoritative".

## 8. Failure Modes / Kill Criteria

Success criteria:

- Reduces routine relay decisions.
- Makes "what do I paste next?" obvious.
- Makes "Sami needed / not needed" obvious.
- Flags visibility gaps before another agent wastes a turn.
- Keeps prompts shorter by pointing at current files and commit.
- Requires less maintenance than manual copy/paste.

Kill criteria:

- Creates noise.
- Produces stale prompts.
- Creates false confidence.
- Causes Sami or agents to trust watcher output over `COLLAB.md`.
- Requires more maintenance than copy/paste.
- Needs model calls to be useful.
- Needs daemon/cron/launchd/webhook behavior to be useful.
- Starts drifting toward approval inference or automatic action.

Stop before adding model calls unless alert-only proves useful. If alert-only
does not reduce relay friction, do not escalate to MCP, CommonGround, or
model-calling triage.

## 9. Human Decision Packet

State: prepared local-only.

Decision needed from Sami: after Claude critique, decide whether to authorize a
tiny read-only alert implementation.

Why Sami is needed: even a read-only watcher changes relay workflow and may add
files or local commands. It must stay explicitly scoped so it does not become
automation or an approval engine.

Consensus recommendation: Codex recommends a manual shell-output-only first
implementation. Do not use CommonGround, MCP, model calls, daemonization, cron,
launchd, webhooks, Slack/Discord/email, or repo writes.

Divergent opinions: none recorded in this turn. E5-N and its critique both
favored D1 as the next low-risk path after CommonGround review.

Options:
- A: Implement one read-only shell script at a separately approved path.
- B: Use a documented copy/paste shell command block with no repo file.
- C: Design macOS notification output before implementation.
- D: Defer watcher and continue manual relay.
- E: Revisit CommonGround source-pinning before any watcher work.

Risk / tradeoff: a watcher can reduce relay friction, but stale or noisy output
can waste more time than copy/paste. Keeping it manual and shell-output-only
limits the failure mode.

Exact approval text, if approval is required:

```text
Approved: Accept E5-O as a successful alert-only watcher design turn.
Authorize E5-P as a read-only, manually run, shell-output-only alert watcher
implementation. Allowed files: [exact file path if using a script] and
.agent-handoff/COLLAB.md plus one E5-P turn note. No model calls, no daemon,
no cron, no launchd, no webhooks, no CommonGround, no MCP/plugins/bridges, no
approvals, no file edits by the watcher, no commits, no pushes, and no global
config changes.
```

Technical packet: this turn note.

## 10. Exact Approval Text For A Future Implementation Turn

If Sami wants the smallest script implementation, use:

```text
Approved:

1. Accept E5-O as a successful D1 alert-only watcher design turn.

2. Authorize E5-P as a tiny read-only alert watcher implementation.

Scope:
- Create one manually run shell script only.
- The watcher may read only .agent-handoff/COLLAB.md, latest
  .agent-handoff/turns/*.md, optional .agent-handoff/DASHBOARD.md if present,
  git status --short --untracked-files=all, and git log --oneline -1.
- The watcher must output terminal text only.
- The watcher must not edit files, stage, commit, push, approve, infer approval,
  call models, install anything, use CommonGround, run MCP/plugins/bridges,
  create timers/cron/webhooks/launchd, or modify global config.

Allowed files:
- [exact script path]
- .agent-handoff/COLLAB.md
- .agent-handoff/turns/E5-P-codex-alert-watcher-implementation.md

Hard stop after E5-P.
```

## Verification

- Pre-edit `git status --short --untracked-files=all`: clean.
- Post-edit `git status --short --untracked-files=all`: only the two
  authorized E5-O files changed or appeared:
  - `M .agent-handoff/COLLAB.md`
  - `?? .agent-handoff/turns/E5-O-codex-alert-only-watcher-design.md`
- `git diff --check`: passed.
- Only allowed E5-O files changed.
- No watcher script was created.
- No CommonGround install, clone, service, Postgres setup, adapter, or
  prototype exists in the repo.
- No protocol/template/dashboard/reflection/kit files were modified.
- Pilot repo status: clean; no pilot files modified.
- Live Open Mic Colorado status: clean; no live repo files modified.
- No installs, automation, notification/wake runtime, bridges, MCP/plugins,
  Hermes, Claude Dreams, timers, cron, webhooks, or global config changes
  occurred.
- Browser verification: N/A; no browser used.
- Tests: not run; E5-O is Markdown design-only.

## Handoff
- Next agent: Claude.
- Specific ask: critique E5-O's alert-only watcher design, especially whether
  the first implementation shape is small enough and whether the no-action
  guarantees prevent watcher output from becoming source of truth.
