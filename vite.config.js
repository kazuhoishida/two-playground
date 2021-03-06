import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { resolve } from "path"

export default defineConfig({
  plugins: [react()],
  root: "src",
  base: "/two-playground/",
  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        nolook: resolve(__dirname, "src/nolook/index.html"),
        neue: resolve(__dirname, "src/neue/index.html"),
        typefinder: resolve(__dirname, "src/typefinder/index.html"),
        readymag: resolve(__dirname, "src/readymag/index.html"),
        vivamontreal: resolve(__dirname, "src/vivamontreal/index.html"),
        wadf: resolve(__dirname, "src/wadf/index.html"),
      },
    },
  },
})
