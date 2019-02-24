import { Announcement } from '../models/Announcement';
import { Alert } from '../models/Alert';

export interface IDataProvider {
    getAnnouncements(): Announcement[];
    getSurveyLink(): string;
    getAlerts(): Alert[];
}