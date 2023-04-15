import { createContext } from "react";

const DataContext = createContext({
  data: [],
  isLoading: false,
  error: null,
});

export default DataContext;
