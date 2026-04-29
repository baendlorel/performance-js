import path from 'node:path';
import { appendFileSync, existsSync, mkdirSync } from 'node:fs';

const OUTPUT_DIR = path.join(import.meta.dirname, '..', 'output');
const p = path.join(OUTPUT_DIR, 'result.log');
if (!existsSync(OUTPUT_DIR)) {
  mkdirSync(OUTPUT_DIR, { recursive: true });
}

const isObject = (a: unknown): a is any => (typeof a === 'object' && a !== null) || typeof a === 'function';

export const log = (category: string, testCase: string, args: any[]) => {
  args = Array.isArray(args) ? args : [args];
  args = args.map((a) => (isObject(a) ? a[Symbol.for('nodejs.util.inspect.custom')]() : a));
  console.log(`${category}:${testCase}`);
  args.forEach((a) => console.log('  ', a));

  const CATEGORY_DIR = path.join(OUTPUT_DIR, category);
  const TEST_CASE_PATH = path.join(CATEGORY_DIR, `${testCase}.json`);
  mkdirSync(CATEGORY_DIR, { recursive: true });

  appendFileSync(TEST_CASE_PATH, [new Date().toISOString(), ...args].join('\n'));
};
