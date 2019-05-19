export enum RequestType {
    TreesAndParks,
    TrafficAndVehicles,
    Streets,
    FoodAndBeverages,
    Housing,
    PublicConcern
}

export interface Request {
    RequestType: RequestType;
    Location: string;
    Description: string;
    Date: string;
}