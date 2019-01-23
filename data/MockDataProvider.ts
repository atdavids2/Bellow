import { Announcement } from '../models/Announcement'
import { IDataProvider } from './IDataProvider'

export class MockDataProvider implements IDataProvider {
    
    getAnnouncements(): Announcement[] {
        let announcements: Announcement[] = [{
            Id: 1,
            Subject: 'Furniture Sale',
            Details: 'Starting on Jan 31st, 2019, everything is free!',
            Date: 'Jan 13'
        },
        {
            Id: 2,
            Subject: 'Spanish Opera Night',
            Details: 'The rec center is hosting the marvelous St Rita. Come watch!',
            Date: 'Feb 4, 2032'
        },
        {
            Id: 3,
            Subject: 'Calzone Making Competition',
            Details: 'Can you make the calazone as good as Ben Wyatt? Test your skills against the best at Morton\'s on 51st Ave',
            Date: '8PM tomorrow'
        }];
        return announcements;
    }
}