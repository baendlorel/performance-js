import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    setupFiles: ['./lib/setup.ts', './lib/log.ts'],
  },
});
