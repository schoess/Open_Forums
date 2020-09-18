/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import { Card, CardContent, Typography, CardHeader, Avatar, Grid } from "@material-ui/core";
import moment from "moment";
import Replies from "../Reply/Replies";
import forumApi from "../../utils/forum.api";
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
    borderRadius: 25,
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

  useEffect(() => {
    forumApi
      .getById(props.match.params.forumId)
      .then((res) => {
        setForum(res.data);
      })
      .catch((err) => console.log(err));
    // eslint-disable-next-line
  }, []);

  const name = _.get(forum, "user.name"); //forum.user.name
  const username = name && name.includes("@") ? name.substring(0, name.lastIndexOf("@")) : name;
  return (
    <Grid container direction="row" alignItems="center">
      <Grid item xs={11} sm={11} md={11} lg={11} style={myStyle.cardContainer}>
        <Card style={myStyle.cardIndividual}>
          <CardHeader
            style={myStyle.cardHeader}
            avatar={<Avatar alt={forum.user && forum.user.name} src={forum.user && forum.user.picture} />}
            title={username + ", " + moment(forum.date).fromNow()}
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
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <Replies forumId={props.match.params.forumId} />
      </Grid>
    </Grid>
  );
}
