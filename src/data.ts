import { CampaignData, HeadCell } from './store/types';

export const campaignsList: CampaignData[] = [
   {
      id: 1,
      name: 'Divavu',
      startDate: '9/19/2023',
      endDate: '3/9/2024',
      budget: 88377,
   },
   {
      id: 2,
      name: 'Jaxspan',
      startDate: '11/21/2023',
      endDate: '2/21/2024',
      budget: 608715,
   },
   {
      id: 3,
      name: 'Miboo',
      startDate: '11/1/2023',
      endDate: '11/30/2023',
      budget: 239507,
   },
   {
      id: 4,
      name: 'Trilith',
      startDate: '8/25/2023',
      endDate: '11/30/2024',
      budget: 179838,
   },
   {
      id: 5,
      name: 'Layo',
      startDate: '11/28/2017',
      endDate: '',
      budget: 837850,
   },
   {
      id: 6,
      name: 'Photojam',
      startDate: '7/25/2017',
      endDate: '6/23/2017',
      budget: 858131,
   },
   {
      id: 7,
      name: 'Blogtag',
      startDate: '6/27/2017',
      endDate: '1/15/2018',
      budget: 109078,
   },
   {
      id: 8,
      name: 'Rhyzio',
      startDate: '10/13/2017',
      endDate: '1/25/2018',
      budget: 272552,
   },
   {
      id: 9,
      name: 'Zoomcast',
      startDate: '9/6/2017',
      endDate: '11/10/2017',
      budget: 301919,
   },
   {
      id: 10,
      name: 'Realbridge',
      startDate: '3/5/2018',
      endDate: '10/2/2017',
      budget: 505602,
   },
];
export const headCells: readonly HeadCell[] = [
   {
      id: 'active',
      numeric: false,
      label: 'Active',
   },
   {
      id: 'name',
      numeric: false,
      label: 'Campaign Name',
   },
   {
      id: 'startDate',
      numeric: true,
      label: 'Start Date',
   },
   {
      id: 'endDate',
      numeric: true,
      label: 'End Date',
   },
   {
      id: 'budget',
      numeric: true,
      label: 'Budget',
   },
];

//this function checks if the date set in the
//campaign is within the provided one in comparingDate
export const filterByDate = (
   cmpDate?: string,
   comparingDate?: string | null,
   isStartDate = true
) => {
   if (!cmpDate) {
      return false;
   }
   if (!comparingDate) {
      return true;
   }
   return isStartDate
      ? new Date(comparingDate) <= new Date(cmpDate)
      : new Date(comparingDate) >= new Date(cmpDate);
};
