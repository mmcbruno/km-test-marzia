import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getFilteredCampaigns,
  loadCampaigns,
} from '../../store/campaigns/campaignsSlice';
import { useEffect } from 'react';
import { CampaignsTable } from '../CampaignsTable';
import { AppDispatch } from '../../store/campaigns/store';

export const Campaigns = () => {
  const dispatch = useDispatch<AppDispatch>();
  const listCampaigns = useSelector(getFilteredCampaigns);

  useEffect(() => {
    if (!listCampaigns) {
      dispatch(loadCampaigns());
    }
  }, [listCampaigns, dispatch]);

  return <CampaignsTable campaigns={listCampaigns || []} />;
};
