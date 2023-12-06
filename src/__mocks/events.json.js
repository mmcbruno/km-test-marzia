import {TrendEnum} from "../types";

export const testEvents = [
    {
        eventId: "123456",
        isLiveEvent: true,
        teamHome: "Torino FC",
        teamAway: "Atalanta",
        marketType: "1X2",
        marketResult: "Atalanta",
        odds: 1.75,
        trend: TrendEnum.DOWN
    },
    {
        eventId: "987654",
        isLiveEvent: false,
        teamHome: "Borussia Dortmund",
        teamAway: "Bayern München",
        marketType: "Total Goals 2.5",
        marketResult: "Over (2.5)",
        odds: 1.20
    },
    {
        eventId: "345678",
        isLiveEvent: true,
        teamHome: "Jong PSV Eindhoven",
        teamAway: "NAC Breda",
        marketType: "1X2",
        marketResult: "Jong PSV Eindhoven",
        odds: 1.9,
        trend: TrendEnum.UP
    },
]

export const eventsFromSite = [{
    "isLive": false,
    "matchId": 5870274,
    "marketId": 286906232,
    "selectionId": 969032793, //oddsID
    "selectionValue": 16.5 //odds
}, {
    "isLive": false,
    "matchId": 5870271,
    "marketId": 286905848,
    "selectionId": 969030796,
    "selectionValue": 2
}, {
    "isLive": false,
    "matchId": 5904610,
    "marketId": 288800910,
    "selectionId": 975129981,
    "selectionValue": 1.38
}, {"isLive": true, "matchId": 5911096, "marketId": 289348750, "selectionId": 976889752, "selectionValue": 8}]