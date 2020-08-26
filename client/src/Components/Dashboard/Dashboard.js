import React, { useState, useEffect } from 'react';
import SubmitPost from '../SubmitPost/SubmitPost.js';
import PostCard from '../PostCard/PostCard.js'
import { Container } from '@material-ui/core';
//import info from "../../assets/seed/data.json";
import NavBar from "../NavBar/NavBar";
import UserInfo from "../UserInfo/UserInfo";
import forumApi from "../../utils/forum.api";

const myStyle = {
  textAlign: "center"
}

function Dashboard() {

  const [data, setData] = useState([]);

    // useEffect(
    //     () => {
    //         // call the database
    //         //  get data from database
    //         //  take response from database and plug it into our state
    //         // setData(res)
    //         setData(info);
    //     }, []
    // )

    // return (
    //     <div style={myStyle}>
    //         <Container>
    //         <SubmitPost />

    //             <PostCard data={data} />

    //         </Container>
    //     </div>
    // );
  useEffect(
    () => {
      loadAllForum()
    }, [])
  // Loads all forums and sets them to data
  function loadAllForum() {
    forumApi.getAllForum()
      .then(res =>
        setData(res.data)
      )
      .catch(err => console.log(err));
  };
  return (
    <div style={myStyle}>
      <NavBar />
      <UserInfo />
      <Container>
        <h1>MESSAGE BOARD</h1>
        <h3>This is a post in the message board.</h3>
        <h3>Placeholder post</h3>
        <PostCard data={data} />
        <SubmitPost />
      </Container>
    </div>
  );
}
export default Dashboard;
