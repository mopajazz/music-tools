import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Served from /ear-trainer/ on the deployed site.
export default defineConfig({
  base: "/ear-trainer/",
  plugins: [react()],
  build: { outDir: "../dist/ear-trainer", emptyOutDir: true },
});
