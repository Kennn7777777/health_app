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
  // isFilterOpen,
  // SetIsFilterOpen,
  handleOpenPress,
  searchHealthcare,
}) {
  return (
    <View>
      {/* <View
        style={{
          flexDirection: "row",
          alignContent: "center",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      > */}
      <View style={styles.card}>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            gap: 5,
            alignItems: "center",
          }}
        >
          <Ionicons name="search-outline" size={22} color={Colours.sub} />
          <TextInput
            placeholder="Search ..."
            placeholderTextColor={Colours.sub}
            onChangeText={(text) => searchHealthcare(text)}
          />
        </View>

        <View style={{ flexDirection: "row", gap: 5, marginRight: 10 }}>
          <TouchableOpacity onPress={handleOpenPress}>
            <View style={styles.btn}>
              <FontAwesome name="filter" size={24} color={Colours.white} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => SetIsClassic((set) => !set)}>
            <View style={styles.btn}>
              {isClassic ? (
                <MaterialIcons
                  name="table-rows"
                  size={24}
                  color={Colours.white}
                />
              ) : (
                <Octicons name="rows" size={24} color={Colours.white} />
              )}
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
    // </View>
  );
}

const styles = StyleSheet.create({
  card: {
    // margin: 16,
    height: 50,
    flexDirection: "row",
    width: "100%",
    backgroundColor: Colours.white,
    borderRadius: 10,
    paddingLeft: 10,
    paddingVertical: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    alignItems: "center",
    // flex: 1,
    // position: "relative",
  },

  btn: {
    backgroundColor: Colours.primary,
    // padding: 10,
    borderRadius: 8,
    width: 38,
    height: 38,
    alignItems: "center",
    justifyContent: "center",
    // width: 100,
    // padding: 8,
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 1,
    // },
    // shadowOpacity: 0.2,
    // shadowRadius: 1.41,
    // elevation: 2,
  },
});
