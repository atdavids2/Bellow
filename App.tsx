import React from 'react';
import { HomePage, HomePageProps } from './pages/HomePage';
import { RequestsPage } from './pages/RequestsPage';
import { RequestDetailsPage, RequestDetailsPageProps } from './pages/RequestDetailsPage';
import { CalendarPage, CalendarPageProps } from './pages/CalendarPage';
import { ContactsPage } from './pages/ContactsPage';
import { ContactDetailsPage, ContactDetailsPageProps } from './pages/ContactDetailsPage';
import { AlertsPage, AlertsPageProps } from './pages/AlertsPage';
import { AnnouncementDetailsPage } from './pages/AnnouncementDetailsPage';
import { ProfileSettingsPage, ProfileSettingsPageProps } from './pages/ProfileSettingsPage';
import { LoginPage, LoginPageProps } from './pages/LoginPage';
import { SignUpPage, SignUpPageProps } from './pages/SignUpPage';
import { AuthLoadingScreen, AuthLoadingScreenProps } from './pages/AuthLoadingScreen';
import { IDataProvider } from './data/IDataProvider';
import { MockDataProvider } from './data/MockDataProvider';
import { FirebaseDataProvider } from './data/FirebaseDataProvider';
import { Styles, appMainColor, whiteColor } from './Styles';
import { createBottomTabNavigator, createAppContainer, createStackNavigator, createSwitchNavigator, NavigationInjectedProps } from 'react-navigation';
import { TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

//let dataProvider: IDataProvider = new MockDataProvider();
let dataProvider: IDataProvider = new FirebaseDataProvider();

let TabNavigator = createBottomTabNavigator(
  {
    HomePage: (props: HomePageProps & NavigationInjectedProps) => <HomePage {...props} dataProvider={dataProvider} />,
    RequestsPage: (props: NavigationInjectedProps) => <RequestsPage {...props} />,
    CalendarPage: (props: CalendarPageProps) => <CalendarPage {...props} dataProvider={dataProvider} />,
    ContactsPage: (props: NavigationInjectedProps) => <ContactsPage {...props} />,
    AlertsPage: (props: AlertsPageProps) => <AlertsPage {...props} dataProvider={dataProvider} />
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor} : { tintColor: string }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName: string = '';
        if (routeName === 'HomePage') {
          iconName = `ios-home`;
        }
        else if (routeName === 'RequestsPage') {
          iconName = 'ios-add-circle';
        }
        else if (routeName === 'CalendarPage') {
          iconName = 'ios-calendar';
        }
        else if (routeName === 'ContactsPage') {
          iconName = 'ios-call';
        }
        else if (routeName === 'AlertsPage') {
          iconName = 'ios-warning';
        }
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: '#832406',
      inactiveTintColor: whiteColor,
      showLabel: false,
      style: {
        backgroundColor: appMainColor
      }
    },
  }
);

let AuthStack = createStackNavigator(
  {
    LoginPage: (props: LoginPageProps & NavigationInjectedProps) => <LoginPage {...props} dataProvider={dataProvider} />,
    SignUpPage: (props: SignUpPageProps & NavigationInjectedProps) => <SignUpPage {...props} dataProvider={dataProvider} />
  },
  {
    defaultNavigationOptions : {
      header: null
    }
  }
);

let AppStack = createStackNavigator(
  {
    Tabs: TabNavigator,
    HomePage: (props: HomePageProps & NavigationInjectedProps) => <HomePage {...props} dataProvider={dataProvider} />,
    RequestsPage: (props: NavigationInjectedProps) => <RequestsPage {...props} />,
    CalendarPage: (props: CalendarPageProps) => <CalendarPage {...props} dataProvider={dataProvider} />,
    ContactsPage: (props: NavigationInjectedProps) => <ContactsPage {...props} />,
    AlertsPage: (props: AlertsPageProps) => <AlertsPage {...props} dataProvider={dataProvider} />,
    AnnouncementDetailsPage: AnnouncementDetailsPage,
    ContactDetailsPage: (props: ContactDetailsPageProps) => <ContactDetailsPage {...props} dataProvider={dataProvider} />,
    RequestDetailsPage: (props: RequestDetailsPageProps) => <RequestDetailsPage {...props} dataProvider={dataProvider} />,
    ProfileSettingsPage: (props: ProfileSettingsPageProps) => <ProfileSettingsPage {...props} dataProvider={dataProvider} />
  },
  {
    defaultNavigationOptions : ({ navigation }) => ({
      headerTitle: 'Chicago',
      headerRight: (
        <TouchableOpacity onPress={() => { navigation.navigate('ProfileSettingsPage')}}>
          <Ionicons name="ios-contact" size={50} style={Styles.profileSettingsButton} />
        </TouchableOpacity>
      ),
      headerStyle: {
        backgroundColor: appMainColor
      },
      headerTintColor: whiteColor,
      headerTitleStyle: {
        fontWeight: 'bold',
        textAlign: 'center',
        flex: 1
      },
      headerTitleContainerStyle: {
        left: 0,
        right: 0
      }
    })
  }
);

const AppContainer = createAppContainer(createSwitchNavigator(
  {
    AuthLoading: (props: AuthLoadingScreenProps & NavigationInjectedProps) => <AuthLoadingScreen {...props} dataProvider={dataProvider} />,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading'
  }
));

export default class App extends React.Component {
  render() {
      return <AppContainer />;
  }
}