import * as React from 'react';
import { CampaignData, Order } from '../../store/types';

export interface CampaignsTableHeadProps {
   readonly onRequestSort: (
      event: React.MouseEvent<unknown>,
      property: keyof CampaignData
   ) => void;
   readonly order: Order;
   readonly orderBy: string;
   readonly rowCount: number;
}
