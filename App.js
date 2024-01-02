import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import TabNavigation from "./navigations/TabNavigation";
import Login from "./screens/Login";
import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Colours from "./Shared/Colours";
import { useFonts } from "expo-font";

const Stack = createStackNavigator();

export default function App() {
  const [isLogin, setIsLogin] = useState(true);

  let [fontsLoaded] = useFonts({
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
    "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      {isLogin ? (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Tab"
              component={TabNavigation}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      ) : (
        <Login setIsLogin={setIsLogin} />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colours.background,
  },
});
