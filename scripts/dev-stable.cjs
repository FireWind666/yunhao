const fs = require("fs");
const path = require("path");
const { spawn } = require("child_process");

const projectRoot = process.cwd();
const nextBin = path.join(
  projectRoot,
  "node_modules",
  "next",
  "dist",
  "bin",
  "next"
);
const serverDir = path.join(projectRoot, ".next", "server");
const chunksDir = path.join(serverDir, "chunks");

function syncServerChunks() {
  if (!fs.existsSync(chunksDir) || !fs.existsSync(serverDir)) return;

  for (const name of fs.readdirSync(chunksDir)) {
    if (!name.endsWith(".js")) continue;

    const from = path.join(chunksDir, name);
    const to = path.join(serverDir, name);

    try {
      const fromStat = fs.statSync(from);
      const toStat = fs.existsSync(to) ? fs.statSync(to) : null;

      if (!toStat || fromStat.mtimeMs > toStat.mtimeMs || fromStat.size !== toStat.size) {
        fs.copyFileSync(from, to);
      }
    } catch {
      // The dev server rewrites files frequently; ignore transient sync races.
    }
  }
}

const child = spawn(process.execPath, [nextBin, "dev"], {
  cwd: projectRoot,
  stdio: "inherit",
  env: process.env
});

const interval = setInterval(syncServerChunks, 400);
syncServerChunks();

child.on("exit", (code, signal) => {
  clearInterval(interval);

  if (signal) {
    process.kill(process.pid, signal);
    return;
  }

  process.exit(code ?? 0);
});

for (const event of ["SIGINT", "SIGTERM"]) {
  process.on(event, () => {
    clearInterval(interval);
    child.kill(event);
  });
}
