import React, { useState, useEffect } from "react";
import SubmitPost from "../SubmitPost/SubmitPost.js";
import PostCard from "../PostCard/PostCard.js";
import { Container, Grid } from "@material-ui/core";
import NavBar from "../NavBar/NavBar";
import forumApi from "../../utils/forum.api";
import { filter } from 'lodash';

const myStyle = {
  textAlign: "center",
};

function Dashboard() {
  const [data, setData] = useState([]);

  const deleteForum = (forumId) => {
    // Remove matching forum using forumId from data and then set the filteredData to setData
    const filteredData = filter(data => data._id !== forumId);
    setData(filteredData);

  };

  useEffect(() => {
    loadAllForum();
  }, []);
  // Loads all forums and sets them to data
  function loadAllForum() {
    forumApi
      .getAllForum()
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }

  return (
    <div style={myStyle}>
      <NavBar />
      <Container>
        <Grid
          container
          spacing={1}
          direction="row"
          justify="center"
          alignItems="center"
        >
          <PostCard
            data={data}
            deleteForum={deleteForum} />
          <SubmitPost />
        </Grid>
      </Container>
    </div>
  );
}
export default Dashboard;
