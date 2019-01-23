import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Divider } from 'react-native-elements';
import { Announcement } from '../models/Announcement';
import { IDataProvider } from '../data/IDataProvider';
import { MockDataProvider } from '../data/MockDataProvider';
import { AnnouncementDetails } from './Announcement';
import { Styles } from './styles';

let dataProvider: IDataProvider = new MockDataProvider();
let announcements: Announcement[] = dataProvider.getAnnouncements();

export class HomePage extends React.Component {
  announcementDetails = announcements.map(a => <AnnouncementDetails key={a.Id} announcement={a} />);
  render() {
    return (
      <View style={[ Styles.largeTopMargin, Styles.appBottomMargin ]}>
        <Text style={[ Styles.largeFont, Styles.horizontalMargin ]}>Announcements:</Text>
        <Divider style={ Styles.dividerMargin }/>
        <ScrollView>
          {this.announcementDetails}
          {this.announcementDetails}
          {this.announcementDetails}
          {this.announcementDetails}
        </ScrollView>
      </View>
    );
  }
}