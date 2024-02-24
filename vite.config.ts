import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "creationForm",
      filename: "creationFormEntry.js",
      exposes: {
        "./CreationForm": "./src/CreationForm.tsx",
      },
      shared: [
        "react",
        "react-dom",
        "@mui/material",
        "@emotion/react",
        "@emotion/styled",
      ],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
