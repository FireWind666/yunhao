const fs = require("fs");
const path = require("path");
const { spawn } = require("child_process");

const projectRoot = process.cwd();
const nextDir = path.join(projectRoot, ".next");
const nextBin = path.join(projectRoot, "node_modules", "next", "dist", "bin", "next");

function removeNextDir() {
  try {
    if (fs.existsSync(nextDir)) {
      fs.rmSync(nextDir, { recursive: true, force: true });
      console.log("[dev-clean] cleared .next cache");
    }
  } catch (error) {
    console.warn("[dev-clean] failed to clear .next cache, continuing:", error?.message ?? error);
  }
}

const MAX_RESTARTS = 5;
let restartCount = 0;
let restarting = false;
let shuttingDown = false;
let currentChild = null;

function hasChunkCorruptionError(text) {
  return /Cannot find module '\.\/\d+\.js'/.test(text);
}

function spawnDev() {
  removeNextDir();

  const child = spawn(process.execPath, [nextBin, "dev"], {
    cwd: projectRoot,
    stdio: ["inherit", "pipe", "pipe"],
    env: {
      ...process.env,
      NEXT_DISABLE_WEBPACK_CACHE: "1",
      WATCHPACK_POLLING: "true",
      CHOKIDAR_USEPOLLING: "true"
    }
  });

  currentChild = child;

  function forward(streamName) {
    return (buffer) => {
      const text = buffer.toString();
      process[streamName].write(text);

      if (!shuttingDown && !restarting && hasChunkCorruptionError(text)) {
        restarting = true;
        restartCount += 1;

        process.stderr.write(
          `[dev-clean] Detected .next chunk corruption, restarting dev server (${restartCount}/${MAX_RESTARTS})...\n`
        );

        child.kill();
      }
    };
  }

  child.stdout.on("data", forward("stdout"));
  child.stderr.on("data", forward("stderr"));

  child.on("exit", (code, signal) => {
    if (shuttingDown) {
      process.exit(0);
      return;
    }

    if (restarting && restartCount <= MAX_RESTARTS) {
      restarting = false;
      setTimeout(spawnDev, 600);
      return;
    }

    if (signal) {
      process.kill(process.pid, signal);
      return;
    }

    process.exit(code ?? 0);
  });
}

spawnDev();

for (const event of ["SIGINT", "SIGTERM"]) {
  process.on(event, () => {
    shuttingDown = true;
    if (currentChild) currentChild.kill(event);
  });
}
