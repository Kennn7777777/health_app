import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import AppointmentInfo from "../components/AppointmentInfo";
import WLine from "../components/general/WLine";
import UpdateApptSection from "../components/UpdateApptSection";
import Colours from "../Shared/Colours";
import HeightSpacer from "../components/general/HeightSpacer";

export default function RescheduleAppointment() {
  const { healthcare } = useRoute().params;

  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <AppointmentInfo hospital={healthcare?.hospital} />
        <HeightSpacer value={5} />
        <WLine />
        <HeightSpacer value={10} />
        <UpdateApptSection
          id={healthcare?._id}
          note={healthcare?.note}
          serviceType={healthcare?.serviceType}
          timeslot={healthcare?.timeslot}
          date={healthcare?.date}
        />
        {/* <AppointmentSection id={healthcare._id} /> */}
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
