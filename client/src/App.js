import React from 'react';
import Dashboard from './Components/Dashboard/Dashboard';
import Login from "./Components/Login/Login";
import { CssBaseline } from '@material-ui/core';
import {Route,Switch} from 'react-router-dom';
import UserInfo from "./Components/UserInfo/UserInfo";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>;

  return (
      <div>
      <CssBaseline />
      <UserInfo />
      <Switch>
        <Route exact path="/" component= { Login } />
        <Route exact path="/dashboard" component={ Dashboard } />
        <Route exact path="/register" component= { Register } />
      </Switch>
      </div>
  );
}

export default App;
