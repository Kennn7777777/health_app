import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import TopTabsGroup from "../screens/Appointment";
import Login from "../screens/Login";
import SearchHealthcare from "../screens/SearchHealthcare";
import HealthcareDetails from "../screens/HealthcareDetails";
import BookAppointment from "../screens/BookAppointment";
import Colours from "../Shared/Colours";

const Stack = createStackNavigator();

export default function ApptNavigation() {
  return (
    <Stack.Navigator initialRouteName="Appointment">
      <Stack.Screen
        name="Appointment"
        component={TopTabsGroup}
        options={{
          headerTitle: "My Appointments",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: Colours.background,
          },
        }}
        // options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SearchHealthcare"
        component={SearchHealthcare}
        options={{
          headerTitle: "Healthcare Insitutions",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: Colours.background,
          },
        }}
      />
      <Stack.Screen
        name="HealthcareDetails"
        component={HealthcareDetails}
        options={{
          headerTitle: "Healthcare Details",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: Colours.background,
          },
        }}
      />
      <Stack.Screen
        name="BookAppointment"
        component={BookAppointment}
        options={{
          headerTitle: "Book Appointment",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: Colours.background,
          },
        }}
      />
    </Stack.Navigator>
  );
}
