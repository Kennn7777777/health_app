import { View, Text } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import AppointmentInfo from "../components/AppointmentInfo";
import HLine from "../components/general/HLine";
import AppointmentSection from "../components/AppointmentSection";

export default function BookAppointment() {
  const { healthcare } = useRoute().params;

  return (
    <View style={{ padding: 20, backgroundColor: "#ffffff" }}>
      <AppointmentInfo hospital={healthcare} />
      <HLine />

      <AppointmentSection id={healthcare._id} />
    </View>
  );
}
