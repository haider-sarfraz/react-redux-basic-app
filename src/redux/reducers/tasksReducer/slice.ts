import { createSlice } from '@reduxjs/toolkit'

import { BaseReducer } from './types'
import initialState from './initialstate'
import constants from '../constants'

export const tasksSlice = createSlice({
    name: constants.TASKS_SLICE_NAME,
    initialState: initialState,
    reducers: {
        taskUpdated: (state: BaseReducer, action) => {
            state.taskList = state.taskList.map((task: any) => {
                if (task.title === action.payload.title) {
                    task.state = action.payload.state;
                }
                return task;
            })
        }
    }
})

// Action creators are generated for each case reducer function
export const { taskUpdated } = tasksSlice.actions

export const tasksReducer = tasksSlice.reducer
