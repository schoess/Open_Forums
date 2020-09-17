import React from "react";
import { Grid } from "@material-ui/core";
import PostCard from "../PostCard/PostCard";
import NavBar from "../NavBar/NavBar";
import TopTrending from "../TopTrending/TopTrending";
import { useViewportContext } from "../../contexts/ViewportContext";

function Dashboard() {
  const { width } = useViewportContext();
  const breakpoint = 960;

  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <Grid item xs={12} sm={12} md={12} lg={12} id="nav-bar">
        {/* <AppBar color="primary" position="fixed"> */}
        <NavBar isSearchEnable={true} />
        {/* </AppBar> */}
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <Grid container direction="row" justify="center" alignItems="flex-start">
          {width < breakpoint && (
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <TopTrending />
            </Grid>
          )}
          <Grid item xs={12} sm={12} md={8} lg={8}>
            <PostCard />
          </Grid>
          {width >= breakpoint && (
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <TopTrending />
            </Grid>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
}
export default Dashboard;
