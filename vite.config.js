import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path'; // Importar la función path de Node.js

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Crear alias para la carpeta src
    },
  },
});
