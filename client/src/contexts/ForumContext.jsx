// ForumContext
import React, { useState, createContext } from "react";

export const ForumContext = createContext();

export const ForumContextProvider = (props) => {
  const [forums, setForums] = useState([]);

  return React.createElement(
    ForumContext.Provider,
    {
      value: {
        forums,
        setForums,
      },
    },
    props.children
  );
};

export const useForumContext = () => {
  return React.useContext(ForumContext);
};
