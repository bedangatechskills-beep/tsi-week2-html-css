# B5 · Selectors — demo steps

**When:** 1:44–2:06 (D2-08, D2-09 follow) · **Analogy:** **Calling students in class**: "everyone" (element), "red team" (.class), "Aarav, by name" (#id), "red team in row 2" (descendant)

Open `W2D2/instructor-demos/B5-selectors/` in VS Code and start Live Server on the step you are typing in. Each `step-NN-*` folder is the **finished state after step NN**. If the live typing goes wrong, open the next step folder and carry on.

## Step 01 · everyone (`step-01-element/`)

**In `css/style.css`, type:**

```css
/* Calling students in class */

/* "Everyone!" (element selector) */
li {
  color: #14213d;
  font-size: 1.25rem;
}
```

**Emmet:** —

**Point at:** Every `li` changes.

**Say this:** "An element selector calls everyone with that tag name."

## Step 02 · the red team, and Aarav by name (`step-02-class-id/`)

**In `css/style.css`, type:**

```css
/* "Red team!" (class selector) */
.red-team {
  color: #990011;
  font-weight: bold;
}

/* "Aarav, by name!" (id selector) */
#aarav {
  background-color: #ffe08a;
}
```

**Emmet:** —

**Point at:** In `index.html`: `class="red-team"` (many) vs `id="aarav"` (one). Dot for class, hash for id.

**Say this:** "Many students can wear the red-team shirt. Only one student is called Aarav."

## Step 03 · grouping, descendant, two classes (`step-03-group-descendant/`)

**In `css/style.css`, type:**

```css
/* "All headings!" (grouping) */
h1,
h2 {
  font-family: Georgia, serif;
}

/* "Red team in row 2!" (descendant) */
.row-2 .red-team {
  text-decoration: underline;
}

/* "Red team leader!" (two classes, no space) */
.red-team.leader {
  border: 2px solid #990011;
}
```

**Emmet:** —

**Point at:** Comma = "and also". Space = "inside". No space = "both on the same element". Then slide 29: id > class > element.

**Say this:** "Comma, space, no space: three tiny characters, three different meanings."

## Step 04 · hover (`step-04-hover/`)

**In `css/style.css`, type:**

```css
/* "When the mouse is on you" (pseudo-class) */
li:hover {
  background-color: #dfe3ea;
}
```

**Emmet:** —

**Point at:** Move the mouse over the names. F12 → Styles → :hov → tick :hover to freeze it.

**Say this:** "A pseudo-class calls you only when something is true: right now, the mouse is on you."

**Then:** **D2-08** 🐞 (8 min) + reveal, **D2-09** (5 min).
