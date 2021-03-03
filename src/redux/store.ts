// import { createStore } from 'redux';
// import reducer from './reducers/reducer';

// const store = createStore(reducer);

// export default store;

import { configureStore } from '@reduxjs/toolkit'

import { tasksReducer } from './reducers/tasksReducer/slice'
import { authReducer } from './reducers/authReducer/slice'

export default configureStore({
    reducer: {
        tasks: tasksReducer,
        auth: authReducer
    }
})

// import { combineReducers, Reducer } from 'redux';
// import baseReducer from './reducers/tasksReducer/tasks';
// import authReducer from './reducers/authReducer/authReducer';

// const store = combineReducers({
//     authReducer: authReducer,
//     baseReducer: baseReducer,
// });

// export type RootState = ReturnType<typeof store>

// export default store;
