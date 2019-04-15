import { Announcement } from '../models/Announcement'
import { Contact, ContactType } from '../models/Contact'

export interface IDataProvider {
    getAnnouncements(): Announcement[];
    getSurveyLink(): string;
    getContacts(): Contact[];
    getContacts(ContactType: ContactType): Contact[];
}