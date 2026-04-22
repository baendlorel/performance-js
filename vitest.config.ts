import { defineConfig } from 'vitest/config';
import replace from '@rollup/plugin-replace';

export default defineConfig({
  test: {
    setupFiles: ['./lib/setup.ts', './lib/log.ts', './lib/runner.ts'],
  },
  plugins: [
    replace({
      'kt(import.meta.filename, () => {': 'kt(import.meta.filename, () => {ITER_RATIO = 1;',
    }),
  ],
});
