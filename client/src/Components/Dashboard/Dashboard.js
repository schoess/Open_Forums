import React from "react";
import PostCard from "../PostCard/PostCard.js";
import SubmitPost from "../SubmitPost/SubmitPost";
import { Container, Grid } from "@material-ui/core";
import NavBar from "../NavBar/NavBar";
import "./Dashboard.css";
import CreatePost from "../CreatePost/CreatePost";

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
