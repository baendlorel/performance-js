import { describe, it } from 'vitest';
import { log } from './log.js';

const kt = (filename: string, fn: () => any) => {
  const [category, tag] = filename.replace(/test.ts$/g, '').split('_');
  let args: any = null;
  describe(category, () => it(tag, () => (args = fn())));
  log(category, tag, args);
};
Reflect.set(globalThis, 'kt', kt);
