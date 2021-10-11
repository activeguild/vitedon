import { UserConfigExport } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import Pages from "vite-plugin-pages";
import devcert from "devcert";
import checker from "vite-plugin-checker";
import Inspect from "vite-plugin-inspect";
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default async (): Promise<UserConfigExport> => {
  const { key, cert } = await devcert.certificateFor("localhost");

  return {
    build:{
    },
    plugins: [
      // react(),
      reactRefresh(),
      Pages({
        pagesDir: [{ dir: "src/pages", baseRoute: "" }],
        extensions: ["tsx"],
        react: true,
      }),
      // checker({ typescript: true }),
      Inspect(),
    ],
    server: {
      // port: 8080,
      https: {
        key,
        cert,
      },
    },
  };
};
