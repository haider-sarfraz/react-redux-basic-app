import * as React from 'react';
import {
    Grid,
    Button,
} from '@material-ui/core'
import { useDispatch } from 'react-redux'

import { boardStates } from '../../configs/constants/boardStates'

export const TicketsComponent:React.FC<any> = (props):any => {
    const { classes } = props;
    const { task,index } = props;
    const { statusUpdated } = props;
    const dispatch = useDispatch()
    
    const boardTitles = Object.keys(boardStates);
    return (
        <Grid container key={index} className={classes.taskBox}>
            <p>{task.title}</p>
            {
                boardTitles.map((title:string,index)=>{
                    let boardTitle = title.replace('_',' ');
                    return (
                        <Button key={index} variant="contained" color="primary" onClick={()=>dispatch(statusUpdated({title:task.title,state:boardStates.TO_DO}))}>
                            {boardTitle}
                        </Button>
                    )
                })
            }
        </Grid>
    )  

}
