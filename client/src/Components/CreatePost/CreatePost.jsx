// CreatePost
import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import CreateIcon from "@material-ui/icons/Create";
import SubmitPost from "../SubmitPost/SubmitPost";
import { useSubmitPostModalContext } from "../../contexts/SubmitPostModalContext";

const myStyle = {
  CreatePostButton: {
    backgroundColor: "white",
    marginTop: "100px",
    position: "sticky",
    top: "100px",
    zIndex: "1",
  },
};

export default function CreatePost() {
  const {
    showSubmitPostModal,
    setShowSubmitPostModal,
  } = useSubmitPostModalContext();

  const handleClickOpen = () => {
    setShowSubmitPostModal(true);
  };

  const handleClose = () => {
    setShowSubmitPostModal(false);
  };

  return (
    <div style={myStyle.CreatePostButton}>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        <CreateIcon />
        Create Post
      </Button>
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
