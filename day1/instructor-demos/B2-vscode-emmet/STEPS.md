# B2 · VS Code power tools + Emmet — demo steps

Emmet = **speed-dial for tags**. Kitchen: keep the knives within reach. Start from an empty `index.html` in a new
folder (or delete the contents of step-01's file).

Each `step-NN` folder is the **finished state after step NN**. If the live demo breaks, open the next folder and carry on.

## Step 1 · The skeleton in one key

**Folder:** `step-01-emmet-skeleton/`

**Emmet:** `!` then **Tab**

**Type exactly:**

```html
<!-- after ! + Tab, change only the title, then add: -->
<title>Momo House</title>
<h1>Momo House</h1>
```

**Point at:** `lang="en"`, `meta charset`, `meta viewport`, `<title>`; then **Open with Live Server** and save: the reload.

> 🗣️ **Say this:** "One exclamation mark, one Tab, and the whole skeleton is there. You still must know every line. Tomorrow you will type it from memory."

## Step 2 · Structures: `>`, `+`, `*`, `.`

**Folder:** `step-02-emmet-structures/`

**Emmet:** `p` · `ul>li*3` · `nav>a*3` · `.card>h2+p` (each followed by **Tab**)

**Type exactly:**

```html
<p>Fresh momo every day in Dillibazar.</p>
<ul>
  <li>Steam</li>
  <li>Fried</li>
  <li>Jhol</li>
</ul>
<nav>
  <a href="#">Home</a>
  <a href="#">Menu</a>
  <a href="#">Order</a>
</nav>
<div class="card">
  <h2>Today's special</h2>
  <p>Jhol momo with sesame soup.</p>
</div>
```

**Point at:** then show the shortcuts on these lines: **Alt+Shift+↓** (copy the Jhol line down), **Ctrl+/** (comment it), **Ctrl+D** (double-click `momo`, Ctrl+D selects the next `momo`, type `MOMO`, then Ctrl+Z), **Shift+Alt+F** (format), and **linked editing**: change `<ul>` to `<ol>` and watch `</ol>` change too. Change it back.

> 🗣️ **Say this:** "Greater-than means inside. Plus means next to. Star means repeat. Dot means a class. That is ninety percent of Emmet."
