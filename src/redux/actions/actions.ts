import * as actions from '../constants/actionTypes';
import { User } from '../../configs/common/types'
import { RootTypes } from './types'

export function initiateLoginRequest(token:string):RootTypes{
    return {
        type: actions.LOGIN_SUCCEEDED,
        payload: {
            jwtToken: token
        }
    };
}

export function setCurrentUser(user:User):RootTypes{
    return {
        type: actions.SET_CURRENT_USER,
        payload: {
            user: user
        }
    }
}
