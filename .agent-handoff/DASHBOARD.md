# Claude-Codex Control Tower

Human-facing operational view for the current handoff. This file is a view,
not the source of truth.

## Source Of Truth

- `.agent-handoff/COLLAB.md` is authoritative.
- On conflict, `COLLAB.md` wins.
- `DASHBOARD.md` and `DASHBOARD.html` do not grant approval.
- Do not infer approval from green status, silence, consensus, lack of
  objection, or "looks good" language.

## DO THIS NOW

Recommended: push E6-A (combined with Claude critique).

Why: critique passed all 20 focus areas with zero blockers — the cleanest
design turn in the E5-E6 arc. The 5-file combined push lands the GPT
Coordinator / Outcome Architect integration design + critique in one commit.
Post-push, recommended next step is E6-B (option C2: protocol coordinator/
scribe wording only) as the smallest safe implementation.

Sami needed: `yes - paste combined push authorization, or route pause-and-observe`

Next actor: `Sami push decision`

Snapshot expiry: `expires after Sami authorizes push, routes pause-and-observe, or next actor changes`

Not sure? Open Alternatives below.

Primary paste (combined push authorization):

```text
Approved:

Stage, commit, and push only these E6-A implementation + Claude critique files:
- .agent-handoff/COLLAB.md
- .agent-handoff/DASHBOARD.md
- .agent-handoff/DASHBOARD.html
- .agent-handoff/turns/E6-A-codex-gpt-coordinator-outcome-architect-design.md
- .agent-handoff/turns/E6-A-claude-critique-gpt-coordinator-outcome-architect-design.md

Do not stage or commit:
- .agent-handoff/PROTOCOL.md
- .agent-handoff/tools/alert-state.sh
- .agent-handoff/reflections/
- .agent-handoff/improvements/
- .agent-handoff/advisor-notes/
- kit/v1/
- README.md, AGENTS.md, CLAUDE.md, docs/
- product/runtime files
- live Open Mic Colorado files
- open-mic-colorado-agent-pilot files
- CommonGround / NanoClaw / Notion files
- plugin/config files / .mcp.json
- launch agents / cron / timer / webhook / MCP / plugin / bridge files
- notification scripts
- generated/local/secret files / trust/event/private-key files
- unrelated files

Before committing, show:
git status --short --untracked-files=all
git diff --check

Commit message:
E6-A: add GPT Coordinator / Outcome Architect integration design + Claude critique

After push, hard stop.
```

<details>
<summary>Alternatives</summary>

- Pause-and-observe: do nothing; let the E6-A design sit in the local working
  tree for further consideration before committing. No approval text required.
- Ask GPT-5.5 Pro for external strategy only if Sami wants a non-operational
  second opinion on push timing or on the recommended E6-B (option C2) next
  step.

</details>

<details>
<summary>Snapshot provenance</summary>

- Prepared for: Sami push decision for E6-A + Claude critique.
- As of: HEAD `9187c92` plus local E6-A implementation and Claude critique
  working tree changes.
- Expires after: Sami authorizes a push, Sami routes pause-and-observe, or
  the next actor changes.
- After this action: do not reuse this dashboard snapshot until a repo-writing
  agent refreshes `DASHBOARD.md` and `DASHBOARD.html`.
- Prepared by: Codex (E6-A design) + Claude (critique freshness refresh).
- Last repo action:
  `9187c92 E5-T-FIX-004: simplify dashboard to single recommended action`.
- Snapshot basis: HEAD `9187c92` plus local E6-A design + Claude critique
  freshness refresh.
- Source turn notes:
  `.agent-handoff/turns/E6-A-codex-gpt-coordinator-outcome-architect-design.md`
  and
  `.agent-handoff/turns/E6-A-claude-critique-gpt-coordinator-outcome-architect-design.md`.

</details>

<details>
<summary>External advisor visibility</summary>

- External advisor: GPT-5.5 Pro / OpenAI / advisor-class.
- Current need: optional; not required for this E6-A push decision.
- Last advisor input: **GPT-5.5 Pro coordinator framing scribed in E6-A
  Codex turn note Section 1** (`.agent-handoff/turns/E6-A-codex-gpt-coordinator-outcome-architect-design.md`,
  section "External Coordinator Input: GPT-5.5 Pro"). This is the FIRST
  repo-visible scribed external coordinator input in the experiment.
- Authority: external advisor output is not operational unless Sami approves
  it or a repo-writing node records it with attribution. GPT's coordinator
  framing for E6-A was scribed by Codex with Sami's accepted/rejected/
  undecided status preserved.

</details>

<details>
<summary>Details</summary>

| Field | Current value |
| --- | --- |
| Current status | E6-A + Claude critique both local-only; awaiting Sami push decision |
| Builder | Codex / OpenAI / architect-class (E6-A design author) |
| Auditor | Claude Code / Anthropic / architect-class (E6-A critique author) |
| Coordinator | GPT-5.5 Pro / OpenAI / advisor-class (E6-A coordinator framing scribed in Codex turn note Section 1) |
| Sami | Approval / priority / risk / taste |
| Diversity | strong (3-way: Anthropic + OpenAI + OpenAI) |
| Subagent delegations this turn | 0 - none |
| Advisor input | **First repo-visible scribed external coordinator input in the experiment**: GPT-5.5 Pro coordinator framing in E6-A Codex turn note Section 1 |
| Critique result | All 20 focus areas PASS with zero blockers; 3 optional nits |
| Alternative | Pause-and-observe: defer the push so the E6-A design can be re-read or revised before committing |
| Recommended next step after push | E6-B option C2 (coordinator/scribe protocol wording only, smallest safe implementation) |

</details>

<details>
<summary>Technical packet</summary>

- Latest pushed baseline before this design:
  `9187c92 E5-T-FIX-004: simplify dashboard to single recommended action`.
- E6-A is a design-only turn restoring GPT-5.5 Pro as a structural
  coordinator/outcome architect without making GPT a repo-writing node.
- Changed files (combined for recommended push - 5 files):
  - `.agent-handoff/COLLAB.md`
  - `.agent-handoff/DASHBOARD.md`
  - `.agent-handoff/DASHBOARD.html`
  - `.agent-handoff/turns/E6-A-codex-gpt-coordinator-outcome-architect-design.md`
  - `.agent-handoff/turns/E6-A-claude-critique-gpt-coordinator-outcome-architect-design.md`
- Codex's E6-A turn note: 376 lines, 12 sections (External Coordinator Input,
  Problem Statement, Role Model, Coordinator Invocation Triggers, GPT Output
  Contract, Scribing / Repo Visibility, Dashboard Coordinator Trigger,
  Multi-Turn Outcome Loop Deferral, Safety Model, Managed-Agent Comparison,
  Near-Term vs Future Implementation, E6-B/E6-C Planning Questions).
- Claude's E6-A critique turn note: comprehensive coverage of all 20 focus
  areas with PASS results and 3 optional nits.
- Required script check for this turn: not run; E6-A scope did not authorize
  script execution and the critique prompt's verification list did not
  require it. `alert-state.sh` size unchanged (6519 bytes, mode
  `-rw-r--r--@`) confirms no modification.
- E6-A and critique made NO dashboard edits during design (DASHBOARD.md/html
  were no-touch in E6-A scope; refreshed only here in critique as freshness
  handoff).
- Independent self-contained HTML check (this critique's freshness refresh):
  to be confirmed in post-edit verification.

</details>

<details>
<summary>No-touch list</summary>

No `PROTOCOL.md`, `alert-state.sh`, kit templates, root docs,
product/runtime files, pilot repo, live Open Mic Colorado,
reflections/improvements/advisor-notes paths, `.mcp.json`, Notion, NanoClaw,
CommonGround, plugin/config files, automation, model calls, MCP/plugins,
bridges, cron, timers, webhooks, launch agents, global config, staging, commit,
push, branch, or PR.

</details>

<details>
<summary>Raw state</summary>

Paste to Codex:

```text
No Codex action is needed. Codex remains hard-stopped after E6-A until Sami routes a new turn or push authorization. If E6-A is pushed, the recommended next Codex turn is E6-B implementation of option C2 (coordinator/scribe protocol wording in PROTOCOL.md + kit/v1/.agent-handoff/PROTOCOL.md.template) — but that requires separate Sami authorization with exact files and approval text.
```

Ask GPT-5.5 Pro / external advisor:

```text
GPT-5.5 Pro / OpenAI / advisor-class participated in E6-A as coordinator (framing scribed in Codex turn note Section 1). For the push decision itself, GPT is not required: critique passed all 20 focus areas with zero blockers. Optional only if Sami wants external strategy review on E6-B sequencing (C2 protocol-only vs C2+A combined with advisor-notes/ path scope).
```

Exact approval text:

```text
The combined-push authorization is the primary paste block in the DO THIS NOW section above. Pause-and-observe requires no approval text — it simply means do nothing; the local working tree remains unchanged. No approval text is active until Sami pastes the primary block or routes a new action.
```

</details>
