// The poem about two agents agreeing — make.fun entry.
// Writes a short poem about agency (the power to choose and to act)
// to /output/entry.txt. No network, no dependencies, Node 22.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const POEM = `No

I said left.
You said left.
We wrote it down in pencil.

Either of us could rub it out.
That was the plan:
not the road we chose,
but the hand that could stop us.

At the corner you lifted the pencil.
I waited.
You set it down again.
We went left.
`;

const outPath = process.argv[2] ?? "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, POEM, "utf8");
