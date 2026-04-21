import { basename } from 'node:path';
import { describe, it } from 'vitest';
import { log } from './log.js';

const kt = (filename: string, fn: () => any) => {
  const [category, tag] = basename(filename)
    .replace(/test.ts$/g, '')
    .split('_');
  let args: any = null;
  describe(category, () =>
    it(tag, () => {
      args = fn();
      if (typeof args?.then === 'function') {
        args.then((v: any) => log(category, tag, v));
      } else {
        log(category, tag, args);
      }
      return args;
    }),
  );
};
Reflect.set(globalThis, 'kt', kt);
