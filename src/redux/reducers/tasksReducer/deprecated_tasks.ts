import * as actions from '../../constants/actionTypes';
import { BaseReducer } from './types'
import { RootTypes } from '../../actions/types'

const initialState = {
    taskList: [
        {
            title: 'Do something',
            state: 'to-do'
        },
        {
            title: 'Do something 1',
            state: 'to-do'
        },
        {
            title: 'Do something 2',
            state: 'in-progress'
        },
        {
            title: 'Do something 3',
            state: 'complete'
        }
    ],
    // isLoggedIn: false,
    // jwtToken: ''
}


export default function reducer(state:BaseReducer = initialState, action:RootTypes):BaseReducer{
    if(action.type === actions.TASK_STATUS_UPDATED){
        const updatedList = state.taskList.map(task => {
            if(task.title === action.payload.title){
                task.state = action.payload.state;
            }
            return task;
        })
        return { ...state, taskList:updatedList}
    }
    // else if(action.type === actions.LOGIN_SUCCEEDED){
    //     return { ...state, isLoggedIn:true, jwtToken: action.payload.jwtToken} 
    // }
    return state;
}
