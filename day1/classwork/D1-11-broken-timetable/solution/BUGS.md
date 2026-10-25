# D1-11 Broken Timetable — answer key (instructor)

Line = the line in the **starter** file.

| # | File | Line | Bug | Fix | Tag |
|---|---|---|---|---|---|
| 1 | index.html | 17 | The header row uses `<td>` instead of `<th>` | Use `<th scope="col">` for the six header cells | V |
| 2 | index.html | 19 | The 11:00 row has only 4 day cells (it needs 5) | Add the missing cell: `<td>Lab</td>` for Thursday | V |
| 3 | index.html | 20 | `colspam` typo on the Lunch row | Write `colspan="5"` | V |
| 4 | index.html | 22 | "Project lab" has `rowspan="2"`, but the 2:00 row still has its own Thursday cell | Delete the last `<td>Lab</td>` from the 2:00 row (the rowspan already fills it) | V |
| 5 | index.html | 23 | Text "Tea break 3:00" is written between two rows, outside any cell | Make it a row: `<tr><td>3:00</td><td colspan="5">Tea break</td></tr>` | V |

## How you could see each one

1. The header row is not bold and not centred.
2. The 11:00 row is one cell short: there is an empty gap under Thu.
3. "Lunch" fills only the Sun column; the rest of the row is empty.
4. An extra cell sticks out to the right of the table on the 2:00 row.
5. The browser moves stray text out of the table: "Tea break 3:00" shows **above** the table.
