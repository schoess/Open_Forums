import React, { useEffect } from "react";
import { Card, CardActions, CardContent, Avatar, CardHeader, IconButton, FormControl, InputLabel, Select, Grid } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ThumbDownAltIcon from "@material-ui/icons/ThumbDownAlt";
import { makeStyles } from "@material-ui/core/styles";
import moment from "moment";
import { Link } from "react-router-dom";
import "./PostCard.css";
import { useAuth0 } from "@auth0/auth0-react";
import * as _ from "lodash";
import forumApi from "../../utils/forum.api";
import { useForumContext } from "../../contexts/ForumContext";
import CreatePost from "../CreatePost/CreatePost";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  date: {
    margin: theme.spacing(1),
    minWidth: 80,
    color: "inherit",
    marginRight: 55,
  },
  cursorPointer: {
    cursor: "pointer",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(2em + ${theme.spacing(2)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "25ch",
    },
  },
  cardContainer: {
    borderRadius: 25,
    margin: 0,
    paddingTop: 100,
  },
  cardIndividual: {
    borderRadius: 15,
    marginTop: "5px",
    marginBottom: "5px",
    opacity: 0.8,
    padding: "10px",
    "&:hover": {
      opacity: 2,
      // background: "rgba(255, 240, 243, 0.93)",
    },
  },
  cardTitle: {
    textAlign: "left",
    paddingLeft: "50px",
    marginTop: 0,
    marginBottom: 0,
    fontSize: "16px",
    color: "#2B7CDE",
  },
  cardHeader: {
    fontSize: "50px",
    padding: 0,
    paddingBottom: 0,
  },
  cardContent: {
    padding: 0,
    "&:last-child": {
      paddingBottom: 0,
    },
  },
  deleteIcon: {
    cursor: "pointer",
    color: "#888098",
  },
  cardDisplay: {
    [theme.breakpoints.up("md")]: {
      marginTop: "100px",
    },
  },
}));

export default function PostCard(props) {
  const classes = useStyles();
  const { forums, setForums } = useForumContext();
  const { isAuthenticated, user } = useAuth0();
  const [sortOrder, setSortOrder] = React.useState("new");
  const onSortChange = (event) => {
    setSortOrder(event.target.value);
    const queryParam = {
      sortOrder: event.target.value === "new" ? "desc" : "asc",
    };

    loadAllForum(queryParam);
  };

  const deleteOnClick = (forum) => () => {
    forumApi.deleteForum(forum._id);
    loadAllForum();
  };
  const likeButtonOnClick = (forum) => async () => {
    const currentUserId = user.sub;
    if (!_.includes(forum.likedUsers, currentUserId)) {
      const hasUserDislikedBefore = _.includes(forum.dislikedUsers, currentUserId);
      let dislikes = forum.dislikes;
      if (hasUserDislikedBefore) {
        dislikes -= 1;
      }
      const dislikedUsers = _.filter(forum.dislikedUsers, (dislikedUser) => dislikedUser !== currentUserId);
      const updatedForum = {
        ...forum,
        likes: forum.likes + 1,
        likedUsers: [...forum.likedUsers, currentUserId],
        dislikes,
        dislikedUsers,
      };

      await forumApi.updateForum(forum._id, updatedForum);
      await loadAllForum();
    }
  };

  const dislikeButtonOnClick = (forum) => async () => {
    const currentUserId = user.sub;
    if (!_.includes(forum.dislikedUsers, currentUserId)) {
      const hasUserLikedBefore = _.includes(forum.likedUsers, currentUserId);
      let likes = forum.likes;
      if (hasUserLikedBefore) {
        likes -= 1;
      }
      const likedUsers = _.filter(forum.likedUsers, (likedUser) => likedUser !== currentUserId);

      const updatedForum = {
        ...forum,
        dislikes: forum.dislikes + 1,
        dislikedUsers: [...forum.dislikedUsers, currentUserId],
        likes,
        likedUsers,
      };

      // eslint-disable-next-line no-underscore-dangle
      await forumApi.updateForum(forum._id, updatedForum);
      await loadAllForum();
    }
  };

  useEffect(() => {
    loadAllForum();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Loads all forums and sets them to data
  function loadAllForum(params) {
    forumApi
      .getAllForum(params)
      .then((res) => {
        if (props.myForum) {
          const personalForum = res.data.filter((forum) => {
            return forum.user && forum.user.id === user.sub;
          });
          setForums(personalForum);
        } else {
          setForums(res.data);
        }
      })
      .catch((err) => console.log(err));
  }
  return (
    <Grid container direction="row" justify="center" alignItems="center" className={classes.cardDisplay}>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <Grid container direction="row" justify="flex-end">
          <Grid item xs={6} sm={5} md={3} lg={2}>
            <Grid container direction="row" justify="flex-end">
              <CreatePost />
            </Grid>
          </Grid>
          <Grid item xs={5} sm={3} md={3} lg={3}>
            <Grid container direction="row" justify="center">
              <FormControl>
                <InputLabel htmlFor="sort-by">Sort By Date</InputLabel>
                <Select
                  value={sortOrder}
                  onChange={onSortChange}
                  className={classes.date}
                  inputProps={{
                    name: "date",
                    id: "sort-by",
                  }}
                >
                  <option value="new" className={classes.cursorPointer}>
                    Newest
                  </option>
                  <option value="old" className={classes.cursorPointer}>
                    Oldest
                  </option>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <Grid container direction="row" justify="center" alignItems="center">
          {forums.map((forum) => {
            return (
              <Grid item xs={10} sm={10} md={10} lg={10}>
                <Card className={classes.cardIndividual} key={forum._id}>
                  <CardHeader
                    className={classes.cardHeader}
                    avatar={<Avatar alt={forum.user && forum.user.name} src={forum.user && forum.user.picture} />}
                    title={forum.user && forum.user.name + ", " + moment(forum.date).fromNow()}
                  />
                  <Link to={`/forums/${forum._id}`}>
                    <CardContent className={classes.cardContent}>
                      <h2 className={classes.cardTitle}>{forum.forum_title}</h2>
                    </CardContent>
                  </Link>
                  <CardActions>
                    <div className="likeDislikeBtns">
                      <span className="likeCount">{forum.likes}</span>
                      <IconButton disabled={!isAuthenticated} onClick={likeButtonOnClick(forum)} size="small">
                        <ThumbUpAltIcon className="likeBtn" size="small" />
                      </IconButton>
                      <IconButton disabled={!isAuthenticated} onClick={dislikeButtonOnClick(forum)} size="small">
                        <ThumbDownAltIcon className="dislikeBtn" />
                      </IconButton>
                      <span className="dislikeCount">{forum.dislikes}</span>
                    </div>
                    {/* show delete button only for the user who posted the forum */}
                    {forum.user && forum.user.id === user.sub && <DeleteIcon className={classes.deleteIcon} onClick={deleteOnClick(forum)} size="small" variant="contained" />}
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
}
