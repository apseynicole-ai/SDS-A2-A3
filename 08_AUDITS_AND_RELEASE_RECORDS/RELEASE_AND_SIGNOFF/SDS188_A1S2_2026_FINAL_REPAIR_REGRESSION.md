# SDS188 A1S2 2026 Final Repair Regression

## Exact artifact
- Filename: `SDS188_A1S2_2026_MasterLearningSystem_v1_3_1_FINAL_REPAIR_CANDIDATE.html`
- Size: `771429` bytes
- SHA-256: `2bd81b0a0020713a00e8fa29323dace28a7cc61b2bc49cedec3f27aab1054d1e`
- MD5: `da730e2d670777f140f5c9b1105f7444`

## Bounded repairs implemented
1. Excel Mode nav/panel are static in the base DOM and available at DOMContentLoaded.
2. The print supplement is a static sibling of `#print-content`, so canonical `renderPrint()` cannot erase it; it includes the blueprint, formula-sheet reality check and EX01–EX08 printable drills.
3. EX02 now directly trains the EMSLearn decoupled-subpart mechanic using supplied `p=0.62`, `SE=0.0240`; upper limit stored as `0.6670391356` (four-decimal answer `0.6670`).
4. Password wording is attributed specifically to the 2026 A1S2 Practice Test EMSLearn announcement supplied for the build.
5. Student-facing Chapter 8 internal tokens are decoded by a presentation-only overlay; underlying frozen Chapter 8 data/scripts are unchanged.
6. Browser title no longer says Candidate.
7. Formula-sheet reality check now includes the two-independent-means row.
8. Read/Print heading is hidden in print to remove the nearly blank first page.

## Regression result
- Targeted browser/print regression: **24/24 PASS**.
- Exact-artifact no-interaction Chromium print test: Excel tab/panel/static supplement present; PDF contains the execution supplement and EX01–EX08.
- The first six pre-existing script layers are SHA-256 identical to the pre-repair candidate; only the A1S2 Excel integration layer changed.
- Chapter 8 canonical gate remains `SOURCE_PARTIAL`.
- C8.69–C8.75 remain `HOLD`.

## Important environment note
The available Chromium harness blocks normal `file://`/HTTP navigation by administrator policy and makes `localStorage` inaccessible on `set_content()` opaque documents. For interaction regression only, a memory-backed storage shim was used; the exact artifact was separately print-tested without alteration. Claude's prior real-file audit remains the controlling independent browser audit for ordinary `file://` behavior.
