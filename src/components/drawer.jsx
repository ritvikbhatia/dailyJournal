import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TextField from '@material-ui/core/TextField';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import AssignmentIndRoundedIcon from '@material-ui/icons/AssignmentIndRounded';
import VpnKeyRoundedIcon from '@material-ui/icons/VpnKeyRounded';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import Axios from 'axios';
import { Typography } from '@material-ui/core';
import Cookies from 'js-cookie';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Link } from 'react-router-dom';
const drawerWidth = 300;

// THEME CONTENT BELOW
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    width: '100%',
    maxWidth: 340,
    backgroundColor: theme.palette.background.paper,
  },
  dForm:{
    '& .MuiTextField-root': {
        margin: theme.spacing(0),
        width: '100%',},
        display: 'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  listItemAfterLogin:{
    display:'flex',
    justifyContent: 'flex-Start',
    flexDirection: 'row',
    flexWrap:'nowrap'

  } ,
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-Start',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  marginLeftCss:{
    marginLeft:'1rem'
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));
// THEME CONTENT END


 function DrawerRight(props) {


// HOOKS
const [usernameLogin,setusername] =React.useState("");
const [passwordLogin, setPassword] =React.useState("");


  const classes = useStyles();
  const theme = useTheme();

//CHECK COOKIE FUNCTION
 const [admin, setAdmin] = React.useState(false);

function cookieCheck(){
 setAdmin(Cookies.get('admin'));
 
}

React.useEffect(()=>{
  return cookieCheck();
});

// LOGIN FUNCTION
  function login(event){

    Axios.post("https://dailyjournalnode.herokuapp.com/login",{
      username: usernameLogin,
      password:passwordLogin
    }).then((response)=>{
      if(response.data === "aman"){
        Cookies.set('admin',true);
        setAdmin(true);
      }
    });
  
  }

  function logout(){
    Cookies.remove('admin');
    setAdmin("false");
  }

  return (
      <div>
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={props.state}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={props.setStateFalse}>
            {theme.direction === 'ltr' ? <ChevronRightIcon />: <ChevronLeftIcon /> }
          </IconButton>
        </div>
        <Divider />


      
        {/* LOGIN LIST START HERE */}

          {/* if statement start here */}
        {
          admin? 
          <List className={classes.root}>
            <Link to="/post">
            <Button className={classes.root}>
            <ListItem className={classes.listItemAfterLogin} >
            <Avatar>P</Avatar> 
          <Typography variant="h6" color="secondary">
            <p className={classes.marginLeftCss}>Post Blogs</p>
          </Typography>
            </ListItem>
            </Button>
            </Link>
            <Divider />
            <Link to="/deletePost">
            <Button className={classes.root}>
            <ListItem className={classes.listItemAfterLogin} >
            <Avatar>D</Avatar> 
          <Typography variant="h6" color="secondary" >
            <p className={classes.marginLeftCss}>Delete Blogs</p>
          </Typography>
            </ListItem>
            </Button>
            </Link>
            <Divider />
            <Button
            
        variant="contained"
        color="primary"
        className={classes.button}
        endIcon={<ExitToAppIcon/>}
        onClick={logout}
        style={{marginTop:'.5rem'}}
      >
        Logout
      </Button>
          </List>
          :
        <List className={classes.root}>

          {/* FORM START HERE */}
        <form className={classes.dForm} noValidate autoComplete="off" onSubmit={login}> 
      <ListItem>
        <ListItemAvatar>
          <Avatar>
         < AssignmentIndRoundedIcon />
          </Avatar>
        </ListItemAvatar>
        <TextField
          id="username"
          label="UserName"
          type="text"
          autoComplete="false"
          onChange={(e)=>{setusername(e.target.value);
          }}
          helperText="Enter UserName"
          value={usernameLogin}
        />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
          <VpnKeyRoundedIcon/>
          </Avatar>
        </ListItemAvatar>
        <TextField
          id="password"
          label="Password"
          type="Password"
          onChange={(e)=>{setPassword(e.target.value);}}
          autoComplete="false"
          helperText="Enter Password"
          value={passwordLogin}
          gutterbelow
        />
      </ListItem>
      <ListItem>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        endIcon={<SendIcon/>}
        onClick={login}
      >
        Login
      </Button>
      </ListItem>
      </form>
      {/* FORM ENDING HERE */}
    </List>
  }
      </Drawer>
      
    </div>
    </div>
  );
}

export default DrawerRight;
