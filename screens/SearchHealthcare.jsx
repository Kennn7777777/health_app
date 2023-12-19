import {
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import HealthecareListView from "../components/HealthcareListView";
import HeightSpace from "../components/general/HeightSpacer";
import CheckBox from "react-native-check-box";
import HLine from "../components/general/HLine";
import { Dropdown, MultiSelect } from "react-native-element-dropdown";
import useFetchHospitals from "../services/useFetchHospitals";
import Colours from "../Shared/Colours";

export default function SearchHealthcare() {
  const { data: healthcareList, isLoading, error } = useFetchHospitals();
  const [isClassic, SetIsClassic] = useState(true);
  const [isFilterOpen, SetIsFilterOpen] = useState(false);
  const [isChecked, SetIsChecked] = useState({
    north: false,
    south: false,
    east: false,
    west: false,
  });

  const [selected, SetSelected] = useState([]);
  const [selectedService, SetSelectedService] = useState([]);
  const [selectedHealthcare, SetSelectedHealthcare] = useState([]);

  // const healthcareList = [
  //   {
  //     id: 1,
  //     name: "Hospital ABC",
  //     imageUrl: "https://picsum.photos/300",
  //     address: "11 Jln Tan Tock Seng, Singapore 308433",
  //     services: ["Consultation", "Dental", "Vaccination", "xxxxxx"],
  //   },
  //   {
  //     id: 2,
  //     name: "hospital 123",
  //     imageUrl: "https://picsum.photos/300",
  //     address: "11 Jln Tan Tock Seng, Singapore 308433",
  //     services: ["Consultation", "Dental", "Vaccination"],
  //   },
  //   {
  //     id: 3,
  //     name: "hospital 123",
  //     imageUrl: "https://picsum.photos/300",
  //     address: "11 Jln Tan Tock Seng, Singapore 308433",
  //     services: ["Consultation", "Dental", "Vaccination"],
  //   },
  // ];

  const locationList = [
    { label: "All", value: "1" },
    { label: "location 2", value: "2" },
    { label: "location 3", value: "3" },
    { label: "location 4", value: "4" },
    { label: "location 5", value: "5" },
    { label: "location 6", value: "6" },
    { label: "location 7", value: "7" },
    { label: "location 8", value: "8" },
  ];

  const serviceList = [
    { label: "Service 1", value: "1" },
    { label: "Service 2", value: "2" },
    { label: "Service 3", value: "3" },
    { label: "Service 4", value: "4" },
    { label: "Service 5", value: "5" },
    { label: "Service 6", value: "6" },
    { label: "Service 7", value: "7" },
    { label: "Service 8", value: "8" },
  ];

  const healthcareList2 = [
    { label: "healthcare 1", value: "1" },
    { label: "healthcare 2", value: "2" },
    { label: "healthcare 3", value: "3" },
    { label: "healthcare 4", value: "4" },
    { label: "healthcare 5", value: "5" },
    { label: "healthcare 6", value: "6" },
    { label: "healthcare 7", value: "7" },
    { label: "healthcare 8", value: "8" },
  ];

  return (
    <View style={{ flex: 1, marginHorizontal: 22, marginTop: 20 }}>
      <SearchBar
        isClassic={isClassic}
        SetIsClassic={SetIsClassic}
        isFilterOpen={isFilterOpen}
        SetIsFilterOpen={SetIsFilterOpen}
      />
      <HeightSpace value={15} />
      {/* <HealthecareListView
        healthcareList={healthcareList}
        isClassic={isClassic}
      /> */}

      {isLoading ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size={"large"} color={Colours.primary} />
        </View>
      ) : (
        <HealthecareListView
          healthcareList={healthcareList}
          isClassic={isClassic}
        />
      )}

      {/* Modal popup */}
      <Modal
        animationType="none"
        statusBarTranslucent={true}
        transparent={true}
        visible={isFilterOpen}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          SetIsFilterOpen(!isFilterOpen);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={{ alignSelf: "center" }}>
              <Text style={styles.heading}>Filter</Text>
            </View>
            {/* Region */}
            <View>
              <View style={{ marginLeft: 20, marginTop: 20 }}>
                <Text style={styles.heading}>Region</Text>
              </View>
              <View style={styles.checkboxwrappers}>
                <View style={styles.checkboxwrapper}>
                  <CheckBox
                    isChecked={isChecked.north}
                    onClick={() =>
                      SetIsChecked({ ...isChecked, north: !isChecked.north })
                    }
                  />
                  <Text>North</Text>
                </View>
                <View style={styles.checkboxwrapper}>
                  <CheckBox
                    isChecked={isChecked.south}
                    onClick={() =>
                      SetIsChecked({ ...isChecked, south: !isChecked.south })
                    }
                  />
                  <Text>South</Text>
                </View>
                <View style={styles.checkboxwrapper}>
                  <CheckBox
                    isChecked={isChecked.east}
                    onClick={() =>
                      SetIsChecked({ ...isChecked, east: !isChecked.east })
                    }
                    rightText="East"
                    rightTextStyle={{ marginLeft: 1 }}
                  />
                  <Text>East</Text>
                </View>
                <View style={styles.checkboxwrapper}>
                  <CheckBox
                    isChecked={isChecked.west}
                    onClick={() =>
                      SetIsChecked({ ...isChecked, west: !isChecked.west })
                    }
                    rightText="West"
                    rightTextStyle={{ marginLeft: 1 }}
                  />
                  <Text>West</Text>
                </View>
              </View>
            </View>
            <HLine margin="2.5%" marginTop={10} marginBottom={10} />
            {/* Location */}
            <View>
              <View style={{ marginLeft: 20, marginBottom: -20 }}>
                <Text style={styles.heading}>Location</Text>
              </View>

              <View style={{ padding: 20 }}>
                <MultiSelect
                  style={styles.dropdown}
                  placeholderStyle={{ fontSize: 14 }}
                  selectedTextStyle={styles.selectedTextStyle}
                  data={locationList}
                  labelField="label"
                  valueField="value"
                  placeholder="Select locations..."
                  value={selected}
                  onChange={(item) => {
                    SetSelected(item);
                  }}
                  selectedStyle={styles.selectedStyle}
                />
              </View>
            </View>
            <HLine margin="2.5%" marginTop={0} marginBottom={10} />

            {/* Service types */}
            <View>
              <View style={{ marginLeft: 20, marginBottom: -20 }}>
                <Text style={styles.heading}>Service types</Text>
              </View>

              <View style={{ padding: 20 }}>
                <MultiSelect
                  style={styles.dropdown}
                  placeholderStyle={{ fontSize: 14 }}
                  selectedTextStyle={styles.selectedTextStyle}
                  data={serviceList}
                  labelField="label"
                  valueField="value"
                  placeholder="Select services..."
                  value={selectedService}
                  onChange={(item) => {
                    SetSelectedService(item);
                  }}
                  selectedStyle={styles.selectedStyle}
                />
              </View>
            </View>

            <HLine margin="2.5%" marginTop={0} marginBottom={10} />
            {/* Healthcare institutions */}
            <View>
              <View style={{ marginLeft: 20, marginBottom: -20 }}>
                <Text style={styles.heading}>Healthcare institutions</Text>
              </View>

              <View style={{ padding: 20 }}>
                <MultiSelect
                  style={styles.dropdown}
                  placeholderStyle={{ fontSize: 14 }}
                  selectedTextStyle={styles.selectedTextStyle}
                  data={healthcareList2}
                  labelField="label"
                  valueField="value"
                  placeholder="Select healthcare institutions..."
                  value={selectedHealthcare}
                  onChange={(item) => {
                    SetSelectedHealthcare(item);
                  }}
                  selectedStyle={styles.selectedStyle}
                />
              </View>
            </View>

            {/* Cancel & Apply Buttons */}
            <View
              style={{
                flexDirection: "row",
                gap: 10,
                justifyContent: "center",
                alignItems: "center",
                padding: 10,
                bottom: 0,
                position: "absolute",
              }}
            >
              <View style={styles.btn}>
                <TouchableOpacity onPress={() => SetIsFilterOpen(false)}>
                  <Text>Cancel</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.btn}>
                <TouchableOpacity onPress={() => SetIsFilterOpen(false)}>
                  <Text>Apply</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    // marginTop: 22,
  },
  modalView: {
    // margin: 20,
    height: "85%",
    width: "90%",
    backgroundColor: "white",
    borderRadius: 10,
    // padding: 35,
    // alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    // justifyContent: "center",
    position: "relative",
  },
  buttons: {
    display: "flex",
    // flex: 1,
    flexDirection: "row",
    alignItems: "center",
    // alignContent: "center",
    // alignSelf: "center",
    justifyContent: "center",
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
  checkboxwrapper: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 5,
  },
  checkboxwrappers: {
    marginVertical: -20,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    justifyContent: "space-around",
  },
  dropdown: {
    height: 50,
    backgroundColor: "transparent",
    borderBottomColor: "gray",
    borderBottomWidth: 0.5,
    borderRadius: 8,
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
  },
  selectedTextStyle: {
    fontSize: 12,
  },
  selectedStyle: {
    borderRadius: 12,
    backgroundColor: "white",
    padding: 1,
  },
});
