import React from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux'

import { setCurrentUser, setAuthToken } from '../../redux/reducers/authReducer/slice'
import updatedAxiosAuthHeader from '../../services/common/setAuthToken'
import LoginService from '../../services/login'
import { loginPageStyles } from './styles'
import { LoginForm } from '../../components/Login';
import { extractJwt } from '../../configs/common/types'
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
    axios.post('http://localhost:9000/api/login',{userName,password})
      .then(res=> {
          const [ token, user ]:extractJwt = LoginService.extractJwt(res.data.token);
          
          localStorage.setItem('jwtToken',token);

          updatedAxiosAuthHeader(token);
          dispatch(setCurrentUser({ user }));
          dispatch(setAuthToken({ user: user, jwtToken: token }));
      })
  }
  
  return (
    <LoginForm
      classes={classes}
      handleLoginSubmission={handleLoginSubmission}
    />
  );
}

export default Login;
