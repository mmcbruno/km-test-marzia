import * as React from 'react';
import {ActivationStatusProps} from '../../store/types';
import IconButton from '@mui/material/IconButton';

import {ToggleOffSharp, ToggleOnSharp, Error} from '@mui/icons-material';


export const CampaignActivationStatus = (props: ActivationStatusProps) => {
    const {startDate, endDate} = props;
    const noDateSetForCampaign = startDate.length === 0 || endDate.length === 0;
    if (noDateSetForCampaign) {
        return (
            <IconButton size='large' edge='start' color='inherit' sx={{mr: 2}}>
                <Error color='secondary'/>
            </IconButton>
        );
    }
    const currentDate = new Date();
    const isActive =
        new Date(startDate) <= currentDate && currentDate <= new Date(endDate);
    return (
        <IconButton size='large' edge='start' color='inherit' sx={{mr: 2}}>
            {isActive ? (
                <ToggleOnSharp color='success'/>
            ) : (
                <ToggleOffSharp color='error'/>
            )}
        </IconButton>
    );
};
