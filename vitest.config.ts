import { defineConfig } from 'vitest/config';
// import replace from '@rollup/plugin-replace';
import { basename, dirname } from 'node:path';

export default defineConfig({
  test: {
    setupFiles: ['./lib/setup.ts', './lib/log.ts', './lib/runner.ts'],
  },
  plugins: [
    {
      name: 'category-injection',
      transform(code, id) {
        const category = JSON.stringify(basename(dirname(id)));
        code = code.replace(/}\);\s+$/g, `},${category});`);
        return { code };
      },
    },
  ],
});
