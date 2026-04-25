# Website Building YT

## Project Overview
Landing page project for YouTube content, built with plain HTML/CSS/JS.

## Structure
- `brand_assets/` — Logo and brand guidelines images
- `temporary screenshots/` — Auto-generated screenshots via `screenshot.mjs`
- `index.html` — Main website file
- `serve.mjs` — Local dev server (port 3000)
- `screenshot.mjs` — Puppeteer script to capture section screenshots

## Commands
```bash
node serve.mjs       # Start local server at http://localhost:3000
node screenshot.mjs  # Take screenshots of all sections
```

## Notes
- No build step — pure HTML/CSS/JS
- Screenshots are taken at 1440×900 viewport
