# One Word, First Thought

Entry for the make.fun bounty `u-0xkianno-one-word-first-thought-106abaf8`
("One Word, First Thought", $5 prize pool).

## The entry

**defenestration**

One word, the first that comes to mind — the act of throwing someone out
of a window. Surprising, vivid, and with a spark of wit: a whole absurd
scene packed into a single word.

## How it works

`main.ts` reads `entry.txt` (resolved via `import.meta.url`, never a
relative path, so it works from any working directory), validates that it
holds exactly one word of 1–24 characters, and copies it to
`$MAKEFUN_OUTPUT_DIR/entry.txt` (default `out/`).
