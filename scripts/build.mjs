// Assembles the deployable site in dist/:
// the hub page and the static tools are copied as they are,
// and the ear trainer (the only tool with a build step) is built by Vite.
import { cpSync, rmSync, mkdirSync } from "node:fs";
import { execSync } from "node:child_process";

const STATIC = ["index.html", "grand", "midi-bloom", "syncopate"];

rmSync("dist", { recursive: true, force: true });
mkdirSync("dist");
for (const entry of STATIC) cpSync(entry, `dist/${entry}`, { recursive: true });

execSync("npx vite build ear-trainer", { stdio: "inherit" });
