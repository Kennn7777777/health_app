import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React from "react";
import {
  Ionicons,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import Colours from "../Shared/Colours";

export default function ActionButtons() {
  const actionButtonList = [
    {
      id: 1,
      name: "Website",
      icon: <Ionicons name="earth" size={23} color={Colours.primary} />,
    },
    {
      id: 2,
      name: "Directions",
      icon: (
        <FontAwesome5 name="directions" size={24} color={Colours.primary} />
      ),
    },
    {
      id: 3,
      name: "Call",
      icon: <Ionicons name="call" size={24} color={Colours.primary} />,
    },
    {
      id: 4,
      name: "Email",
      icon: (
        <MaterialCommunityIcons
          name="email"
          size={24}
          color={Colours.primary}
        />
      ),
    },
  ];

  return (
    <View style={{ marginTop: 10 }}>
      <FlatList
        data={actionButtonList}
        columnWrapperStyle={{
          flex: 1,
          justifyContent: "space-around",
        }}
        numColumns={actionButtonList.length}
        renderItem={({ item }) => (
          <TouchableOpacity style={{ alignItems: "center" }}>
            <View
              style={{
                backgroundColor: Colours.secondary,
                padding: 10,
                borderRadius: 99,
                alignItems: "center",
              }}
            >
              {item.icon}
            </View>
            <Text style={styles.name({ size: 12 })}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  name: ({ size }) => ({
    fontSize: size,
    fontFamily: "Inter-Regular",
    lineHeight: size * 1.5,
    color: Colours.black,
    marginTop: 2,
  }),
});
