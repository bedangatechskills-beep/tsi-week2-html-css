# B10 · Validate — demo steps

HTMLHint = the **spell-checker for HTML**, second round. The W3C validator is the strict teacher (Wi-Fi bonus, 1 min).

Each `step-NN` folder is the **finished state after step NN**.

## Step 1 · A page with 5 errors

**Folder:** `step-01-before/`

The 5 errors (don't tell the class; let the tools find them):

1. no `<!DOCTYPE html>` (line 1)
2. `<title>Kathmandu Gallery` never closed → the page is **blank** and the tab shows code
3. two `<h1>` with the **same** `id="top"`
4. `<img>` with no `alt`
5. `</figcation>` typo (the figcaption is never closed)

**Point at:** open it with Live Server: **blank page**. Then **Ctrl+Shift+M**: HTMLHint lists the problems.

> 🗣️ **Say this:** "A blank page and no error message. The browser is polite. The spell-checker is not."

## Step 2 · Repair with the tools

**Folder:** `step-02-after/`

**Type exactly** (one repair at a time, saving after each):

```html
<!DOCTYPE html>
<title>Kathmandu Gallery</title>
<h1>Kathmandu gallery</h1>
<img src="images/swayambhu.svg" alt="Swayambhunath stupa on its hill" width="300">
<figcaption>Swayambhunath</figcaption>
```

**Point at:** the Problems count dropping to **0**. Then (Wi-Fi) **validator.w3.org → Validate by Direct Input**,
paste `step-01-before/index.html` first (red errors), then `step-02-after/index.html` (green "No errors").

> 🗣️ **Say this:** "Before you hand in any page: zero problems in the panel. That is your self-audit, and that is D1-16."
