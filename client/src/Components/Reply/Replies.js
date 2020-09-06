import React, { useEffect, useState } from "react";
import forumApi from "../../utils/forum.api";
import {
  Card, Typography, CardContent,
  CardActions, Button, TextField,
} from "@material-ui/core";
import {
  ThumbUpAlt as ThumbUpAltIcon,
  ThumbDownAlt as ThumbDownAltIcon,
  Delete as DeleteIcon
} from "@material-ui/icons";
import moment from "moment";


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
    padding: "0px 10px"
  },

  repliesCards: {
    margin: "20px 50px"
  }


}
export default function ReplyCard(props) {
  const [replies, setReplies] = useState([]);
  //const [replyOpen, setReplyOpen] = useState(false);
  const [forumTitle, setForumTitle] = useState("");
  const [replyToDescription, setReplyToDescription] = useState("");

  const replyToForum = async (event) => {
    event.preventDefault();
    //API call for posting reply
    await forumApi.createReplyToForum(props.forumId, {
      reply_description: replyToDescription,
    });
    setReplyToDescription("");
    loadAllReplyForum();
  };

  // get all replies
  useEffect(() => {
    loadAllReplyForum();
  }, []);

  // Loads all replies and sets them to data
  // BV: I saw this below was deleted; I think that might have been a mistake, so I kept it.
  function loadAllReplyForum() {
    forumApi
      .getAllReply(props.forumId)
      .then((res) => {
        setReplies(res.data.replies);
      })
      .catch((err) => console.log(err));
  }

  return <div>
    {replies.map((reply) => {
      return <Card style={myStyle.repliesCards} key={reply._id}>
        <CardContent style={myStyle.replyText}>
          <Typography style={myStyle.replyText} variant="body2" component="p">
            {reply.reply_description}
          </Typography>
          <Typography variant="body2" component="p">
            {moment(reply.date).format("lll")}
          </Typography>
        </CardContent>
        <CardActions>
          <div className="likeDislikeBtns">
            <ThumbUpAltIcon
              className="likeBtn"
              size="small" />
            <ThumbDownAltIcon
              className="dislikeBtn"
              size="small" />
          </div>
          <DeleteIcon
            className="deleteBtn"
            size="small"
            variant="contained"
          />
        </CardActions>

      </Card>
    })}
    <div style={myStyle.replyContainer}>
      <form onSubmit={replyToForum}>
        <Card style={myStyle.replyCard}>
          <CardContent>
            <Typography style={myStyle.replyText}
              variant="body2"
              component="p"
              value={forumTitle}
              onChange={(event) => setForumTitle(event.target.value)}>Reply Card
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
  </div>
};
