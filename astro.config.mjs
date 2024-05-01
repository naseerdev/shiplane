import solidJs from "@astrojs/solid-js";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from 'astro/config';
import { SITE_DOMAIN } from './src/lib/utils/utils';


// https://astro.build/config
export default defineConfig({
  compressHTML: true,
  trailingSlash: "ignore",
  build: {
    assets: "_assets",
    inlineStylesheets: `always`
  },
  integrations: [solidJs(), tailwind()],
  site: SITE_DOMAIN
});