// 啟動 / 關閉一個給 Playwright MCP 驗證用的 vite dev server。
// 每次動態取得一個空閒的 ephemeral port（避開 3000 / 3xxx），
// 並把 pid / port / url 記在 .test-server/，讓驗證後能可靠關閉、釋放 port。
import { spawn, execSync } from "node:child_process";
import http from "node:http";
import net from "node:net";
import { fileURLToPath } from "node:url";
import {
  existsSync,
  mkdirSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from "node:fs";
import path from "node:path";

const rootDir = path.join(fileURLToPath(new URL(".", import.meta.url)), "..");
const stateDir = path.join(rootDir, ".test-server");
const pidFile = path.join(stateDir, "pid");
const portFile = path.join(stateDir, "port");
const urlFile = path.join(stateDir, "url");

// 向 OS 要一個空閒 port。listen(0) 在 macOS 會落在 49152–65535，天然避開 3xxx。
function pickFreePort() {
  return new Promise((resolve, reject) => {
    const probe = net.createServer();
    probe.unref();
    probe.on("error", reject);
    probe.listen(0, "127.0.0.1", () => {
      const { port } = probe.address();
      probe.close(() => resolve(port));
    });
  });
}

async function pickSafePort() {
  // 保險：避開 3xxx 與其他低位 port，至少 >= 10000。
  for (let i = 0; i < 10; i++) {
    const port = await pickFreePort();
    if (port >= 10000) return port;
  }
  throw new Error("找不到合適的空閒 port（>= 10000）");
}

function waitForServer(url, timeoutMs = 20000) {
  const deadline = Date.now() + timeoutMs;
  return new Promise((resolve, reject) => {
    const tryOnce = () => {
      const req = http.get(url, (res) => {
        res.resume();
        resolve();
      });
      req.on("error", () => {
        if (Date.now() > deadline) {
          reject(new Error(`server 在 ${timeoutMs}ms 內未就緒：${url}`));
        } else {
          setTimeout(tryOnce, 200);
        }
      });
    };
    tryOnce();
  });
}

async function start() {
  // 若已有殘留的 server，先關掉再啟動，避免重複。
  stop();

  let lastErr;
  for (let attempt = 0; attempt < 3; attempt++) {
    const port = await pickSafePort();
    const url = `http://localhost:${port}`;

    const child = spawn(
      "npx",
      ["vite", "--host", "localhost", "--port", String(port), "--strictPort"],
      { cwd: rootDir, detached: true, stdio: "ignore" },
    );
    child.unref();

    mkdirSync(stateDir, { recursive: true });
    writeFileSync(pidFile, String(child.pid));
    writeFileSync(portFile, String(port));
    writeFileSync(urlFile, url);

    try {
      await waitForServer(`${url}/`);
      // 約定輸出：呼叫端讀這行取得 URL。
      process.stdout.write(`URL=${url}\n`);
      return;
    } catch (err) {
      lastErr = err;
      // 這個 port 沒起來（罕見的 probe→bind race），清掉後重試。
      stop();
    }
  }
  throw lastErr ?? new Error("無法啟動 test server");
}

function killPid(pid) {
  try {
    process.kill(-pid, "SIGTERM"); // 殺整個 process group
  } catch {
    try {
      process.kill(pid, "SIGTERM");
    } catch {
      // 進程已不存在，忽略
    }
  }
}

function killPort(port) {
  try {
    const out = execSync(`lsof -ti tcp:${port}`, {
      stdio: ["ignore", "pipe", "ignore"],
    })
      .toString()
      .trim();
    for (const pid of out.split(/\s+/).filter(Boolean)) {
      killPid(Number(pid));
    }
  } catch {
    // 沒有殘留進程，忽略
  }
}

// idempotent：找不到檔 / 進程不存在都安靜成功。
function stop() {
  if (existsSync(pidFile)) {
    const pid = Number(readFileSync(pidFile, "utf8").trim());
    if (Number.isInteger(pid)) killPid(pid);
  }
  if (existsSync(portFile)) {
    const port = Number(readFileSync(portFile, "utf8").trim());
    if (Number.isInteger(port)) killPort(port);
  }
  rmSync(stateDir, { recursive: true, force: true });
}

const cmd = process.argv[2];
if (cmd === "start") {
  start().catch((err) => {
    console.error(err.message);
    process.exit(1);
  });
} else if (cmd === "stop") {
  stop();
} else {
  console.error("用法：node scripts/test-server.mjs <start|stop>");
  process.exit(1);
}
