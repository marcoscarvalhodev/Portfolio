import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import glsl from 'vite-plugin-glsl';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr(), glsl()],
  define: {
    "process.env": process.env,
    VITE_API_URL: process.env.VITE_API_URL,
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
