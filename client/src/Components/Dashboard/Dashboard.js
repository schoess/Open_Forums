import React from 'react';
import SubmitPost from '../SubmitPost/SubmitPost.js';
import PostCard from '../PostCard/PostCard.js'
import { Container } from '@material-ui/core';

const myStyle = {
    textAlign: "center"
}

function Dashboard() {
    return (
        <div style={myStyle}>
            <Container>
                <h1>MESSAGE BOARD</h1>
                <h3>This is a post in the message board.</h3>
                <h3>Me too!</h3>
                <h3>Me too!</h3>
                <h3>Me too!</h3>
                <h3>Me too!</h3>
                <PostCard />
                <SubmitPost />
            </Container>
        </div>
    );
}

export default Dashboard;
