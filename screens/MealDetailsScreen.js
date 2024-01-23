import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useContext, useLayoutEffect, useState } from "react";
import { MEALS } from "../data/dummyData";
import MealDetail from "../components/MealDetail";
import Subtitle from "../components/MealDetailItems.js/Subtitle";
import List from "../components/MealDetailItems.js/List";
import IconButton from "../components/IconButton";
import { useDispatch, useSelector } from "react-redux";
import { addFavourite, removeFavourite } from "../store/redux/favourites";
// import { FavouriteContext } from "../store/context/favourites-context";

export default function MealDetailsScreen({ route, navigation }) {
  const favouriteMealID = useSelector((state) => state.favouritesMeals.ids);
  const dispatch = useDispatch();

  const [forceUpdate, setForceUpdate] = useState(0);

  // const favouriteMealsCtx = useContext(FavouriteContext);
  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  const mealIsFavourite = favouriteMealID.includes(mealId);

  function changeFavouriteStatusHandler() {
    if (mealIsFavourite) {
      // favouriteMealsCtx.removeFavourites(mealId);
      dispatch(removeFavourite({ id: mealId }));
    } else {
      // favouriteMealsCtx.addFavourites(mealId);
      dispatch(addFavourite({ id: mealId }));
    }
    console.log("pressed");
    setForceUpdate((prev) => prev + 1);
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            onPress={changeFavouriteStatusHandler}
            icon={mealIsFavourite ? "star" : "star-outline"}
            color={"white"}
          />
        );
      },
    });
  }, []);
  return (
    <ScrollView style={styles.rootContainer}>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <View>
        <MealDetail
          duration={selectedMeal.duration}
          complexity={selectedMeal.complexity}
          affordability={selectedMeal.affordability}
          textStyle={styles.detailText}
          style={styles.style}
        />
      </View>
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />

          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>

      {/* <Text>MealDetailsScreen - {mealId}</Text> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 30,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 24,
    margin: 8,
    color: "white",
  },
  detailText: {
    color: "white",
  },
  listOuterContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  listContainer: {
    width: "85%",
  },
});
