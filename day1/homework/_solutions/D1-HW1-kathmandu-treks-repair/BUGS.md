# D1-HW1 Kathmandu Treks repair — answer key (instructor)

Line = the line in the **starter** file.

| # | File | Line | Bug | Fix | Tag |
|---|---|---|---|---|---|
| 1 | index.html | 6 | `<title>` is never closed | Add `</title>` | V + D(HH) tag-pair |
| 2 | index.html | 12 | `Everest.svg` with a capital E, but the file is `everest.svg` | Write `src="images/everest.svg"` | H |
| 3 | index.html | 9 | Link `href="treks"` is missing `.html` | Write `href="treks.html"` | V |
| 4 | index.html | 15 | The nested `<ul>` is outside its parent `<li>` | Move `</li>` to after the inner `</ul>` | D(F12) |
| 5 | treks.html | 17 | The header row uses `<td>` | Use `<th>` for the header cells | V |
| 6 | treks.html | 19 | A leftover cell under the `rowspan="2"` season cell | Delete the extra season cell from the Gokyo Lakes row | V |
| 7 | treks.html | 31 | `#form`, but the form is `id="booking-form"` | Write `href="booking.html#booking-form"` | V |
| 8 | booking.html | 25 | Label `for="name"`, but the input is `id="fullname"` | Write `for="fullname"` | V |
| 9 | booking.html | 30 | Phone uses `type="number"` | Use `type="tel"` | V |
| 10 | booking.html | 34 | Start date uses `type="text"` | Use `type="date"` | V |
| 11 | booking.html | 38 | The trek radios have different names | Give all three `name="trek"` | V |
| 12 | booking.html | 46 | "Book now" is a `type="reset"` button | Use `type="submit"` | V |

## How you could see each one

1. The whole page is **blank**, and the tab shows a long line of code. The title swallowed the rest of the file.
2. On Windows the picture still shows. On a Linux web server (most of the internet) it is broken: file names are case-sensitive there.
3. Click "Our treks" on the Home page: 404.
4. It looks almost right. F12 → Elements shows the inner list is not inside "Everest region".
5. The header row is not bold.
6. An extra cell sticks out to the right on the Gokyo Lakes row.
7. The link opens the booking page at the top, not at the form.
8. Click "Full name": the cursor does not jump into the box.
9. Up/down arrows appear in the phone box.
10. No calendar picker. People type dates in many different ways.
11. You can tick all three treks.
12. Fill the form and click Book now: everything is wiped, nothing is sent.
