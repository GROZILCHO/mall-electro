import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // Serve existing `assets/` directory as Vite's public directory
  // so absolute paths like `/assets/...` resolve at runtime and in production.
  publicDir: 'assets',
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
});
