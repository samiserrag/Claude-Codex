# GPT 5.5 Pro consultation response 003

Source: GPT 5.5 Pro
Date: 2026-05-15
In response to: Sami's request for a prior-art audit of agent-collaboration
projects, plus a follow-up on integrating GPT 5.5 Pro as a third
collaborator alongside Claude and Codex.
Status: frozen (verbatim transcription of GPT 5.5 Pro's two-part reply via
Sami)

This response covers two consultation prompts from Sami in the same
exchange. They are filed together because they share verification
context and conclusions.

---

## Part A: Prior-art audit of agent-collaboration repos

### Verification status

VERIFIED FROM: GitHub reads of AgentBridge, Codex Bridge,
tmux-bridge-mcp, Claude Squad, Ruflo, gstack, OpenClaw, Codex Mate,
BMAD, SuperClaude, OpenHands, CrewAI, LangGraph, and Codex plugin for
Claude Code

UNKNOWN: whether any gstack forks have materially added the exact
signed repo-event protocol without inspecting each fork; whether these
tools behave safely in your local setup without a controlled test

ASSUMPTIONS: you want local/open-source, low-token, privacy-first, no
paid SaaS dependency, and no installs/config edits without explicit
approval

### Headline finding

Yes. There are open-source repos close enough that we should not
proceed as if this is greenfield. Claude's gstack audit is mostly right
about gstack, but the conclusion "the thing we're building is genuinely
new" is too broad. The exact combination may still be novel, but
several repos already cover major chunks of the new pivot.

### The closest matches

#### 1. AgentBridge — closest to your Claude↔Codex bridge idea

This is the biggest find. AgentBridge is explicitly a local bridge for
bidirectional communication between Claude Code and Codex in the same
working session. It uses a Claude Code plugin/MCP foreground process,
a persistent daemon, and a Codex app-server proxy. Its README describes
Codex→Claude and Claude→Codex message paths and loop prevention via
message source tagging.

It also says it is experimental, human-in-the-loop, and not a hardened
security boundary. That matters: it may solve transport, but not your
trust/provenance/approval model.

AgentBridge's own limitations include single Codex thread, single
Claude foreground connection, fixed ports, and only forwarding
`agentMessage` items. It also recommends letting Claude handle git
because Codex sandboxing blocks `.git` writes.

License: MIT.

Practical takeaway: do not build a Claude↔Codex live bridge from
scratch until AgentBridge is evaluated. It may become the runtime
transport under your repo-local protocol.

#### 2. codex-claude-bridge — smaller but directly aligned

`codex-claude-bridge` is also directly aimed at making Claude Code and
Codex talk. It uses Claude Code Channels on Claude's side and a
blocking MCP tool on Codex's side, with a localhost web UI. It
explicitly says the smooth path is Codex→Claude→Codex and that full
symmetric push is not available because Codex cannot receive push
notifications.

It requires `--dangerously-load-development-channels`, Bun, Claude
Code, and Codex CLI, and is MIT licensed.

Practical takeaway: this is useful prior art, but AgentBridge looks
more mature and closer to a maintainable tool.

#### 3. tmux-bridge-mcp — simplest "don't reinvent" transport

`tmux-bridge-mcp` lets Claude Code, Codex, Gemini CLI, Kimi CLI, and
other MCP-compatible agents communicate through tmux panes. The README
is almost exactly your original pain point: without it, "you are the
message bus" copy-pasting between agents. It gives agents tools to
read, type, and send messages into other panes.

Its stated advantage is that you keep using Claude Code, Codex, Gemini,
etc. as-is rather than rewriting your workflow inside
LangChain/CrewAI/AutoGen.

License in `package.json`: MIT.

Practical takeaway: this may be the lowest-token, lowest-architecture
way to test cross-agent coordination. It is less elegant than
AgentBridge, but simpler and less tied to Claude Channels/Codex
app-server.

#### 4. Claude Squad — strong for parallel worktrees, weak for agent-to-agent protocol

Claude Squad manages multiple Claude Code, Codex, Gemini, Aider, and
other local agents in separate git workspaces from one terminal. It
uses tmux and git worktrees, lets you review changes before applying
them, and can run multiple tasks simultaneously.

License: AGPL-3.0, which is much more restrictive than MIT/Apache if
we copy code into a permissive project.

Practical takeaway: use as a design reference for worktree/session
management. Be cautious copying code because AGPL may force license
obligations.

#### 5. Ruflo / Claude Flow — closest to "agent swarm," but heavy

Ruflo describes itself as multi-agent orchestration for Claude Code:
swarms, memory, federated comms, plugins, hooks, daemon, and many
agents/tools. It explicitly has plugins for swarm coordination,
autopilot, loop workers, workflows, federation, cost tracking, browser
testing, security audit, prompt-injection defense, ADRs, and more.

License: MIT.

Practical takeaway: this is serious prior art for Claude-side
orchestration, but probably too broad/heavy for your "private,
low-friction, no paid SaaS, no unnecessary installs" goal. Still worth
comparing before building coordination primitives.

### Adjacent tools that solve pieces, not the exact pivot

gstack remains valuable as a workflow/skills/browser/security
reference, but Claude's audit is right that stock gstack is not mainly
a Claude↔Codex signed coordination protocol. Its MIT license lets you
copy/modify with notice.

OpenClaw is a local-first personal AI assistant/gateway with
multi-agent routing, channels, sessions, cron, tools, skills, and
sandboxing guidance. It is more of a personal assistant control plane
than a repo-local Claude↔Codex protocol.

Codex Mate is a local-first dashboard for Codex, Claude Code, OpenClaw
configs, sessions, skills, task queues, hooks, webhooks, and usage
analytics. It is Apache-2.0. It is very relevant for config/session
visibility, but its own README warns the default web UI binds to
`0.0.0.0:3737` and is unauthenticated unless configured local-only.

SuperClaude and BMAD Method are structured Claude Code workflow/agent
frameworks. SuperClaude has 30 commands, 20 agents, 7 modes, and 8 MCP
servers. BMAD is an AI-driven agile development framework with
specialized agents, workflows, and "party mode." They are more
methodology layers than transport/provenance layers.

OpenHands, CrewAI, LangGraph, and AutoGen are broader agent
frameworks/platforms. They are useful references for durable
execution, human-in-the-loop, orchestration, and multi-agent systems,
but they do not preserve your local Claude Code + Codex CLI workflow
without moving into a different framework.

### Correction to Claude's audit

Claude's gstack-specific conclusion is good:

```
Do not install gstack.
Do not vendor gstack.
Do not fork gstack first.
Borrow patterns.
```

But the broader conclusion should change to:

```
Do not build the bridge layer from scratch yet.
AgentBridge, codex-claude-bridge, tmux-bridge-mcp, Claude Squad,
and Ruflo must be evaluated as prior art before E2 architecture.
```

The thing that may still be unique is not "Claude and Codex can talk."
That exists.

The likely unique gap is:

```
Repo-local, private-by-default, signed/auditable coordination state
with explicit human approval gates layered over existing local agent tools.
```

### Should your open-source version be global or repo-local?

Use both, but split them cleanly:

```
Core protocol: repo-local by default.
Optional convenience CLI/installer: global, explicit opt-in.
```

For adoption, a global command is friendly:

```
npx claude-codex-protocol init
```

But the thing it installs should be repo-local unless the user
explicitly asks for global integration.

Recommended model:

```
Default:
- creates .agent-handoff/
- creates AGENTS.md / CLAUDE.md snippets only with approval
- no global config edits
- no telemetry
- no auto-update
- no bridge enablement

Optional:
- install Claude plugin
- install Codex MCP config
- install hooks
- install AgentBridge/tmux bridge integration
- enable browser daemon
```

That gives open-source usability without copying gstack's global-first
tradeoff.

### Recommended new plan

Before E2-001, create a new prior-art turn:

```
.agent-handoff/turns/E2-000-prior-art-runtime-selection.md
```

Goal:

```
Choose the runtime baseline before designing our own.
```

Required candidates:

```
1. AgentBridge
2. codex-claude-bridge
3. tmux-bridge-mcp
4. Claude Squad
5. Ruflo
6. gstack
7. Codex Mate
```

Decision output:

```
Use as-is | wrap | fork | borrow pattern only | reject
```

My current ranking:

```
1. AgentBridge — best candidate for Claude↔Codex live transport.
2. tmux-bridge-mcp — lowest-friction fallback transport.
3. Claude Squad — best worktree/session manager reference.
4. gstack — best skills/browser/security-pattern reference.
5. Ruflo — broad Claude swarm reference, likely too heavy.
6. Codex Mate — config/session dashboard reference.
7. codex-claude-bridge — useful smaller proof of concept.
```

### Bottom line

Yes, there are enough open-source pieces that we should pause
greenfield design.

Do not ask "how do we build this from scratch?"

Ask:

```
Can we layer our repo-local signed event log, approval gates,
and audit trail on top of AgentBridge or tmux-bridge-mcp?
```

That is the lowest-token path and the most honest pivot.

---

## Part B: GPT 5.5 Pro as third council member (trifecta question)

Sami's question: "What about having GPT5.5 PRO able to collaborate
easily too? These 3 seem like the trifecta council when building."

### Verification status

VERIFIED FROM: your filed consultant pattern and prompt context, The
LLM Council README, AgentBridge README, OpenAI Agents SDK docs

UNKNOWN: whether GPT-5.5 Pro is available to you as a programmable
API model under that exact name; whether The LLM Council works
cleanly in your repo without a controlled test

ASSUMPTIONS: by "GPT5.5 PRO" you mean this ChatGPT/GPT-5.5 Pro
consultant lane, not Codex

### Position

Yes. Claude + Codex + GPT-5.5 Pro is the real council. That is already
what produced the best signal in your experiment: Codex corrected the
architecture primitive, Claude synthesized and operationalized it, and
GPT-5.5 Pro caught process/security/schema issues. Your filed pattern
already treats the three responses plus synthesis as the useful unit.

The pivot should be:

```
Two operators + one council judge.

Claude Code = repo operator / implementation / critique
Codex = repo operator / adversarial code review / independent implementation
GPT-5.5 Pro = external architect / security-process reviewer / synthesis judge
```

Do not give all three equal repo-write authority at first. GPT-5.5 Pro
should be easy to consult, but not automatically allowed to edit
files, approve changes, or trigger work.

### Important find: The LLM Council may already solve this layer

There is an open-source project literally called The LLM Council. Its
README describes a multi-model orchestration package that runs
adversarial council workflows across OpenAI, Anthropic, Google,
Vertex, OpenRouter, and local CLIs. It supports OpenAI, Anthropic,
Gemini, Claude Code local CLI, Codex CLI, and Gemini CLI providers.
It also includes schema validation, artifact storage, secret-safe
logging, eval tooling, and skill/plugin support for Codex and Claude
Code.

That means we should not build a GPT/Claude/Codex council runner from
scratch yet. This is now a required prior-art candidate alongside
AgentBridge, tmux-bridge-mcp, gstack, Claude Squad, etc.

### Best architecture now (three lanes)

```
1. Transport lane
   AgentBridge or tmux bridge for Claude ↔ Codex operator communication.

2. Council lane
   The LLM Council or a minimal wrapper for GPT-5.5 Pro / Claude / Codex
   independent reads.

3. Governance lane
   Your unique layer: repo-local signed events, stopgates, evidence labels,
   provenance, approval ledger, and append-only audit trail.
```

AgentBridge is still the closest found transport for bidirectional
Claude Code ↔ Codex communication. It is local, uses a foreground MCP
client plus daemon, and forwards messages between Claude Code and
Codex app-server. But it explicitly says it is experimental and not a
hardened security boundary.

So the likely stack is:

```
AgentBridge or tmux-bridge-mcp = operator transport
The LLM Council = model-council runner
Your protocol = trust, provenance, approvals, auditability
```

### How GPT-5.5 Pro should collaborate

#### Level 0 — current manual path, safest

Keep doing what you are doing:

```
.agent-handoff/digests/
.agent-handoff/consultants/gpt-5.5-pro-response-NNN.md
.agent-handoff/consultants/NNN-synthesis.md
```

This is low risk and no install. The downside is copy/paste friction.

#### Level 1 — council packet generator

Add a repo-local command or prompt that creates a packet:

```
.agent-handoff/council/requests/REQ-001.md
```

Then you paste that into GPT-5.5 Pro, Claude, Codex, or The LLM
Council. Each response gets filed separately. This keeps GPT-5.5 Pro
useful even if ChatGPT itself has no local CLI bridge.

#### Level 2 — The LLM Council integration

Evaluate The LLM Council read-only. It already supports direct APIs
and local CLIs, including Claude Code and Codex CLI.

This could become the low-token way to run:

```
GPT-5.5 Pro / OpenAI model
Claude
Codex
Gemini optional
```

Then your protocol files receive the outputs.

#### Level 3 — OpenAI Agents SDK custom GPT agent

The OpenAI Agents SDK supports agents, handoffs, guardrails, sessions,
MCP tools, sandbox agents, tracing, and human-in-the-loop mechanisms.

This is a clean path if you want a programmable GPT-family council
member. But it becomes API-based, not "this exact ChatGPT tab." It
also adds API cost and implementation work.

### Key distinction (provenance shape)

GPT-5.5 Pro in ChatGPT is excellent as a human-mediated consultant.

A programmable GPT agent is usually OpenAI API / Agents SDK / The LLM
Council / Codex CLI.

Those are not the same operationally. If the response comes from a
ChatGPT tab pasted by you, the provenance is:

```
USER-PASTED GPT RESPONSE
```

If the response comes from a local runner/API call, the provenance
can be:

```
LOCAL COUNCIL RUNNER RESPONSE
model = OpenAI GPT-family model
request_hash = ...
response_hash = ...
```

That matters for the signed-event architecture.

### Recommendation

Add this to the next prior-art audit:

```
E2-000 must include The LLM Council.

Question:
Can The LLM Council provide the GPT/Claude/Codex council layer so
Claude-Codex only needs to build the repo-local governance layer?

Evaluate:
- OpenAI/GPT support
- Claude support
- Codex CLI support
- local CLI support
- artifact storage
- secret-safe logging
- schema validation
- install/runtime cost
- whether it can write outputs into .agent-handoff/consultants/
- whether it conflicts with Sami's stopgates
```

### Vote

Yes, build around the trifecta:

```
Claude Code
Codex
GPT-5.5 Pro
```

But make it council-first, not free-running-agent-first.

The likely product is not "three agents all talking all the time." It is:

```
A local-first repo protocol that can convene a Claude/Codex/GPT council
on demand, file each response separately, synthesize them, and enforce
Sami's approval gates before anything becomes action.
```

That is practical, lower token, and much safer than building a live
three-way bridge from scratch.
