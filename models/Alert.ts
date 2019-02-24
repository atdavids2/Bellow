export enum AlertType {
    None = 0,
    Emergency = 1 << 0,
    ParksAndRec = 1 << 1,
    Traffic = 1 << 2,
    Voting = 1 << 3,
    School = 1 << 4
}

export interface Alert {
    Id: number;
    Topic: string;
    Type: AlertType;
    Date: string;
    Description: string;
}