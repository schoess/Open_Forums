import React, { useEffect } from "react";
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
            subheader={moment(item.date).format("lll")}
          />
          <CardContent>
            <Typography className="cardTitle" color="secondary" gutterBottom>
              {item.forum_title}
            </Typography>
            <Typography className="cardBody" variant="body2" component="p">
              {item.forum_description}
              <br />
            </Typography>
          </CardContent>
          <CardActions>
            <div className="likeDislikeBtns">
              <ThumbUpAltIcon className="likeBtn" size="small" />
              <ThumbDownAltIcon className="dislikeBtn" size="small" />
            </div>
            {/* show delete button only for the user who posted the forum */}
            {item.user && item.user.id === user.sub && (
              <DeleteIcon
                className="deleteBtn"
                onClick={deleteOnClick(item)}
                size="small"
                variant="contained"
              />
            )}
          </CardActions>
        </Card>
      ))}
    </div>
  );
}
