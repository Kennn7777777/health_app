import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import Colours from "../Shared/Colours";
import Constants from "../Shared/Constants";
import HeightSpacer from "../components/general/HeightSpacer";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export default function ({ setIsLogin }) {
  const [email, setEmail] = useState("12345");
  const [password, setPassword] = useState("asdasdasdasd");

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
      if (response.status === 200) {
        const { userId } = response.data;

        storeData(userId);
        setIsLogin(true);
      } else {
        Alert.alert("Invalid email or password!");
      }
    } catch (error) {
      Alert.alert("Something went wrong...");
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Text
          style={{
            textAlign: "center",
            color: "#000",
            fontSize: 32,
            fontWeight: "bold",
          }}
        >
          Health App
        </Text>
      </View>

      <HeightSpacer value={20} />

      <View style={styles.card}>
        <View style={{ paddingRight: 10 }}>
          <MaterialIcons name="email" size={24} color="black" />
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
          <AntDesign name="lock" size={24} color="black" />
        </View>
        <TextInput
          placeholder="Enter Password..."
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>

      <HeightSpacer value={30} />
      <TouchableOpacity onPress={handleLogin}>
        <View style={styles.btn}>
          <Text
            style={{
              textAlign: "center",
              color: "#fff",
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
            Login
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center", // Center vertically
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
    padding: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
});
