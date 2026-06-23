import { access, readFile, readdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const assetExtensions = new Set([
  ".avif",
  ".gif",
  ".ico",
  ".jpg",
  ".jpeg",
  ".png",
  ".svg",
  ".webp",
]);

const HASHED_ASSET_PATTERN =
  /(\s(?:src|href)=["'])\.\/assets\/([\w.-]+)-([A-Za-z0-9_-]{8})(\.\w+)(["'])/g;
const ASSET_IMPORT_PATTERN = /from\s+['"]@\/assets\/([^'"]+)['"]/g;

let assetBasenameMap = new Map();

const voidTags = new Set([
  "area",
  "base",
  "br",
  "col",
  "embed",
  "hr",
  "img",
  "input",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr",
]);

export const BOOTSTRAP_CDN_CSS =
  "https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css";
export const BOOTSTRAP_CDN_JS =
  "https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js";
export const NOTO_SANS_TC_CDN =
  "https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500&display=swap";
export const POPPINS_CDN =
  "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap";
export const FONT_AWESOME_KIT = "https://kit.fontawesome.com/9ef14e7135.css";
export const SWIPER_CDN_CSS =
  "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css";
export const SWIPER_CDN_JS =
  "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js";
export const AOS_CDN_CSS =
  "https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.css";
export const AOS_CDN_JS = "https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js";

export const SWIPER_PAGES = new Set(["index", "awardDetail"]);

export async function discoverPages(pagesDir) {
  const dirPath = pagesDir instanceof URL ? fileURLToPath(pagesDir) : pagesDir;
  const entries = await readdir(dirPath, { withFileTypes: true });

  return entries
    .filter((entry) => entry.isFile())
    .filter((entry) => entry.name.endsWith(".vue"))
    .filter((entry) => /^[a-zA-Z0-9_-]+\.vue$/.test(entry.name))
    .filter((entry) => !entry.name.startsWith("_"))
    .map((entry) => {
      const name = path.basename(entry.name, ".vue");

      return {
        name,
        sourcePath: path.join(dirPath, entry.name),
        htmlFileName: pageFileName(name),
        jsFileName: `${name}.js`,
      };
    })
    .sort((left, right) => left.name.localeCompare(right.name));
}

export function pageFileName(pageName) {
  return `${pageName}.html`;
}

export function pageTitle(pageName) {
  return pageName
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

export function normalizeAssetPath(assetPath, mode = "build") {
  const cleanPath = assetPath
    .replace(/\\/g, "/")
    .replace(/^\.?\//, "")
    .replace(/^\/+/, "")
    .replace(/^src\/assets\//, "")
    .replace(/^assets\//, "");

  return mode === "dev" ? `/src/assets/${cleanPath}` : `./assets/${cleanPath}`;
}

export function createPageHtml({
  pageName,
  appHtml = "",
  componentScripts = [],
  includeSwiper = false,
  includeAOS = false,
}) {
  const title = escapeHtml(pageTitle(pageName));
  const formattedAppHtml = indentBlock(
    formatHtml(cleanRenderedHtml(appHtml)),
    2,
  );
  const scriptTags = [
    `  <script src="${BOOTSTRAP_CDN_JS}"></script>`,
    ...(includeSwiper ? [`  <script src="${SWIPER_CDN_JS}"></script>`] : []),
    ...(includeAOS ? [`  <script src="${AOS_CDN_JS}"></script>`] : []),
    ...componentScripts.map(
      (scriptFileName) =>
        `  <script src="./assets/js/${scriptFileName}"></script>`,
    ),
    `  <script src="./assets/js/${pageName}.js"></script>`,
  ];
  const swiperCssTag = includeSwiper
    ? `  <link rel="stylesheet" href="${SWIPER_CDN_CSS}">`
    : null;
  const aosCssTag = includeAOS
    ? `  <link rel="stylesheet" href="${AOS_CDN_CSS}">`
    : null;

  return [
    "<!doctype html>",
    '<html lang="zh-Hant">',
    "<head>",
    '  <meta charset="UTF-8">',
    '  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">',
    `  <title>${title}</title>`,
    '  <link rel="icon" href="./assets/favicon.ico">',
    "  <!-- 中文字體：Noto Sans TC -->",
    '  <link rel="preconnect" href="https://fonts.googleapis.com">',
    '  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>',
    `  <link rel="stylesheet" href="${NOTO_SANS_TC_CDN}">`,
    "  <!-- 英文、數字字體：Poppins -->",
    `  <link rel="stylesheet" href="${POPPINS_CDN}">`,
    `  <link rel="stylesheet" href="${FONT_AWESOME_KIT}">`,
    ...(swiperCssTag ? [swiperCssTag] : []),
    ...(aosCssTag ? [aosCssTag] : []),
    '  <link rel="stylesheet" href="./assets/css/index.css">',
    "</head>",
    "<body>",
    formattedAppHtml,
    ...scriptTags,
    "</body>",
    "</html>",
    "",
  ].join("\n");
}

export function createDevHtml({ pageName }) {
  const title = escapeHtml(pageTitle(pageName));
  const includeSwiper = SWIPER_PAGES.has(pageName);
  const includeAOS = pageName === "index";
  const swiperCssTag = includeSwiper
    ? `  <link rel="stylesheet" href="${SWIPER_CDN_CSS}">`
    : null;
  const swiperJsTag = includeSwiper
    ? `  <script src="${SWIPER_CDN_JS}"></script>`
    : null;
  const aosCssTag = includeAOS
    ? `  <link rel="stylesheet" href="${AOS_CDN_CSS}">`
    : null;
  const aosJsTag = includeAOS
    ? `  <script src="${AOS_CDN_JS}"></script>`
    : null;

  return [
    "<!doctype html>",
    '<html lang="zh-Hant">',
    "<head>",
    '  <meta charset="UTF-8">',
    '  <meta name="viewport" content="width=device-width, initial-scale=1.0">',
    `  <title>${title}</title>`,
    '  <link rel="icon" href="/src/assets/favicon.ico">',
    "  <!-- 中文字體：Noto Sans TC -->",
    '  <link rel="preconnect" href="https://fonts.googleapis.com">',
    '  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>',
    `  <link rel="stylesheet" href="${NOTO_SANS_TC_CDN}">`,
    "  <!-- 英文、數字字體：Poppins -->",
    `  <link rel="stylesheet" href="${POPPINS_CDN}">`,
    `  <link rel="stylesheet" href="${FONT_AWESOME_KIT}">`,
    ...(swiperCssTag ? [swiperCssTag] : []),
    ...(aosCssTag ? [aosCssTag] : []),
    "</head>",
    "<body>",
    '  <div id="app"></div>',
    `  <script src="${BOOTSTRAP_CDN_JS}"></script>`,
    ...(swiperJsTag ? [swiperJsTag] : []),
    ...(aosJsTag ? [aosJsTag] : []),
    `  <script type="module" src="/src/dev-entry.js?page=${encodeURIComponent(pageName)}"></script>`,
    "</body>",
    "</html>",
    "",
  ].join("\n");
}

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function initAssetBasenameMap(assetsDir) {
  assetBasenameMap = await buildAssetBasenameMap(assetsDir);
}

export async function validateAssetImports({ srcDir }) {
  const scanDirs = [
    path.join(srcDir, "pages"),
    path.join(srcDir, "components"),
  ];
  const missing = [];
  const seen = new Set();

  for (const dir of scanDirs) {
    let vueFiles = [];

    try {
      vueFiles = await collectVueFiles(dir);
    } catch (error) {
      if (error.code === "ENOENT") {
        continue;
      }

      throw error;
    }

    for (const file of vueFiles) {
      const content = await readFile(file, "utf8");
      const pattern = new RegExp(ASSET_IMPORT_PATTERN.source, "g");
      let match;

      while ((match = pattern.exec(content)) !== null) {
        const assetRelative = match[1];
        const assetPath = path.join(srcDir, "assets", assetRelative);
        const dedupeKey = `${file}::${assetRelative}`;

        if (seen.has(dedupeKey)) {
          continue;
        }

        seen.add(dedupeKey);

        if (!(await fileExists(assetPath))) {
          missing.push({
            file: path
              .relative(path.join(srcDir, ".."), file)
              .replace(/\\/g, "/"),
            importPath: `@/assets/${assetRelative.replace(/\\/g, "/")}`,
          });
        }
      }
    }
  }

  if (missing.length > 0) {
    const lines = missing.map((item) => `- ${item.file} → ${item.importPath}`);
    throw new Error(
      `Build aborted: missing asset imports detected:\n${lines.join("\n")}`,
    );
  }
}

async function collectVueFiles(dir) {
  const files = [];
  const entries = await readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      files.push(...(await collectVueFiles(fullPath)));
      continue;
    }

    if (entry.isFile() && entry.name.endsWith(".vue")) {
      files.push(fullPath);
    }
  }

  return files;
}

async function fileExists(filePath) {
  try {
    await access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function buildAssetBasenameMap(assetsDir) {
  const map = new Map();

  async function walk(currentDir, relativeDir = "") {
    const entries = await readdir(currentDir, { withFileTypes: true });

    for (const entry of entries) {
      const relativePath = relativeDir
        ? `${relativeDir}/${entry.name}`
        : entry.name;

      if (entry.isDirectory()) {
        if (entry.name === "scss") {
          continue;
        }

        await walk(path.join(currentDir, entry.name), relativePath);
        continue;
      }

      if (!entry.isFile()) {
        continue;
      }

      const extension = path.extname(entry.name).toLowerCase();
      if (!assetExtensions.has(extension)) {
        continue;
      }

      map.set(entry.name, relativePath.replace(/\\/g, "/"));
    }
  }

  await walk(assetsDir);
  return map;
}

export function normalizeRenderedAssetPaths(html) {
  let result = html.replace(/(\s(?:src|href)=["'])\/assets\//g, "$1./assets/");

  if (assetBasenameMap.size === 0) {
    return result;
  }

  result = result.replace(
    HASHED_ASSET_PATTERN,
    (match, prefix, baseName, _hash, extension, suffix) => {
      const fileName = `${baseName}${extension}`;
      const sourcePath = assetBasenameMap.get(fileName);

      if (!sourcePath) {
        return match;
      }

      return `${prefix}./assets/${sourcePath}${suffix}`;
    },
  );

  result = result.replace(
    /(\ssrcset=["'])([^"']+)(["'])/g,
    (match, prefix, srcsetValue, suffix) => {
      const normalized = srcsetValue.replace(
        /(?:\.\/|\/)?assets\/([^,\s"']+)/g,
        (assetMatch, hashedName) => {
          const nameMatch = hashedName.match(/^(.+)-[A-Za-z0-9_-]{8}(\.\w+)$/);
          if (!nameMatch) return assetMatch;

          const originalName = path.basename(`${nameMatch[1]}${nameMatch[2]}`);
          const sourcePath = assetBasenameMap.get(originalName);
          return sourcePath ? `./assets/${sourcePath}` : assetMatch;
        },
      );
      return `${prefix}${normalized}${suffix}`;
    },
  );

  return result;
}

export function cleanRenderedHtml(html) {
  return normalizeRenderedAssetPaths(
    html
      .replace(/<!--[\s\S]*?-->/g, "")
      .replace(/\sdata-v-[a-zA-Z0-9_-]+(?:="[^"]*")?/g, "")
      .replace(/\s+/g, " ")
      .replace(/>\s+</g, "><")
      .trim(),
  );
}

export function stripScopedCssMarkers(css) {
  return css
    .replace(/\[data-v-[^\]]+\]/g, "")
    .replace(/\s+\{/g, " {")
    .replace(/\s+,/g, ",");
}

export function formatHtml(html) {
  const normalized = html
    .replace(/>\s*</g, ">\n<")
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
  let depth = 0;
  const lines = [];

  for (const line of normalized) {
    if (line.startsWith("</")) {
      depth = Math.max(depth - 1, 0);
    }

    lines.push(`${"  ".repeat(depth)}${line}`);

    if (isOpeningTag(line)) {
      depth += 1;
    }
  }

  return lines
    .join("\n")
    .replace(/<(textarea|pre)\b([^>]*)>\s*<\/\1>/gi, "<$1$2></$1>");
}

export async function extractPageScript(source) {
  const scripts = [];
  const pattern = /<script\b([^>]*)>([\s\S]*?)<\/script>/gi;
  let match;

  while ((match = pattern.exec(source)) !== null) {
    const attrs = match[1] || "";
    if (/\bsetup\b/i.test(attrs)) {
      continue;
    }

    const content = match[2].trim();
    if (content) {
      scripts.push(content);
    }
  }

  return scripts.length > 0 ? `${scripts.join("\n\n")}\n` : "";
}

export async function discoverComponentScripts(pageSourcePath, componentsDir) {
  const pagePath =
    pageSourcePath instanceof URL
      ? fileURLToPath(pageSourcePath)
      : pageSourcePath;
  const componentsPath =
    componentsDir instanceof URL ? fileURLToPath(componentsDir) : componentsDir;
  const componentsRoot = path.resolve(componentsPath);
  const pageSource = await readFile(pagePath, "utf8");
  const components = [];
  const seen = new Set();
  const pattern = /^\s*import\s+.+?\s+from\s+['"]([^'"]+\.vue)['"];?/gm;
  let match;

  while ((match = pattern.exec(pageSource)) !== null) {
    const importPath = match[1];
    if (!importPath.startsWith(".")) {
      continue;
    }

    const componentPath = path.resolve(path.dirname(pagePath), importPath);
    const relativeToComponents = path.relative(componentsRoot, componentPath);
    if (
      relativeToComponents.startsWith("..") ||
      path.isAbsolute(relativeToComponents)
    ) {
      continue;
    }

    if (seen.has(componentPath)) {
      continue;
    }

    seen.add(componentPath);
    components.push({
      sourcePath: componentPath,
      jsFileName: componentScriptFileName(componentPath),
    });
  }

  return components;
}

export function componentScriptFileName(componentPath) {
  const cleanPath =
    componentPath instanceof URL ? fileURLToPath(componentPath) : componentPath;
  const componentName = path
    .basename(cleanPath, ".vue")
    .replace(/^App(?=[A-Z])/, "");
  const fileName = `${componentName.charAt(0).toLowerCase()}${componentName.slice(1)}.js`;

  return `components/${fileName}`;
}

function indentBlock(block, spaces) {
  if (!block) {
    return "";
  }

  const indent = " ".repeat(spaces);
  return block
    .split("\n")
    .map((line) => `${indent}${line}`)
    .join("\n");
}

function isOpeningTag(line) {
  if (
    !line.startsWith("<") ||
    line.startsWith("</") ||
    line.startsWith("<!") ||
    line.startsWith("<?")
  ) {
    return false;
  }

  if (/\/>$/.test(line) || /<\/[^>]+>$/.test(line)) {
    return false;
  }

  const tagName = line.match(/^<([a-zA-Z0-9-]+)/)?.[1]?.toLowerCase();
  return tagName ? !voidTags.has(tagName) : false;
}
