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
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function AppointmentSection({ id }) {
  const data = [
    { label: "Consultation", value: "1" },
    { label: "Medical checkup", value: "2" },
    { label: "Vaccination", value: "3" },
  ];

  const [serviceType, setServiceType] = useState("");
  const [timeList, setTimeList] = useState([]);
  const [selectedTime, setSelectedTime] = useState("");
  const [inputText, setInputText] = useState("");
  const [showCalendarModal, setShowCalendarModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");

  const navigation = useNavigation();
  const [user_id, setUserId] = useState();

  useEffect(() => {
    const getId = async () => {
      const data = await AsyncStorage.getItem(Constants.userid);
      setUserId(data);
    };
    getTime();
    getId();
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
            userId: user_id,
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

            Alert.alert("Success", "Appointment booked successfully!", [
              {
                text: "Ok",
                onPress: async () => {
                  navigation.reset({
                    index: 0,
                    routes: [{ name: "Appointment" }],
                  });
                  // navigation.navigate("Appointment");
                },
              },
            ]);
          } catch (error) {
            Alert.alert("Submit fail");
          }
        },
      },
    ]);
  };

  return (
    <View>
      <View>
        <View style={{ marginBottom: 15 }}>
          <Text style={styles.title}>Service types</Text>
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
            <Text style={styles.title}>Date</Text>
          </View>
          <View
            style={{
              position: "relative",
            }}
          >
            <View style={styles.dropdown} />

            {/* <Text
              style={{
                position: "absolute",
                fontSize: 16,
                left: 0,
                padding: 10,
                color: Colours.gray,
              }}
            > */}
            <Text
              style={[
                styles.placeholderStyle,
                { position: "absolute", fontSize: 16, left: 0, padding: 10 },
              ]}
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
            <Text style={styles.title}>Available Timeslots</Text>
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
                  style={[
                    styles.timeText,
                    selectedTime === item.time
                      ? { color: Colours.white }
                      : { color: Colours.text2 },
                  ]}
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
            <Text style={styles.title}>Note</Text>
          </View>
          <TextInput
            numberOfLines={3}
            style={{
              backgroundColor: Colours.note,
              borderRadius: 8,
              borderColor: Colours.note,
              borderWidth: 1,
              textAlignVertical: "top",
              padding: 20,
              paddingTop: 20,
              paddingBottom: 50,
              fontSize: 16,
              ...styles.placeholderStyle,
            }}
            placeholder="Write a note here..."
            // placeholderStyle={styles.placeholderStyle}
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
          <Text style={styles.aptText}>Confirm Appointment</Text>
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
  title: {
    fontSize: 18,
    fontFamily: "Inter-Bold",
    color: Colours.text2,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    // marginTop: 22,
  },
  timeBtn: {
    // borderWidth: 1,
    borderRadius: 7,
    padding: 5,
    paddingVertical: 14,
    paddingHorizontal: 20,
    alignItems: "center",
    marginRight: 10,
    backgroundColor: Colours.white,
    // borderColor: "#131313",
  },
  timeText: {
    fontFamily: "Inter-Regular",
    lineHeight: 15,
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
    fontFamily: "Inter-Regular",
    color: Colours.sub,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  aptText: {
    fontSize: 16,
    fontFamily: "Inter-Bold",
    color: Colours.white,
    textAlign: "center",
  },
});
