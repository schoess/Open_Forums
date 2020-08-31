import React, { useEffect } from "react";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography
} from "@material-ui/core";
import forumApi from "../../utils/forum.api";
import { useForumContext } from "../../contexts/ForumContext";
import moment from "moment";
import { Link } from 'react-router-dom';

const myStyle = {
  cardContainer: {
        textAlign: "center",
        width: "700px",
        margin: "0 auto",
        paddingTop: "90px"
  },
  cardIndividual: {
        margin: "20px"
  },
  cardTitle: {
        textAlign: "left"
  },  
  cardBody: {
        textAlign: "left"
    }
};

export default function PostCard(props) {
  const { forum, setForum } = useForumContext();
  const deleteOnClick = (item) => () => {
    console.log("inside delete button click event ======");
    forumApi.deleteForum(item._id);
    loadAllForum();
  };
  

  useEffect(() => {
    loadAllForum();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Loads all forums and sets them to data
  function loadAllForum() {
    forumApi
      .getAllForum()
      .then((res) => {
        setForum(res.data);
      })
      .catch((err) => console.log(err));
  }
  return (
    <div style={myStyle.cardContainer}>
      {forum.map((item) => (
        <Card style={myStyle.cardIndividual} key={item._id}>
          <CardContent>
            <Typography 
              style={myStyle.cardTitle}
              color="secondary"
              gutterBottom
            >
              <Link to={`/forums/${item._id}`}>{item.forum_title}</Link>
            </Typography>
            <Typography style={myStyle.cardBody} variant="body2" component="p">
              {item.forum_description}
              <br />
            </Typography>
            <Typography style={myStyle.cardBody} variant="body2" component="p">
              {moment(item.date).format('MM-DD-YYYY')}
              <br />
            </Typography>
          </CardContent>
          <CardActions>
            <Button
            
              onClick={deleteOnClick(item)}
              color="secondary"
              size="small"
              variant="contained"
            >
              Delete
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}
