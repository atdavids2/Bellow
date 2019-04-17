import { Announcement } from '../models/Announcement'
import { Contact, ContactType } from '../models/Contact'
import { Alert, AlertType } from '../models/Alert';
import { UserProfile } from '../models/UserProfile';
import { Event } from '../models/Event';

export interface IDataProvider {
    getAnnouncements(): Announcement[];
    getSurveyLink(): string;
    getContacts(contactType: ContactType): Contact[];
    getAlerts(): Alert[];
    getUserProfile(): UserProfile;
    toggleNotificationSetting(alertType: AlertType): void;
    getEvents(): Event[];
}