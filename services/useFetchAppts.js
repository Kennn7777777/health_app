import { useState, useEffect } from "react";
import axios from "axios";
import Constants from "../Shared/Constants";
import { useNavigation } from "@react-navigation/native";

const id = "658175448f01a9320778ae51";

const useFetchAppts = (userId) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigation = useNavigation();

  const fetchAppts = async () => {
    console.log("START");
    setIsLoading(true);

    try {
      const response = await axios.get(
        `${Constants.url}/api/appointments/${id}`
      );
      setData(response.data.appointments);
      //   console.log(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
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
