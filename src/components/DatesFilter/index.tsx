import * as React from 'react';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/campaigns/store';
import { useCallback } from 'react';
import {
  setActiveSinceDate,
  setActiveUntilDate,
} from '../../store/campaigns/campaignsSlice';
import { DatePicker } from '@mui/x-date-pickers';
import { Grid } from '@mui/material';

export const DatesFilter = () => {
  const dispatch = useDispatch<AppDispatch>();
  const activeSinceDate = useSelector(
    (state: RootState) => state.campaigns.filters.activeSince
  );
  const activeUntilDate = useSelector(
    (state: RootState) => state.campaigns.filters.activeUntil
  );

  const onStartDateChange = useCallback(
    (newDateValue: string | null) => {
      console.log(newDateValue);
      dispatch(setActiveSinceDate(newDateValue));
    },
    [dispatch]
  );

  const onEndDateChange = useCallback(
    (newDateValue: string | null) => {
      dispatch(setActiveUntilDate(newDateValue));
    },
    [dispatch]
  );

  const clearDate = (isEndDate: boolean = false) => {
    if (isEndDate) {
      dispatch(setActiveUntilDate(null));
    } else {
      dispatch(setActiveSinceDate(null));
    }
  };
  return (
    <>
      <Box sx={{ p: 3 }}>
        <Typography component='div'>Filter by Period</Typography>
      </Box>
      <div>
        <Grid container spacing={4} xs={12} sx={{ marginLeft: 0 }}>
          <Grid xs={12} sx={{ p: 2 }}>
            <DatePicker
              format='DD-MM-YYYY'
              label='Start'
              value={activeSinceDate}
              defaultValue={activeSinceDate}
              onChange={onStartDateChange}
              formatDensity={'dense'}
              slotProps={{
                field: { clearable: true, onClear: () => clearDate(true) },
                openPickerIcon: { fontSize: 'small' },
                openPickerButton: { color: 'primary' },
                textField: {
                  variant: 'filled',
                  focused: true,
                  color: 'secondary',
                },
              }}
              referenceDate={undefined}
            />
          </Grid>

          <Grid xs={12} sx={{ p: 2 }}>
            <DatePicker
              format='DD-MM-YYYY'
              label='End'
              value={activeUntilDate}
              defaultValue={activeUntilDate}
              onChange={onEndDateChange}
              formatDensity={'dense'}
              slotProps={{
                field: { clearable: true, onClear: () => clearDate(true) },
                openPickerIcon: { fontSize: 'small' },
                openPickerButton: { color: 'primary' },
                textField: {
                  variant: 'filled',
                  focused: true,
                  color: 'secondary',
                },
              }}
              referenceDate={undefined}
            />
          </Grid>
        </Grid>
      </div>
    </>
  );
};
