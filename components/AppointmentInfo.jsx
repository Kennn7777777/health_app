import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import Colours from "../Shared/Colours";

export default function AppointmentInfo({
  hospital,
  imageSize = 100,
  headingSize = 20,
  locationSize = 16,
}) {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 15,
      }}
    >
      {/* <Image
          source={{ uri: hospital?.imageUrl }}
          style={{ width: imageSize, height: imageSize, borderRadius: 99 }}
        /> */}
      <View>
        <Text style={styles.hospital({ size: headingSize })}>
          {hospital?.name}
        </Text>

        {/* icon & location */}
        <View style={styles.location_container}>
          <MaterialIcons name="location-on" size={16} color={Colours.primary} />
          <Text style={styles.address({ size: locationSize })}>
            {hospital?.address}
          </Text>
        </View>

        {/* <Text style={{ fontSize: headingSize, marginBottom: 8 }}>
            {hospital?.name}
          </Text> */}

        {/* <View
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
          </View> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  hospital: ({ size }) => ({
    fontSize: size,
    fontFamily: "Inter-Bold",
    lineHeight: size * 1.5,
    color: Colours.text_main,
  }),
  location_container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
  },
  address: ({ size }) => ({
    fontSize: size,
    fontFamily: "Inter-Regular",
    lineHeight: size * 1.5,
    color: Colours.text,
  }),
});
