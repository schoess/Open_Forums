/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import { Route, Switch } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Dashboard from "./Components/Dashboard/Dashboard";
import { ForumContextProvider } from "./contexts/ForumContext";
import Forum from "./Components/Forum/Forum";
import { SubmitPostModalContextProvider } from "./contexts/SubmitPostModalContext";
import MyForum from "./Components/MyForum/MyForum";
import NavBar from "./Components/NavBar/NavBar";
import "./App.css";
import darkTheme from "./Themes/darkTheme";
import { useDarkModeContext } from "./contexts/DarkModeContext";
import lightTheme from "./Themes/lightTheme";
import { ViewportContextProvider } from "./contexts/ViewportContext";

function App() {
  const { isLoading } = useAuth0();

  const { darkMode } = useDarkModeContext();

  if (isLoading) return <div>Loading...</div>;
  return (
    <ViewportContextProvider>
      <ForumContextProvider>
        <SubmitPostModalContextProvider>
          <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            <NavBar />
            <CssBaseline />
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/my_forum" component={MyForum} />
              <Route path="/forums/:forumId" component={Forum} />
            </Switch>
          </ThemeProvider>
        </SubmitPostModalContextProvider>
      </ForumContextProvider>
    </ViewportContextProvider>
  );
}

export default App;
