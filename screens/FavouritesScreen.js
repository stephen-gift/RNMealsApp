import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import MealList from "../components/MealsLists/MealList";
import { MEALS } from "../data/dummyData";
import { FavouriteContext } from "../store/context/favourites-context";
import { useSelector } from "react-redux";

export default function FavouritesScreen() {
  // const favouriteMealsCtx = useContext(FavouriteContext);

  const favouriteMealds = useSelector((state) => {
    console.log(state); // Log the entire state to see its structure
    return state.favouritesMeals.ids || [];
  });

  const favouriteMeals = MEALS.filter((meal) =>
    // favouriteMealsCtx.id.includes(meal.id)
    favouriteMealds.includes(meal.id)
  );

  if (favouriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.title}>You have no favourites meal yet</Text>
      </View>
    );
  }
  return <MealList displayedMeals={favouriteMeals} />;
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    color: "white",
  },
});
