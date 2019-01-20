import React from 'react';
import { Text, View } from 'react-native';
import { Announcement } from '../models/Announcement';
import { IDataProvider } from '../data/IDataProvider';
import { MockDataProvider } from '../data/MockDataProvider';

let dataProvider: IDataProvider = new MockDataProvider();
let announcements: Announcement[] = dataProvider.getAnnouncements();

export class Home extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>{announcements[0].Subject}</Text>
        <Text>{announcements[0].Details}</Text>
      </View>
    );
  }
}