# D1-02 · Emmet speed drill

**Time:** 7 min · **Type:** 🔨 Build · **Work:** alone

**Goal:** Use Emmet (speed-dial for tags) and 4 shortcuts to build a page fast.

## Open it

Open `index.html` with Live Server (right-click → **Open with Live Server**).
No Live Server? Double-click the file. It opens in Chrome. Press F5 after each save.

## Your task

`index.html` is empty. Make it look like `target.html`. Open `target.html` with Live Server in a second tab to see the goal.

Type each abbreviation, then press **Tab**. Then type the words inside.

| # | Type this | Then press | You get |
|---|---|---|---|
| 1 | `!` | Tab | the full skeleton (change the `<title>` to `Emmet Speed Drill`) |
| 2 | `h1+p` | Tab | a heading and a paragraph next to it |
| 3 | `ul>li*5` | Tab | a list with 5 items |
| 4 | `nav>a*3` | Tab | 3 links in a nav (type `#` inside each `href=""`) |
| 5 | `table>tr*3>td*2` | Tab | a table: 3 rows, 2 cells each |
| 6 | `.card>h2+p` | Tab | a `<div class="card">` with a heading and a paragraph |
| Bonus 7 | `ul>li.item$*3` | Tab | `item1`, `item2`, `item3` |
| Bonus 8 | `lorem20` | Tab | 20 words of dummy text |

**Shortcuts to use on the way:**

| Keys | What it does |
|---|---|
| Alt+Shift+↓ | copy the line down |
| Ctrl+/ | comment / uncomment the line |
| Shift+Alt+F | tidy up (format) the whole file |
| Ctrl+D | select the next match of a word (edit both at once) |
| **Linked editing** | change `<ul>` to `<ol>`: the closing tag changes too |

## Done looks like

- Your page in Chrome looks the same as `target.html`.
- You used all 6 required abbreviations and at least 3 shortcuts.
- Shift+Alt+F made your file tidy (2-space indents).

## Stuck?

1. Tab does nothing? Check the bottom-right of VS Code says **HTML**. If it says Plain Text, click it and choose HTML.
2. Type the abbreviation with **no spaces**. `ul > li` does not work. `ul>li*5` does.
3. Open `target.html` in VS Code and compare line by line.

## Fast?

Try `ul>li{Momo $}*4` and press Tab. What do the `{}` do?
