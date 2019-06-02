import React from 'react';
import { Text, View, TouchableOpacity, Linking, Image, ImageBackground } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';
import { RequestType } from '../models/Request';
import { Styles } from '../Styles';

export class RequestsPage extends React.Component<NavigationInjectedProps> {
 
  constructor(props: NavigationInjectedProps) {
    super(props);
  }

  openActiveRequests = () => {
    const activeRequestsLink: string = 'https://www.google.com';

    Linking.canOpenURL(activeRequestsLink).then(supported => {
      if (supported) {
        Linking.openURL(activeRequestsLink);
      }
    });
  }

  onRequestButtonPress = (requestType: RequestType) => {
    this.props.navigation.navigate('RequestDetailsPage', {
      requestType: requestType
    });
  }
  render() {
   
    return (
      <ImageBackground source={require('../assets/images/chicagoBackground.jpg')} style={ Styles.backgroundImage }>
        <View style={[ Styles.appPageStyle ]}>
          <View style={[ Styles.pageHeader ]}>
            <Text style={[ Styles.largeFont, Styles.appHorizontalMargin, Styles.colorBlack ]}>Make a Request</Text>
            <Text
              style={[ Styles.link, Styles.appHorizontalMargin ]}
              onPress={ this.openActiveRequests }>
              or check an existing request
            </Text>
          </View>
            <View style={ Styles.justifyEvenly }>
              <View style={[ Styles.rowFlex, Styles.alignCenter ]}>
                <TouchableOpacity style={ Styles.contactRequestButton } onPress={() => { this.onRequestButtonPress(RequestType.TreesAndParks)}}>
                  <Image source={require("../assets/images/TreesAndParks.png")} style={ Styles.contactRequestImage } />
                  <Text style={[ Styles.centeredRow, Styles.colorBlack ]}>Trees and Parks</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[ Styles.contactRequestButton, Styles.leftMarginAuto ]} onPress={() => { this.onRequestButtonPress(RequestType.TrafficAndVehicles)}}>
                  <Image source={require("../assets/images/TrafficAndVehicles.png")} style={ Styles.contactRequestImage } />
                  <Text style={[ Styles.centeredRow, Styles.colorBlack ]}>Traffic and Vehicles</Text>
                </TouchableOpacity>
              </View>
              <View style={[ Styles.rowFlex, Styles.alignCenter ]}>
                <TouchableOpacity style={ Styles.contactRequestButton } onPress={() => { this.onRequestButtonPress(RequestType.Streets)}}>
                  <Image source={require("../assets/images/Streets.png")} style={ Styles.contactRequestImage } />
                  <Text style={[ Styles.centeredRow, Styles.colorBlack ]}>Streets</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[ Styles.contactRequestButton, Styles.leftMarginAuto ]} onPress={() => { this.onRequestButtonPress(RequestType.FoodAndBeverages)}}>
                  <Image source={require("../assets/images/FoodAndBeverages.png")} style={ Styles.contactRequestImage } />
                  <Text style={[ Styles.centeredRow, Styles.colorBlack ]}>Food and Beverages</Text>
                </TouchableOpacity>
              </View>
              <View style={[ Styles.rowFlex, Styles.alignCenter ]}>
                <TouchableOpacity style={ Styles.contactRequestButton } onPress={() => { this.onRequestButtonPress(RequestType.Housing)}}>
                  <Image source={require("../assets/images/Housing.png")} style={ Styles.contactRequestImage } />
                  <Text style={[ Styles.centeredRow, Styles.colorBlack ]}>Housing</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[ Styles.contactRequestButton, Styles.leftMarginAuto ]} onPress={() => { this.onRequestButtonPress(RequestType.PublicConcern)}}>
                  <Image source={require("../assets/images/PublicConcern.png")} style={ Styles.contactRequestImage } />
                  <Text style={[ Styles.centeredRow, Styles.colorBlack ]}>Public Concern</Text>
                </TouchableOpacity>
              </View>
            </View>
        </View>
      </ImageBackground>
    );
  }
}