/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from "react";
import { Card, Typography, CardActions, IconButton, CardHeader, Avatar } from "@material-ui/core";
import { ThumbUpAlt as ThumbUpAltIcon, ThumbDownAlt as ThumbDownAltIcon, Delete as DeleteIcon } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import moment from "moment";
import { useAuth0 } from "@auth0/auth0-react";
import * as _ from "lodash";
import forumApi from "../../utils/forum.api";
import { useDarkModeContext } from "../../contexts/DarkModeContext";
import PostReply from "./PostReply";
import "./Replies.css";

// "reply" refers to the submit form, "replies" refers to the previously submitted replies

const useStyles = makeStyles((theme) => ({
  likeButtonLight: {
    color: "#02CA59",
  },
  likeButtonDark: {
    color: "#51BBFE",
  },
  dislikeButtonLight: {
    color: "#FF0A0A",
  },
  dislikeButtonDark: {
    color: "#F6A23C",
  },
  likeCountLight: {
    color: "#000000",
    backgroundColor: "#F391C5",
    padding: "4px 4px 5px 4px",
    borderRadius: "20px",
  },
  likeCountDark: {
    color: "#000000",
    backgroundColor: "#96A7C5",
    padding: "4px 4px 5px 4px",
    borderRadius: "20px",
  },
  dislikeCountLight: {
    color: "#000000",
    backgroundColor: "#F391C5",
    padding: "4px 4px 5px 4px",
    borderRadius: "20px",
  },
  dislikeCountDark: {
    color: "#000000",
    backgroundColor: "#96A7C5",
    padding: "4px 4px 5px 4px",
    borderRadius: "20px",
  },
  deleteIcon: {
    cursor: "pointer",
    color: "#888098",
  },
}));

export default function Replies(props) {
  const classes = useStyles();
  const [replies, setReplies] = useState([]);
  const { darkMode } = useDarkModeContext();
  const { isAuthenticated, user } = useAuth0();

  // Loads all replies and sets them to data
  function loadAllReplyForum() {
    forumApi
      .getAllReply(props.forumId)
      .then((res) => {
        setReplies(res.data.replies);
      })
      .catch((err) => console.log(err));
  }
  // get all replies
  useEffect(() => {
    loadAllReplyForum();
    // eslint-disable-next-line
  }, []);
  const deleteOnClick = (reply) => () => {
    forumApi.deleteReply(reply._id);
    loadAllReplyForum();
  };

  const likeButtonOnClick = (reply) => async () => {
    const currentUserId = user.sub;
    if (!_.includes(reply.likedUsers, currentUserId)) {
      const hasUserDislikedBefore = _.includes(reply.dislikedUsers, currentUserId);
      let { dislikes } = reply;
      if (hasUserDislikedBefore) {
        dislikes -= 1;
      }
      const dislikedUsers = _.filter(reply.dislikedUsers, (dislikedUser) => dislikedUser !== currentUserId);

      const updatedReply = {
        ...reply,
        likes: reply.likes + 1,
        likedUsers: [...reply.likedUsers, currentUserId],
        dislikes,
        dislikedUsers,
      };

      await forumApi.updateReply(reply._id, updatedReply);
      await loadAllReplyForum();
    }
  };

  const dislikeButtonOnClick = (reply) => async () => {
    const currentUserId = user.sub;
    if (!_.includes(reply.dislikedUsers, currentUserId)) {
      const hasUserLikedBefore = _.includes(reply.likedUsers, currentUserId);
      let { likes } = reply;
      if (hasUserLikedBefore) {
        likes -= 1;
      }
      const likedUsers = _.filter(reply.likedUsers, (likedUser) => likedUser !== currentUserId);

      const updatedReply = {
        ...reply,
        dislikes: reply.dislikes + 1,
        dislikedUsers: [...reply.dislikedUsers, currentUserId],
        likes,
        likedUsers,
      };
      await forumApi.updateReply(reply._id, updatedReply);
      await loadAllReplyForum();
    }
  };

  return (
    <div>
      {isAuthenticated && <PostReply loadAllReplyForum={loadAllReplyForum} forumId={props.forumId} />}
      {replies.reverse().map((reply) => {
        const name = _.get(reply, "user.name"); //forum.user.name
        const username = name && name.includes("@") ? name.substring(0, name.lastIndexOf("@")) : name;
        return (
          <Card className="card-styles" key={reply._id}>
            <CardActions>
              <CardHeader
                className="avatar-styles"
                avatar={<Avatar alt={_.get(reply, "user.name")} src={_.get(reply, "user.picture")} />}
                title={username + ", " + moment(reply.date).fromNow()}
                subheader={reply.reply_description}
              />
              <div className="likeDislikeBtns button-styles">
                <span className={darkMode ? classes.likeCountDark : classes.likeCountLight}>{reply.likes}</span>
                <IconButton disabled={!isAuthenticated} onClick={likeButtonOnClick(reply)} size="small">
                  <ThumbUpAltIcon className={darkMode ? classes.likeButtonDark : classes.likeButtonLight} size="small" />
                </IconButton>
                <IconButton disabled={!isAuthenticated} onClick={dislikeButtonOnClick(reply)} size="small">
                  <ThumbDownAltIcon className={darkMode ? classes.dislikeButtonDark : classes.dislikeButtonLight} />
                </IconButton>
                <span className={darkMode ? classes.dislikeCountDark : classes.dislikeCountLight}>{reply.dislikes}</span>
              </div>
              {isAuthenticated && user.sub === _.get(reply, "user.id") && <DeleteIcon onClick={deleteOnClick(reply)} size="small" variant="contained" />}
            </CardActions>
          </Card>
        );
      })}
    </div>
  );
}
