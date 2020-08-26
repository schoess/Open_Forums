import React, { useState } from 'react';
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import "./PostCard.css";
import forumApi from "../../utils/forum.api";
import Forum from '../../../../models/forum';


const myStyle = {
    cardContainer: {
        textAlign: "center",
        width: "700px"
    },
    cardIndividual: {
        margin: "20px"
    }
}

function PostCard(props) {
    const deleteOnClick = () => {
        forumApi.deleteForum() 
            
        

    }

        return (
            <div className="post-card" style={myStyle.cardContainer}>
                {
                    props.data.map(item => (
                        <Card style={myStyle.cardIndividual} key={item.id}>
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
                                <Button onClick={deleteOnClick()}
                                    color="secondary"
                                    size="small"
                                    variant="contained"
                                >Delete</Button>
                            </CardActions>
                        </Card>
                    ))

                }
            </div>
        );
    }
    export default PostCard;