export enum ContactType {
    Legislator,
    MunicipalLeader,
    School,
    PublicSafety,
    PublicWorks,
    ParksAndRecreation
}

export interface Contact {
    Id: string;
    Type: ContactType;
    Name: string;
    Role: string;
    RoleDescription: string;
    PhoneNumber: string;
    EmailAddress: string;
}