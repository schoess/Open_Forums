/* eslint-disable react/jsx-filename-extension */
import React, { useState } from "react";
import { CssBaseline } from "@material-ui/core";
import { Route, Switch } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Dashboard from "./Components/Dashboard/Dashboard";
import { ForumContextProvider } from "./contexts/ForumContext";
import Forum from "./Components/Forum/Forum";
import { SubmitPostModalContextProvider } from "./contexts/SubmitPostModalContext";
// import { DarkModeContextProvider } from "./contexts/DarkModeContext";
import MyForum from "./Components/MyForum/MyForum";
import NavBar from "./Components/NavBar/NavBar";
import "./App.css";

function App() {
  const { isLoading } = useAuth0();

  const [darkState, setDarkState] = useState(false);
  const mainFont = "'Roboto', sans-serif";
  const palletType = darkState ? "dark" : "light";
  const mainPrimaryColor = darkState ? "#000000" : "#ffffff";
  const mainSecondaryColor = darkState ? "#581845" : "#FF5733";
  const theme = createMuiTheme({
    palette: {
      type: palletType,
      primary: {
        main: mainPrimaryColor,
      },
      secondary: {
        main: mainSecondaryColor,
      },
    },
    typography: {
      fontFamily: mainFont,
    },
  });

  const handleThemeChange = () => {
    setDarkState(!darkState);
    console.log("Dark Mode Toggle CLICKED! This is darkState = " + darkState);
  };

  if (isLoading) return <div>Loading...</div>;
  return (
    <ForumContextProvider>
      <SubmitPostModalContextProvider>
        <ThemeProvider theme={theme}>
          <NavBar handleThemeChange={handleThemeChange} />
          <CssBaseline />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/my_forum" component={MyForum} />
            <Route path="/forums/:forumId" component={Forum} />
          </Switch>
        </ThemeProvider>
      </SubmitPostModalContextProvider>
    </ForumContextProvider>
  );
}

export default App;
