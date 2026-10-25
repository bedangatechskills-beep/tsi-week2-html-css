# B10 · Bootstrap teaser (4 min, instructor only) — demo steps

**When:** 3:49–3:53 · **Analogy:** **IKEA for websites** (ready-made parts vs raw wood)

Open `W2D2/instructor-demos/B10-bootstrap/` in VS Code and start Live Server on the step you are typing in. Each `step-NN-*` folder is the **finished state after step NN**. If the live typing goes wrong, open the next step folder and carry on.

## Step 01 · raw wood (`step-01-plain/`)

**In `index.html`, type:**

```html
<!-- plain HTML, no CSS -->
```

**Emmet:** —

**Point at:** The browser's default look.

**Say this:** "This is raw wood. Today you learned to build furniture from it by hand."

## Step 02 · IKEA parts (`step-02-bootstrap/`)

**In `index.html`, type:**

```html
<link rel="stylesheet" href="css/bootstrap.min.css">
<div class="container py-4"> … </div>
<a href="#offer" class="btn btn-primary btn-lg">Get the offer</a>
<div class="card mt-4" id="offer">
  <div class="card-body"> … </div>
</div>
```

**Emmet:** `.container` + Tab, `a.btn.btn-primary` + Tab

**Point at:** Zero lines of our own CSS. Open `bootstrap.min.css` for one second: thousands of rules someone else wrote. It is a local file, so it works offline.

**Say this:** "IKEA: fast, looks fine, but every flat looks a bit the same, and you still need CSS to change it. Try it in D2-FF6 or at home."

**Then:** the 10-question quiz (5 min) and homework + exit ticket (2 min).
