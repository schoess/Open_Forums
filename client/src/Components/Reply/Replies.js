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
import PostReply from './PostReply';


// "reply" refers to the submit form, "replies" refers to the previously submitted replies
const myStyle = {
    // cardContainer: {
    //   textAlign: "center",
    //   width: "700px",
    //   margin: "0 auto",
    //   paddingTop: 50,
    //   paddigBottom: 50
    // },

}

export default function ReplyCard(props) {
    const [replies, setReplies] = useState([]);
    //const [replyOpen, setReplyOpen] = useState(false);
    const [replyCount, setReplyCount] = useState(0);

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
    const deleteOnClick = (reply) => {
        return () => {
            forumApi.deleteReply(reply._id);
            loadAllReplyForum();
        };
    };
    /*const likeButtonOnClick = async (reply) => {

        console.log("likes");
        if (reply.likes >= 0) {
            const likes = reply.likes + 1;
            console.log(likes);
        }

    }*/

    const likeButtonOnClick = async (reply) => {
        const updatedForum = {...reply, likes: reply.likes + 1, likedUsers: [...reply.likedUsers, reply._id]};
        console.log(updatedForum);
        console.log(reply.likes);
        const result = reply.likedUsers.includes(reply._id);
        if(result)
        return;
        await forumApi.updateReply(reply._id, updatedForum);
       loadAllReplyForum();
        
      }
      const dislikeButtonOnClick = async (reply) => {
        const updatedForum = {...reply, dislikes: reply.dislikes + 1, dislikedUsers: [...reply.dislikedUsers, reply._id]};
        console.log(updatedForum);

        const result = reply.dislikedUsers.includes(reply._id);
        if(result)
        return;
        await forumApi.updateReply(reply._id, updatedForum);
        loadAllReplyForum();
        
      }
    

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
                        <span className="likeCount">{reply.likes}</span>
                        <IconButton
                            onClick={() => likeButtonOnClick(reply)}
                            size="small" >
                            <ThumbUpAltIcon
                                className="likeBtn"
                                size="small" />
                        </IconButton>
                        <IconButton onClick={() => dislikeButtonOnClick(reply)} size="small">
                            <ThumbDownAltIcon
                                className="dislikeBtn" />
                        </IconButton>
                        <span className="dislikeCount">{reply.dislikes}</span>
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

        <PostReply loadAllReplyForum={loadAllReplyForum} forumId={props.forumId} />
    </div>
};
