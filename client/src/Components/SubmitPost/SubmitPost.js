import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function SubmitPost() {
    return (
        <Grid container direction="column" justify="center" alignItems="center">
            <h5>Submit Post Form in Progress...</h5>
            <form>
                <div>
                    <TextField
                        id="outlined-helperText"
                        label="New Post"
                        defaultValue="Say something..."
                        helperText="..."
                        variant="outlined"
                        multiline
                        rows={6}
                    />
                </div>
                <div>
                    <Button
                        label="submit"
                        type="submit"
                        variant="contained"
                        color="primary"
                    >
                        Send
            </Button>
                </div>
            </form>
        </Grid>
    );
}

export default SubmitPost;
