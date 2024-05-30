/// <reference types="vitest" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { VitePWA } from "vite-plugin-pwa";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA()],
  base: "/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
