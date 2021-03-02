import * as React from 'react';
import {
    Button,
    Grid
} from '@material-ui/core';

import { themeConfigs } from '../../configs/constants/theme';

interface ButtonProps{
    title: string
    theme?: string
    variant?: 'text' | 'outlined' | 'contained'
    onClickHandler?: () => void
}

const themeVariants = themeConfigs.variants;

export const ButtonComponent:React.FunctionComponent<ButtonProps> = (props):any => {
    
    return (
        <Grid>
            <Button
                variant={props.variant || themeVariants.CONTAINED}
                onClick={props.onClickHandler}
            >
                {props.title}
            </Button>
        </Grid>
    )
}
