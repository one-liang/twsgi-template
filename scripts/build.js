import { build } from "vite";
import vue from "@vitejs/plugin-vue";
import fs from "fs-extra";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

import {
  createPageHtml,
  discoverComponentScripts,
  discoverPages,
  extractPageScript,
  initAssetBasenameMap,
  stripScopedCssMarkers,
  validateAssetImports,
} from "./build-utils.js";

const rootDir = fileURLToPath(new URL("../", import.meta.url));
const srcDir = path.join(rootDir, "src");
const pagesDir = path.join(srcDir, "pages");
const componentsDir = path.join(srcDir, "components");
const sourceAssetsDir = path.join(srcDir, "assets");
const distDir = path.join(rootDir, "dist");
const tempDir = path.join(rootDir, ".layout-build");
const distCssDir = path.join(distDir, "assets", "css");
const distJsDir = path.join(distDir, "assets", "js");

await buildProject();

async function buildProject() {
  await validateAssetImports({ srcDir });

  const pages = await discoverPages(pagesDir);

  await fs.emptyDir(distDir);
  await fs.remove(tempDir);
  await fs.ensureDir(distCssDir);
  await fs.ensureDir(distJsDir);

  await copySourceAssets();
  await initAssetBasenameMap(sourceAssetsDir);

  const cssFiles = [];
  cssFiles.push(...(await buildGlobalStyles()));

  for (const page of pages) {
    cssFiles.push(...(await buildPageStyles(page)));

    const componentScripts = await writeComponentScripts(page);
    const appHtml = await renderPageHtml(page);
    await fs.writeFile(
      path.join(distDir, page.htmlFileName),
      createPageHtml({
        pageName: page.name,
        appHtml,
        componentScripts,
        includeSwiper: page.name === "index",
        includeAOS: page.name === "index",
      }),
      "utf8",
    );
    await writePageScript(page);
  }

  await writeMergedCss(cssFiles);
  await fs.remove(tempDir);
}

async function copySourceAssets() {
  if (!(await fs.pathExists(sourceAssetsDir))) {
    return;
  }

  const entries = await fs.readdir(sourceAssetsDir, { withFileTypes: true });
  await Promise.all(
    entries.map(async (entry) => {
      if (entry.name === "scss") {
        return;
      }

      await fs.copy(
        path.join(sourceAssetsDir, entry.name),
        path.join(distDir, "assets", entry.name),
      );
    }),
  );
}

async function buildGlobalStyles() {
  const entryDir = path.join(tempDir, "entries");
  const styleEntry = path.join(entryDir, "styles.js");
  await fs.ensureDir(entryDir);
  await fs.writeFile(
    styleEntry,
    `import ${JSON.stringify(relativeImport(entryDir, path.join(srcDir, "assets", "scss", "main.scss")))};\n`,
    "utf8",
  );

  const outDir = path.join(tempDir, "styles");
  await runViteBuild({
    outDir,
    lib: {
      entry: styleEntry,
      name: "LayoutStyles",
      formats: ["iife"],
      fileName: () => "styles.js",
    },
  });

  return findFiles(outDir, ".css");
}

async function buildPageStyles(page) {
  const entryDir = path.join(tempDir, "page-styles");
  const styleEntry = path.join(entryDir, `${page.name}.js`);
  await fs.ensureDir(entryDir);
  await fs.writeFile(
    styleEntry,
    [
      `import Page from ${JSON.stringify(relativeImport(entryDir, page.sourcePath))};`,
      "void Page;",
      "",
    ].join("\n"),
    "utf8",
  );

  const outDir = path.join(tempDir, "page-styles-out", page.name);
  await runViteBuild({
    outDir,
    lib: {
      entry: styleEntry,
      name: `PageStyles${page.name.replace(/[^a-zA-Z0-9_$]/g, "_")}`,
      formats: ["iife"],
      fileName: () => "styles.js",
    },
  });

  return findFiles(outDir, ".css");
}

async function writePageScript(page) {
  const source = await fs.readFile(page.sourcePath, "utf8");
  await fs.writeFile(
    path.join(distJsDir, page.jsFileName),
    await extractPageScript(source),
    "utf8",
  );
}

async function writeComponentScripts(page) {
  const components = await discoverComponentScripts(
    page.sourcePath,
    componentsDir,
  );
  const scriptFileNames = [];

  for (const component of components) {
    const source = await fs.readFile(component.sourcePath, "utf8");
    const script = await extractPageScript(source);
    if (!script.trim()) {
      continue;
    }

    const targetPath = path.join(distJsDir, component.jsFileName);
    await fs.ensureDir(path.dirname(targetPath));
    await fs.writeFile(targetPath, script, "utf8");
    scriptFileNames.push(component.jsFileName.replace(/\\/g, "/"));
  }

  return scriptFileNames;
}

async function renderPageHtml(page) {
  const entryDir = path.join(tempDir, "ssr");
  const ssrEntry = path.join(entryDir, `${page.name}.js`);
  await fs.ensureDir(entryDir);
  await fs.writeFile(
    ssrEntry,
    [
      "import { createSSRApp } from 'vue';",
      "import { renderToString } from '@vue/server-renderer';",
      `import Page from ${JSON.stringify(relativeImport(entryDir, page.sourcePath))};`,
      `import { installApp } from ${JSON.stringify(relativeImport(entryDir, path.join(srcDir, "runtime", "install-app.js")))};`,
      "",
      "export async function render() {",
      "  const app = createSSRApp(Page);",
      "  installApp(app);",
      "  return renderToString(app);",
      "}",
      "",
    ].join("\n"),
    "utf8",
  );

  const outDir = path.join(tempDir, "ssr-out", page.name);
  await build({
    configFile: false,
    root: rootDir,
    base: "./",
    publicDir: false,
    plugins: [vue()],
    logLevel: "error",
    define: browserDefines(),
    resolve: viteResolveOptions(),
    css: sassOptions(),
    build: {
      ssr: ssrEntry,
      outDir,
      emptyOutDir: true,
      emitAssets: false,
      ssrEmitAssets: false,
      assetsInlineLimit: 0,
      minify: false,
      cssMinify: false,
      rollupOptions: {
        output: {
          entryFileNames: "server.mjs",
          format: "esm",
        },
      },
    },
  });

  const serverModule = await import(
    `${pathToFileURL(path.join(outDir, "server.mjs")).href}?t=${Date.now()}`
  );
  return serverModule.render();
}

async function runViteBuild({ outDir, lib }) {
  await build({
    configFile: false,
    root: rootDir,
    base: "./",
    publicDir: false,
    plugins: [vue()],
    logLevel: "error",
    define: browserDefines(),
    resolve: viteResolveOptions(),
    css: sassOptions(),
    build: {
      outDir,
      emptyOutDir: true,
      minify: false,
      cssMinify: false,
      cssCodeSplit: false,
      assetsInlineLimit: 0,
      lib,
      rollupOptions: {
        output: {
          assetFileNames: "[name][extname]",
          minify: false,
        },
      },
    },
  });
}

async function writeMergedCss(cssFiles) {
  const chunks = [];
  const seen = new Set();

  for (const file of cssFiles) {
    const content = await fs.readFile(file, "utf8");
    if (!content.trim() || seen.has(content)) {
      continue;
    }

    seen.add(content);
    chunks.push(
      `/* ${path.relative(rootDir, file).replace(/\\/g, "/")} */\n${stripScopedCssMarkers(content.trim())}`,
    );
  }

  await fs.writeFile(
    path.join(distCssDir, "index.css"),
    `${chunks.join("\n\n")}\n`,
    "utf8",
  );
}

async function findFiles(dir, extension) {
  if (!(await fs.pathExists(dir))) {
    return [];
  }

  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const absolutePath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        return findFiles(absolutePath, extension);
      }
      return entry.isFile() && entry.name.endsWith(extension)
        ? [absolutePath]
        : [];
    }),
  );

  return files.flat().sort();
}

function relativeImport(fromDir, toFile) {
  let relativePath = path.relative(fromDir, toFile).replace(/\\/g, "/");
  if (!relativePath.startsWith(".")) {
    relativePath = `./${relativePath}`;
  }
  return relativePath;
}

function sassOptions() {
  return {
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
  };
}

function viteResolveOptions() {
  return {
    alias: {
      "@": srcDir,
    },
  };
}

function browserDefines() {
  return {
    "process.env.NODE_ENV": JSON.stringify("production"),
    __VUE_OPTIONS_API__: JSON.stringify(true),
    __VUE_PROD_DEVTOOLS__: JSON.stringify(false),
    __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: JSON.stringify(false),
  };
}
