# 02 · VS Code, Emmet and Live Server: Student Notes
*TSI Nepal · AI-Powered Full Stack Developer Program · Week 2, Day 1 · Blocks B0 + B2 · Layer: Frontend (your tools)*

> **Today in one sentence:** A good cook keeps the right tools within reach. A good developer does too.

## The picture to keep in your head

**A professional kitchen**: labeled tools within reach; **"taste as you cook" = Live Server**.
Emmet = **speed-dial for tags**.

| Kitchen | VS Code |
|---|---|
| Check the stove works before cooking | D1-00 setup check: open the folder, start Live Server |
| Knives and spoons within reach | Keyboard shortcuts |
| Taste as you cook | **Live Server**: save, and the page reloads by itself |
| Speed-dial on a phone: press 2, it calls Didi | **Emmet**: type `ul>li*3`, press Tab, get a whole list |
| A friend who spots salt instead of sugar | **HTMLHint**: red/yellow squiggles under mistakes (note 10) |

## Words you now own

| Term | What it means (plain English) | Example |
|---|---|---|
| Workspace folder | The one folder you open in VS Code. All paths start here | File → Open Folder → `W2D1` |
| Explorer | The file list on the left (Ctrl+Shift+E) | Shows `classwork/`, `notes/` |
| Extension | An add-on that gives VS Code a new skill | Live Server, HTMLHint |
| Live Server | An extension that runs a tiny server and reloads the page when you save | `http://127.0.0.1:5500/index.html` |
| Emmet | A shorthand built into VS Code: a short code expands into full HTML | `!` + Tab → a full skeleton |
| Abbreviation | The short code you type for Emmet | `nav>a*3` |
| Command Palette | A search box for every VS Code command (Ctrl+Shift+P) | "Format Document" |
| Linked editing | Change an opening tag and the closing tag changes too | `div` → `section` in both places |
| Problems panel | The list of every error HTMLHint found (Ctrl+Shift+M) | "Tag must be paired" |
| Autosave | Saves for you. **Off** in this class, so you learn to press Ctrl+S | `"files.autoSave": "off"` |

## How it works

### 1. Always open the folder, not the file

Open **File → Open Folder** and choose `W2D1`. Do not double-click single files into VS Code.

- When you open a folder, VS Code reads the class settings in `W2D1/.vscode/settings.json` (2-space tabs, linked
  editing) and the HTMLHint rules in `W2D1/.htmlhintrc`.
- Live Server uses the open folder as the root of its little warehouse.
- If you open only one file, links and images to other files may break and HTMLHint may stay quiet.

### 2. Live Server: taste as you cook

1. Right-click an `.html` file in the Explorer → **Open with Live Server** (or click **Go Live** at the bottom right).
2. Chrome opens `http://127.0.0.1:5500/...`.
3. Change something, press **Ctrl+S**. The page reloads by itself.

**No Live Server yet?** Double-click the HTML file in Windows File Explorer. It opens in Chrome as
`file:///C:/...`. After each save, press **F5** in Chrome. Install Live Server at the first break.

### 3. Emmet: speed-dial for tags

Type an abbreviation in an `.html` file and press **Tab** (or Enter when the suggestion box shows).

| Symbol | Means | Abbreviation | Gives you |
|---|---|---|---|
| `!` | a full HTML skeleton | `!` | DOCTYPE, html, head, body |
| `>` | child (put inside) | `nav>a` | `<nav><a href=""></a></nav>` |
| `+` | sibling (put next to) | `h1+p` | `<h1></h1><p></p>` |
| `*` | repeat | `li*3` | three `<li></li>` |
| `.` | class | `.card` | `<div class="card"></div>` |
| `#` | id | `section#menu` | `<section id="menu"></section>` |
| `$` | a number that counts up | `li.item$*3` | `item1`, `item2`, `item3` |
| `{}` | text inside | `a{Home}` | `<a href="">Home</a>` |
| `lorem` | dummy text | `lorem20` | 20 words of fake Latin text |

Combine them:

```text
ul>li*5             → a list with 5 items
nav>a*3             → a nav with 3 links
table>tr*3>td*2     → a table: 3 rows, 2 cells in each
.card>h2+p          → a div.card with an h2 and a p inside
ul>li.item$*3       → <li class="item1">, <li class="item2">, <li class="item3">
```

**Important:** Emmet's `!` writes `<html lang="en">` and `<title>Document</title>`. Always change
`Document` to a real title. "Document" is not a title a visitor can use.

### 4. Shortcuts within reach

| Shortcut | What it does | When to use it |
|---|---|---|
| Ctrl+S | Save | After every change. Live Server reloads only when you save |
| Alt+Shift+↓ | Copy the current line down | Repeat a `<li>` or a table row |
| Alt+↑ / Alt+↓ | Move the line up / down | Put a tag in the right place |
| Ctrl+/ | Comment / uncomment the line | Hide a line while you test |
| Shift+Alt+F | Format document (fix indentation) | Messy code; shows nesting mistakes |
| Ctrl+D | Select the next match of the same word | Rename three `td` at once |
| Ctrl+Shift+M | Problems panel | See every HTMLHint error |
| Ctrl+\` | Open the terminal | `ping localhost` |
| Ctrl+P | Quick open a file by name | Jump to `menu.html` |
| Ctrl+Z | Undo | Always |

**Linked editing:** put the cursor in `div` of `<div>` and type `section`. The closing `</div>` becomes
`</section>` at the same time. Our class settings switch it on (`"editor.linkedEditing": true`).

## Code you built today

### Step 1: setup check (D1-00)

File: `index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Setup check · Aarav</title>
</head>
<body>
  <h1>Hello, I am Aarav</h1>
  <p>My VS Code and Live Server work.</p>
</body>
</html>
```

- Change `Aarav` to your own name. Press Ctrl+S.
- **Predict:** do you need to press F5 in Chrome? (With Live Server: no. With the double-click fallback: yes.)
- Press **F12**. You have opened DevTools. You will use it all day.

### Step 2: the Emmet skeleton

In a new empty file `emmet.html`, type `!` and press Tab. You get this:

File: `emmet.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Emmet drill · Momo House</title>
</head>
<body>
  <h1>Momo House</h1>
  <p>Fresh momo every day in Kathmandu.</p>
</body>
</html>
```

- The body came from `h1+p` + Tab, then typing the text.
- `Document` was replaced by a real title.

### Step 3: Emmet structures

Each block below was made by one abbreviation (shown above the block), then filled with text.

File: `structures.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Emmet structures · Momo House</title>
</head>
<body>
  <h1>Emmet structures</h1>

  <!-- nav>a*3 -->
  <nav>
    <a href="#menu">Menu</a>
    <a href="#prices">Prices</a>
    <a href="#contact">Contact</a>
  </nav>

  <!-- ul>li*5 -->
  <h2 id="menu">Menu</h2>
  <ul>
    <li>Chicken momo</li>
    <li>Veg momo</li>
    <li>Buff momo</li>
    <li>Paneer momo</li>
    <li>Chocolate momo</li>
  </ul>

  <!-- table>tr*3>td*2 -->
  <h2 id="prices">Prices</h2>
  <table>
    <tr>
      <td>Steam</td>
      <td>Rs. 150</td>
    </tr>
    <tr>
      <td>Fried</td>
      <td>Rs. 180</td>
    </tr>
    <tr>
      <td>Jhol</td>
      <td>Rs. 200</td>
    </tr>
  </table>

  <!-- .card>h2+p -->
  <div class="card">
    <h2 id="contact">Contact</h2>
    <p>Call Didi at the counter.</p>
  </div>

  <!-- ul>li.item$*3 -->
  <ul>
    <li class="item1">First</li>
    <li class="item2">Second</li>
    <li class="item3">Third</li>
  </ul>
</body>
</html>
```

- `<!-- ... -->` is a comment: a note for people. The browser ignores it (note 03).
- **Predict:** what will `ol>li*4` give you? Type it and check.

## Quick reference

| You want to... | Do this |
|---|---|
| Start a new page | `!` + Tab, then change the title |
| Open the page in Chrome | Right-click → Open with Live Server |
| No Live Server | Double-click the file, then F5 after each save |
| Fix messy indentation | Shift+Alt+F |
| See all HTML errors | Ctrl+Shift+M |
| Rename a tag pair | Edit the opening tag; linked editing changes the closing tag |
| Copy a line | Alt+Shift+↓ |

## Mistakes everyone makes

| You see... | Because... | Fix |
|---|---|---|
| The page does not change after you edit | You did not save (autosave is off) | Ctrl+S, every time |
| Emmet does nothing when you press Tab | The file is not saved as `.html`, or you typed a space inside the abbreviation | Save as `index.html` first; no spaces in `ul>li*3` |
| The tab says "Document" | You kept Emmet's default title (see D2-03 bug 2 tomorrow) | Write a real title |
| Live Server opens the wrong page or "Cannot GET" | You opened a parent folder or a single file | File → Open Folder → `W2D1` |
| No squiggles even on broken HTML | HTMLHint not installed, or you opened a file instead of the folder | Install HTMLHint; open the `W2D1` folder |
| Closing tag did not rename | Linked editing is off | Open the `W2D1` folder so its settings apply |
| Two copies of Chrome tabs pile up | Each "Open with Live Server" opens a new tab | Keep one tab; Live Server reloads it for you |

## Check yourself

1. Why do we open the **folder** `W2D1` and not a single file?
2. What does Live Server do when you press Ctrl+S?
3. Write the Emmet abbreviation for: a `nav` with 4 links inside.
4. What do `>` and `+` mean in Emmet? Give one example of each.
5. What will `.card>h2+p` produce? Write the HTML.
6. Which shortcut fixes indentation? Which one opens the Problems panel?
7. You have no Live Server in class. What do you do?
8. Explain Emmet to a friend using the phone speed-dial idea.

## Try it

- **D1-00 Setup check**: open `W2D1`, start Live Server, put your name in the `<h1>`, open F12.
- **D1-02 Emmet speed drill**: make `index.html` match `target.html` using the 6 required abbreviations
  (`!`, `h1+p`, `ul>li*5`, `nav>a*3`, `table>tr*3>td*2`, `.card>h2+p`) and the 2 bonus ones (`ul>li.item$*3`, `lorem20`).

## AI rule for this week

**Stage 1: AI as Tutor.** AI may explain; you type every line. Example prompt:

> "Explain what each symbol means in the Emmet abbreviation `table>tr*3>td*2`. Do not write the HTML for me."

---
*Remember the One Rule: you may only ship code you can explain, line by line.*
*Next: [03 · The HTML skeleton and anatomy](03-html-skeleton-and-anatomy.md).*
