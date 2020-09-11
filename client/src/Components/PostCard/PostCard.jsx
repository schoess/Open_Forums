import React, { useEffect } from "react";
import { Card, CardActions, CardContent, Typography, Avatar, CardHeader, IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ThumbDownAltIcon from "@material-ui/icons/ThumbDownAlt";
import moment from "moment";
import { Link } from "react-router-dom";
import "./PostCard.css";
import { useAuth0 } from "@auth0/auth0-react";
import * as _ from "lodash";
import forumApi from "../../utils/forum.api";
import { useForumContext } from "../../contexts/ForumContext";

// const useStyles = makeStyles((theme) => ({
//   cardAction: {
//     paddingTop: 5,
//     paddingBottom: 0,
//   },
// }));

// BV: switched to css file for style in order to style hover effects easier

export default function PostCard(props) {
  // const classes = useStyles();
  const { forums, setForums } = useForumContext();
  const { isAuthenticated, user } = useAuth0();

  const deleteOnClick = (forum) => () => {
    forumApi.deleteForum(forum._id);
    loadAllForum();
  };

  const likeButtonOnClick = (forum) => async () => {
    const currentUserId = user.sub;
    if (!_.includes(forum.likedUsers, currentUserId)) {
      const hasUserDislikedBefore = _.includes(forum.dislikedUsers, currentUserId);
      let dislikes = forum.dislikes;
      if (hasUserDislikedBefore) {
        dislikes = dislikes - 1;
      }
      const dislikedUsers = _.filter(forum.dislikedUsers, (dislikedUser) => dislikedUser !== currentUserId);
      const updatedForum = {
        ...forum,
        likes: forum.likes + 1,
        likedUsers: [...forum.likedUsers, currentUserId],
        dislikes,
        dislikedUsers,
      };

      await forumApi.updateForum(forum._id, updatedForum);
      await loadAllForum();
    }
  };

  const dislikeButtonOnClick = (forum) => async () => {
    const currentUserId = user.sub;
    if (!_.includes(forum.dislikedUsers, currentUserId)) {
      const hasUserLikedBefore = _.includes(forum.likedUsers, currentUserId);
      let likes = forum.likes;
      if (hasUserLikedBefore) {
        likes = likes - 1;
      }
      const likedUsers = _.filter(forum.likedUsers, (likedUser) => likedUser !== currentUserId);

      const updatedForum = {
        ...forum,
        dislikes: forum.dislikes + 1,
        dislikedUsers: [...forum.dislikedUsers, currentUserId],
        likes,
        likedUsers,
      };

      await forumApi.updateForum(forum._id, updatedForum);
      await loadAllForum();
    }
  };

  useEffect(() => {
    loadAllForum();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Loads all forums and sets them to data
  function loadAllForum() {
    forumApi
      .getAllForum()
      .then((res) => {
        if (props.myForum) {
          let personalForum = res.data.filter((forum) => {
            return forum.user && forum.user.id === user.sub;
          });
          setForums(personalForum);
        } else {
          setForums(res.data);
        }
      })
      .catch((err) => console.log(err));
  }
  return (
    <div className="cardContainer">
      {forums.map((forum) => {
        return (
          <Card className="cardIndividual" key={forum._id}>
            <CardHeader
              // className={classes.cardAction}
              className="padding-delete"
              avatar={<Avatar alt={forum.user && forum.user.name} src={forum.user && forum.user.picture} />}
              title={forum.user && forum.user.name}
              subheader={moment(forum.date).format("lll")}
            />
            <Link to={`/forums/${forum._id}`}>
              <CardContent className="padding-delete">
                <Typography className="cardTitle padding-delete cardContent" color="secondary">
                  <h2 className="cardTitle">{forum.forum_title}</h2>
                </Typography>
              </CardContent>
            </Link>
            <CardActions className="padding-delete">
              <div className="likeDislikeBtns">
                <span className="likeCount">{forum.likes}</span>
                <IconButton disabled={!isAuthenticated} onClick={likeButtonOnClick(forum)} size="small">
                  <ThumbUpAltIcon className="likeBtn" size="small" />
                </IconButton>
                <IconButton disabled={!isAuthenticated} onClick={dislikeButtonOnClick(forum)} size="small">
                  <ThumbDownAltIcon className="dislikeBtn" />
                </IconButton>
                <span className="dislikeCount">{forum.dislikes}</span>
              </div>
              {/* show delete button only for the user who posted the forum */}
              {forum.user && forum.user.id === user.sub && <DeleteIcon className="deleteBtn" onClick={deleteOnClick(forum)} size="small" variant="contained" />}
            </CardActions>
          </Card>
        );
      })}
    </div>
  );
}