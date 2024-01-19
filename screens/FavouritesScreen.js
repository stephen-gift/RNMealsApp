import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import MealList from "../components/MealsLists/MealList";
import { MEALS } from "../data/dummyData";
import { FavouriteContext } from "../store/context/favourites-context";

export default function FavouritesScreen() {
  const favouriteMealsCtx = useContext(FavouriteContext);

  const favourMeals = MEALS.filter((meal) =>
    favouriteMealsCtx.id.includes(meal.id)
  );

  if (favourMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.title}>You have no favourites meal yet</Text>
      </View>
    );
  }
  return <MealList displayedMeals={favourMeals} />;
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
