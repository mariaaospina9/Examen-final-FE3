import { createContext, useReducer, useEffect } from "react";
import axios from "axios";

// Estado inicial del contexto
export const initialState = {
  theme: localStorage.getItem("theme") || "light",  // Cargar el tema desde localStorage
  dentists: [],
  favorites: JSON.parse(localStorage.getItem("fav_data")) || [],  // Cargar favoritos desde localStorage
};

// Creación del contexto
export const ContextGlobal = createContext();

// Reducer para manejar las acciones
export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_DENTISTS":
      return {
        ...state,
        dentists: action.payload,
      };
    case "TOGGLE_THEME":
      const newTheme = state.theme === "light" ? "dark" : "light";
      // Guardar el tema seleccionado en localStorage
      localStorage.setItem("theme", newTheme);
      return {
        ...state,
        theme: newTheme,
      };
    case "ADD_TO_FAVORITES":
      const updatedFavorites = [...state.favorites, action.payload];
      localStorage.setItem("fav_data", JSON.stringify(updatedFavorites));  // Guardar en localStorage
      return {
        ...state,
        favorites: updatedFavorites,
      };
    case "REMOVE_FROM_FAVORITES":
      const filteredFavorites = state.favorites.filter(fav => fav.id !== action.payload.id);
      localStorage.setItem("fav_data", JSON.stringify(filteredFavorites));  // Guardar en localStorage
      return {
        ...state,
        favorites: filteredFavorites,
      };
    default:
      return state;
  }
};

// ContextProvider para envolver la aplicación
export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const url = "https://jsonplaceholder.typicode.com/users";

  // Cargar la lista de dentistas al montar el componente
  useEffect(() => {
    const fetchDentists = async () => {
      try {
        const response = await axios.get(url);
        dispatch({ type: "SET_DENTISTS", payload: response.data });
      } catch (error) {
        console.error("Error fetching dentists:", error);
      }
    };

    fetchDentists();
  }, []);  // El array vacío asegura que solo se ejecute una vez cuando se monta el componente

  // Guardar los favoritos en localStorage cada vez que cambien
  useEffect(() => {
    localStorage.setItem("fav_data", JSON.stringify(state.favorites));
  }, [state.favorites]);

  // Proveer el contexto a los componentes hijos
  return (
    <ContextGlobal.Provider value={{ state, dispatch }}>
      {children}
    </ContextGlobal.Provider>
  );
};