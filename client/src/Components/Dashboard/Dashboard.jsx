import React from "react";
import { Container, Grid } from "@material-ui/core";
import PostCard from "../PostCard/PostCard";
import NavBar from "../NavBar/NavBar";
import "./Dashboard.css";
import CreatePost from "../CreatePost/CreatePost";

function Dashboard() {
  return (
    <div>
      <NavBar isSearchEnable={true} />
      <Container>
        <Grid
          container
          spacing={1}
          direction="row"
          // "row-reverse"
          justify="center"
        >
          <CreatePost />
          <PostCard className="postCard" />
        </Grid>
      </Container>
    </div>
  );
}
export default Dashboard;
