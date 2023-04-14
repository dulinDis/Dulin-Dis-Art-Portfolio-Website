import { createContext } from "react";

const DataContext = createContext({
  data: [],
  isLoading: true,
  error: null,
});

export default DataContext;
