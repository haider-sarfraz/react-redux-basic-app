export interface Task{
    title: string
    state: string
}

export interface BaseReducer{
    taskList: Task[]
}
