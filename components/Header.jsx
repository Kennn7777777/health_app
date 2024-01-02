import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import Colours from "../Shared/Colours";

export default function Header() {
  return (
    <View>
      <View style={styles.container}>
        <View>
          <Text style={styles.welcome({ size: 18 })}>Welcome back</Text>
          <Text style={styles.name({ size: 14 })}>John Doe</Text>
        </View>
        <View style={styles.icons}>
          <Ionicons name="notifications" {...styles.icon} />
          <Ionicons name="settings" {...styles.icon} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  welcome: ({ size }) => ({
    fontSize: size,
    fontFamily: "Inter-Bold",
    lineHeight: size * 1.5,
    color: Colours.text_main,
  }),
  name: ({ size }) => ({
    fontSize: size,
    fontFamily: "Inter-Regular",
    lineHeight: size * 1.5,
    color: Colours.text,
  }),
  icons: {
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    marginRight: 5,
    gap: 5,
  },
  icon: {
    size: 28,
    color: Colours.sub,
  },
});

// View are like Row/Column
// display: 'flex',
// flexDirection:'row',
// alignItems:'center' or alignContent: 'center',
// justifyContent: 'space-between'
// gap: 7
