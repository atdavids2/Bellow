import React from 'react';
import { Text, View } from 'react-native';
import { IDataProvider } from '../data/IDataProvider';

export interface ContactsPageProps {
  dataProvider: IDataProvider;
}

export class ContactsPage extends React.Component<ContactsPageProps> {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Contacts!</Text>
      </View>
    );
  }
}