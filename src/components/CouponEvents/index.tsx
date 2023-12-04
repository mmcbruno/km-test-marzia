import * as React from 'react';
import "./styles.css";
import Box from "@mui/material/Box";
import {CouponEventProps, TrendEnum} from "../../types";
import {Delete} from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";

export const CouponEvent = (props: CouponEventProps) => {
    const {trend, odds, marketResult, marketType, teamAway, teamHome, isLiveEvent, eventId} = props.event;
    const removeEvent = (e: React.SyntheticEvent) => {
        alert(`Removing event - ${eventId}`)
        e.preventDefault();
    }
    const loadEvent = (e: React.SyntheticEvent) => {
        alert(`Loading event - ${eventId}`)
    }
    return <Box maxWidth="sm"
                onClick={loadEvent}
                sx={{
                    borderRadius: 2,
                    paddingTop: 1.5,
                    paddingRight: 1,
                    paddingBottom: 1.5,
                    paddingLeft: 1,
                    bgcolor: 'background.default',
                    marginBottom: 1,
                    marginTop: 1,
                    fontSize: "14px",
                    display: "flex",
                }}>

        <Box maxWidth="sm" sx={{
            display: "flex",
            flex: "2"
        }}>
            <div>
                {marketResult}
                <Box maxWidth="sm" sx={{
                    fontSize: "11px",
                    display: "blocks",
                    color: "#000c2d99"
                }}>
                    {marketType}
                </Box>
                <Box maxWidth="sm" sx={{
                    fontSize: "11px",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis"
                }}>
                    {teamHome} - {teamAway}
                </Box>
            </div>
        </Box>

        <Box maxWidth="sm" sx={{
            fontSize: "11px",
            display: "flex",
            alignSelf: "center",
            flex: 1,
            justifyContent: "flex-end"
        }}>
            <Box
                className={trend === TrendEnum.UP ? "up" : trend === TrendEnum.DOWN ? "down" : ""}
                maxWidth="sm" sx={{
                fontSize: "14px",
                fontWeight: "700",
                color: "#255dbd",
                marginLeft: 2,
                minWidth: "20px",
                textAlign: "right"
            }}>
                {odds}
            </Box>
            <Box maxWidth="sm" sx={{
                fontSize: "11px",
                color: "#000c2d99",
                marginLeft: 2
            }}>
                <IconButton sx={{padding: 0}} onClick={removeEvent}><Delete
                    sx={{marginRight: 0.4, width: 20, height: 20}}/></IconButton>
            </Box>
        </Box>
    </Box>
};
