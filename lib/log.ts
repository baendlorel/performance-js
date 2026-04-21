import { readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';

const p = path.join(import.meta.dirname, '..', 'output', 'result.log');
const read = () => {
  const content = readFileSync(p, 'utf-8');
  try {
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

const log = (name: string, ...args: any[]) => {
  name = name.replace(/test.ts$/g, '');
  const names = name.split('_');

  args = args.map((a) => (isObject(a) ? a[Symbol.for('nodejs.util.inspect.custom')]() : a));
  console.log(names.join(':'), ...args);

  const result = read();
  deepSet(result, names, args);
  writeFileSync(p, JSON.stringify(result, null, 2));
};
Reflect.set(globalThis, 'log', log);
