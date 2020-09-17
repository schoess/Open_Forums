import React from "react";
import { Grid, AppBar, makeStyles } from "@material-ui/core";
import PostCard from "../PostCard/PostCard";
import NavBar from "../NavBar/NavBar";
import TopTrending from "../TopTrending/TopTrending";

const useStyles = makeStyles({
  body: {
    marginTop: "20px",
  },
});

function Dashboard() {
  const classes = useStyles();

  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <Grid item xs={12} sm={12} md={12} lg={12} id="nav-bar">
        <AppBar color="primary" position="fixed">
          <NavBar isSearchEnable={true} />
        </AppBar>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <Grid container direction="row" justify="center" alignItems="flex-start" className={classes.body}>
          <Grid item xs={12} sm={12} md={8} lg={8}>
            <PostCard />
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <TopTrending />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
export default Dashboard;
