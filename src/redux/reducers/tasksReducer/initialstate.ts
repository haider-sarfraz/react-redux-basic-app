import { boardStates  } from '../../../configs/constants/boardStates'

export default {
    taskList: [
        {
            title: 'Do something',
            state: boardStates.TO_DO
        },
        {
            title: 'Do something 1',
            state: boardStates.TO_DO
        },
        {
            title: 'Do something 2',
            state: boardStates.IN_PROGRESS
        },
        {
            title: 'Do something 3',
            state: boardStates.COMPLETE
        }
    ],
}
