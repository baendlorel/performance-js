import path from 'node:path';
import { appendFileSync, existsSync, mkdirSync } from 'node:fs';

const OUTPUT_DIR = path.join(import.meta.dirname, '..', 'output');
const p = path.join(OUTPUT_DIR, 'result.log');
if (!existsSync(OUTPUT_DIR)) {
  mkdirSync(OUTPUT_DIR, { recursive: true });
}

const isObject = (a: unknown): a is any => (typeof a === 'object' && a !== null) || typeof a === 'function';
const now = () => {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  const h = String(d.getHours()).padStart(2, '0');
  const min = String(d.getMinutes()).padStart(2, '0');
  const s = String(d.getSeconds()).padStart(2, '0');
  const ms = String(d.getMilliseconds()).padStart(3, '0');
  return `[${y}-${m}-${day} ${h}:${min}:${s}.${ms}]`;
};

export const log = (category: string, testCase: string, args: any[]) => {
  const timestamp = now();
  const space = ' '.repeat(4);

  args = Array.isArray(args) ? args : [args];
  args = args.map((a) => space + (isObject(a) ? a[Symbol.for('nodejs.util.inspect.custom')]() : a));
  args.forEach((a) => console.log(a));

  const CATEGORY_DIR = path.join(OUTPUT_DIR, category);
  const TEST_CASE_PATH = path.join(CATEGORY_DIR, `${testCase}.log`);
  mkdirSync(CATEGORY_DIR, { recursive: true });

  appendFileSync(TEST_CASE_PATH, [timestamp, ...args].join('\n') + '\n');
};
