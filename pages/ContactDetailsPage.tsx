import React from 'react';
import { Text, View} from 'react-native';
import { Contact, ContactType } from '../models/Contact';
import { Styles } from '../styles';
import { IDataProvider } from '../data/IDataProvider';

export interface ContactDetailPageProps {
  contactType: ContactType;
  dataProvider: IDataProvider;
}

interface ContactDetailState {
  contactList: Contact[];
}

export class ContactDetailsPage extends React.Component<ContactDetailPageProps, ContactDetailState> {
  constructor(props: ContactDetailPageProps) {
    super(props);

    this.state = {
      contactList: []
    }
  }

  componentWillMount() {
    const { dataProvider, contactType } = this.props;

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