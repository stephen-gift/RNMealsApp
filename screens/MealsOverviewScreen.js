import {  StyleSheet,  } from "react-native";
import { useLayoutEffect } from "react";
import { MEALS, CATEGORIES } from "../data/dummyData";
import MealItem from "../components/MealsLists/MealItem";
import MealList from "../components/MealsLists/MealList";

export default function MealsOverviewScreen({ route, navigation }) {
  const catID = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catID) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catID
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catID, navigation]);

  // **********DONE MYSELF**********
  // function mealDetailsHandler(itemData) {
  //   navigation.navigate("MealDetails");
  // }

  

  return (
   <MealList displayedMeals={displayedMeals}/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
