import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  /* Served from the repo subpath on github.io while the lakshitha.dev
     registration is lapsed. Restore to '/' when the domain is back. */
  base: '/lakshitha-s-portfolio/',
  build: {
    outDir: 'dist',
  },
  /* Plain CSS, no PostCSS plugins. Declaring this inline stops Vite from
     picking up a postcss.config from a parent folder (C:\dev has a
     Tailwind one that breaks this build). */
  css: {
    postcss: {},
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
