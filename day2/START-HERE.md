# START HERE · W2D2

## 1. Before class (at home)

Install these two VS Code extensions (Extensions panel, Ctrl+Shift+X):
- **Live Server** (by Ritwick Dey): opens your page in Chrome and reloads it every time you save.
- **HTMLHint**: underlines HTML mistakes, like a spell-checker.

You already have them if you did Day 1.

## 2. Open the folder

1. Unzip `W2D2-Student-Pack.zip`. You get a folder called **`W2D2`**.
2. In VS Code: **File → Open Folder…** → choose the **`W2D2`** folder → **Select Folder**.
   (Open the whole `W2D2` folder, not a single file. Then the settings in `.vscode/` and `.htmlhintrc` work.)
3. If VS Code asks "Do you trust the authors?", click **Yes**.

## 3. Open a page

- In the file list, right-click an exercise's `index.html` → **Open with Live Server**.
- Chrome opens at an address like `http://127.0.0.1:5500/classwork/D2-00-outfit-swap/index.html`.
- Edit, press **Ctrl+S**, and the page reloads by itself.

**No Live Server?** Double-click the `index.html` file in Windows Explorer. It opens in Chrome. After each save,
press **F5**. Install Live Server at the first break.

## 4. Your tools today

| Tool | How to open | What it shows |
|---|---|---|
| Problems panel | Ctrl+Shift+M in VS Code | HTMLHint mistakes in your HTML |
| Elements panel | F12 → **Elements** | The boxes the browser really built |
| Styles panel | F12 → Elements → click an element → **Styles** | Which CSS rules apply; crossed out = lost or dropped |
| Computed / box diagram | F12 → Elements → **Computed** | Content, padding, border, margin in pixels |
| Lighthouse | F12 → **Lighthouse** (click **>>** if hidden) → tick Accessibility → **Analyze page load** | Accessibility problems (works offline) |
| Tab walk | Click the page, then press **Tab** again and again | Which links, buttons and inputs a keyboard can reach |

## 5. Troubleshooting

| Problem | Try this |
|---|---|
| The page does not change when I save | Is Live Server running? Look for **Port: 5500** at the bottom right of VS Code. Did you save the right file? |
| My CSS does nothing | Check the `<link>`: `rel="stylesheet"` and the exact path, e.g. `css/style.css`. F12 → Console shows 404 for a wrong path. |
| An image or video does not show | File names must match exactly: same letters, same capitals, `-` vs `_`, `images/` vs `image/`. |
| No squiggles from HTMLHint | Did you open the **folder** `W2D2` (step 2)? Is the HTMLHint extension enabled? |
| The video does not play | Use Chrome. Click play: videos without `muted` never start by themselves. |
| Live Server opens the wrong page | Close the tab, right-click the right `index.html` → Open with Live Server. |

## 6. The One Rule

**You may only ship code you can explain, line by line.** The AI tutor may explain a concept or an error message.
You type every line yourself.
