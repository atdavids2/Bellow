import React from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import { HomePage } from './components/HomePage';
import { RequestsPage } from './components/RequestsPage';
import { CalendarPage } from './components/CalendarPage';
import { ContactsPage } from './components/ContactsPage';
import { AlertsPage } from './components/AlertsPage';
import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

let TabNavigator = createBottomTabNavigator(
  {
    HomePage: HomePage,
    RequestsPage: RequestsPage,
    CalendarPage: CalendarPage,
    ContactsPage: ContactsPage,
    AlertsPage: AlertsPage
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
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
      activeTintColor: '#fff',
      inactiveTintColor: 'gray',
      showLabel: false,
      style: {
        backgroundColor: '#f4511e'
      }
    },
  }
);

let AppNavigator = createStackNavigator(
  {
    Tabs: TabNavigator
  },
  {
    defaultNavigationOptions: {
      title: 'Chicago',
      headerStyle: {
        backgroundColor: '#f4511e'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        textAlign: 'center',
        flex: 1
      },
    }
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}