import { View, Text, FlatList } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import HealthcareCardItem from "./HealthcareCardItem";
import { useNavigation } from "@react-navigation/native";

export default function HealthecarelListView({ healthcareList, isClassic }) {
  const navigation = useNavigation();

  return (
    // flex here so that there is a "size" for it to be scrollable
    <View style={{ flex: 1 }}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={healthcareList}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("HealthcareDetails", {
                healthcare: item,
              })
            }
          >
            <HealthcareCardItem healthcare={item} isClassic={isClassic} />
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={<View style={{ height: 10 }} />}
      />
    </View>
  );
}
