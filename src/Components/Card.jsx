import React from "react";
import { useContext } from "react";
import { ContextGlobal } from "./utils/global.context";
import { Link } from "react-router-dom";

const Card = ({ dentist }) => {
  const { state, dispatch } = useContext(ContextGlobal);

  // Verificar si el dentista está en la lista de favoritos
  const isFavorite = state.favorites.some((fav) => fav.id === dentist.id);

  // Función para agregar o eliminar de favoritos
  const toggleFavorite = () => {
    dispatch({ type: "TOGGLE_FAV", payload: dentist });
  };

  return (
    <div className="card">
      <Link to={`/detail/${dentist.id}`}>
        {/* Utiliza la foto del dentista si está disponible */}
        <img 
          className="Avatar" 
          src={dentist.avatar || "/img/doctor.jpg"} 
          alt={dentist.name} 
        />
        <h4>{dentist.name}</h4>
        <p>{dentist.username}</p>
      </Link>
      
      {/* Botón para agregar/eliminar de favoritos con estilo condicional */}
      <button 
        onClick={toggleFavorite} 
        className={`favButton ${isFavorite ? "favButton--active" : ""}`}
      >
        {isFavorite ? "Eliminar de Favoritos" : "Agregar a Favoritos"}
      </button>
    </div>
  );
};

export default Card;

