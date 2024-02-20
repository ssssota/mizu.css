import { defineConfig } from "vite";

export default defineConfig(({ mode }) => {
  const minifyMode = mode === "minify";
  return {
    build: {
      rollupOptions: {
        input: [
          "src/dark.css",
          "src/light.css",
          "src/mizu.css",
          "src/core.css",
        ],
        output: {
          assetFileNames: ({ name }) => name!,
          dir: minifyMode ? "min" : "dist",
        },
      },
      cssMinify: minifyMode ? "lightningcss" : false,
    },
  };
});
