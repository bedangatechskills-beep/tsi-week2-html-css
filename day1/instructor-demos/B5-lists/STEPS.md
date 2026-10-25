# B5 · Lists & nesting — demo steps

**Shopping list** (order doesn't matter → `ul`) vs **recipe steps** (order matters → `ol`). A nested list is a
**sub-list under one item**.

Each `step-NN` folder is the **finished state after step NN**. If the live demo breaks, open the next folder and carry on.

## Step 1 · ul vs ol

**Folder:** `step-01-ul-ol/`

**Emmet:** `ul>li*3` and `ol>li*3`

**Type exactly:**

```html
<h1>Momo night</h1>
<h2>Shopping list</h2>
<ul>
  <li>Flour</li>
  <li>Minced chicken</li>
  <li>Onion</li>
</ul>
<h2>Steps</h2>
<ol>
  <li>Make the dough.</li>
  <li>Make the filling.</li>
  <li>Fold and steam.</li>
</ol>
```

**Point at:** then add `type="A"` and `start="3"` to the `<ol>` for 10 seconds (letters, start at C), and remove them again.

> 🗣️ **Say this:** "Ask yourself one question: does the order matter? Shopping list: no, so ul. Recipe steps: yes, so ol."

## Step 2 · A list inside a list item

**Folder:** `step-02-nested/`

**Emmet:** `ul>li*3` inside the Spices item

**Type exactly:**

```html
<li>Spices
  <ul>
    <li>Ginger</li>
    <li>Garlic</li>
    <li>Cumin</li>
  </ul>
</li>
```

**Point at:** F12 → Elements: the inner `<ul>` sits **inside** the Spices `<li>`. The bullets change to circles.

> 🗣️ **Say this:** "The sub-list goes inside the li, before its closing tag. Spices is the parent; ginger, garlic and cumin are its children."

## Step 3 · dl, dt, dd: a glossary

**Folder:** `step-03-dl/`

**Emmet:** `dl>(dt+dd)*2`

**Type exactly:**

```html
<h2>Kitchen words</h2>
<dl>
  <dt>Achar</dt>
  <dd>A spicy tomato sauce.</dd>
  <dt>Jhol</dt>
  <dd>A thin, warm soup poured over momo.</dd>
</dl>
```

**Point at:** no bullets; the meaning is indented under the word.

> 🗣️ **Say this:** "A description list is a little dictionary: dt is the word, dd is what it means."
