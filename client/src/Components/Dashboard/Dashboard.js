import React from "react";
import PostCard from "../PostCard/PostCard.js";
import { Container, Grid } from "@material-ui/core";
import "./Dashboard.css";
import CreatePost from "../CreatePost/CreatePost";

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
          <CreatePost />
        </Grid>
      </Container>
    </div>
  );
}
export default Dashboard;
