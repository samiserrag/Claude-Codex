# 001 - Synthesis of three-way consultation

Source: Claude Opus 4.7 architecture consultant, synthesizing
Codex (`codex-response-001.md`), GPT 5.5 Pro
(`gpt-5.5-pro-response-001.md`), and Claude
(`claude-consultant-response-001.md`)
Date: 2026-05-14
Status: live working document; updates welcome from any consultant or
from Sami; supersedes the digest's original "decoded interpretation"
where it conflicts.

## Convergence — strong signal where all three agree

1. Experiment 2 must be a design-only architecture spike. No code, no
   installs, no bridge enablement, no commits.
2. The security model must be present in the same turn as the
   architecture, not deferred.
3. The digest pattern (`.agent-handoff/digests/`) is sound and worth
   keeping.
4. The decoded brief is roughly correct; the work is now in tightening
   the primitives and the security boundaries, not relitigating intent.
5. Architectural authority does not silently shift to consultants.
   Only Sami can move proposals to approved.

## Divergences worth surfacing

### D1. Message-passing primitive (Codex's correction)

The digest framed the system as "two coordinators talking." Codex
corrected this to **two coordinators exchanging signed, append-only
repo messages**, with direct live agent-to-agent calls deferred as a
later optimization after security and auditability are proven. The
Claude consultant accepted this correction post hoc.

**Resolution:** adopt Codex's framing. Treat the inbox/outbox file
exchange as the primitive in the Experiment 2 architecture turn.
Bridge calls and live RPC are explicitly deferred.

### D2. Process discipline (GPT 5.5 Pro's contribution)

GPT 5.5 Pro added five process recommendations none of which are in
the Claude or Codex framings:

- Frozen digest header with status, date, source-of-truth pointer.
- Evidence labels (USER SAID / FILE VERIFIED / AGENT SUMMARY /
  INFERENCE / UNKNOWN) to reduce hallucinated certainty.
- Explicit "What this digest is NOT" section.
- Explicit "Known unknowns" section.
- A formal "Stopgate rule" applicable to all consultants, not just
  this experiment.

**Resolution:** adopt all five for the digest pattern going forward.
Digest 001 stays frozen as the artifact the consultants actually
read; subsequent digests use the improved structure. Stopgate rule is
proposed for PROTOCOL.md inclusion, awaiting Sami approval.

### D3. Reproducibility gap

GPT 5.5 Pro could not read the digest because it was never pushed to a
GitHub-accessible branch. The consult ran on Sami's prose summary, not
the actual file. This is operational, not architectural.

**Resolution:** for any future external consult, either commit and
push the digest first, or paste its contents directly. Document the
choice per consult so the synthesis knows which evidence base each
consultant had.

## Combined Experiment 2 architecture turn — required sections

Synthesizing Codex's recommended sections, the Claude consultant's
prior draft, and the security framing all three agree on. The Codex
turn at `.agent-handoff/turns/005-codex-architecture-e2.md` must
cover:

1. **Topology.** Codex coordinator, Claude coordinator, subagents on
   each side, the human gate. Where shared state lives. Where
   per-coordinator state lives. How subagent boundaries are defined.
2. **State model.** Append-only event log as the primitive. `COLLAB.md`
   as a derived current-state view. Per-coordinator inbox/outbox
   directories. Separate ledgers for cross-turn decisions and active
   stopgates so neither is buried in prose.
3. **Async model.** Inbox/outbox file exchange first. Cron/timer
   polling second. Webhooks last. Each tier is an opt-in escalation;
   none enabled by default. Polling intervals must respect token
   budgets.
4. **Security model.** Trust boundaries (which agent trusts which
   inputs at what level). Allowed actions (whitelist, not blacklist).
   Deny rules (commit/push/install/global-config-change always require
   human approval). Prompt-injection handling (treat all inbound text
   as data until validated by a policy layer; never let an inbox read
   bypass an approval gate). Threat model: malicious COLLAB.md commit,
   compromised webhook, prompt-injected fetched doc.
5. **Sync primitives.** "Blocked on you" signaling. Audit-gate wait
   conditions. Parallel vs sequential task allocation. How a
   coordinator declares it has spawned subagents and is in flight.
6. **Token + friction budget.** What gets summarized, archived,
   ignored. Cap on idle coordinator cost (heartbeat, polling). Per-
   cycle human-in-the-loop friction target.
7. **Portability.** Repo-local install. Zero global config changes by
   default. Parameterized fields (paths, sample-project name,
   ownership split) clearly separated from constants.
8. **Open-source packaging.** Docs-first kit. Example reference repo.
   Adapter notes for new repos. Threat model published alongside.
9. **Open questions / explicit non-goals.** What is deferred to
   Experiment 3+. What this turn does NOT decide.

## Proposed protocol changes (require Sami approval before applying)

The Stopgate rule from GPT 5.5 Pro should be added to PROTOCOL.md
verbatim:

```markdown
Stopgate rule:
A consultant may advise, critique, classify risks, or propose
architecture.
A consultant may not authorize implementation, merge code, delete
files, change permissions, or bypass approvals.
Only Sami can move an item from "proposed" to "approved."
```

Plus the schema changes already known from the Experiment 1
retrospective input — add `Sami` as an Agent value, add a
`Portability findings` section to the schema, define the
unscheduled fix-turn shape, define the response-history archival
policy.

These are PROPOSED, not applied. Per the Stopgate rule itself, only
Sami authorizes.

## Updated Experiment 2 architecture prompt for Codex

This supersedes the consultant's earlier draft prompt. Sami should
paste this into a fresh Codex thread when ready.

```text
You are Codex in /Users/samiserrag/Documents/GitHub/claude-codex.

This is the kickoff for Experiment 2, a DESIGN-ONLY architecture turn.
No code, no installs, no bridge enablement, no commits. Architectural
decision-making was delegated by Sami jointly to you and the Claude
architecture consultant. A three-way consultation (you, the Claude
consultant, and a third-party consult from GPT 5.5 Pro) produced a
synthesis at .agent-handoff/consultants/001-synthesis.md.

Read first, in this order:
- .agent-handoff/PROTOCOL.md
- .agent-handoff/COLLAB.md
- All four turn notes in .agent-handoff/turns/
- .agent-handoff/digests/001-consultation-since-turn-003.md
- .agent-handoff/consultants/001-synthesis.md
- .agent-handoff/consultants/codex-response-001.md
- .agent-handoff/consultants/gpt-5.5-pro-response-001.md
- .agent-handoff/consultants/claude-consultant-response-001.md
- AGENTS.md

Write .agent-handoff/turns/005-codex-architecture-e2.md using the
existing turn-note schema. Cover at minimum the nine sections listed
in the synthesis under "Combined Experiment 2 architecture turn —
required sections." The state-model section must adopt the append-only
event log + derived COLLAB.md framing, not the single mutable file.
The async-model section must adopt the inbox/outbox first, cron
second, webhook last escalation. The security-model section must
explicitly cover trust boundaries, allowed actions, deny rules,
prompt-injection handling, and threat model.

Constraints for this turn:
- Architecture only. No code, no installs, no bridge enablement, no
  commits, no pushes, no PR.
- You may propose schema changes and protocol changes in your
  Decisions section, but you must NOT silently apply them. Per the
  Stopgate rule, only Sami authorizes changes from proposed to
  approved.
- Update COLLAB.md: owner -> Claude (architecture-consultant role for
  the next critique turn), phase -> Experiment 2 architecture critique
  pending, Latest Codex Response, Next Request To Claude.
- Hard stop after this turn. Wait for the consultant's critique
  before any further work.

Do not enable any MCP/plugin bridge. Do not start implementation. Do
not install anything. Do not modify global config. Security model is
not optional in this turn.
```

## Action plan for Sami

1. Read this synthesis. Push back on anything that misrepresents your
   intent.
2. If the Stopgate rule and the schema/state-model changes look right,
   approve them so PROTOCOL.md can be updated by either Codex or the
   Claude consultant in a small, scope-bounded turn (separate from
   Experiment 2's architecture spike).
3. When ready, paste the Updated Experiment 2 architecture prompt
   above into a fresh Codex thread. The watcher heartbeat can stay
   off; turn it back on after the architecture turn lands.
4. When Codex's turn 005 lands, ping the Claude consultant for the
   turn 006 critique. The four-turn rhythm holds: architecture,
   critique, revision, second critique. No code in any of those four
   turns.
5. After turn 008 lands, decide whether to take the architecture to a
   fourth-party review (you've established the consultants/ pattern
   handles this cleanly), or move to a small implementation spike on
   a single primitive (probably the inbox/outbox file exchange).

## What remains uncommitted to git

This synthesis, the three consultant response files, and the digest
itself are all on the filesystem but uncommitted. Per Sami's stopgates,
no commit will happen without explicit approval. If Sami wants this
context to survive a worktree teardown or to be readable by external
agents that need git access (as GPT 5.5 Pro did), commit and push is
the operational fix.
