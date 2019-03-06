import { AlertType } from './Alert';

export interface UserProfile {
    Name: string,
    Email: string,
    Hometown: string,
    Addresses: string,
    OtherHometowns: string,
    NotificationSettings: { [alertType: number]: boolean }
}