import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
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
  handlePress,
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
        <Text style={styles.title({ size: 16 })}>{title}</Text>
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
            <Text style={styles.number({ size: 12 })}>{number}</Text>
          </View>
        )}
      </View>
      {showView && (
        <TouchableOpacity onPress={handlePress}>
          <Text style={styles.btnTitle({ size: 14 })}>{btnTitle}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  title: ({ size }) => ({
    fontSize: size,
    fontFamily: "Inter-Bold",
    lineHeight: size * 1.5,
    color: Colours.text_main,
  }),
  number: ({ size }) => ({
    fontSize: size,
    fontFamily: "Inter-Bold",
    lineHeight: size * 1.5,
    color: Colours.white,
  }),
  btnTitle: ({ size }) => ({
    fontSize: size,
    fontFamily: "Inter-Medium",
    lineHeight: size * 1.5,
    color: Colours.text,
  }),
});
