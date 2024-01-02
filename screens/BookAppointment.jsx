import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import AppointmentInfo from "../components/AppointmentInfo";
import WLine from "../components/general/WLine";
import AppointmentSection from "../components/AppointmentSection";
import Colours from "../Shared/Colours";
import HeightSpacer from "../components/general/HeightSpacer";

export default function BookAppointment() {
  const { healthcare } = useRoute().params;

  return (
    <View style={styles.root}>
      {/* <View style={{ padding: 20, backgroundColor: Colours.background }}> */}
      <View style={styles.container}>
        <AppointmentInfo hospital={healthcare} />
        <HeightSpacer value={5} />
        <WLine />
        <HeightSpacer value={10} />
        <AppointmentSection id={healthcare._id} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colours.background,
  },
  container: {
    flex: 1,
    marginHorizontal: 20,
    marginTop: 20,
  },
});
