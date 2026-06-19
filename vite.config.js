import vue from "@vitejs/plugin-vue";
import { access } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

import { createDevHtml } from "./scripts/build-utils.js";

const rootDir = fileURLToPath(new URL(".", import.meta.url));
const pagesDir = path.join(rootDir, "src", "pages");

export default defineConfig({
  plugins: [vue(), layoutPagesDevPlugin()],
  resolve: {
    alias: {
      "@": path.join(rootDir, "src"),
    },
  },
  publicDir: false,
  server: {
    host: "localhost",
    port: 3000,
  },
  build: {
    minify: false,
    cssMinify: false,
  },
  css: {
    preprocessorOptions: {
      scss: {
        silenceDeprecations: [
          "import",
          "color-functions",
          "global-builtin",
          "if-function",
        ],
      },
    },
  },
});

function layoutPagesDevPlugin() {
  return {
    name: "layout-pages-dev",
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const requestUrl = new URL(req.url || "/", "http://localhost");
        let pathname = decodeURIComponent(requestUrl.pathname);

        if (pathname === "/") {
          pathname = "/index.html";
        }

        if (!pathname.endsWith(".html")) {
          next();
          return;
        }

        const pageName = path.basename(pathname, ".html");
        if (!/^[a-zA-Z0-9_-]+$/.test(pageName)) {
          next();
          return;
        }

        try {
          await access(path.join(pagesDir, `${pageName}.vue`));
        } catch {
          next();
          return;
        }

        const html = await server.transformIndexHtml(
          pathname,
          createDevHtml({ pageName }),
        );

        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html; charset=utf-8");
        res.end(html);
      });
    },
  };
}
