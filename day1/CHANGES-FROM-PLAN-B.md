# Changes from PLAN v2 — Builder B (notes, homework sheets, HW3, print) — Day 1

| Id / area | What | Why |
|---|---|---|
| `print/_test_snippets.py` | New file (not in the §3 tree). Tests every ```html / ```css fence in notes, homework sheets and HW3 (html-validate with the day's config, csstree-validator, local paths, optional Chrome screenshots). Fences tagged ```html broken / ```css broken are planted mistakes and are skipped. | §6 B "B tests every snippet": made repeatable for QA. |
| `homework/W2D1-Homework-Sheet.md` submit checklist | Asks students to save `my-bugs.md` (HW1) and `my-url.txt` (HW2) inside A1's homework folders. | Gives the instructor something concrete to check; students create these files, A1's files are untouched. |
| Print code font | Courier New 8.5 pt in shaded blocks (plan §6 B), not Consolas (docx-pattern default). Broken-on-purpose blocks get a pink fill + "Broken on purpose" label. | Plan wins over the generic pattern; students must not copy a broken snippet as a model. |
| Print builder language | `_build_print.py` uses python-docx (the docx-pattern helpers re-implemented in Python), PDF via Word COM, LibreOffice fallback. | Plan §3.1 names a Python script. |
| notes 05 / 08 / 10, D1-HW3 key | Synced with A1's tested deviations: a lone `<li>` loses its bullet and indent (not "bullets still show"); D1-11 has 6 columns; D1-15 bug 4 is `colspan="2"` (gap), not `"4"`. | A1 verified these in Chrome 155 (CHANGES-FROM-PLAN-A1.md). |
| notes 09, D1-HW3 key C3 | A `type="number"` phone field does **not** drop a leading 0 in Chrome (value stays "0980"); the notes say spinner arrows + `+977`/spaces give an empty value instead. | Tested in headless Chrome. A1's D1-13 BUGS.md "how to see" line 2 still says "A leading 0 is lost" (A1's file, not changed). |
