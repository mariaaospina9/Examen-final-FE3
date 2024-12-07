import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "../Components/utils/global.context";

const Navbar = () => {
  const { state, dispatch } = useContext(ContextGlobal);

  const toggleTheme = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };

  // Guardar el tema en el localStorage cuando cambia
  useEffect(() => {
    localStorage.setItem("theme", state.theme);
  }, [state.theme]);

  return (
    <nav>
      <div>
        {/* Firma: Si cambia el tema, cambia la imagen */}
        <img
          className="firma"
          src={
            state.theme === "dark"
              ? "/img/FirmaDark.png"
              : "/img/FirmaLight.png"
          }
          alt={state.theme === "dark" ? "Firma Dark Mode" : "Firma Light Mode"}
        />
      </div>

      <div className="navbar">
        <Link to="/home" aria-label="Ir a la página de inicio">Home</Link>
        <Link to="/contact" aria-label="Ir a la página de contacto">Contact</Link>
        <Link to="/favs" aria-label="Ir a la página de favoritos">Favs</Link>
        
        {/* Botón para cambiar de tema */}
        <button 
          onClick={toggleTheme} 
          aria-label={`Cambiar a ${state.theme === "dark" ? "modo claro" : "modo oscuro"}`}
          className="theme-toggle-btn"
        >
          {state.theme === "dark" ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
