import { createSlice } from '@reduxjs/toolkit'
import isEmpty from 'lodash';

import { Authentication } from './types'
import initialState from './initialstate'

export const authenticationSlice = createSlice({
    name: 'authentication',
    initialState: initialState,
    reducers: {
        setCurrentUser: (state: any, action) => {
            return {
                isAuthenticated: !isEmpty(action.payload.user),
                user: action.payload.user
            }
        }
    }
})

// Action creators are generated for each case reducer function
export const { setCurrentUser } = authenticationSlice.actions

export const authReducer = authenticationSlice.reducer
