import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import { useRoute } from "@react-navigation/native";
import HealthcareInfo from "../components/HealthcareInfo";
import SectionHeader from "../components/general/SectionHeader";
import Colours from "../Shared/Colours";

export default function HealthcareDetails({ navigation }) {
  const healthcare = useRoute().params.healthcare;

  return (
    <View style={{ flex: 1, backgroundColor: Colours.white }}>
      <Image
        source={{ uri: healthcare.imageUrl[1] }}
        resizeMode="contain"
        style={{
          width: "100%",
          height: Dimensions.get("screen").height * 0.28,
        }}
      />
      <View
        style={{
          marginTop: -20,
          backgroundColor: Colours.white,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          padding: 20,
        }}
      >
        <HealthcareInfo healthcare={healthcare} />
        <SectionHeader title="About" showView={false} />
      </View>
      <ScrollView style={{ backgroundColor: "white", marginTop: -16 }}>
        <Text style={{ paddingHorizontal: 20 }}>{healthcare.info}</Text>
      </ScrollView>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("BookAppointment", {
            healthcare: healthcare,
          })
        }
        style={{
          padding: 10,
          backgroundColor: Colours.primary,
          marginHorizontal: 20,
          marginBottom: 5,
          borderRadius: 10,
          left: 0,
          right: 0,
          zIndex: 20,
        }}
      >
        <Text style={styles.aptText}>Book Appointment</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  aptText: {
    fontSize: 16,
    fontFamily: "Inter-Bold",
    color: Colours.white,
    textAlign: "center",
  },
});
