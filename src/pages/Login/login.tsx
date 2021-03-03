import React from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { connect } from 'react-redux'
import jwt from 'jsonwebtoken'

import { loginPageStyles } from './styles'
import { initiateLoginRequest, setCurrentUser } from '../../redux/actions/actions'
import setAuthToken from '../../services/setAuthToken'
import { User } from '../../configs/common/types'

function Login(props:any) {
  const classes = loginPageStyles();
  console.log(`Login Props => `,props);

  React.useEffect(()=>{
    if(props.history && props.isLoggedIn === true){
      props.history.push('/tickets')
    }
  },[props.isLoggedIn])

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>

        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
        />
        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
        />
        <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={()=>handleLoginSubmission({
              isLoggedIn: props.isLoggedIn,
              history: props.history,
              initiateLoginRequest: props.initiateLoginRequest
            })}
        >
            Sign In
        </Button>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}

function handleLoginSubmission({isLoggedIn,history,initiateLoginRequest}:any){
  axios.post('http://localhost:9000/api/login',{userName:'haider',password:'123'})
    .then(res=> {
        const token = res.data.token;
        localStorage.setItem('jwtToken',token);
        setAuthToken(token);
        const user:User = {
          userName: jwt.decode(token)
        }
        console.log(user);
        setCurrentUser(user);
        initiateLoginRequest(token);
    })
}

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
}

const mapStateToProps = (state:any) => {
  return {
    jwtToken: state.jwtToken,
    isLoggedIn: state.isLoggedIn
  }
}
const mapDispatchToProps = {
  initiateLoginRequest: initiateLoginRequest,
  setCurrentUser: setCurrentUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
