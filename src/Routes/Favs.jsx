import React from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";
import { useContext } from "react";

const Favs = () => {
  const { state } = useContext(ContextGlobal);

  return (
    <div className="favs-container">
      <h1>Dentistas Favoritos</h1>
      {/* Verificamos si existen favoritos */}
      {state.favorites.length > 0 ? (
        <div className="card-grid">
          {state.favorites.map((dentist) => (
            <Card key={dentist.id} dentist={dentist} />
          ))}
        </div>
      ) : (
        <div className="no-favs">
          <p>No tienes dentistas favoritos aún.</p>
        </div>
      )}
    </div>
  );
};

export default Favs;


