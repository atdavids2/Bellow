import React from 'react';
import { Text, View, Switch, Button } from 'react-native';
import { Divider } from 'react-native-elements';
import { IDataProvider } from '../data/IDataProvider';
import { UserProfile, NotificationSetting } from '../models/UserProfile';
import { AlertType } from '../models/Alert';
import { Styles, getAlertColor, appMainColor } from '../Styles';

export interface ProfileSettingsPageProps {
  dataProvider: IDataProvider;
}

interface ProfileSettingsPageState {
  userProfile: UserProfile;
}

export class ProfileSettingsPage extends React.Component<ProfileSettingsPageProps, ProfileSettingsPageState> {

  constructor(props: ProfileSettingsPageProps) {
    super(props);

    this.state = {
      userProfile: {
        Id: "",
        Name: "",
        Email: "",
        Hometown: "",
        Addresses: "",
        OtherHometowns: "",
        NotificationSettings: [
          { AlertType: AlertType.Emergency, Enabled: false },
          { AlertType: AlertType.ParksAndRec, Enabled: false },
          { AlertType: AlertType.Traffic, Enabled: false },
          { AlertType: AlertType.Voting, Enabled: false },
          { AlertType: AlertType.School, Enabled: false }
        ]
      }
    };
  }

  toggleNotificationSetting = (alertType: AlertType) => {
    const { dataProvider } = this.props;
    const { userProfile } = this.state;
    
    let newProfile: UserProfile = {...userProfile};
    newProfile.NotificationSettings = userProfile.NotificationSettings.map(s => ({...s}));
    let newValue: NotificationSetting = newProfile.NotificationSettings.find(s => s.AlertType == alertType) as NotificationSetting;
    newValue.Enabled = !newValue.Enabled;
    dataProvider.toggleNotificationSetting(alertType, newValue.Enabled);

    this.setState({
      userProfile: newProfile
    });
    this.forceUpdate();
  }

  signout = async () => {
    const { dataProvider } = this.props;

    dataProvider.logout().then(() => {
      this.props.navigation.navigate('AuthLoading');
    });
  }

  componentWillMount() {
    const { dataProvider } = this.props;

    dataProvider.getUserProfile().then(userProfile => {
      this.setState({
        userProfile: userProfile
      });
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
          <Switch value={(userProfile.NotificationSettings.find(s => s.AlertType == AlertType.Emergency) as NotificationSetting).Enabled} onValueChange={() => {this.toggleNotificationSetting(AlertType.Emergency)}}></Switch>
        </View>
        <View style={[ Styles.rowFlex, Styles.appHorizontalMargin, Styles.notificationSettings ]} >
          <View style={ Styles.centeredRow }>
            <View style={[ Styles.alertIndicator, {backgroundColor: getAlertColor(AlertType.ParksAndRec)} ]} />
            <Text> Parks and Rec</Text>
          </View>
          <Switch value={(userProfile.NotificationSettings.find(s => s.AlertType == AlertType.ParksAndRec) as NotificationSetting).Enabled} onValueChange={() => {this.toggleNotificationSetting(AlertType.ParksAndRec)}}></Switch>
        </View>
        <View style={[ Styles.rowFlex, Styles.appHorizontalMargin, Styles.notificationSettings ]} >
          <View style={ Styles.centeredRow }>
            <View style={[ Styles.alertIndicator, {backgroundColor: getAlertColor(AlertType.Traffic)} ]} />
            <Text> Traffic</Text>
          </View>
          <Switch value={(userProfile.NotificationSettings.find(s => s.AlertType == AlertType.Traffic) as NotificationSetting).Enabled} onValueChange={() => {this.toggleNotificationSetting(AlertType.Traffic)}}></Switch>
        </View>
        <View style={[ Styles.rowFlex, Styles.appHorizontalMargin, Styles.notificationSettings ]} >
          <View style={ Styles.centeredRow }>
            <View style={[ Styles.alertIndicator, {backgroundColor: getAlertColor(AlertType.Voting)} ]} />
            <Text> Voting</Text>
          </View>
          <Switch value={(userProfile.NotificationSettings.find(s => s.AlertType == AlertType.Voting) as NotificationSetting).Enabled} onValueChange={() => {this.toggleNotificationSetting(AlertType.Voting)}}></Switch>
        </View>
        <View style={[ Styles.rowFlex, Styles.appHorizontalMargin, Styles.notificationSettings ]} >
          <View style={ Styles.centeredRow }>
            <View style={[ Styles.alertIndicator, {backgroundColor: getAlertColor(AlertType.School)} ]} />
            <Text> School</Text>
          </View>
          <Switch value={(userProfile.NotificationSettings.find(s => s.AlertType == AlertType.School) as NotificationSetting).Enabled} onValueChange={() => {this.toggleNotificationSetting(AlertType.School)}}></Switch>
        </View>
        <Divider style={ Styles.dividerMargin }/>
        <View style={[ Styles.loginButton, Styles.alignCenter ]}>
          <Button
            onPress={ this.signout }
            title='Sign Out'
            color={ appMainColor } />
        </View>
      </View> : null
    );
  }
}