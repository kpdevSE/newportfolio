import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/',
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Optimize build for production
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.logs in production
        drop_debugger: true
      }
    },
    // Code splitting for better performance
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'ui-components': ['lucide-react', '@radix-ui/react-slot'],
        }
      }
    },
    // Chunk size warnings
    chunkSizeWarningLimit: 1000,
    // Source maps for debugging (disable in production if needed)
    sourcemap: false
  },
  // Server configuration for development
  server: {
    port: 3000,
    open: true
  },
  // Preview configuration
  preview: {
    port: 4173,
    open: true
  }
})
