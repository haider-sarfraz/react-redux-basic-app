import * as React from 'react';
import {
    Box,
    Button,
    Container,
    Grid,
    Typography
} from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux'

import { ticketBoard } from './boards';
import { TicketsPanelStyles } from './styles';
import { Ticket } from '../../components/Ticket';
import { addNewTask, taskUpdated } from '../../redux/reducers/tasksReducer/slice'
import { DialogBox } from '../../components/DialogBox'

const TicketsPanel:React.FC<any> = (props):any => {
    const classes = TicketsPanelStyles();
    const dispatch = useDispatch();

    const taskList = useSelector((state:any) => state.tasks.taskList)
    
    ticketBoard[0].taskList = taskList.filter((task:any)=> task.state === 'to-do');
    ticketBoard[1].taskList = taskList.filter((task:any)=> task.state === 'in-progress');
    ticketBoard[2].taskList = taskList.filter((task:any)=> task.state === 'complete');

    const [open, setOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState('');
    const handleNewTicketClick = () => {
        setOpen(true);
    };
    const handleNewTicketClose = (taskDetail:any) => {
        console.log(`Ticket Detail = `,taskDetail)
        setOpen(false);
        setSelectedValue(taskDetail)
        dispatch(addNewTask({taskDetail}))
    };

    return (
        <Container component="main" maxWidth="xl">

            <Box mt={8}>
                <Typography component="h1" variant="h5" align="center">
                    Tickets Panel
                </Typography>
                <Grid container>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        // className={classes.submit}
                        onClick={() => handleNewTicketClick()}
                    >
                        Add Ticket
                    </Button>
                    <DialogBox selectedValue={selectedValue} open={open} onClose={handleNewTicketClose} />
                </Grid>
            </Box>
            <Box mt={8}>
                <Grid container spacing={3}>
                    {
                        ticketBoard.map((board:any,index:any)=>{
                            const { title, taskList } = board;
                            const gridClass = getGridClass(title,classes);

                            return (

                                <Grid item xs={4} className={`${classes.sprintBoard} ${gridClass}`} key={index}>
                                    <Grid container className={classes.taskListContainer}>
                                        <Typography component="h3" variant="h5"  align="center" className={title === 'Complete' ? classes.completedBoardHeading : ''}>
                                            {title}
                                        </Typography>
                                        <Grid container className={classes.taskList} spacing={3}>
                                        {
                                            taskList.map((task:any,index:any)=>{
                                                return (
                                                    <Ticket
                                                        classes={classes}
                                                        task={task}
                                                        index={index}
                                                        statusUpdated={taskUpdated}
                                                    />
                                                )
                                            })
                                        }
                                        </Grid>
                                    </Grid>
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
