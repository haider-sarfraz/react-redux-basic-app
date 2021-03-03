import * as React from 'react';
import {
    Grid,
    Button,
    Typography,
} from '@material-ui/core'
import { useDispatch } from 'react-redux'
export const TicketsComponent:React.FC<any> = (props):any => {
    const { classes } = props;
    const { title, taskList } = props;
    const { statusUpdated } = props;
    const dispatch = useDispatch()
    
    return  <Grid container className={classes.taskListContainer}>
                <Typography component="h3" variant="h5"  align="center" className={title === 'Complete' ? classes.completedBoardHeading : ''}>
                    {title}
                </Typography>
                <Grid container className={classes.taskList} spacing={3}>
                {
                    taskList.map((task:any,index:any)=>{
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
                    })
                }
                </Grid>
            </Grid>
}
