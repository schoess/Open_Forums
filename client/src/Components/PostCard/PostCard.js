import React, { useEffect } from "react";
import { Card, CardActions, CardContent, Typography } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ThumbDownAltIcon from "@material-ui/icons/ThumbDownAlt";
import forumApi from "../../utils/forum.api";
import { useForumContext } from "../../contexts/ForumContext";
import moment from "moment";
import "./PostCard.css";

// BV: switched to css file for style in order to style hover effects easier

export default function PostCard(props) {
  const { forum, setForum } = useForumContext();

  const deleteOnClick = (item) => () => {
    console.log("inside delete button click event ======");
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
          <CardContent>
            <Typography className="cardTitle" color="secondary" gutterBottom>
              {item.forum_title}
            </Typography>
            <Typography className="cardBody" variant="body2" component="p">
              {item.forum_description}
              <br />
            </Typography>
            <Typography className="cardBody" variant="body2" component="p">
              {moment(item.date).format("lll")}
              <br />
            </Typography>
          </CardContent>
          <CardActions>
            <div className="likeDislikeBtns">
              <ThumbUpAltIcon className="likeBtn" size="small" />
              <ThumbDownAltIcon className="dislikeBtn" size="small" />
            </div>
            <DeleteIcon className="deleteBtn" onClick={deleteOnClick(item)} size="small" variant="contained" />
          </CardActions>
        </Card>
      ))}
    </div>
  );
}
