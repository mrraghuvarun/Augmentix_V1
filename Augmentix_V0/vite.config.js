import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'https://rgfclyl32c.execute-api.us-west-2.amazonaws.com/dev',
        changeOrigin: true,
        secure: false,
      }
    }
  },
  // Add this to force console logging
  build: {
    rollupOptions: {
      output: {
        // Preserve console.log in production build
        compact: false
      }
    }
  }
})
