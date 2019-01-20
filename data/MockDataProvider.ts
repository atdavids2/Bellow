import { Announcement } from '../models/Announcement'
import { IDataProvider } from './IDataProvider'

export class MockDataProvider implements IDataProvider {
    
    getAnnouncements(): Announcement[] {
        let announcements: Announcement[] = [{
            Id: 1,
            Subject: 'Furniture Sale',
            Details: 'Starting on Jan 31st, 2019, everything is free!'
        }];
        return announcements;
    }
}