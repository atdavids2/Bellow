import React from 'react';
import { Text, View } from 'react-native';
import { IDataProvider } from '../data/IDataProvider';

export interface CalendarPageProps {
  dataProvider: IDataProvider;
}

export class CalendarPage extends React.Component<CalendarPageProps> {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Calendar!</Text>
      </View>
    );
  }
}