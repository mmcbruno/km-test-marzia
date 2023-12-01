import * as React from 'react';
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import Box from "@mui/material/Box";
import {CampaignsAppBar, CampaignsDrawerHeader, CampaignsMain} from "../styledComponent";
import {Header} from "../Header";
import {Campaigns} from "../Campaigns";
import {Aside} from "../Aside";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../store/campaigns/store";
import {useCallback} from "react";
import {toggleAside} from "../../store/campaigns/campaignsSlice";

export const CampaignsBox = () => {
    const dispatch = useDispatch<AppDispatch>();

    const showAside = useSelector(
        (state: RootState) => state.campaigns.asideDrawerShow
    );

    const toggle = useCallback(
        (event: React.KeyboardEvent | React.MouseEvent) => {
            if (
                event.type === 'keydown' &&
                ((event as React.KeyboardEvent).key === 'Tab' ||
                    (event as React.KeyboardEvent).key === 'Shift')
            ) {
                return;
            }
            dispatch(toggleAside(!showAside));
        },
        [showAside, dispatch]
    );
    return <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={'en'}>
        <Box sx={{display: 'flex'}}>
            <CampaignsAppBar position='fixed' open={showAside}>
                <Header/>
            </CampaignsAppBar>
            <CampaignsMain open={showAside}>
                <CampaignsDrawerHeader/>
                <Campaigns/>
            </CampaignsMain>
            <Aside showAside={showAside} toggle={toggle}/>
        </Box>
    </LocalizationProvider>;
};
