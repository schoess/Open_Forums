import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
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
    },
    button: {
        background: 'linear-gradient(45deg, #67EE94 10%, #67C1EE 99%)',
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px #E0E0E0',
        textAlign: 'center'
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
                                <div className={classes.button}>
                                    <Button
                                        label="submit"
                                        type="submit"
                                        fullWidth={true}
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