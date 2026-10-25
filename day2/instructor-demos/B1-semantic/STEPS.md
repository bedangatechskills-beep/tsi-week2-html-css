# B1 · Semantic HTML5 layout — demo steps

**When:** 0:07–0:33 (D2-01, D2-02 follow) · **Analogy:** **Boxes / rooms with names** (kitchen, bedroom, not "room 1, room 2")

Open `W2D2/instructor-demos/B1-semantic/` in VS Code and start Live Server on the step you are typing in. Each `step-NN-*` folder is the **finished state after step NN**. If the live typing goes wrong, open the next step folder and carry on.

## Step 01 · div soup (`step-01-div-soup/`)

**In `index.html`, type:**

```html
    <div class="header">
      <h1>Momo House</h1>
    </div>
    <div class="nav">
      <a href="#menu">Menu</a> | <a href="#review">Review</a>
    </div>
    <div class="main">
      <div class="section" id="menu">
        <h2>Menu</h2>
        <p>Steam, fried and jhol momos from Rs. 150.</p>
      </div>
      <div class="article" id="review">
        <h2>Review: "The best jhol in Dillibazar"</h2>
        <p>Sunita says: "Soft, juicy and the achar is perfect."</p>
      </div>
    </div>
    <div class="aside">
      <h2>Opening hours</h2>
      <p>Every day, 10 am to 9 pm.</p>
    </div>
    <div class="footer">
      <p>&copy; 2026 Momo House</p>
    </div>
```

**Emmet:** `.header>h1` + Tab makes `<div class="header"><h1></h1></div>`

**Point at:** F12 → Elements: 7 × `div`. Nobody (Google, a screen reader, an AI tool) knows which box is which.

**Say this:** "This page works. But every room is called 'room'. A house plan like that is useless."

## Step 02 · rename the rooms (`step-02-semantic/`)

**In `index.html`, type:**

```html
<header> … </header>
<nav> … </nav>
<main>
  <section id="menu"> … </section>
  <article id="review"> … </article>
</main>
<aside> … </aside>
<footer> … </footer>
```

**Emmet:** none: use **linked editing**. Click in `div` of the opening tag, type `header`: the closing tag follows

**Point at:** The page looks exactly the same. F12 → Elements now shows the names. Then show slide 9 ("When NOT to use each tag").

**Say this:** "Same page, same look. Now the boxes have names. One main per page; a section needs a heading; nav is only for links; a button is a button."

**Then:** students do **D2-01** (7 min) and **D2-02** 🐞 (8 min) + 2-min reveal from `solution/BUGS.md`.
