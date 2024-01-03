import { useState, useEffect, useLayoutEffect } from "react";
import axios from "axios";
import Constants from "../Shared/Constants";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

// const id = "658175448f01a9320778ae51";

const useFetchAppts = (userId) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigation = useNavigation();

  const fetchAppts = async () => {
    setIsLoading(true);

    try {
      const id = await AsyncStorage.getItem(Constants.userid);
      const response = await axios.get(
        `${Constants.url}/api/appointments/${id}`
      );
      setData(response.data.appointments);

      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useLayoutEffect(() => {
    const unsubscribeFocus = navigation.addListener("focus", () => {
      fetchAppts();
    });

    return () => {
      console.log("Screen is unfocused.");
      unsubscribeFocus();
    };
  }, [navigation]);

  const refetch = () => {
    setIsLoading(true);
    fetchAppts();
  };

  return { data, isLoading, error, refetch };
};

export default useFetchAppts;
