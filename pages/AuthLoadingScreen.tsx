import React from 'react';
import { ActivityIndicator, StatusBar, View } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';
import { IDataProvider } from '../data/IDataProvider';
import { FirebaseDataProvider } from '../data/FirebaseDataProvider';
import { MockDataProvider } from '../data/MockDataProvider';
import { Styles } from '../Styles';

export interface AuthLoadingScreenProps {
  dataProvider: IDataProvider;
}

export class AuthLoadingScreen extends React.Component<AuthLoadingScreenProps & NavigationInjectedProps> {
  constructor(props: AuthLoadingScreenProps & NavigationInjectedProps) {
    super(props);
    this.isUserLoggedIn();
  }
  
  isUserLoggedIn = () => {
    const { dataProvider } = this.props;

    if (dataProvider.type() === "FirebaseDataProvider") {
      let fdp = dataProvider as FirebaseDataProvider;
      fdp.firebaseApp.auth().onIdTokenChanged((user: firebase.User | null) => {
        this.props.navigation.navigate(user ? 'App' : 'Auth');
      })
    }
    else {
      let mdp = dataProvider as MockDataProvider;
      mdp.checkLogin().then((isLoggedIn: boolean) => {
        this.props.navigation.navigate(isLoggedIn ? 'App' : 'Auth');
      });
    }
  };

  render() {
    return (
      <View style={ Styles.largeDividerMargin }>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}