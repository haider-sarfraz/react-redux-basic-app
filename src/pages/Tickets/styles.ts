import { makeStyles } from '@material-ui/core/styles';

export const TicketsPanelStyles = makeStyles((theme) => ({
  sprintBoard: {
    height: '84.5vh',
    maxHeight: '84.5vh',
    overflow: 'auto'
  },
  taskListContainer: {
    padding: '3vh'
  },
  toDoContainer: {
    backgroundColor: 'aliceblue',
  },
  inProgressContainer: {
    backgroundColor: 'darkcyan',
  },
  completedContainer: {
    backgroundColor: 'midnightblue'
  },
  completedBoardHeading: {
    color: 'white'
  },
  taskList: {    
    flexDirection: 'column',
    height: '100%'
  },
  taskBox: {
    flexDirection: 'column',
    backgroundColor: 'antiquewhite',
    marginTop: '3vh',
    padding: '2em 1em 2em 1em'
  },
}));