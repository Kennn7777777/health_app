import React from "react";
import { Text, View, ScrollView, StyleSheet } from "react-native";
import Header from "../components/Header";
import Slider from "../components/Slider";
import ServiceOptions from "../components/ServiceOptions";
import AppointmentSchedule from "../components/AppointmentSchedule";
import Colours from "../Shared/Colours";

export default function Home() {
  return (
    <View style={styles.root}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <Header />
        <Slider />
        <AppointmentSchedule />
        <ServiceOptions />
      </ScrollView>
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
    marginHorizontal: 16.5,
    marginTop: 44,
  },
});
