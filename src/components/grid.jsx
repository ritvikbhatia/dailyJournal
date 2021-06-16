import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
}));

 function Grids(props) {
  const classes = useStyles();


  return (
    <> 
      <div className="bodyGrid">
    <div className={classes.root}>
      <Grid container >
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography variant="h9">{props.date}</Typography>
          
              <Typography variant='h4' color="primary" gutterBottom>
           <p style={{color:'black'}} className="grid-heading">
         {props.title}
               </p> 
        </Typography>
        <Divider/>
        <Typography variant="h7">
           <p className="grid-content">{props.content}</p>
        </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>


    </div>
    
    </>
  );
}
export default Grids;