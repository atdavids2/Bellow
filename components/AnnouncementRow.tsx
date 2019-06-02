import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Divider } from 'react-native-elements';
import { Announcement } from '../models/Announcement';
import { Styles } from '../Styles';
import { formateDateToLocaleString } from '../Utilities';

export interface AnnouncementRowProps {
  announcement: Announcement;
  onAnnouncementPress: (announcement: Announcement) => void;
}

export class AnnouncementRow extends React.Component<AnnouncementRowProps> {
  constructor(props: AnnouncementRowProps) {
    super(props);
  }

  render() {
    const { onAnnouncementPress, announcement } = this.props;

    return (
      <View>
        <TouchableOpacity onPress={() => onAnnouncementPress(announcement)}>
          <View style={[ Styles.appHorizontalMargin, Styles.dividerMargin ]}>
            <View style={ Styles.rowFlex }>
              <Text style={ Styles.colorBlack }>{ announcement.Subject }</Text>
              <Text style={[ Styles.leftMarginAuto, Styles.colorBlack ]}>{ formateDateToLocaleString(announcement.Date) }</Text>
            </View>
            <Text style={ Styles.announcementDetailsHeight }>{ announcement.Details }</Text>
          </View>
        </TouchableOpacity>
        <Divider style={ Styles.dividerMargin }/>
      </View>
    );
  }
}