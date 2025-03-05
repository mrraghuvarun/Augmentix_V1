import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 5173,
  },
  build: {
    rollupOptions: {
      output: {
        compact: false // Preserve console logs in production if needed
      }
    }
  },
  define: {
    'process.env.API_BASE_URL': JSON.stringify(process.env.API_BASE_URL || 'https://1pdafh6hmf.execute-api.us-west-2.amazonaws.com/dev')
  }
})
