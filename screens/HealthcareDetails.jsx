import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import { useRoute } from "@react-navigation/native";
import HealthcareInfo from "../components/HealthcareInfo";
import SectionHeader from "../components/general/SectionHeader";
import Colours from "../Shared/Colours";

export default function HealthcareDetails({ navigation }) {
  const healthcare = useRoute().params.healthcare;

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView>
        <Image
          source={{ uri: healthcare.imageUrl }}
          style={{ width: "100%", height: 200 }}
        />
        <View
          style={{
            marginTop: -20,
            backgroundColor: "#ffff",
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            padding: 20,
          }}
        >
          <HealthcareInfo healthcare={healthcare} />
        </View>

        <View style={{ marginHorizontal: 22, marginTop: -20 }}>
          <SectionHeader title="About" showView={false} />
          <Text style={{ marginTop: 10 }}>{healthcare.info}</Text>
        </View>
      </ScrollView>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("BookAppointment", {
            healthcare: healthcare,
          })
        }
        style={{
          padding: 13,
          backgroundColor: Colours.primary,
          margin: 10,
          borderRadius: 10,
          left: 0,
          right: 0,
          zIndex: 20,
        }}
      >
        <Text style={{ textAlign: "center", color: "#fff" }}>
          Book Appointment
        </Text>
      </TouchableOpacity>
    </View>
  );
}
