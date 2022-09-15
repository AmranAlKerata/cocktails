import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [ searchValue, setSearchValue ] = useState("");
  const [ loading, setLoading ] = useState(true);
  const [ cocktails, setCocktails ] = useState([]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch(url + searchValue);
      const data = await res.json();
      setCocktails(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(
    () => {
      fetchData();
    },
    [ searchValue ]
  );
  return (
    <AppContext.Provider
      value={{ searchValue, setSearchValue, loading, setLoading, cocktails }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
