import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import AppointmentInfo from "./AppointmentInfo";
import HeightSpacer from "./general/HeightSpacer";
import moment from "moment";
import Colours from "../Shared/Colours";

export default function AppointmentCardItem({
  healthcare,
  enableButtons = false,
}) {
  const hospital = healthcare?.hospital;
  // const { name } = hospital;

  return (
    <View style={styles.container}>
      <View style={{ marginLeft: 10 }}>
        <View>
          <AppointmentInfo
            hospital={hospital}
            imageSize={60}
            headingSize={16}
            locationSize={14}
          />
        </View>
        <HeightSpacer value={10} />
        <View style={{ flexDirection: "row", gap: 100 }}>
          <Text>{healthcare?.serviceType}</Text>
        </View>
      </View>

      <View
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
      </View>
      <View style={styles.datetime}>
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
            {/* <Text>Mon, 12 December, 2024</Text> */}
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
      </View>

      {enableButtons && (
        <View style={styles.addBtns}>
          <View style={styles.btn}>
            <TouchableOpacity onPress={() => {}}>
              <Text>Cancel</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.btn}>
            <TouchableOpacity onPress={() => {}}>
              <Text>Reschedule</Text>
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
    backgroundColor: "white",
    borderRadius: 8,
    padding: 12,
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
    // margin: 16,
    height: 40,
    width: "95%",
    backgroundColor: "white",
    borderRadius: 8,
    //padding: 12,
    paddingHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    // bottom: 10,
    // flex: 1,
    // flexDirection: "row",
    // justifyContent: "space-between",
    // alignItems: "center",
    alignSelf: "center",
    marginTop: 10,
    // position: "absolute",
  },
  btn: {
    flex: 1,
    // borderWidth: 1,
    alignItems: "center",
    backgroundColor: "white",
    padding: 5,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  addBtns: {
    alignSelf: "center",
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    marginTop: 10,
    // padding: 10,
    // bottom: 10,
    // position: "absolute",
    // position: "absolute",
  },
});