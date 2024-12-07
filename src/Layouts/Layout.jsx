import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext"; // Ajustar la ruta al archivo correcto

const Layout = () => {
  const { theme } = useContext(ThemeContext); // Obtener el tema global

  return (
    <div className={theme}> {/* Aplica el tema dinámicamente */}
      <Navbar />
      <main className="main-content">
        <Outlet /> {/* Contenido de las rutas */}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
