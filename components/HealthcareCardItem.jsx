import { View, Text, Image, FlatList } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import Colours from "../Shared/Colours";

export default function InstitutionCardItem({ healthcare, isClassic }) {
  const length = healthcare.services.length;
  return (
    <View style={{ borderRadius: 10 }}>
      {isClassic || (
        <Image
          source={{ uri: healthcare.imageUrl }}
          style={{
            width: "100%",
            height: 110,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
          }}
        />
      )}

      <View
        style={[
          {
            padding: 10,
            backgroundColor: "#ffff",
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
          },
          isClassic
            ? { borderTopLeftRadius: 10, borderTopRightRadius: 10 }
            : null,
        ]}
      >
        <Text style={{ fontSize: 18 }}>{healthcare.name}</Text>

        <FlatList
          data={healthcare.services}
          horizontal={true}
          renderItem={({ item, index }) => (
            <Text style={{ marginRight: 10 }}>
              {item}
              {index === length - 1 ? "" : ","}
            </Text>
          )}
        />

        <View
          style={{ borderBottomWidth: 1, borderColor: "#8d8d8d63", margin: 5 }}
        />
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 5,
          }}
        >
          <Ionicons name="time" size={20} color={Colours.primary} />
          <Text>{healthcare.openingHours}</Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 5,
          }}
        >
          <Ionicons name="location" size={20} color={Colours.primary} />

          <Text>{healthcare.address}</Text>
        </View>
      </View>
    </View>
  );
}

//list > cardItem
