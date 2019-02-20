import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Divider } from 'react-native-elements';
import { Announcement } from '../models/Announcement';
import { Styles } from './styles';

export interface AnnouncementProps {
  announcement: Announcement;
  onAnnouncementPress: (announcement: Announcement) => void;
}

export class AnnouncementDetails extends React.Component<AnnouncementProps> {
  constructor(props: AnnouncementProps) {
    super(props);
  }

  render() {
    const { onAnnouncementPress, announcement } = this.props;

    return (
      <View>
        <TouchableOpacity onPress={() => onAnnouncementPress(announcement)}>
          <View>
            <View style={[ Styles.horizontalMargin, Styles.rowFlex ]}>
              <Text>{ announcement.Subject }</Text>
              <Text style={[ Styles.leftMarginAuto, Styles.horizontalMargin ]}>{ announcement.Date }</Text>
            </View>
            <Text style={ Styles.horizontalMargin }>{ announcement.Details }</Text>
          </View>
        </TouchableOpacity>
        <Divider style={ Styles.dividerMargin }/>
      </View>
    );
  }
}