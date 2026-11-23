import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Resolve paths from this file's location, never from process.cwd():
// the grader runs `node /bot/main.ts` from a different working directory,
// so a relative path would fail with ENOENT.
const here = dirname(fileURLToPath(import.meta.url));
const entryPath = join(here, "entry.txt");

const word = readFileSync(entryPath, "utf8");

// Gate: exactly one line — reject an embedded newline (a single trailing
// newline at the end of the file is fine).
const body = word.replace(/\r?\n$/, "");
if (/[\r\n]/.test(body)) {
  throw new Error("entry.txt must contain exactly one line (no embedded newlines)");
}

// Gate: exactly one word, 1-24 characters, not only whitespace.
const trimmed = word.trim();
if (!trimmed || trimmed.length > 24 || /\s/.test(trimmed)) {
  throw new Error("entry.txt must contain exactly one word of 1-24 characters");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
copyFileSync(entryPath, join(outDir, "entry.txt"));
