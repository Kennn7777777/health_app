import { View, Text, Image, Dimensions } from "react-native";
import React from "react";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import IconButon from "./IconButton";
import { useNavigation } from "@react-navigation/native";
import SectionHeader from "./general/SectionHeader";
import {
  MaterialIcons,
  Fontisto,
  MaterialCommunityIcons,
  Ionicons,
  FontAwesome5,
} from "@expo/vector-icons";

export default function OurServices() {
  const navigation = useNavigation();

  const size = 30;
  const serviceList = [
    {
      id: 1,
      name: "Hospitals",
      icon: <FontAwesome5 name="hospital-alt" size={size} color="black" />,
    },
    {
      id: 2,
      name: "Lab results",
      icon: <Fontisto name="blood-test" size={size} color="black" />,
    },
    {
      id: 3,
      name: "Medication reminder",
      icon: <FontAwesome5 name="pills" size={size} color="black" />,
    },
    {
      id: 4,
      name: "Health Screening",
      icon: <MaterialIcons name="local-hospital" size={size} color="black" />,
    },
    {
      id: 5,
      name: "Fitness Programmes",
      icon: <Ionicons name="md-fitness" size={size * 1.2} color="black" />,
    },
    {
      id: 6,
      name: "Payments",
      icon: <MaterialIcons name="payment" size={size} color="black" />,
    },
  ];

  return (
    <View style={{ marginTop: 20 }}>
      <SectionHeader title="Our Services" />

      <FlatList
        marginTop={5}
        data={serviceList}
        numColumns={3}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return <IconButon text={item.name} icon={item.icon} fontSize={12} />;
        }}
      />
    </View>
  );
}
