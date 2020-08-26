import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useAuth0 } from "@auth0/auth0-react";

export default function AlertDialog() {
  const [open, setOpen] = React.useState(false);
  const { loginWithRedirect, Login } = useAuth0();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLogin = () => {
    Login();
  };

  return (
    <div>
      <Button color="inherit" onClick={handleClickOpen}>
        Send
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Open Forum"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            You Have not Logged in yet. Do you want to continue, Please login..
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleLogin}
            color="primary"
            onClick={() => loginWithRedirect()}
          >
            Log in
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Go back
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
