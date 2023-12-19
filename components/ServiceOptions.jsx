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
      icon: <MaterialIcons name="local-hospital" size={24} color="black" />,
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
  ];

  return (
    <View style={{ marginTop: 10 }}>
      {/* <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      > 
      <Text style={{ fontSize: 20 }}>Our Services</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text>View all</Text>
        </TouchableOpacity>
      </View> */}
      <SectionHeader title="Our Services" />

      <FlatList
        marginTop={10}
        data={serviceList}
        numColumns={3}
        keyExtractor={(item) => item.id}
        // columnWrapperStyle={{
        //   flex: 1,
        //   justifyContent: "space-between",
        // }}
        renderItem={({ item }) => {
          return <IconButon text={item.name} icon={item.icon} />;
        }}
      />
    </View>
  );
}
