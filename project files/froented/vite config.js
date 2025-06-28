import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // ensures assets resolve correctly when deployed on Vercel
  server: {
    port: 5173, // optional: sets local dev port
  }
});
