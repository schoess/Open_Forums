import React from "react";
import { AppBar, Toolbar, Button, Tooltip } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useDarkModeContext } from "../../contexts/DarkModeContext";
import Login from "../Login/Login";
import UserAccount from "../UserAccount/UserAccount";
import Search from "../Search/Search";
import "./NavBar.css";
import { Brightness7, Brightness4 } from "@material-ui/icons";
import SparkDarkThemeLogo from "../../assets/images/spark_dark_theme_logo.svg";
import SparkLightThemeLogo from "../../assets/images/spark_light_theme_logo.svg";

const useStyles = makeStyles((theme) => ({
  logo: {
    paddingTop: "10px",
    paddingLeft: "10px",
  },
}));

function NavBar(props) {
  const { isAuthenticated } = useAuth0();
  const { darkMode, setDarkMode } = useDarkModeContext();
  const classes = useStyles();

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="navBar">
      <AppBar color="primary" position="fixed">
        <Toolbar>
          <Link to="/" variant="h6" className="title" align="left">
            {darkMode ? <img src={SparkDarkThemeLogo} alt="SparkDarkThemeLogo" className={classes.logo} /> : <img src={SparkLightThemeLogo} alt="SparkLightThemeLogo" />}
          </Link>
          {props.isSearchEnable && <Search />}
          <Tooltip title="Toggle light/dark theme" placement="bottom">
            {darkMode ? <Brightness7 onClick={handleThemeChange} /> : <Brightness4 onClick={handleThemeChange} />}
          </Tooltip>
          <Button color="inherit">{isAuthenticated ? <UserAccount /> : <Login />}</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
