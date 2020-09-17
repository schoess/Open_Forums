import React from "react";
import { Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PostCard from "../PostCard/PostCard";
import NavBar from "../NavBar/NavBar";
import "./Dashboard.css";
import TopTrending from "../TopTrending/TopTrending";
import { useDarkModeContext } from "../../contexts/DarkModeContext";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  darkBackground: {
    backgroundColor: "#303030",
    flexGrow: 1,
  },
  lightBackground: {
    backgroundColor: "ffffff",
    flexGrow: 1,
  },
}));

function Dashboard() {
  const classes = useStyles();
  const { darkMode } = useDarkModeContext();
  return (
    <div className={darkMode ? classes.darkBackground : classes.lightBackground}>
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
