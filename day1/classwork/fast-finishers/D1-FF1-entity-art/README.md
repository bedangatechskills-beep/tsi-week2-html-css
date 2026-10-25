# D1-FF1 · Entity art

**Time:** 10–15 min · **Type:** 🔨 Build · **Work:** alone

**Goal:** Print special characters with entities (escape codes).

## Open it

Open `index.html` with Live Server (right-click → **Open with Live Server**).
No Live Server? Double-click the file. It opens in Chrome. Press F5 after each save.

## Your task

Build two things in `index.html`:

1. **A price board** for Didi: three lines like `Steam momo → Rs. 150`.
   - Use `&rarr;` for the arrow and `&nbsp;` between `Rs.` and the number (so they never split onto two lines).
   - Write "Momo & milk tea combo" with `&amp;`, and add a `&hearts;`.
2. **A tiny HTML lesson:** a paragraph that shows the tags **as text**:
   `A paragraph starts with <p> and ends with </p>.` Use `&lt;` and `&gt;`.
3. A footer line with `&copy;` and the year.

| Entity | Shows |
|---|---|
| `&lt;` `&gt;` | < > |
| `&amp;` | & |
| `&copy;` | © |
| `&nbsp;` | a space that never breaks |
| `&rarr;` | → |
| `&hearts;` | ♥ |

## Done looks like

- The page shows arrows, a heart, a © sign and the text `<p>` — and no squiggles in VS Code.

## Stuck?

1. Every entity starts with `&` and ends with `;`.
2. If you see `&rarr;` on the page as text, check the spelling and the `;`.
3. Challenge: how do you print the text `&amp;` itself? (Answer: `&amp;amp;`)

## Fast?

Try **D1-FF2 Table of contents**.
