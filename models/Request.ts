export enum RequestType {
    TreesAndParks,
    TrafficAndVehicles,
    Streets,
    FoodAndBeverages,
    Housing,
    PublicConcern
}

export interface Request {
    Id: number;
    RequestType: RequestType,
    Location: string,
    Description: string
}