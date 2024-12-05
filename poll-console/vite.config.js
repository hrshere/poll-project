import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5174,  // Replace with your desired port
    open: true, // Automatically open the browser (optional)
    host: true  // Enables access from network (optional)
  },
});