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