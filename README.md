# max.impossible.rocks

Personal site of Maxim Derkachev. Plain HTML, CSS and JS, no build step. English and Spanish.

- `index.html`, `styles.css`, `main.js` — the page
- `assets/` — CV (PDF), self-hosted fonts, favicon

Deploy to Cloudflare (Workers static assets, custom domain `max.impossible.rocks`):

```sh
./deploy.sh
```

Requires `npx wrangler login` once.
