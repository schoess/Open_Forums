import React from "react";
import SubmitPost from "../SubmitPost/SubmitPost.js";
import PostCard from "../PostCard/PostCard.js";
import { Container, Grid } from "@material-ui/core";
import NavBar from "../NavBar/NavBar";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div>
      <NavBar />
      <SubmitPost />
      <Container>
      <PostCard className="postCard" />
      </Container>
    </div>
  );
}
export default Dashboard;
