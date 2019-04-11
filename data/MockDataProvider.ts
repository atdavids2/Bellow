import { Announcement } from '../models/Announcement';
import { Alert, AlertType } from '../models/Alert';
import { UserProfile } from '../models/UserProfile';
import { Event, EventType } from '../models/Event';
import { IDataProvider } from './IDataProvider';

export class MockDataProvider implements IDataProvider {

    userProfile: UserProfile = {
        Name: "Bryan Ryan O'Brien",
        Email: "throwawayacat@gmail.com",
        Hometown: "Chicago",
        Addresses: "123 Drury Lane, Far Far Away",
        OtherHometowns: "",
        NotificationSettings: { 1: true, 2: false, 4: true, 8: false, 16: false }
    };
    
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

    getAlerts(): Alert[] {
        let alerts: Alert[] = [{
            Id: 1,
            Topic: 'School closure',
            Type: AlertType.School,
            Date: 'Friday March 13th',
            Description: 'One of the students won the lottery! He\'s renting out the building to host a Friday the 13th scary movie party! Hopefully you were invited.'
        },
        {
            Id: 2,
            Topic: 'Blind birds are flying into windows',
            Type: AlertType.Emergency,
            Date: 'Feb 9th',
            Description: 'Our large population of blind crows are flying into houses. Make sure you keep your windows closed! If they do get into your home, call the authorities immediately. They are mostly rabid.'
        },
        {
            Id: 3,
            Topic: 'Slam dunk contest',
            Type: AlertType.ParksAndRec,
            Date: 'Jan 27th, 2020',
            Description: 'The parks department is hosting Jimmer Fridette in a dunk contest.\nThe winner gets $5000!\nIf you can dunk on an 8ft rim then you have a chance, so don\'t miss out!'
        },
        {
            Id: 4,
            Topic: 'Massive pileup on Route 4',
            Type: AlertType.Traffic | AlertType.Emergency,
            Date: 'Feb 23rd, 2019',
            Description: 'No one is hurt but yikes this is a bad crash. Come see the destruction!'
        },
        {
            Id: 5,
            Topic: 'Mayor Keith up for re-election',
            Type: AlertType.Voting,
            Date: 'Nov 8, 2020',
            Description: 'The best mayor in the history of Orland needs our support! Early voting starts in 18 months.'
        }];
        alerts = alerts.concat(alerts);
        return alerts;
    }

    getUserProfile(): UserProfile {
        return this.userProfile;
    }

    toggleNotificationSetting(alertType: AlertType) {
        this.userProfile.NotificationSettings[alertType] = !this.userProfile.NotificationSettings[alertType];
    }

    getEvents(): Event[] {
        var today = new Date();
        var tomorrow = new Date();
        tomorrow.setDate(today.getDate()+1);
        var yesterday = new Date();
        yesterday.setDate(today.getDate()-1);

        let events: Event[] = [{
            Id: 1,
            Name: 'Board meeting',
            Type: EventType.Political | EventType.School,
            Date: today,
            Description: 'We will be discussing the merits of creating a large scale petting zoo on our high school grounds over summer break.\nWe already have a generous donation from Farmer Bill of 7 zebras and 2 giraffes!\nJoin us in Conf Room A in Buidling 23 at 6 PM today to voice your opinion.'
        },
        {
            Id: 2,
            Name: 'Ice cream social',
            Type: EventType.Recreation,
            Date: tomorrow,
            Description: 'Politics over People will be hosting an ice cream social at 9 AM tomorrow.\nIf you don\'t like coconut ice cream don\'t bother coming because we will not be supplying any other flavors.\nLocation to be announced 15 minutes before the start of the event so stay tuned!'
        },
        {
            Id: 3,
            Name: 'Apiculture career fair',
            Type: EventType.CareerServices,
            Date: yesterday,
            Description: 'The apiculture society is hosting a career fair at the middle school. Come all bee lovers!'
        },
        {
            Id: 4,
            Name: 'Reading moms volunteering opportunities',
            Type: EventType.Volunteering | EventType.School,
            Date: today,
            Description: 'Our first grade students have finally surpassed Ms Rachel\'s reading abilities. We need volunteer moms (please no dads) to come read to the children.\nEmail Ms Rachel (msRachel@email.com) with any inquiries or if you would like to help out.\nPlease keep emails to a first grade or lower reading level or she will not respond.'
        }];
        return events;
    }
}