import * as React from 'react';

import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';

import { alpha } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import FilterListIcon from '@mui/icons-material/FilterList';
import MoreIcon from '@mui/icons-material/MoreVert';
import Toolbar from '@mui/material/Toolbar';
import Popover from '@mui/material/Popover';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';

import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/campaigns/store';
import {
  clearFilters,
  setActiveSinceDate,
  setActiveUntilDate,
  toggleAside,
} from '../../store/campaigns/campaignsSlice';
import { useCallback } from 'react';
import { Chip } from '@mui/material';

export const CampaignsTableToolbar = () => {
  const activeSinceDate = useSelector(
    (state: RootState) => state.campaigns.filters.activeSince
  );
  const activeUntilDate = useSelector(
    (state: RootState) => state.campaigns.filters.activeUntil
  );
  const dispatch = useDispatch<AppDispatch>();
  const showAside = useSelector(
    (state: RootState) => state.campaigns.asideDrawerShow
  );
  const [clearFilterPopEl, setClearFilterPopEl] =
    React.useState<null | HTMLElement>(null);

  const openClearFiltersPopper = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      setClearFilterPopEl(clearFilterPopEl ? null : event.currentTarget);
    },
    [clearFilterPopEl]
  );

  const handleClose = useCallback(() => {
    setClearFilterPopEl(null);
  }, [setClearFilterPopEl]);

  const clearFilterHandler = useCallback(() => {
    dispatch(clearFilters());
    setClearFilterPopEl(null);
  }, [dispatch, setClearFilterPopEl]);

  const clearStartDateHandler = useCallback(() => {
    dispatch(setActiveSinceDate(null));
  }, [dispatch]);
  const clearEndDateHandler = useCallback(() => {
    dispatch(setActiveUntilDate(null));
  }, [dispatch]);
  const handleToggleAside = useCallback(() => {
    dispatch(toggleAside(!showAside));
  }, [dispatch, showAside]);

  return (
    <>
      <Toolbar
        sx={{
          pl: { sm: 2 },
          pr: { xs: 1, sm: 1 },
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity
            ),
        }}
      >
        <Typography component='div' sx={{ flexGrow: 1 }}>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2 }}
            onClick={handleToggleAside}
          >
            <FilterListIcon />
          </IconButton>
        </Typography>
        {activeSinceDate && (
          <Chip
            sx={{ m: 2 }}
            deleteIcon={<DeleteIcon />}
            icon={<DoneIcon />}
            label={`Active since ${new Date(
              activeSinceDate
            ).toLocaleDateString()}`}
            onDelete={clearStartDateHandler}
          />
        )}
        {activeUntilDate && (
          <Chip
            sx={{ m: 2 }}
            deleteIcon={<DeleteIcon />}
            icon={<DoneIcon />}
            label={`Active until ${new Date(
              activeUntilDate
            ).toLocaleDateString()}`}
            onDelete={clearEndDateHandler}
          />
        )}
        <Tooltip title='Filters'>
          <IconButton
            size='large'
            aria-label='display more actions'
            edge='end'
            color='inherit'
            onClick={openClearFiltersPopper}
          >
            <MoreIcon />
          </IconButton>
        </Tooltip>
      </Toolbar>
      <Popover
        id={'clear-filters'}
        open={Boolean(clearFilterPopEl)}
        anchorEl={clearFilterPopEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <Paper elevation={3}>
          <Button
            color={'secondary'}
            variant='text'
            startIcon={<DeleteIcon />}
            size={'large'}
            onClick={clearFilterHandler}
          >
            Clear Filters
          </Button>
        </Paper>
      </Popover>
    </>
  );
};
