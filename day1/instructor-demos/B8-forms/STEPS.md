# B8 · Forms — demo steps

A form is **the order slip** on a restaurant table: boxes to fill, ticks, "choose one" circles. The `label` is the
printed word next to each box. `name` is **the column the kitchen files your answer under**. Every form today uses
`method="get"`, so we can **read the URL** after submitting.

Each `step-NN` folder is the **finished state after step NN**. If the live demo breaks, open the next folder and carry on.

## Step 1 · form, label ↔ input, text, email

**Folder:** `step-01-form-label-text-email/`

**Emmet:** `form` + Tab, then `label+input` + Tab

**Type exactly:**

```html
<p>
  <label for="name">Your name</label>
  <input type="text" id="name" name="name" required>
</p>
<p>
  <label for="email">Email</label>
  <input type="email" id="email" name="email">
</p>
```

**Point at:** click "Your name"; type an email without @ later and see the browser stop you (step 4).

> 🗣️ **Say this:** "The label's for must match the input's id. Click the word: the cursor jumps into the box. That is how you test it."

## Step 2 · radio and checkbox

**Folder:** `step-02-radio-checkbox/`

**Type exactly:**

```html
<p>Batch:</p>
<p>
  <input type="radio" id="morning" name="batch" value="morning">
  <label for="morning">Morning</label>
  <input type="radio" id="evening" name="batch" value="evening">
  <label for="evening">Evening</label>
</p>
<p>
  <input type="checkbox" id="achar" name="extras" value="achar">
  <label for="achar">Extra achar</label>
</p>
```

**Point at:** give the two radios different names for 5 seconds: both can be ticked (that is D1-13). Put it back.

> 🗣️ **Say this:** "Radios are choose-one circles: they share one name. Each has its own value: that value is what the kitchen receives."

## Step 3 · select/option and textarea

**Folder:** `step-03-select-textarea/`

**Emmet:** `select>option*2`

**Type exactly:**

```html
<p>
  <label for="momo">Which momo?</label>
  <select id="momo" name="momo">
    <option value="chicken">Chicken</option>
    <option value="veg">Veg</option>
  </select>
</p>
<p>
  <label for="notes">Notes</label><br>
  <textarea id="notes" name="notes" rows="3" cols="40"></textarea>
</p>
```

**Point at:** write `<textarea … />` for a moment: everything after it is swallowed into the box. Undo.

> 🗣️ **Say this:** "A select is a drop-down. Textarea is a big box for notes, and it needs a real closing tag: never write textarea slash."

## Step 4 · fieldset/legend, submit/reset, and READ THE URL

**Folder:** `step-04-fieldset-submit-read-url/`

**Type exactly:**

```html
<fieldset>
  <legend>Your batch</legend>
  <!-- the two radios move in here -->
</fieldset>
...
<button type="submit">Send order</button>
<button type="reset">Clear</button>
```

**Point at:** fill everything, click Send order. Read the URL aloud: `?name=Aarav&email=…&batch=evening&extras=achar&momo=veg&notes=…`. Then remove `name="email"` and submit again: the email is gone from the URL. The trick of the day.

> 🗣️ **Say this:** "Watch the address bar. Every box with a name arrives as name equals value. That is exactly what the kitchen, the server, receives."
