import React from "react";
import { Grid, Paper } from "@material-ui/core";
import PostCard from "../PostCard/PostCard";
import NavBar from "../NavBar/NavBar";
import "./Dashboard.css";
import TopTrending from "../TopTrending/TopTrending";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

function Dashboard() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <NavBar isSearchEnable={true} />
      <Paper>
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
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
export default Dashboard;
