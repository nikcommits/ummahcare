// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://nikcommits.github.io',
  base: '/ummahcare',
  output: 'static',

  vite: {
    plugins: [tailwindcss()],
  },
});
