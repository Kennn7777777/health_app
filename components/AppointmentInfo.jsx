import { View, Text, Image } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import Colours from "../Shared/Colours";

export default function AppointmentInfo({
  hospital,
  imageSize = 100,
  headingSize = 20,
  locationSize = 16,
}) {
  return (
    <View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 15,
        }}
      >
        <Image
          source={{ uri: hospital?.imageUrl }}
          style={{ width: imageSize, height: imageSize, borderRadius: 99 }}
        />
        <View>
          <Text style={{ fontSize: headingSize, marginBottom: 8 }}>
            {hospital?.name}
          </Text>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
            }}
          >
            <Ionicons
              name="location"
              size={imageSize / 3.5}
              color={Colours.primary}
            />
            <Text
              style={{
                fontSize: locationSize,
                color: "#0f010160",
                width: "70%",
              }}
            >
              {hospital?.address}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
