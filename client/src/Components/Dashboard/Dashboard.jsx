import React from "react";
import { Grid } from "@material-ui/core";
import PostCard from "../PostCard/PostCard";
import NavBar from "../NavBar/NavBar";
import "./Dashboard.css";
<<<<<<< HEAD
=======
import TopTrending from "../TopTrending/TopTrending";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));
>>>>>>> 6acc48beeaf515544f7190424b0e2b29c5fa2346

function Dashboard() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <NavBar isSearchEnable={true} />
<<<<<<< HEAD
      <Container>
        <Grid
          container
          spacing={1}
          direction="row"
          // "row-reverse"
          justify="center"
        >
          <PostCard className="postCard" />
=======

      <Grid
        container
        spacing={1}
        direction="row"
        // "row-reverse"
        // justify="center"
      >
        <Grid item xs={12} container>
          <Grid item xs={8}>
            <PostCard className="postCard" />
          </Grid>
          <Grid item xs={4}>
            <TopTrending />
          </Grid>
>>>>>>> 6acc48beeaf515544f7190424b0e2b29c5fa2346
        </Grid>
      </Grid>
    </div>
  );
}
export default Dashboard;
