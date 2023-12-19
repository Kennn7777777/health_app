import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import TabNavigation from "./navigations/TabNavigation";
import Login from "./screens/Login";
import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
  const [isLogin, setIsLogin] = useState(false);
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

            {/* <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          /> */}
          </Stack.Navigator>
          {/* <TabNavigation /> */}
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
    backgroundColor: "#fff",
  },
});
