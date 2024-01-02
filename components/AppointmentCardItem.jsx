import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import AppointmentInfo from "./AppointmentInfo";
import HeightSpacer from "./general/HeightSpacer";
import WLine from "./general/WLine";
import moment from "moment";
import Colours from "../Shared/Colours";
import axios from "axios";
import Constants from "../Shared/Constants";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function AppointmentCardItem({
  healthcare,
  enableButtons = false,
}) {
  const hospital = healthcare?.hospital;
  // const { name } = hospital;
  const [user_id, setUserId] = useState();

  useEffect(() => {
    const getId = async () => {
      const data = await AsyncStorage.getItem(Constants.userid);
      setUserId(data);
    };
    getId();
  }, []);

  const handleCancel = () => {
    Alert.alert("Confirm", "Are you sure?", [
      { text: "Cancel", onPress: () => {} },
      {
        text: "Ok",
        onPress: async () => {
          const submitData = {
            userId: user_id,
            apptId: healthcare._id,
          };

          try {
            await axios.delete(`${Constants.url}/api/appointments/delete`, {
              data: submitData,
            });
            Alert.alert("Success", "Deleted booking successfully!");
          } catch (error) {
            console.log(error);
            Alert.alert("Error cancelling");
          }
        },
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <View>
        <AppointmentInfo
          hospital={hospital}
          imageSize={60}
          headingSize={16}
          locationSize={14}
        />

        <HeightSpacer value={5} />

        <Text style={styles.serviceType({ size: 14 })}>
          {healthcare?.serviceType}
        </Text>

        <HeightSpacer value={5} />
      </View>

      <WLine />

      <HeightSpacer value={5} />

      <View style={styles.datetime}>
        <Text style={styles.datetext({ size: 14 })}>
          {moment(healthcare?.date).format("ddd, DD MMMM YYYY")} -{" "}
          {healthcare?.timeslot}
        </Text>
      </View>

      {/* <View style={{ flexDirection: "row", gap: 100 }}>
          <Text>{healthcare?.serviceType}</Text>
        </View> */}

      {/* <View
        style={{
          borderRadius: 99,
          borderWidth: 1,
          borderColor: Colours.primary,
          backgroundColor: Colours.primary,
          right: 10,
          top: 10,
          height: 50,
          width: 50,
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
        }}
      >
        <FontAwesome name="phone" size={24} color={Colours.secondary} />
      </View> */}
      {/* <View style={styles.datetime}>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 5,
            }}
          >
            <FontAwesome5 name="calendar-alt" size={14} color="black" />
            <Text>Mon, 12 December, 2024</Text>
            <Text>{moment(healthcare?.date).format("ddd, DD MMMM YYYY")}</Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Ionicons name="time-outline" size={18} color="black" />
            <Text>{healthcare?.timeslot}</Text>
          </View>
        </View>
      </View> */}

      {enableButtons && (
        <View style={styles.addBtns}>
          <View style={styles.btn({ color: Colours.btn })}>
            <TouchableOpacity onPress={handleCancel}>
              <Text style={styles.btnText({ size: 14, color: Colours.black })}>
                Cancel
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.btn({ color: Colours.primary })}>
            <TouchableOpacity onPress={() => {}}>
              <Text style={styles.btnText({ size: 14, color: Colours.white })}>
                Reschedule
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // margin: 16,
    // height: 160,
    backgroundColor: Colours.white,
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 14,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    position: "relative",
  },
  datetime: {
    backgroundColor: Colours.secondary,
    borderRadius: 6,
    alignContent: "center",
    alignItems: "center",
  },
  datetext: ({ size }) => ({
    fontSize: size,
    fontFamily: "Inter-Medium",
    lineHeight: size * 1.5,
    color: Colours.primary,
    paddingVertical: 5,
  }),
  // datetime: {
  //   // margin: 16,
  //   height: 40,
  //   width: "95%",
  //   backgroundColor: "white",
  //   borderRadius: 8,
  //   //padding: 12,
  //   paddingHorizontal: 20,
  //   shadowColor: "#000",
  //   shadowOffset: {
  //     width: 0,
  //     height: 1,
  //   },
  //   shadowOpacity: 0.2,
  //   shadowRadius: 1.41,
  //   elevation: 2,
  //   // bottom: 10,
  //   // flex: 1,
  //   // flexDirection: "row",
  //   // justifyContent: "space-between",
  //   // alignItems: "center",
  //   alignSelf: "center",
  //   marginTop: 10,
  //   // position: "absolute",
  // },
  btnText: ({ size, color }) => ({
    fontSize: size,
    fontFamily: "Inter-Bold",
    lineHeight: size * 1.5,
    color: color,
  }),
  btn: ({ color }) => ({
    flex: 1,
    // borderWidth: 1,
    alignItems: "center",
    backgroundColor: "white",
    // padding: 5,
    paddingVertical: 6,
    borderRadius: 10,
    backgroundColor: color,

    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 1,
    // },
    // shadowOpacity: 0.2,
    // shadowRadius: 1.41,
    // elevation: 2,
  }),
  addBtns: {
    alignSelf: "center",
    flexDirection: "row",
    // gap: 10,
    justifyContent: "center",
    alignItems: "center",
    // paddingHorizontal: 10,
    marginTop: 10,
    gap: 10,
    // padding: 10,
    // bottom: 10,
    // position: "absolute",
    // position: "absolute",
  },
  serviceType: ({ size }) => ({
    fontSize: size,
    fontFamily: "Inter-Regular",
    lineHeight: size * 1.5,
    color: Colours.sub,
  }),
});
