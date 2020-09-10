/* eslint-disable react/jsx-no-undef */
import React from "react";
import { TextField, Grid, Paper, Fab, Typography } from "@material-ui/core";
import "./DirectChat.css";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import EditIcon from "@material-ui/icons/Edit";
import data from "../../assets/seed/data.json";

function DirectChat() {
  return (
    <div>
      <Grid container>
        <Grid
          container
          item
          xs={4}
          spacing={0}
          direction="column"
          justify="space-evenly"
          alignItems="stretch"
          className="people-container"
        >
          {data.map((d) => {
            return (
              <Grid item xs={4}>
                <Card key={d.id} className="people-card">
                  <CardHeader
                    avatar={<Avatar aria-label="recipe">{d.Initials}</Avatar>}
                    title={d.User}
                    subheader={d.Date}
                  />
                </Card>
              </Grid>
            );
          })}
        </Grid>
        <Grid
          container
          item
          xs={6}
          direction="row"
          justify="space-evenly"
          alignItems="stretch"
          className="paper"
        >
          <Paper className="paper">asdfjkloasdfljkasdfljk;asdflp;k</Paper>
          <Grid container item spacing={3}>
            <Grid item>
              <TextField
                id="filled-full-width"
                label="Message"
                style={{ margin: 8 }}
                placeholder="What would you like to say?"
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="filled"
              />
            </Grid>
            <Grid item className="send-button">
              <Fab color="secondary" aria-label="edit">
                <EditIcon />
              </Fab>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default DirectChat;
