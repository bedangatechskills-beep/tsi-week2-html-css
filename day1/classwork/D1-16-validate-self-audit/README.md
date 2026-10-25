# D1-16 · Validate & self-audit

**Time:** 4 min · **Type:** ✏️ Modify · **Work:** alone

**Goal:** Check your own page with the HTML spell-checker, and repair every error.

## Open it

Open your own **`classwork/D1-10-kathmandu-gallery/`** folder (the gallery you built). There are no new files here.

## Your task

1. Open `D1-10-kathmandu-gallery/index.html` in VS Code.
2. Open the Problems panel: **Ctrl+Shift+M**. Repair every HTMLHint problem. Save after each one.
3. **Wi-Fi bonus:** go to **validator.w3.org** → **Validate by Direct Input**. Paste your whole file. Click **Check**.
   Repair every **Error** (you can leave Warnings).
4. Tick the audit checklist:

| ✔ | Check | How |
|---|---|---|
| ☐ | The skeleton is complete: DOCTYPE, `html`, `head`, `body` | look at lines 1–10 |
| ☐ | `<html lang="en">` | line 2 |
| ☐ | meta charset + meta viewport + a real `<title>` | the tab shows your title |
| ☐ | Exactly **one** `<h1>` | Ctrl+F → `<h1` |
| ☐ | Headings go one level at a time | read them in order |
| ☐ | **Every** `<img>` has a useful `alt` | Ctrl+F → `<img` |
| ☐ | **Every** link works | click each one |
| ☐ | The external link opens a new tab | click it |
| ☐ | 2-space indents, everything closed | Shift+Alt+F, then read |
| ☐ | Problems panel: **0** | Ctrl+Shift+M |

## Done looks like

- The Problems panel shows 0 problems for your gallery.
- All 10 boxes are ticked.

## Stuck?

1. Click a problem in the Problems panel. VS Code jumps to the line.
2. Read the message slowly. "Tag must be paired" = something is not closed.
3. Compare with `notes/10-debugging-and-validating-html.md`.

## Fast?

Audit another page from today (for example your **D1-14** order slip) with the same checklist.
