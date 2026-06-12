# Risu Component Lab

A small Vite + Svelte lab for testing Risu UI components outside the Risu app.

It is designed as a separate repository. The lab imports real components from a local Risu checkout, then applies `--risu-theme-*` variables so you can quickly check theme, hover, focus, border, and contrast behavior.

## What this is for

- Testing palette changes without opening the full Risu app
- Checking whether a UI element follows theme variables or still has hard-coded colors
- Comparing dark, light, and high-contrast palettes
- Smoke-testing mobile/narrow widths

## Folder expectation

Recommended sibling layout:

```txt
workspace/
  Risuai/
  risu-component-lab/
```

If your Risu checkout has a different path, create `.env`:

```bash
cp .env.example .env
```

Then edit it:

```env
RISUAI_PATH=/absolute/path/to/Risuai
```

Relative paths also work:

```env
RISUAI_PATH=../Risuai-feat-add-color-palettes
```

## Install

```bash
pnpm install
```

## Run

```bash
pnpm dev
```

Open the printed local URL, usually:

```txt
http://127.0.0.1:5180
```

## Scripts

```bash
pnpm dev        # start the lab
pnpm dev:open   # start and open browser
pnpm check      # svelte-check
pnpm build      # production build smoke test
```

## How it imports Risu components

`vite.config.ts` maps the alias `src` to the configured Risu checkout:

```ts
resolve: {
  alias: {
    src: path.join(risuRoot, 'src'),
  },
}
```

This is important because Risu components themselves use imports like:

```ts
import { DBState } from 'src/ts/stores.svelte';
```

So the lab keeps the same alias shape as Risu.

## Type checking note

`pnpm dev` uses `RISUAI_PATH` from `.env`. `pnpm check` uses TypeScript `paths` from `tsconfig.json`, so it works best when Risu is a sibling folder named `Risuai` or `Risuai-feat-add-color-palettes`. If your checkout lives elsewhere and `pnpm dev` works but `pnpm check` cannot resolve `src/...`, add your local Risu `src` path to `compilerOptions.paths`.

## Current included cases

- `TextInput`
- `CheckInput`
- `NewGUI/Button`
- direct theme variable swatches
- generated palette scales
- manual Tailwind utility smoke tests
- stage color replacement candidates for places like `DefaultChatScreen` and `AlertComp`

## Notes

This lab intentionally avoids booting Risu's DB or app runtime. For components that depend heavily on `DBState`, translations, modals, or app stores, add a small wrapper case first and mock only the minimum state needed.

The high-contrast theme is intentionally loud. It is useful because hard-coded colors stand out quickly when the rest of the UI changes.
