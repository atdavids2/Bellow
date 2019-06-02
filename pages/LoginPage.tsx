import React from 'react';
import { Text, View, TextInput, Button, ImageBackground } from 'react-native';
import { Styles, appMainColor } from '../Styles';
import { IDataProvider } from '../data/IDataProvider';
import { NavigationInjectedProps } from 'react-navigation';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export interface LoginPageProps {
  dataProvider: IDataProvider;
}

interface LoginPageState {
  email: string,
  password: string,
  errorMessage: string
}

export class LoginPage extends React.Component<LoginPageProps & NavigationInjectedProps, LoginPageState> {
  constructor(props: LoginPageProps & NavigationInjectedProps) {
    super(props);

    this.state = {
      email: '',
      password: '',
      errorMessage: ''
    }
  }

  login = async () => {
    const { dataProvider } = this.props;
    const { email, password } = this.state;
    
    dataProvider.login(email, password).then(isLoggedIn => {
      if (isLoggedIn) {
        this.props.navigation.navigate('App');
      }
    }).catch((error) => {
      this.setState({
        errorMessage: error.message
      });
    });
  }

  signup = () => {
    this.props.navigation.navigate('SignUpPage');
  }

  render() {
    const { email, password, errorMessage } = this.state;

    return (
      <ImageBackground source={require('../assets/images/chicagoBackground.jpg')} style={ Styles.backgroundImage }>
        <KeyboardAwareScrollView>
          <View style={[ Styles.appPageStyle ]}>
            <View style={ Styles.largeDividerMargin } />
            <View style={[ Styles.grayBorder, Styles.appHorizontalMargin, Styles.dividerMargin, Styles.whiteBackground ]}>
              <Text style={[ Styles.extraLargeFont, Styles.appHorizontalMargin, Styles.centeredText, Styles.dividerMargin ]}>Welcome to Bello</Text>
              <View style={ Styles.dividerMargin }>
                {errorMessage ? <Text style={[ Styles.appHorizontalMargin, Styles.dividerMargin ]}>{errorMessage}</Text> : null}
                <Text style={[ Styles.appHorizontalMargin ]}>Email</Text>
                <View style={[ Styles.appHorizontalMargin, Styles.singleLineTextInputContainer ]}>
                  <TextInput
                    style={[ Styles.appHorizontalMargin, Styles.textInput ]}
                    onChangeText={ (text: string) => this.setState({email: text}) }
                    value={ email }
                  />
                </View>
              </View>
              <View style={ Styles.dividerMargin }>
                <Text style={[ Styles.appHorizontalMargin ]}>Password</Text>
                <View style={[ Styles.appHorizontalMargin, Styles.singleLineTextInputContainer ]}>
                  <TextInput
                    style={[ Styles.textInput ]}
                    onChangeText={ (text: string) => this.setState({password: text}) }
                    value={ password }
                    secureTextEntry={ true }
                  />
                </View>
              </View>
              <View style= {[ Styles.rowFlex, Styles.alignCenter ]}>
                <View style={ Styles.loginButton }>
                  <Button
                    onPress={ this.login }
                    title='Login'
                    color={ appMainColor } />
                </View>
                <View style={ Styles.loginButton }>
                  <Button
                    onPress={ this.signup }
                    title='Sign Up'
                    color={ appMainColor } />
                </View>
              </View>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </ImageBackground>
    );
  }
}