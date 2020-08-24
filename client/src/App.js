import React from 'react';
import Dashboard from './Components/Dashboard/Dashboard';
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import { CssBaseline } from '@material-ui/core';
import {Route,Switch} from 'react-router-dom';

function App() {
  return (
      <div>
      <CssBaseline />
      <Switch>
        <Route exact path="/" component= { Login } />
        <Route exact path="/dashboard" component={ Dashboard } />
        <Route exact path="/register" component= { Register } />
      </Switch>
      </div>
  );
}

export default App;
