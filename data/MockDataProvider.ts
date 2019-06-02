import { Announcement } from '../models/Announcement'
import { Contact, ContactType } from '../models/Contact'
import { Alert, AlertType } from '../models/Alert';
import { UserProfile, NotificationSetting } from '../models/UserProfile';
import { Event, EventType } from '../models/Event';
import { RequestType } from '../models/Request';
import { IDataProvider } from './IDataProvider';
import { AsyncStorage } from 'react-native';

export class MockDataProvider implements IDataProvider {

    private userCredentialKey: string = 'userCredential';
    private mockUserCredential: string = "mockUserCredential";

    private userProfile: UserProfile = {
        Id: "1",
        Name: "Bryan Ryan O'Brien",
        Email: "throwawayacat@gmail.com",
        Hometown: "Chicago",
        Addresses: "123 Drury Lane, Far Far Away",
        OtherHometowns: "",
        NotificationSettings: [
            { AlertType: AlertType.Emergency, Enabled: true },
            { AlertType: AlertType.ParksAndRec, Enabled: false },
            { AlertType: AlertType.Traffic, Enabled: true },
            { AlertType: AlertType.Voting, Enabled: false },
            { AlertType: AlertType.School, Enabled: false }
        ]
    };

    private promise<T>(f: () => T): Promise<T> {
        return new Promise<T>((resolve) => {
            resolve(f());
        });
    }

    type(): string {
        return "MockDataProvider";
    }

    logout(): Promise<void> {
        return AsyncStorage.clear();
    }

    checkLogin(): Promise<boolean> {
        return AsyncStorage.getItem(this.userCredentialKey).then((userCredential: string | null) => {
            if (userCredential) {
                return true;
            }
            return false;
        })
    }

    createNewUser(name: string, email: string, password: string, hometown: string, address: string): Promise<boolean> {
        return AsyncStorage.setItem(this.userCredentialKey, this.mockUserCredential).then(() => {
            return true;
        });
    }

    login(email: string, password: string): Promise<boolean> {
        return AsyncStorage.setItem(this.userCredentialKey, this.mockUserCredential).then(() => {
            return true;
        });
    }
    
    getAnnouncements(): Promise<Announcement[]> {
        var date = new Date();
        var dateString = date.toISOString();
        let announcements: Announcement[] = [{
            Id: "1",
            Subject: 'Furniture Sale',
            Details: 'Starting on Jan 31st, 2019, everything is free!\nWe are going out of business so we\'re giving our stuff away!\nBurn the building after for all we care.\nWe hate the gov!\nThey tax too much\nand don\'t scare us...',
            Date: dateString
        },
        {
            Id: "2",
            Subject: 'Spanish Opera Night',
            Details: 'The rec center is hosting the marvelous St Rita. Come watch!\nShe is a 90 year old opera singer.\nWe promised her a great turnout.\nSeriously please come.\nWe\'ll pay.\nNot that much though.',
            Date: dateString
        },
        {
            Id: "3",
            Subject: 'Calzone Making Competition',
            Details: 'Can you make the calazone as good as Ben Wyatt?\n... the BEN WYATT?!?!\nThat\'s what we were told!\nTest your skills against the best at Morton\'s on 51st Ave',
            Date: dateString
        }];
        announcements = announcements.concat(announcements);
        announcements = announcements.concat(announcements);
        return this.promise(() => announcements);
    }

    getSurveyLink(): Promise<string> {
        return this.promise(() => 'https://www.google.com');
    }

    getContacts(contactType: ContactType): Promise<Contact[]> {
        let contacts: Contact[] = [];
        if (contactType == ContactType.Legislator) {
            contacts.push({
                Id: "1",
                Type: ContactType.Legislator,
                Name: 'Anthony Weiner',
                Role: 'US Senate Representative',
                RoleDescription: 'My job is to make sure that our citizens views are represented in the US Senate.',
                PhoneNumber: '1-800-244-3485',
                EmailAddress: 'big.weiner@ussenate.gov'});
        }
        else if (contactType == ContactType.MunicipalLeader) {
            contacts.push({
                Id: "2",
                Type: ContactType.MunicipalLeader,
                Name: 'Keith Pekau',
                Role: 'Mayor',
                RoleDescription: 'My job is to golf all day.',
                PhoneNumber: '1-800-123-4567',
                EmailAddress: 'bigKeithDaBest@gmail.com'
            });
        }
        else if (contactType == ContactType.School) {
            contacts.push({
                Id: "3",
                Type: ContactType.School,
                Name: 'Jim Morris',
                Role: 'Chicago High School Principal',
                RoleDescription: 'My job is to smack kids who are acting up',
                PhoneNumber: '1-800-999-9999',
                EmailAddress: 'j.morris@chicagoschools.com'
            });
        }

        contacts = contacts.concat(contacts);
        contacts = contacts.concat(contacts);
        return this.promise(() => contacts);
    }
    
    getAlerts(): Promise<Alert[]> {
        var date = new Date();
        var dateString = date.toISOString();
        let alerts: Alert[] = [{
            Id: "1",
            Topic: 'School closure',
            Type: AlertType.School,
            Date: dateString,
            Description: 'One of the students won the lottery! He\'s renting out the building to host a Friday the 13th scary movie party! Hopefully you were invited.'
        },
        {
            Id: "2",
            Topic: 'Blind birds are flying into windows',
            Type: AlertType.Emergency,
            Date: dateString,
            Description: 'Our large population of blind crows are flying into houses. Make sure you keep your windows closed! If they do get into your home, call the authorities immediately. They are mostly rabid.'
        },
        {
            Id: "3",
            Topic: 'Slam dunk contest',
            Type: AlertType.ParksAndRec,
            Date: dateString,
            Description: 'The parks department is hosting Jimmer Fridette in a dunk contest.\nThe winner gets $5000!\nIf you can dunk on an 8ft rim then you have a chance, so don\'t miss out!'
        },
        {
            Id: "4",
            Topic: 'Massive pileup on Route 4',
            Type: AlertType.Traffic | AlertType.Emergency,
            Date: dateString,
            Description: 'No one is hurt but yikes this is a bad crash. Come see the destruction!'
        },
        {
            Id: "5",
            Topic: 'Mayor Keith up for re-election',
            Type: AlertType.Voting,
            Date: dateString,
            Description: 'The best mayor in the history of Orland needs our support! Early voting starts in 18 months.'
        }];
        alerts = alerts.concat(alerts);
        return this.promise(() => alerts);
    }

    getUserProfile(): Promise<UserProfile> {
        return this.promise(() => this.userProfile);
    }

    toggleNotificationSetting(alertType: AlertType): Promise<boolean> {
        let notificationSetting: NotificationSetting = this.userProfile.NotificationSettings.find(s => s.AlertType == alertType) as NotificationSetting;
        notificationSetting.Enabled = !notificationSetting.Enabled;
        return this.promise(() => true);
    }

    getEvents(): Promise<Event[]> {
        var today = new Date();
        today.setHours(12);
        today.setMinutes(0);
        today.setSeconds(0);
        var todayString = today.toISOString();
        var tomorrow = new Date();
        tomorrow.setDate(today.getDate()+1);
        tomorrow.setHours(9);
        tomorrow.setMinutes(0);
        tomorrow.setSeconds(0);
        var tomorrowString = tomorrow.toISOString();
        var yesterday = new Date();
        yesterday.setDate(today.getDate()-1);
        yesterday.setHours(8);
        yesterday.setMinutes(0);
        yesterday.setSeconds(0);
        var yesterdayString = yesterday.toISOString();

        let events: Event[] = [{
            Id: "1",
            Name: 'Board meeting',
            Type: EventType.Political | EventType.School,
            Date: todayString,
            Description: 'We will be discussing the merits of creating a large scale petting zoo on our high school grounds over summer break.\nWe already have a generous donation from Farmer Bill of 7 zebras and 2 giraffes!\nJoin us in Conf Room A in Buidling 23 at 6 PM today to voice your opinion.'
        },
        {
            Id: "2",
            Name: 'Ice cream social',
            Type: EventType.Recreation,
            Date: tomorrowString,
            Description: 'Politics over People will be hosting an ice cream social at 9 AM tomorrow.\nIf you don\'t like coconut ice cream don\'t bother coming because we will not be supplying any other flavors.\nLocation to be announced 15 minutes before the start of the event so stay tuned!'
        },
        {
            Id: "3",
            Name: 'Apiculture career fair',
            Type: EventType.CareerServices,
            Date: yesterdayString,
            Description: 'The apiculture society is hosting a career fair at the middle school. Come all bee lovers!'
        },
        {
            Id: "4",
            Name: 'Reading moms volunteering opportunities',
            Type: EventType.Volunteering | EventType.School,
            Date: todayString,
            Description: 'Our first grade students have finally surpassed Ms Rachel\'s reading abilities. We need volunteer moms (please no dads) to come read to the children.\nEmail Ms Rachel (msRachel@email.com) with any inquiries or if you would like to help out.\nPlease keep emails to a first grade or lower reading level or she will not respond.'
        }];
        return this.promise(() => events);
    }

    submitRequest(requestType: RequestType, location: string, description: string): Promise<boolean> {
        return this.promise(() => true);
    }
}