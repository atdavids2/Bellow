import React from 'react';
import { Text, View } from 'react-native';
import { IDataProvider } from '../data/IDataProvider';

export interface AlertsPageProps {
  dataProvider: IDataProvider;
}

export class AlertsPage extends React.Component<AlertsPageProps> {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Alerts!</Text>
      </View>
    );
  }
}