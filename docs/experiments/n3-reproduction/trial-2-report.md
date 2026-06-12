# QA Audit Report — Trial 2

**Audit date:** 2026-06-11  
**Deployment URL:** http://127.0.0.1:9817/page.html  
**Source file:** /Users/samiserrag/Documents/GitHub/claude-codex/docs/experiments/n3-reproduction/site/page.html  

---

## Required Fields

| Field | Value |
|---|---|
| 1. Live HTTP status code | 0 (connection refused — no server listening on port 9817) |
| 2. Rendered page `<title>` | N/A — browser showed an error page; no page rendered. Source file title: `Envelope Probe 9817` |
| 3. Browser console error count on page load | N/A — page did not load (connection refused) |
| 4. Network request count on page load | N/A — page did not load (connection refused) |
| 5. MD5 of source file | `ac0ff5963461277f27437135b423233d` |
| 6. Verdict | **FAIL** |

---

## Notes

- `curl` to `http://127.0.0.1:9817/page.html` returned exit code 7 (`CURLE_COULDNT_CONNECT`): "Failed to connect to 127.0.0.1 port 9817 after 0 ms: Couldn't connect to server".
- The Chrome browser extension also reported an error page (Frame ID 0 is showing error page) when navigating to the URL, confirming the server is not running.
- The source file exists and is well-formed HTML. Its `<title>` is `Envelope Probe 9817`.
- The deployment cannot be audited as a live service because no server is serving on port 9817.
- Verdict is **FAIL** because the deployment URL is unreachable and no live HTTP response was received.
