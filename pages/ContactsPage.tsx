import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';
import { ContactType } from '../models/Contact';
import { Styles } from '../Styles';
import { Divider } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';

export class ContactsPage extends React.Component<NavigationInjectedProps> {
 
  constructor(props: NavigationInjectedProps) {
    super(props);
  }

  onButtonPress = (contactType: ContactType) => {
    this.props.navigation.navigate('ContactDetailsPage', {
      contactType: contactType
    });
  }
  render() {
   
    return (
      <View style={[ Styles.appPageStyle ]}>
        <Text style={[ Styles.largeFont, Styles.appHorizontalMargin ]}>Contacts</Text>
        <Divider style={ Styles.dividerMargin }/>
        <View style={ Styles.contactButtonRow }>
          <TouchableOpacity style={ Styles.contactButton } onPress={() => { this.onButtonPress(ContactType.Legislator)}}>
            <Ionicons name="ios-hand" size={50} style={ Styles.contactButtonImage } />
            <Text style={ Styles.centeredRow }>Legislators</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[ Styles.contactButton, Styles.leftMarginAuto ]} onPress={() => { this.onButtonPress(ContactType.MunicipalLeader)}}>
            <Ionicons name="ios-person" size={50} style={ Styles.contactButtonImage } />
            <Text style={ Styles.centeredRow }>Municpal leaders</Text>
          </TouchableOpacity>
        </View>
        <View style={ Styles.contactButtonRow }>
          <TouchableOpacity style={ Styles.contactButton } onPress={() => { this.onButtonPress(ContactType.School)}}>
            <Ionicons name="ios-book" size={50} style={ Styles.contactButtonImage } />
            <Text style={ Styles.centeredRow }>Schools</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[ Styles.contactButton, Styles.leftMarginAuto ]} onPress={() => { this.onButtonPress(ContactType.PublicSafety)}}>
            <Ionicons name="ios-warning" size={50} style={ Styles.contactButtonImage } />
            <Text style={ Styles.centeredRow }>Public safety</Text>
          </TouchableOpacity>
        </View>
        <View style={ Styles.contactButtonRow }>
          <TouchableOpacity style={ Styles.contactButton } onPress={() => { this.onButtonPress(ContactType.ParksAndRecreation)}}>
            <Ionicons name="ios-basketball" size={50} style={ Styles.contactButtonImage } />
            <Text style={ Styles.centeredRow }>Parks and rec</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[ Styles.contactButton, Styles.leftMarginAuto ]} onPress={() => { this.onButtonPress(ContactType.PublicWorks)}}>
            <Ionicons name="ios-hammer" size={50} style={ Styles.contactButtonImage } />
            <Text style={ Styles.centeredRow }>Public works</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}