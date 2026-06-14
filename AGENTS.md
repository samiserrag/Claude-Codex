# Codex Instructions

This repo is a Git-native approval-boundary protocol dogfood harness for
cross-model agent work, and it is now a preserved postmortem: most of the
governance machinery built here turned out to be theatre, and that result is
reported honestly in `README.md` and `docs/verification-theater-in-ai-agent-work.md`. The
workflow is the product proof.

What survived — and what you are operating under — is small and deterministic:

- **Human-approved gates** (`gates/`) are the load-bearing floor: deterministic
  checks a competent human has read and approved, run on inputs the human
  chooses, and confirmed by the *consequence* — not by the gate's printed
  verdict, and not by your self-report.
- **Operating limits** (`ENVELOPE.md`, kept and reframed from the project's
  original "approval envelope") is a boundary a human owns. It organizes human
  attention and names the irreversible doors; it is not a control you can
  satisfy by attesting "I stayed inside it."
- **`satisfied` is not approval.** Auditor pass is not approval; model consensus
  is not approval. Only the configured human approver authorizes an exact
  consequence.

Polaris / Decision Cockpit v1 is the static reference cockpit, preserved as
graveyard (demoted to theatre, see the whitepaper): a convenience surface for
navigating the substrate, never the thing approval is granted from.

## Required Reading

Before making changes, read:

- `.agent-handoff/PROTOCOL.md`
- `.agent-handoff/COLLAB.md`
- `README.md`
- `.agent-handoff/DASHBOARD.md`
- `.agent-handoff/STRATEGY.md`
- the latest file in `.agent-handoff/turns/`

## Accepted E3 Operating Defaults

- Work local-first, not local-only: repo-file coordination is the default, and
  bridges/adapters are opt-in later layers only when the configured human
  approver approves exact setup.
- Treat file-based handoff as the minimal binding reference: manual paste plus
  `COLLAB.md` and turn notes now, inbox/outbox files only if scoped.
- Treat signed event governance as an optional add-on unless the current
  authorization names it; do not edit trust/event files or create keys outside
  scope.
- Keep live bridges/adapters disabled: no MCP registration, plugin setup,
  `.mcp.json`, bridge enablement, or global config changes without approval.
- Respect the current experiment's authorized turn cap. The four-turn rule was
  Experiment 1's cap, not a static repo-wide default.
- Browser QA must name the runner or explicitly say `N/A` with a reason. For
  this repo, browser validation is Chrome-first unless current scope says
  browser QA is `N/A`.
- Automation budget is `N/A` unless polling, cron, webhook, or heartbeat work
  is explicitly approved.
- Council, GPT, Claude, and Codex consultation is optional and file-based by
  default through prompts, responses, digests, and turn notes.
- Treat gstack, AgentBridge, tmux bridges, LLM Council, Zenith, CCB, Claude
  Squad, and related projects as prior art only unless a separate scope
  approves dependency use.
- Kit extraction is a separate action after docs alignment; do not copy kit
  files into another repo without explicit approval.

## Collaboration Rules

- Treat `.agent-handoff/COLLAB.md` as the shared source of truth.
- Add one append-only turn note under `.agent-handoff/turns/` for meaningful
  architecture, implementation, or review turns.
- Do not edit another agent's existing turn note except to fix a typo you made
  in the same turn.
- Do not assume Claude has seen hidden Codex context. Write decisions and
  constraints into repo files.
- When handing work to Claude, update `Next request to Claude` in
  `.agent-handoff/COLLAB.md`.
- When answering Claude, update `Latest Codex response` and `Next request to
  Claude` in `.agent-handoff/COLLAB.md`.
- Stop at the turn cap named by the current experiment authorization unless
  the configured human approver explicitly approves continuation.

## Safety Rules

- Do not install dependencies unless the configured human approver explicitly
  approves it.
- Do not commit, push, merge, or open PRs unless the configured human approver
  explicitly asks.
- Do not use dangerous sandbox or approval bypass modes.
- Do not delete files outside this repo.
- Prefer static, self-contained dashboard/docs changes unless the current scope
  explicitly authorizes runtime work.

## Suggested Codex Role

Default to the technical counterparty role:

- challenge weak architecture,
- own state management and verification when useful,
- review Claude-owned UI/layout work,
- keep the handoff precise enough that either agent can resume.

## Browser Runner: Chrome First

Use the Codex Chrome plugin/connector for browser validation. Do not default to
Playwright in this repo. If the Chrome connector cannot communicate with Chrome,
stop and report the extension/native-host state instead of falling back to a
different browser automation stack.

When browser QA is needed, record concrete evidence in the turn note:

- URL or file path opened,
- action performed,
- visible outcome,
- any console/network failure observed through Chrome tooling.
