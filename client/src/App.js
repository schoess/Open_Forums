import React from "react";
import Dashboard from "./Components/Dashboard/Dashboard";
import { CssBaseline } from "@material-ui/core";
import { Route, Switch } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import {ForumProvider} from "./utils/ForumContext";

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>;

  return (
    <React.Fragment>
      <CssBaseline />
      <ForumProvider>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/forums" component={Dashboard} />
      </Switch>
      </ForumProvider>
    </React.Fragment>
  );
}

export default App;
