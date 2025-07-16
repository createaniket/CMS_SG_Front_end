import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import jsconfigPaths from 'vite-jsconfig-paths';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const PORT = 3000;

  return {
    server: {
      open: true,
      port: PORT
    },
    preview: {
      open: true,
      port: PORT
    },
    base: '/CRM_SYSTEM/', // 👈 must match your Router basename
    define: {
      global: 'window'
    },
    plugins: [react(), jsconfigPaths()]
  };
});
