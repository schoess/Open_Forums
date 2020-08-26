import React,{useState,useEffect} from "react";
import {
    Card,
    CardActions,
    CardContent,
    Button,
    Typography,
} from "@material-ui/core";
import "./PostCard.css";
import forumApi from "../../utils/forum.api";



const myStyle = {
    cardContainer: {
        textAlign: "center",
        width: "700px",
    },
    cardIndividual: {
        margin: "20px",
    },
};

export default function PostCard(props) {
    
    const deleteOnClick = (item) => () => {
        forumApi.deleteForum(item._id)
        props.deleteForum(item._id)
    }    
    return (
        <div className="post-card" style={myStyle.cardContainer}>
            {props.data.map((item) => (
                <Card style={myStyle.cardIndividual} key={item._id}>
                    <CardContent>
                        <Typography
                            className="alignLeft"
                            color="textSecondary"
                            gutterBottom
                        >
                            {item.forum_title}
                        </Typography>
                        <Typography className="alignLeft" variant="body2" component="p">
                            {item.forum_description}
                            <br />
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button onClick={deleteOnClick(item)} color="secondary" size="small" variant="contained">
                            Delete
            </Button>
                    </CardActions>
                </Card>
            ))}
        </div>
    );
}
