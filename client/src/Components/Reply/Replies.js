import React, { useEffect, useState } from "react";
import forumApi from "../../utils/forum.api";
import { Card, Typography, CardContent, CardActions, Button, TextField,Divider } from "@material-ui/core";
import moment from "moment";

const myStyle = {
    cardContainer: {
        textAlign: "center",
        width: "700px",
        margin: "0 auto",
        paddingTop: "90px"
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

    return <div>
        {replies.map((reply) => {
            return <Card key={reply._id}>
                <CardContent>
                    <Typography className="cardBody" variant="body2" component="p">
                        {reply.reply_description}
                    </Typography>
                    <Typography className="cardBody" variant="body2" component="p">
                        {moment(reply.date).format("lll")}
                    </Typography>
                </CardContent>
            </Card>
        })}<Divider /><Divider />
        <div style={myStyle.replyCardContainer}>
            <form onSubmit={replyToForum}>
                <div style={myStyle.replyCardContainer}></div>
                <Card style={myStyle.cardIndividual}>
                    <CardContent>
                        <Typography
                            style={myStyle.cardBody}
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
