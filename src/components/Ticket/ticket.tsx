import * as React from 'react';
import {
    Grid,
    Button,
} from '@material-ui/core'
import { useDispatch } from 'react-redux'

export const TicketsComponent:React.FC<any> = (props):any => {
    const { classes } = props;
    const { task,index } = props;
    const { statusUpdated } = props;
    const dispatch = useDispatch()
    
    return (
        <Grid container key={index} className={classes.taskBox}>
            <p>{task.title}</p>
            <Button variant="contained" color="primary" onClick={()=>dispatch(statusUpdated({title:task.title,state:'to-do'}))}>
                Todo
            </Button>
            <Button variant="contained" color="primary" onClick={()=>dispatch(statusUpdated({title:task.title,state:'in-progress'}))}>
                InProgress
            </Button>
            <Button variant="contained" color="primary" onClick={()=>dispatch(statusUpdated({title:task.title,state:'complete'}))}>
                Completed
            </Button>
        </Grid>
    )  

}
