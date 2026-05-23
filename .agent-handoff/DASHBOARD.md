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

Recommended: push E6-B + E6-B-FIX-001 (combined with both Claude critiques).

Why: E6-B critique passed 16/16. FIX-001 critique passed 17/17. Together they
land the GPT coordinator role + the corrected classification mechanism that
removes Sami from the coordinator-burden role ("Sami is never the classifier").
The 9-file combined push lands the complete corrected governance in one
commit. Post-push recommended next step is **option C: pause and use the
coordinator trigger rule in real handoffs for 3-5 cycles** before any further
governance/dashboard/advisor-notes infrastructure work.

Sami needed: `yes - paste combined push authorization, or route pause-and-observe`

Next actor: `Sami push decision`

Snapshot expiry: `expires after Sami authorizes push, routes pause-and-observe, or next actor changes`

Coordinator Trigger (this snapshot): `ROUTINE — auditor freshness refresh of an already-scoped E6-B + FIX-001 critique pair`

Not sure? Open Alternatives below.

Primary paste (combined push authorization):

```text
Approved:

Stage, commit, and push only these E6-B + E6-B-FIX-001 implementation + Claude critique files:
- .agent-handoff/COLLAB.md
- .agent-handoff/PROTOCOL.md
- kit/v1/.agent-handoff/PROTOCOL.md.template
- .agent-handoff/turns/E6-B-codex-gpt-coordinator-protocol-wording.md
- .agent-handoff/turns/E6-B-claude-critique-gpt-coordinator-protocol-wording.md
- .agent-handoff/turns/E6-B-FIX-001-codex-coordinator-trigger-classification.md
- .agent-handoff/turns/E6-B-FIX-001-claude-critique-coordinator-trigger-classification.md

Plus these dashboard freshness-refresh files (modified by Claude critiques to reflect post-critique state):
- .agent-handoff/DASHBOARD.md
- .agent-handoff/DASHBOARD.html

Do not stage or commit:
- .agent-handoff/tools/alert-state.sh
- .agent-handoff/reflections/
- .agent-handoff/improvements/
- .agent-handoff/advisor-notes/
- kit/v1/README.md, kit/v1/.agent-handoff/DASHBOARD.md.template, kit/v1/.agent-handoff/prompts/, kit/v1/.agent-handoff/COLLAB.md.template
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
E6-B: codify GPT coordinator + trigger classification rules

After push, hard stop.
```

<details>
<summary>Alternatives</summary>

- Pause-and-observe: do nothing; let the combined E6-B + FIX-001 governance
  addition sit in the local working tree for further consideration before
  committing. No approval text required.
- Ask GPT-5.5 Pro for external strategy only if Sami wants a non-operational
  second opinion on push timing or on the recommended "pause and use the
  coordinator trigger rule in real handoffs" next step.

</details>

<details>
<summary>Snapshot provenance</summary>

- Prepared for: Sami push decision for E6-B + E6-B-FIX-001 + both Claude
  critiques.
- As of: HEAD `5b53d27` plus local E6-B + FIX-001 implementations and both
  Claude critiques' working tree changes.
- Expires after: Sami authorizes a push, Sami routes pause-and-observe, or
  the next actor changes.
- After this action: do not reuse this dashboard snapshot until a repo-writing
  agent refreshes `DASHBOARD.md` and `DASHBOARD.html`.
- Prepared by: Codex (E6-B + FIX-001 implementations) + Claude (both critique
  freshness refreshes).
- Last repo action:
  `5b53d27 E6-A: design GPT coordinator role`.
- Snapshot basis: HEAD `5b53d27` plus local E6-B PROTOCOL.md additions +
  E6-B-FIX-001 PROTOCOL.md additions + matching kit template mirror updates +
  both Claude critique freshness refreshes.
- Source turn notes:
  `.agent-handoff/turns/E6-B-codex-gpt-coordinator-protocol-wording.md`,
  `.agent-handoff/turns/E6-B-claude-critique-gpt-coordinator-protocol-wording.md`,
  `.agent-handoff/turns/E6-B-FIX-001-codex-coordinator-trigger-classification.md`,
  and
  `.agent-handoff/turns/E6-B-FIX-001-claude-critique-coordinator-trigger-classification.md`.
- Coordinator Trigger (this snapshot refresh, by Claude FIX-001 critique):
  ROUTINE — auditor freshness refresh of an already-scoped FIX-001 critique;
  no architecture/pivot/UX/conflict/safety/automation/tooling trigger active.

</details>

<details>
<summary>External advisor visibility</summary>

- External advisor: GPT-5.5 Pro / OpenAI / advisor-class.
- Current need: optional for the push decision itself. GPT was critical
  for E6-B-FIX-001: GPT diagnosed the Sami-as-classifier flaw in E6-B
  (responding to Sami's pushback "How will I know if it's routine???")
  and proposed the FIX-001 framing. Without GPT, the closed Claude↔Codex
  loop would have shipped E6-B with the burden gap intact (Claude's E6-B
  critique missed it).
- Last advisor input:
  - **GPT diagnosis of E6-B classifier gap** scribed in this E6-B-FIX-001
    critique turn note's "Empirical Validation" section and in COLLAB.md
    handoff context. GPT's framing: "The active repo-writing agent must
    classify the turn. If classification is unclear, the default is Ask
    GPT." Codex implemented exactly this in FIX-001.
  - **GPT original coordinator framing** scribed in
    `.agent-handoff/turns/E6-A-codex-gpt-coordinator-outcome-architect-design.md`
    Section 1 ("External Coordinator Input: GPT-5.5 Pro").
- Authority: external advisor output is not operational unless Sami approves
  it or a repo-writing node records it with attribution. This is now
  PROTOCOL.md text (§"Node Capability And Advisor Rules" + §"GPT
  Coordinator / Outcome Architect" + the new §"Coordinator Trigger
  Classification" subsection).

</details>

<details>
<summary>Details</summary>

| Field | Current value |
| --- | --- |
| Current status | E6-B + E6-B-FIX-001 + both Claude critiques all local-only; awaiting Sami push decision |
| Builder | Codex / OpenAI / architect-class (E6-B + FIX-001 implementations) |
| Auditor | Claude Code / Anthropic / architect-class (E6-B + FIX-001 critiques) |
| Coordinator | GPT-5.5 Pro / OpenAI / advisor-class — **critical for FIX-001**: GPT diagnosed the Sami-as-classifier flaw in E6-B that Claude's critique missed, and proposed the FIX-001 framing |
| Sami | Approval / priority / risk / taste (now explicitly NOT classifier per new PROTOCOL.md §"Coordinator Trigger Classification") |
| Diversity | strong (3-way governance: GPT proposed, Codex built, Claude audited, twice) |
| Subagent delegations this turn | 0 - none |
| Coordinator Trigger (last classification) | ROUTINE — Claude FIX-001 critique was auditor verification of an already-scoped fix |
| Advisor input | GPT diagnosis of E6-B classifier gap (scribed in this critique + COLLAB.md handoff) + GPT original coordinator framing (E6-A Codex turn note Section 1); both codified in PROTOCOL.md §"GPT Coordinator / Outcome Architect" + new subsection §"Coordinator Trigger Classification" |
| Critique result | E6-B critique: 16/16 PASS, 0 blockers, 3 nits. FIX-001 critique: 17/17 PASS, 0 blockers, 3 nits |
| Alternative | Pause-and-observe: defer the push so the combined E6-B + FIX-001 governance can be re-read before committing |
| Recommended next step after push | **Option C: pause and use the coordinator trigger rule in real handoffs for 3-5 cycles** before any further governance/dashboard/advisor-notes infrastructure work |

</details>

<details>
<summary>Technical packet</summary>

- Latest pushed baseline before this implementation:
  `5b53d27 E6-A: design GPT coordinator role`.
- E6-B added a `### GPT Coordinator / Outcome Architect` subsection (~52
  lines) to both live PROTOCOL.md and the kit PROTOCOL.md.template, with
  byte-identical content (E5-S mirror discipline preserved).
- E6-B-FIX-001 added a `#### Coordinator Trigger Classification` subsection
  (~38 lines) inside the GPT Coordinator section, requiring every turn
  note to include a `## Coordinator Trigger` section with State + Reason.
  3-state taxonomy (ROUTINE / NEEDS_GPT / UNCLEAR); UNCLEAR defaults to
  Ask GPT; Sami is explicitly NOT the classifier.
- Live PROTOCOL.md grew from 386 to 474 lines (+88 lines, +23% total
  across E6-B + FIX-001).
- Changed files (combined for recommended push - 9 files):
  - `.agent-handoff/COLLAB.md` (Codex E6-B + Claude E6-B critique + Codex
    FIX-001 + Claude FIX-001 critique handoff updates layered)
  - `.agent-handoff/PROTOCOL.md` (Codex E6-B + Codex FIX-001 layered;
    +88 lines)
  - `kit/v1/.agent-handoff/PROTOCOL.md.template` (Codex E6-B + Codex
    FIX-001 byte-identical mirror with live through L286)
  - `.agent-handoff/DASHBOARD.md` (Claude E6-B critique + Claude FIX-001
    critique freshness refreshes layered)
  - `.agent-handoff/DASHBOARD.html` (same)
  - `.agent-handoff/turns/E6-B-codex-gpt-coordinator-protocol-wording.md`
  - `.agent-handoff/turns/E6-B-claude-critique-gpt-coordinator-protocol-wording.md`
  - `.agent-handoff/turns/E6-B-FIX-001-codex-coordinator-trigger-classification.md`
  - `.agent-handoff/turns/E6-B-FIX-001-claude-critique-coordinator-trigger-classification.md`
- Codex's FIX-001 turn note: 149 lines. **First repo-visible use of the
  new `## Coordinator Trigger` schema** (L9-11, State: ROUTINE with
  reason). Claude's FIX-001 critique extends the validation by also
  using the schema. Two-turn dogfooding confirms the rule is
  operational.
- Required script check for these turns: not run; E6-B and FIX-001 scopes
  did not authorize script execution. `alert-state.sh` size unchanged
  (6519 bytes, mode `-rw-r--r--@`) confirms no modification across both
  fix cycles.
- **Mirror discipline verified independently after FIX-001**: `diff` of
  the full `### GPT Coordinator / Outcome Architect` section (including
  the new `#### Coordinator Trigger Classification` subsection) between
  live PROTOCOL.md and kit template returned **byte-identical content
  from L174-286** (verified twice via independent diff invocations).
- Kit/v1 was ONLY touched at `PROTOCOL.md.template` (NOT
  `kit/v1/README.md`, NOT `kit/v1/.agent-handoff/DASHBOARD.md.template`,
  NOT `kit/v1/.agent-handoff/prompts/*`, NOT
  `kit/v1/.agent-handoff/COLLAB.md.template` — all confirmed unchanged).

</details>

<details>
<summary>No-touch list</summary>

E6-B + FIX-001 authorized PROTOCOL.md edit + kit/v1/.agent-handoff/PROTOCOL.md.template
edit (the mirror); both touched as expected with byte-identical content
through L286. Otherwise no `alert-state.sh`, kit/v1/README.md,
kit/v1/.agent-handoff/DASHBOARD.md.template,
kit/v1/.agent-handoff/prompts/* templates,
kit/v1/.agent-handoff/COLLAB.md.template, root README/AGENTS/CLAUDE, docs/,
product/runtime files, pilot repo, live Open Mic Colorado,
reflections/improvements/advisor-notes paths, `.mcp.json`, Notion, NanoClaw,
CommonGround, plugin/config files, automation, model calls, OpenAI API setup,
MCP/plugins, bridges, cron, timers, webhooks, launch agents, global config,
staging, commit, push, branch, or PR (beyond Sami's separate per-push
authorization).

</details>

<details>
<summary>Raw state</summary>

Paste to Codex:

```text
No Codex action is needed. Codex remains hard-stopped after E6-B + E6-B-FIX-001 until Sami routes a new turn or push authorization. After combined push, the recommended next move is pause-and-observe (option C): use the new coordinator trigger classification rule in real handoffs for 3-5 cycles before any further governance/dashboard/advisor-notes infrastructure work. Codex's next implementation turn (if any) should wait for empirical signal from real-use observation.
```

Ask GPT-5.5 Pro / external advisor:

```text
GPT-5.5 Pro / OpenAI / advisor-class was CRITICAL for FIX-001: GPT diagnosed the Sami-as-classifier flaw in E6-B that Claude's critique missed, and proposed the FIX-001 framing. The closed Claude↔Codex loop alone would have shipped E6-B with the burden gap intact. This is the strongest empirical case for the 3-way pattern to date. For the push decision itself, GPT is not required (per the new Coordinator Trigger Classification, this is ROUTINE: already-scoped exact push with no architecture/pivot/UX/conflict trigger active). Optional only if Sami wants external strategy review on the recommended "pause and use the coordinator trigger rule" next step.
```

Exact approval text:

```text
The combined-push authorization is the primary paste block in the DO THIS NOW section above. Pause-and-observe requires no approval text — it simply means do nothing; the local working tree remains unchanged. No approval text is active until Sami pastes the primary block or routes a new action.
```

</details>
