import React from "react";
import Dashboard from "./Components/Dashboard/Dashboard";
import { CssBaseline } from "@material-ui/core";
import { Route, Switch } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { ForumContextProvider } from "./contexts/ForumContext";
import Forum from "./Components/Forum/Forum";
import NavBar from "./Components/NavBar/NavBar";

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>;

  return (
    <ForumContextProvider>
      <NavBar/>
      <CssBaseline />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/forums/:forumId" component={Forum} />
          <Route path ="/forums/:forumId/replies" component ={Forum} />
        </Switch>
    </ForumContextProvider>
  );
}

export default App;
