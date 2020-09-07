import React from "react";
import { AppBar, Toolbar, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Login from "../Login/Login";
import { makeStyles } from "@material-ui/core/styles";
import UserAccount from "../UserAccount/UserAccount";
import Search from "../Search/Search";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

function NavBar() {
  const { isAuthenticated } = useAuth0();
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <Link to="/" variant="h6" className={classes.title} align="left">
            Open Forum
          </Link>
          <Search />
          <Button color="inherit">
            {isAuthenticated ? <UserAccount /> : <Login />}
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
