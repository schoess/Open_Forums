import React, { useEffect, useState } from "react";
import { useForumContext } from "../../contexts/ForumContext";
import forumApi from "../../utils/forum.api";
import { Card, CardContent, Typography, CardActions, Button, TextField } from "@material-ui/core";

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
    const [replyOpen, setReplyOpen] = useState(false);
    const [forumTitle, setForumTitle] = useState("");
    const [replyToDescription, setReplyToDescription] = useState("");
    const replyToForum = (event) => {
        event.preventDefault();
        //API call for posting reply
        forumApi.createReplyToForum ({
            reply_description: replyToDescription,
            forum: {
                forum_title: title,
                forum_description: description,
                category: "General",
            }
          
        });

    }
    const onClickReply = () => {
        setReplyOpen(!replyOpen)
    }

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
                        onClick={onClickReply}
                        color="secondary"
                        size="small"
                        variant="contained"
                    >
                        Reply
                    </Button>
                </CardActions>
            </Card>
            {replyOpen && <div style={myStyle.replyCardContainer}>
                <form onSubmit={replyToForum}>
                <Card style={myStyle.cardIndividual}>
                    <CardContent>
                        <Typography
                            style={myStyle.cardBody}
                            variant="body2"
                            component="p"
                            value={forumTitle}
                            onChange={(event) => setForumTitle(event.target.value)}>Re: {forum.forum_title}
                        </Typography>
                    </CardContent>
                    <TextField
                        id="message"
                        label="Message"
                        variant="outlined"
                        margin="normal"
                        multiline
                        rows={6}
                        fullWidth
                        value={replyToDescription}
                        onChange={(event) => setReplyToDescription(event.target.value)}
                    />
                    <CardActions>
                        <Button
                            type="submit"
                            color="secondary"
                            size="small"
                            variant="contained"
                        >
                            Post your Reply
                    </Button>
                    </CardActions>
                </Card>
                </form>
                
            </div>}
        </div>
    )

}
