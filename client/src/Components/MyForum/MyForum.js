import React from "react";
import { Grid } from "@material-ui/core";
import PostCard from "../PostCard/PostCard";
import NavBar from "../NavBar/NavBar";
import "../Dashboard/Dashboard.css";

function MyForum() {
  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <Grid item xs={12} sm={12} md={12} lg={12} id="nav-bar">
        <NavBar isSearchEnable={false} />
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <Grid container direction="row" justify="center" alignItems="flex-start">
          <Grid item xs={12} sm={12} md={8} lg={8}>
            <PostCard myForum={true} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
export default MyForum;
