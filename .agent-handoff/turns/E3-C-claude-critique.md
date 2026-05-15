Previous experiment terminal turn: Experiment 3 / E3-C-codex-adapter-inspection.md

# E3-C Claude consultant critique

## Agent
Claude

## Phase
critique

## Schema
Reuses the Experiment 1 turn-note schema explicitly. Includes Evidence
Basis and Portability Findings sections per the active PROTOCOL.md
additions. This is a critique-only turn over a read-only inspection.
It does not approve any adapter, install, vendor, fork, or move any
proposal to approved. Per the active Stopgate Rule, only Sami can
authorize E3-D adapter selection.

## Files touched this turn
- `.agent-handoff/turns/E3-C-claude-critique.md` (created)
- `.agent-handoff/COLLAB.md` (edited)

## Evidence Basis
- USER SAID: Sami explicitly authorized the Claude consultant E3-C
  critique on 2026-05-15 as read-only critique only.
- FILE VERIFIED: read E3-C in full from
  `.agent-handoff/turns/E3-C-codex-adapter-inspection.md`. Cross-
  referenced against `.agent-handoff/digests/002-prior-art-audit.md`
  (consultant's prior deeper audit) and
  `.agent-handoff/turns/E2-007-claude-rescope-revision.md` (binding
  reference vs exploratory adapters framing).
- AGENT SUMMARY: E3-C confirmed AGPL on CCB and Claude Squad; Apache
  on the official Codex plugin and `codex mcp-server`. Both AGPL
  candidates land "borrow pattern only"; both Apache candidates land
  "wrap" with concrete wrapper requirements per candidate.
- INFERENCE: Codex's three blockers are preconditions for E3-D
  adapter selection, not blockers to accepting E3-C as filed. E3-C
  itself is acceptable; the blockers are the right gates before any
  adapter authorization.
- UNKNOWN: I did not independently re-fetch the LICENSE files for
  any candidate. Trusting Codex's reported license findings; if Sami
  wants independent verification, that's a separate small task.

## Decisions (binding)

- E3-C is accepted as a successful read-only adapter/security
  inspection. Zero blockers stand against this critique. The three
  blockers Codex raised are correctly framed as gates for E3-D
  adapter selection, not for E3-C itself.
- The license split is endorsed: AGPL-3.0 on CCB and Claude Squad
  forces "borrow pattern only" unless Sami explicitly accepts AGPL
  obligations. Apache-2.0 on the official Codex plugin and
  `codex mcp-server` allows "wrap" candidacy with attribution and
  NOTICE handling.
- The verdict structure (use as-is / wrap / fork / borrow pattern
  only / reject) is well applied. No candidate received "use as-is"
  — that's the right call. Each "wrap" verdict comes with concrete
  wrapper requirements specific to the candidate.
- The cross-candidate finding "Direct MCP is not 'less risky' just
  because it avoids a third-party bridge" is endorsed. Direct
  `codex mcp-server` registration gives Claude a live control plane
  into Codex (filesystem, command execution, optional process
  spawning) and changes project MCP config — that's a bigger attack
  surface than most third-party bridges, not smaller.
- The clarification that the prompt's `claude mcp add ... codex
  mcp-server` example is the direct-MCP path (not the marketplace
  plugin path `openai/codex-plugin-cc`) is a useful taxonomy
  correction. Both should remain on E3-D's matrix as distinct
  options with distinct wrappers.
- Per the active Stopgate Rule, this critique does not authorize
  E3-D adapter selection or any install. Each E3-D adapter
  authorization remains its own scoped sub-experiment requiring
  Sami's explicit per-adapter approval.

## Strengths worth naming explicitly

- **Catches `--autoyes` in Claude Squad and the Stop-hook
  long-running-loop risk in the official Codex plugin.** Both are
  real safety concerns. The official plugin's Stop hook is
  particularly insidious because it auto-triggers Codex review on
  every Claude session end — that's a usage-limit drain vector and
  a feedback-loop attack surface that an unwary adapter would
  inherit.
- **Notes the broad Codex MCP API surface** (thread/turn control,
  config read/write, account login/logout, filesystem
  read/write/remove/copy/watch, command execution, experimental
  process spawning). That's an honest accounting of what wrapping
  this transport actually requires.
- **Honest portability finding about Codex's own sandbox** (network
  access to GitHub blocked; required explicit escalation). That
  observation is useful for the eventual open-source kit's
  troubleshooting docs.
- **URL verification: bfly123/claude_codex_bridge redirected to
  SeemSeam/claude_codex_bridge.** Catches that the ownership of
  the canonical CCB repo has moved. Worth tracking for any future
  adapter selection.
- **Three blockers correctly scoped to E3-D, not E3-C.** Codex
  resisted the temptation to mark its own deliverable as
  incomplete; instead it framed the open work as "must happen
  before adapter selection." Right structural call.

## Open questions for Sami
- Do you accept the AGPL-decisive license split? If so, CCB and
  Claude Squad become read-only references throughout; the kit
  doesn't depend on them.
- Codex asks: should the official plugin or direct MCP path be the
  first future enabled transport experiment? The direct-MCP path
  has broader attack surface but is the lower-level primitive; the
  official plugin is more constrained but inherits the Stop-hook
  risk. Either way, "first" should mean a tightly scoped E3-D
  sub-experiment with allow-listed methods only.
- Codex's third blocker asks for the minimum method allow-list for
  a future direct `codex mcp-server` wrapper. My recommendation:
  start with `thread.start`, `thread.continue`, `turn.start`,
  `turn.read`, `turn.cancel`, and `status.read` only. Block all
  filesystem, command execution, config, account, and process
  methods until proven necessary in a separate scoped experiment.
- Should the eventual kit publish a license matrix as a top-level
  document (e.g., `docs/adapter-licenses.md`) so future adapter
  authors don't re-open AGPL analysis?

## Blockers (must-fix before continuing)
- None for E3-C acceptance. Codex's three blockers (AGPL strategy,
  signed-event validation layer must precede any plugin/MCP setup,
  allow-list for direct MCP) are correctly framed as E3-D
  preconditions and accepted as such.

## Nits (suggested, not required)
- License pinning: AGPL applies to the current state of CCB and
  Claude Squad. If either project changes license in a future
  release, the verdict could change. A small "license observed at
  commit / date" footnote per candidate would future-proof the
  inspection.
- Stop-hook isolation: the official plugin's Stop hook concern
  deserves its own sub-bullet in any wrapper requirement list.
  Codex's Nit 2 mentions it but the wrapper-requirements section
  for Candidate 3 doesn't explicitly say "disable Stop hook by
  default." Worth tightening when E3-D scope is drafted.
- NOTICE/attribution handling: Apache-2.0 requires preserving
  NOTICE files. Any wrapper of either Apache candidate must
  include the upstream NOTICE in our distribution. Worth a
  one-line addition to the eventual E3-D adapter selection turn.
- "Wrap" verdict ambiguity: both Apache candidates received "wrap"
  but they wrap differently (the plugin sits inside Claude Code's
  plugin marketplace; the direct MCP route sits in `.mcp.json`).
  E3-D should distinguish these wrapper types explicitly.
- The CCB ownership transfer (bfly123 → SeemSeam) is mentioned but
  no analysis of WHY it transferred or whether it indicates
  maintenance/governance churn. If Sami ever wants to reconsider
  CCB despite AGPL, that's worth a sub-question.

## Browser verification
- Tool used: N/A
- URL or file path opened: N/A
- Action: N/A
- Visible outcome: N/A
- Console/network issues: N/A

Reason: critique-only turn over a read-only inspection. No app
behavior, browser surface, runtime bridge, plugin, or MCP server was
enabled.

## Portability Findings
- Repo-local assumptions: E3-C inspected without writing to repo
  state (no installs, no clones into this repo). The verdicts are
  documented in repo files only. Adapters retain their own
  install/runtime requirements per Codex's matrix.
- Machine/local-tool assumptions: each adapter's runtime
  requirements documented (Python 3.10+/tmux for CCB; tmux/gh for
  Claude Squad; Node 18.18+/Codex CLI for the plugin; Codex binary
  for direct MCP). Eventual E3-D sub-experiments must respect
  these.
- Browser/connector assumptions: none introduced.
- Any workaround used: none in this critique.

## Handoff
- Next agent: Sami
- Specific ask: decide whether to proceed to E3-D adapter selection
  scope (or defer), and decide whether to authorize the small E3-B
  housekeeping/verifier-hardening fix turn that Sami already named:
  expand `.gitignore`, add top-level verifier ok/fail with nonzero
  exit, check event filename sequence prefixes, optional
  refusal-to-overwrite test fixture. Per the active Stopgate Rule,
  no E3-D adapter authorization or installation occurs without
  Sami's explicit per-adapter approval.
