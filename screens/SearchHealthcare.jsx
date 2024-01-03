import {
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useState, useMemo, useRef } from "react";
import SearchBar from "../components/SearchBar";
import HealthecareListView from "../components/HealthcareListView";
import HeightSpace from "../components/general/HeightSpacer";
import CheckBox from "react-native-check-box";
import HLine from "../components/general/HLine";
import { Dropdown, MultiSelect } from "react-native-element-dropdown";
import useFetchHospitals from "../services/useFetchHospitals";
import Colours from "../Shared/Colours";
import { BottomSheetModal, useBottomSheetModal } from "@gorhom/bottom-sheet";
import CustomBottomSheetModal from "../components/general/CustomBottomSheetModal";
import { ScrollView } from "react-native-gesture-handler";

export default function SearchHealthcare() {
  const { dismiss } = useBottomSheetModal();

  const [filteredList, setFilteredList] = useState([]);
  const {
    data: healthcareList,
    isLoading,
    error,
  } = useFetchHospitals({ setFilteredList });
  const [isClassic, SetIsClassic] = useState(true);
  // const [isFilterOpen, SetIsFilterOpen] = useState(false);
  const [isChecked, SetIsChecked] = useState({
    north: false,
    south: false,
    east: false,
    west: false,
  });

  const [selected, SetSelected] = useState([]);
  const [selectedService, SetSelectedService] = useState([]);
  const [selectedHealthcare, SetSelectedHealthcare] = useState([]);
  const [selectedCat, setSelectedCat] = useState([0, 1]);

  const bottomSheetRef = useRef(null);

  const catList = [
    "Hospitals",
    "Polyclinics",
    "Specialized",
    "Nursing",
    "Pharmacies",
  ];

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

  const handleOpenPress = () => bottomSheetRef.current?.present();

  const searchHealthcare = (keyword: String) => {
    const lowerCaseKeyword = keyword.toLowerCase();

    const results = filteredList.filter((healthcare) => {
      return healthcare.name.toLowerCase().includes(lowerCaseKeyword);
    });

    keyword === "" ? setFilteredList(healthcareList) : setFilteredList(results);
  };

  const handleOnPress = (index) => {
    if (!selectedCat.includes(index)) {
      setSelectedCat([...selectedCat, index]);
    } else {
      const newArray = selectedCat.filter((i) => i !== index);
      setSelectedCat(newArray);
    }
  };

  const filterModal = () => {
    return (
      <CustomBottomSheetModal ref={bottomSheetRef}>
        <ScrollView style={{ flex: 1 }}>
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
              />
              <Text>East</Text>
            </View>
            <View style={styles.checkboxwrapper}>
              <CheckBox
                isChecked={isChecked.west}
                onClick={() =>
                  SetIsChecked({ ...isChecked, west: !isChecked.west })
                }
              />
              <Text>West</Text>
            </View>
          </View>

          {/* Location */}
          <View style={{ marginLeft: 20, marginTop: 10 }}>
            <Text style={styles.heading}>Location</Text>
          </View>

          <View style={{ padding: 20, marginTop: -10 }}>
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

          {/* Categories List */}
          <View>
            <View style={{ marginLeft: 20 }}>
              <Text style={styles.heading}>Categories</Text>
            </View>
            <View style={styles.catContainer}>
              {catList.map((item, index) => (
                <TouchableOpacity onPress={() => handleOnPress(index)}>
                  <View
                    style={[
                      styles.catCard,
                      {
                        backgroundColor: selectedCat.includes(index)
                          ? Colours.primary
                          : Colours.white,
                      },
                    ]}
                  >
                    <Text
                      style={[
                        styles.catText,
                        {
                          color: selectedCat.includes(index)
                            ? Colours.white
                            : Colours.black,
                        },
                      ]}
                    >
                      {item}
                    </Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </ScrollView>

        {/* Buttons */}
        <View style={{ paddingHorizontal: 20, marginBottom: 10 }}>
          <TouchableOpacity
            onPress={() => dismiss()}
            style={{
              padding: 14,
              backgroundColor: Colours.primary,
              borderRadius: 10,
              alignItems: "center",
            }}
          >
            <Text style={styles.btnText}>Apply Filters</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => dismiss()}
            style={{
              padding: 14,
              backgroundColor: Colours.btn,
              marginTop: 10,
              borderRadius: 10,
              alignItems: "center",
            }}
          >
            <Text style={styles.btnText2}>Reset Filters</Text>
          </TouchableOpacity>
        </View>
      </CustomBottomSheetModal>
    );
  };

  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <SearchBar
          isClassic={isClassic}
          SetIsClassic={SetIsClassic}
          handleOpenPress={handleOpenPress}
          // handleClosePress={dismiss}
          searchHealthcare={searchHealthcare}
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
            healthcareList={filteredList}
            isClassic={isClassic}
          />
        )}
        {filterModal()}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colours.background,
  },
  container: {
    flex: 1,
    marginHorizontal: 16.5,
    marginTop: 10,
  },
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
    marginVertical: 10,
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
    fontFamily: "Inter-Bold",
    color: Colours.text2,
  },
  selectedTextStyle: {
    fontSize: 12,
  },
  selectedStyle: {
    borderRadius: 12,
    backgroundColor: "white",
    padding: 1,
  },
  btnText: {
    fontSize: 16,
    fontFamily: "Inter-Bold",
    color: Colours.white,
  },
  btnText2: {
    fontSize: 16,
    fontFamily: "Inter-Bold",
    color: Colours.black,
  },
  catContainer: {
    marginTop: 10,
    paddingHorizontal: 20,
    flexWrap: "wrap",
    flexDirection: "row",
    gap: 10,
  },
  catCard: {
    backgroundColor: Colours.primary,
    padding: 10,
    borderRadius: 7,
  },
  catText: {
    fontSize: 14,
    fontFamily: "Inter-Regular",
  },
});
