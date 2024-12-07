export const reducer = (state, action) => {
    switch (action.type) {
      case "TOGGLE_THEME":
        // Cambia el tema de "light" a "dark" o viceversa
        return { ...state, theme: state.theme === "dark" ? "light" : "dark" };
  
      case "SET_DENTISTS":
        // Establece la lista de dentistas en el estado
        return { ...state, dentists: action.payload };
  
      case "TOGGLE_FAV":
        // Verifica si el dentista ya está en favoritos
        const isFavorite = state.favorites.some(
          (fav) => fav.id === action.payload.id
        );
  
        // Actualiza la lista de favoritos
        const updatedFavorites = isFavorite
          ? state.favorites.filter((fav) => fav.id !== action.payload.id)
          : [...state.favorites, action.payload];
  
        // Almacena los favoritos en localStorage
        try {
          localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
        } catch (error) {
          console.error("Error al guardar en localStorage:", error);
        }
  
        return { ...state, favorites: updatedFavorites };
  
      default:
        // Si la acción no está definida, retorna el estado actual
        return state;
    }
  };
  