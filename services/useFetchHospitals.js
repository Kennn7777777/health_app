import { useState, useEffect } from "react";
import axios from "axios";
import Constants from "../Shared/Constants";

const useFetchHospitals = ({ setFilteredList }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchHospitals = async () => {
    setIsLoading(true);

    try {
      const response = await axios.get(`${Constants.url}/api/hospital`);
      setData(response.data);
      if (setFilteredList) setFilteredList(response.data);

      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchHospitals();
  }, []);

  return { data, isLoading, error };
};

export default useFetchHospitals;
