import React from "react";
import {
  Grid,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
} from "@material-ui/core";
import forumApi from "../../utils/forum.api";
import { useAuth0 } from "@auth0/auth0-react";
import AlertDialog from "../AuthenticationModal/AuthenticationModal";
import { useForumContext } from "../../contexts/ForumContext";
import { useSubmitPostModalContext } from "../../contexts/SubmitPostModalContext";

const myStyle = {
  textField: {
    width: "500px",
    backgroundColor: "white",
    opacity: "80%",
  },
  button: {
    width: "100px",
  },
  entireForm: {
    paddingTop: "50px",
    position: "-webkit-sticky",
    position: "sticky",
    top: "0",
    margin: "0 auto",
  },
};

function SubmitPost() {
  const { setForums } = useForumContext();
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const { isAuthenticated, user } = useAuth0();
  const [category, setCategory] = React.useState({});
  const { setShowSubmitPostModal } = useSubmitPostModalContext();

  const handleChange = (event) => {
    const name = event.target.name;
    setCategory({
      ...category,
      [name]: event.target.value,
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    const forumCategory =
      (category.categoryName && category.categoryName) || "General";

    // API
    await forumApi.createForum({
      forum_title: title,
      forum_description: description,
      category: forumCategory,
      user: {
        id: user.sub,
        name: user.name,
        picture: user.picture,
      },
    });

    setTitle("");
    setDescription("");
    setCategory({
      categoryName: "",
    });

    // get all forums
    await forumApi
      .getAllForum()
      .then((res) => {
        setForums(res.data);
      })
      .catch((err) => console.log(err));

    setShowSubmitPostModal(false);
  };

  return (
    <div>
      <Grid item xs={6} style={myStyle.entireForm}>
        <form onSubmit={onSubmit}>
          <div>
            <FormControl style={myStyle.textField}>
              <InputLabel htmlFor="age-native-simple">Categories</InputLabel>
              <Select
                native
                value={category.categoryName}
                onChange={handleChange}
                inputProps={{
                  name: "categoryName",
                  id: "age-native-simple",
                }}
              >
                <option aria-label="None" value="" />
                <option>Sports</option>
                <option>Food</option>
                <option>Technology</option>
                <option>Kids</option>
                <option>Health/Fitness</option>
                <option>Art</option>
                <option>Business</option>
                <option>Entertainment</option>
              </Select>
            </FormControl>
          </div>
          <div>
            <TextField
              style={myStyle.textField}
              id="title"
              label="Title"
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
