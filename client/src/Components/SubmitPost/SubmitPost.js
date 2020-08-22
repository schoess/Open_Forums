import React from 'react';
import { Grid } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
            width: theme.spacing(100),
            height: theme.spacing(16),
        },
    }
}));

export default function SubmitPost() {
    const classes = useStyles();

    return (
        <div>
            <Grid container spacing={1} direction="column" justify="center" alignItems="center">
                <Grid item xs={12}>
                    <div className={classes.paper}>
                        <Paper elevation={2}>
                            <form>
                                <div>
                                    <TextField
                                        id="text"
                                        label="Message"
                                        defaultValue="Say something..."
                                        helperText="..."
                                        variant="outlined"
                                    />
                                </div>
                                <div>
                                    <Button
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
                        </Paper>
                    </div>
                </Grid>
            </Grid>

        </div>
    );
}

{/* <TextareaAutosize
rowsMin={3}
rowsMax={10}
placeholder="Say something..."
/> */}