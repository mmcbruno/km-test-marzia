import * as React from 'react';
import {useState} from 'react';
import "./styles.css";
import Box from "@mui/material/Box";
import {BottomNavigation, BottomNavigationAction, Chip, Container} from "@mui/material";
import Paper from "@mui/material/Paper";
import {AppSettingsAlt, Close, Delete, Home} from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import {CouponEvents} from "../CouponEvents";
import {Event, TrendEnum} from "../CouponEvents/types";

const testEvents: Event[] = [
    {
        eventId: "123456",
        isLiveEvent: true,
        teamHome: "Borussia Dortmund",
        teamAway: "Bayern München",
        marketType: "1X2",
        odds: 1.75,
        trend: TrendEnum.DOWN
    },
    {
        eventId: "987654",
        isLiveEvent: false,
        teamHome: "Borussia Dortmund",
        teamAway: "Bayern München",
        marketType: "Total Goals 2.5",
        odds: 1.20
    },
    {
        eventId: "345678",
        isLiveEvent: true,
        teamHome: "Borussia Dortmund",
        teamAway: "Bayern München",
        marketType: "1X2",
        odds: 1.9,
        trend: TrendEnum.UP
    },
]
export const Coupon = () => {
    const [value, setValue] = useState(0);
    return (<div className={"container"}>
        <div className={"page-header"}>
            <div className={"logo"}/>
        </div>
        <Container maxWidth="sm" sx={{paddingLeft: 0, paddingRight: 0}}>
            <Box
                maxWidth={"sm"}
                sx={{
                    borderTopLeftRadius: 8,
                    borderTopRightRadius: 8,
                    bgcolor: 'background.default',
                    height: '100vh',
                    paddingTop: 2
                }}
            >
                <div className={"header"}>
                    <div><span>BetSlip</span><Chip label="1" sx={{marginLeft: 0.4}}/></div>
                    <IconButton sx={{padding: 0}}><Close/></IconButton>
                </div>
                <div className={"header settings"}>
                    <IconButton sx={{padding: 0}}><Delete
                        sx={{marginRight: 0.4}}/><span>Clear All</span></IconButton>
                    <IconButton sx={{padding: 0}}><AppSettingsAlt
                        sx={{marginRight: 0.4}}/><span>Settings</span>
                    </IconButton>

                </div>
                <Container
                    maxWidth={false}
                    sx={{
                        backgroundColor: 'rgba(37,93,189,0.2)',
                        margin: 0,
                        marginTop: 1,
                        padding: 1

                    }}
                >
                    <CouponEvents events={testEvents}/>
                </Container>

            </Box>
        </Container>
        <Paper sx={{position: 'fixed', bottom: 0, left: 0, right: 0}} elevation={3}>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >
                <BottomNavigationAction label="HOME" icon={<Home/>}/>
            </BottomNavigation>
        </Paper>
    </div>);
};
