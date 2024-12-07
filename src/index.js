import React from 'react';
import ReactDOM from 'react-dom/client'; // Importa desde 'react-dom/client' en lugar de 'react-dom'
import './index.css';
import App from './App';
import { ThemeProvider } from './context/ThemeContext'; // Asegúrate de que el contexto esté correctamente importado

// Crear el contenedor raíz
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderizar la aplicación dentro del ThemeProvider
root.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
