import { View, Text, Button, TouchableOpacity, Modal } from "react-native";
import { useState } from "react";
import { Calendar, LocaleConfig } from "react-native-calendars";

export default function DatePicker() {
  const [date, setDate] = useState("");
  const [showModel, setShowModal] = useState(false);

  function onDateChange(date) {
    // setDate(date);
    console.log(date);
    setShowModal(false);
  }

  return (
    <View>
      <TouchableOpacity onPress={() => setShowModal(true)}>
        <Text>Saaaaaa</Text>
      </TouchableOpacity>
      <Modal visible={showModel} animationType="fade">
        <Calendar
          style={{ borderRadius: 10, elevation: 4, margin: 40 }}
          onDayPress={onDateChange}
          initialDate={date}
        />
      </Modal>
    </View>
  );
}
