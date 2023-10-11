import {campaignsList} from './data';
import dayjs from "dayjs";

export const testStore = {
    campaigns: {
        list: campaignsList,
        status: 'idle',
        filters: {
            querySearch: '',
            activeSince: dayjs("12-05-2023"),
            activeUntil: undefined,
        },
        asideDrawerShow: false,
    },
};
