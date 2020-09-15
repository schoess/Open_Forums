import React from "react";
import { AppBar, Toolbar, Button, Typography, Grid, Switch, Tooltip, SvgIcon } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { makeStyles } from "@material-ui/core/styles";
import Login from "../Login/Login";
import UserAccount from "../UserAccount/UserAccount";
import Search from "../Search/Search";
<<<<<<< HEAD
import CreatePost from "../CreatePost/CreatePost";
// import { useDarkModeContext } from "../../contexts/DarkModeContext";
import "./NavBar.css";

const font = "'Sail', cursive";
=======
import { useDarkModeContext } from "../../contexts/DarkModeContext";
import { Brightness7, Brightness4 } from "@material-ui/icons";
import SparkLogo from "../../assets/images/spark.svg";
>>>>>>> f98318e14624311cb1cdb1cf196afcf2aac6f18e

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    color: "white",
  },
}));

function NavBar(props) {
  const { isAuthenticated } = useAuth0();
  const classes = useStyles();
<<<<<<< HEAD

  // BV: Can/should I have the state in the context and export it here to use?
  // const { darkState, setDarkState } = useDarkModeContext(false);
  // const handleThemeChange = () => {
  //   setDarkState(!darkState);
  //   console.log("Dark Mode Toggle CLICKED! This is darkState = " + darkState);
  //   // BV: The above is working; darkState switches from true to false.
  // };

  console.log("THIS IS props.handleThemeChange = " + props.handleThemeChange);
=======
  const { darkMode, setDarkMode } = useDarkModeContext();

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };
>>>>>>> f98318e14624311cb1cdb1cf196afcf2aac6f18e

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <Link to="/" variant="h6" className={classes.title} align="left">
            <img src={SparkLogo} alt="SparkLogo" />
          </Link>
<<<<<<< HEAD
          <div className="darkModeToggleDiv">
            <Switch color="secondary" onClick={props.handleThemeChange} />
          </div>
          <CreatePost />
          {props.isSearchEnable && <Search />}
          <Button color="inherit">
            {isAuthenticated ? <UserAccount /> : <Login />}
          </Button>
=======

          {props.isSearchEnable && <Search />}
          <Tooltip title="Toggle light/dark theme" placement="bottom">
            {darkMode ? <Brightness7 onClick={toggleTheme} /> : <Brightness4 onClick={toggleTheme} />}
          </Tooltip>
          <Button color="inherit">{isAuthenticated ? <UserAccount /> : <Login />}</Button>
>>>>>>> f98318e14624311cb1cdb1cf196afcf2aac6f18e
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
