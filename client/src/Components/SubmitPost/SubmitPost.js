import React, {useEffect, useState } from "react";
import { Grid, TextField, Button } from '@material-ui/core';
import forumApi from '../../utils/forum.api';

const myStyle = {
    textField: {
        width: "500px"
    },
    button: {
        width: "100px"
    }
}

function SubmitPost() {
    const [title, setTitle] = React.useState('');
    const [description, setDescription] = React.useState('');

    const onSubmit = (event) => {
        event.preventDefault();

        // API
        forumApi.createForum({
            forum_title: title,
            forum_description: description,
            category: 'General'
        });
    };
   
    return (
    <div>
        <Grid container spacing={1} direction="column" justify="center" alignItems="center">
            <Grid item xs={12}>
                <form onSubmit={onSubmit}>
                    <div>
                        <TextField
                            style={myStyle.textField}
                            id="message"
                            label="Title"
                            defaultValue=" "
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            value={title}
                            onChange={(event) => setTitle(event.target.value)}
                        />
                    </div>
                    <div>
                        <TextField
                            style={myStyle.textField}
                            id="message"
                            label="Message"
                            defaultValue=" "
                            variant="outlined"
                            margin="normal"
                            multiline
                            rows={6}
                            fullWidth
                            value={description}
                            onChange={(event) => setDescription(event.target.value)}
                        />
                    </div>
                    <div>
                        <Button
                            style={myStyle.button}
                            label="submit"
                            type="submit"
                            fullWidth
                            color="primary"
                            variant="contained"
                        >
                            Send
                          </Button>
                    </div>
                </form>
            </Grid>
        </Grid>

    </div>
);
}

export default SubmitPost;

{/* <TextareaAutosize
rowsMin={3}
rowsMax={10}
placeholder="Say something..."
/> */}