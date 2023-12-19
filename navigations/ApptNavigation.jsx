import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Appointment from "../screens/Appointment";
import Login from "../screens/Login";
import SearchHealthcare from "../screens/SearchHealthcare";
import HealthcareDetails from "../screens/HealthcareDetails";
import BookAppointment from "../screens/BookAppointment";

const Stack = createStackNavigator();

export default function ApptNavigation() {
  return (
    <Stack.Navigator initialRouteName="Appointment">
      <Stack.Screen
        name="Appointment"
        component={Appointment}
        options={{
          headerTitle: "Appointments",
          headerTitleAlign: "center",
        }}
        // options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SearchHealthcare"
        component={SearchHealthcare}
        options={{
          headerTitle: "Healthcare insitutions",
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="HealthcareDetails"
        component={HealthcareDetails}
        options={{
          headerTitle: "Healthcare details",
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="BookAppointment"
        component={BookAppointment}
        options={{
          headerTitle: "Appointment Booking",
          headerTitleAlign: "center",
        }}
      />
    </Stack.Navigator>
  );
}
