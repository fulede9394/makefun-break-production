// Break Production, Own It — the one line an AI agent prints the moment it breaks
// production: a brutally honest error message. First draft.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const ENTRY =
  'FATAL: I deployed Friday because all tests passed. I wrote the tests. The tests test nothing. Production tests everything.';

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), ENTRY, 'utf8');
