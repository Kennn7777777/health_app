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
import Colours from "../Shared/Colours";

export default function Services() {
  const size = 45;
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
      name: "Medication \nreminder",
      icon: <FontAwesome5 name="pills" size={size} color="black" />,
    },
    {
      id: 4,
      name: "Health \nScreening",
      icon: (
        <MaterialIcons name="local-hospital" size={size * 1.2} color="black" />
      ),
    },
    {
      id: 5,
      name: "Fitness \nProgrammes",
      icon: <Ionicons name="md-fitness" size={size} color="black" />,
    },
    {
      id: 6,
      name: "Payments",
      icon: <MaterialIcons name="payment" size={size * 1.1} color="black" />,
    },
    {
      id: 7,
      name: "Health checkup",
      icon: <FontAwesome name="stethoscope" size={size * 1.1} color="black" />,
    },
    {
      id: 8,
      name: "Admission & discharge",
      icon: <FontAwesome5 name="hospital-user" size={size} color="black" />,
    },
  ];
  return (
    <View style={{ flex: 1, backgroundColor: Colours.background }}>
      <View
        style={{
          flex: 1,
          marginHorizontal: 22,
          marginTop: 20,
        }}
      >
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
    </View>
  );
}
