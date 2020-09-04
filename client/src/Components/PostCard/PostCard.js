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
import { map } from "lodash";
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
  const { forums, setForums } = useForumContext();
  const { user } = useAuth0();

  const deleteOnClick = (forum) => () => {
    forumApi.deleteForum(forum._id);
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
            <Typography
              className="cardTitle"
              color="secondary"
              gutterBottom
            >
              <Link to={`/forums/${forum._id}`} >{forum.forum_title}</Link>
              <Typography className="cardBody" variant="body2" component="p">
                {forum.forum_description}
                <br />
              </Typography>
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
              onClick={deleteOnClick(forum)}
              size="small"
              variant="contained"
            />
            <ThumbUpAltIcon className="likeBtn" size="small" />
            <ThumbDownAltIcon className="dislikeBtn" size="small" />
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
