import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

export default function Header() {
  return (
    <View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View>
          <Text style={{ fontSize: 24, fontWeight: "bold" }}>Welcome</Text>
          <Text>Name</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <Ionicons name="notifications-outline" size={24} />
          <Ionicons name="settings-outline" size={24} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});

// View are like Row/Column
// display: 'flex',
// flexDirection:'row',
// alignItems:'center' or alignContent: 'center',
// justifyContent: 'space-between'
// gap: 7
