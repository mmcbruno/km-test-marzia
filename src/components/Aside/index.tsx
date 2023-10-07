import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Divider from '@mui/material/Divider';
import { AsideProp } from './types';
import { CampaignsDrawerHeader, drawerWidth } from '../styledComponent';
import Typography from '@mui/material/Typography';
import { DatesFilter } from '../DatesFilter';

export const Aside = ({ showAside, toggle }: AsideProp) => (
  <Drawer
    sx={{
      width: drawerWidth,
      flexShrink: 0,
      '& .MuiDrawer-paper': {
        width: drawerWidth,
      },
    }}
    variant='persistent'
    anchor='right'
    open={showAside}
  >
    <CampaignsDrawerHeader>
      <IconButton onClick={toggle}>
        <ChevronRightIcon />
      </IconButton>
      <Typography variant='h6' component='div'>
        Filter results
      </Typography>
    </CampaignsDrawerHeader>
    <Divider />
    <DatesFilter />
  </Drawer>
);
