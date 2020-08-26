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
            <SubmitPost />

                <PostCard data={data} />

            </Container>
        </div>
    );
}
export default Dashboard;
