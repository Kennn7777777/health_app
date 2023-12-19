import { View, Text, FlatList, Image, Dimensions } from "react-native";
import React from "react";

export default function Slider() {
  const sliderList = [
    { id: 1, name: "Slider 1", imageUrl: "https://picsum.photos/300" },
    { id: 2, name: "Slider 2", imageUrl: "https://picsum.photos/200" },
    { id: 3, name: "Slider 3", imageUrl: "https://picsum.photos/300" },
  ];

  return (
    <View style={{ marginTop: 30 }}>
      <FlatList
        data={sliderList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <Image
              source={{ uri: item.imageUrl }}
              style={{
                width: Dimensions.get("screen").width * 0.8,
                borderRadius: 10,
                height: 170,
              }}
            />
          );
        }}
        ItemSeparatorComponent={<View style={{ width: 2 }} />}
      />
    </View>
  );
}
