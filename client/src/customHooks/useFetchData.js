import { useEffect, useState } from "react";
import axios from "../axiosConfig";
import { convertGallery } from "../utils/gallery-utils";

const useFetchData = (route, dispatch) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      // setIsLoading(true);

      try {
        const { data } = await axios.get(route);
        const convertedData = convertGallery(data);

        setData(convertedData);
        setIsLoading(false);

        dispatch({ type: "FETCH_SUCCESS", payload: convertedData });
        setIsLoading(false);
      } catch (error) {
        setError(error);
        // console.error(error);
        dispatch({ type: "FETCH_ERROR", payload: error.message });
        setIsLoading(false);
      }
    };

    fetchData();
  }, [route, dispatch]);

  return { data, isLoading, error };
};

export default useFetchData;
