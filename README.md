# The Enchanted Archives ✦

A responsive, fantasy-movie-inspired landing page with a moonlit castle, floating magical particles, animated rings, interactive house cards, and a spell-casting effect.

> This is an original fantasy-inspired fan-style concept. It is not affiliated with, endorsed by, or an official part of the Harry Potter franchise. It uses original section names and CSS-created artwork rather than official movie assets.

## Files

- `index.html` — page structure and content
- `style.css` — layout, responsive styling, illustrations, and animations
- `script.js` — floating particles, reveal-on-scroll, mobile menu, house selection, and spell effects

## Run locally

1. Download and extract the ZIP.
2. Open the extracted `wizarding_world_website` folder.
3. Double-click `index.html` to open it in a browser.

For a local development server, open a terminal in the folder and run one of these:

```bash
# Python 3
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Customize

- Change page text in `index.html`.
- Change colors in the CSS variables at the top of `style.css`.
- Adjust particle frequency and spell messages in `script.js`.
- The page imports Cinzel and IM Fell English from Google Fonts. If offline, it falls back to system serif fonts.

## Publish with GitHub Pages

1. Create a GitHub repository, for example `enchanted-archives`.
2. Upload `index.html`, `style.css`, `script.js`, and `README.md` to the repository root.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/ (root)`, then save.
6. Wait for GitHub Pages to publish and open the displayed site URL.

## Accessibility notes

- Navigation has an accessible mobile toggle.
- Interactive status text uses `aria-live`.
- A reduced-motion media query limits animations for visitors who prefer less motion.
- House choices and spell effects work with standard buttons.

## License

Use and modify this starter project for learning and personal portfolio work. Replace or add any assets only when you have the right to use them.
