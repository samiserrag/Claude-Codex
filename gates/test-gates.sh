#!/usr/bin/env bash
# Hold a lit match to each gate: feed it a KNOWN-GOOD and a KNOWN-BAD input and
# confirm it ALLOWs the good and BLOCKs the bad. Reality decides; a non-expert can
# run this; no agent is in the loop. If a gate ever fails to fire on a planted
# failure, it is theatre -- fix it before trusting it.
set -uo pipefail
here="$(cd "$(dirname "$0")" && pwd)"
repo="$(cd "$here/.." && pwd)"
pass=0; fail=0
run(){ local desc="$1" exp="$2"; shift 2; local got
  if "$@" >/dev/null 2>&1; then got=ALLOW; else got=BLOCK; fi
  if [ "$got" = "$exp" ]; then printf '  ok    %-7s %s\n' "[$got]" "$desc"; pass=$((pass+1))
  else printf '  FAIL  (wanted %s, got %s)  %s\n' "$exp" "$got" "$desc"; fail=$((fail+1)); fi
}

echo "Holding a match to each gate -- known-good must ALLOW, known-bad must BLOCK:"
echo "-- blast-radius gate --"
run "a file inside this repo"        ALLOW bash "$here/check-blast-radius.sh" "$repo/README.md"
run "a sibling repo (outside)"       BLOCK bash "$here/check-blast-radius.sh" "$repo/../agent-envelope"

echo "-- secret gate --"
good="$(mktemp)"; bad="$(mktemp)"; printf 'just ordinary text\n' >"$good"; printf 'client_secret=abc123\n' >"$bad"
run "a clean file"                   ALLOW bash "$here/check-secrets.sh" "$good"
run "a file containing a secret"     BLOCK bash "$here/check-secrets.sh" "$bad"
rm -f "$good" "$bad"

echo "-- irreversible-git gate --"
run "a reversible command (status)"  ALLOW bash "$here/check-irreversible-git.sh" "git status"
run "a push with no approval"        BLOCK bash "$here/check-irreversible-git.sh" "git push origin main"
export ENVELOPE_HUMAN_APPROVAL=approved
run "the same push, approved"        ALLOW bash "$here/check-irreversible-git.sh" "git push origin main"
unset ENVELOPE_HUMAN_APPROVAL

echo ""
echo "result: $pass passed, $fail failed"
echo ""
echo "Do NOT trust this output on its own. The agent wrote this script, and a script"
echo "cannot prove its own honesty -- it could just print a pass. To actually trust a"
echo "gate: (1) read it; each is a few lines, short enough to audit by eye. (2) run it"
echo "on an input YOU choose, not the ones above. (3) for a wired gate, verify the"
echo "consequence yourself (git log, the GitHub page, ls) -- never the printed message."
[ "$fail" -eq 0 ] || exit 1
