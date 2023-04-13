import useFetchData from "./useFetchData";
import DataContext from "./DataContext";

const DataProvider = ({ children }) => {
  const { data, isLoading, error } = useFetchData("/api/artwork");
  return (
    <DataContext.Provider value={{ data, isLoading, error }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
