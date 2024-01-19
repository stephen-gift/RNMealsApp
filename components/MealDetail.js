import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function MealDetail({ duration, complexity, affordability }) {
  return (
    <View style={styles.details}>
      <Text style={styles.detail}>{duration} </Text>
      <Text style={styles.detail}>{complexity.toUpperCase()}</Text>
      <Text style={styles.detail}>{affordability.toUpperCase()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detail: {
    fontSize: 12,
    marginHorizontal: 4,
    borderColor: "#cccccc",
    borderRightWidth: 1,

    padding: 4,
  },
});
