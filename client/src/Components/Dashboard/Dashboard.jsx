import React from "react";
import { Container, Grid } from "@material-ui/core";
import PostCard from "../PostCard/PostCard";
import NavBar from "../NavBar/NavBar";
import "./Dashboard.css";

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
          <PostCard className="postCard" />
        </Grid>
      </Container>
    </div>
  );
}
export default Dashboard;
