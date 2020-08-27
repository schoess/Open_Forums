import React from "react";
import SubmitPost from "../SubmitPost/SubmitPost.js";
import PostCard from "../PostCard/PostCard.js";
import { Container, Grid } from "@material-ui/core";
import NavBar from "../NavBar/NavBar";

const myStyle = {
  page: {
    textAlign: "center"
  }
};

function Dashboard() {
  return (
    <div style={myStyle.page}>
      <NavBar />
      <Container>
        <Grid
          container
          spacing={1}
          direction="row"
          //"row-reverse"
          justify="center"
        >
          <PostCard />
          <SubmitPost />
        </Grid>
      </Container>
    </div>
  );
}
export default Dashboard;
