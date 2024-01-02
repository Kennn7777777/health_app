import { View, Text, FlatList, Image, Dimensions } from "react-native";
import React from "react";

const banner1 = require("../assets/banner1.png");
const banner2 = require("../assets/banner2.png");

export default function Slider() {
  const sliderList = [
    { id: 1, name: "Slider 1", imageUrl: banner1 },
    { id: 2, name: "Slider 2", imageUrl: banner2 },
    // { id: 3, name: "Slider 3", imageUrl: banner2 },
  ];

  return (
    <View style={{ marginTop: 26 }}>
      <FlatList
        data={sliderList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <Image
              source={item.imageUrl}
              style={{
                width: Dimensions.get("screen").width * 0.8,
                borderRadius: 20,
                height: 170,
              }}
            />
          );
        }}
        ItemSeparatorComponent={<View style={{ width: 8 }} />}
      />
    </View>
  );
}
