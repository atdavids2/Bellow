export enum ContactType {
    Legislator,
    MunicipalLeader,
    School,
    PublicSafety,
    PublicWorks,
    ParksAndRecreation
}

export interface Contact {
    Id: number;
    Type: ContactType;
    Name: string;
    Role: string;
    RoleDescription: string;
    PhoneNumber: string;
    EmailAddress: string;
}