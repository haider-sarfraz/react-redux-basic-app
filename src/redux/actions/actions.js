import * as actions from '../constants/actionTypes';
import axios from 'axios';

export default function statusUpdated(title,state){
    return {
        type: actions.TASK_STATUS_UPDATED,
        payload: {
            title: title,
            state: state
        }
    }
}

export function initiateLoginRequest(data){
    return axios.post('/api/login',data)
    .then(res=> {
        const token = res.data.token;
        localStorage.setItem('jwtToken',token);
    })
}