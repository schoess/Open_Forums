import React from "react";
import SubmitPost from "../SubmitPost/SubmitPost.js";
import PostCard from "../PostCard/PostCard.js";
import ReplyCard from "../Reply/Replies.js";
import { Container, Grid } from "@material-ui/core";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div>
      <Container>
        <Grid
          container
          spacing={1}
          direction="row"
          //"row-reverse"
          justify="center"
        >
          <PostCard className="postCard" />
          <SubmitPost />
        </Grid>
      </Container>
    </div>
  );
}
export default Dashboard;
