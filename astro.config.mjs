// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://sns.build",
  // Netlify serves /about/ and 301s /about to it; matching that here keeps the
  // dev server honest and flags any link written without the slash.
  trailingSlash: "always",
  vite: {
    // @ts-ignore
    plugins: [tailwindcss()],
  },
});