import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import DeleteIcon from '@material-ui/icons/Delete';
import { IconButton } from '@material-ui/core';
import Axios from 'axios';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
rightButton:{
    marginTop:'2rem'
},
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
}));

 function DeleteGrid(props) {

  const classes = useStyles();

  const deleteBlog = (id)=>{
    Axios.post("https://dailyjournalnodejs.herokuapp.com/deleteBlog",{
      id:id
    }).then((response)=>{
        if(response.data ==="ok"){
          window.location.reload(); 
        }
    })
  }

  return (
    <> 
      <div className="bodyGrid">
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
          <Grid container spacing={1}>
          <Grid item xs={10} className={classes.grids}>
          <Typography variant="h9">{props.date}</Typography>
          
          <Typography variant='h4' color="primary" multiLine="true" gutterBottom>
       <p style={{color:'black'}} className="grid-heading">
     {props.title}
           </p> 
    </Typography>
    <Divider/>
    <Typography variant="h7">
       <p className="grid-content">{props.content}</p>
    </Typography>
          </Grid>
           
          <Grid item xs={1} className ={classes.rightButton}>
        
       <IconButton aria-label="delete" className={classes.margin}>
          {props.foundPost && <DeleteIcon fontSize="large" onClick={()=>deleteBlog(props.id)} />}
            
        
        </IconButton>
              </Grid>
              </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>


    </div>
    
    </>
  );
}
export default DeleteGrid;