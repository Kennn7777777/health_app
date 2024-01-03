import { View, Text, StyleSheet } from "react-native";
import React from "react";
import SectionHeader from "../components/general/SectionHeader";
import AppointmentCardItem from "../components/AppointmentCardItem";
import HeightSpacer from "../components/general/HeightSpacer";
import useFetchAppts from "../services/useFetchAppts";
import { useNavigation } from "@react-navigation/native";

export default function AppointmentSchedule() {
  const { data, isLoading, error, refetch } = useFetchAppts();
  const navigation = useNavigation();

  // const singleAppt =
  //   data?.appointments.length !== 0 ? data?.appointments[0] : null;
  // const healthcare = {
  //   id: 1,
  //   name: "Hospital ABC",
  //   imageUrl: "https://picsum.photos/300",
  //   address: "11 Jln Tan Tock Seng, Singapore 308433",
  // };

  const handlePress = () => {
    navigation.navigate("Appointment");
  };

  return (
    <View style={{ marginTop: 20 }}>
      {data?.length > 0 ? (
        <SectionHeader
          title="Upcoming Appointments"
          showNumber={true}
          number={data?.length}
          handlePress={handlePress}
        />
      ) : (
        <SectionHeader title="Upcoming Appointments" showNumber={false} />
      )}
      <HeightSpacer value={10} />
      {data?.length > 0 ? (
        <AppointmentCardItem healthcare={data[0]} />
      ) : (
        <Text style={styles.text}>Nothing here...</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    fontFamily: "Inter-Regular",
  },
});
