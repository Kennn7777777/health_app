import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import Colours from "../Shared/Colours";

export default function IconButton({
  height = 100,
  text,
  icon,
  backgroundColor = Colours.white,
  fontSize = 14,
}) {
  return (
    <View
      style={[styles.gridItem(height), { backgroundColor: backgroundColor }]}
    >
      {icon}
      <Text style={styles.text(fontSize)}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  gridItem: (height) => ({
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: height,
    margin: 5,
    backgroundColor: "white",
    borderRadius: 8,
    padding: 12,
    shadowColor: Colours.black,
    elevation: 4,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  }),
  text: (fontSize) => ({
    fontSize: fontSize,
    fontFamily: "Inter-Regular",
    marginTop: 2,
    textAlign: "center",
  }),
});
