import React from "react";
import { AppBar, Toolbar, IconButton, Button, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { useAuth0 } from "@auth0/auth0-react";
import Logout from "../Logout/Logout";
import Login from "../Login/Login";

function NavBar() {
  const { isAuthenticated } = useAuth0();

    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6">Open Forum</Typography>
            <Button>{isAuthenticated ? <Logout /> : <Login />}</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
}

export default NavBar;
