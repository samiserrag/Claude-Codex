#!/bin/sh
set -u

# Manual, read-only handoff state summary.
# Advisory only: this script never grants approval or resolves conflicts.

SCRIPT_DIR=$(CDPATH= cd -- "$(dirname -- "$0")" && pwd) || exit 1
REPO_ROOT=$(CDPATH= cd -- "$SCRIPT_DIR/../.." && pwd) || exit 1
cd "$REPO_ROOT" || exit 1

COLLAB=".agent-handoff/COLLAB.md"
TURN_DIR=".agent-handoff/turns"
DASHBOARD=".agent-handoff/DASHBOARD.md"

if [ ! -r "$COLLAB" ]; then
  printf '%s\n' "ERROR: cannot read $COLLAB"
  exit 2
fi

LATEST_TURN=$(find "$TURN_DIR" -type f -name '*.md' -print 2>/dev/null | sort | tail -n 1)

section_excerpt() {
  file=$1
  heading=$2
  max=$3
  if [ ! -r "$file" ]; then
    return
  fi
  awk -v h="$heading" -v max="$max" '
    $0 == h { print FILENAME ":" NR ": " $0; in_section=1; count=1; next }
    in_section && /^## / { exit }
    in_section && NF {
      print FILENAME ":" NR ": " $0
      count++
      if (count >= max) exit
    }
  ' "$file"
}

signal_lines() {
  file=$1
  if [ ! -r "$file" ]; then
    return
  fi
  grep -inE 'current owner|next actor|next request to|next agent|human attention|approval required|decision needed|blocker|artifact visibility|visibility|next safe action|hard stop|local-only|pushed|critique|implementation|push' "$file" \
    | sed -n '1,14p' \
    | sed "s|^|$file:|"
}

actor_from_file() {
  file=$1
  if [ ! -r "$file" ]; then
    printf '%s\n' "unknown"
    return
  fi
  text=$(grep -inE 'current owner|next actor|next request to|next agent|current coordinator|claude next|codex next|sami next' "$file" 2>/dev/null \
    | sed -n '1,30p' \
    | tr '[:upper:]' '[:lower:]')
  case "$text" in
    *"claude next"*|*"next request to claude"*|*"next agent: claude"*|*"next actor"*"claude"*)
      printf '%s\n' "claude"
      ;;
    *"codex next"*|*"next request to codex"*|*"next agent: codex"*|*"next actor"*"codex"*)
      printf '%s\n' "codex"
      ;;
    *"sami next"*|*"next request to sami"*|*"next agent: sami"*|*"next actor"*"sami"*)
      printf '%s\n' "sami"
      ;;
    *)
      printf '%s\n' "unknown"
      ;;
  esac
}

print_event_if_match() {
  label=$1
  pattern=$2
  source_text=$3
  if printf '%s\n' "$source_text" | grep -iqE "$pattern"; then
    printf 'event: %s\n' "$label"
  fi
}

GIT_HEAD=$(git log --oneline -1 2>/dev/null || printf '%s\n' "unavailable")
GIT_STATUS=$(git status --short --branch --untracked-files=all 2>/dev/null || printf '%s\n' "unavailable")
STATUS_BODY=$(printf '%s\n' "$GIT_STATUS" | sed '1d')
if [ -n "$STATUS_BODY" ]; then
  STATUS_CLEANNESS="dirty"
else
  STATUS_CLEANNESS="clean"
fi

COLLAB_ACTOR=$(actor_from_file "$COLLAB")
TURN_ACTOR="unknown"
if [ -n "$LATEST_TURN" ]; then
  TURN_ACTOR=$(actor_from_file "$LATEST_TURN")
fi
DASHBOARD_ACTOR="not present"
if [ -r "$DASHBOARD" ]; then
  DASHBOARD_ACTOR=$(actor_from_file "$DASHBOARD")
fi

MISMATCH="no"
MISMATCH_DETAIL=""
if [ "$TURN_ACTOR" != "unknown" ] && [ "$COLLAB_ACTOR" != "unknown" ] && [ "$TURN_ACTOR" != "$COLLAB_ACTOR" ]; then
  MISMATCH="yes"
  MISMATCH_DETAIL="$MISMATCH_DETAIL COLLAB=$COLLAB_ACTOR latest-turn=$TURN_ACTOR;"
fi
if [ "$DASHBOARD_ACTOR" != "not present" ] && [ "$DASHBOARD_ACTOR" != "unknown" ] && [ "$COLLAB_ACTOR" != "unknown" ] && [ "$DASHBOARD_ACTOR" != "$COLLAB_ACTOR" ]; then
  MISMATCH="yes"
  MISMATCH_DETAIL="$MISMATCH_DETAIL COLLAB=$COLLAB_ACTOR DASHBOARD=$DASHBOARD_ACTOR;"
fi

CURRENT_TEXT=$( {
  sed -n '1,180p' "$COLLAB"
  if [ -n "$LATEST_TURN" ] && [ -r "$LATEST_TURN" ]; then
    sed -n '1,180p' "$LATEST_TURN"
  fi
  if [ -r "$DASHBOARD" ]; then
    sed -n '1,180p' "$DASHBOARD"
  fi
} 2>/dev/null )

printf '%s\n' "== alert-state (advisory only) =="
printf 'repo: %s\n' "$REPO_ROOT"
printf 'latest commit: %s\n' "$GIT_HEAD"
printf 'latest turn note: %s\n' "${LATEST_TURN:-none found}"
printf 'git status cleanliness: %s\n' "$STATUS_CLEANNESS"
printf '%s\n' ""

printf '%s\n' "-- git status --short --branch --untracked-files=all --"
printf '%s\n' "$GIT_STATUS"
printf '%s\n' ""

printf '%s\n' "-- actor signals --"
printf 'COLLAB actor: %s\n' "$COLLAB_ACTOR"
printf 'latest-turn actor: %s\n' "$TURN_ACTOR"
printf 'DASHBOARD actor: %s\n' "$DASHBOARD_ACTOR"
if [ "$MISMATCH" = "yes" ]; then
  printf 'source mismatch: %s\n' "$MISMATCH_DETAIL"
else
  printf '%s\n' "source mismatch: none detected"
fi
printf '%s\n' ""

printf '%s\n' "-- COLLAB current owner --"
section_excerpt "$COLLAB" "## Current Owner" 8
printf '%s\n' ""

printf '%s\n' "-- next-request excerpts --"
section_excerpt "$COLLAB" "## Next Request To Claude" 6
section_excerpt "$COLLAB" "## Next Request To Codex" 6
section_excerpt "$COLLAB" "## Next Request To Sami" 6
printf '%s\n' ""

printf '%s\n' "-- latest-turn signals --"
if [ -n "$LATEST_TURN" ]; then
  signal_lines "$LATEST_TURN"
else
  printf '%s\n' "none"
fi
printf '%s\n' ""

printf '%s\n' "-- COLLAB signals --"
signal_lines "$COLLAB"
printf '%s\n' ""

if [ -r "$DASHBOARD" ]; then
  printf '%s\n' "-- DASHBOARD signals --"
  signal_lines "$DASHBOARD"
  printf '%s\n' ""
fi

printf '%s\n' "-- waiting-state hints, not approvals --"
print_event_if_match "Claude appears to be next" 'claude next|next request to claude|next agent:[[:space:]]*claude' "$CURRENT_TEXT"
print_event_if_match "Codex appears to be next" 'codex next|next request to codex|next agent:[[:space:]]*codex' "$CURRENT_TEXT"
print_event_if_match "Sami approval or decision may be needed" 'sami next|next request to sami|approval required|decision needed|exact approval text' "$CURRENT_TEXT"
print_event_if_match "artifact visibility action may be waiting" 'artifact visibility|local-only|share|export|push' "$CURRENT_TEXT"
print_event_if_match "critique may be waiting" 'critique' "$CURRENT_TEXT"
print_event_if_match "implementation may be waiting" 'implementation' "$CURRENT_TEXT"
print_event_if_match "hard stop is active" 'hard stop' "$CURRENT_TEXT"
if [ "$STATUS_CLEANNESS" = "dirty" ]; then
  printf '%s\n' "event: working tree has local changes"
else
  printf '%s\n' "event: working tree clean"
fi
printf '%s\n' ""

printf '%s\n' "-- non-authority guarantees --"
printf '%s\n' "This output is advisory only. COLLAB.md remains authoritative."
printf '%s\n' "This script does not approve, edit, stage, commit, push, call models, invoke agents, inspect sibling repos, use network calls, or create logs/history."
printf '%s\n' "Do not infer approval from green status, silence, consensus, lack of objection, or 'looks good' language."
printf '%s\n' "Do not invoke this watcher from agent instructions; it is a manually run relay aid."
