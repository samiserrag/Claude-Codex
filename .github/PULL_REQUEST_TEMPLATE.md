<!-- PROPOSAL (Phase 2 envelope enforcement). This template activates the moment
     it is merged: GitHub auto-populates new PR descriptions from it. It enforces
     nothing mechanically — it is a discipline + attestation surface. See
     docs/envelope-kit-additions/enforcement-plan.md and ENVELOPE.md. -->

## Summary

<!-- What this PR does and why. One to three sentences. -->

## Replayable evidence

<!-- Paste commands and their FULL output. Do not summarize output — paste it.
     Substrate over self-report: a load-bearing claim that does not carry its
     replayable check output has zero evidential weight (ENVELOPE.md: Required
     checks). Anyone with repo access must be able to replay and get the same
     result. -->

```
# paste full output of each load-bearing check (e.g. npm test, the relevant grep)
```

## Required checks (ENVELOPE.md)

- [ ] Load-bearing claims reduce to pasted command output (substrate over self-report).
- [ ] No-touch surfaces are unchanged (the seven `* 2.md` duplicate-noise files; and
      any path the current scope marked no-touch).
- [ ] Stale-claim greps return zero.

## Escalation (ENVELOPE.md)

- [ ] Anything irreversible or high-blast got Sami's exact, named approval before it
      happened — commit/push/branch/PR/merge/release; public wording or external send;
      write outside this repo; change to `.claude/settings`, a hook, CODEOWNERS, branch
      protection, `.mcp.json`, a plugin, or global config; automation/cron/webhook; or
      dependency install. (Check, or mark N/A in Summary if none applied.)

## Attestation

- [ ] I attest the envelope was followed (process — **NOT** that the contents are
      correct). The Required checks above and Sami's 1-in-10 sampling establish
      correctness, not this checkbox.

## Envelope impact

- [ ] No envelope impact — within the current envelope.
- [ ] Envelope revision proposed — `ENVELOPE.md` changes only via a PR that references a
      postmortem. Link it here: `docs/envelope-kit-additions/postmortem-YYYY-MM-DD-slug.md`
