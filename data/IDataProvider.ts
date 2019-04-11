import { Announcement } from '../models/Announcement';
import { Alert, AlertType } from '../models/Alert';
import { UserProfile } from '../models/UserProfile';

export interface IDataProvider {
    getAnnouncements(): Announcement[];
    getSurveyLink(): string;
    getAlerts(): Alert[];
    getUserProfile(): UserProfile;
    toggleNotificationSetting(alertType: AlertType): void;
}