import React from "react";
import PostCard from "../PostCard/PostCard.js";
import { Container, Grid } from "@material-ui/core";
import NavBar from "../NavBar/NavBar";
import "./Dashboard.css";
import CreatePost from "../CreatePost/CreatePost";
import SubmitPost from "../SubmitPost/SubmitPost.js";

function Dashboard() {
  return (
    <div>
      <NavBar />
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
          <CreatePost/>
        </Grid>
      </Container>
    </div>
  );
  
}
export default Dashboard;
