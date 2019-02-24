import React from 'react';
import { HomePage, HomePageProps } from './pages/HomePage';
import { RequestsPage, RequestsPageProps } from './pages/RequestsPage';
import { CalendarPage, CalendarPageProps } from './pages/CalendarPage';
import { ContactsPage, ContactsPageProps } from './pages/ContactsPage';
import { AlertsPage, AlertsPageProps } from './pages/AlertsPage';
import { AnnouncementDetailsPage } from './pages/AnnouncementDetailsPage';
import { IDataProvider } from './data/IDataProvider';
import { MockDataProvider } from './data/MockDataProvider';
import { appMainColor, whiteColor, grayColor } from './styles';
import { createBottomTabNavigator, createAppContainer, createStackNavigator, NavigationInjectedProps } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

let dataProvider: IDataProvider = new MockDataProvider();

let TabNavigator = createBottomTabNavigator(
  {
    HomePage: (props: HomePageProps & NavigationInjectedProps) => <HomePage {...props} dataProvider={dataProvider} />,
    RequestsPage: (props: RequestsPageProps) => <RequestsPage {...props} dataProvider={dataProvider} />,
    CalendarPage: (props: CalendarPageProps) => <CalendarPage {...props} dataProvider={dataProvider} />,
    ContactsPage: (props: ContactsPageProps) => <ContactsPage {...props} dataProvider={dataProvider} />,
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
      activeTintColor: whiteColor,
      inactiveTintColor: grayColor,
      showLabel: false,
      style: {
        backgroundColor: appMainColor
      }
    },
  }
);

let AppNavigator = createStackNavigator(
  {
    Tabs: TabNavigator,
    HomePage: (props: HomePageProps & NavigationInjectedProps) => <HomePage {...props} dataProvider={dataProvider} />,
    RequestsPage: (props: RequestsPageProps) => <RequestsPage {...props} dataProvider={dataProvider} />,
    CalendarPage: (props: CalendarPageProps) => <CalendarPage {...props} dataProvider={dataProvider} />,
    ContactsPage: (props: ContactsPageProps) => <ContactsPage {...props} dataProvider={dataProvider} />,
    AlertsPage: (props: AlertsPageProps) => <AlertsPage {...props} dataProvider={dataProvider} />,
    AnnouncementDetailsPage: AnnouncementDetailsPage
  },
  {
    defaultNavigationOptions: {
      headerTitle: 'Chicago',
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
        left: 0
      }
    }
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}