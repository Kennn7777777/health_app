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
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const Stack = createStackNavigator();

export default function App() {
  const [isLogin, setIsLogin] = useState(false);

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
        <GestureHandlerRootView style={{ flex: 1 }}>
          <BottomSheetModalProvider>
            <NavigationContainer>
              <Stack.Navigator>
                <Stack.Screen
                  name="Tab"
                  component={TabNavigation}
                  options={{ headerShown: false }}
                />
              </Stack.Navigator>
            </NavigationContainer>
          </BottomSheetModalProvider>
        </GestureHandlerRootView>
      ) : (
        <Login setIsLogin={setIsLogin} />
      )}
      <StatusBar
        style="dark"
        translucent={false}
        backgroundColor="rgba(0, 0, 0, 0.0)"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colours.background,
  },
});
