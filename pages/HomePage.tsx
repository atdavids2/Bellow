import React from 'react';
import { Text, View, ScrollView, Button, Linking } from 'react-native';
import { Divider } from 'react-native-elements';
import { Announcement } from '../models/Announcement';
import { IDataProvider } from '../data/IDataProvider';
import { AnnouncementRow } from '../components/AnnouncementRow';
import { Styles, appMainColor } from '../Styles';
import { NavigationInjectedProps } from 'react-navigation';

export interface HomePageProps {
  dataProvider: IDataProvider;
}

interface HomePageState {
  announcements: Announcement[];
  surveyLink: string;
}

export class HomePage extends React.Component<HomePageProps & NavigationInjectedProps, HomePageState> {

  constructor(props: HomePageProps & NavigationInjectedProps) {
    super(props);

    this.state = {
      announcements: [],
      surveyLink: ''
    };
  }

  onAnnouncementPress = (announcement: Announcement) => {
    this.props.navigation.navigate('AnnouncementDetailsPage', {
      announcement: announcement
    });
  }

  openSurvey = () => {
    const { surveyLink } = this.state;
    Linking.canOpenURL(surveyLink).then(supported => {
      if (supported) {
        Linking.openURL(surveyLink);
      }
    });
  }

  componentWillMount() {
    const { dataProvider } = this.props;

    dataProvider.getAnnouncements().then(announcements => {
      this.setState({
        announcements: announcements
      });
    });
    dataProvider.getSurveyLink().then(surveyLink => {
      this.setState({
        surveyLink: surveyLink
      });
    });
  }

  render() {
    const { announcements } = this.state;
    let announcementList = announcements.map(a => <AnnouncementRow
      key={a.Id}
      announcement={a}
      onAnnouncementPress={this.onAnnouncementPress}
    />);

    return (
      <View style={[ Styles.appPageStyle ]}>
        <Text style={[ Styles.largeFont, Styles.appHorizontalMargin ]}>Announcements</Text>
        <Divider style={ Styles.dividerMargin }/>
        <ScrollView style={ Styles.scrollView }>
          {announcementList}
        </ScrollView>
        <View style={ Styles.surveyButton }>
          <Button
            onPress={this.openSurvey}
            title='Take Community Survey'
            color={appMainColor} />
        </View>
      </View>
    );
  }
}