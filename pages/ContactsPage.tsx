import React from 'react';
import { Text, View, ScrollView, Button } from 'react-native';
import { IDataProvider } from '../data/IDataProvider';
import { NavigationInjectedProps } from 'react-navigation';
import { Contact, ContactType } from '../models/Contact';
import { Styles, appMainColor } from '../styles';
import { Divider } from 'react-native-elements';



export interface ContactsPageProps {
  dataProvider: IDataProvider;
}

export class ContactsPage extends React.Component<ContactsPageProps & NavigationInjectedProps> {
 
  constructor(props: ContactsPageProps & NavigationInjectedProps) {
    super(props);

  }

  onButtonPress = (contactType: ContactType) => {
    const { dataProvider } = this.props;

    this.props.navigation.navigate('ContactDetailsPage', {
      contactType: contactType, dataProvider: dataProvider
    });
  }
  render() {
   
    return (
      <View style={[ Styles.appPageStyle ]}>
      <Text style={[ Styles.largeFont, Styles.appHorizontalMargin ]}>Contacts</Text>
      <Divider style={ Styles.dividerMargin }/>
      <View style={ Styles.surveyButton }>
          <Button
            onPress={() => this.onButtonPress(ContactType.Legislator)}
            title='Legislator'
            color={appMainColor} />
          <Button
            onPress={() => this.onButtonPress(ContactType.MunicipalLeader)}
            title='Municipal Leader'
            color={appMainColor} />
          <Button
            onPress={() => this.onButtonPress(ContactType.School)}
            title='School'
            color={appMainColor} />
          <Button
            onPress={() => this.onButtonPress(ContactType.PublicSafety)}
            title='Public Safety'
            color={appMainColor} />
          <Button
            onPress={() => this.onButtonPress(ContactType.PublicWorks)}
            title='Public Works'
            color={appMainColor} />
          <Button
            onPress={() => this.onButtonPress(ContactType.ParksAndRecreation)}
            title='Parks and Recreation'
            color={appMainColor} />
        </View>
      </View>
    );
  }
}