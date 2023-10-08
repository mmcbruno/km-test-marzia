import * as React from 'react';

export type Order = 'asc' | 'desc';

export interface CampaignState {
  readonly list?: CampaignData[];
  readonly status: string;
  readonly filters: CampaignsFilter;
  readonly asideDrawerShow: boolean;
}

export interface CampaignsFilter {
  readonly querySearch: string;
  readonly activeSince?: string | null;
  readonly activeUntil?: string | null;
}

export interface CampaignData {
  readonly id: number;
  readonly name: string;
  readonly startDate: string;
  readonly endDate: string;
  readonly budget: number;
}

export interface HeadCell {
  readonly id: string;
  readonly label: string;
  readonly numeric: boolean;
}

export interface EnhancedTableProps {
  readonly onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof CampaignData
  ) => void;
  readonly order: Order;
  readonly orderBy: string;
  readonly rowCount: number;
}

export interface ActivationStatusProps {
  readonly startDate: string;
  readonly endDate: string;
}

export interface CampaignsTableProps {
  readonly campaigns: CampaignData[];
}
