import { defineConfig } from "vite";

export default defineConfig(() => {
  return {
    build: {
      rollupOptions: {
        input: ["src/dark.css", "src/light.css", "src/water.css"],
        output: { assetFileNames: ({ name }) => name! },
      },
    },
  };
});
