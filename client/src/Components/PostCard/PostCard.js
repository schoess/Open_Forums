import React from 'react';
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import "./PostCard.css";
import forumApi from "../../utils/forum.api";


const myStyle = {
    textAlign: "center",
    width: "700px"
}

export default function PostCard(props) {

    // Deletes a forum from the database with a given id, then reloads all forums from the db
    function deleteOnSubmit(id) {
        forumApi.deleteForum(id)
            .then(res => props.loadAllForum())
            .catch(err => console.log(err));
    }

    return (
        <div className="post-card" style={myStyle}>
            {
                props.data.map(item => (
                    <Card key={item.id}>
                        <CardContent>
                            <Typography className="alignLeft" color="textSecondary" gutterBottom>
                                {item.forum_title}
                            </Typography>
                            <Typography className="alignLeft" variant="body2" component="p">
                                {item.forum_description}
                                <br />
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" onClick={deleteOnSubmit}>Delete</Button>
                        </CardActions>
                    </Card>
                ))

            }
        </div>
    );
}
