import { useEffect, useState } from "react";
import axios from "../axiosConfig";
import { convertGallery } from "../utils/gallery-utils";

const useFetchData = (route, dispatch) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_INIT" });

      try {
        const { data } = await axios.get(route);
        const convertedData = convertGallery(data);

        setData(convertedData);
        dispatch({ type: "FETCH_SUCCESS", payload: convertedData });
      } catch (error) {
        dispatch({ type: "FETCH_ERROR", payload: error.message });
      }
    };

    fetchData();
  }, [route, dispatch]);

  return data;
};

export default useFetchData;
