import React, { useEffect } from "react";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@material-ui/core";
import "./PostCard.css";
import forumApi from "../../utils/forum.api";
import { useForumContext } from "../../contexts/ForumContext";

const myStyle = {
  cardContainer: {
    textAlign: "center",
    width: "700px",
  },
  cardIndividual: {
    margin: "20px",
  },
};

export default function PostCard(props) {
  const { forum, setForum } = useForumContext();

  const deleteOnClick = (item) => () => {
    console.log("inside delete button clicke event ======");
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
    <div className="post-card" style={myStyle.cardContainer}>
      {forum.map((item) => (
        <Card style={myStyle.cardIndividual} key={item._id}>
          <CardContent>
            <Typography
              className="alignLeft"
              color="textSecondary"
              gutterBottom
            >
              {item.forum_title}
            </Typography>
            <Typography className="alignLeft" variant="body2" component="p">
              {item.forum_description}
              <br />
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              onClick={deleteOnClick(item)}
              color="secondary"
              size="small"
              variant="contained"
            >
              Delete
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}
