import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Colours from "../Shared/Colours";

export default function History() {
  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <Text style={styles.text}>No past history ...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colours.background,
  },
  container: {
    flex: 1,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 16,
    fontFamily: "Inter-Regular",
    color: Colours.text2,
  },
});
