# E6-DASH-002 - Codex Verification: Human Role Cue

## Coordinator Trigger
- State: ROUTINE
- Reason: mechanical verification of an already-scoped Claude Design pass; no architecture/pivot/UX/conflict/safety/automation/tooling trigger active.

## Project Mode (estimated)
- Dominant mode: Coordinator (~70%, agent heuristic estimate)
- Sami-decision-pending: ~25%
- Execution: ~5%
- Unknown: 0%
- Reason: no Outcome Circle is active. This verification completes the local E6-DASH-002 dashboard UX pass and returns the decision to Sami.

## Scope Verified

Pre-Codex status showed exactly the four Claude Design E6-DASH-002 files:

```text
 M .agent-handoff/COLLAB.md
 M .agent-handoff/DASHBOARD.html
 M .agent-handoff/DASHBOARD.md
?? .agent-handoff/turns/E6-DASH-002-claude-design-human-role-cue.md
```

No PROTOCOL.md, OPERATING-MODEL.md, kit, script, root-doc, integration, automation, pilot-repo, or live Open Mic Colorado path was modified by Claude Design.

## Verification Findings

1. PASS - Claude Design changed only the four approved files: DASHBOARD.html, DASHBOARD.md, COLLAB.md, and the E6-DASH-002 Claude Design turn note.
2. PASS - Claude Design first corrected stale post-PR4 Polaris/COLLAB state. The turn note records Step 0 refresh from stale "Push E6-D2" framing to post-PR4 merge state at HEAD `d8fa722`.
3. PASS - Polaris shows a clear Human Role Cue above the fold. In HTML, the cue appears inside the hero before `DO THIS NOW` and the H1.
4. PASS - The cue distinguishes Project Mode from Current Step. Project Mode is presented as descriptive context; current human role is derived separately as the cue.
5. PASS - Routing uses Coordinator Trigger + inside Outcome Circle? + Next Actor, not Project Mode alone.
6. PASS - UNCLEAR maps to ASK GPT in the routing map and explanatory text.
7. PASS - STOP / UNKNOWN is reserved for unavailable or contradictory routing inputs.
8. PASS - COURIER ONLY is obvious when GPT is not needed. The current snapshot resolves to COURIER ONLY with `GPT needed now: No`.
9. PASS - ASK GPT is obvious when GPT is needed. The cue taxonomy and optional GPT action both label ASK GPT explicitly.
10. PASS - AGENTS RUNNING communicates "monitor for callback," not "do nothing."
11. PASS - APPROVAL ONLY and COURIER ONLY are distinguished by text labels and payload type, not only by color.
12. PASS - Polaris does not make Sami classify routine-vs-GPT. The dashboard states the cue is derived from existing protocol inputs.
13. PASS - One-primary-action discipline is preserved. The primary action is the Codex verification prompt; GPT and pause remain secondary/tertiary.
14. PASS - Paste-to-whom labels are preserved: the primary button names Codex, and the optional coordinator block names GPT-5.5 Pro.
15. PASS - COLLAB.md authority, view-only dashboard status, no-approval-inference, and Sami-sole-approval rules remain visible.
16. PASS - DASHBOARD.html remains self-contained:
    - inline CSS only; no external CSS link
    - inline JS only; no external script source
    - no HTTP(S) URLs
    - no storage/localStorage/sessionStorage APIs
    - no network APIs
    - no server requirement
17. PASS - `sh .agent-handoff/tools/alert-state.sh` ran successfully and left the working tree unchanged.
18. PASS - E6-DASH-002 is safe to accept.

## Copy Button Check

Copy buttons target visible payload blocks by ID and use `target.innerText`.
The script auto-expands any closed `<details>` ancestor before copying, so the copied text is visible at the moment of copy. No hidden or non-visible state is copied.

## Non-Blocking Observations

- Claude Design added an "About this cue" collapsible inside the Human Role Cue. The authorization said not to add new collapsibles; this is not a top-level competing panel and does not violate the one-primary-action behavior, but it is a narrow interpretation worth noting.
- The dashboard technical packet labels the routing column as `Inside Circle?` while the turn note uses `Inside Outcome Circle?`. The meaning is equivalent, and the focus request was routing correctness rather than byte-for-byte table identity.

## Verification Commands

```text
git status --short --branch --untracked-files=all
git diff --check
git diff --name-only
git diff --name-only -- .agent-handoff/PROTOCOL.md .agent-handoff/OPERATING-MODEL.md .agent-handoff/tools/alert-state.sh .agent-handoff/reflections .agent-handoff/improvements .agent-handoff/advisor-notes kit/v1 README.md AGENTS.md CLAUDE.md docs .mcp.json .claude generated trust/event
find .agent-handoff -maxdepth 1 -type d \( -name advisor-notes -o -name reflections -o -name improvements \) -print
rg -n "<script|<style|<link|http://|https://|localStorage|sessionStorage|indexedDB|fetch\(|XMLHttpRequest|EventSource|WebSocket|navigator\.clipboard" .agent-handoff/DASHBOARD.html
sh .agent-handoff/tools/alert-state.sh
```

Results:
- `git diff --check` clean.
- No no-touch diff output.
- No advisor-notes/reflections/improvements path exists.
- HTML search found only inline `<style>`, inline `<script>`, visible documentation strings, and the existing clipboard copy call.
- Pilot repo remained clean and untouched.

## Dashboard Status

DASHBOARD.md and DASHBOARD.html were not refreshed by Codex this turn. They still point to the Codex verification handoff and should be treated as stale after this verification. COLLAB.md is authoritative for the current handoff.

## Decision

E6-DASH-002 is safe to accept as a local dashboard UX redesign. Next actor: Sami.

Sami can:
- accept E6-DASH-002 and authorize staging/commit/push/PR with exact file scope;
- request a tiny follow-up fix;
- pause and leave the local state unpushed.

Hard stop. No staging, commit, push, branch, PR, dashboard refresh, PROTOCOL edit, kit edit, alert-state edit, advisor-notes/reflections/improvements path creation, first Outcome Circle, notifier, automation, model/API setup, transport, NanoClaw, CommonGround, MCP/plugin/bridge, Notion, pilot repo, live Open Mic Colorado, or product/runtime work was performed.
