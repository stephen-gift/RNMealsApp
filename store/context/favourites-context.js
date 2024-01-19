import { createContext, useState } from "react";

export const FavouriteContext = createContext({
  id: [],
  addFavourites: (id) => {},
  removeFavourites: (id) => {},
});

function FavouriteContextProvider({ children }) {
  const [favouriteMealIds, setFavouriteMealIds] = useState([]);

  function addFavourite(id) {
    setFavouriteMealIds((currentFavouriteMealId) => [
      ...currentFavouriteMealId,
      id,
    ]);
  }
  function removeFavourite(id) {
    setFavouriteMealIds((currentFavouriteMealId) =>
      currentFavouriteMealId.filter((mealId) => mealId !== id)
    );
  }

  const value = {
    id: favouriteMealIds,
    addFavourites: addFavourite,
    removeFavourites: removeFavourite,
  };

  return <FavouriteContext.Provider value={value}>{children}</FavouriteContext.Provider>;
}

export default FavouriteContextProvider;
