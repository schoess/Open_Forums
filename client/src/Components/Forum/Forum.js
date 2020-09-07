import React, { useEffect } from "react";
import forumApi from "../../utils/forum.api";
import { Card, CardContent, Typography, IconButton } from "@material-ui/core";
import ReplyCard from "../Reply/Replies";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ThumbDownAltIcon from "@material-ui/icons/ThumbDownAlt";

const myStyle = {
  cardContainer: {
    textAlign: "center",
    width: "700px",
    margin: "auto",
    paddingTop: "90px",
  },
  cardIndividual: {
    margin: "20px",
    marginTop: "30px",
  },
  titleCardBody: {
    textAlign: "left",
    fontWeight: 700,
    fontSize: "22px",
    fontFamily: "Raleway",
  },
  descCardBody: {
    textAlign: "left",
    fontFamily: "Raleway",
    fontSize: "18px",
    paddingBottom: 10,
  },
};
export default function (props) {
  const [forum, setForum] = React.useState({});

  useEffect(() => {
    forumApi
      .getById(props.match.params.forumId)
      .then((res) => {
        setForum(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div style={myStyle.cardContainer}>
      <Card style={myStyle.cardIndividual}>
        <CardContent>
          <Typography
            style={myStyle.titleCardBody}
            variant="body2"
            component="p"
          >
            {forum.forum_title}
          </Typography>
          <Typography
            style={myStyle.descCardBody}
            variant="body2"
            component="p"
          >
            {forum.forum_description}
          </Typography>
          <IconButton>
            <ThumbUpAltIcon className="likeBtn" size="small" />
            {forum.likes}
          </IconButton>
          <IconButton>
            <ThumbDownAltIcon className="dislikeBtn" size="small" />
            {forum.dislikes}
          </IconButton>
        </CardContent>
      </Card>

      <ReplyCard forumId={props.match.params.forumId} />
    </div>
  );
}
