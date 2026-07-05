import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
  server: {
    proxy: {
      '/medium-feed': {
        target: 'https://medium.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/medium-feed/, '/feed/@lakshithaa'),
      },
    },
  },
});
