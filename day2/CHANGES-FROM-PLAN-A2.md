# Changes from PLAN v2 — Builder A2 (Day 2 code pack)

One line per change: id · what · why. Everything else follows PLAN v2 §3.2 / §4.3 / §4.4 exactly.

| Id / area | What | Why |
|---|---|---|
| D2-03 bug 5 | Tag **R** (plan: D(LH)). | Lighthouse 13's "link text" audit skips links to `#…` on the same page, and all three "click here" links are same-page anchors. Tested with `npx lighthouse` 13.5.0: link-text passes. |
| D2-03 bug 6 | Tag **V** (plan: D(LH)). BUGS.md says how to see it: clicking the words does nothing, and the hint disappears when you type. | Lighthouse (axe) accepts a placeholder as an accessible name, so the "label" audit passes. Tested. The reveal turns this into a "don't trust one tool" point. |
| D2-HW4 bug 2 | Tag **R** (plan: D(LH)); test with the device toolbar. | Lighthouse 13 reports the viewport audit as not applicable when the tag is missing. Tested. |
| D2-06 bug 4 | BUGS.md says **both** declarations are lost (`color: #2a3f63 line-height: 1.8` is one invalid value). | Plan says "the second is ignored"; Chrome drops both. Still V. |
| D2-06 bug 3, D2-FF4 bug 1, D2-HW1 bug 10 (missing `}`) | Placed on the second-to-last rule, so exactly **one** rule (the next) is swallowed. | Chrome's CSS nesting reads everything after a missing `}` as nested rules until the end of the file. Placed earlier, it would hide all the later bugs. |
| D2-HW1 bug 10 | The rule swallowed by the missing `}` after `.hero` is `main` (centred 900 px column). | The swallowed rule becomes nested (`.hero X`); it must target something **outside** `.hero`, or the bug is invisible. Found in pass 2 (the single-fix render test) with `.avatar`, which is inside `.hero`. |
| D2-09 target 2 | `.veg` → light-green **background** (`#dff3dc`). | Green text on `.veg` would not show on its paragraphs, because target 1 (`p { color: grey }`) sets their colour directly. |
| D2-14 bug 1 | `display: blok` is on `.order-button` (an `<a>` meant to be a 200 px block). | The plan does not say which element. It must be an inline element so the typo is visible. |
| D2-14 bug 3 | Missing `list-style: none` is visible only while bug 5 is still there. BUGS.md says to mend 3 and 5 together. | Once the `li`s are inline-block they have no markers, so the bullets disappear either way. |
| D2-FF4 bug 9 | `font-size: 24 px` (plan example: `16 px`). | 16px is the default size, so dropping it would change nothing on screen. |
| D2-HW1 bug 8 | `border: 1px #999` (plan: `#ddd`). | A #ddd line on a white card on a light page is almost invisible, even when mended. |
| D2-04 | The `<video>` has `preload="none"`. | Without it Chrome shows the first frame when the poster path is wrong, and bug 4 would be invisible. |
| D2-05, D2-FF6 | The solutions also contain `media/`, `images/` and `css/bootstrap.min.css` (the plan lists only the html). | `check_pack.py` requires every link in a solution to resolve. |
| Momo House | Address is **Dillibazar**, Kathmandu (two minutes from TSI). | Matches the A0 logo ("DILLIBAZAR · KATHMANDU"). |
| D2-03, B2 demo | D2-03 has a 3-line internal `<style>` (labels on their own line, table borders). B2 uses `momo-plate.svg` + `decorative-pattern.svg`. | Readability before CSS is taught / the plan said "images/…". |
| Demos | B3 step-02/03 also contain `canteen-bell.wav`; B8 steps have `css/style.css`. | Each step folder is the cumulative finished state and must open on its own. |
| D2-15 / B9 | Cards are `width: 290px` (the README says so). | 3 × 300 px + margins + inline-block gaps does not fit the 928 px content box. |
| Check report | Written to `_tools/CHECK-REPORT-day2.md` (PLAN §3.2 name). | The A2 brief said `CHECK-REPORT.md`; the PLAN wins. |
