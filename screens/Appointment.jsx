import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import AppointmentCardItem from "../components/AppointmentCardItem";
import HeightSpacer from "../components/general/HeightSpacer";
import useFetchAppts from "../services/useFetchAppts";
import Colours from "../Shared/Colours";

export default function Appointment({ navigation }) {
  const [activeTab, SetIsActiveTab] = useState(0);
  const { data, isLoading, error } = useFetchAppts();
  // const apptList = data?.appointments;

  // const healthcare = [
  //   {
  //     id: 1,
  //     name: "Hospital ABC",
  //     imageUrl: "https://picsum.photos/300",
  //     address: "11 Jln Tan Tock Seng, Singapore 308433",
  //   },
  //   {
  //     id: 2,
  //     name: "Hospital 123",
  //     imageUrl: "https://picsum.photos/300",
  //     address: "11 Jln Tan Tock Seng, Singapore 308433",
  //   },
  //   {
  //     id: 3,
  //     name: "Hospital 123",
  //     imageUrl: "https://picsum.photos/300",
  //     address: "11 Jln Tan Tock Seng, Singapore 308433",
  //   },
  // ];

  // fetch all upcoming and history appointments
  const fetchData = async () => {
    console.log(apptList);
    // load all at one go then filter from there
  };

  return (
    <View style={{ flex: 1, marginHorizontal: 22, marginTop: 20 }}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            SetIsActiveTab(0);
            // fetchData();
          }}
        >
          <Text style={activeTab === 0 ? styles.active : styles.inactive}>
            Upcoming
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => SetIsActiveTab(1)}>
          <Text style={activeTab === 1 ? styles.active : styles.inactive}>
            History
          </Text>
        </TouchableOpacity>
      </View>

      <HeightSpacer value={10} />

      {/* List of healthcare insitutions */}
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <AppointmentCardItem healthcare={item} enableButtons={true} />
        )}
        ItemSeparatorComponent={<View style={{ height: 10 }} />}
      />
      {/* <AppointmentCardItem healthcare={healthcare} /> */}

      {/* Book New Appointment button */}
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("SearchHealthcare");
        }}
      >
        <View style={styles.newAptBtn}>
          <Text style={{ color: "white", fontWeight: "bold" }}>
            Book a New Appointment
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  active: {
    textAlign: "center",
    fontSize: 18,
    color: "#0062f5",
    textDecorationLine: "underline",
  },
  inactive: {
    textAlign: "center",
    fontSize: 18,
    color: "#000",
  },
  newAptBtn: {
    textAlign: "center",
    alignItems: "center",
    backgroundColor: Colours.primary,
    borderRadius: 16,
    paddingVertical: 10,
    marginBottom: 10,
  },
});
