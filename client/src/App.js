/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { CssBaseline } from "@material-ui/core";
import { Route, Switch } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Dashboard from "./Components/Dashboard/Dashboard";
import { ForumContextProvider } from "./contexts/ForumContext";
import Forum from "./Components/Forum/Forum";
import DirectChat from "./Components/DirectChat/DirectChat";
import { SubmitPostModalContextProvider } from "./contexts/SubmitPostModalContext";
import MyForum from "./Components/MyForum/MyForum";
import NavBar from "./Components/NavBar/NavBar";
import "./App.css";

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>;
  return (
    <ForumContextProvider>
      <SubmitPostModalContextProvider>
        <NavBar />
        <CssBaseline />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/my_forum" component={MyForum} />
          <Route path="/forums/:forumId" component={Forum} />
          <Route path="/directchat" component={DirectChat} />
        </Switch>
      </SubmitPostModalContextProvider>
    </ForumContextProvider>
  );
}

export default App;
