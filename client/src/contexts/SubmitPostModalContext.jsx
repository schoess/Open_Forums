// SubmitPostModalContext
import React, { useState, createContext } from "react";

export const SubmitPostModalContext = createContext();

export const SubmitPostModalContextProvider = (props) => {
  const [showSubmitPostModal, setShowSubmitPostModal] = useState(false);

  return React.createElement(
    SubmitPostModalContext.Provider,
    {
      value: {
        showSubmitPostModal,
        setShowSubmitPostModal,
      },
    },
    props.children
  );
};

export const useSubmitPostModalContext = () => {
  return React.useContext(SubmitPostModalContext);
};
