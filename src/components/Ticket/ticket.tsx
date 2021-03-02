import * as React from 'react';
import {
    Grid,
    Button,
    Typography,
} from '@material-ui/core'

export const TicketsComponent:React.FC<any> = (props):any => {
    const { classes } = props;
    const { title, taskList } = props;
    const { statusUpdated } = props;

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
                                <Button variant="contained" color="primary" onClick={()=>statusUpdated(task.title,'to-do')}>
                                    Todo
                                </Button>
                                <Button variant="contained" color="primary" onClick={()=>statusUpdated(task.title,'in-progress')}>
                                    InProgress
                                </Button>
                                <Button variant="contained" color="primary" onClick={()=>statusUpdated(task.title,'complete')}>
                                    Completed
                                </Button>
                            </Grid>
                        )
                    })
                }
                </Grid>
            </Grid>
}
