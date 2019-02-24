import React from 'react';
import { Text, View} from 'react-native';
import { Announcement } from '../models/Announcement';
import { Styles } from '../styles';

export class AnnouncementDetailsPage extends React.Component {

  render() {
    const announcement: Announcement = this.props.navigation.state.params.announcement;
    
    return (
      <View style={ Styles.appHorizontalMargin }>
        <Text style={[ Styles.largeFont, Styles.dividerMargin ]}>{ announcement.Subject }</Text>
        <Text style={ Styles.dividerMargin }>{ announcement.Date }</Text>
        <Text style={ Styles.dividerMargin }>{ announcement.Details }</Text>
      </View>
    );
  }
}