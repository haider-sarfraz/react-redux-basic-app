import * as React from 'react';
import {
    Box,
    Button,
    Container,
    CssBaseline,
    TextField,
    Typography,
    Link
} from '@material-ui/core';

export const Login: React.FC<any> = (props): any => {
    const { classes } = props
    const { handleLoginSubmission } = props;

    const [userName, setUserName] = React.useState('');
    const [password, setPassword] = React.useState('');

    function updateUserName(e:any){
        setUserName(e.target.value)
    }
    function updatePassword(e:any){
        setPassword(e.target.value);
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>

                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>

                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    onChange={(e)=>updateUserName(e)}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    onChange={(e)=>updatePassword(e)}
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    onClick={() => handleLoginSubmission(userName,password)}
                >
                    Sign In
                </Button>
            </div>
            <Box mt={8}>
                <Copyright />
            </Box>
        </Container>
    )
}

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
        </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}
