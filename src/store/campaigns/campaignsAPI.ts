import { CampaignData } from '../types';
import { campaignsList } from '../../data';

export function fetchCampaigns() {
   return new Promise<{ data: CampaignData[] }>((resolve) =>
      setTimeout(() => resolve({ data: campaignsList }), 500)
   );
}
