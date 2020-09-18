/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Card, CardActions, Button, TextField } from "@material-ui/core";
import forumApi from "../../utils/forum.api";

// "reply" refers to the submit form, "replies" refers to the previously submitted replies
const myStyle = {
  replyContainer: {
    fontSize: "18px",
    marginTop: "20px",
  },
  replyText: {
    fontSize: "16px",
    textAlign: "left",
  },
  replyCard: {
    padding: "0px 10px",
  },
  commentButton: {
    float: "right",
    paddingRight: "20px",
  },
};

function PostReply(props) {
  // const [forumTitle, setForumTitle] = useState("");
  const [replyToDescription, setReplyToDescription] = useState("");
  const { user } = useAuth0();

  const replyToForum = async (event) => {
    event.preventDefault();
    console.log(user);
    // API call for posting reply
    await forumApi.createReplyToForum(props.forumId, {
      user: {
        id: user.sub,
        name: user.name,
        picture: user.picture,
      },
      reply_description: replyToDescription,
    });
    setReplyToDescription("");
    props.loadAllReplyForum();
  };

  return (
    <div className="reply-box" style={myStyle.replyContainer}>
      <form onSubmit={replyToForum}>
        <Card className="reply-card" style={myStyle.replyCard}>
          <TextField
            className="reply-text-field"
            style={myStyle.replyTextField}
            id="standard-full-width"
            required
            label="What are your thoughts?"
            variant="outlined"
            margin="dense"
            fullWidth
            value={replyToDescription}
            onChange={(event) => setReplyToDescription(event.target.value)}
          />
          <CardActions style={myStyle.commentButton}>
            <Button type="submit" color="primary" size="small" variant="contained">
              Comment
            </Button>
          </CardActions>
        </Card>
      </form>
    </div>
  );
}

export default PostReply;
