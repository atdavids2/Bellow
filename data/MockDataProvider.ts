import { Announcement } from '../models/Announcement'
import { Contact } from '../models/Contact'
import { IDataProvider } from './IDataProvider'


export class MockDataProvider implements IDataProvider {
    
    getAnnouncements(): Announcement[] {
        let announcements: Announcement[] = [{
            Id: 1,
            Subject: 'Furniture Sale',
            Details: 'Starting on Jan 31st, 2019, everything is free!\nWe are going out of business so we\'re giving our stuff away!\nBurn the building after for all we care.\nWe hate the gov!\nThey tax too much\nand don\'t scare us...',
            Date: 'Jan 13'
        },
        {
            Id: 2,
            Subject: 'Spanish Opera Night',
            Details: 'The rec center is hosting the marvelous St Rita. Come watch!\nShe is a 90 year old opera singer.\nWe promised her a great turnout.\nSeriously please come.\nWe\'ll pay.\nNot that much though.',
            Date: 'Feb 4, 2032'
        },
        {
            Id: 3,
            Subject: 'Calzone Making Competition',
            Details: 'Can you make the calazone as good as Ben Wyatt?\n... the BEN WYATT?!?!\nThat\'s what we were told!\nTest your skills against the best at Morton\'s on 51st Ave',
            Date: '8PM tomorrow'
        }];
        announcements = announcements.concat(announcements);
        announcements = announcements.concat(announcements);
        return announcements;
    }

    getSurveyLink(): string {
        return 'https://www.google.com';
    }

    getContacts(): Contact[] {
        let contacts: Contact[] = [{
            Id: 1,
            Type: 1,
            Name: 'Anthony Weiner',
            Role: 'US Senate Representative',
            RoleDescription: 'My job is to make sure that our citizens views are represented in the US Senate.',
            PhoneNumber: '1-800-244-3485',
            EmailAddress: 'big.weiner@ussenate.gov'
        },
        {
            Id: 2,
            Type: 2,
            Name: 'Keith Pekau',
            Role: 'Mayor',
            RoleDescription: 'My job is to golf all day.',
            PhoneNumber: '1-800-123-4567',
            EmailAddress: 'bigKeithDaBest@gmail.com'
        },
        {
            Id: 3,
            Type: 3,
            Name: 'Jim Morris',
            Role: 'Chicago High School Principal',
            RoleDescription: 'My job is to smack kids who are acting up',
            PhoneNumber: '1-800-999-9999',
            EmailAddress: 'j.morris@chicagoschools.com'
        }];
        contacts = contacts.concat(contacts);
        contacts = contacts.concat(contacts);
        return contacts;
    }
}