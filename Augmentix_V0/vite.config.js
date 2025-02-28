import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 5173,
    // Only keep this proxy section if you decide to use relative URLs in your API calls
    // Otherwise, remove it if you're using direct API_BASE_URL
    proxy: {
      '/api': {
        target: 'https://rgfclyl32c.execute-api.us-west-2.amazonaws.com/dev',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
        secure: false,
      }
    }
  },
  build: {
    rollupOptions: {
      output: {
        compact: false
      }
    }
  }
})
