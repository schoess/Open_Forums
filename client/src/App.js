import React from "react";
import Dashboard from "./Components/Dashboard/Dashboard";
import { CssBaseline } from "@material-ui/core";
import NavBar from "./Components/NavBar/NavBar.js";
import UserInfo from "./Components/UserInfo/UserInfo";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>;

  return (
    <React.Fragment>
      <CssBaseline />
      <NavBar />
      <UserInfo />
      <Dashboard />
    </React.Fragment>
  );
}

export default App;
