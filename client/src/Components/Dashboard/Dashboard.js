import React from 'react';
import SubmitPost from '../SubmitPost/SubmitPost.js';

const myStyle = {
    textAlign: "center"
}

function Dashboard() {
    return (
        <div style={myStyle}>
            <h1>MESSAGE BOARD</h1>
            <h3>This is a post in the message board.</h3>
            <h3>Me too!</h3>
            <h3>Me too!</h3>
            <h3>Me too!</h3>
            <h3>Me too!</h3>
            <SubmitPost />
        </div>
    );
}

export default Dashboard;
