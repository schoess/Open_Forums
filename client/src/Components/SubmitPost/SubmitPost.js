import React from "react";
import { Grid, TextField, Button } from "@material-ui/core";
import forumApi from "../../utils/forum.api";
import { useAuth0 } from "@auth0/auth0-react";
import AlertDialog from "../AuthenticationModal/AuthenticationModal";
import { useForumContext } from "../../contexts/ForumContext";

const myStyle = {
  textField: {
    width: "500px",
    backgroundColor: "white",
    opacity: "85%"
  },
  button: {
    width: "100px"
  },
  entireForm: {
    paddingTop: "250px",
    position: "-webkit-sticky",
    position: "sticky",
    top: "0"
  }
};


function SubmitPost() {
  const { setForum } = useForumContext();
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const { isAuthenticated } = useAuth0();

  const onSubmit = (event) => {
    event.preventDefault();

    // API
    forumApi.createForum({
      forum_title: title,
      forum_description: description,
      category: "General",
    });

    setTitle("");
    setDescription("");

    // get all forums 
    forumApi.getAllForum()
      .then((res) => {
        // setForum(result)
        setForum(res.data);
      })
      .catch((err) => console.log(err));

  };

  return (
    <div>
        <Grid item xs={12} style={myStyle.entireForm}>
          <form onSubmit={onSubmit}>
            <div>
              <TextField
                style={myStyle.textField}
                id="title"
                label="Title"
                defaultValue=" "
                variant="outlined"
                margin="normal"
                fullWidth
                value={title}
                onChange={(event) => setTitle(event.target.value)}
              />
            </div>
            <div>
              <TextField
                style={myStyle.textField}
                id="message"
                label="Message"
                defaultValue=" "
                variant="outlined"
                margin="normal"
                multiline
                rows={6}
                fullWidth
                value={description}
                onChange={(event) => setDescription(event.target.value)}
              />
            </div>
            <div>
              {(!isAuthenticated && (
                <Button
                  style={myStyle.button}
                  label="submit"
                  type="submit"
                  fullWidth
                  color="primary"
                  variant="contained"
                >
                  <AlertDialog />
                </Button>
              )) || (
                  <Button
                    style={myStyle.button}
                    label="submit"
                    type="submit"
                    fullWidth
                    color="primary"
                    variant="contained"
                  >
                    Send
                  </Button>
                )}
            </div>
          </form>
        </Grid>
    </div>
  );
}

export default SubmitPost;
