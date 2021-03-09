import React from 'react';

import { useSelector, useDispatch } from 'react-redux'
import { authenticateUser } from '../../redux/reducers/authReducer/slice'
import { loginPageStyles } from './styles'
import { LoginForm } from '../../components/Login';
import routes from '../../configs/constants/routes'

const Login = (props:any) => {

  const classes = loginPageStyles();
  const dispatch = useDispatch()

  const { isAuthenticated, user } = useSelector((state:any) => state.auth)
  console.log(`isAuthenticated ${isAuthenticated}\r\nUser=> `,user);

  React.useEffect(()=>{
    if(props.history && isAuthenticated === true){
      props.history.push(routes.TICKETS)
    }
  },[isAuthenticated])

  const handleLoginSubmission = (userName:string,password:string):any => {
    dispatch(authenticateUser({userName,password}))
  }
  
  return (
    <LoginForm
      classes={classes}
      handleLoginSubmission={handleLoginSubmission}
    />
  );
}

export default Login;
