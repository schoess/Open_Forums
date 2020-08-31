import React, { useEffect } from "react";
import { useForumContext } from "../../contexts/ForumContext";
import forumApi from "../../utils/forum.api";
import { Card, CardContent, Typography, CardActions, Button } from "@material-ui/core";

const myStyle = {
    cardContainer: {
        textAlign: "center",
        width: "700px",
        margin: "0 auto",
        paddingTop: "90px"
    },
    cardIndividual: {
        margin: "20px"
    },
    cardTitle: {
        textAlign: "left"
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
                console.log(res.data);
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
                <CardActions>
                    <Button
                        color="secondary"
                        size="small"
                        variant="contained"
                    >
                       Comments
                    </Button>
                </CardActions>
            </Card>
        </div>

    )
}
