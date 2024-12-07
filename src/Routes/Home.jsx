import React from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";
import { useContext } from "react";

const Home = () => {
  const { state } = useContext(ContextGlobal);

  // Verifica si los dentistas están cargados
  const isLoading = state.dentists.length === 0;

  return (
    <main className="home-container">
      <h1>Home</h1>
      {/* Mostrar mensaje si no hay dentistas */}
      {isLoading ? (
        <p>Cargando dentistas...</p>
      ) : (
        <div className="card-grid">
          {state.dentists.length > 0 ? (
            state.dentists.map((dentist) => (
              <Card key={dentist.id} dentist={dentist} />
            ))
          ) : (
            <p>No hay dentistas disponibles.</p>
          )}
        </div>
      )}
    </main>
  );
};

export default Home;
