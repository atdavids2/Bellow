import { Announcement } from '../models/Announcement'
import { Contact, ContactType } from '../models/Contact'
import { Alert, AlertType } from '../models/Alert';
import { UserProfile } from '../models/UserProfile';
import { Event } from '../models/Event';
import { RequestType } from '../models/Request';

export interface IDataProvider {
    getAnnouncements(): Promise<Announcement[]>;
    getSurveyLink(): Promise<string>;
    getContacts(contactType: ContactType): Promise<Contact[]>;
    getAlerts(): Promise<Alert[]>;
    getUserProfile(): Promise<UserProfile>;
    toggleNotificationSetting(alertType: AlertType, enabled: boolean): Promise<boolean>;
    getEvents(): Promise<Event[]>;
    submitRequest(requestType: RequestType, location: string, description: string): Promise<boolean>;
}