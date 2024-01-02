import { View, Text, Image, FlatList, StyleSheet } from "react-native";
import React from "react";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import Colours from "../Shared/Colours";
import WLine from "../components/general/WLine";

export default function InstitutionCardItem({ healthcare, isClassic }) {
  const length = healthcare.services.length;
  const servicesArr = healthcare.services;
  const text = servicesArr.join(", ");
  const maxWords = 50;
  const truncatedText =
    text.length > maxWords ? text.slice(0, maxWords) + " ..." : text;

  return (
    <View>
      {isClassic || (
        <Image
          source={{ uri: healthcare.imageUrl[0] }}
          resizeMode="stretch"
          style={{
            width: "100%",
            height: 120,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
          }}
        />
      )}

      <View
        style={[
          {
            padding: 10,
            backgroundColor: Colours.white,
            borderBottomLeftRadius: 8,
            borderBottomRightRadius: 8,
          },
          isClassic
            ? { borderTopLeftRadius: 8, borderTopRightRadius: 8 }
            : null,
        ]}
      >
        <Text
          style={[
            styles.name({ size: 18 }),
            !isClassic ? { marginTop: -5 } : null,
          ]}
        >
          {healthcare.name}
        </Text>

        <Text style={styles.services({ size: 12 })}>{truncatedText}</Text>

        <WLine />

        <View style={styles.row}>
          <Ionicons name="time" size={16} color={Colours.primary} />
          <Text style={styles.info({ size: 14 })}>
            {healthcare.openingHours}
          </Text>
        </View>

        <View style={styles.row}>
          <MaterialIcons name="location-on" size={16} color={Colours.primary} />
          <Text style={styles.info({ size: 14 })}>{healthcare.address}</Text>
        </View>

        {/* <FlatList
          data={healthcare.services}
          horizontal={true}
          renderItem={({ item, index }) => (
            <Text style={styles.services({ size: 12 })}>
              {item.slice}
              {`${item}${index === length - 1 ? "" : ","}`}
            </Text>
          )}
        /> */}

        {/* <View
          style={{ borderBottomWidth: 1, borderColor: "#8d8d8d63", margin: 5 }}
        /> */}
        {/* <View
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
        </View> */}
      </View>
    </View>
  );
}

//list > cardItem
const styles = StyleSheet.create({
  name: ({ size }) => ({
    fontSize: size,
    fontFamily: "Inter-Bold",
    lineHeight: size * 1.5,
    color: Colours.text2,
  }),
  services: ({ size }) => ({
    fontSize: size,
    fontFamily: "Inter-Regular",
    lineHeight: size * 1.5,
    color: Colours.sub,
    marginRight: 4,
  }),
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  info: ({ size }) => ({
    fontSize: size,
    fontFamily: "Inter-Regular",
    lineHeight: size * 1.5,
    color: Colours.text,
  }),
});
