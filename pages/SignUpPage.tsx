import React from 'react';
import { Text, View, TextInput, Button, ImageBackground } from 'react-native';
import { Styles, appMainColor } from '../Styles';
import { IDataProvider } from '../data/IDataProvider';
import { NavigationInjectedProps, Header } from 'react-navigation';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export interface SignUpPageProps {
  dataProvider: IDataProvider;
}

interface SignUpPageState {
  name: string,
  email: string,
  password: string,
  hometown: string,
  address: string,
  errorMessage: string
}

export class SignUpPage extends React.Component<SignUpPageProps & NavigationInjectedProps, SignUpPageState> {
  constructor(props: SignUpPageProps & NavigationInjectedProps) {
    super(props);

    this.state = {
      name: '',
      email: '',
      password: '',
      hometown: '',
      address: '',
      errorMessage: ''
    }
  }

  signup = () => {
    const { dataProvider } = this.props;
    const { name, email, password, hometown, address } = this.state;
    
    dataProvider.createNewUser(name, email, password, hometown, address).then(isLoggedIn => {
      if (isLoggedIn) {
        this.props.navigation.navigate('App');
      }
    }).catch((error) => {
      this.setState({
        errorMessage: error.message
      });
    });
  }

  render() {
    const { name, email, password, hometown, address, errorMessage } = this.state;

    return (
      <ImageBackground source={require('../assets/images/chicagoBackground.jpg')} style={ Styles.backgroundImage }>
        <KeyboardAwareScrollView>
          <View style={[ Styles.appPageStyle ]}>
            <View style={ Styles.largeDividerMargin } />
            <View style={[ Styles.grayBorder, Styles.appHorizontalMargin, Styles.dividerMargin, Styles.whiteBackground ]}>
              <Text style={[ Styles.extraLargeFont, Styles.appHorizontalMargin, Styles.centeredText, Styles.dividerMargin ]}>Welcome to Bello</Text>
              <View style={ Styles.dividerMargin }>
                {errorMessage ? <Text style={[ Styles.appHorizontalMargin, Styles.dividerMargin ]}>{errorMessage}</Text> : null}
                <Text style={[ Styles.appHorizontalMargin ]}>Name</Text>
                <View style={[ Styles.appHorizontalMargin, Styles.singleLineTextInputContainer ]}>
                  <TextInput
                    style={[ Styles.textInput ]}
                    onChangeText={ (text: string) => this.setState({name: text}) }
                    value={ name }
                  />
                </View>
              </View>
              <View style={ Styles.dividerMargin }>
                <Text style={[ Styles.appHorizontalMargin ]}>Email</Text>
                <View style={[ Styles.appHorizontalMargin, Styles.singleLineTextInputContainer ]}>
                  <TextInput
                    style={[ Styles.textInput ]}
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
              <View style={ Styles.dividerMargin }>
                <Text style={[ Styles.appHorizontalMargin ]}>Hometown</Text>
                <View style={[ Styles.appHorizontalMargin, Styles.singleLineTextInputContainer ]}>
                  <TextInput
                    style={[ Styles.textInput ]}
                    onChangeText={ (text: string) => this.setState({hometown: text}) }
                    value={ hometown }
                  />
                </View>
              </View>
              <View style={ Styles.dividerMargin }>
                <Text style={[ Styles.appHorizontalMargin ]}>Address</Text>
                <View style={[ Styles.appHorizontalMargin, Styles.singleLineTextInputContainer ]}>
                  <TextInput
                    style={[ Styles.textInput ]}
                    onChangeText={ (text: string) => this.setState({address: text}) }
                    value={ address }
                  />
                </View>
              </View>
              <View style= {[ Styles.rowFlex, Styles.alignCenter ]}>
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