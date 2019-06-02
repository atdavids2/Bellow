import { Announcement } from '../models/Announcement'
import { Contact, ContactType } from '../models/Contact'
import { Alert, AlertType } from '../models/Alert';
import { UserProfile } from '../models/UserProfile';
import { Event } from '../models/Event';
import { RequestType } from '../models/Request';

export interface IDataProvider {
    type(): string;
    logout(): Promise<void>;
    createNewUser(name: string, email: string, password: string, hometown: string, address: string): Promise<boolean>;
    login(email: string, password: string): Promise<boolean>;
    getAnnouncements(): Promise<Announcement[]>;
    getSurveyLink(): Promise<string>;
    getContacts(contactType: ContactType): Promise<Contact[]>;
    getAlerts(): Promise<Alert[]>;
    getUserProfile(): Promise<UserProfile>;
    toggleNotificationSetting(alertType: AlertType, enabled: boolean): Promise<boolean>;
    getEvents(): Promise<Event[]>;
    submitRequest(requestType: RequestType, location: string, description: string): Promise<boolean>;
}