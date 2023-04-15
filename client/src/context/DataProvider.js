import React, { useReducer } from "react";

import useFetchData from "../customHooks/useFetchData";
import DataContext from "./DataContext";
import { initialState, reducer } from "../reducer/galleryReducer";

const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { data, isLoading, error } = state;
  useFetchData("/api/artwork", dispatch);
  return (
    <DataContext.Provider value={{ data, isLoading, error, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
