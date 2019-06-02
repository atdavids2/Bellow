import React from 'react';
import { Text, View} from 'react-native';
import { Announcement } from '../models/Announcement';
import { Styles } from '../Styles';
import { formateDateToLocaleString } from '../Utilities';

export class AnnouncementDetailsPage extends React.Component {

  render() {
    const announcement: Announcement = this.props.navigation.state.params.announcement;
    
    return (
      <View style={ Styles.appPageStyle }>
        <View style={[ Styles.pageHeader ]}>
            <Text style={[ Styles.largeFont, Styles.appHorizontalMargin, Styles.colorBlack ]}>{ announcement.Subject }</Text>
          </View>
        <Text style={[ Styles.dividerMargin, Styles.appHorizontalMargin ]}>{ formateDateToLocaleString(announcement.Date) }</Text>
        <Text style={[ Styles.dividerMargin, Styles.appHorizontalMargin ]}>{ announcement.Details }</Text>
      </View>
    );
  }
}