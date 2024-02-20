import { defineConfig } from "vite";

export default defineConfig(() => {
  return {
    build: {
      rollupOptions: {
        input: ["src/builds/dark.css", "src/builds/light.css"],
        output: { assetFileNames: ({ name }) => name! },
      },
    },
  };
});
