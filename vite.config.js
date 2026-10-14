import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'node:url';

export default defineConfig({
  plugins: [react()],
  base: process.env.GITHUB_ACTIONS === 'true' ? '/nexora-tech0.github.io/' : '/',
  build: {
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL('./index.html', import.meta.url)),
        features: fileURLToPath(new URL('./features/index.html', import.meta.url)),
        techStack: fileURLToPath(new URL('./tech-stack/index.html', import.meta.url)),
        efith: fileURLToPath(new URL('./efith/index.html', import.meta.url)),
        installation: fileURLToPath(new URL('./installation/index.html', import.meta.url))
      }
    }
  }
});
