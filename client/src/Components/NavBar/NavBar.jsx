import React from "react";
import { AppBar, Button, Tooltip, Grid } from "@material-ui/core";
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

const useStyles = makeStyles({
  logo: {
    paddingTop: "5px",
    paddingLeft: "77px",
  },
});

function NavBar(props) {
  const { isAuthenticated } = useAuth0();
  const { darkMode, setDarkMode } = useDarkModeContext();
  const classes = useStyles();

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };

  return (
    <AppBar color="primary" position="fixed">
      <Grid container direction="row" justify="space-evenly" alignItems="center">
        <Grid item xs={12} sm={12} md={2} lg={1}>
          <Grid container direction="row" justify="center" alignItems="center">
            <Link className={classes.logo} to="/">
              {darkMode ? (
                <img src={SparkDarkThemeLogo} alt="SparkDarkThemeLogo" width="150" height="50" />
              ) : (
                <img src={SparkLightThemeLogo} alt="SparkLightThemeLogo" width="150" height="50" />
              )}
            </Link>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={10}>
          {props.isSearchEnable && <Search />}
        </Grid>
        <Grid item xs={12} sm={12} md={2} lg={1}>
          <Grid container direction="row" justify="center" alignItems="center">
            <Tooltip title="Toggle light/dark theme" placement="bottom">
              {darkMode ? <Brightness7 onClick={handleThemeChange} /> : <Brightness4 onClick={handleThemeChange} />}
            </Tooltip>
            <Button color="inherit">{isAuthenticated ? <UserAccount /> : <Login />}</Button>
          </Grid>
        </Grid>
      </Grid>
    </AppBar>
  );
}

export default NavBar;
