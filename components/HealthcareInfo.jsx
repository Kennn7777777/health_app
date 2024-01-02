import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import ActionButtons from "./ActionButtons";
import Colours from "../Shared/Colours";

export default function HealthcareInfo({ healthcare }) {
  return (
    <View>
      <Text style={styles.title({ size: 20 })}>{healthcare.name}</Text>

      <View
        style={{
          borderBottomWidth: 1,
          borderColor: "#8d8d8d63",
          margin: 5,
          marginBottom: 15,
        }}
      />

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 5,
        }}
      >
        <Ionicons name="time" size={22} color={Colours.primary} />
        <Text style={{ fontSize: 16, color: "#0f010160" }}>
          {healthcare.openingHours}
        </Text>
      </View>

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 5,
        }}
      >
        <Ionicons name="location" size={22} color={Colours.primary} />
        <Text style={{ fontSize: 16, color: "#0f010160" }}>
          {healthcare.address}
        </Text>
      </View>

      <ActionButtons />

      <View
        style={{
          borderBottomWidth: 1,
          borderColor: "#8d8d8d63",
          margin: 5,
          marginBottom: 15,
          marginTop: 15,
        }}
      />
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
});
