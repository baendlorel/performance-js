import { defineConfig } from 'vitest/config';
// import replace from '@rollup/plugin-replace';
import { dirname } from 'node:path';

export default defineConfig({
  test: {
    setupFiles: ['./lib/setup.ts', './lib/log.ts', './lib/runner.ts'],
  },
  plugins: [
    {
      name: 'category-injection',
      transform(code, id) {
        const category = JSON.stringify(dirname(id));
        return {
          code: code.replace('describe(', `describe(${category}, `),
        };
      },
    },
  ],
});
