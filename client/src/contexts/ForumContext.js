import React, { useState, createContext } from "react";

export const ForumContext = createContext();

export const ForumContextProvider = (props) => {
  const [forum, setForum] = useState([]);

  return React.createElement(
    ForumContext.Provider,
    {
      value: {
        forum,
        setForum,
      },
    },
    props.children
  );
};

export const useForumContext = () => {
  return React.useContext(ForumContext);
};
