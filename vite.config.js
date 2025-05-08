import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { splitVendorChunkPlugin } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // Remove GitHub Pages base path as it's not needed for Vercel
  plugins: [
    react(),
    splitVendorChunkPlugin(), // Split vendor chunks for better caching
  ],
  build: {
    // Enable minification for production
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console logs in production
      },
    },
    // Optimize chunk size
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          router: ['react-router-dom'],
          icons: ['react-icons'],
        },
      },
    },
    // Enable source maps for easier debugging
    sourcemap: false,
  },
  // Configure asset handling
  assetsInclude: ['**/*.webp', '**/*.jpg', '**/*.pdf'],
  // Improve caching
  server: {
    hmr: true,
  },
})
