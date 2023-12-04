import * as React from 'react';
import "./styles.css";
import Box from "@mui/material/Box";
import {CouponEventProps, TrendEnum} from "./types";
import {Delete} from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";

export const CouponEvents = (props: CouponEventProps) => {
    const removeEvent = () => {
        alert("Removing event")
    }
    return (
        <>
            {props.events.map((event) => (
                <Box maxWidth="sm" sx={{
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
                            {event.marketResult}
                            <Box maxWidth="sm" sx={{
                                fontSize: "11px",
                                display: "blocks",
                                color: "#000c2d99"
                            }}>
                                {event.marketType}
                            </Box>
                            <Box maxWidth="sm" sx={{
                                fontSize: "11px",
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                                textOverflow: "ellipsis"
                            }}>
                                {event.teamHome} - {event.teamAway}
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
                            className={event.trend === TrendEnum.UP ? "up" : event.trend === TrendEnum.DOWN ? "down" : ""}
                            maxWidth="sm" sx={{
                            fontSize: "11px",
                            color: "#000c2d99",
                            marginLeft: 2,
                            minWidth: "20px",
                            textAlign: "right"
                        }}>
                            {event.odds}
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
            ))}
        </>

    );
};
