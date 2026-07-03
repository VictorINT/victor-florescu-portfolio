import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

const repoName = "victor-florescu-portfolio";

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.GITHUB_ACTIONS === "true" ? `/${repoName}/` : "/",
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
