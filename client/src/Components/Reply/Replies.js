import React, { useEffect, useState } from "react";
import forumApi from "../../utils/forum.api";
import {
    Card, Typography, CardContent,
    CardActions, Button, TextField, IconButton,
} from "@material-ui/core";
import {
    ThumbUpAlt as ThumbUpAltIcon,
    ThumbDownAlt as ThumbDownAltIcon,
    Delete as DeleteIcon
} from "@material-ui/icons";
import moment from "moment";

const myStyle = {
    cardContainer: {
        textAlign: "center",
        width: "700px",
        margin: "0 auto",
        paddingTop: 50,
        paddigBottom: 50
    },
    replyCardContainer: {
        marginTop: 50,
        fontWeight: 700,
        fontSize: "18px"

    },
    replyCardBody: {
        fontSize: "16px",
        textAlign: "left"

    }


}
export default function ReplyCard(props) {
    const [replies, setReplies] = useState([]);
    //const [replyOpen, setReplyOpen] = useState(false);
    const [forumTitle, setForumTitle] = useState("");
    const [replyToDescription, setReplyToDescription] = useState("");

    const replyToForum = async (event) => {
        event.preventDefault();
        //API call for posting reply
        await forumApi.createReplyToForum(props.forumId, {
            reply_description: replyToDescription
        });
        setReplyToDescription("");
        loadAllReplyForum();
    }

    // get all replies
    useEffect(() => {
        loadAllReplyForum();
    }, []);

    // Loads all replies and sets them to data
    function loadAllReplyForum() {
        forumApi.getAllReply(props.forumId)
            .then((res) => {
                setReplies(res.data.replies);
            })
            .catch((err) => console.log(err));
    }
    const deleteOnClick = (reply) => () => {
        forumApi.deleteReply(reply._id);
        loadAllReplyForum();
      };

    return <div>
        {replies.map((reply) => {
            return <Card key={reply._id}>
                <CardContent style={myStyle.replyCardBody}>
                    <Typography style={myStyle.replyCardBody} variant="body2" component="p">
                        {reply.reply_description}
                    </Typography>
                    <Typography variant="body2" component="p">
                        {moment(reply.date).format("lll")}
                    </Typography>
                </CardContent>
                <CardActions>
                    <div className="likeDislikeBtns">
                        <IconButton><ThumbUpAltIcon
                            className="likeBtn"
                            size="small" />
                        </IconButton>
                        <IconButton>
                            <ThumbDownAltIcon
                                className="dislikeBtn"
                                size="small" />
                        </IconButton>

                    </div>
                    
                    <DeleteIcon
                    onClick={deleteOnClick(reply)}
                        className="deleteBtn"
                        size="small"
                        variant="contained"
                    />
                </CardActions>

            </Card>
        })}
        <div style={myStyle.replyCardContainer}>
            <form onSubmit={replyToForum}>
                <Card style={myStyle.cardIndividual}>
                    <CardContent>
                        <Typography style={myStyle.replyCardBody}
                            variant="body2"
                            component="p"
                            value={forumTitle}
                            onChange={(event) => setForumTitle(event.target.value)}>Reply Card
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
        </div>
    </div>

}
