import * as actions from '../constants/actionTypes';
// []
let lastId = 0;

const initialState = [
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
]

export default function reducer(state = initialState, action){
    if(action.type === actions.TASK_STATUS_UPDATED){
        return state.map(task => {
            if(task.title === action.payload.title){
                task.state = action.payload.state;
            }
            return task;
        })
    }
    return state;
}