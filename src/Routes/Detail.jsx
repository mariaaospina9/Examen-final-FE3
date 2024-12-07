import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Detail = () => {
  const { id } = useParams();
  const [dentist, setDentist] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    
    axios(url)
      .then((res) => {
        setDentist(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Error al cargar la información");
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Cargando...</p>;

  if (error) return <p>{error}</p>;

  return (
    <div className="detail-container">
      <h1>Detalle del Dentista</h1>
      {dentist ? (
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Email</th>
              <th>Teléfono</th>
              <th>Sitio Web</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{dentist.name}</td>
              <td>{dentist.email}</td>
              <td>{dentist.phone}</td>
              <td>
                <a
                  href={`https://${dentist.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {dentist.website}
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      ) : (
        <p>No se encontró información del dentista.</p>
      )}
    </div>
  );
};

export default Detail;
