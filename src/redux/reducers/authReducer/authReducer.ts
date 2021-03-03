import isEmpty from 'lodash';

import { SET_CURRENT_USER } from '../../constants/actionTypes';
import { Authentication } from './types'
import { RootTypes } from '../../actions/types'

const initialState = {
    isAuthenticated: false,
    user: {
        userName: 'guest'
    }
}

export default function authReducer(state:Authentication=initialState,action:RootTypes):Authentication{
    switch(action.type){
        case SET_CURRENT_USER:
            return {
                isAuthenticated: !isEmpty(action.payload.user),
                user: action.payload.user
            }
        default: 
            return state;
    }
}
