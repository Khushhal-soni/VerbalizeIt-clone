// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // Or your framework's plugin
import tailwindcss from '@tailwindcss/vite'; // Import the new Vite plugin

export default defineConfig({
  plugins: [
    react(), // Your framework's plugin
    tailwindcss(), // Add the Tailwind CSS Vite plugin
  ],
  // You can likely remove any PostCSS configuration from here
  // css: {
  //   postcss: {
  //     plugins: [
  //       // Remove 'tailwindcss' or '@tailwindcss/postcss' if present
  //     ],
  //   },
  // },
});