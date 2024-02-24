import { defineConfig } from "vite";

const assetFileNames = (c: { name?: string }) => c.name!;
const input = ["src/dark.css", "src/light.css", "src/mizu.css", "src/core.css"];

export default defineConfig(({ mode }) => {
  switch (mode) {
    case "minify":
      return {
        build: {
          rollupOptions: { input, output: { assetFileNames, dir: "min" } },
          cssMinify: "lightningcss",
          copyPublicDir: false,
        },
      };
    case "normal":
      return {
        build: {
          rollupOptions: { input, output: { assetFileNames, dir: "dist" } },
          copyPublicDir: false,
        },
      };
  }
  return {
    base: "./",
    build: {
      outDir: "build",
    },
  };
});
