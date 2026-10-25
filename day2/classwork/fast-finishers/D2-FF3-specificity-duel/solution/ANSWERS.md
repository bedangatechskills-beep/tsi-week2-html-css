# D2-FF3 · Specificity duel — answers

Score: id = (1,0,0) · class / pseudo-class = (0,1,0) · element = (0,0,1). Compare from the left. A tie → the rule
written **later** wins. An inline `style=""` beats every selector. A rule that targets the element beats any colour it
would inherit from its parent.

| # | Element | Rules in the fight | Winner | Colour | Why |
|---|---|---|---|---|---|
| 1 | `<p class="note">` | `p` (0,0,1) vs `.note` (0,1,0) | `.note` | **green** | class beats element |
| 2 | `<p class="note" id="p2">` | `p`, `.note` vs `#p2` (1,0,0) | `#p2` | **red** | id beats class |
| 3 | `<p class="twice">` | `.twice` vs `.twice` (both 0,1,0) | the second `.twice` | **purple** | a tie: the later rule wins |
| 4 | `<p class="p4">` inside a div | `.p4` (0,1,0) vs `div p` (0,0,2) | `.p4` | **teal** | one class beats two elements, even though `div p` is written later |
| 5 | `<p class="a b">` | `.a.b` (0,2,0) vs `.b` (0,1,0) | `.a.b` | **crimson** | two classes beat one, even though `.b` is later |
| 6 | `<p id="p6" style="color: navy;">` | `#p6` vs inline style | inline | **navy** | an inline style beats every selector (that is why we avoid inline styles) |
| 7 | `<span>` inside `<p class="parent">` | inherited red vs `span` (0,0,1) | `span` | **green** | a rule that targets the span beats a colour inherited from the parent |
| 8 | `<h2 class="title big">` inside `#duel` | `#duel h2` (1,0,1) vs `.title.big` (0,2,0) | `#duel h2` | **maroon** | one id beats any number of classes |

**Check in DevTools:** F12 → Elements → click the element. In Styles, the winning declaration is at the top and the
losers are ~~crossed out~~ below it.
