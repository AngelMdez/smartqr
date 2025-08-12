import { defineConfig } from 'vitest/config'
import path from 'path'
export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: path.resolve(__dirname, 'src/tests/setup.ts'),
  },
  resolve: {
    alias: {
      // Point to core source so we don't depend on a prebuilt dist for tests
      '@smartqr/core': path.resolve(__dirname, '../core/src/index.ts'),
    },
  },
})
