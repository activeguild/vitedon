import { UserConfigExport } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import Pages from "vite-plugin-pages";
import devcert from "devcert";

// https://vitejs.dev/config/
export default async (): Promise<UserConfigExport> => {
  const { key, cert } = await devcert.certificateFor("localhost");

  return {
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
      https: {
        key,
        cert,
      },
    },
  };
};
