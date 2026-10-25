# START HERE · W2D1

Do this **at home, before class** if you can. It takes 10 minutes. If you can't, the class has a fallback (step 5).

## 1. Unzip and open the folder

1. Unzip `W2D1-Student-Pack.zip`. You get a folder called **`W2D1`**. Put it somewhere easy, like `Documents\TSI\W2D1`.
2. Open **VS Code**.
3. Click **File → Open Folder…**, choose the **`W2D1`** folder, and click **Select Folder**.
   - Open the **folder**, not one file. Then links, pictures and the settings work.
   - VS Code may ask "Do you trust the authors?" Click **Yes, I trust the authors**.

## 2. Install two extensions

Click the **Extensions** icon on the left (four squares), or press **Ctrl+Shift+X**. Search and install:

| Extension | By | What it does |
|---|---|---|
| **Live Server** | Ritwick Dey | Opens your page in Chrome and reloads it every time you save |
| **HTMLHint** | HTMLHint | Your HTML spell-checker: squiggles under mistakes |

## 3. Check Live Server

1. In the Explorer (left), open `classwork/D1-00-setup-check/index.html`.
2. Right-click inside the code → **Open with Live Server**.
3. Chrome opens a page at an address like `http://127.0.0.1:5500/classwork/D1-00-setup-check/index.html`.
4. Change some text in VS Code. Press **Ctrl+S**. The page in Chrome changes by itself. ✅

## 4. Check HTMLHint

1. In `index.html`, delete the `>` at the end of `<h1>` for a moment.
2. A wavy line appears. Press **Ctrl+Shift+M**: the **Problems** panel lists the problem. ✅
3. Press **Ctrl+Z** to undo.

## 5. No Live Server? Use the fallback

You can still do everything today:

1. Open Windows Explorer and go to the exercise folder.
2. **Double-click** `index.html`. It opens in Chrome (the address starts with `file:///`).
3. After every save in VS Code, click Chrome and press **F5** to refresh.

Install Live Server at the first break. Don't let one install stop you.

## Troubleshooting

| Problem | Try this |
|---|---|
| No **Open with Live Server** in the right-click menu | Install Live Server (step 2). Then reload VS Code: Ctrl+Shift+P → "Reload Window". |
| Live Server opens the wrong page or a list of files | You opened a single file. Use **File → Open Folder** and open `W2D1`. |
| The page does not change when I save | Look at the file tab in VS Code. A white dot = not saved. Press **Ctrl+S**. |
| Port 5500 is busy | Click **Port: 5500** at the bottom of VS Code to stop it, then start again. |
| No squiggles at all | Install HTMLHint. Check that the bottom-right of VS Code says **HTML**, not Plain Text. |
| Pictures are broken in **every** exercise | You moved files out of their folders. Unzip the pack again. |
| Emmet `!` + Tab does nothing | The file must be saved as `.html`, and the bottom-right must say **HTML**. |
| Chrome opens Edge (or another browser) | Fine for today. Or set Chrome as the default browser in Windows Settings → Apps → Default apps. |

## Useful keys today

| Keys | What it does |
|---|---|
| Ctrl+S | save |
| Ctrl+Shift+M | Problems panel (HTMLHint) |
| F12 | Chrome DevTools (Elements, Network) |
| Ctrl+U | View Page Source in Chrome |
| Alt+Shift+↓ | copy the line down |
| Ctrl+/ | comment / uncomment |
| Shift+Alt+F | tidy (format) the file |
| Ctrl+D | select the next match |

Ready? Open `README.md` to see today's plan, then start with **D1-00**.
