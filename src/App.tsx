import * as React from 'react';
import Box from '@mui/material/Box';
import {Link} from "@mui/material";
import {CampaignsBox} from "./components/CampaignsBox";

export const App = () => (
    <>
        <CampaignsBox/>
        <Box sx={{display: 'flex'}}>
            <div><Link
                component="button"
                variant="body2"
                onClick={() => {
                }}
            >
                Button Link
            </Link></div>
        </Box>
    </>
);
