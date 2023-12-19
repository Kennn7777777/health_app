import React from "react";
import { Text, View, ScrollView } from "react-native";
import Header from "../components/Header";
import Slider from "../components/Slider";
import ServiceOptions from "../components/ServiceOptions";
import AppointmentSchedule from "../components/AppointmentSchedule";

const Home = () => {
  return (
    <View style={{ flex: 1, marginHorizontal: 22, marginTop: 20 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header />
        <Slider />
        <AppointmentSchedule />

        <ServiceOptions />
      </ScrollView>
    </View>
  );
};

export default Home;
