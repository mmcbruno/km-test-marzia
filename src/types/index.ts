export enum TrendEnum {
    DOWN = "DOWN",
    UP = "UP"
}

export enum BetSlipType {
    MULTIPLE = "MULTIPLE",
    SINGLE = "SINGLE",
    COMBO_BET = "COMBO_BET"
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
    readonly betSlipType?: BetSlipType;
}

export interface StakeProps {
    readonly  stake: number;
    readonly  setStake: (value: number) => void;
    readonly totalOdds?: number
    readonly winnings?: number
}
