import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { CampaignData, CampaignState } from '../types';
import { fetchCampaigns } from './campaignsAPI';
import { checkDate } from '../../data';

const initialState: CampaignState = {
  list: undefined,
  status: 'idle',
  filters: {
    querySearch: '',
    activeSince: undefined,
    activeUntil: undefined,
  },
  asideDrawerShow: false,
};

export const loadCampaigns = createAsyncThunk(
  'campaigns/fetchCampaigns',
  async () => {
    const response = await fetchCampaigns();
    return response.data;
  }
);

export const campaignsSlice = createSlice({
  name: 'campaigns',
  initialState,
  reducers: {
    setCampaigns: (state, action: PayloadAction<CampaignData[]>) => {
      state.list = action.payload;
    },
    setQuerySearch: (state, action: PayloadAction<string>) => {
      state.filters.querySearch = action.payload;
    },
    setActiveSinceDate: (state, action: PayloadAction<string | undefined>) => {
      state.filters.activeSince = action.payload;
    },
    setActiveUntilDate: (state, action: PayloadAction<string | undefined>) => {
      state.filters.activeUntil = action.payload;
    },
    clearFilters: (state) => {
      state.filters.activeUntil = undefined;
      state.filters.activeSince = undefined;
      state.filters.querySearch = '';
    },
    toggleAside: (state, action: PayloadAction<boolean>) => {
      state.asideDrawerShow = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadCampaigns.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loadCampaigns.fulfilled, (state, action) => {
        state.status = 'idle';
        state.list = action.payload;
      })
      .addCase(loadCampaigns.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const {
  setCampaigns,
  setQuerySearch,
  setActiveUntilDate,
  setActiveSinceDate,
  clearFilters,
  toggleAside,
} = campaignsSlice.actions;

//selectors with logic
export const getFilteredCampaigns = (state: RootState) => {
  const { querySearch, activeSince, activeUntil } = state.campaigns.filters;
  const noFiltersSet = querySearch.length === 0 && !activeSince && !activeUntil;
  if (noFiltersSet) {
    return state.campaigns.list;
  }
  return state.campaigns.list
    ?.filter((cmp) => {
      return (
        cmp.name
          .toLowerCase()
          .trim()
          .indexOf(querySearch.toLowerCase().trim()) > -1
      );
    })
    .filter((cmp) => {
      return checkDate(cmp.startDate, activeSince);
    })
    .filter((cmp) => {
      return checkDate(cmp.startDate, activeUntil, false);
    });
};

export default campaignsSlice.reducer;
