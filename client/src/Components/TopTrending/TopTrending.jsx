import React, { useState, useEffect } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import forumApi from "../../utils/forum.api";
import { Grid, List, ListItem, ListItemAvatar, ListItemText, Avatar, makeStyles } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.only("xs")]: {
      marginTop: "140px",
      marginBottom: "25px",
    },
    [theme.breakpoints.only("sm")]: {
      marginTop: "100px",
      marginBottom: "25px",
    },
    [theme.breakpoints.up("md")]: {
      marginTop: "100px",
    },
  },
}));

export default function OutlinedCard() {
  const [topTrendingForums, setTopTrendingForums] = useState([]);
  const history = useHistory();
  const classes = useStyles();

  useEffect(() => {
    // getting all forums. sorting and slicing top 5 liked forums to display in trending card
    forumApi
      .getAllForum()
      .then((res) => {
        let sortedResult = res.data.sort((a, b) => (a.likes < b.likes ? 1 : -1)).slice(0, 5);
        setTopTrendingForums({ sortedResult });
      })
      .catch((err) => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Grid container direction="row" justify="center" alignItems="center" className={classes.root}>
      <Grid item xs={10} sm={10} md={10} lg={10}>
        <Card className={classes.body}>
          <CardContent>
            <Typography variant="h6">Top Trending Forums...</Typography>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <div>
                <List component="nav">
                  {topTrendingForums.sortedResult &&
                    topTrendingForums.sortedResult.map((trendingForum) => (
                      <ListItem key={trendingForum._id} button onClick={() => history.push(`/forums/${trendingForum._id}`)}>
                        <ListItemAvatar>
                          <Avatar alt={trendingForum.user && trendingForum.user.name} src={trendingForum.user && trendingForum.user.picture} />
                        </ListItemAvatar>
                        <ListItemText>{trendingForum.forum_title}</ListItemText>
                      </ListItem>
                    ))}
                </List>
              </div>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
