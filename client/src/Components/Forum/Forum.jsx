import React, { useEffect } from "react";
import {
  Card,
  CardContent,
  Typography,
  CardHeader,
  Avatar,
  IconButton,
} from "@material-ui/core";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ThumbDownAltIcon from "@material-ui/icons/ThumbDownAlt";
import moment from "moment";
import Replies from "../Reply/Replies";
import forumApi from "../../utils/forum.api";

const myStyle = {
  cardContainer: {
    textAlign: "center",
    width: "1200px",
    margin: "auto",
    paddingTop: "90px",
  },
  cardIndividual: {
    margin: "20px",
    marginTop: "40px",
  },
  titleCardBody: {
    textAlign: "left",
    fontWeight: 700,
    fontSize: "22px",
  },
  descCardBody: {
    textAlign: "left",
    fontSize: "18px",
    paddingBottom: 10,
  },
  cardHeader: {
    marginTop: "20px",
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
        <CardHeader
          style={myStyle.cardHeader}
          // className={classes.cardAction}
          className="padding-delete"
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
        </CardContent>
      </Card>
      <Typography variant="h6" component="p">
        Replies{" "}
      </Typography>
      <Replies forumId={props.match.params.forumId} />
    </div>
  );
}
