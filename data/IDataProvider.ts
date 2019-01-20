import { Announcement } from '../models/Announcement'

export interface IDataProvider {
    getAnnouncements(): Announcement[];
}