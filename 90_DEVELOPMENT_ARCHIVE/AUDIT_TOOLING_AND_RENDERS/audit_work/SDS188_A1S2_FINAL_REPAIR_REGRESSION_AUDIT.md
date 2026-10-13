# SDS188 A1S2 2026 — Independent Regression Audit of the Final Repair Candidate

**Scope:** re-verify only the six checkpoints requested, plus the four non-blocking clean-ups, against the exact new bytes, using real Chromium (Playwright) execution and print-to-PDF, plus independent hashing and recomputation. Nothing accepted on the builder's regression report — that report itself discloses it used a memory-backed storage shim and a harness that blocks `file://` navigation, so it cannot substitute for real browser verification, which is what follows.

---

## Artifact Identity

| Field | Builder's claim | Independently measured | Match |
|---|---|---|---|
| Filename | `SDS188_A1S2_2026_MasterLearningSystem_v1_3_1_FINAL_REPAIR_CANDIDATE.html` | same | — |
| Size | 771,429 bytes | 771,429 bytes | ✅ |
| SHA-256 | `2bd81b0a0020713a00e8fa29323dace28a7cc61b2bc49cedec3f27aab1054d1e` | `2bd81b0a0020713a00e8fa29323dace28a7cc61b2bc49cedec3f27aab1054d1e` | ✅ |
| MD5 | `da730e2d670777f140f5c9b1105f7444` | `da730e2d670777f140f5c9b1105f7444` | ✅ |

---

# 🟡 SIGN-OFF DENIED — one remaining defect (not a blocker on par with the last round; a source-fidelity item)

Five of the six requested checkpoints are **genuinely, robustly fixed** — verified independently, not by re-reading the builder's claims. One checkpoint (#4, the password statement) is **not actually resolved**: it now cites a specific-sounding source document that was never supplied to this audit and does not appear anywhere in the practice-test document I do have. Everything else below passed real-browser, real-print, real-hash verification.

---

## Checkpoint-by-checkpoint findings

### 1. Excel Mode exists on fresh load and survives rendering — ✅ CONFIRMED FIXED

The nav button (`data-view="excel-mode"`) and the `#excel-mode` section are now **static markup in the base HTML**, not JS-injected. Tested 5 fresh Chromium loads, checking state at the `'load'` event with **zero** additional wait or interaction:

```
RUN 0–4 (at 'load' event, 0ms extra wait): navBtnExists=true, sectionExists=true,
  printSupplementExists=true (6388 chars), apiPresent=true
pageErrors: 0, consoleErrors: 0   (all 5 runs)
```

This is a structural fix, not a timing fix — it eliminates the race condition entirely rather than narrowing its window. Genuinely resolved.

### 2. Real print-to-PDF contains the A1S2 execution supplement plus EX01–EX08 — ✅ CONFIRMED FIXED

The print supplement (`#a1s2-print-supplement`) is now **static HTML physically inside `#read-print`**, not assembled by JS at render time — this is the most robust possible fix, since it cannot be affected by any script-timing issue. Verified with two independent real Chromium print-to-PDF runs, full-text-extracted (not skimmed):

- **Test A** — printed immediately after `'load'`, zero clicks, zero wait (worst case: student hits Ctrl+P instantly): PDF contains `"A1S2 2026 Assessment-Execution Supplement"`, `EX01`–`EX08`, and the formula-sheet reality-check table. ✅
- **Test B** — normal flow (click Read/Print tab, wait, print): same result, plus visually confirmed via page-image rendering — clean borders, no clipping, no cut-off tables (`screens/repair-print-page-19.png`, `-20.png`).

This is the single most important fix from the last round and it is real.

### 3. EX02 trains the decoupled supplied-value mechanic, and 0.6670 is correct — ✅ CONFIRMED FIXED

Read directly from the live `TASKS.EX02` object (not just the print blurb):

- `prompt`: *"Part (c) is deliberately decoupled to mirror the EMSLearn practice-test mechanic: for part (c), ignore your earlier values and instead assume p=0.62 and SE=0.0240."*
- `caveat`: *"REAL-PRACTICE-TEST MECHANIC: a later EMSLearn sub-part may supply its own values even when they differ from what you calculated earlier."*
- Stored answer: `0.6670391356`; the **old** chained-answer value (`0.6956156793`) is now explicitly registered as a trap (`common:[{v:.6956156793,f:'IGNORED_SUPPLIED_OVERRIDE_VALUES'}]`) — meaning a student who makes exactly the mistake the *previous* design would have trained them into now gets targeted diagnostic feedback. That's a genuinely thoughtful fix, not a cosmetic one.

Independently recomputed: `0.62 + NORM.S.INV(0.975) × 0.0240 = 0.6670391356289613` → four-decimal answer `0.6670`. **Matches exactly.** ✅

### 4. Password statement properly attributed to the supplied 2026 A1S2 Practice Test EMSLearn announcement — ❌ NOT RESOLVED

New wording (verified live in both the interactive panel and the print supplement, identical text):

> *"The 2026 A1S2 Practice Test EMSLearn announcement supplied for this build states that the practice quiz is password protected and that the A1S2 quiz will likewise require a password; it also says similar rules and instructions will be provided in A1S2."*

I independently re-opened the actual `SDS A1S2 PRATICE TEST.docx` (not my earlier cached extraction — the raw docx itself, parsed fresh) and searched every paragraph and table cell for the word "password": **zero matches.** I also re-checked `2026 Module Framework SDS188.pdf`: zero matches, as before. No file named or resembling "2026 A1S2 Practice Test EMSLearn announcement" has ever been supplied to this audit, in either the original audit or this regression round.

This is not resolved — it's re-labelled with more specific, more confident sourcing language ("supplied for this build," naming a specific announcement) than the original claim had, while remaining just as unverifiable from anything I can actually inspect. If a genuine EMSLearn announcement exists and says this, it needs to be supplied to this audit (as a file, or quoted verbatim with a date inside the HTML itself) before this can be certified accurate rather than merely re-worded. Until then, a reader has no more reason to trust this sentence than the original one — it just sounds more authoritative.

**This is the one item still gating full sign-off.**

### 5. The six pre-existing script layers were not accidentally altered — ✅ CONFIRMED

Extracted all 7 `<script>` blocks from the new file and SHA-256'd each independently, comparing against the hashes recorded during the original audit of the pre-repair candidate:

| Script | Old SHA-256 (first 12 hex) | New SHA-256 (first 12 hex) | Identical? |
|---|---|---|---|
| base engine | `2cb30e538692…` | `2cb30e538692…` | ✅ byte-identical |
| `v11-correction-layer` | `a4f3203a0e0d…` | `a4f3203a0e0d…` | ✅ byte-identical |
| `chapter8-provisional-content-pack` | `73f1d9a1b61d…` | `73f1d9a1b61d…` | ✅ byte-identical |
| `ch9-completeness-patch-v1` | `65d6d27aa81f…` | `65d6d27aa81f…` | ✅ byte-identical |
| `ch8-ch9-final-content-patch` | `0938e8b17cc2…` | `0938e8b17cc2…` | ✅ byte-identical |
| `ch8-ch9-final-mastery-integration-patch` | `636b2b356982…` | `636b2b356982…` | ✅ byte-identical |
| `a1s2-2026-practice-excel-integration-patch` | `daa6764e6971…` | `034d620bbebd…` | changed (expected — this is the repaired layer) |

Only the Excel-integration layer changed; every other engine/content script is byte-for-byte identical to what was audited and found sound in the previous round. Confirmed independently, not taken from the regression report.

### 6. Chapter 8 remains SOURCE_PARTIAL and C8.69–C8.75 remain HOLD — ✅ CONFIRMED (live runtime check)

Since the content-defining scripts are unchanged (#5 above), this follows almost by necessity, but it was checked live anyway by reading the running app's own state after loading Chapter 8 in a real browser:

```
Chapter 8 status: "SOURCE_PARTIAL"
C8.69–C8.75 statuses: ["HOLD","HOLD","HOLD","HOLD","HOLD","HOLD","HOLD"]
```

---

## Non-blocking clean-ups requested

- **Student-facing jargon:** ✅ fixed and verified live. Loaded Chapter 8's Learn content in a real browser and confirmed the rendered text contains **zero** raw occurrences of `OFF23`, `AWAIT_MEMO_OR_CURRENT_SOURCE`, or `LEGACY_SOURCE_SUPPORTED` — they're now decoded in place (e.g. *"official 2023 Chapter 8 source rule: if the population is not normal, use a large sample n > 30…"*). The decode runs on initial load and re-runs whenever a chapter tab is opened, and covers the print supplement too.
- **Clean browser title:** ✅ fixed. `document.title` is now `"SDS188 · A1S2 2026 Master Learning System · Excel Execution"` — the word "Candidate" is gone.
- **Two-independent-means formula-sheet row:** ✅ added and verified present in the actual print output. Text checked against the real formula sheet's last inference row (`μ1−μ2`, SE `√(σ1²/n1+σ2²/n2)`, `Z∼N(0,1)`, σ1/σ2 known) — accurate.
- **Nearly-blank first print page:** ✅ fixed. The `#read-print` section heading/subtitle/print-button block is now hidden under print media; the printed output now opens directly on page 1 with real Chapter 6 content instead of a near-empty title page.

---

## What was actually executed for this regression (for the record)

Real Chromium via Playwright (not jsdom), loading the exact uploaded bytes via `file://`: 5 fresh-load timing runs, 2 independent print-to-PDF generations (immediate and normal-flow) with full-text extraction and page-image rendering, live in-app state inspection (`window.SDS188`, `window.SDS188_A1S2_EXCEL_INTEGRATION`) after real navigation clicks, and independent SHA-256 hashing of every script block plus the whole file. Independent recomputation of the EX02 answer in Python. Direct re-parse of the source `.docx` for the password claim (not reused from the prior audit's cache).

---

## Exact remaining repair required for 🟢

**Location:** Excel Mode panel "Password/source note" and the identical text inside `#a1s2-print-supplement`.

**Old/current text:** *"The 2026 A1S2 Practice Test EMSLearn announcement supplied for this build states that the practice quiz is password protected and that the A1S2 quiz will likewise require a password; it also says similar rules and instructions will be provided in A1S2."*

**Required:** one of —
1. Supply the actual "2026 A1S2 Practice Test EMSLearn announcement" file/screenshot to this audit so it can be verified, and ideally quote the operative sentence verbatim with a date inside the HTML; or
2. If no such document exists, replace the sentence with wording that doesn't claim a specific, named source, e.g. *"Some students report the real assessment may be password-protected — this hasn't been confirmed against a source document available to this build; check the actual EMSLearn announcement yourself before A1S2."*

Everything else — do not touch. The other five checkpoints and all four non-blocking clean-ups are genuinely done; no further changes needed there.
