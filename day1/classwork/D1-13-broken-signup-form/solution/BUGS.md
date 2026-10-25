# D1-13 Broken Signup — answer key (instructor)

Line = the line in the **starter** file.

| # | File | Line | Bug | Fix | Tag |
|---|---|---|---|---|---|
| 1 | index.html | 14 | `<label for="fullname">`, but the input has `id="name"` | Make them match: `id="fullname"` | V |
| 2 | index.html | 22 | Phone uses `type="number"` | Use `type="tel"` | V |
| 3 | index.html | 26 | The two batch radios have different names (`batch1`, `batch2`) | Give both the same name: `name="batch"` | V |
| 4 | index.html | 26 | The radios have no `value` | Add `value="morning"` and `value="evening"` | D(URL) |
| 5 | index.html | 33 | `<textarea />` is self-closed | A textarea needs a real end tag: `<textarea …></textarea>` | V |
| 6 | index.html | 36 | The Sign up `<button>` is after `</form>` | Move the button inside the form, before `</form>` | V |

## How you could see each one

1. Click the words "Full name": the cursor does not jump into the box.
2. The box shows up/down arrows. Type 09841000000 and press the up arrow: it becomes 9841000001. The leading 0 is lost and the phone number is wrong.
3. You can tick Morning **and** Evening. Radios with one shared name let you pick only one.
4. Submit the form and read the URL: it says `batch=on`. The kitchen cannot tell which batch you chose.
5. The text box is full of code (`</p>`, `</form>` …) and the bottom of the page is gone. It swallowed the rest of the file.
6. Once the textarea is repaired, the button shows, but clicking it does nothing: it is not part of the form.
