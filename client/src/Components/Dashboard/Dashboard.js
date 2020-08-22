import React, { useState, useEffect } from 'react';
import SubmitPost from '../SubmitPost/SubmitPost.js';
import PostCard from '../PostCard/PostCard.js'
import { Container } from '@material-ui/core';
import info from "../../assets/seed/data.json";

const myStyle = {
    textAlign: "center"
}

function Dashboard() {

    const [data, setData] = useState([]);

    useEffect(
        () => {
            // call the database
            //  get data from database
            //  take response from database and plug it into our state
            // setData(res)
            setData(info);
        }, []
    )

    return (
        <div style={myStyle}>
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
