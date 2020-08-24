import React from "react";
import { Container, TextField, Button, Grid } from '@material-ui/core';

export default function Register() {

    const myStyle = {
        textField: {
            width: "500px"
        },
        button: {
            width: "100px"
        },
        para: {
            display: "inline"
        }
    }

    return (
        <div>
            <Container>
            <Grid item xs={12}>
            <form>
                        <div>
                            <TextField
                                style={myStyle.textField}
                                id="username"
                                label="Username"
                                defaultValue=" "
                                variant="outlined"
                                margin="normal"
                                fullWidth
                            />
                        </div>
                        <div>
                            <TextField
                                style={myStyle.textField}
                                id="password"
                                label="Password"
                                defaultValue=" "
                                variant="outlined"
                                margin="normal"
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
                                Register
                                    </Button>
                            <p style={myStyle.para}>Already a user?</p>
                            <a href="/">LOGIN HERE!</a>
                        </div>
                    </form>
                    </Grid>
            </Container>
        </div>
    )
}