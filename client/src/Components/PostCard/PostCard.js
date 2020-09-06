import React, { useEffect } from "react";
import {
  Card,
  CardActions,
  CardContent,
  Typography,
  Avatar,
  CardHeader,
  makeStyles,
  IconButton
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ThumbDownAltIcon from "@material-ui/icons/ThumbDownAlt";
import forumApi from "../../utils/forum.api";
import { useForumContext } from "../../contexts/ForumContext";
import moment from "moment";
import { Link } from "react-router-dom";
import "./PostCard.css";
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
  const { forums, setForums } = useForumContext();
  const { user } = useAuth0();

  const deleteOnClick = (forum) => () => {
    forumApi.deleteForum(forum._id);
    loadAllForum();
  };

<<<<<<< HEAD
  const likeButtonOnClick = (item) => {
    const updatedItem = {
      ...item,
      likes: item.likes + 1,
      likedUsers: [...item.likedUsers, item._id],
    };
    forumApi.updateForum(item._id, updatedItem);
  };

  const dislikeButtonOnClick = (item) => {
    const updatedItem = {
      ...item,
      dislikes: item.dislikes + 1,
      dislikedUsers: [...item.dislikedUsers, item._id],
    };
    forumApi.updateForum(item._id, updatedItem);
  };
=======
  const likeButtonOnClick = async (forum) => {
    const updatedForum = {...forum, likes: forum.likes + 1, likedUsers: [...forum.likedUsers, forum._id]};
    await forumApi.updateForum(forum._id, updatedForum);
    await loadAllForum();
  }

  const dislikeButtonOnClick = async (forum) => {
    const updatedForum = {...forum, dislikes: forum.dislikes + 1, dislikedUsers: [...forum.dislikedUsers, forum._id]};
    await forumApi.updateForum(forum._id, updatedForum);
    await loadAllForum();
  }
>>>>>>> d305374d11251ad356dc2f524e96983d58456321

  useEffect(() => {
    loadAllForum();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Loads all forums and sets them to data
  function loadAllForum() {
    forumApi
      .getAllForum()
      .then((res) => {
        setForums(res.data);
      })
      .catch((err) => console.log(err));
  }
  return (
    <div className="cardContainer">
      {forums.map((forum) => {
        return <Card className="cardIndividual" key={forum._id}>
          <CardHeader
            className={classes.cardAction}
            avatar={
              <Avatar
                alt={forum.user && forum.user.name}
                src={forum.user && forum.user.picture}
              />
            }
            title={forum.user && forum.user.name}
            subheader={moment(forum.date).format("lll")}
          />
          <CardContent>
<<<<<<< HEAD
            <Typography className="cardTitle" color="secondary" gutterBottom>
              <Link to={`/forums/${item._id}`}>{item.forum_title}</Link>
=======
            <Typography
              className="cardTitle"
              color="secondary"
              gutterBottom
            >
              <Link to={`/forums/${forum._id}`} >{forum.forum_title}</Link>
>>>>>>> d305374d11251ad356dc2f524e96983d58456321
              <Typography className="cardBody" variant="body2" component="p">
                {forum.forum_description}
                <br />
              </Typography>
            </Typography>
          </CardContent>
          <CardActions>
            <div className="likeDislikeBtns">
<<<<<<< HEAD
              <span className="likeCount">{item.likes}</span>
              <ThumbUpAltIcon
                className="likeBtn"
                onClick={() => likeButtonOnClick(item)}
                size="small"
              />
              <ThumbDownAltIcon
                className="dislikeBtn"
                onClick={() => dislikeButtonOnClick(item)}
                size="small"
              />
              <span className="dislikeCount">{item.dislikes}</span>
=======
              <span className="likeCount">{forum.likes}</span>
              <IconButton onClick={() => likeButtonOnClick(forum)} size="small">
                <ThumbUpAltIcon 
                  className="likeBtn"  
                  size="small" />
              </IconButton>
              <IconButton onClick={() => dislikeButtonOnClick(forum)} size="small">
              <ThumbDownAltIcon 
              className="dislikeBtn" />
              </IconButton>
              <span className="dislikeCount">{forum.dislikes}</span>
>>>>>>> d305374d11251ad356dc2f524e96983d58456321
              {/* show delete button only for the user who posted the forum */}
              {forum.user && forum.user.id === user.sub && (
                <DeleteIcon
                  className="deleteBtn"
                  onClick={deleteOnClick(forum)}
                  size="small"
                  variant="contained"
                />
              )}
            </div>
            {/* show delete button only for the user who posted the forum */}
            {forum.user && forum.user.id === user.sub && (
              <DeleteIcon
                className="deleteBtn"
                onClick={deleteOnClick(forum)}
                size="small"
                variant="contained"
              />
            )}
          </CardActions>
        </Card>
      })}
    </div>
  );
}
