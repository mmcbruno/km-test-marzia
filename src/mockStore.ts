import {campaignsList} from './data';
import dayjs from "dayjs";
import {CampaignState} from "./store/types";

export const testStore: CampaignState = {
    list: campaignsList,
    status: 'idle',
    filters: {
        querySearch: '',
        activeSince: dayjs("12-05-2023").toString(),
        activeUntil: undefined,
    },
    asideDrawerShow: false,
};
