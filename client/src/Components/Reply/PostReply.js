import React, { useState } from "react";
import forumApi from "../../utils/forum.api";
import {
  Card,
  Typography,
  CardContent,
  CardActions,
  Button,
  TextField,
} from "@material-ui/core";

// "reply" refers to the submit form, "replies" refers to the previously submitted replies
const myStyle = {
  // cardContainer: {
  //   textAlign: "center",
  //   width: "700px",
  //   margin: "0 auto",
  //   paddingTop: 50,
  //   paddigBottom: 50
  // },
  replyContainer: {
    fontSize: "18px",
    marginTop: "70px",
  },
  replyText: {
    fontSize: "16px",
    textAlign: "left",
  },
  replyCard: {
    padding: "0px 10px",
  },
};

function PostReply(props) {
  const [forumTitle, setForumTitle] = useState("");
  const [replyToDescription, setReplyToDescription] = useState("");

  const replyToForum = async (event) => {
    event.preventDefault();
    //API call for posting reply
    await forumApi.createReplyToForum(props.forumId, {
      reply_description: replyToDescription,
    });
    setReplyToDescription("");
    props.loadAllReplyForum();
  };

  return (
    <div style={myStyle.replyContainer}>
      <form onSubmit={replyToForum}>
        <Card style={myStyle.replyCard}>
          <CardContent>
            <Typography
              style={myStyle.replyText}
              variant="body2"
              component="p"
              value={forumTitle}
              onChange={(event) => setForumTitle(event.target.value)}
            >
              Reply Card
            </Typography>
          </CardContent>
          <TextField
            styel={myStyle.replyTextField}
            id="message"
            label="Message"
            variant="outlined"
            margin="normal"
            multiline
            rows={6}
            fullWidth
            value={replyToDescription}
            onChange={(event) => setReplyToDescription(event.target.value)}
          />
          <CardActions>
            <Button
              type="submit"
              color="secondary"
              size="small"
              variant="contained"
            >
              Reply
            </Button>
          </CardActions>
        </Card>
      </form>
    </div>
  );
}

export default PostReply;
