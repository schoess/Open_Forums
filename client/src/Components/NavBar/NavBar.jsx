import React from "react";
import { AppBar, Toolbar, Button, Typography, Grid, Switch, Tooltip, SvgIcon } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { makeStyles } from "@material-ui/core/styles";
import Login from "../Login/Login";
import UserAccount from "../UserAccount/UserAccount";
import Search from "../Search/Search";
import { useDarkModeContext } from "../../contexts/DarkModeContext";
import { Brightness7, Brightness4 } from "@material-ui/icons";
import SparkLogo from "../../assets/images/spark.svg";

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
  const { darkMode, setDarkMode } = useDarkModeContext();

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <Link to="/" variant="h6" className={classes.title} align="left">
            <img src={SparkLogo} alt="SparkLogo" />
          </Link>

          {props.isSearchEnable && <Search />}
          <Tooltip title="Toggle light/dark theme" placement="bottom">
            {darkMode ? <Brightness7 onClick={toggleTheme} /> : <Brightness4 onClick={toggleTheme} />}
          </Tooltip>
          <Button color="inherit">{isAuthenticated ? <UserAccount /> : <Login />}</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
