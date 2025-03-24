import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react({
    babel: {
      plugins: [["babel-plugin-react-compiler"]]
    }
  })],
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler",
        additionalData: `@use "/src/assets/styles/abstract/_index.scss" as *;`
      }
    }
  },
  base: '/tech-book-club-landing-page/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
})