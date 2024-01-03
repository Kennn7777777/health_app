import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import SectionHeader from "../components/general/SectionHeader";
import HeightSpacer from "../components/general/HeightSpacer";
import Colours from "../Shared/Colours";

export default function HealthProfiles() {
  return (
    <View style={styles.root}>
      <View style={{ flex: 1, marginHorizontal: 22, marginTop: 20 }}>
        <SectionHeader title="My health profile" showView={false} />
        <HeightSpacer value={10} />
        <View style={styles.container}>
          <View style={{ paddingLeft: 10, paddingBottom: 30 }}>
            <Text style={styles.name}>John Doe </Text>

            <View style={{ marginTop: 14 }}>
              <View style={{ flexDirection: "row", gap: 90 }}>
                <Text style={styles.small}>Gender: Male</Text>
                <Text style={styles.small}>D.O.B: 20/11/1955</Text>
              </View>
              <View style={{ flexDirection: "row", gap: 90 }}>
                <Text style={styles.small}>Weight: 70 kg</Text>
                <Text style={styles.small}>Height: 188 cm</Text>
              </View>
              <Text style={styles.small}>Blood Group: A</Text>
            </View>

            <View style={{ position: "absolute", bottom: 0, right: 0 }}>
              <TouchableOpacity>
                <Text style={styles.small}>Edit Profile &gt;</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <HeightSpacer value={10} />

        <SectionHeader title="People under my care" btnTitle="Add new" />
        <HeightSpacer value={10} />

        <View style={{ gap: 10 }}>
          <View style={styles.container}>
            <View
              style={{ flexDirection: "row", gap: 90, alignItems: "center" }}
            >
              <View style={{ flex: 1 }}>
                <Text style={styles.fontb}>Paul</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.fontr}>Son</Text>
              </View>
              <View style={{ position: "absolute", right: 0 }}>
                <Text style={styles.arrow}>&gt;</Text>
              </View>
            </View>
          </View>

          <View style={styles.container}>
            <View
              style={{ flexDirection: "row", gap: 90, alignItems: "center" }}
            >
              <View style={{ flex: 1 }}>
                <Text style={styles.fontb}>Peter</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.fontr}>Son</Text>
              </View>
              <View style={{ position: "absolute", right: 0 }}>
                <Text style={styles.arrow}>&gt;</Text>
              </View>
            </View>
          </View>
        </View>

        <HeightSpacer value={10} />
        <SectionHeader title="My caregivers" btnTitle="Add new" />
        <HeightSpacer value={10} />
        <View style={styles.container}>
          <View style={{ flexDirection: "row", gap: 90, alignItems: "center" }}>
            <View style={{ flex: 1 }}>
              <Text style={styles.fontb}>Dr. Jack</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.fontr}>Doctor</Text>
            </View>
            <View style={{ position: "absolute", right: 0 }}>
              <Text style={styles.arrow}>&gt;</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colours.background,
  },
  name: {
    fontSize: 16,
    fontFamily: "Inter-Bold",
  },
  container: {
    // margin: 16,
    // height: 160,

    backgroundColor: Colours.white,
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
  small: {
    fontSize: 14,
    fontFamily: "Inter-Medium",
    color: Colours.text,
  },
  fontb: {
    fontSize: 16,
    fontFamily: "Inter-Regular",
    color: Colours.black,
  },
  fontr: {
    fontSize: 16,
    fontFamily: "Inter-Regular",
    color: Colours.sub,
  },
  arrow: {
    fontSize: 20,
    fontFamily: "Inter-Regular",
    color: Colours.text,
  },
});
