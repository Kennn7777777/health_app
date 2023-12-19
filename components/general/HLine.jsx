import { View, Text } from "react-native";
import React from "react";

export default function HLine({
  marginTop = 15,
  marginBottom = 15,
  margin = 5,
}) {
  return (
    <View
      style={{
        borderBottomWidth: 1,
        borderColor: "#8d8d8d63",
        margin: margin,
        marginTop: marginTop,
        marginBottom: marginBottom,
      }}
    />
  );
}
