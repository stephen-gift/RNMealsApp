import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function MealDetail({
  duration,
  complexity,
  affordability,
  style,
  textStyle,
}) {
  return (
    <View style={[styles.details, style]}>
      <Text style={[styles.detail, textStyle]}>{duration} </Text>
      <Text style={[styles.detail, textStyle]}>{complexity.toUpperCase()}</Text>
      <Text style={[styles.detail, textStyle]}>
        {affordability.toUpperCase()}
      </Text>
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
    padding: 4,
  },
});
