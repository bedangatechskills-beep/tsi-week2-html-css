# B8 · Display — demo steps

**When:** 3:03–3:19 (D2-14 follows) · **Analogy:** **The queue vs the bench** (block = queue, inline = bench, inline-block = bench but keeps own size, none = left the room)

Open `W2D2/instructor-demos/B8-display/` in VS Code and start Live Server on the step you are typing in. Each `step-NN-*` folder is the **finished state after step NN**. If the live typing goes wrong, open the next step folder and carry on.

## Step 01 · the queue and the bench (`step-01-block-inline/`)

**In `css/style.css`, type:**

```css
/* The queue vs the bench */
body {
  font-family: Arial, sans-serif;
}

.box {
  background-color: #14213d;
  color: white;
  padding: 8px;
  margin: 8px 0;
}

.seat {
  background-color: #990011;
  color: white;
  padding: 12px;
  margin-top: 30px;
  width: 200px;
}

.keeps-size {
  display: inline-block;
}

.gone {
  display: none;
}

.hidden {
  visibility: hidden;
}
```

**Emmet:** —

**Point at:** The inline seats ignore `width: 200px` and `margin-top: 30px`, and their padding overlaps the line above. The inline-block seats obey. Anjali is gone (no space); Didi is invisible but her space stays.

**Say this:** "On the bench you sit side by side, and nobody can push you up or down. Inline-block: still on the bench, but you keep your own size."

## Step 02 · a list becomes a menu bar (`step-02-horizontal-nav/`)

**In `css/style.css`, type:**

```css
.menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

.menu li {
  display: inline-block;
}

.menu a {
  display: inline-block;
  color: white;
  text-decoration: none;
  padding: 12px 16px;
}
```

**Emmet:** —

**Point at:** Type it in three moves: (1) `list-style: none` removes bullets, (2) `li` inline-block puts them side by side, (3) `a` inline-block makes the padding real (no overlap).

**Say this:** "Every menu bar on the web starts as a plain list."

**Then:** **D2-14** 🐞 (8 min) + reveal. **Flexbox** is the modern way: it comes in session 3.
