// DarkModeContext
import React, { useState, createContext } from "react";

export const DarkModeContext = createContext();

export const DarkModeContextProvider = (props) => {
  const [darkState, setDarkState] = useState(false);

  return React.createElement(
    DarkModeContext.Provider,
    {
      value: {
        darkState,
        setDarkState,
      },
    },
    props.children
  );
};

export const useDarkModeContext = () => {
  return React.useContext(DarkModeContext);
};
