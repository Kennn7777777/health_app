import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Colours from "../../Shared/Colours";

// http://10.0.2.2:3000/login/   android emulator
// http://localhost:3000
export default function SectionHeader({
  title,
  number = 0,
  btnTitle = "View all",
  showNumber = false,
  showView = true,
}) {
  const navigation = useNavigation();

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 10,
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>{title}</Text>
        {showNumber && (
          <View
            style={{
              backgroundColor: Colours.primary,
              borderRadius: 10,
              width: 20,
              height: 20,
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 14, color: "#fff", fontWeight: "bold" }}>
              {number}
            </Text>
          </View>
        )}
      </View>
      {showView && (
        <TouchableOpacity onPress={() => {}}>
          <Text style={{ fontWeight: "bold", color: Colours.primary }}>
            {btnTitle}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
