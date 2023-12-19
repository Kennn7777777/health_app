import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

export default function IconButton({
  height = 100,
  text,
  icon,
  backgroundColor = "#fff",
}) {
  return (
    <View
      style={[styles.gridItem(height), { backgroundColor: backgroundColor }]}
    >
      {/* <Ionicons name="notifications-outline" size={24} /> */}
      {icon}
      <Text style={{ textAlign: "center" }}>{text}</Text>
    </View>
    // <View style={[styles.square, { backgroundColor: backgroundColor }]}>
    //   <Ionicons name="notifications-outline" size={24} />
    //   <Text>{text}</Text>
    // </View>
  );
}

// const styles = StyleSheet.create({
//   square: {
//     width: 85,
//     height: 85,
//     justifyContent: "center",
//     alignItems: "center",
//     borderRadius: 25,
//   },
// });

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  gridItem: (height) => ({
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // borderWidth: 1,
    // borderColor: "#ccc",
    height: height, // Adjust the height as needed
    margin: 5, // Adjust the margin as needed
    backgroundColor: "white",
    borderRadius: 8,
    padding: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  }),
});
