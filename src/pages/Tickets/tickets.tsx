import * as React from 'react';
import {
    Box,
    Container,
    Grid,
    Typography
} from '@material-ui/core'
import { useSelector } from 'react-redux'

import { ticketBoard } from './boards';
import { TicketsPanelStyles } from './styles';
import { Ticket } from '../../components/Ticket';
import { taskUpdated } from '../../redux/reducers/tasksReducer/slice'

const TicketsPanel:React.FC<any> = (props):any => {
    const classes = TicketsPanelStyles();

    const taskList = useSelector((state:any) => state.tasks.taskList)
    
    ticketBoard[0].taskList = taskList.filter((task:any)=> task.state === 'to-do');
    ticketBoard[1].taskList = taskList.filter((task:any)=> task.state === 'in-progress');
    ticketBoard[2].taskList = taskList.filter((task:any)=> task.state === 'complete');

    return (
        <Container component="main" maxWidth="xl">

            <Box mt={8}>
                <Typography component="h1" variant="h5" align="center">
                    Tickets Panel
                </Typography>
            </Box>
            <Box mt={8}>
                <Grid container spacing={3}>
                    {
                        ticketBoard.map((board:any,index:any)=>{
                            const { title, taskList } = board;
                            const gridClass = getGridClass(title,classes);

                            return (

                                <Grid item xs={4} className={`${classes.sprintBoard} ${gridClass}`} key={index}>
                                    <Ticket
                                        classes={classes}
                                        title={title}
                                        taskList={taskList}
                                        statusUpdated={taskUpdated}
                                    />
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </Box>
        </Container>
    );
}

function getGridClass(title:string, classes:any){
    let gridClass:string = '';
    switch(title){
        case 'TO DO':
            gridClass = classes.toDoContainer;
            break;
        case 'In Progress':
            gridClass = classes.inProgressContainer;
            break;
        case 'Complete':
            gridClass = classes.completedContainer;
            break;
        default:
            break;
    }
    return gridClass;
}

export const TicketsComponent = TicketsPanel;
