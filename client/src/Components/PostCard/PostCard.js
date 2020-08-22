import React from 'react';
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';

const myStyle = {
    textAlign: "center",
    width: "700px"
}

function PostCard() {
    return (
        <div style={myStyle}>
            <Card>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                        Word of the Day
                    </Typography>
                    <Typography color="textSecondary">
                        adjective
                    </Typography>
                    <Typography variant="body2" component="p">
                        well meaning and kindly.
                    <br />
                        {'"a benevolent smile"'}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        </div>
    );
}

export default PostCard;
