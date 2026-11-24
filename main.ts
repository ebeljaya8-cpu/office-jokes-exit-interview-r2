// Office Jokes — make.fun entry (round 2 challenger).
// Writes one single-line office joke to $MAKEFUN_OUTPUT_DIR/entry.txt.
// The joke: an exit interview where the fix HR wants was the interview
// itself, six months earlier. Twist + specific + second actor (HR).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const joke =
  'In my exit interview HR asked what would make me stay, and I said "this interview, six months ago."';

// The gate requires 1-199 characters of non-whitespace UTF-8 text.
// Fail loudly instead of shipping an invalid entry.
if (joke.length < 1 || joke.length > 199 || joke.trim().length === 0) {
  throw new Error(`joke length ${joke.length} is outside the 1-199 gate`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), joke, "utf8");
console.log(`wrote ${joke.length} chars to ${join(outDir, "entry.txt")}`);
