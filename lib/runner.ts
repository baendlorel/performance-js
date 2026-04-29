import { describe, it } from 'vitest';
import { log } from './log.js';
import { dirname } from 'node:path';

const runner = (category: string, testCase: string, fn: () => any) => {
  category = dirname(category);
  testCase = dirname(testCase);

  let args: any = null;
  describe(category, () => {
    LEN_RATIO = 1; // initialize to 1 for each test file
    it(testCase, () => {
      args = fn();
      if (typeof args?.then === 'function') {
        args.then((v: any) => log(category, testCase, v));
      } else {
        log(category, testCase, args);
      }
      return args;
    });
  });
};
Reflect.set(globalThis, 'describe', runner);
