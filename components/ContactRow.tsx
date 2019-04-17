import React from 'react';
import { Text, View } from 'react-native';
import { Divider } from 'react-native-elements';
import { Contact } from '../models/Contact';
import { Styles } from '../Styles';

export interface ContactRowProps {
  contact: Contact;
}

export class ContactRow extends React.Component<ContactRowProps> {
  constructor(props: ContactRowProps) {
    super(props);
  }

  render() {
    const { contact } = this.props;

    return (
      <View >
        <View style={Styles.appHorizontalMargin}>
          <View style={ Styles.rowFlex }>
            <Text>{ contact.Name }</Text>
            <Text style={[ Styles.leftMarginAuto ]}>{ contact.PhoneNumber }</Text>
          </View>
          <View style={ Styles.rowFlex }>
            <Text>{ contact.Role }</Text>
            <Text style={[ Styles.leftMarginAuto ]}>{ contact.EmailAddress }</Text>
          </View>
          <Text>{ contact.RoleDescription }</Text>
        </View>
        <Divider style={ Styles.dividerMargin }/>
      </View>      
    );
  }
}