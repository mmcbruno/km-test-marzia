export interface Event {
    readonly eventId: string;
    readonly isLiveEvent: boolean;
    readonly teamHome: string;
    readonly teamAway: string;
    readonly marketType: string;
    readonly marketResult: string;
    readonly odds: number;
    readonly trend?: TrendEnum;
}


export interface CouponEventProps {
    events: Event[];
}

export enum TrendEnum {
    DOWN = "DOWN",
    UP = "UP"
}