# B4 · CSS intro: rule anatomy, 3 ways to add CSS — demo steps

**When:** 1:20–1:44 (D2-06, D2-07 follow) · **Analogy:** **The outfit**: inline = sticky note on one shirt, internal = outfit list for one person, external = **school uniform**

Open `W2D2/instructor-demos/B4-css-intro/` in VS Code and start Live Server on the step you are typing in. Each `step-NN-*` folder is the **finished state after step NN**. If the live typing goes wrong, open the next step folder and carry on.

## Step 01 · inline: a sticky note (`step-01-inline/`)

**In `index.html`, type:**

```html
<h1 style="color: #990011;">Sunita Gurung</h1>
<p style="font-size: 18px;">Namaste! …</p>
```

**Emmet:** —

**Point at:** Only the first paragraph changed. The second one did not get a sticky note.

**Say this:** "A sticky note on one shirt. It works, but you would need a sticky note on every shirt."

## Step 02 · internal: an outfit list (`step-02-internal/`)

**In `index.html (inside <head>)`, type:**

```html
    <style>
      h1 {
        color: #990011;
      }

      p {
        font-size: 18px;
        color: #2a3f63;
      }
    </style>
```

**Emmet:** `style` + Tab

**Point at:** Both paragraphs change. Draw the rule on the board: `p` = selector (who), `{ font-size: 18px; }` = declaration (what): property + value.

**Say this:** "Selector says WHO, declaration says WHAT. One outfit list, but only for this one page."

## Step 03 · external: the school uniform (`step-03-external/`)

**In `index.html + css/style.css`, type:**

```html
<link rel="stylesheet" href="css/style.css">
```

**Emmet:** `link:css` + Tab

**Point at:** Open `css/style.css` (it has a second `h1` rule at the end). F12 → Elements → click h1 → Styles: the first `color` is crossed out. Click a value and edit it live.

**Say this:** "One file dresses every page that links to it: the school uniform. If two rules fight and are equal, the last one wins: the cascade."

**Then:** **D2-06** 🐞 (9 min, "fix the link first") + reveal, **D2-07** (4 min).
