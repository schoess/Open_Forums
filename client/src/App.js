import React from 'react';
import Dashboard from './Components/Dashboard/Dashboard';
import { CssBaseline } from '@material-ui/core';
import NavBar from './Components/NavBar/NavBar.js';

function App() {
  return (
      <React.Fragment>
        <CssBaseline />
        <NavBar />
        <Dashboard />
      </React.Fragment>
  );
}

export default App;
