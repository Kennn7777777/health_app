import { View, Text } from "react-native";
import React from "react";
import Colours from "../../Shared/Colours";

export default function WLine() {
  return (
    <View
      style={{
        borderBottomWidth: 1,
        borderColor: Colours.btn,
        marginVertical: 5,
      }}
    />

    // <View
    //   style={{
    //     borderLeftWidth: 10,
    //     // borderColor: "#8d8d8d63",
    //     borderColor: "black",
    //     margin: 5,
    //     marginBottom: 15,
    //     marginTop: 15,
    //   }}
    // />
  );
}
