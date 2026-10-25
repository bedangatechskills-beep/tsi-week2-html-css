# D1-FF2 · Table of contents

**Time:** 15 min · **Type:** 🔨 Build · **Work:** alone

**Goal:** Build a table of contents that jumps to each part of a long page.

## Open it

Open `index.html` with Live Server (right-click → **Open with Live Server**).
No Live Server? Double-click the file. It opens in Chrome. Press F5 after each save.

## Your task

The TSI student handbook is long. Help readers jump around.

1. Give every `<h2>` and `<h3>` an `id` (short, lowercase, with `-` for spaces, e.g. `id="morning-batch"`).
2. Under the intro, add `<h2>Contents</h2>` and a **nested list** of links:
   - each `<h2>` is an item: `<li><a href="#classes">Classes</a></li>`
   - its `<h3>`s are a sub-list **inside** that `<li>`
3. At the end of each section add `<a href="#top">Back to top</a>`.

## Done looks like

- Clicking "Borrowing books" in the contents jumps down to that heading.
- "Back to top" jumps up again. The address bar shows `#borrowing`, then `#top`.

## Stuck?

1. `href="#classes"` jumps to the element with `id="classes"`. No `#` inside the id itself.
2. The nested `<ul>` goes inside the `<li>`, before `</li>`.
3. Make the browser window short to see the jumps.

## Fast?

Try **D1-FF3 Mystery page**.
