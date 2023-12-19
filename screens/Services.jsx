import { View, Text, FlatList } from "react-native";
import React from "react";
import IconButon from "../components/IconButton";
import {
  MaterialIcons,
  Fontisto,
  MaterialCommunityIcons,
  Ionicons,
  FontAwesome5,
  FontAwesome,
} from "@expo/vector-icons";

export default function Services() {
  const serviceList = [
    {
      id: 1,
      name: "Hospitals",
      icon: <FontAwesome5 name="hospital-alt" size={24} color="black" />,
    },
    {
      id: 2,
      name: "Lab results",
      icon: <Fontisto name="blood-test" size={24} color="black" />,
    },
    {
      id: 3,
      name: "Medication reminder",
      icon: <MaterialCommunityIcons name="reminder" size={24} color="black" />,
    },
    {
      id: 4,
      name: "Health Screening",
      icon: <MaterialIcons name="local-hospital" size={26} color="black" />,
    },
    {
      id: 5,
      name: "Fitness Programmes",
      icon: <Ionicons name="md-fitness" size={24} color="black" />,
    },
    {
      id: 6,
      name: "Payments",
      icon: <MaterialIcons name="payment" size={24} color="black" />,
    },
    {
      id: 7,
      name: "Health checkup",
      icon: <FontAwesome name="stethoscope" size={26} color="black" />,
    },
    {
      id: 8,
      name: "Admission & discharge",
      icon: <FontAwesome5 name="hospital-user" size={24} color="black" />,
    },
  ];
  return (
    <View style={{ flex: 1, marginHorizontal: 22, marginTop: 20 }}>
      <FlatList
        marginTop={10}
        data={serviceList}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return <IconButon height={140} text={item.name} icon={item.icon} />;
        }}
      />
    </View>
  );
}
