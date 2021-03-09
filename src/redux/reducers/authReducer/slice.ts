import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

import { extractJwt } from '../../../configs/common/types'
import updatedAxiosAuthHeader from '../../../services/common/setAuthToken'
import LoginService from '../../../services/login'
import initialState from './initialstate'
import constants from '../constants'

export const authenticateUser:any = createAsyncThunk(
    'auth/authenticateUser',
    async ({userName,password}:any, thunkAPI) => {
        return axios.post('http://localhost:9000/api/login',{userName,password})
            .then(res=> {
                const [ token, user ]:extractJwt = LoginService.extractJwt(res.data.token);
        
                localStorage.setItem('jwtToken',token);
                updatedAxiosAuthHeader(token);
                return {
                    user,
                    jwtToken: token
                }
            })
    }
)

export const authenticationSlice = createSlice({
    name: constants.AUTH_SLICE_NAME,
    initialState: initialState,
    reducers: {
    },
    extraReducers: {
        // Add reducers for additional action types here, and handle loading state as needed
        [authenticateUser.fulfilled]: (state:any, action:any):any => {
            state.isAuthenticated = (action.payload.user) ? true : false;
            state.jwtToken = action.payload.jwtToken;
            state.user = action.payload.user;
        }
    }
})

export const authReducer = authenticationSlice.reducer
