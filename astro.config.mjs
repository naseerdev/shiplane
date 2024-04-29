import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  compressHTML: true,
  integrations: [tailwind(), solidJs()],
  trailingSlash: "ignore",
  build: {
    assets: "_assets",
    inlineStylesheets: `always`,
  },
});