import React from 'react';
import { Grid, TextField, Button } from '@material-ui/core';

const myStyle = {
    textField: {
        width: "500px"
    },
    button: {
        width: "100px"
    }
}

function SubmitPost() {
    return (
        <div>
            <Grid container spacing={1} direction="column" justify="center" alignItems="center">
                <Grid item xs={12}>
                    <form>
                        <div>
                            <TextField
                                style={myStyle.textField}
                                id="message"
                                label="Title"
                                defaultValue=" "
                                variant="outlined"
                                margin="normal"
                                fullWidth
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