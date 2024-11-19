import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

import path from 'node:path';
import { packageDirectorySync } from 'pkg-dir';

const packageRoot = packageDirectorySync();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(packageRoot, './src'),
      '@app': path.resolve(packageRoot, './src/app'),
      '@entities': path.resolve(packageRoot, './src/entities'),
      '@features': path.resolve(packageRoot, './src/features'),
      '@pages': path.resolve(packageRoot, './src/pages'),
      '@shared': path.resolve(packageRoot, './src/shared'),
      '@widgets': path.resolve(packageRoot, './src/widgets'),
    },
  },
});
