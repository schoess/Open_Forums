import React from "react";
import { Button, Tooltip, Grid, AppBar } from "@material-ui/core";
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
import { useViewportContext } from "../../contexts/ViewportContext";

const useStyles = makeStyles({
  logo: {
    paddingTop: "5px",
    paddingLeft: "5px",
  },
});

function NavBar(props) {
  const { isAuthenticated } = useAuth0();
  const { darkMode, setDarkMode } = useDarkModeContext();
  const classes = useStyles();
  const { width } = useViewportContext();
  const breakPoint = 600;

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };

  return (
    // aligning navbar items based on screen size
    <AppBar color="primary" position="fixed">
      {(width < breakPoint && (
        <Grid container direction="row" justify="space-evenly" alignItems="center">
          <Grid item xs={12}>
            <Grid container direction="row" justify="flex-end" alignItems="center">
              <Grid item xs={6}>
                <Grid container direction="row" justify="flex-start" alignItems="center">
                  <Link to="/">
                    {darkMode ? (
                      <img src={SparkDarkThemeLogo} alt="SparkDarkThemeLogo" className={classes.logo} width="150" height="50" />
                    ) : (
                      <img src={SparkLightThemeLogo} alt="SparkLightThemeLogo" width="150" height="50" />
                    )}
                  </Link>
                </Grid>
              </Grid>
              <Grid item xs={6} justify="flex-end" alignItems="center">
                <Grid container direction="row" justify="flex-end" alignItems="center">
                  <Tooltip title="Toggle light/dark theme" placement="bottom">
                    {darkMode ? <Brightness7 onClick={handleThemeChange} /> : <Brightness4 onClick={handleThemeChange} />}
                  </Tooltip>
                  <Button color="inherit">{isAuthenticated ? <UserAccount /> : <Login />}</Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={7} md={6} lg={10}>
            {props.isSearchEnable && <Search />}
          </Grid>
        </Grid>
      )) || (
        <Grid container direction="row" justify="space-evenly" alignItems="center">
          <Grid item xs={12} sm={3} md={2} lg={1}>
            <Grid container direction="row" justify="flex-start" alignItems="center">
              <Link to="/">
                {darkMode ? (
                  <img src={SparkDarkThemeLogo} alt="SparkDarkThemeLogo" className={classes.logo} width="150" height="50" />
                ) : (
                  <img src={SparkLightThemeLogo} alt="SparkLightThemeLogo" width="150" height="50" />
                )}
              </Link>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={7} md={6} lg={10}>
            {props.isSearchEnable && <Search />}
          </Grid>
          <Grid item xs={12} sm={2} md={2} lg={1}>
            <Grid container direction="row" justify="center" alignItems="center">
              <Tooltip title="Toggle light/dark theme" placement="bottom">
                {darkMode ? <Brightness7 onClick={handleThemeChange} /> : <Brightness4 onClick={handleThemeChange} />}
              </Tooltip>
              <Button color="inherit">{isAuthenticated ? <UserAccount /> : <Login />}</Button>
            </Grid>
          </Grid>
        </Grid>
      )}
    </AppBar>
  );
}

export default NavBar;
