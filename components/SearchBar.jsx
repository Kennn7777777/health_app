import { View, Text, StyleSheet, TouchableOpacity, Modal } from "react-native";
import React, { useState } from "react";
import {
  Ionicons,
  FontAwesome,
  MaterialIcons,
  Octicons,
} from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";
import Colours from "../Shared/Colours";
import SearchHealthcare from "../screens/SearchHealthcare";

export default function SearchBar({
  isClassic,
  SetIsClassic,
  isFilterOpen,
  SetIsFilterOpen,
  searchHealthcare,
}) {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          alignContent: "center",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View style={styles.card}>
          <View style={{ flexDirection: "row", gap: 5 }}>
            <Ionicons name="search-outline" size={24} color="black" />
            <TextInput
              placeholder="Seach Healthcare institutions..."
              onChangeText={(text) => searchHealthcare(text)}
            />
          </View>
        </View>
        <TouchableOpacity onPress={() => SetIsFilterOpen((set) => !set)}>
          <View
            style={{
              backgroundColor: "white",
              padding: 10,
              borderRadius: 8,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 1,
              },
              shadowOpacity: 0.2,
              shadowRadius: 1.41,
              elevation: 2,
            }}
          >
            <FontAwesome name="filter" size={24} color="black" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => SetIsClassic((set) => !set)}>
          <View
            style={{
              backgroundColor: "white",
              padding: 10,
              borderRadius: 8,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 1,
              },
              shadowOpacity: 0.2,
              shadowRadius: 1.41,
              elevation: 2,
            }}
          >
            {isClassic ? (
              <MaterialIcons name="table-rows" size={24} color="black" />
            ) : (
              <Octicons name="rows" size={24} color="black" />
            )}
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    // margin: 16,
    // height: 160
    width: "75%",
    backgroundColor: "white",
    borderRadius: 8,
    padding: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    // flex: 1,
    // position: "relative",
  },
});
