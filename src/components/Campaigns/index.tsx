import * as React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
    getFilteredCampaigns,
    loadCampaigns, setCampaignsWithTesting,
} from '../../store/campaigns/campaignsSlice';
import {useEffect} from 'react';
import {CampaignsTable} from '../CampaignsTable';
import {AppDispatch, store} from '../../store/campaigns/store';


// @ts-ignore
window.testingList = undefined
document.addEventListener('testingListEvent', () => {
    // @ts-ignore
    if (window.testingList) {
        console.log("test testingList");
        // @ts-ignore
        store.dispatch(setCampaignsWithTesting(window.testingList));
    }
});

// @ts-ignore
window.addCampaigns = function (externalList) {
    // @ts-ignore
    window.testingList = [...externalList];
    const event = new CustomEvent("testingListEvent");
    document.dispatchEvent(event);
    console.log("test");
}

export const Campaigns = () => {
    const dispatch = useDispatch<AppDispatch>();
    const listCampaigns = useSelector(getFilteredCampaigns);

    useEffect(() => {
        if (!listCampaigns) {
            dispatch(loadCampaigns());
        }
    }, [listCampaigns, dispatch]);

    useEffect(() => {


    })

    return <CampaignsTable campaigns={listCampaigns || []}/>;
};
