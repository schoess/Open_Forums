// DarkModeContext
import React, { useState, createContext } from "react";

export const DarkModeContext = createContext();

export const DarkModeContextProvider = (props) => {
  const [darkMode, setDarkMode] = useState(false);

  return React.createElement(
    DarkModeContext.Provider,
    {
      value: {
        darkMode,
        setDarkMode,
      },
    },
    props.children
  );
};

export const useDarkModeContext = () => {
  return React.useContext(DarkModeContext);
};
