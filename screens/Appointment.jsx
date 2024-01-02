import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import AppointmentCardItem from "../components/AppointmentCardItem";
import HeightSpacer from "../components/general/HeightSpacer";
import useFetchAppts from "../services/useFetchAppts";
import Colours from "../Shared/Colours";
import History from "./History";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

// Top tabs
const TopTabs = createMaterialTopTabNavigator();
const totalWidth = Dimensions.get("screen").width;

export default function TopTabsGroup() {
  return (
    <TopTabs.Navigator
      screenOptions={{
        tabBarIndicatorContainerStyle: {
          backgroundColor: Colours.background,
        },
        tabBarLabelStyle: {
          textTransform: "capitalize",
          fontFamily: "Inter-SemiBold",
          fontSize: 16,
        },
        tabBarIndicatorStyle: {
          height: 4,
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
          backgroundColor: Colours.primary,
          width: totalWidth / 4,
          left: totalWidth / 8,
        },
        tabBarActiveTintColor: Colours.primary,
        tabBarInactiveTintColor: Colours.sub,
        tabBarStyle: {
          borderTopWidth: 0,
          borderTopColor: "transparent",
          elevation: 0,
        },
      }}
    >
      <TopTabs.Screen name="Upcoming" component={Appointment} />
      <TopTabs.Screen name="History" component={History} />
    </TopTabs.Navigator>
  );
}

function Appointment({ navigation }) {
  const [activeTab, SetIsActiveTab] = useState(0);
  const { data, isLoading, error } = useFetchAppts();
  // const apptList = data?.appointments;

  return (
    <View style={styles.root}>
      <View style={styles.container}>
        {/* <View
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

      <HeightSpacer value={10} /> */}

        {/* List of healthcare insitutions */}
        <FlatList
          // style={{ backgroundColor: "pink" }}
          contentContainerStyle={{ paddingVertical: 10 }}
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
            <Text style={styles.aptText}>Book a New Appointment</Text>
          </View>
        </TouchableOpacity>
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
    marginHorizontal: 16.5,
    marginTop: 5,
    backgroundColor: Colours.background,
  },
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
    borderRadius: 10,
    paddingVertical: 10,
    marginBottom: 10,
  },
  aptText: {
    fontSize: 16,
    fontFamily: "Inter-Bold",
    color: Colours.white,
  },
});
