---
name: menkuitei-frontend
description: Conventions for editing the うまい めんくい亭 website in nuxt-app/ (Nuxt 3 SSG). Load this before writing or changing any CSS/Vue/styles/components/pages under nuxt-app/, adding UI, buttons, colors, spacing, tokens, breakpoints, news items, menu data, or running the build/deploy.
---

# menkuitei-frontend

Rules for working in `nuxt-app/` (the Nuxt 3 SSG rebuild of https://umai-menkuitei.com/).
Full detail: **`nuxt-app/STYLEGUIDE.md`** — open it before non-trivial CSS work.

## Non-negotiables

1. **No magic numbers.** Colors, spacing, font-size, radius, shadow, line-height, letter-spacing → always a token from `nuxt-app/assets/css/main.css` `:root` (`--color-*`, `--space-1..8`, `--fs-*`, `--radius-*`, `--shadow-*`, `--lh-*`, `--tracking-*`, `--fw-*`, `--on-dark*`, `--overlay-*`, `--text-*`). To change a value, edit `:root` only.
   - Allowed literals: `@media` px (use the documented `--bp-sm/md/lg` values 640/780/860 with a `/* --bp-* */` comment — `var()` doesn't work in media queries), viewport height caps `min(72vh,600px)`, grid `minmax(220px,1fr)` (+comment), one-off `max-height` (+comment), hamburger-icon geometry, `1px`/`2px` border widths, tiny `translateY(-2px)` transforms.

2. **Buttons: only `.btn` (filled amber) or `.btn--outline` (line).** On dark surfaces (red header, photo overlays) add `.btn--on-dark`. Never invent new button colors/shapes.

3. **Reuse `main.css` common classes** — `.container`, `.section(--warm/--brand)`, `.section-head*`/`.section-title`, `.block-title`, `.chip*`, `.data-table`, `.btn*`, `.emphasis`. Don't re-implement them per component.

4. **Content lives in `composables/`** — `useSiteInfo.ts` (shop/phone/map/**nav** — one array drives header + footer), `useNews.ts` (home shows `.slice(0,3)`, full list at `/news`), `useMenu.ts`. Never hard-code copy/prices/hours in templates.

5. **Images are not cropped.** Default `width:100%; height:auto` (ratio kept) or fixed frame + `object-fit: contain`. `cover` only for full-bleed hero / feature / quality-banner backgrounds.

6. **New page** → add its route to `nuxt.config.ts` `nitro.prerender.routes`, set `useHead` (title/description/canonical).

## Environment / build

- pnpm only (Volta, Node 20). `npm` fails here (`edgesOut`).
- `pnpm install` · `pnpm dev` · `pnpm generate` (→ `.output/public/`, fully static) · `pnpm preview`
- Keep `pnpm-workspace.yaml` `allowBuilds: esbuild: true`.

## Deploy

`pnpm generate` output in `.output/public/` is plain static files — deploy the **contents** of that folder to the web root of the rental server (FTP/SFTP), replacing the current HTML/CSS. URL structure (`/menu/`, `/quality/`, …) is unchanged. Never upload `node_modules/`, `.nuxt/`, or source. See `nuxt-app/DEPLOY.md`.

## After changes

1. `pnpm generate` succeeds.
2. `grep -rnE '#[0-9a-fA-F]{3}|rgba?\(|[0-9.]+rem' nuxt-app/components nuxt-app/pages nuxt-app/layouts | grep -v 'var(--'` → nothing outside `:root`.
3. `pnpm preview`: check `/ /news /menu /quality /information`, the menu filter, and mobile layout.
