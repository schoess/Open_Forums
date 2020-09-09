//CreatePost
import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import SubmitPost from "../SubmitPost/SubmitPost";
import CreateIcon from "@material-ui/icons/Create";
import { useSubmitPostModalContext } from "../../contexts/SubmitPostModalContext";
import { useAuth0 } from "@auth0/auth0-react";
import AlertDialog from "../AuthenticationModal/AuthenticationModal";

const myStyle = {
  CreatePostButton: {
    backgroundColor: "primary",
    paddingTop: "100px",
    position: "sticky",
    top: "0",
  },
};

export default function CreatePost() {
  const {
    showSubmitPostModal,
    setShowSubmitPostModal,
  } = useSubmitPostModalContext();
  const { isAuthenticated } = useAuth0();

  const handleClickOpen = () => {
    setShowSubmitPostModal(true);
  };

  const handleClose = () => {
    setShowSubmitPostModal(false);
  };

  return (
    <div style={myStyle.CreatePostButton}>
      {(isAuthenticated && (
        <Button variant="outlined" color="primary" onClick={handleClickOpen}>
          <CreateIcon />
          Create Post
        </Button>
      )) || <AlertDialog />}

      <Dialog
        open={showSubmitPostModal}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Create Your own Post</DialogTitle>
        <DialogContent>
          <SubmitPost />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
