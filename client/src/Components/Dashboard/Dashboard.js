import React from "react";
import SubmitPost from "../SubmitPost/SubmitPost.js";
import PostCard from "../PostCard/PostCard.js";
import { Container } from "@material-ui/core";
import NavBar from "../NavBar/NavBar";

const myStyle = {
  textAlign: "center",
};

function Dashboard() {
  return (
    <div style={myStyle}>
      <NavBar />
      <Container>
        <SubmitPost />
        <PostCard />
      </Container>
    </div>
  );
}
export default Dashboard;
