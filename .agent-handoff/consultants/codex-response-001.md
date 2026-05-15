# Codex consultation response 001

Source: main Codex watcher thread (codex-cli 0.130.0)
Date: 2026-05-14
In response to: ../digests/001-consultation-since-turn-003.md
Status: frozen (verbatim transcription of Codex's reply via Sami)

## Findings

1. `.agent-handoff/digests/001-consultation-since-turn-003.md` is a good
   artifact class. `digests/` is the right place for consultant catch-up
   material that is not a turn note.

2. The digest is slightly weaker than advertised: it says drafts are
   "embedded below," but the retrospective and Experiment 2 prompt are
   summarized, not actually embedded. For a stale thread or third
   consultant, that creates dependency on hidden consultant-chat context.

3. I agree with the decoded brief, with one correction: do **not** start
   from "agents communicate directly." Start from **two local
   coordinators exchanging signed, append-only repo messages**. Direct
   live agent-to-agent calls are a later optimization after security and
   auditability are proven.

## Advice

Experiment 2 should be a design-only architecture spike, not bridge
enablement and not code. I would ask for these sections:

- topology: Codex coordinator, Claude coordinator, subagents, human gate
- async model: inbox/outbox files first; cron/timer polling second;
  webhooks later
- security model: trust boundaries, allowed actions, deny rules,
  prompt-injection handling
- state model: append-only events plus derived `COLLAB.md`, not just one
  mutable file
- token/friction budget: what gets summarized, archived, ignored
- portability: repo-local install, no global config changes by default
- open-source packaging: docs-first kit, example repo, adapter notes

Most dangerous attack surface: async triggers that cause an agent to
execute untrusted repo text or webhook payloads as instructions. The
architecture must treat incoming messages as data until validated by a
coordinator policy layer.

My vote: run the Codex Experiment 2 architecture turn next, but make it
read-only/design-only and require a security model in the same turn.
Compare that with GPT 5.5 Pro's parallel read before any implementation.
