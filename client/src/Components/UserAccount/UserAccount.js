/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import { useAuth0 } from "@auth0/auth0-react";
import { Menu, MenuItem } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function ImageAvatars() {
  const classes = useStyles();
  const { user, logout } = useAuth0();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const history = useHistory();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout();
  };

  const DirectChat = () => {};

  const handleMyForum = () => {
    setAnchorEl(null);
    const path = "/my_forum";
    history.push(path);
  };

  return (
    <div className={classes.root}>
      <div>
        <Avatar
          alt=""
          src={user.picture}
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleMenu}
        />
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={open}
          onClose={handleClose}
        >
          <MenuItem onClick={handleMyForum}>My Forum</MenuItem>
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
          <MenuItem onClick={DirectChat}>Direct Chat</MenuItem>
        </Menu>
      </div>
    </div>
  );
}
