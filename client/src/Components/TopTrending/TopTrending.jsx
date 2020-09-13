import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import forumApi from "../../utils/forum.api";
import { Grid, List, ListItem, ListItemAvatar, ListItemText, Avatar } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginTop: 195,
    height: 400,
    background: "white",
    marginRight: "50px",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    background: "#880e4f",
    color: "white",
    marginLeft: 0,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function OutlinedCard() {
  const classes = useStyles();
  const [topTrendingForums, setTopTrendingForums] = useState([]);

  useEffect(() => {
    // getting all forums. sorting and slicing top 5 liked forums to display in trending card
    forumApi
      .getAllForum()
      .then((res) => {
        console.log(res.data);
        let sortedResult = res.data.sort((a, b) => (a.likes < b.likes ? 1 : -1)).slice(0, 5);
        setTopTrendingForums({ sortedResult });
      })
      .catch((err) => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h6" color="black">
          Top Trending Forums...
        </Typography>
        <Grid item xs={12}>
          <div>
            <List component="nav">
              {topTrendingForums.sortedResult &&
                topTrendingForums.sortedResult.map((trendingForum) => (
                  <ListItem button>
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
  );
}
