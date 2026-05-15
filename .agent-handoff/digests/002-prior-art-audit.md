# 002 - Prior-art audit of agent-collaboration runtimes

Status: frozen snapshot
Created: 2026-05-15
Author: Claude Opus 4.7 architecture consultant (read-only audit)
Source of truth for live state: ../COLLAB.md
Intended reader: Sami, plus Codex if running an E2-005 prior-art turn

Do not treat this digest as permission to act. The active Stopgate Rule
in PROTOCOL.md applies.

## Scope

Sami authorized a deeper audit of three top candidates surfaced by GPT
5.5 Pro response 003 §A: AgentBridge, The LLM Council (one or two
implementations), and one tmux bridge. This digest is the result.

GPT 5.5 Pro's broader claim (that we are not greenfield and should pause
E2 approval pending prior-art evaluation) is the framing this audit
operates under.

## Evidence Basis

- USER SAID: Sami selected "Yes, audit AgentBridge + 1-2 LLM Council
  impls + 1 tmux bridge" via AskUserQuestion on 2026-05-15.
- FILE VERIFIED: read GitHub repo metadata and READMEs for
  raysonmeng/agent-bridge, sherifkozman/the-llm-council, am-will/
  llm-council, and bfly123/claude_codex_bridge directly via the
  GitHub API.
- AGENT SUMMARY: GPT 5.5 Pro response 003 §A lists additional
  candidates (Claude Squad, Ruflo, Codex Mate, OpenClaw, BMAD,
  SuperClaude, OpenHands, CrewAI, LangGraph) that this digest does
  not independently verify.
- INFERENCE: license signals and maturity signals (stars, last push,
  size) are taken from GitHub metadata and may not reflect actual
  project health.
- UNKNOWN: whether any of these projects work safely in Sami's local
  environment without a controlled installation; whether GPT 5.5
  Pro's "tmux-bridge-mcp" exists by that exact name (closest matches
  here are bfly123/claude_codex_bridge, michael-abdo/tmux-claude-mcp-
  server, openwong2kim/wmux); whether the licenses on each project
  are compatible with the eventual open-source release.

## What this digest is NOT

- Not an installation, not an authorization, not a recommendation to
  vendor any of these projects.
- Not exhaustive — three repos deeply read, several others noted in
  passing.
- Not an evaluation of supply-chain risk or actual code quality —
  only README, structure, and license metadata.

## Known unknowns

- Detailed security model of each candidate beyond what the README says.
- Behavior under multi-project use (especially AgentBridge's fixed ports).
- License compatibility for code reuse vs reference reuse vs
  documentation-only borrowing.
- Whether any candidate has a maintainer commitment beyond the next
  six months.

## Candidate 1: AgentBridge (raysonmeng/agent-bridge)

| Field | Value |
|---|---|
| URL | https://github.com/raysonmeng/agent-bridge |
| License | MIT |
| Language | TypeScript |
| Size | 581 KB |
| Stars | 117 |
| Last push | 2026-05-14 (yesterday) |
| Default branch | master |
| Runtime | Bun (required, Node.js insufficient) |

### Architecture

Two-process: foreground `bridge.ts` (MCP client started by Claude Code
via the AgentBridge plugin) + persistent `daemon.ts` (background
process that owns the Codex app-server proxy and bridge state). When
Claude Code closes, daemon and Codex proxy survive; Claude reconnects
automatically.

Communication: Claude Code MCP stdio → bridge.ts → control WS on
:4502 → daemon.ts → ws://127.0.0.1:4501 proxy → Codex app-server.

Data flow:
- Codex → Claude: daemon captures `agentMessage` → control WS →
  bridge → `notifications/claude/channel`.
- Claude → Codex: Claude calls the `reply` tool → bridge → control
  WS → daemon → `turn/start` injects into Codex thread.

Loop prevention: each message carries `source: "claude"` or `"codex"`;
the bridge never forwards back to origin.

### What it solves vs our needs

- ✅ Bidirectional Claude↔Codex live transport (the only one of these
  three that is actually a 1-to-1 bridge).
- ✅ MIT license, repo-local plugin install model (via Claude Code
  plugin marketplace).
- ✅ Loop prevention via source tagging.
- ⚠️ Only forwards `agentMessage` and `reply` — narrow message
  vocabulary.
- ⚠️ Fixed ports (4501, 4502) — single-project assumption; multi-repo
  operation would collide.
- ⚠️ Single Codex thread, single Claude foreground connection per
  daemon instance.
- ❌ No signed events. Messages are unsigned `agentMessage` items.
- ❌ No append-only audit trail beyond whatever Claude/Codex
  themselves persist.
- ❌ No approval gates beyond what Claude Code and Codex enforce
  individually.
- ❌ Self-described as "experimental" and "not a hardened security
  boundary."
- ⚠️ Recommends Claude handle git because Codex sandboxing blocks
  `.git` writes — this is a real ergonomic constraint that affects
  our protocol.

### Verdict

A genuine candidate for the **transport** layer if and only if we
adopt live bridging (a deferred decision per E2-001's async tier
model). Cannot replace our governance layer. Cannot solve our
provenance/approval needs.

## Candidate 2: The LLM Council (sherifkozman/the-llm-council)

| Field | Value |
|---|---|
| URL | https://github.com/sherifkozman/the-llm-council |
| License | MIT |
| Language | Python |
| Size | 1.7 MB |
| Stars | 59 |
| Last push | 2026-04-10 |
| Install | `pip install the-llm-council` |

### Architecture

Multi-model orchestration package — NOT a CLI bridge. Runs
adversarial council workflows across providers in parallel: drafter,
critic, planner modes with runtime profiles. Schema validation with
retry, secret-safe logging redaction pipeline, artifact store with
tiered summarization, eval tooling.

Supported providers: OpenAI, Anthropic, Google, Vertex, OpenRouter,
plus local CLIs (Claude Code, Codex CLI, Gemini CLI). Requires either
provider API credentials (env vars per provider) or authenticated
local CLI.

Available as an Agent Skills standard skill: `cp -r skills/council
~/.codex/skills/`.

### What it solves vs our needs

- ✅ Multi-model adversarial council pattern is exactly what our
  three-way consultations do manually.
- ✅ Schema validation with JSON retry — could enforce our turn-note
  schema mechanically.
- ✅ Secret-safe logging — directly addresses our security model §4a.
- ✅ Artifact store — could host frozen consultant responses and
  synthesis files automatically.
- ✅ Local CLI provider support — works with Claude Code and Codex
  without API keys.
- ⚠️ Requires Python and pip install — adds runtime dependency we
  currently don't have.
- ⚠️ Provider API keys (OPENROUTER_API_KEY, OPENAI_API_KEY) are an
  attack surface that needs handling.
- ❌ No signed events. No append-only auditable governance state.
- ❌ No Stopgate Rule equivalent — all model outputs are treated
  symmetrically.
- ❌ Designed as a "run and get output" tool, not a coordination
  protocol over time.

### Verdict

A genuine candidate for the **council** layer (round-3-style
consultations). Could automate the manual paste-and-file pattern we've
been using. Cannot replace our governance layer. Has interesting
overlap with our `consultants/` directory pattern but operates at
runtime rather than at git-tracked-file level.

### Sibling note

`am-will/llm-council` (7 stars, no license, 212 KB, January 2026 last
push) is much smaller and less mature. Not a serious candidate.
Multiple other LLM Council implementations exist as forks of the
Karpathy pattern (see [danielrosehill/LLM-Council-Projects](https://github.com/danielrosehill/LLM-Council-Projects)
for an index).

## Candidate 3: CCB / claude_codex_bridge (bfly123/claude_codex_bridge)

| Field | Value |
|---|---|
| URL | https://github.com/bfly123/claude_codex_bridge |
| License | "Other" (LICENSE present but not auto-classified) |
| Language | Python |
| Size | 23 MB |
| Stars | 2580 |
| Last push | 2026-05-15 (today) |
| Version | 6.1.18 |

### Architecture

Visible multi-agent CLI teams running in tmux panes. Project-local
config at `.ccb/ccb.config`, project-wide shared memory at
`.ccb/ccb_memory.md`. Layout DSL: `cmd; writer:codex,
reviewer:claude; qa:gemini(worktree)`. Per-agent API key/url/model
overrides via TOML.

Named agents discover each other and use `/ask` for direct
delegation; broadcast sync for whole-team context. Worktree isolation
optional per agent. Heartbeat-based provider job tracking with
predictable timeout behavior.

Supports Claude, Codex, Gemini, OpenCode, Droid.

### What it solves vs our needs

- ✅ Project-local install with `.ccb/` directory — matches our
  repo-local-by-default principle.
- ✅ Project-wide shared memory file — conceptually similar to our
  COLLAB.md.
- ✅ Named-agent delegation with `/ask` — overlaps with our
  inbox/outbox idea.
- ✅ Worktree isolation per agent — solves multi-coordinator workspace
  problem.
- ✅ Cross-platform (Linux, macOS, Windows native and WSL).
- ✅ 2580 stars and updated today — most actively maintained of the
  three audited.
- ⚠️ "Other" license — must inspect LICENSE file before any code
  reuse decision.
- ⚠️ tmux dependency — fine for many users, blocking for some
  Windows-native or non-tmux workflows.
- ⚠️ Visible-CLI-teams ergonomic model is different from our
  asynchronous-handoff model (intentional design choice in CCB).
- ❌ No signed events. No append-only audit trail beyond memory file.
- ❌ No Stopgate Rule equivalent.
- ❌ No cryptographic provenance.

### Verdict

The most mature and popular of the three. Solves the live-transport
problem differently from AgentBridge (visible tmux panes vs MCP
message bus). Project-local install model is the closest to our
repo-local principle. Could be a transport-and-state-substrate option
for our governance layer. License must be inspected before any code
reuse.

## Cross-cutting findings

### These three solve THREE different problems

GPT 5.5 Pro lumped them together as "transport." That's imprecise.
Reality:

| Project | Problem solved |
|---|---|
| AgentBridge | Synchronous bidirectional MCP message bus between Claude Code and Codex (1-to-1) |
| The LLM Council | Parallel model invocations with adversarial critique and synthesis (1-to-N inference) |
| CCB | Visible side-by-side multi-CLI teams with project memory and named delegation (N agents in tmux) |

We may want pieces of all three, OR we may want to keep our
file-based asynchronous protocol as the substrate and let users opt
into one of these as a transport.

### What none of them solve (our genuine differentiation)

| Our value | Found in audited candidates? |
|---|---|
| Repo-local signed event log with cryptographic provenance | No |
| Append-only auditable governance state with Ed25519 verification | No |
| Stopgate Rule with structurally enforced approval gates tied to identity | No |
| Frozen digest + separate consultant response files + synthesis pattern | No (CCB has memory file, LLM Council has artifact store, neither is the same shape) |
| "Absence of objection, prior delegation, or model consensus is not approval" rule | No |
| Trust registry with root-key bootstrap and rotation events | No |
| Quarantine recovery channel separate from the signed event flow | No |

### Compose-don't-replace architecture

The honest re-scoping is: our governance layer is orthogonal to the
transport question. We can:

1. Keep our file-based async protocol as the default substrate
   (proven in Experiment 1).
2. Layer governance (signed events, Stopgate Rule, approval ledger)
   on top.
3. Allow opt-in transport: AgentBridge for live MCP, CCB for tmux
   teams, file-based for default.
4. Allow opt-in council: The LLM Council for automated parallel
   consults, manual paste for default.

Each user picks their transport and their council; our protocol is
the governance contract under both.

### License caution

- AgentBridge: MIT — safe for code reuse with attribution.
- The LLM Council (sherifkozman): MIT — safe for code reuse with
  attribution.
- CCB (bfly123): "Other" — must inspect LICENSE file directly before
  reuse decision.
- Claude Squad (per GPT 5.5 Pro): AGPL-3.0 — viral for code reuse;
  pattern reference only.
- Ruflo (per GPT 5.5 Pro): MIT — safe for code reuse with attribution.

### Rapid evolution observation

AgentBridge: last push yesterday. CCB: last push today (version
6.1.18 — multi-major-version evolution). The LLM Council: last push
April but the Karpathy pattern has many active forks. This is a
fast-moving space; anything we build will compete with it.

Implication: the value of our project is **more in the governance
pattern than in any specific transport choice**. The transport layer
will commoditize fast. The governance layer is more durable IP.

## Recommended next bounded action

Two paths converge:

### Path A: Continue E2 design with re-scope (lighter)

Treat E2-001 through E2-004 as the **governance layer specification**
(which is what's unique anyway). Drop the §3 async tier model from
binding scope; transport becomes a deferred runtime choice. Run a
small E2-005 turn (using the Unscheduled Fix-Turn shape) that
formally re-scopes E2 and opens the transport question for
Experiment 3 evaluation.

### Path B: Run E2-005 prior-art turn first (heavier, what GPT 5.5 Pro suggested)

Have Codex write `.agent-handoff/turns/E2-005-codex-prior-art-audit.md`
that does its own deeper read of all GPT 5.5 Pro's candidates plus
this digest, then proposes a "use as-is | wrap | fork | borrow
pattern only | reject" verdict per candidate. This becomes a binding
input to whatever Experiment 3 looks like.

Path A is faster and respects the four-turn rhythm of E2 already
complete. Path B is more thorough and gives Codex its own audit
artifact independent of this consultant's read.

Either path should explicitly **not** authorize any install, vendor,
or fork action. License inspection on CCB and Claude Squad is a
separate small task for whichever path runs.

## Stopgate reminder

Per the active Stopgate Rule in PROTOCOL.md, this audit is read-only
analysis. No installs were performed, no repos were cloned into the
Claude-Codex repo, no code was vendored, no license decisions were
made, no protocol or COLLAB.md changes are proposed by this digest
itself. Sami is the only actor who can authorize next steps.
