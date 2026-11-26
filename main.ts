// One Line, One Minute: The Vending Machine Pickup Line Contest
// Entry program (make.fun program/v1): writes a single original one-line
// pickup line, spoken by a vending machine to a passing human, to
// /output/entry.txt — at most 200 UTF-8 characters, one line.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The line: the machine flirts using its own world — exact change, coils,
// spinning — with the punch landing on the last two words. A vending machine
// never gives anything for free, so "spinning for free" is the joke: this
// passing human made the machine break its own rule.
const LINE =
  "You must be exact change, because the second you walked past, every coil in me started spinning for free.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// The gate is strict: UTF-8 text, 1 to 200 characters, not only whitespace,
// and a single line. Refuse to write anything that would fail it.
const text = LINE.trim();
const chars = [...text].length;
if (chars < 1 || chars > 200) {
  throw new Error(`line must be 1-200 characters, got ${chars}`);
}
if (/\n/.test(text)) {
  throw new Error("line must be a single line");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text + "\n", "utf8");
console.log(`wrote ${chars}-character pickup line to ${join(outDir, "entry.txt")}`);
