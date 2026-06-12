import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig, loadEnv } from 'vite';
import { svelte, vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import tailwindcss from '@tailwindcss/vite';

const labRoot = fileURLToPath(new URL('.', import.meta.url));

function findRisuRoot(mode: string) {
  const env = loadEnv(mode, labRoot, '');
  const candidates = [
    env.RISUAI_PATH,
    '../Risuai',
    '../Risuai-feat-add-color-palettes',
    '../risuai',
  ]
    .filter(Boolean)
    .map((candidate) => path.resolve(labRoot, candidate as string));

  const risuRoot = candidates.find((candidate) => fs.existsSync(path.join(candidate, 'src', 'styles.css')));

  if (!risuRoot) {
    const shown = candidates.map((candidate) => `  - ${candidate}`).join('\n');
    throw new Error(
      `Could not find a RisuAI checkout. Set RISUAI_PATH in .env. Tried:\n${shown}`,
    );
  }

  return risuRoot;
}

export default defineConfig(({ mode }) => {
  const risuRoot = findRisuRoot(mode);

  return {
    root: labRoot,
    plugins: [
      svelte({
        preprocess: vitePreprocess(),
      }),
      tailwindcss(),
    ],
    resolve: {
      alias: {
        // Risu source files use absolute imports like `src/ts/stores.svelte`.
        // Keeping this alias makes imported Risu components behave like they do inside Risu.
        src: path.join(risuRoot, 'src'),
      },
    },
    server: {
      port: 5180,
      fs: {
        allow: [labRoot, risuRoot],
      },
    },
    preview: {
      port: 4180,
    },
    define: {
      __RISU_ROOT__: JSON.stringify(risuRoot),
    },
  };
});
