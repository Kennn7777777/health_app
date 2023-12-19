import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
  Modal,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Dropdown } from "react-native-element-dropdown";
import { MaterialIcons } from "@expo/vector-icons";
import axios from "axios";
import Constants from "../Shared/Constants";
import { useNavigation } from "@react-navigation/native";
import Colours from "../Shared/Colours";
import { Calendar } from "react-native-calendars";

export default function AppointmentSection({ id }) {
  const data = [
    { label: "Consultation", value: "1" },
    { label: "Medical checkup", value: "2" },
    { label: "Vaccination", value: "3" },
    { label: "Service 4", value: "4" },
    { label: "Service 5", value: "5" },
    { label: "Service 6", value: "6" },
    { label: "Service 7", value: "7" },
    { label: "Service 8", value: "8" },
  ];

  const [serviceType, setServiceType] = useState("");
  const [timeList, setTimeList] = useState([]);
  const [selectedTime, setSelectedTime] = useState("");
  const [inputText, setInputText] = useState("");
  const [showCalendarModal, setShowCalendarModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");

  const navigation = useNavigation();

  useEffect(() => {
    getTime();
  }, []);

  const getTime = () => {
    const timeList = [];
    for (let i = 8; i <= 12; i++) {
      timeList.push({ time: i + ":00 AM" });
      timeList.push({ time: i + ":30 AM" });
    }
    for (let i = 1; i <= 6; i++) {
      timeList.push({ time: i + ":00 PM" });
      timeList.push({ time: i + ":30 AM" });
    }

    setTimeList(timeList);
  };

  const handleTextChange = (text) => {
    setInputText(text);
  };

  function onDateChange(date) {
    setSelectedDate(date.dateString);
    // console.log(date.dateString);
    setShowCalendarModal(false);
  }

  const handleCalendar = () => {
    setShowCalendarModal(true);
  };

  const bookAppt = () => {
    Alert.alert("Confirm", "Are you sure?", [
      { text: "Cancel", onPress: () => {} },
      {
        text: "OK",
        onPress: async () => {
          const submitData = {
            userId: "658175448f01a9320778ae51",
            appt: {
              serviceType: serviceType,
              date: selectedDate,
              timeslot: selectedTime,
              note: inputText,
              hospital: id,
            },
          };

          try {
            const response = await axios.post(
              `${Constants.url}/api/appointments/new`,
              submitData
            );
            // console.log(response.data);
            Alert.alert("Success", "Booking success!");
            navigation.replace("Appointment");
          } catch (error) {
            Alert.alert("Submit fail");
            console.log(error);
          }
        },
      },
    ]);

    // console.log(submitData);
  };

  return (
    <View>
      <View>
        <View style={{ marginBottom: 15 }}>
          <Text style={{ fontSize: 18 }}>Service Type</Text>
        </View>
        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          data={data}
          search={false}
          maxHeight={300}
          labelField="label"
          valueField="label"
          placeholder="Select service type..."
          value={serviceType}
          onChange={(item) => {
            setServiceType(item.label);
          }}
        />

        {/* Date */}
        <View style={{ marginTop: 15 }}>
          <View style={{ marginBottom: 15 }}>
            <Text style={{ fontSize: 18 }}>Date</Text>
          </View>
          <View
            style={{
              position: "relative",
            }}
          >
            <View style={styles.dropdown} />

            <Text
              style={{
                position: "absolute",
                fontSize: 16,
                left: 0,
                padding: 10,
                color: Colours.gray,
              }}
            >
              {selectedDate ? selectedDate : `Select an appointment date...`}
            </Text>
            <TouchableOpacity
              onPress={handleCalendar}
              style={{ position: "absolute", top: 0, right: 0, padding: 10 }}
            >
              <MaterialIcons name="calendar-today" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Available Time slot */}
        <View style={{ marginTop: 15 }}>
          <View style={{ marginBottom: 15 }}>
            <Text style={{ fontSize: 18 }}>Available Timeslots</Text>
          </View>

          <FlatList
            data={timeList}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={[
                  styles.timeBtn,
                  selectedTime === item.time
                    ? { backgroundColor: Colours.primary }
                    : null,
                ]}
                onPress={() => setSelectedTime(item.time)}
              >
                <Text
                  style={selectedTime === item.time ? { color: "#fff" } : null}
                >
                  {item.time}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>

        {/* Note */}
        <View style={{ marginTop: 15 }}>
          <View style={{ marginBottom: 15 }}>
            <Text style={{ fontSize: 18 }}>Note</Text>
          </View>
          <TextInput
            numberOfLines={3}
            style={{
              backgroundColor: Colours.lgray,
              borderRadius: 8,
              borderColor: Colours.lgray,
              borderWidth: 1,
              textAlignVertical: "top",
              padding: 10,
              paddingVertical: 20,
            }}
            placeholder="Write a note here..."
            onChangeText={handleTextChange}
          />
        </View>

        <TouchableOpacity
          onPress={bookAppt}
          style={{
            padding: 14,
            backgroundColor: Colours.primary,
            marginTop: 30,
            borderRadius: 10,
            // top: 0,
            left: 0,
            right: 0,
            zIndex: 20,
          }}
        >
          <Text
            style={{ textAlign: "center", color: "#fff", fontWeight: "bold" }}
          >
            Confirm Appointment
          </Text>
        </TouchableOpacity>

        <Modal
          visible={showCalendarModal}
          animationType="none"
          statusBarTranslucent={true}
          transparent={true}
        >
          <View style={styles.centeredView}>
            <Calendar
              style={{ borderRadius: 10, elevation: 4, margin: 40 }}
              onDayPress={onDateChange}
            />
          </View>
        </Modal>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    // marginTop: 22,
  },
  timeBtn: {
    borderWidth: 1,
    borderRadius: 99,
    padding: 5,
    paddingVertical: 14,
    paddingHorizontal: 20,
    alignItems: "center",
    marginRight: 10,
    borderColor: "#131313",
  },
  container: {
    backgroundColor: "white",
    padding: 16,
  },
  dropdown: {
    // margin: 16,
    height: 45,
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
  },
  placeholderStyle: {
    fontSize: 16,
    color: Colours.gray,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
});
