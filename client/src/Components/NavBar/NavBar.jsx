import React from "react";
import { AppBar, Toolbar, Button, Tooltip } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useDarkModeContext } from "../../contexts/DarkModeContext";
import Login from "../Login/Login";
import UserAccount from "../UserAccount/UserAccount";
import Search from "../Search/Search";
import "./NavBar.css";
import { Brightness7, Brightness4 } from "@material-ui/icons";
import SparkLogo from "../../assets/images/spark.svg";

function NavBar(props) {
  const { isAuthenticated } = useAuth0();
  const { darkMode, setDarkMode } = useDarkModeContext();

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="navBar">
      <AppBar color="primary" position="fixed">
        <Toolbar>
          <Link to="/" variant="h6" className="title" align="left">
            <img src={SparkLogo} alt="SparkLogo" />
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
