# B4 · Text = tone of voice + entities — demo steps

Text tags are your **tone of voice**: strong = "this matters", em = a stressed word, br = a pause in one thought,
blockquote = quoting someone else. Entities are **escape codes**. Start from the skeleton (`!` + Tab).

Each `step-NN` folder is the **finished state after step NN**. If the live demo breaks, open the next folder and carry on.

## Step 1 · Headings are an outline

**Folder:** `step-01-headings/`

**Emmet:** `h1+h2+p+h3+p+h3+p`

**Type exactly:**

```html
<h1>TSI Canteen News</h1>
<h2>This week</h2>
<p>Didi has a new recipe.</p>
<h3>Monday</h3>
<p>Jhol momo day.</p>
<h3>Thursday</h3>
<p>Sel roti and milk tea.</p>
```

**Point at:** the sizes: h1 > h2 > h3. Then F12 → Elements and collapse/expand: the outline.

> 🗣️ **Say this:** "One h1 per page, like the title of a book. Then h2 for chapters, h3 for parts of a chapter. Never skip a level."

## Step 2 · strong, em, br, hr

**Folder:** `step-02-strong-em-br-hr/`

**Type exactly:**

```html
<h2>Didi's rules</h2>
<p><strong>Wash your plate</strong> after lunch.</p>
<p>I said <em>one</em> plate each, not two.</p>
<p>Canteen, TSI building<br>Dillibazar, Kathmandu</p>
<hr>
```

**Point at:** `<br>` and `<hr>` have no closing tag: they are void tags. Mention `<b>`/`<i>` = looks only, no meaning.

> 🗣️ **Say this:** "Strong is not just bold: it means this matters. Em is the word you stress when you speak. Read it aloud: I said ONE plate."

## Step 3 · blockquote, q, span

**Folder:** `step-03-blockquote-q-span/`

**Type exactly:**

```html
<p>Didi says:</p>
<blockquote>
  <p>Good food takes time.</p>
</blockquote>
<p>Aarav asked, <q>Is there chicken momo today?</q> The answer was <span>yes</span>.</p>
```

**Point at:** the quote marks that `<q>` adds by itself. `<span>` changes nothing yet: it is an empty label for CSS tomorrow.

> 🗣️ **Say this:** "Blockquote is a long quote from someone else: it gets its own block. Q is a short quote inside a sentence: the browser adds the quote marks."

## Step 4 · Entities (escape codes)

**Folder:** `step-04-entities/`

**Type exactly:**

```html
<h2>From the web class</h2>
<p>Wrap text in &lt;p&gt; and &lt;/p&gt; tags.</p>
<p>Momo &amp; milk tea: Rs.&nbsp;170</p>
<p>&copy; 2026 TSI Canteen</p>
```

**Point at:** first type `Wrap text in <p> tags.` raw: the `<p>` vanishes. Then replace it with `&lt;p&gt;`. Make the window narrow: `Rs.&nbsp;170` never splits.

> 🗣️ **Say this:** "If I type a less-than sign, the browser thinks a tag is starting. Ampersand-l-t-semicolon means: print a less-than, don't start a tag."
