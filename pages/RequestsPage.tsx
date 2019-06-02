import React from 'react';
import { Text, View, TouchableOpacity, Linking, Image } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';
import { RequestType } from '../models/Request';
import { Styles } from '../Styles';
import { Divider } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';

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
      <View style={[ Styles.appPageStyle ]}>
        <Text style={[ Styles.largeFont, Styles.appHorizontalMargin ]}>Requests</Text>
        <Text
          style={[ Styles.link, Styles.appHorizontalMargin ]}
          onPress={ this.openActiveRequests }>
          or check an existing request
        </Text>
        <Divider style={ Styles.dividerMargin }/>
        <View style={ Styles.contactButtonRow }>
          <TouchableOpacity style={ Styles.contactButton } onPress={() => { this.onRequestButtonPress(RequestType.TreesAndParks)}}>
            <Image source={require("../assets/images/TreesAndParks.png")} style={ Styles.pngImageStyle } />
            <Text style={ Styles.centeredRow }>Trees and parks</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[ Styles.contactButton, Styles.leftMarginAuto ]} onPress={() => { this.onRequestButtonPress(RequestType.TrafficAndVehicles)}}>
            <Ionicons name="ios-car" size={50} style={ Styles.contactButtonImage } />
            <Text style={ Styles.centeredRow }>Traffic and vehicles</Text>
          </TouchableOpacity>
        </View>
        <View style={ Styles.contactButtonRow }>
          <TouchableOpacity style={ Styles.contactButton } onPress={() => { this.onRequestButtonPress(RequestType.Streets)}}>
            <Ionicons name="ios-pause" size={50} style={ Styles.contactButtonImage } />
            <Text style={ Styles.centeredRow }>Streets</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[ Styles.contactButton, Styles.leftMarginAuto ]} onPress={() => { this.onRequestButtonPress(RequestType.FoodAndBeverages)}}>
            <Ionicons name="ios-pizza" size={50} style={ Styles.contactButtonImage } />
            <Text style={ Styles.centeredRow }>Food and beverages</Text>
          </TouchableOpacity>
        </View>
        <View style={ Styles.contactButtonRow }>
          <TouchableOpacity style={ Styles.contactButton } onPress={() => { this.onRequestButtonPress(RequestType.Housing)}}>
            <Ionicons name="ios-home" size={50} style={ Styles.contactButtonImage } />
            <Text style={ Styles.centeredRow }>Housing</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[ Styles.contactButton, Styles.leftMarginAuto ]} onPress={() => { this.onRequestButtonPress(RequestType.PublicConcern)}}>
            <Ionicons name="ios-information" size={50} style={ Styles.contactButtonImage } />
            <Text style={ Styles.centeredRow }>Public concern</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}