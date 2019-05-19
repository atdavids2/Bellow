import { AlertType } from './Alert';

export interface NotificationSetting {
    AlertType: AlertType,
    Enabled: boolean
}

export interface UserProfile {
    Id: string;
    Name: string;
    Email: string;
    Hometown: string;
    Addresses: string;
    OtherHometowns: string;
    NotificationSettings: NotificationSetting[];
}