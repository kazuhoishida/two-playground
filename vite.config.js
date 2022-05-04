import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { resolve } from "path"

export default defineConfig({
  plugins: [react()],
  root: "src",
  base: "/two-playground/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        nolook: resolve(__dirname, "src/nolook/index.html"),
        neue: resolve(__dirname, "src/neue/index.html"),
      },
    },
  },
})
