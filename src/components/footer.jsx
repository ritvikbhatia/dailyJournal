import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (<>
      <div className="footer" >
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
         <Typography variant="h7" color="textSecondary">Developed By Aman Kale</Typography>
        </Grid>
      </Grid>
    </div>
    </div>
      <div className="footer" >
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
         <Typography variant="h7" color="textSecondary">Developed By Aman Kale</Typography>
        </Grid>
      </Grid>
    </div>
    </div>
    <div className="footer" >
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
         <Typography variant="h7" color="textSecondary">Developed By Aman Kale</Typography>
        </Grid>
      </Grid>
    </div>
    </div>
      <div className="footer2" >
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={1}>
        </Grid>
      </Grid>
    </div>
    </div>
    </>
  );
}