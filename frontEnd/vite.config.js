import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  base: process.env.NODE_ENV === "production" ? "/smart-fixly/" : "/",
  build: {
    outDir: "../docs",  // stores builds inside docs folder to be rendered in github pages(development branch)
    emptyOutDir: true   // alow rewriting docs folder as its outside the default folder
  }
})
