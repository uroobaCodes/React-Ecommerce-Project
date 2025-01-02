import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

// with opening browser
export default defineConfig({
  plugins: [react()],
  server: {
    open: true, // Automatically opens the app in the browser
  },
});
