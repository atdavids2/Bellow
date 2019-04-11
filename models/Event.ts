
export enum EventType {
    None = 0,
    Political = 1 << 0,
    Recreation = 1 << 1,
    School = 1 << 2,
    CareerServices = 1 << 3,
    Volunteering = 1 << 4
}

export interface Event {
    Id: number;
    Name: string;
    Type: EventType;
    Date: Date;
    Description: string;
}