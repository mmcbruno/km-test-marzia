import * as React from 'react';
import "./styles.css";
import Box from "@mui/material/Box";
import {CouponEventProps} from "./types";

export const CouponEvents = (props: CouponEventProps) => {

    return (
        <>
            {props.events.map((event, index) => (
                <Box maxWidth="sm" sx={{
                    borderRadius: 2,
                    paddingTop: 1.5,
                    paddingRight: 1,
                    paddingBottom: 1.5,
                    paddingLeft: 1,
                    bgcolor: 'background.default',
                    marginBottom: 1,
                    marginTop: 1
                }}>
                    EVENT {index}
                </Box>
            ))}
        </>

    );
};
