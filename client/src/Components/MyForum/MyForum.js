import React from "react";
import PostCard from "../PostCard/PostCard.js";
import { Container, Grid } from "@material-ui/core";
import NavBar from "../NavBar/NavBar";
import "../Dashboard/Dashboard.css";
import CreatePost from "../CreatePost/CreatePost";

function MyForum() {
  return (
    <div>
      <NavBar isSearchEnable={false} />
      <Container>
        <Grid
          container
          spacing={1}
          direction="row"
          //"row-reverse"
          justify="center"
        >
          <CreatePost />
          <PostCard className="postCard" myForum={true} />
        </Grid>
      </Container>
    </div>
  );
}
export default MyForum;
