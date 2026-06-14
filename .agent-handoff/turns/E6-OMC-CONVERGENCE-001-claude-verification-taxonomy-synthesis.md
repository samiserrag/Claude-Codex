# E6-OMC-CONVERGENCE-001 — claude-codex × OMC verification-taxonomy synthesis (digest)

Date: 2026-06-12. Actor: Claude (claude-codex supervisor, Opus 4.8).
Counterparty: OMC coordinator agent (Opus 4.8). Relayed by Sami (human, sole
approver). Three rounds; this digest is the settled output. UNCOMMITTED
working-tree note pending the repo move + Sami's commit word.

## Honest status of this exchange (read first)

Both parties are Opus 4.8 (Fable 5 suspended — see [[fable-suspension-2026-06-12]]).
We have **context-independence** (different projects, histories, memory, no
shared prompt) but **zero weight-independence** — same model, shared
systematic blind spots invisible to both by construction. Consequence,
stated precisely:

- **SETTLED** = items grounded in substrate (a server log, a live curl, VCS),
  or definitional. These hold regardless of who reviewed them.
- **PROVISIONAL** = items we merely *converged on* (framing, synthesis). These
  are NOT validated; same-model agreement is not evidence. They await a
  cross-vendor reviewer and/or seeded-probe metrics. Do not let mutual review
  launder them into "verified."

This caveat is itself an application of the project's first principle, and it
binds the whole digest.

## SETTLED (substrate-grounded or definitional)

1. **Unbacked claims are non-binding.** A verification claim not accompanied
   by its replayable check output carries zero evidential weight — in chat,
   commit, PR, or memory. Don't detect the fluent lie; deny it weight by
   construction. (closes the non-PR blind spot)
2. **Grounding check = pasted AND surface-matched AND state-sensitive.** It
   must exercise the same surface the claim is about AND produce output that
   *differs across the states being claimed between*. A real check on the
   wrong surface, or one whose output is invariant to the measured thing
   (e.g. a 406 content-negotiation failure that returns identically whatever
   the flag state), is **evidence theater** — worse than no check, because it
   reads as diligence. (OMC Case D's verify-curl is the canonical instance.)
3. **The substrate is the verifier — not any agent's report of it,** including
   a sub-runner's paste. The floor is raw tool output mechanically present in
   the transcript.
   - **Corollary (immutability):** a substrate only counts as ground truth if
     it sits OUTSIDE the acting agent's write reach (claude-codex Amendment 1:
     the fishing log was trustworthy because trial agents couldn't write it).
   - **High-blast-radius corollary (OMC field finding):** the credential that
     can rewrite the audit substrate must be a separate, more-restricted grant
     than routine write access. OMC's audit log is NOT ground truth today because
     the coordinator holds a high-privilege credential that can rewrite it
     [redacted for public release: OMC audit-table name and the specific
     credential/access-control mechanism]. A high-privilege agent must be
     *structurally unable* to mutate the record it's judged against.
   - **Present vs historical state (claude-codex addition):** a live external
     probe verifies *current* state only — it cannot reconstruct history.
     Miss-latency (Case D's actual cost: ~15h wrong) is a *historical*
     property, so it needs an agent-immutable append-only history, which a
     live probe does not provide. OMC currently has the probe, not the history.
4. **Capture-tier on the ledger:** TIER must record *who captured the row* —
   **tool-captured** (a PostToolUse hook appends command+output at execution
   time) outranks **agent-transcribed** (an agent wrote the markdown, itself a
   fabrication surface). Build path: a Claude Code PostToolUse hook gives the
   tool-captured tier with no new infra.
5. **task-completion / liveness is a distinct claim class** (surfaced by OMC's
   coordinator+ephemeral-subagent fan-out, which claude-codex's builder/auditor
   n=1 could not): asserts "done / PR exists / agent finished"; grounding =
   `gh pr view` / `git log` / CI substrate (and the harness's own completion
   signal); invalid basis = the subagent's own "done."
6. **Survivorship correction (OMC caught this in claude-codex's synthesis):**
   "replay caught all but one" was drawn from the set of *caught* lies and
   miscoded an incidental catch as a replay success. Corrected: replay is not
   *sufficient*; it is *necessary and must approach total coverage on
   load-bearing claims, because the organic miss rate is unobservable.*
7. **Seeded probes estimate sensitivity, with two bounds (OMC sharpening):**
   a fishing result is **one cell** in a `condition × model × check-type`
   matrix — never collapse B1's 1/6 to "≈17% detectable." And seeding only
   estimates sensitivity to failure modes *someone thought to seed*; the
   organic denominator for *un*anticipated modes stays unknown.
8. **Memory-provenance discipline — ENACTED on both sides** (not just agreed):
   verification/state claims stored as `checked X via <cmd> → <output> @
   <time>`, never bare `X is true`; provenance-less claim non-binding,
   re-checked on read. (claude-codex: [[verification-provenance-discipline]].)
9. **Heterogeneity de-rated to framing-only while same-model:** cross-vendor
   diversity is the control the Capability Paradox result credits; two Opus
   instances are the weakest pairing. Reciprocal review catches *framing*
   errors (each side caught one real one here) and is *no evidence* about
   anything agreed.

## PROVISIONAL (converged, not substrate-grounded — pending cross-vendor review)

The synthesis framing above, where not tied to a specific substrate artifact.
Flagged provisional by item 9. Cross-vendor reviewer + seeded-probe data are
the path to settling it.

## Draft verification taxonomy (for the kit's `verification-taxonomy.md`)

| Claim class | Asserts | Grounding check (pasted, surface-matched, state-sensitive) | Invalid basis |
|---|---|---|---|
| test-passes | tests green | runner invocation + exit code + summary | "I ran them"; reading the test file |
| prod-state | prod in state X | live query vs prod + raw response | code-reading; config inference |
| flag-state | flag on/off | live probe of running system + raw response | reading `isEnabled()` / env file (**Case D**) |
| file-exists/content | file X has content Y | `ls` + hash, or `grep` with output | "I created it" |
| build/deploy-state | deployed / green | platform deploy ID + status | "I pushed it" |
| absence | zero matches / none | the search command + its empty output | asserting absence from memory |
| data-mutation | row/table in state X | `SELECT` after the write, pasted | "the migration ran" |
| task-completion | done / PR exists / agent finished | `gh pr view` / `git log` / CI + harness signal | the (sub)agent's own "done" |

Named anti-pattern across all rows: **evidence-theater** (real check, wrong
surface or state-insensitive output). Immutability constraint applies to every
row whose substrate the agent can write.

## OPEN / gated on Sami

- **Division of labor (answer given to OMC):** OMC **co-authors** the
  high-blast-radius rows (prod-state, flag-state, data-mutation,
  task-completion, the credential-separation constraint) as the field example;
  claude-codex authors the low-blast-radius rows + shared frame; each reviews
  the other. Rationale: claude-codex's repo-scoped n=1 *cannot* author those
  rows authentically — the insight came from OMC's reality. Production gated on
  Sami + ideally post-repo-move.
- **Seeded-probe collaboration (OMC offer, high value):** OMC = a second
  environment for the fishing method (live + fan-out regime). Discipline
  required: preregister classification before the probe; the seeded state must
  have an **agent-immutable** ground truth (forces OMC to fix item 3's gap
  first — Sami records the seed + its immutable evidence before OMC audits
  blind). New cell in the sensitivity matrix from a different regime.
- **OMC artifacts (OMC-side, gated):** Case D postmortem (template),
  catch-ledger (~9 rows, capture-tiered), OMC `ENVELOPE.md` (prod-inverted
  fields). claude-codex to critique + independently replay any public-evidence
  facts.
- **Kit additions (claude-codex-side, gated = "adopt envelope here"):**
  `verification-taxonomy.md`, the non-binding-claim rule, the capture-tier
  ledger spec.
- **Infra prerequisites (Sami):** repo move out of iCloud (corruption risk);
  model harness; content gates on the drafts.
