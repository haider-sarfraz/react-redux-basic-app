import * as React from 'react';
import {
    Box,
    Button,
    Container,
    Grid,
    Typography
} from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux'

import { taskStates } from './boards';
import { TicketsPanelStyles } from './styles';
import { Ticket } from '../../components/Ticket';
import { addNewTask, taskUpdated } from '../../redux/reducers/tasksReducer/slice'
import { DialogBox } from '../../components/DialogBox'

const TicketsPanel:React.FC<any> = (props):any => {
    const classes = TicketsPanelStyles();
    const dispatch = useDispatch();

    const taskList = useSelector((state:any) => state.tasks.taskList)
    
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
                        taskStates.map((taskState:string,index:any)=>{
                            const gridClass = getGridClass(taskState,classes);
                            const boardTitle = taskState.replace('-',' ');
                            return (

                                <Grid item xs={4} className={`${classes.sprintBoard} ${gridClass}`} key={index}>
                                    <Grid container className={classes.taskListContainer}>
                                        <Typography component="h3" variant="h5"  align="center" className={taskState === 'Complete' ? classes.completedBoardHeading : ''}>
                                            {boardTitle}
                                        </Typography>
                                        <Grid container className={classes.taskList} spacing={3}>
                                        {
                                            taskList.reduce(function(filtered:any[], task:any) {
                                                if (task.state === taskState) {
                                                    filtered.push((
                                                        <Ticket
                                                            classes={classes}
                                                            task={task}
                                                            index={index}
                                                            statusUpdated={taskUpdated}
                                                        />
                                                    ));
                                                }
                                                return filtered;
                                              }, [])
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

    for(let i=0; i < taskStates.length; i++){
        if(title === taskStates[i]){
            let className = taskStates[i].replace('-','');
            className = className + 'Container';
            console.log(`className = `,className)
            gridClass = classes[className]
        }
    }
    return gridClass;
}

export const TicketsComponent = TicketsPanel;
