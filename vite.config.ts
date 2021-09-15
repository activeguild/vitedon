import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import Pages from "vite-plugin-pages";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh(),
    Pages({
      pagesDir: [{ dir: "src/pages", baseRoute: "" }],
      extensions: ["tsx"],
      react: true,
    }),
  ],
  server: {
    port: 8080,
  },
});
