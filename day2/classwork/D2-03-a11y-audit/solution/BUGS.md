# D2-03 A11y audit: TSI Admissions — answer key (BUGS.md)

Page: "TSI Admissions". Each bug counts once (bug 5 is one bug in three places).

Line = the line in the **starter** file. Tags: V = see it · D(HH) = HTMLHint · D(F12) = Elements panel · D(LH) = Lighthouse · D(W3C) = W3C validator · R = rule check.

| # | File | Line | Bug | Fix | Tag |
|---|---|---|---|---|---|
| 1 | `index.html` | 2 | `<html>` has no `lang`. A screen reader does not know which language to speak. | `<html lang="en">` | D(LH) / D(HH) |
| 2 | `index.html` | 6 | `<title>Document</title>` is the Emmet default. It tells nobody what the page is (tab, bookmark, Google result). | `<title>TSI Admissions · Tech Skills Institute, Kathmandu</title>` | R |
| 3 | `index.html` | 22 | The TSI building photo has no `alt`. A blind visitor hears only "image" (or the file name). | Add a meaningful alt: `alt="The TSI building in Dillibazar: …"` | D(LH) / D(HH) |
| 4 | `index.html` | 15 | The decorative dhaka strip has a long alt. A screen reader reads all of it, and it means nothing. | Decoration gets an **empty** alt: `alt=""` | R |
| 5 | `index.html` | 24, 43, 55 | Three links say "click here" (one bug, three places). Link text must say where it goes. | "See the course fees" · "Go to the application form" · "Read about our campus" | R |
| 6 | `index.html` | 52 | The phone input has only a placeholder and no `<label>`. The hint disappears as soon as you type, and clicking the text does not focus the box. | Add `<label for="phone">Phone number</label>` before the input. | V |

**Where Lighthouse shows them** (F12 → Lighthouse → tick Accessibility only → Analyze page load):
- Bug 1 → Accessibility: "`<html>` element does not have a `[lang]` attribute".
- Bug 3 → Accessibility: "Image elements do not have `[alt]` attributes".
- Bugs 2, 4 and 5 are rule checks (R): read the code. (Lighthouse's "link text" check skips links to `#` on the same page,
  so it does not catch these "click here" links. On a link to another page it would.)
- Bug 6 is V: click the words "Phone number" (nothing happens) and type in the box (the hint disappears).
  Lighthouse accepts a placeholder as a label, so it stays quiet: a good reason not to trust one tool only.

**Reveal tip:** turn on Narrator (Ctrl+Win+Enter) and Tab through the starter, then through the solution.
