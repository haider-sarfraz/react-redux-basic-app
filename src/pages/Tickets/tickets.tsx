import * as React from 'react';
import { connect } from 'react-redux'
import {
    Box,
    Container,
    Grid,
    Typography
} from '@material-ui/core'

import { ticketBoard } from './boards';
import { TicketsPanelStyles } from './styles';
import statusUpdated from '../../redux/actions/actions'
import { Ticket } from '../../components/Ticket';

const TicketsPanel:React.FC<any> = (props):any => {

    const classes = TicketsPanelStyles();
    const tasks:any[] = props.taskList;

    ticketBoard[0].taskList = tasks.filter((tasks:any)=> tasks.state === 'to-do');
    ticketBoard[1].taskList = tasks.filter((tasks:any)=> tasks.state === 'in-progress');
    ticketBoard[2].taskList = tasks.filter((tasks:any)=> tasks.state === 'complete');

    console.log(ticketBoard);

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
                                        statusUpdated={props.statusUpdated}
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

const mapStateToProps = (state:any) => {
    return {
      taskList: state,
    }
}
const mapDispatchToProps = {
    statusUpdated: statusUpdated
}

export const TicketsComponent = connect(mapStateToProps, mapDispatchToProps)(TicketsPanel);
