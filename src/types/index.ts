export enum TrendEnum {
    DOWN = "DOWN",
    UP = "UP"
}

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
    event: Event;
}

export interface StakeProps {
    readonly  stake: number;
    readonly  setStake: (value: number) => void;
    readonly totalOdds?: number
    readonly winnings?: number
}
