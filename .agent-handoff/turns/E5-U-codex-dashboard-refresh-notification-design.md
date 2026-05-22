# E5-U Codex Dashboard Refresh Notification Design

## Authorization

Sami authorized E5-U as a design-only dashboard refresh and notification turn.

## Scope

Design only. Edited only:
- `.agent-handoff/COLLAB.md`
- `.agent-handoff/turns/E5-U-codex-dashboard-refresh-notification-design.md`

No dashboard HTML/Markdown edit, alert-state edit, protocol edit, kit template
edit, server, model call, NanoClaw, CommonGround, MCP/plugin/bridge, cron,
launch agent, timer, webhook, daemon, global config, staging, commit, push,
branch, or PR is authorized by this turn.

## 1. Why Manual Browser Refresh Did Not Change The Dashboard

`.agent-handoff/DASHBOARD.html` is a static file. Its primary action is literal
HTML text stored in the repo, not a computed view.

Manual browser refresh only reloads the same file bytes from disk. If the file
still says "authorize the E5-T-FIX-001 push," the browser will show that same
message after refresh, even if the push already happened.

The push changed Git history and remote visibility. It did not automatically
rewrite `.agent-handoff/DASHBOARD.html` or `.agent-handoff/DASHBOARD.md` to the
next action. Because no generator, watcher, or repo-writing agent rewrote the
dashboard after the push, browser refresh had nothing new to display.

So the lifecycle is:

1. Repo-writing agent writes dashboard content.
2. Browser opens or refreshes the static file.
3. Browser shows exactly that content.
4. A later handoff/push changes the operational state.
5. The browser still shows old content until a repo-writing agent or generator
   updates the file.

The dashboard can be an excellent control surface, but static browser refresh is
not dashboard recomputation.

## 2. What Must Be True For Auto-Refresh To Help

There are three distinct actions:

- Browser reloads same file: useful only if the file already changed on disk.
  It cannot make stale dashboard content current by itself.
- Repo-writing agent updates file: Claude or Codex refreshes DASHBOARD.md/html
  during an authorized turn or critique handoff. This preserves governance but
  requires an agent turn.
- Generator/watcher updates file: a local process reads COLLAB/git/turn notes
  and rewrites dashboard files. This could keep the browser fresh, but it is a
  file-writing runtime and must be treated as a larger trust surface.

Auto-refresh helps only after one of the latter two has produced updated file
bytes. Without updated file bytes, auto-refresh repeats stale confidence faster.

## 3. Browser-Only Option

Browser-only means adding static HTML behavior such as:

- `<meta http-equiv="refresh">`
- inline JavaScript `location.reload()` on an interval
- optional browser Notification API after Sami enables permission
- optional sound after user interaction enables it

Constraints it can satisfy:

- no network
- no server
- no external JavaScript/CSS
- no model calls
- no repo writes

Limits:

- It cannot read Git status or repo files reliably from `file://`.
- It cannot know whether COLLAB.md changed unless that information is already
  embedded in the loaded HTML.
- It cannot rewrite its own file.
- Browser notification permission may not work from `file://` consistently.
- Repeated reloads or notifications can become noise.
- It may create stale-dashboard confidence by making the page look active while
  the content remains old.

Conclusion: browser-only reload/notification is not the right first fix. It can
only be a later convenience once a separate actor updates the dashboard file.

## 4. Osascript Helper Option

The smallest useful notification surface is a manually run local helper that:

- reads `.agent-handoff/COLLAB.md`
- reads `.agent-handoff/DASHBOARD.md`
- optionally reads `.agent-handoff/DASHBOARD.html`
- reads latest `.agent-handoff/turns/*.md`
- runs `git status --short --branch --untracked-files=all`
- runs `git log --oneline -1`
- sends a macOS notification or sound when Sami attention appears needed

Required constraints:

- no file writes
- no model calls
- no daemon
- no cron
- no launch agent
- no timer/webhook setup
- no persistent logs/history
- no approval inference
- no sibling repo inspection
- no source-of-truth authority

The helper should be manual first, for example:

```sh
sh .agent-handoff/tools/attention-notify.sh
```

It should notify only for clear attention states, such as:

- Current owner / next actor appears to be Sami.
- Human attention state is `decision needed`.
- Exact approval text is present.
- Artifact visibility is `local-only` or `action needed`.
- Working tree is dirty unexpectedly.
- COLLAB/DASHBOARD/latest-turn actor signals conflict.

It should not update the dashboard. Its job is attention, not source-of-truth
mutation.

Risks:

- Another manual command/process may be ignored.
- False alerts can erode trust quickly.
- Maintenance cost rises if it duplicates alert-state.sh logic.
- It can still create false confidence if notification wording sounds
  authoritative.

Mitigation:

- Keep notification wording advisory:
  "Claude-Codex needs attention. Check COLLAB.md."
- Include reason text in the terminal output.
- Do not run in a loop in the first implementation.
- Do not play sound by default unless Sami explicitly asks.

## 5. NanoClaw V2 Option

NanoClaw remains a possible future transport or approval-card candidate, but it
is not the right E5-U implementation path.

Potential fit later:

- message routing
- wake/transport
- approval-card style surfaces
- agent hosting

Current mismatch:

- Our source of truth is Git plus COLLAB.md plus turn notes.
- NanoClaw state would need to remain transport-only, not authoritative.
- Any NanoClaw approval-card surface would need exact approval text mirrored
  into repo-visible artifacts.
- Adding NanoClaw now would skip the smaller local-notification experiment.

Conclusion: defer. Evaluate only after a manual local notifier proves that
passive attention is genuinely useful and after a toy-repo spike, not against
Claude-Codex or live Open Mic Colorado.

## 6. Recommended Smallest Safe Next Implementation

Recommendation: implement the osascript helper only.

Do not implement browser-only reload/notification first. Do not implement both.
Do not implement a file-writing dashboard generator yet.

Why:

- Browser-only refresh cannot recompute static content.
- A file-writing generator is a larger trust surface.
- A manual osascript helper directly addresses the current pain: Sami should
  know attention is needed without watching Terminal.
- It preserves COLLAB.md as authoritative.
- It can be killed easily if noisy.

The helper should be manually run and read-only. Use a tiny sibling script so
`alert-state.sh` stays unchanged. The first implementation should not create a
loop.

Dashboard refresh remains a repo-writing-agent responsibility:

- Claude/Codex refresh DASHBOARD.md/html at handoff when dashboard edits are in
  scope.
- If dashboard edits are out of scope, the agent records the mismatch and stops.
- A generator/watcher that writes dashboard files is a future separate design,
  not E5-U's next implementation.

## 7. Success Criteria

- Sami knows attention is needed without staring at Terminal.
- Notifications are rare and tied to explicit attention states.
- Notification wording is advisory and points back to COLLAB.md.
- Dashboard does not spam reloads or alerts.
- COLLAB.md remains authoritative.
- No approval is inferred.
- No hidden state is introduced.
- No file writes, logs, daemon, cron, launch agent, webhook, model call, bridge,
  or global config are introduced.

## 8. Kill Criteria

Kill or roll back the notifier if:

- notifications are noisy
- notifications create stale-dashboard confidence
- notifications falsely say Sami is needed
- running the helper takes more work than copy/paste
- the helper pressures agents or Sami toward autonomous approval
- the helper needs persistent state, logs, daemon behavior, or global config to
  be useful
- the helper duplicates too much logic from `alert-state.sh` and becomes a
  maintenance burden

## 9. Exact Approval Text For Implementation Turn

```text
You are Codex in /Users/samiserrag/Documents/GitHub/claude-codex.

Approved:

1. Accept E5-U as a successful dashboard refresh + notification design turn.

2. Authorize E5-V as the smallest safe manual macOS attention notifier.

Purpose:
- Let Sami know when Claude-Codex needs attention without watching Terminal.
- Keep COLLAB.md authoritative.
- Keep the notifier read-only and manually run.
- Do not recompute or rewrite dashboard files.
- Do not infer approval.

Scope:
- Implement one manually run read-only shell helper:
  `.agent-handoff/tools/attention-notify.sh`.
- Keep `.agent-handoff/tools/alert-state.sh` unchanged.
- No loop, daemon, cron, launch agent, timer, webhook, server, model call,
  MCP/plugin/bridge, NanoClaw, CommonGround, Notion, install, or global config.
- No dashboard HTML/Markdown edits unless separately approved.
- No staging, commit, push, branch, or PR.
- Hard stop after E5-V and hand off for Claude critique.

Allowed files:
- .agent-handoff/tools/attention-notify.sh
- .agent-handoff/COLLAB.md
- .agent-handoff/turns/E5-V-codex-manual-attention-notifier.md

Read first:
- .agent-handoff/PROTOCOL.md
- .agent-handoff/COLLAB.md
- .agent-handoff/DASHBOARD.md
- .agent-handoff/DASHBOARD.html
- .agent-handoff/tools/alert-state.sh
- .agent-handoff/turns/E5-U-codex-dashboard-refresh-notification-design.md

Required:
- Read only COLLAB.md, DASHBOARD.md, DASHBOARD.html if needed, latest turn note,
  git status, and git log.
- Send one macOS notification with `osascript` only when attention appears
  needed.
- Print terminal output explaining the reason.
- Notification wording must be advisory, for example:
  "Claude-Codex needs attention. Check COLLAB.md."
- Do not write files.
- Do not create logs/history.
- Do not run continuously.
- Do not use sound unless separately approved.
- Do not inspect sibling repos.
- Do not treat green status, silence, consensus, or "looks good" as approval.

Verification:
- git status --short --untracked-files=all before and after.
- git diff --check.
- Run the helper once manually.
- Confirm running the helper does not modify the working tree.
- Confirm only allowed E5-V files changed.
- Confirm no DASHBOARD.html/DASHBOARD.md/PROTOCOL.md/kit template edits.
- Confirm alert-state.sh was not modified.
- Confirm no server, cron, launch agent, webhook, timer, NanoClaw,
  CommonGround, MCP/plugin/bridge, model calls, installs, or global config
  changes.
- Confirm live Open Mic Colorado and pilot repo were not touched.

Output:
- .agent-handoff/tools/attention-notify.sh
- .agent-handoff/COLLAB.md handoff update
- .agent-handoff/turns/E5-V-codex-manual-attention-notifier.md

Hard stop after E5-V.
```

## 10. Verification

Completed verification:
- `git status --short --untracked-files=all` before edits: clean.
- `git status --short --untracked-files=all` after edits showed only the two
  allowed E5-U files.
- `git diff --check`: pass.
- Confirmed only E5-U allowed files changed.
- Confirmed no DASHBOARD.html, DASHBOARD.md, alert-state.sh, PROTOCOL.md, kit,
  server, cron, launch agent, webhook, timer, NanoClaw, CommonGround,
  MCP/plugin/bridge, model call, install, or global config changes.
- Confirmed live Open Mic Colorado and pilot repo were not touched.

## Handoff

Next agent: Claude.

Requested action: critique E5-U design. Focus on whether the static-file
lifecycle explanation is correct, whether browser-only reload is correctly
rejected as insufficient, whether the manual osascript helper is the smallest
safe next implementation, and whether the E5-V approval text is scoped tightly.

Hard stop after E5-U. No implementation, dashboard edit, alert-state edit,
protocol edit, kit edit, server, model call, NanoClaw, CommonGround,
MCP/plugin/bridge, cron, launch agent, timer, webhook, daemon, global config,
staging, commit, push, branch, or PR is authorized.
