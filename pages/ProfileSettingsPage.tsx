import React from 'react';
import { Text, View, Switch } from 'react-native';
import { Divider } from 'react-native-elements';
import { IDataProvider } from '../data/IDataProvider';
import { UserProfile } from '../models/UserProfile';
import { AlertType } from '../models/Alert';
import { Styles, getAlertColor } from '../Styles';

export interface ProfileSettingsPageProps {
  dataProvider: IDataProvider;
}

interface ProfileSettingsPageState {
  userProfile: UserProfile;
}

export class ProfileSettingsPage extends React.Component<ProfileSettingsPageProps, ProfileSettingsPageState> {

  constructor(props: ProfileSettingsPageProps) {
    super(props);

    let userProfile: UserProfile = props.dataProvider.getUserProfile();
    this.state = {
      userProfile: userProfile
    };
  }

  toggleNotificationSetting = (alertType: AlertType) => {
    const { dataProvider } = this.props;
    const { userProfile } = this.state;
    
    let newProfile: UserProfile = {...userProfile};
    newProfile.NotificationSettings = {...userProfile.NotificationSettings}
    newProfile.NotificationSettings[alertType] = !newProfile.NotificationSettings[alertType];
    dataProvider.toggleNotificationSetting(alertType);

    this.setState({
      userProfile: newProfile
    });
    this.forceUpdate();
  }

  componentWillMount() {
    const { dataProvider } = this.props;

    this.setState({
      userProfile: dataProvider.getUserProfile()
    });
  }

  render() {
    const { userProfile } = this.state;

    return (
      userProfile ? 
      <View style={[ Styles.appPageStyle, Styles.justifyStart ]}>
        <Text style={[ Styles.largeFont, Styles.appHorizontalMargin ]}>User Settings</Text>
        <View style={ Styles.smallDividerMargin }/>
        <View style={[ Styles.rowFlex, Styles.appHorizontalMargin ]} >
          <Text>Name: </Text>
          <Text>{userProfile.Name}</Text>
        </View>
        <View style={[ Styles.rowFlex, Styles.appHorizontalMargin ]} >
          <Text>Hometown: </Text>
          <Text>{userProfile.Hometown}</Text>
        </View>
        <View style={[ Styles.rowFlex, Styles.appHorizontalMargin ]} >
          <Text>Email: </Text>
          <Text>{userProfile.Email}</Text>
        </View>
        <View style={[ Styles.rowFlex, Styles.appHorizontalMargin ]} >
          <Text>Addresses: </Text>
          <Text>{userProfile.Addresses}</Text>
        </View>
        <View style={[ Styles.rowFlex, Styles.appHorizontalMargin ]} >
          <Text>Other Hometowns: </Text>
          <Text>{userProfile.OtherHometowns}</Text>
        </View>
        <Divider style={ Styles.dividerMargin }/>
        <Text style={[ Styles.largeFont, Styles.appHorizontalMargin ]}>Notification Settings</Text>
        <View style={ Styles.smallDividerMargin } ></View>
        <View style={[ Styles.rowFlex, Styles.appHorizontalMargin, Styles.justifySpace ]} >
          <Text>Type of Notification</Text>
          <Text>On/Off</Text>
        </View>
        <View style={[ Styles.rowFlex, Styles.appHorizontalMargin, Styles.notificationSettings ]} >
          <View style={ Styles.centeredRow }>
            <View style={[ Styles.alertIndicator, {backgroundColor: getAlertColor(AlertType.Emergency)} ]} />
            <Text> Emergency</Text>
          </View>
          <Switch value={userProfile.NotificationSettings[AlertType.Emergency]} onValueChange={() => {this.toggleNotificationSetting(AlertType.Emergency)}}></Switch>
        </View>
        <View style={[ Styles.rowFlex, Styles.appHorizontalMargin, Styles.notificationSettings ]} >
          <View style={ Styles.centeredRow }>
            <View style={[ Styles.alertIndicator, {backgroundColor: getAlertColor(AlertType.ParksAndRec)} ]} />
            <Text> Parks and Rec</Text>
          </View>
          <Switch value={userProfile.NotificationSettings[AlertType.ParksAndRec]} onValueChange={() => {this.toggleNotificationSetting(AlertType.ParksAndRec)}}></Switch>
        </View>
        <View style={[ Styles.rowFlex, Styles.appHorizontalMargin, Styles.notificationSettings ]} >
          <View style={ Styles.centeredRow }>
            <View style={[ Styles.alertIndicator, {backgroundColor: getAlertColor(AlertType.Traffic)} ]} />
            <Text> Traffic</Text>
          </View>
          <Switch value={userProfile.NotificationSettings[AlertType.Traffic]} onValueChange={() => {this.toggleNotificationSetting(AlertType.Traffic)}}></Switch>
        </View>
        <View style={[ Styles.rowFlex, Styles.appHorizontalMargin, Styles.notificationSettings ]} >
          <View style={ Styles.centeredRow }>
            <View style={[ Styles.alertIndicator, {backgroundColor: getAlertColor(AlertType.Voting)} ]} />
            <Text> Voting</Text>
          </View>
          <Switch value={userProfile.NotificationSettings[AlertType.Voting]} onValueChange={() => {this.toggleNotificationSetting(AlertType.Voting)}}></Switch>
        </View>
        <View style={[ Styles.rowFlex, Styles.appHorizontalMargin, Styles.notificationSettings ]} >
          <View style={ Styles.centeredRow }>
            <View style={[ Styles.alertIndicator, {backgroundColor: getAlertColor(AlertType.School)} ]} />
            <Text> School</Text>
          </View>
          <Switch value={userProfile.NotificationSettings[AlertType.School]} onValueChange={() => {this.toggleNotificationSetting(AlertType.School)}}></Switch>
        </View>
      </View> : null
    );
  }
}