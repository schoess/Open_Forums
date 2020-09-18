/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import { Card, CardContent, Typography, CardHeader, Avatar } from "@material-ui/core";
import moment from "moment";
import Replies from "../Reply/Replies";
import forumApi from "../../utils/forum.api";
import { useDarkModeContext } from "../../contexts/DarkModeContext";
import * as _ from "lodash";

const myStyle = {
  cardContainer: {
    // textAlign: "center",
    width: "1000px",
    margin: "auto",
    paddingTop: "90px",
    borderRadius: 25,
  },
  cardIndividual: {
    borderRadius: 25
  },
  cardTitle: {
    textAlign: "left",
    paddingLeft: "50px",
    marginTop: 0,
    marginBottom: 0,
    fontSize: "22px",
    fontWeight: 700,
  },
  descCardBody: {
    textAlign: "left",
    fontSize: "18px",
    paddingBottom: 10,
    paddingLeft: "50px",
  },
  cardHeader: {
    marginTop: "20px",
  },
};
export default function (props) {
  const [forum, setForum] = React.useState({});
  const { darkMode } = useDarkModeContext();

  useEffect(() => {
    forumApi
      .getById(props.match.params.forumId)
      .then((res) => {
        setForum(res.data);
      })
      .catch((err) => console.log(err));
    // eslint-disable-next-line
  }, []);

  console.log("dark mode outside useeffect: ", darkMode);
  const name = _.get(forum, 'user.name'); //forum.user.name
  const username = name && name.includes("@") ? name.substring(0, name.lastIndexOf("@")) : name;
  return (
    <div style={myStyle.cardContainer}>
      <Card style={myStyle.cardIndividual}>
        <CardHeader
          style={myStyle.cardHeader}
          // className="padding-delete"
          avatar={<Avatar alt={forum.user && forum.user.name} src={forum.user && forum.user.picture} />}
          title={username+ ", " + moment(forum.date).fromNow()}
        />
        <CardContent>
          <Typography style={myStyle.cardTitle} variant="body2" component="p">
            {forum.forum_title}
          </Typography>
          <Typography style={myStyle.descCardBody} variant="body2" component="p">
            {forum.forum_description}
          </Typography>
        </CardContent>
      </Card>
      <Replies forumId={props.match.params.forumId} />
    </div>
  );
}
