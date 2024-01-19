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
  return <MealList displayedMeals={favourMeals} />;
}

const styles = StyleSheet.create({});
