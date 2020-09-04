import React, { useEffect, useState } from "react";
import {
  Card,
  CardActions,
  CardContent,
  Typography,
  Avatar,
  CardHeader,
  makeStyles,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ThumbDownAltIcon from "@material-ui/icons/ThumbDownAlt";
import forumApi from "../../utils/forum.api";
import { useForumContext } from "../../contexts/ForumContext";
import moment from "moment";
import { Link } from 'react-router-dom';
import "./PostCard.css"
import "./PostCard.css";
import { useAuth0 } from "@auth0/auth0-react";

const useStyles = makeStyles((theme) => ({
  cardAction: {
    paddingTop: 5,
    paddingBottom: 0,
  },
}));

// BV: switched to css file for style in order to style hover effects easier

export default function PostCard(props) {
  const classes = useStyles();
  const { forum, setForum } = useForumContext();
  const { user } = useAuth0();

  const deleteOnClick = (item) => () => {
    forumApi.deleteForum(item._id);
    loadAllForum();
  };

  const [likeDislikeState, setLikeDislikeState] = useState({
    like: 0,
    dislike: 0
    // liked: false
    // disliked: false
  })

  const likeButtonOnClick = () => setLikeDislikeState({ ...likeDislikeState, like: (likeDislikeState.like + 1) });
  const dislikeButtonOnClick = () => setLikeDislikeState({ ...likeDislikeState, dislike: (likeDislikeState.dislike + 1) });

  useEffect(() => {
    loadAllForum();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Loads all forums and sets them to data
  function loadAllForum() {
    forumApi
      .getAllForum()
      .then((res) => {
        setForum(res.data);
      })
      .catch((err) => console.log(err));
  }
  return (
    <div className="cardContainer">
      {forum.map((item) => (
        <Card className="cardIndividual" key={item._id}>
          <CardHeader
            className={classes.cardAction}
            avatar={
              <Avatar
                alt={item.user && item.user.name}
                src={item.user && item.user.picture}
              />
            }
            title={item.user && item.user.name}
            subheader={moment(item.date).format("lll")}
          />
          <CardContent>
            <Typography
              className="cardTitle"
              color="secondary"
              gutterBottom
            >
              <Link to={`/forums/${item._id}`}>{item.forum_title}</Link>
              <Typography className="cardBody" variant="body2" component="p">
                {item.forum_description}
                <br />
              </Typography>
            </Typography>
          </CardContent>
          <CardActions>
            <div className="likeDislikeBtns">
              <span className="likeCount">{likeDislikeState.like}</span>
              <ThumbUpAltIcon className="likeBtn" onClick={likeButtonOnClick} size="small" />
              <ThumbDownAltIcon className="dislikeBtn" onClick={dislikeButtonOnClick} size="small" />
              <span className="dislikeCount">{likeDislikeState.dislike}</span>
              {/* show delete button only for the user who posted the forum */}
              {item.user && item.user.id === user.sub && (
                <DeleteIcon
                  className="deleteBtn"
                  onClick={deleteOnClick(item)}
                  size="small"
                  variant="contained"
                />
              )}
            </div>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}
