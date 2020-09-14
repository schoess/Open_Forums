// CreatePost
import React from "react";
import { Button, Dialog } from "@material-ui/core";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import SubmitPost from "../SubmitPost/SubmitPost";
import { useSubmitPostModalContext } from "../../contexts/SubmitPostModalContext";

const myStyle = {
  CreatePostButton: {
<<<<<<< HEAD
    backgroundColor: "#FF5733",
    marginRight: "30px",
=======
    backgroundColor: "primary",
    paddingTop: "20px",
    position: "sticky",
    paddingLeft: "350px",
    top: "0",
>>>>>>> 6acc48beeaf515544f7190424b0e2b29c5fa2346
  },
  BorderColorIcon: {
    paddingRight: "5px",
    paddingLeft: "25px",
  },
};

function CreatePost() {
  const { showSubmitPostModal, setShowSubmitPostModal } = useSubmitPostModalContext();

  const handleClickOpen = () => {
    setShowSubmitPostModal(true);
  };

  const handleClose = () => {
    setShowSubmitPostModal(false);
  };

  return (
    <div style={myStyle.CreatePostButton}>
<<<<<<< HEAD
      <Button onClick={handleClickOpen}>
        <CreateIcon />
=======
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        <BorderColorIcon />
>>>>>>> 6acc48beeaf515544f7190424b0e2b29c5fa2346
        Create Post
      </Button>
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

export default CreatePost;
