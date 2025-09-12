import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/smart-fixly/',
  build: {
    outDir: "../docs",  // stores builds inside docs folder to be rendered in github pages(development branch)
    emptyOutDir: true   // alow rewriting docs folder as its outside the default folder
  }
})
