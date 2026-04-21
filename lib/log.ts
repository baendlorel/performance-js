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
const log = (name: string, ...args: any[]) => {
  args = args.map((a) =>
    (typeof a === 'object' && a !== null) || typeof a === 'function'
      ? a[Symbol.for('nodejs.util.inspect.custom')]()
      : a,
  );
  console.log(name, ...args);

  const result = read();
  result[name] = args;
  writeFileSync(p, JSON.stringify(result, null, 2));
};
Reflect.set(globalThis, 'log', log);
