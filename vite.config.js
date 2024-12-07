import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Este es el directorio donde Vite coloca los archivos de producción
    rollupOptions: {
      input: 'index.html', // Asegura que Vite tome index.html como punto de entrada principal
    },
  },
  server: {
    open: true, // Opcional: abre el navegador al iniciar el servidor de desarrollo
    historyApiFallback: true, // Esto es importante para que las rutas de React Router funcionen correctamente
  },
});
