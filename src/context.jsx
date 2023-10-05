import React, { useContext, useEffect, useReducer, useState } from "react";
import reducer from "./reducer";

const AppContext = React.createContext();

const API = "http://localhost:5000/vehicle";

const intialState = {
  name: "",
  image: "",
  services: [],
  filters: {
    text: "",
  },
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, intialState);

  const [name, setName] = useState()


  const getServices = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      dispatch({ type: "GET_SERVICES", payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getServices(API);
  }, []);

  useEffect(() => {

    if(name !== undefined || ""){
      const search = `http://localhost:5000/vehicle/?name=${name}`;
      getServices(search)
    }

  }, [name])


  return (
    <AppContext.Provider value={{ ...state, name, setName, }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
