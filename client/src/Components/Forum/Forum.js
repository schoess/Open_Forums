import React, { useEffect, useState } from "react";
import { useForumContext } from "../../contexts/ForumContext";
import forumApi from "../../utils/forum.api";
import { Card, CardContent, Typography } from "@material-ui/core";
import ReplyCard from "../Reply/Replies";

const myStyle = {
    cardContainer: {
        textAlign: "center",
        width: "700px",
        margin: "0 auto",
        paddingTop: "90px"
    },
    replyCardContainer: {
        textAlign: "center",
        width: "600px",
        height: "200px",
        margin: "0 auto",
    },
    cardIndividual: {
        margin: "20px"
    },
    cardTitle: {
        textAlign: "left",
        fontWeight: "500px"
    },
    cardBody: {
        textAlign: "left"
    }
};
export default function (props) {
    const { forum, setForum } = useForumContext();

    useEffect(() => {
        forumApi
            .getById(props.match.params.forumId)
            .then((res) => {
                setForum(res.data);
            })
            .catch((err) => console.log(err));

    }, [])
    return (
        <div style={myStyle.cardContainer}>
            <Card style={myStyle.cardIndividual}>
                <CardContent>
                    <Typography style={myStyle.cardBody} variant="body2" component="p">{forum.forum_title}</Typography>
                    <Typography style={myStyle.cardBody} variant="body2" component="p">{forum.forum_description}</Typography>
                </CardContent>
            </Card>

            <ReplyCard forumId={props.match.params.forumId} />
        </div>
    );

}



