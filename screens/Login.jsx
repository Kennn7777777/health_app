import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
  ActivityIndicator,
  Modal,
} from "react-native";
import Colours from "../Shared/Colours";
import Constants from "../Shared/Constants";
import HeightSpacer from "../components/general/HeightSpacer";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export default function ({ setIsLogin }) {
  const [email, setEmail] = useState("test.email@gmail.com");
  const [password, setPassword] = useState("12345678");
  const [isLoading, setIsLoading] = useState(false);

  const storeData = async (value) => {
    await AsyncStorage.setItem(Constants.userid, value);
  };

  const getData = async () => {
    const value = await AsyncStorage.getItem(Constants.userid);
    return value;
  };

  const handleLogin = async () => {
    try {
      const data = { email: email, password: password };

      const response = await axios.post(`${Constants.url}/login`, data);
      setIsLoading(true);
      if (response.status === 200) {
        const { userId } = response.data;

        storeData(userId);
        setTimeout(() => {
          setIsLoading(false);
          setIsLogin(true);
        }, 2000);
      }
    } catch (error) {
      setIsLoading(false);
      Alert.alert("Invalid email or password!");
      console.log(error);
    }
  };

  return (
    <>
      <View style={styles.container}>
        <View>
          <Text
            style={{
              marginTop: "40%",
              textAlign: "center",
              color: "#000",
              fontSize: 32,
              fontFamily: "Inter-Bold",
            }}
          >
            Health App
          </Text>
        </View>

        <HeightSpacer value={100} />

        <View style={styles.card}>
          <View style={{ paddingRight: 10 }}>
            <MaterialIcons name="email" size={24} color={Colours.icon} />
          </View>
          <TextInput
            placeholder="Enter Email..."
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </View>

        <HeightSpacer value={10} />

        <View style={styles.card}>
          <View style={{ paddingRight: 10 }}>
            <MaterialIcons name="lock" size={24} color={Colours.icon} />
          </View>
          <TextInput
            placeholder="Enter Password..."
            secureTextEntry={true}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </View>

        <HeightSpacer value={30} />

        <TouchableOpacity onPressOut={handleLogin}>
          <View style={styles.btn}>
            <Text
              style={{
                textAlign: "center",
                color: Colours.white,
                fontSize: 18,
                fontFamily: "Inter-Bold",
              }}
            >
              Login
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <Modal transparent={true} animationType="slide" visible={isLoading}>
        <View style={styles.overlay}>
          <ActivityIndicator size="large" color={Colours.primary} />
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colours.background,
    // justifyContent: "center", // Center vertically
  },
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.1)",
  },
  btn: {
    padding: 13,
    backgroundColor: Colours.primary,
    margin: 10,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  card: {
    // width: "75%",
    flexDirection: "row",
    marginHorizontal: 20,
    backgroundColor: "white",
    borderRadius: 8,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    alignContent: "center",
    alignItems: "center",
  },
});
