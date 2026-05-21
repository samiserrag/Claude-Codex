# E5-N - Codex CommonGround Feasibility Review

## Agent
Codex

## Phase
review

## Files touched this turn
- `.agent-handoff/turns/E5-N-codex-commonground-feasibility-review.md` (created)
- `.agent-handoff/COLLAB.md` (edited; handoff update only)

## Decisions (binding)
- E5-M is accepted as a successful kit-only reflection proposal template/path
  implementation.
- E5-N is read-only feasibility review plus handoff-file output only.
- CommonGround is treated as prior art / possible future substrate only.
- No CommonGround install, clone, local service, Postgres setup, adapter,
  prototype, repo migration, protocol edit, template edit, dashboard edit,
  reflection path edit, kit edit, automation, notification/wake, bridge,
  MCP/plugin, Hermes, Claude Dreams, timer, cron, webhook, global config,
  staging, commit, push, branch, or PR occurred.

## 1. What Was Actually Verified

Local harness context read:
- `.agent-handoff/PROTOCOL.md`
- `.agent-handoff/COLLAB.md`
- `.agent-handoff/turns/E5-M-codex-reflection-template-implementation.md`
- `.agent-handoff/turns/E5-M-claude-critique-reflection-template-implementation.md`
- `kit/v1/README.md`
- `kit/v1/.agent-handoff/prompts/reflection-proposal-template.md`
- `kit/v1/.agent-handoff/DASHBOARD.md.template`

CommonGround sources checked read-only:
- User-provided URL:
  `https://ii.inc/web/blog/post/cgk-preview?ref=ghost.ii.inc`
- Intelligent Internet blog post:
  `https://ii.inc/web/blog/post/common-ground`
- GitHub repo:
  `https://github.com/Intelligent-Internet/CommonGround`
- GitHub license:
  `https://github.com/Intelligent-Internet/CommonGround/blob/main/LICENSE`
- GitHub releases page:
  `https://github.com/Intelligent-Internet/CommonGround/releases`
- Raw GitHub README:
  `https://raw.githubusercontent.com/Intelligent-Internet/CommonGround/main/README.md`

Verified:
- CommonGround is open source under Apache 2.0.
- The GitHub-rendered README describes "CommonGround Kernel" as a durable
  public work substrate with Agent identity, Turn lifecycle, Turn-owned public
  semantics, claim fencing, causal lineage, ledger/feed, and pull-first
  inspection.
- The GitHub-rendered README also says the v3r1 preview uses PostgreSQL,
  Python `>=3.13`, `uv`, local service commands, and an API prefix `/v3r1`.
- The GitHub-rendered README says v3r1 is an active preview API and not a
  long-term compatibility promise.
- The II blog describes Common Ground as open, collaborative, observable
  human-AI collaboration with local run storage and multi-view observability.
- The raw GitHub README and releases page currently present a different
  CommonGround Core / V1R4 line with NATS, Postgres/CardBox, Docker Compose,
  and a security warning that local APIs/NATS are unauthenticated and include
  arbitrary command execution capabilities. The release page identifies V1R4 as
  final for the v1 line and says some topics are deferred to v2.

## 2. Verification Gaps

- The exact `cgk-preview` blog URL did not yield a clean readable page in this
  session; I used the accessible Common Ground blog, GitHub rendered README,
  raw README, release page, and license instead.
- The CommonGround public surfaces were inconsistent:
  - GitHub-rendered README surfaced "CommonGround Kernel v3r1 preview".
  - Raw README surfaced "Common Ground Core" / V1R4 language.
  - Releases page surfaced `v1r4-hotfix` / V1R4 as latest visible release in
    the fetched page.
- I did not install CommonGround, run Postgres, start Docker/NATS, run a local
  service, inspect package internals by clone, or test APIs.
- I did not verify whether CommonGround has a schema field specifically named
  "exact approval text".
- I did not verify real Claude + Codex/GPT + Gemini workers sharing one
  workspace under CommonGround.

This inconsistency is not a minor documentation nit. It is the headline risk:
before adopting CommonGround as substrate, we would need to pin exactly which
line, API, docs, and release artifact we are evaluating.

## 3. CommonGround Capability Mapping Against Our Harness

| Harness artifact / rule | CommonGround fit | Notes |
| --- | --- | --- |
| `COLLAB.md` current shared state | Partial fit | Can likely map to Turn-owned public semantics or project state, but CommonGround does not appear to make Git repo files authoritative by default. |
| Append-only turn notes | Strong conceptual fit | Turn lifecycle, work records, causal lineage, and retained public records align closely. |
| `DASHBOARD.md` operational view | Partial fit | CommonGround has ledger/feed/inspection and observability ideas, but our dashboard is a human-readable Git file with COLLAB authority. |
| Artifact visibility | Strong fit as record metadata | Artifact references are explicitly named in the rendered README; our visibility states would need a schema convention. |
| Human Decision Packet | Partial fit | Humans as participants fit, but the exact HDP vocabulary is ours and would need a custom record shape. |
| Technical Review Packet | Partial fit | Could be represented as a work record / child Turn / observation, but status vocabulary is ours. |
| Stopgate Rule | Partial fit | Claim fencing/lifecycle helps coordination, but "do not proceed without exact approval" remains a higher-level policy we must encode. |
| Exact approval text | Not verified first-class | Must be layered explicitly unless a CommonGround schema supports it. |
| Append-only history | Strong fit | Ledger/feed and public work records are aligned. |
| Proposal-only reflection | Partial fit | CommonGround can likely store proposals; our anti-self-modification rule must remain a policy layer. |

Bottom line: CommonGround maps well to durable work records, turn identity,
claim/lifecycle, and audit. It does not appear to replace our human approval
semantics without a custom governance layer.

## 4. Preview/API Churn And Exit-Cost Risk

Headline risk: API churn / source-of-truth churn is currently too high to make
CommonGround the primary coordination substrate.

Evidence:
- Rendered README says v3r1 is preview and not a long-term compatibility
  promise.
- Raw README and releases page surfaced V1R4 / v1 language, not the same v3r1
  story.
- Raw README includes heavier infrastructure: Postgres, NATS, Docker Compose,
  API, PMO, workers, and optional tools.
- Raw README includes a preview-mode security warning about unauthenticated
  endpoints and arbitrary command execution if exposed.

Professional/demo risk:
- If we build against the wrong line, we may burn time porting immediately.
- If we make it primary, every future handoff depends on a service plus
  database state rather than plain Git files.
- If API semantics shift, our approval history and demonstration story become
  harder to explain.

This does not make CommonGround bad. It means it is prior art or optional side
index material until a pinned release line and API horizon are established.

## 5. Source-Of-Truth Analysis: Git Authoritative vs Ledger Authoritative

Our current harness is Git-authoritative:
- `COLLAB.md` holds current state.
- Turn notes are append-only durable record.
- Approval text and no-touch scopes are visible in reviewed Markdown.
- Commits make artifacts visible to Claude/web-GPT.

CommonGround appears ledger-authoritative when running:
- Rendered README says durable truth is PostgreSQL/CardBox and the kernel
  preserves public work records.
- Raw README describes Postgres as authoritative state/source of truth and NATS
  as doorbell.

Recommended stance:
- Do not let CommonGround replace Git authority yet.
- If tested, CommonGround should be a derived side index of Git artifacts.
- The first safe adapter is one-way only:
  `.agent-handoff/turns/*.md` -> CommonGround work-memory records.
- No writes back to repo files.
- No approval creation.
- No state mutation.
- No automation.

If CommonGround cannot preserve Git files as the primary approval artifacts,
then it should not replace the harness for this project.

## 6. Cross-Vendor Model Support Analysis

CommonGround conceptually supports cross-vendor participation:
- Rendered README describes Agent as a stable logical executor backed by an
  LLM, human, service, script, external runtime, organization process, or
  hybrid system.
- Rendered README describes BYOA work-memory reporting and conversation-worker
  integration paths.
- Raw README mentions Gemini by default and environment switches for OpenAI /
  Kimi-style provider use.

But I did not verify native same-workspace semantics for Claude + Codex/GPT +
Gemini specifically.

Assessment:
- Cross-vendor model support is plausible at the "external workers can report
  work" layer.
- It is not yet verified at our required governance layer: exact approval text,
  artifact visibility, no-touch scope, and model-specific critique/build roles.
- We would still need a small adapter/profile convention for each worker type.

## 7. Decision-Throughput vs Coordination-Throughput Analysis

CommonGround probably improves coordination throughput:
- durable turn records
- claims / leases / heartbeat / lifecycle
- causal lineage
- pull-first inspection
- public records
- worker lifecycle

CommonGround does not automatically improve Sami's decision throughput:
- Sami still has to decide approvals, risk tolerance, priority, and scope.
- Unless there is a UI/notification layer that surfaces "decision needed" and
  exact approval text cleanly, the bottleneck remains human decision load.
- It may reduce context reconstruction time, but not the number of decisions.

Our harness is already optimized for decision quality:
- Human Decision Packets
- exact approval text
- no-touch lists
- hard stops
- artifact visibility

So CommonGround helps most if it reduces relay/recovery overhead without
weakening Git-visible approval semantics.

## 8. Smallest Possible Adapter Options

Decision menu:

- A) Keep file-only harness + tiny alert-only watcher.
  - Low risk. Preserves Git authority. Helps relay pain without new kernel.
- B) CommonGround one-way mirror prototype, audit-only.
  - Mirror pushed `.agent-handoff/turns/*.md` into CommonGround work records.
  - No repo writes. No approvals. No automation. No wake loops.
  - Requires pinned CommonGround line and install approval later.
- C) Hybrid: file watcher + optional CommonGround side index.
  - File watcher remains the immediate notification path.
  - CommonGround is optional audit/search substrate.
- D1) Tiny external alerter: zsh/tmux/OS notification only.
  - Lowest infrastructure. Alerts when repo state changes or a handoff file
    names a next actor. No model calls.
- D2) Read-only MCP exposing repo state to a triage model.
  - More powerful, but moves toward MCP and model-calling surfaces that are
    currently out of scope.
- D3) Defer notification/wake until manual relay is painful enough again.
  - Zero new infra. Accepts current copy/paste cost.
- E) Pivot/defer.
  - Stop harness expansion while doing a deeper CommonGround source audit.

Smallest useful CommonGround adapter, if ever approved:
- one-way mirror from committed `.agent-handoff/turns/*.md` to CommonGround
  records;
- include artifact path, commit SHA, next actor, human attention state, and
  approval text if present;
- no writes back;
- no approvals;
- no model calls;
- no notifications;
- no lifecycle claims controlling repo work.

## 9. Kill Criterion / Stop-Building Criterion

Concrete kill criterion for continuing this harness as the primary substrate:

If a pinned CommonGround release line satisfies all of these, stop building
kernel-like harness layers and evaluate porting:
- exact approval text is a first-class or reliably schema-enforced field;
- repo files can remain authoritative Git-versioned approval artifacts;
- CommonGround can act as a side index without becoming source of truth;
- API stability horizon is explicit enough for demo/professional use;
- cross-vendor workers can report compatible Turns without binding us to one
  model/runtime;
- local setup does not require exposing unauthenticated RCE-capable services;
- export path exists from CommonGround records back to plain Markdown/JSON.

If any of those fail, continue the file-first harness and use CommonGround only
as prior art.

## 10. Recommendation And Next Safe Action

Recommendation:

Do not pivot to CommonGround now. Do not build a CommonGround adapter yet.
Treat CommonGround as important prior art and a possible future side index, not
as the primary substrate.

Pushback on GPT:
- "CommonGround is open/free" is not enough. The operating cost includes a
  service, database, version ambiguity, and security posture.
- "Use CommonGround instead of continuing here" is premature. Our harness solves
  approval governance and Git-visible source-of-truth in ways CommonGround does
  not yet visibly provide.
- GPT was right that we should avoid reinventing claim/lease/heartbeat/ledger
  infrastructure. That means pausing kernel-like work, not replacing the harness
  immediately.

Preferred next path:
- For immediate relay pain, choose D1: tiny external alerter, zsh/tmux/OS
  notification only, no model calls, no repo writes, no CommonGround.
- Before any CommonGround prototype, run a deeper source-pinning review that
  reconciles v3r1 vs V1R4/CGC documentation and selects one exact version.
- If CommonGround is later tested, start with B: one-way mirror prototype,
  audit-only, after explicit install/service approval.

Next safe action after E5-N:
- Claude critique of E5-N.
- No notification/wake implementation, no CommonGround install, and no adapter
  prototype until Sami separately authorizes exact files, commands, and scope.

## Verification

- Pre-edit `git status --short --untracked-files=all`: clean.
- Post-edit `git status --short --untracked-files=all`: only the two
  authorized E5-N files changed or appeared:
  - `M .agent-handoff/COLLAB.md`
  - `?? .agent-handoff/turns/E5-N-codex-commonground-feasibility-review.md`
- `git diff --check`: passed.
- Only allowed E5-N files changed.
- No CommonGround install was run.
- No CommonGround service was run.
- No Postgres setup was run.
- No adapter or prototype was created.
- No protocol/template/dashboard/reflection files were modified.
- Pilot repo status: clean; no pilot files modified.
- Live Open Mic Colorado status: clean; no live repo files modified.
- No installs, automation, notification/wake, bridges, MCP/plugins, Hermes,
  Claude Dreams, timers, cron, webhooks, or global config changes occurred.
- Browser verification: N/A; no browser used.
- Tests: not run; E5-N is read-only research plus Markdown handoff output.

## Handoff
- Next agent: Claude.
- Specific ask: critique the E5-N CommonGround feasibility review, especially
  the source inconsistency finding, the Git-authoritative stance, and the D1 vs
  B/C recommendation.
