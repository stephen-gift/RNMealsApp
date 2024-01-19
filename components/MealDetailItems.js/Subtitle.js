import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Subtitle({children}) {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  subtitleContainer: {
    padding: 6,
    marginHorizontal: 12,
    borderBottomColor: "#fff",
    borderBottomWidth: 2,
  },
  subtitle: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 6,
    color: "#e2b497",
  },
});
