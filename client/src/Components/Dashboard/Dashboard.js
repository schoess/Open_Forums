import React, { useState, useEffect } from "react";
import SubmitPost from "../SubmitPost/SubmitPost.js";
import PostCard from "../PostCard/PostCard.js";
import { Container } from "@material-ui/core";
//import info from "../../assets/seed/data.json";
import NavBar from "../NavBar/NavBar";
import forumApi from "../../utils/forum.api";

const myStyle = {
  textAlign: "center",
};

function Dashboard() {
  const [data, setData] = useState([]);

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
        <SubmitPost />
        <PostCard data={data} />
      </Container>
    </div>
  );
}
export default Dashboard;
