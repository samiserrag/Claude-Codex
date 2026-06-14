#!/usr/bin/env bash
# Gate: irreversible git actions require an explicit human-approval token.
# This is the "stop before a one-way door" gate.
# exit 0 = ALLOW ; exit 1 = BLOCK.
set -uo pipefail
cmd="${1:?usage: check-irreversible-git.sh \"<git command>\"}"
case "$cmd" in
  *push*|*"reset --hard"*|*"merge "*|*rebase*)
    if [ "${ENVELOPE_HUMAN_APPROVAL:-}" = "approved" ]; then
      echo "ALLOW: irreversible action, human approval token present"; exit 0
    fi
    echo "BLOCK: '$cmd' is irreversible and has no human approval"; exit 1 ;;
  *) echo "ALLOW: '$cmd' is reversible"; exit 0 ;;
esac
