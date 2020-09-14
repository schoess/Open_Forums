import React from "react";
import { AppBar, Toolbar, Button, Typography, Switch } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Login from "../Login/Login";
import UserAccount from "../UserAccount/UserAccount";
import Search from "../Search/Search";
import CreatePost from "../CreatePost/CreatePost";
import { useDarkModeContext } from "../../contexts/DarkModeContext";
import "./NavBar.css";

const font = "'Sail', cursive";

const useStyles = makeStyles(() => ({
  root: {
    fontFamily: font,
    fontSize: "60px",
  },
}));

function NavBar(props) {
  const { isAuthenticated } = useAuth0();
  const classes = useStyles();
  // BV: Can/should I have the state in the context and export it here to use?
  const { darkState, setDarkState } = useDarkModeContext(false);
  const handleThemeChange = () => {
    setDarkState(!darkState);
    console.log("Dark Mode Toggle CLICKED! This is darkState = " + darkState);
    // BV: The above is working; darkState switches from true to false.
  };

  return (
    <div className="navBar">
      <AppBar color="primary" position="fixed">
        <Toolbar>
          <Link className="title" to="/" variant="h6" align="left">
            <Typography className={classes.root} variant="h5">
              spark
            </Typography>
          </Link>
          <div className="darkModeToggleDiv">
            <Switch color="secondary" onChange={handleThemeChange} />
          </div>
          <CreatePost />
          {props.isSearchEnable && <Search />}
          <Button color="inherit">{isAuthenticated ? <UserAccount /> : <Login />}</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
