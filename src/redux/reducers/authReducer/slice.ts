import { createSlice } from '@reduxjs/toolkit'
import initialState from './initialstate'

export const authenticationSlice = createSlice({
    name: 'authDetail',
    initialState: initialState,
    reducers: {
        setAuthToken: (state:any, action) => {
            state.isAuthenticated = (action.payload.user) ? true : false;
            state.jwtToken = action.payload.jwtToken;
        },
        setCurrentUser: (state: any, action) => {
            state.user = action.payload.user;
        },
    }
})

// Action creators are generated for each case reducer function
export const { setAuthToken, setCurrentUser } = authenticationSlice.actions

export const authReducer = authenticationSlice.reducer
