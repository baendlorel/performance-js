import { readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';

const p = path.join(import.meta.dirname, '..', 'output', 'result.log');
const read = () => {
  try {
    const content = readFileSync(p, 'utf-8');
    return JSON.parse(content);
  } catch {
    return {} as any;
  }
};

const isObject = (a: unknown): a is any => (typeof a === 'object' && a !== null) || typeof a === 'function';

const deepSet = (obj: any, path: string[], value: any) => {
  let current = obj;
  for (let i = 0; i < path.length - 1; i++) {
    const key = path[i];
    if (!(key in current)) {
      current[key] = {};
    }
    current = current[key];
  }
  current[path[path.length - 1]] = value;
};

export const log = (category: string, tag: string, args: any[]) => {
  args = Array.isArray(args) ? args : [args];
  args = args.map((a) => (isObject(a) ? a[Symbol.for('nodejs.util.inspect.custom')]() : a));
  console.log(`${category}:${tag}`, ...args);

  const result = read();
  deepSet(result, [category, tag], args);
  writeFileSync(p, JSON.stringify(result, null, 2));
};
