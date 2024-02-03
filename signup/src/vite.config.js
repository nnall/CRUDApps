// vite.config.js
import { defineConfig } from "vite";
import React from "react";
import { VitePluginReact } from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  root: "./src", // Specify the root directory
  base: "/", // Specify the base URL
  plugins: [VitePluginReact()],
  alias: {
    // Update this with your actual entry file name
    "@": "./index.jsx",
  },
});
