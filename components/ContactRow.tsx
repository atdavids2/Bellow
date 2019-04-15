import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Divider } from 'react-native-elements';
import { Contact, ContactType } from '../models/Contact';
import { Styles } from '../styles';
import { IDataProvider } from '../data/IDataProvider';

export interface ContactDetailPageProps {
  contactType: ContactType;
  dataProvider: IDataProvider;
}

interface ContactDetailState {
  contactList: Contact[]
}

export class ContactDetail extends React.Component<ContactDetailPageProps> {
  constructor(props: ContactDetailPageProps) {
    super(props);

    this.state = {
      contactList: []
    }
  }

  componentWillMount() {
    const { dataProvider } = this.props;
    const { contactType } = this.props;

    this.setState({
      contactList: dataProvider.getContacts(contactType)
    });
  }

  render() {

    return (
            <View style={Styles.appHorizontalMargin}>
            
            </View>        
    );
  }
}