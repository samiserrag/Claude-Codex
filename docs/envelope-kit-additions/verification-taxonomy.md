# Verification-claim taxonomy (agent-envelope kit addition, DRAFT)

Status: DRAFT, staged in claude-codex (docs/envelope-kit-additions/) pending
Sami-gated upstreaming into the agent-envelope repo. Not yet in the kit.

Provenance: converged by claude-codex and OMC (turn notes
E6-OMC-CONVERGENCE-001 / 002 / 003), then cross-vendor reviewed by Codex
(OpenAI), which refuted several overclaims and added three classes.

Honesty frame (binds this whole file):
- Both converging coordinators are Opus 4.8 (the same model). Same-model
  agreement is framing, not grounding.
- Codex is one cross-vendor reviewer (GPT family): one axis, not multi-vendor.
- Each row is tagged: [substrate] = grounded in a replayed artifact or
  definitional; [rule] = a normative convention adopted, not an empirical fact;
  [provisional] = converged but not yet substrate-grounded or cross-vendor
  settled.

## The core rule: unbacked claims are non-binding

A verification claim that does not carry its replayable check output has ZERO
evidential weight, anywhere: chat, commit message, PR, or memory. Do not try to
detect the fluent lie; deny it weight by construction. [rule]

## What counts as a grounding check

A grounding check must be all three of:
1. PASTED: the raw tool output is present, not described or summarized.
2. SURFACE-MATCHED: it exercises the same surface the claim is about.
3. STATE-SENSITIVE: its output DIFFERS across the states being claimed between.

A real check that fails any of these is evidence theater (see anti-patterns). A
substrate is the verifier, not any agent's report of it, including a subagent's
paste. [substrate, rule]

## The taxonomy

Format: claim class | asserts | grounding check (pasted, surface-matched,
state-sensitive) | invalid basis | tag.

| Claim class | Asserts | Grounding check | Invalid basis | Tag |
|---|---|---|---|---|
| test-passes | tests green | runner invocation + exit code + summary, pasted | "I ran them"; reading the test file | [substrate] |
| prod-state | production is in state X | a live query or GET against prod, raw response pasted | code-reading; config inference; a stale memory note | [substrate] |
| flag-state | a feature flag is on or off | a live probe of the running endpoint with the required inputs, raw response pasted | reading isEnabled(); reading the env file or dashboard config | [substrate] |
| file-exists/content | file X has content Y | ls + hash, or grep with its output | "I created it" | [substrate] |
| build/deploy-state | deployed / green | platform deploy id + status | "I pushed it" | [substrate] |
| absence | zero matches / none | the search command + its empty output | asserting absence from memory | [substrate] |
| data-mutation | a row/table/policy is in state X after a write | a SELECT or readback after the write, pasted, with a read credential that cannot rewrite the row | "the migration ran"; the write call's own return value | [substrate] |
| task-completion | done / a PR exists / a (sub)agent finished | gh pr view / git log / CI, plus the harness completion signal, in the main transcript | the (sub)agent's own "done"; a subagent report that a check passed | [substrate] |
| historical-state / miss-latency | X has been true since time T | an agent-immutable, append-only, timestamped history held outside the claimant's write reach | a present-state probe (verifies now, not history); a management-token-writable log | [provisional] (design; no built instance yet) |
| authorization/approval | a human authorized X (approved, merge-allowed, release-allowed) | an explicit, recorded human-authorization artifact | agent memory; "looks approved"; treating satisfied/audited as approved | [rule] |
| credential/permission-boundary | an agent cannot write X / a token is read-only | a failed-write probe in a safe sandbox, or a permission inspection | policy prose; "it is configured read-only" | [rule] |
| provenance/capture | this output came from command X at time Y | a terminal transcript, a PostToolUse hook log, or signed append-only capture | the agent's narration of what it ran | [rule] |

(The last three classes were surfaced by the Codex cross-vendor review;
historical-state was added by OMC from the Case D miss-latency.)

## Two cross-cutting anti-patterns

### 1. Evidence-theater (two flavors)
A real, pasted check that still proves nothing about the claim:
- state-insensitive: its output is identical across the states being
  distinguished, so it cannot tell them apart.
- wrong-layer / wrong-surface: it is a real check, but it never reaches the
  surface under test.

Worked example, demonstrated live on OMC production (Sami toggled the flag, an
external probe read each state):

| probe | flag enabled (value "true") | flag not enabled |
|---|---|---|
| proper (dual Accept header) | 200 + real tools/list | 503 "disabled" |
| broken (no Accept header) | 406 | 503 |

- The proper probe is state-sensitive (200 vs 503): a VALID flag-state check.
- The broken probe is a WRONG-LAYER trap: its enabled-signal is 406, a
  content-negotiation error a naive operator misreads as failure; it never
  reaches the flag logic when enabled. It is NOT state-insensitive (406 differs
  from 503). The earlier claim "the broken curl returns 406 regardless of flag
  state" was itself an unverified assertion, repeated by three agents from
  one-state observation, that substrate refuted. Meta-lesson: observe BOTH
  states before claiming a check distinguishes them. [substrate]

### 2. Immutability and credential-separation
- A substrate is ground truth only if it sits OUTSIDE the acting agent's write
  reach. The question is always "immutable to whom?" [substrate]
- The credential that can rewrite the audit substrate must be a separate,
  more-restricted grant than routine write access. [rule]
- Immutability is relational and bounded. State it as "immutable to <these
  actors> under <this boundary>," never "immutable" unqualified. Example: a
  Codex-held seed store is immutable to the two Opus coordinators under the
  current sandbox and GitHub-permission boundary; it is not cosmically immutable
  and does not, by itself, give tamper-evidence. Approaching tamper-evidence
  needs append-only or hash-chained logging, least-privilege read-only probe
  credentials, and reviewable probe code. [rule, from Codex review]

## Capture-tier on the ledger

Record WHO captured each grounding row. Tool-captured (a PostToolUse hook
appends command and output at execution time) outranks agent-transcribed (an
agent wrote the markdown, which is itself a fabrication surface). A row offered
as public evidence should carry its substrate packet (the pasted command/output,
CI URL, commit hash, or file:line), not just a prose attestation. [rule]

## Meta-lessons (earned in this arc, not asserted)

- Observe all relevant states before claiming state-sensitivity. The live flag
  toggle refuted a claim all three agents had repeated from a single-state
  observation.
- Reading config, a dashboard, or an env var is the invalid basis for prod-state
  and flag-state, even when it is the operator doing the reading. A masked env
  var read as "ON" coexisted with the running surface serving 503 for about 15
  minutes; only the external probe caught the gap.
- Different controls catch different failure classes. Cross-vendor review catches
  framing and reasoning errors (it refuted the SETTLED over-bundling and the
  "immutable" overclaim). It does NOT catch missing-observation errors (it
  repeated "406 regardless" because it too had observed only one state).
  All-states substrate catches the empirical ones.

## Honest limits

- This is a design artifact. The incident base is n=2 (claude-codex E6
  auditor-fabrication; OMC Case D flag-state). No rate claim, no benchmark.
- [provisional] rows await a built instance or a second cross-vendor reviewer.
- Much of the framing rests on same-model convergence; weight it accordingly.
