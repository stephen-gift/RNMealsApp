import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function MealDetailsScreen({ route }) {
    const mealId = route.params.mealId;
  return (
    <View>
      <Text>MealDetailsScreen - {mealId}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
