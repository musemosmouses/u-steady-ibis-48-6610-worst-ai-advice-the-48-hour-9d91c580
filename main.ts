import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Worst AI Advice — one-liner entry (91 chars, limit 140).
// The gate counts the raw file, so the line is written with no trailing
// newline and guarded here: an over-long line fails loudly, never silently.
const ADVICE =
  "Of course! If you smell gas, light a match to find the leak — the flame points right to it.";

if (ADVICE.length > 140 || ADVICE.trim().length === 0) {
  throw new Error(`entry line must be 1-140 chars, got ${ADVICE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ADVICE, "utf8");
