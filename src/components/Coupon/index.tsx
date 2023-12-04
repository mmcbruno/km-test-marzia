import * as React from 'react';
import {useState} from 'react';
import "./styles.css";
import Box from "@mui/material/Box";
import {BottomNavigation, BottomNavigationAction, Chip, Container} from "@mui/material";
import Paper from "@mui/material/Paper";
import {AppSettingsAlt, Close, Delete, Home} from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import {CouponEvent} from "../CouponEvents";
import {CouponStake} from "../CouponStake";
import {testEvents} from "../../__mocks/events.json"

export const Coupon = () => {

    const [value, setValue] = useState(0);
    const [stake, setStake] = useState(1000);

    const closeBetSlip = (e: React.SyntheticEvent) => {
        alert(`Close betSlip`);
    }

    return (<div className={"container"}>
        <div className={"page-header"}>
            <div className={"logo"}/>
        </div>
        <Container maxWidth="xl" sx={{paddingLeft: 0, paddingRight: 0}}>
            <Box
                maxWidth={"xl"}
                sx={{
                    borderTopLeftRadius: 8,
                    borderTopRightRadius: 8,
                    bgcolor: 'background.default',
                    height: '100vh',
                    paddingTop: 2
                }}
            >
                <div className={"header"}>
                    <div><span>BetSlip</span><Chip label="1" sx={{marginLeft: 0.4, height: "16px"}}/></div>
                    <IconButton sx={{padding: 0}} onClick={closeBetSlip}><Close/></IconButton>
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
                        padding: 0
                    }}
                >
                    <Box sx={{padding: 1}}>
                        {testEvents.map((event) => <CouponEvent key={event.eventId} event={event}/>)}</Box>
                    <Box
                        sx={{
                            borderTopLeftRadius: 8,
                            borderTopRightRadius: 8,
                            bgcolor: 'background.default',
                            paddingTop: 2
                        }}
                    >
                        <CouponStake stake={stake} setStake={setStake} totalOdds={2.75} winnings={9156.39}/>

                    </Box>
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
