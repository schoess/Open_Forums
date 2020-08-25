import React from 'react';
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import "./PostCard.css";

const myStyle = {
    textAlign: "center",
    width: "700px"
}

export default function PostCard(props) {
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
                            <Button size="small">Delete</Button>
                        </CardActions>
                    </Card>
                ))

            }
        </div>
    );
}
