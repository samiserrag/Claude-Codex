# E5-P Codex Alert-State Script

## Authorization

Sami accepted E5-O as a successful alert-only watcher design turn and
authorized E5-P as D1 implementation: a single manually run, read-only
alert-state shell script.

## Scope

Implemented only:
- `.agent-handoff/tools/alert-state.sh`
- `.agent-handoff/COLLAB.md` handoff update
- `.agent-handoff/turns/E5-P-codex-alert-state-script.md`

No watcher runtime, daemon, cron, timer, webhook, launch agent, adapter,
MCP/plugin/bridge, CommonGround, Hermes, Claude Dreams, model call, install,
global config change, staging, commit, push, branch, or PR was authorized or
performed.

## Script Shape

`.agent-handoff/tools/alert-state.sh` is a manually run POSIX-ish shell script.
It is terminal-output-only and read-only. It reads:
- `.agent-handoff/COLLAB.md`
- latest `.agent-handoff/turns/*.md`
- `.agent-handoff/DASHBOARD.md` only if present
- `git status --short --branch --untracked-files=all`
- `git log --oneline -1`

It prints:
- current owner / next actor signals
- human-attention, artifact-visibility, next-safe-action, and handoff signals
- latest turn note
- git status cleanliness
- waiting-state hints for critique / implementation / push / approval
- `source mismatch` when COLLAB, DASHBOARD, or latest-turn actor signals
  conflict

It does not resolve conflicts, infer approval, write files, stage, commit,
push, call models, invoke agents, inspect sibling repos, use network calls, or
create logs/history.

The script is intentionally left non-executable. Manual invocation is:

```sh
sh .agent-handoff/tools/alert-state.sh
```

This keeps the first implementation tiny and avoids permission-mode churn.

## Verification

Pre-change status:

```text
clean
```

Completed verification:
- `git status --short --untracked-files=all` before edits: clean.
- `git status --short --untracked-files=all` after edits showed only:
  `.agent-handoff/COLLAB.md`,
  `.agent-handoff/tools/alert-state.sh`, and
  `.agent-handoff/turns/E5-P-codex-alert-state-script.md`.
- `git diff --check`: pass.
- `sh -n .agent-handoff/tools/alert-state.sh`: pass.
- Script mode: `-rw-r--r--`; intentionally non-executable. Manual invocation
  is `sh .agent-handoff/tools/alert-state.sh`.
- Ran `sh .agent-handoff/tools/alert-state.sh` once manually. It printed the
  current advisory summary, detected Claude as next actor, reported no source
  mismatch, and showed expected local E5-P working-tree changes.
- `git status --short --untracked-files=all` after script run matched the
  pre-run local-change shape, confirming the script run did not modify the
  working tree.
- No watcher runtime, daemon, cron, launch agent, timer, webhook, adapter,
  MCP/plugin/bridge, CommonGround, Hermes, Claude Dreams, or global config was
  created.
- No pilot repo touch.
- No live Open Mic Colorado touch.

Browser verification: N/A; no browser used.
Tests: N/A; docs/script-only implementation.

## Handoff

Next agent: Claude.

Requested action: critique E5-P after reading Claude-Codex main/worktree at or
after this local implementation state. Verify the script is manual,
read-only, terminal-output-only, no-network, no-model, no-agent-invocation,
and that it does not make itself a source of truth or approval mechanism.

Hard stop after E5-P. No E5-Q, staging, commit, push, branch, PR, automation,
daemon, CommonGround, MCP/plugin/bridge, Hermes, Claude Dreams, live Open Mic
Colorado, pilot repo, or product/runtime action is authorized by this turn.
