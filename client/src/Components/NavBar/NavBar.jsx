import React from "react";
import { AppBar, Toolbar, Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
// import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Login from "../Login/Login";
import UserAccount from "../UserAccount/UserAccount";
import Search from "../Search/Search";
import "./NavBar.css";

const font = "'Sail', cursive";

const useStyles = makeStyles(() => ({
  root: {
    fontFamily: font,
  },
}));

function NavBar(props) {
  const { isAuthenticated } = useAuth0();
  const classes = useStyles();
  // const theme = useTheme();
  return (
    <div className="navBar">
      <AppBar color="secondary" position="fixed">
        <Toolbar>
          <Link to="/" variant="h6" className="title" align="left">
            <Typography className={classes.root} variant="h5">
              Open Forum
            </Typography>
          </Link>
          {props.isSearchEnable && <Search />}
          <Button color="inherit">
            {isAuthenticated ? <UserAccount /> : <Login />}
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
