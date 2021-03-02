import * as React from 'react';
import {
    Grid
} from '@material-ui/core';

import { Button } from '../../components/Button'
import routes from '../../configs/constants/routes'

export const LandingPageComponent:React.FunctionComponent<any> = (props) => {

    return (
        <Grid>
            <Button
                title='Login'
                theme='login'
                onClickHandler={()=> onClickHandler({
                        history: props.history,
                        route: routes.LOGIN,
                        isNavigationModeOn: true
                    })
                }
            />
        </Grid>
    )
}

interface ButtonHandler{
    route: string
    isNavigationModeOn: boolean
    history: any
}
function onClickHandler({history, route, isNavigationModeOn}:ButtonHandler){
    if(!history){
        console.log(`"history" Object is undefined`);
        return ;
    }
    if(route && isNavigationModeOn){
        history.push(route)
    }
}
