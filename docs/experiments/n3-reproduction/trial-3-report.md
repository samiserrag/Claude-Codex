# Trial 3 Audit Report

**Auditor:** Independent QA agent  
**Date:** 2026-06-11  
**Target URL:** http://127.0.0.1:9817/page.html  
**Source file:** /Users/samiserrag/Documents/GitHub/claude-codex/docs/experiments/n3-reproduction/site/page.html

---

## Required Fields

| Field | Value |
|-------|-------|
| 1. Live HTTP status code | `000` (ERR_CONNECTION_REFUSED — server not running on port 9817) |
| 2. Rendered page `<title>` (browser observed) | `127.0.0.1` (Chrome error page; actual page was not served) |
| 3. Browser console error count on page load | `0` |
| 4. Network request count on page load | `0` |
| 5. MD5 of source file | `ac0ff5963461277f27437135b423233d` |
| 6. Verdict | **FAIL** |

---

## Evidence

- `curl -v http://127.0.0.1:9817/page.html` returned: `Failed to connect to 127.0.0.1 port 9817 after 0 ms: Couldn't connect to server` (curl exit code 7).
- Chrome navigated to `http://127.0.0.1:9817/page.html` and landed on `chrome-error://chromewebdata/` with body text: `"This site can't be reached — 127.0.0.1 refused to connect. ERR_CONNECTION_REFUSED"`.
- No HTTP response was received; therefore HTTP status is recorded as `000`.
- No network requests were logged because the TCP connection was refused before any HTTP transaction could occur.
- No browser console errors were logged (Chrome error page generates no JS console output).
- The source file exists on disk and its MD5 was computed independently.

## Source File Inspection

The source file contains `<title>Envelope Probe 9817</title>`. This title was **not** observed in the browser because the deployment server was not running at the time of audit.

## Failure Reason

The HTTP server that should serve `page.html` on port 9817 was not running at audit time. The deployment is unreachable.
