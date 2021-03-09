import { configureStore } from '@reduxjs/toolkit'

import { tasksReducer } from './reducers/tasksReducer/slice'
import { authReducer } from './reducers/authReducer/slice'

export default configureStore({
    reducer: {
        tasks: tasksReducer,
        auth: authReducer
    }
})
