import react from "@vitejs/plugin-react-swc";
import { componentTagger } from "lovable-tagger";
import { defineConfig } from "vite";

import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(
    Boolean
  ),
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          router: ["react-router-dom"],
        },
      },
    },
  },
  resolve: {
    alias: {
      "@": resolve(dirname(fileURLToPath(import.meta.url)), "./src"),
    },
  },
}));
