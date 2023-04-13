import { useEffect, useState } from "react";
import axios from "../axiosConfig";
import { convertGallery } from "../utils/gallery-utils";

const useFetchData = (route) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(route);
        const converedData = convertGallery(data);
        setData(converedData);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        console.error(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [route, setData]);

  return { data, isLoading, error };
};

export default useFetchData;
