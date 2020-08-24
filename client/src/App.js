import React from 'react';
import Dashboard from './Components/Dashboard/Dashboard';
import { CssBaseline } from '@material-ui/core';
import NavBar from './Components/NavBar/NavBar.js';
import { Switch, Route } from "react-router-dom";

function App() {
  return (
      <React.Fragment>
        <CssBaseline />
        <NavBar />
        <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/forums" component={Dashboard} />
        </Switch>

      </React.Fragment>
  );
}

export default App;
