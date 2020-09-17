import React, { useState, createContext, useEffect } from "react";

export const ViewportContext = createContext();

export const ViewportContextProvider = (props) => {
  const [width, setWidth] = useState(window.innerWidth);

  const handleWindowResize = () => setWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return React.createElement(
    ViewportContext.Provider,
    {
      value: {
        width,
        setWidth,
      },
    },
    props.children
  );
};

export const useViewportContext = () => {
  return React.useContext(ViewportContext);
};
