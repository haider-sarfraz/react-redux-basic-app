import * as React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import {
    Button,
    DialogTitle,
    Dialog,
    FormControl,
    Grid,
    InputBase,
    InputLabel,
    Select,
    MenuItem,
    TextField
} from '@material-ui/core';

const BootstrapInput = withStyles((theme) => ({
    root: {
        'label + &': {
            marginTop: theme.spacing(3),
        },
    },
    input: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #ced4da',
        fontSize: 16,
        padding: '10px 26px 10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
    dialogContainer:{ 
        padding: '3em 3em 3em 3em',
        display: 'flex',
        justifyContent: 'space-evenly',
        flexDirection: 'column',
        height: '51vh',
    },
}));

export const DialogBox: React.FC<any> = (props) => {
    const classes = useStyles();

    const { onClose, selectedValue, open } = props;
    const handleClose = () => {
        onClose(selectedValue);
    };
    const handleSubmitButtonClick = () => {
        onClose(ticketDetail);
    };

    const [ticketDetail, setTicketDetail] = React.useState({
        title: '',
        state: ''
    });
    const handleTitle = (event:any) => {
        setTicketDetail({...ticketDetail,title:event.target.value})
    };
    const handleTicketState = (event:any) => {
        setTicketDetail({...ticketDetail,state:event.target.value})
    };

    return (
        <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
            <Grid className={classes.dialogContainer}>
                <DialogTitle id="simple-dialog-title">Add New Ticket</DialogTitle>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="ticketTitle"
                    label="ticketTitle"
                    type="ticketTitle"
                    id="ticketTitle"
                    autoComplete="current-password"
                    onChange={(e) => handleTitle(e)}
                />
                <FormControl className={classes.margin}>
                    <InputLabel id="demo-customized-select-label">Ticket Name</InputLabel>
                    <Select
                        labelId="demo-customized-select-label"
                        id="demo-customized-select"
                        value={ticketDetail.state}
                        onChange={handleTicketState}
                        input={<BootstrapInput />}
                    >
                    <MenuItem value={'to-do'}>TO_DO</MenuItem>
                    <MenuItem value={'in-progress'}>IN_PROGRESS</MenuItem>
                    <MenuItem value={'complete'}>COMPLETE</MenuItem>
                    </Select>
                </FormControl>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    // className={classes.submit}
                    onClick={() => handleSubmitButtonClick()}
                >
                    Submit
                </Button>

            </Grid>
        </Dialog>
    )
}
