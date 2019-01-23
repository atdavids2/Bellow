import React from 'react';
import { Text, View} from 'react-native';
import { Divider } from 'react-native-elements';
import { Announcement } from '../models/Announcement';
import { Styles } from './styles';

export interface Props {
  announcement: Announcement;
}

interface State {
  enthusiasmLevel: number;
}

export class AnnouncementDetails extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <View>
        <View style={[ Styles.horizontalMargin, Styles.rowFlex, Styles.dividerTopMargin ]}>
          <Text>{ this.props.announcement.Subject }</Text>
          <Text style={[ Styles.leftMarginAuto, Styles.horizontalMargin ]}>{ this.props.announcement.Date }</Text>
        </View>
        <Text style={ Styles.horizontalMargin }>{ this.props.announcement.Details }</Text>
        <Divider style={ Styles.dividerMargin }/>
      </View>
    );
  }
}