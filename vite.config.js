import { defineConfig } from "vite"
import autoprefixer from "autoprefixer"

export default defineConfig({
  root: "src",
  clearScreen: true,
  devSourcemap: true,
  css: {
    postcss: {
      plugins: [autoprefixer]
    }
  },
})
