import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import ActionButtons from "./ActionButtons";
import Colours from "../Shared/Colours";
import WLine from "./general/WLine";

export default function HealthcareInfo({ healthcare }) {
  return (
    <View>
      <Text style={styles.title({ size: 20 })}>{healthcare.name}</Text>

      <WLine />

      <View style={styles.row}>
        <Ionicons name="time" size={16} color={Colours.primary} />
        <Text style={styles.info({ size: 16 })}>{healthcare.openingHours}</Text>
      </View>

      <View style={styles.row}>
        <MaterialIcons name="location-on" size={16} color={Colours.primary} />
        <Text style={styles.info({ size: 16 })}>{healthcare.address}</Text>
      </View>

      <ActionButtons />

      <WLine />
    </View>
  );
}

const styles = StyleSheet.create({
  title: ({ size }) => ({
    fontSize: size,
    fontFamily: "Inter-Bold",
    lineHeight: size * 1.5,
    color: Colours.text2,
  }),
  info: ({ size }) => ({
    fontSize: size,
    fontFamily: "Inter-Regular",
    lineHeight: size * 1.5,
    color: Colours.text,
  }),
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
});
