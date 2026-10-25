# Changes from PLAN v2 — Builder B (notes, homework sheets, HW3, print) — Day 2

| Id / area | What | Why |
|---|---|---|
| `day1/print/_test_snippets.py` (run with --day 2) | New file (not in the §3 tree). Tests every ```html / ```css fence in notes, homework sheets and HW3 (html-validate with the day's config, csstree-validator, local paths, optional Chrome screenshots). Fences tagged ```html broken / ```css broken are planted mistakes and are skipped. | §6 B "B tests every snippet": made repeatable for QA. |
| `homework/W2D2-Homework-Sheet.md` submit checklist | Asks students to save `my-bugs.md` (HW1) inside A2's HW1 folder and to build HW2 in `D2-HW2-style-your-portfolio/my-portfolio/` (as A2's README says). | Gives the instructor something concrete to check; students create these files, A2's files are untouched. |
| Print code font | Courier New 8.5 pt in shaded blocks (plan §6 B), not Consolas (docx-pattern default). Broken-on-purpose blocks get a pink fill + "Broken on purpose" label. | Plan wins over the generic pattern; students must not copy a broken snippet as a model. |
| Print builder language | `day1/print/_build_print.py --day 2` uses python-docx (the docx-pattern helpers re-implemented in Python), PDF via Word COM, LibreOffice fallback. | Plan §3.1 names a Python script. |
| notes 02 | D2-03 bug 5 → R, D2-03 bug 6 → V, D2-HW4 bug 2 → R in the "Common mistakes" table; viewport line says Lighthouse 13 may not report it. | A2 tested with Lighthouse 13.5.0 (CHANGES-FROM-PLAN-A2.md). |
| notes 03 | Autoplay examples are `text` fences, runnable files use `controls loop`. | html-validate's a11y preset rejects every `autoplay`, even muted. |
| notes 09 | Missing `;` drops both declarations; missing `}` nests the next rule (modern Chrome CSS nesting). | Verified in Chrome; matches A2's findings. |
| W2D2 homework sheet | HW2 lives in `my-portfolio/` with 2 pages; HW4 hint says Lighthouse finds one head problem, the device toolbar the other. | Matches A2's HW2 README and the HW4 bug-2 re-tag. |
