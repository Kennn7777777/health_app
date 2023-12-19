import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Login from "../screens/Login";
import Appointment from "../screens/Appointment";
import HomeNavigation from "./HomeNavigation";
import ApptNavigation from "./ApptNavigation";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import Services from "../screens/Services";
import HealthProfiles from "../screens/HealthProfiles";

const Tab = createBottomTabNavigator();

const screenOptions = {
  tabBarHideOnKeyboard: true,
  //   headerShown: false,
};

const tabBarStyle = {
  position: "absolute",
  bottom: 20,
  left: 20,
  right: 20,
};

const TabNavigation = () => {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="HomeNav"
        component={HomeNavigation}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
          tabBarLabel: "Home",
        }}
        //options={{ headerShown: false, tabBarStyle: tabBarStyle }}
      />

      <Tab.Screen
        name="Services"
        component={Services}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="grid-outline" size={size} color={color} />
          ),
          tabBarLabel: "Services",
          headerTitle: "Services",
          headerTitleAlign: "center",
        }}
      />
      <Tab.Screen
        name="ApptNav"
        component={ApptNavigation}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar" size={size} color={color} />
          ),
          tabBarLabel: "Appointments",
        }}
      />
      <Tab.Screen
        name="Profile"
        component={HealthProfiles}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="users" size={size} color={color} />
          ),
          tabBarLabel: "Health Profiles",
          headerTitle: "Health Profiles",
          headerTitleAlign: "center",
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
