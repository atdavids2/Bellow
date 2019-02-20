import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Divider } from 'react-native-elements';
import { Announcement } from '../models/Announcement';
import { IDataProvider } from '../data/IDataProvider';
import { AnnouncementDetails } from '../components/Announcement';
import { Styles } from '../components/styles';

export interface HomePageProps {
  dataProvider: IDataProvider;
}

interface HomePageState {
  announcements: Announcement[];
  seeMoreSelected: boolean;
}

export class HomePage extends React.Component<HomePageProps, HomePageState> {

  constructor(props: HomePageProps) {
    super(props);

    this.state = {
      announcements: [],
      seeMoreSelected: false
    };
  }

  onSeeMorePressed = () => {
    this.setState({
      seeMoreSelected: true
    });
  }

  onAnnouncementPress = (announcement: Announcement) => {
    this.props.navigation.navigate('AnnouncementDetailsPage', {
      announcement: announcement
    });
  }

  componentWillMount() {
    const { dataProvider } = this.props;

    this.setState({
      announcements: dataProvider.getAnnouncements()
    });
  }

  render() {
    const { announcements } = this.state;
    let announcementList = announcements.slice(0, 6).map(a => <AnnouncementDetails
      key={a.Id}
      announcement={a}
      onAnnouncementPress={this.onAnnouncementPress}
    />);

    return (
      <View style={[ Styles.largeTopMargin, Styles.appBottomMargin ]}>
        <Text style={[ Styles.largeFont, Styles.horizontalMargin ]}>Announcements:</Text>
        <Divider style={ Styles.dividerMargin }/>
        <ScrollView>
          {announcementList}
        </ScrollView>
        {/*<Button
          onPress={this.onSeeMorePressed}
        title="See more" />*/}
      </View>
    );
  }
}