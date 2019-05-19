import { Announcement } from '../models/Announcement'
import { Contact, ContactType } from '../models/Contact'
import { Alert, AlertType } from '../models/Alert';
import { UserProfile, NotificationSetting } from '../models/UserProfile';
import { Event, EventType } from '../models/Event';
import { Request, RequestType } from '../models/Request';
import { IDataProvider } from './IDataProvider';
import * as firebase from 'firebase';
import { secrets } from "../secrets";

export class FirebaseDataProvider implements IDataProvider {

    firebaseConfig = {
        apiKey: secrets.apiKey,
        authDomain: secrets.authDomain,
        databaseURL: secrets.databaseURL,
        projectId: secrets.projectId,
        storageBucket: secrets.storageBucket,
        messagingSenderId: secrets.messagingSenderId,
        appId: secrets.appId
    };
    firebaseApp = firebase.initializeApp(this.firebaseConfig);
    firebaseDB = this.firebaseApp.database();

    private promise<T>(f: () => T): Promise<T> {
        return new Promise<T>((resolve) => {
            resolve(f());
        });
    }
    
    getAnnouncements(): Promise<Announcement[]> {
        let announcementRef = this.firebaseDB.ref("/Announcement");
        return announcementRef.once("value").then(
            snapshot => {
                let result: Announcement[] = [];
                snapshot.forEach(function(child) {
                    let obj = child.val();
                    obj.Id = child.key;
                    result.push(obj);
                });
                return result;
            }
        );
    }

    getSurveyLink(): Promise<string> {
        return this.promise(() => 'https://www.google.com');;
    }

    getContacts(contactType: ContactType): Promise<Contact[]> {
        let contactRef = this.firebaseDB.ref("/Contact");
        return contactRef.orderByChild("Type").equalTo(contactType).once("value").then(
            snapshot => {
                let result: Contact[] = [];
                snapshot.forEach(function(child) {
                    let obj = child.val();
                    obj.Id = child.key;
                    result.push(obj);
                });
                return result;
            }
        );
    }
    
    getAlerts(): Promise<Alert[]> {
        let alertRef = this.firebaseDB.ref("/Alert");
        return alertRef.once("value").then(
            snapshot => {
                let result: Alert[] = [];
                snapshot.forEach(function(child) {
                    let obj = child.val();
                    obj.Id = child.key;
                    result.push(obj);
                });
                return result;
            }
        );
    }

    getUserProfile(): Promise<UserProfile> {
        let userProfileRef = this.firebaseDB.ref("/UserProfile/1");
        return userProfileRef.once("value").then(
            snapshot => {
                if (snapshot.val()) {
                    let obj = snapshot.val();
                    obj.Id = snapshot.key;
                    let notificationSettings: NotificationSetting[] = [];
                    Object.keys(obj.NotificationSettings).forEach(alertType => {
                        notificationSettings.push({ AlertType: parseInt(alertType), Enabled: obj.NotificationSettings[alertType] })
                    });
                    obj.NotificationSettings = notificationSettings;
                    return obj;
                }
            }
        );
    }

    toggleNotificationSetting(alertType: AlertType, enabled: boolean): Promise<boolean> {
        let userProfileRef = this.firebaseDB.ref("/UserProfile/1");
        userProfileRef.child('/NotificationSettings/' + alertType.toString()).set(enabled);
        return this.promise(() => true);
    }

    getEvents(): Promise<Event[]> {
        let eventRef = this.firebaseDB.ref("/Event");
        return eventRef.once("value").then(
            snapshot => {
                let result: Event[] = [];
                snapshot.forEach(function(child) {
                    let obj = child.val();
                    obj.Id = child.key;
                    result.push(obj);
                });
                return result;
            }
        );
    }

    submitRequest(requestType: RequestType, location: string, description: string): Promise<boolean> {
        let date: Date = new Date();
        let newRequest: Request = {
            RequestType: requestType,
            Location: location,
            Description: description,
            Date: date.toISOString()
        };
    
        let requestRef = this.firebaseDB.ref("/Request");
        var newPostKey = requestRef.push().key;
        requestRef.child('/' + newPostKey).set(newRequest);
        return this.promise(() => true);
    }
}