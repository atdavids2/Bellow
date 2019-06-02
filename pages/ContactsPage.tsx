import React from 'react';
import { Text, View, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';
import { ContactType } from '../models/Contact';
import { Styles } from '../Styles';

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
      <ImageBackground source={require('../assets/images/chicagoBackground.jpg')} style={ Styles.backgroundImage }>
        <View style={[ Styles.appPageStyle ]}>
          <View style={[ Styles.pageHeader ]}>
            <Text style={[ Styles.largeFont, Styles.appHorizontalMargin, Styles.colorBlack ]}>Contacts</Text>
          </View>
          <View style={ Styles.justifyEvenly }>
          <View style={[ Styles.rowFlex, Styles.alignCenter ]}>
              <TouchableOpacity style={ Styles.contactRequestButton } onPress={() => { this.onButtonPress(ContactType.Legislator)}}>
                <Image source={require("../assets/images/Legislators.png")} style={ Styles.contactRequestImage } />
                <Text style={[ Styles.centeredRow, Styles.colorBlack ]}>Legislators</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[ Styles.contactRequestButton, Styles.leftMarginAuto ]} onPress={() => { this.onButtonPress(ContactType.MunicipalLeader)}}>
                <Image source={require("../assets/images/MunicipalLeaders.png")} style={ Styles.contactRequestImage } />
                <Text style={[ Styles.centeredRow, Styles.colorBlack ]}>Municipal Leaders</Text>
              </TouchableOpacity>
            </View>
            <View style={[ Styles.rowFlex, Styles.alignCenter ]}>
              <TouchableOpacity style={ Styles.contactRequestButton } onPress={() => { this.onButtonPress(ContactType.School)}}>
                <Image source={require("../assets/images/Schools.png")} style={ Styles.contactRequestImage } />
                <Text style={[ Styles.centeredRow, Styles.colorBlack ]}>Schools</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[ Styles.contactRequestButton, Styles.leftMarginAuto ]} onPress={() => { this.onButtonPress(ContactType.PublicSafety)}}>
                <Image source={require("../assets/images/PublicSafety.png")} style={ Styles.contactRequestImage } />
                <Text style={[ Styles.centeredRow, Styles.colorBlack ]}>Public Safety</Text>
              </TouchableOpacity>
            </View>
            <View style={[ Styles.rowFlex, Styles.alignCenter ]}>
              <TouchableOpacity style={ Styles.contactRequestButton } onPress={() => { this.onButtonPress(ContactType.ParksAndRecreation)}}>
                <Image source={require("../assets/images/ParksAndRec.png")} style={ Styles.contactRequestImage } />
                <Text style={[ Styles.centeredRow, Styles.colorBlack ]}>Parks and Rec</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[ Styles.contactRequestButton, Styles.leftMarginAuto ]} onPress={() => { this.onButtonPress(ContactType.PublicWorks)}}>
                <Image source={require("../assets/images/PublicWorks.png")} style={ Styles.contactRequestImage } />
                <Text style={[ Styles.centeredRow, Styles.colorBlack ]}>Public Works</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    );
  }
}