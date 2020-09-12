// CreatePost
import React from "react";
import { Button, Dialog, IconButton, Tooltip } from "@material-ui/core";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import SubmitPost from "../SubmitPost/SubmitPost";
import { useSubmitPostModalContext } from "../../contexts/SubmitPostModalContext";

const myStyle = {
  CreatePostButton: {
    backgroundColor: "primary",
    paddingTop: "20px",
    position: "sticky",
    paddingRight: "50px",
    top: "0",
  },
  BorderIcon: {
    paddingRight: "5px",
  },
};

export default function CreatePost() {
  const { showSubmitPostModal, setShowSubmitPostModal } = useSubmitPostModalContext();

  const handleClickOpen = () => {
    setShowSubmitPostModal(true);
  };

  const handleClose = () => {
    setShowSubmitPostModal(false);
  };

  return (
    <div style={myStyle.CreatePostButton}>
      <Tooltip title="Add your Own Post" color="inherit" onClick={handleClickOpen}>
        <IconButton aria-label="Create">
          <BorderColorIcon style={myStyle.BorderIcon} />
          Create Post
        </IconButton>
      </Tooltip>
      {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        <CreateIcon />
      </Button> */}
      <Dialog open={showSubmitPostModal} onClose={handleClose} aria-labelledby="form-dialog-title">
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
