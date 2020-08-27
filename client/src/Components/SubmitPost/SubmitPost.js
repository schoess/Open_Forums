import React from "react";
import { Grid, TextField, Button } from "@material-ui/core";
import forumApi from "../../utils/forum.api";
import { useAuth0 } from "@auth0/auth0-react";
import AlertDialog from "../AuthenticationModal/AuthenticationModal";
import Dashboard from "../Dashboard/Dashboard";

const myStyle = {
  textField: {
    width: "500px",
  },
  button: {
    width: "100px",
  },
};

function SubmitPost() {
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
  };

  return (
    <div>
      <Grid
        container
        spacing={1}
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={12}>
          <form onSubmit={onSubmit}>
            <div>
              <TextField
                style={myStyle.textField}
                id="message"
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
      </Grid>
    </div>
  );
}

export default SubmitPost;
