# E6-DASH-001 - Claude Design - Human Control Tower Redesign

## Agent
Claude

## Phase
design (implementation by designer; not the standard build/critique split)

## Coordinator Trigger
- State: NEEDS_GPT
- Reason: Sami's "dashboard is still confusing" complaint fired the
  UX/cognitive-load failure trigger from PROTOCOL.md §"Coordinator Trigger
  Classification" (just landed at `dbb9172`). GPT was consulted (via Sami's
  `/design-critique` invocation that produced Claude's critique, then via
  GPT's routing recommendation to "let Claude Design work on this"). This
  turn IS the implementation response to that trigger; the trigger fired
  and was answered within the same conversational thread.

## External Coordinator Input: GPT-5.5 Pro

Sami pasted GPT-5.5 Pro's routing decision in the immediately prior turn.
GPT's framing scribed here for repo-visible attribution:

```text
Yes. Let Claude Design work on this.

This is exactly the right moment to use a design-specialist model/tool,
because the failure is no longer protocol correctness. The failure is human
interface design.

Claude Code's critique is right: the dashboard is still an audit log
displayed to you, not a true control surface for you. The highest-priority
issues are visual and interaction-design issues, not governance issues.

Important routing correction
Do not ask Claude Design to "fix the system."
Ask it to fix one thing: "Make the dashboard usable for Sami."

The governance is already in place. Claude Design should not touch
protocol, kit templates, scripts, automation, NanoClaw, or advisor paths.

Best next move
Use Claude Design as a dashboard UX specialist.
If Claude Design can edit files in the repo, let it implement directly
with a tight file scope.
If Claude Design cannot edit files, have it produce a visual/spec prompt,
then Codex implements that spec.
Either way, this should be a bounded dashboard UX turn, not another
architecture turn.

[GPT then provided a detailed prompt with 13 design goals, allowed files,
verification steps, and no-touch list. Full prompt available in the
conversation thread.]

Then who critiques it?
Do not let the same design loop critique itself.
Use this sequence:
- Claude Design designs/implements the UX.
- Codex verifies scope/static HTML/no-touch discipline.
- GPT + Sami judge whether it actually feels usable.

Claude Code can still audit safety, but for UX success the real acceptance
test is: "Can Sami know what to do in 10 seconds without reading agent
payloads?"
```

Structured summary:
- GPT confirmed the dashboard problem is UX, not governance.
- GPT routed implementation to Claude as design specialist.
- GPT specified bounded scope: dashboard UX only; no protocol/kit/script/
  automation touches.
- GPT proposed routing the verification to Codex (scope/discipline check)
  and judgment to Sami + GPT (usability assessment).
- GPT supplied a detailed prompt with 13 design goals, but Sami explicitly
  instructed: "please use your judgement and dont rely on this prompt as
  strict rules, just general advice. You are a specialist and know how to
  best work on this."

Sami accepted:
- The routing (let Claude Design implement directly).
- The bounded scope (dashboard UX only).
- The verification sequence (Codex scope-check, then Sami + GPT usability
  judgment).
- The use-your-judgment instruction (treat GPT's 13 goals as advice, not
  strict rules).

Sami rejected: none explicitly.

Sami left undecided: 
- Whether the redesign will land as a push or be pause-and-observed (
  depends on Codex verification + Sami/GPT usability judgment).

Deferred:
- Any kit template changes (out of scope).
- Any new protocol additions (out of scope).
- Multi-turn outcome/rubric loops (still deferred to E6-C or later).
- `.agent-handoff/advisor-notes/` path creation (out of scope; GPT input
  for this turn is scribed in this turn note + COLLAB.md, per the
  existing pattern).

## Active Role Declaration
- Active role: dashboard UX designer/implementer for this turn (unusual
  for Claude, which typically takes the auditor role; per GPT's routing
  recommendation for this UX-specialist task).
- Authority limit: edit only the four approved E6-DASH-001 files:
  `.agent-handoff/DASHBOARD.html`, `.agent-handoff/DASHBOARD.md`,
  `.agent-handoff/COLLAB.md`, and this append-only E6-DASH-001 turn note.
- Explicit non-authority: no PROTOCOL.md edit, no `alert-state.sh` edit,
  no kit/v1 edit (any of: README, DASHBOARD.md.template, COLLAB.md.template,
  PROTOCOL.md.template, prompts/), no root doc edit, no docs/ edit, no
  advisor-notes/reflections/improvements path creation, no notification
  script, no osascript helper, no automation, no model call, no MCP/plugin/
  bridge, no NanoClaw, no CommonGround, no Notion, no `.mcp.json`, no
  cron/timer/webhook/launch agent, no global config, no server, no OpenAI
  API setup, no pilot repo touch, no live Open Mic Colorado touch, no
  staging/commit/push/branch/PR.

## Files Touched
- `.agent-handoff/DASHBOARD.html` (full rewrite, ~390 lines)
- `.agent-handoff/DASHBOARD.md` (parallel rewrite, ~260 lines)
- `.agent-handoff/COLLAB.md` (handoff update)
- `.agent-handoff/turns/E6-DASH-001-claude-design-human-control-tower-redesign.md` (created)

## Implementation Summary

Full rewrite of `.agent-handoff/DASHBOARD.html` and parallel rewrite of
`.agent-handoff/DASHBOARD.md` to address Sami's repeated "still confusing"
feedback after 5 dashboard iterations.

### Key changes vs prior dashboard

**Hero (above the fold):**
- `DO THIS NOW` eyebrow (preserved from FIX-004).
- **Plain-language h1**: "Get Codex to verify the new dashboard" instead of
  "Recommended: Push E6-B + E6-B-FIX-001 (combined with both Claude
  critiques)". Internal turn IDs moved into provenance details.
- **One-sentence subtitle** explaining what's happening: "Claude just
  redesigned this dashboard for clarity. Codex needs to check scope and
  self-contained HTML before you trust it as the new control surface."
- **Role-flow strip near the top** visualizing
  `Claude designed → Sami sends to Codex → Codex verifies → Sami + GPT
  judge → Push if good` with the current step highlighted (mint background,
  white text). Done steps prefixed with ✓. Pending steps muted gray.
- **"Why" paragraph** in a highlighted accent-soft box with a left border.
  Plain-language explanation of what changed and why.
- **Three color-coded action buttons** stacked vertically:
  - Primary (mint green, accent border, white text): Copy verification
    prompt — paste to **Codex**. Hint: "Codex checks file scope,
    self-contained HTML, and no-touch surfaces."
  - GPT (purple background, purple border, purple text): Copy question —
    ask **GPT-5.5 Pro** for design feedback first. Hint: "Optional: get
    GPT's design opinion before Codex verification."
  - Tertiary (transparent background, gray outline, muted text): Pause
    and observe. Hint: "Do nothing — the local working tree stays as-is
    until you act."
  - Each button has: icon (emoji), label with bolded receiving-agent
    name, and a one-line hint about what the receiving agent will do.
- **Route/trigger info line** below buttons: snapshot expiry conditions +
  current Coordinator Trigger state in a single muted line.
- **Source-of-truth guardrail** preserved (separated by top border).
  Sami-alone-approves discipline added inline.

**Below the fold (7 collapsibles, default closed):**
1. **"📄 What gets pasted to Codex (the verification prompt)"**: full
   verification prompt in a `<pre>` block, with a `payload-label`
   explicitly saying "Paste this entire block to Codex. Codex will
   verify... Codex is NOT being asked to judge UX usability — that's for
   you and GPT." Bordered with accent color (border-color: var(--accent)).
2. **"💬 What gets pasted to GPT (optional design-feedback question)"**:
   full design-feedback question in a `<pre>` block, with payload-label
   "Optional. Paste this to GPT-5.5 Pro if you want a design opinion
   before Codex's scope verification." Bordered with GPT purple
   (border-color: var(--gpt)).
3. **"⏸ Pause and observe — what that means"**: explanation of the
   no-op alternative + revert instructions.
4. **"Snapshot status & provenance"**: prepared for / as of / expires
   after / after this action / prepared by / last repo action /
   snapshot basis / source turn note / coordinator trigger (all in a
   single lifecycle-grid, not the previous 2-card stack).
5. **"Who's who right now"**: roles table (Designer / Verifier /
   Coordinator / Approver / Repo / Diversity).
6. **"What changed in this redesign"**: 9-bullet list documenting the
   priority-recommendation changes vs the previous dashboard.
7. **"Technical packet"** and **"No-touch list"**: same content patterns
   as prior dashboards but updated for E6-DASH-001 scope.

### CSS/structural changes

- New `--gpt` and `--gpt-soft` color variables for the GPT action tier
  (purple).
- New `--muted-2` for further-muted secondary text.
- New `.action`, `.action.primary`, `.action.gpt`, `.action.tertiary`
  button classes with consistent vertical-flex layout (icon + label +
  hint).
- New `.role-flow` + `.role-flow .step` + `.role-flow .step.done` +
  `.role-flow .step.current` + `.role-flow .step.pending` +
  `.role-flow .arrow` classes for the role visualization.
- New `.payload-label` for the "Paste this to X" labels in collapsed
  payload panels.
- New `details[data-priority="action"]` and `details[data-priority="gpt"]`
  selectors to color-code the payload panels.
- New `.copy-mini` class (not actually used in this rewrite, but
  retained in case Codex's verification turn wants a small inline copy
  button anywhere).
- Custom `summary::after` chevron with rotation animation on
  `details[open]` for clearer expand/collapse feedback.
- Removed old `.facts`, `.fact`, `.snapshot-stack`, `.lifecycle`,
  `.copy-head`, `.copy-title`, `.alt-note`, `.secondary` classes (no
  longer used).

### Script change

The copy button click handler now auto-expands any `<details>` ancestor
before calling `navigator.clipboard.writeText(target.innerText)`. This
preserves the "only visible text" constraint (text becomes visible at the
moment of copy) while making UX seamless (user clicks once; collapsed
panel opens; text copies). Button label flips to "Copied to clipboard ✓"
for 1.5 seconds.

### Audience separation (the structural fix)

The prior dashboard mixed audiences: instructions for Sami and
instructions for the receiving agent appeared side-by-side. The new
dashboard separates them:
- **Sami sees**: action buttons (what to do, with whom), role flow
  (where am I), one-sentence why (why this), snapshot status (when
  does this expire), source-of-truth guardrail.
- **Receiving agent sees**: full payload in the collapsed `<details>`,
  labeled "Paste this to [Codex / GPT]" so Sami can tell that the
  payload is for the agent, not for him to read.

The two audiences are now visually and structurally separate. Sami can
act in <10 seconds without reading any payload text.

## Verification

Pre-edit state (post-E6-B push at `dbb9172`):
- `git status --short --untracked-files=all`: clean.

Post-edit working tree:
- `M .agent-handoff/COLLAB.md`
- `M .agent-handoff/DASHBOARD.html`
- `M .agent-handoff/DASHBOARD.md`
- `?? .agent-handoff/turns/E6-DASH-001-claude-design-human-control-tower-redesign.md`

Self-contained HTML verification:
- `grep -nE 'src=|href=|http://|https://|fetch\(|XMLHttpRequest|WebSocket|
  EventSource|localStorage|sessionStorage|indexedDB|cookie|navigator\.'
  .agent-handoff/DASHBOARD.html`: returns exactly one match — the
  legitimate `navigator.clipboard.writeText(target.innerText)` clipboard
  call in the inline script.
- 1 inline `<script>`, 1 inline `<style>`, 0 `<link>` tags.

Copy script safety: auto-expands closed `<details>` ancestors before
copy, so text becomes visible at the moment of copy. Preserves "copy
buttons may only copy visible text" constraint.

alert-state.sh:
- File unchanged (size 6519 bytes, mode `-rw-r--r--@`).
- Will be run by next verification step (Codex's E6-DASH-001 verification
  turn) per its existing script-run discipline; this Claude design turn
  did not authorize script execution, consistent with prior design-only
  turns.

No-touch surfaces verified:
- `git diff --name-only HEAD -- .agent-handoff/PROTOCOL.md
  .agent-handoff/tools/alert-state.sh kit/v1 README.md AGENTS.md CLAUDE.md
  docs/ .mcp.json`: empty diff.
- `.agent-handoff/advisor-notes/`, `.agent-handoff/reflections/`,
  `.agent-handoff/improvements/`: all ABSENT (not created).
- Pilot repo (`open-mic-colorado-agent-pilot`): clean, HEAD unchanged at
  `655e75bc`.

No new files in: `.mcp.json`, Notion-related, NanoClaw, CommonGround,
plugin/config, automation, cron/timer/webhook/launch-agent paths.

Not run / not done:
- No `alert-state.sh` execution (consistent with design-turn scope).
- No browser verification (Chrome MCP `file://` upgrade issue persists
  from prior dashboard critiques; static analysis substitutes).
- No automation, model calls, OpenAI API setup, NanoClaw, CommonGround,
  MCP/plugin/bridge, Notion, cron/timer/webhook/launch agent/global
  config, staging, commit, push, branch, or PR.

## Open Questions for the Other Agent

For Codex (verifier):
- Confirm the 4-file scope was honored.
- Confirm self-contained HTML check passes.
- Confirm copy buttons can only access visible text (validate the
  auto-expand mechanism preserves this).
- Confirm no no-touch surface was edited.
- Confirm alert-state.sh + script-tree-discipline holds.

For Sami + GPT (judges):
- Does the redesign reduce cognitive load enough to feel like a control
  surface rather than an audit log?
- Is the "paste TO WHOM" affordance clear at first glance?
- Is the Ask-GPT path discoverable (purple button vs primary green)?
- Does the role-flow strip help orient or add noise?
- Is the agent-payload-in-collapsed-details pattern actually better
  than the agent-payload-above-the-fold pattern?
- Anything over- or under-designed?

## Blockers (must-fix before continuing)

None.

## Nits (suggested, not required)

None this turn — this is a fresh design pass, so nits are deferred to
Codex's verification critique.

## Browser Verification

- Tool used: N/A.
- URL or file path opened: N/A.
- Action: N/A.
- Visible outcome: N/A.
- Console/network issues: N/A.

Chrome MCP `file://` upgrade issue persists from prior dashboard
critiques. Static analysis (grep for external APIs, manual read of all
~390 HTML lines, parallel check of CSS/JS/link counts) is the substitute.

## Evidence Basis

- USER SAID: "I still find it very confusing as a human on a team of
  advanced AI agents communicating with each other relying on me for
  project decisions that are more directional and not technical
  details. I dont know where I'm supposed to paste what next and how
  GPT is invoked, etc." (Original problem statement, invoking the
  `/design-critique` skill.)
- USER SAID (subsequent turn, accepting GPT's routing): "I agree with
  this but please use your judgement and dont rely on this prompt as
  strict rules, just general advice. You are a specialist and know how
  to best work on this."
- AGENT SUMMARY: GPT-5.5 Pro's routing recommendation (full quote
  scribed in §"External Coordinator Input: GPT-5.5 Pro" above).
- FILE VERIFIED: prior DASHBOARD.html (390 lines) read in full before
  redesign.
- FILE VERIFIED: independent self-contained HTML check returns only the
  legitimate clipboard call.
- FILE VERIFIED: working tree shows exactly the 4 authorized
  E6-DASH-001 files.
- FILE VERIFIED: no-touch surfaces empty diff.
- FILE VERIFIED: pilot repo clean.
- INFERENCE: the 7 priority recommendations from Claude's
  `/design-critique` invocation are interpreted by Claude (designer
  this turn) as the structural goals; the dashboard layout, CSS
  classes, color choices, and audience-separation are Claude's design
  decisions within those goals.
- INFERENCE: the "auto-expand on copy" mechanism preserves the "only
  visible text" constraint; this is an interpretation rather than an
  observed verification. Codex's verification turn should confirm
  whether `innerText` after `details.open = true` actually returns the
  full text (it should, per spec, but worth confirming).
- UNKNOWN: how the redesign will feel in real use; can only be answered
  by Sami + GPT (per the verification sequence GPT proposed).

## Portability Findings

- Repo-local assumptions: HTML uses system fonts which fall back
  gracefully.
- Machine/local-tool assumptions:
  `navigator.clipboard.writeText` requires a secure context or `file://`
  access; designed for local `file://` use (consistent with prior
  dashboards).
- Browser/connector assumptions: Chrome MCP extension still blocks
  `file://` URLs (auto-upgrades to `https://file:///`). Manual browser
  open works; agent-driven verification does not.
- Any workaround used: independent grep-based static analysis instead
  of browser rendering (same workaround as all prior dashboard
  critiques).

## Branding Extension (same-turn addition)

After Sami reviewed the redesigned dashboard in the browser, he asked
Claude to "name it and give it some branding." Same-turn additive change
within E6-DASH-001 scope (no new turn ID needed; same 4 files):

- **Name: Polaris** (the star)
- **Tagline:** "Your fixed point in a multi-agent workflow"
- **Symbol:** ✦ (4-pointed star)
- **Color palette:** unchanged — preserves the existing mint-green accent
  (`var(--accent)` = `#0f766e`) for continuity across all dashboard
  iterations; brand star uses the accent color
- **Wordmark placement:** small header `<header class="brand">` above the
  hero section with the star symbol + "POLARIS" wordmark (letter-spacing
  0.2em for elevated/intentional feel) on the left; italic tagline on the
  right (flex-wrap for mobile)
- **Footer:** small centered `<footer class="brand-footer">` after main
  with the same star + wordmark, "for the human at the helm"
- **Page title:** updated to "Polaris ✦ Claude-Codex Control Tower"
  (browser tab clarity)
- **MD parallel:** DASHBOARD.md h1 updated to "Polaris ✦ Claude-Codex
  Control Tower" with italic tagline blockquote underneath; footer line
  at end of file

Naming rationale:
- Sami is at the helm of a multi-agent workflow that's constantly moving
  (turns, pushes, classifications, GPT routings). Polaris is the fixed
  reference point he orients by while the system around him changes.
- Short, memorable, has a built-in symbol (the star), avoids overloaded
  tech words ("hub", "console", "bridge", "tower").
- The metaphor extends: agents take bearings off the same fixed point
  (the dashboard) but each does their own navigation.

CSS additions (within the same `<style>` block; no external assets):
- `.brand`, `.brand-mark`, `.brand-star`, `.brand-name`, `.brand-tagline`
  for the header
- `.brand-footer` for the centered footer
- No new color variables (uses existing `--accent` and `--muted-2`)
- No new fonts (uses existing system font stack)
- Total added: ~50 lines of CSS + ~10 lines of HTML markup; no impact on
  self-containment (still 1 inline `<script>`, 1 inline `<style>`,
  0 `<link>` tags)

Constraint preservation:
- Still self-contained (no external fonts, icons, or images; star is a
  Unicode character)
- Still mobile-responsive (brand `flex-wrap: wrap` on narrow viewports)
- Still accessible (semantic `<header>` and `<footer>`; star marked
  `aria-hidden="true"`; brand `aria-label="Polaris"`)

## Handoff

- Next agent: **Codex** (verifier).
- Specific ask: verify file scope, self-contained HTML, no-touch
  discipline, alert-state.sh discipline. Output a Codex verification
  turn note. DO NOT judge UX usability — that's reserved for Sami +
  GPT.
- The full verification prompt is in the dashboard's "What gets pasted
  to Codex" collapsed `<details>` panel. Sami should send it to Codex
  by copying the primary action button on the dashboard (or directly
  from this turn note's text below).

Alternative routes Sami may take instead:
- Send the GPT design-feedback question (in dashboard's "What gets
  pasted to GPT" collapsed panel) to GPT-5.5 Pro for an opinion before
  Codex verifies.
- Pause-and-observe (revert via `git restore` if not happy with the
  redesign).
- Manually adjust the redesign and re-run Claude.

Hard stop after this design turn. No verification, push, or further
implementation by me. The next repo-writing turn is Codex's
verification.

Dashboard status: REFRESHED this turn (both `.agent-handoff/DASHBOARD.md`
and `.agent-handoff/DASHBOARD.html` were rewritten from scratch as the
core deliverable of this turn).
