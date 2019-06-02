import React from 'react';
import { Text, View, ScrollView, TextInput, Picker, Button } from 'react-native';
import { Divider } from 'react-native-elements';
import { RequestType } from '../models/Request';
import { Styles, appMainColor } from '../Styles';
import { IDataProvider } from '../data/IDataProvider';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export interface RequestDetailsPageProps {
  dataProvider: IDataProvider;
}

interface RequestDetailsState {
  classification: RequestType,
  location: string,
  description: string
}

export class RequestDetailsPage extends React.Component<RequestDetailsPageProps, RequestDetailsState> {
  constructor(props: RequestDetailsPageProps) {
    super(props);

    this.state = {
      classification: RequestType.TreesAndParks,
      location: '',
      description: ''
    }
  }

  submitRequest = () => {
    const { dataProvider } = this.props;
    const { classification, location, description } = this.state;
    
    dataProvider.submitRequest(classification, location, description);
    this.props.navigation.goBack();
  }

  getRequestTypeString = (requestType: RequestType) => {
    switch (requestType) {
       case RequestType.TreesAndParks:
        return "Trees and parks";
      case RequestType.TrafficAndVehicles:
        return "Traffic and vehicles";
      case RequestType.Streets:
        return "Streets";
      case RequestType.FoodAndBeverages:
        return "Food and beverage";
      case RequestType.Housing:
        return "Housing";
      case RequestType.PublicConcern:
        return "Public concern";
    }
  }

  componentWillMount() {
    const classification: RequestType = this.props.navigation.state.params.requestType;

    this.setState({
      classification: classification
    });
  }

  render() {
    const { classification, location, description } = this.state;
    const requestType: RequestType = this.props.navigation.state.params.requestType;

    return (
      <KeyboardAwareScrollView>
        <View style={[ Styles.appPageStyle ]}>
          <Text style={[ Styles.largeFont, Styles.appHorizontalMargin ]}>Submit a request</Text>
          <Divider style={ Styles.dividerMargin }/>
          <ScrollView style={ Styles.scrollView }>
            <View style={ Styles.dividerMargin }>
              <Text style={[ Styles.appHorizontalMargin ]}>Classification</Text>
              <Picker
                selectedValue={ classification }
                style={[ Styles.classificationPicker ]}
                mode='dropdown'
                onValueChange={ (itemValue, itemIndex) => this.setState({ classification: itemValue }) }>
                <Picker.Item label={ this.getRequestTypeString(RequestType.TreesAndParks) } value={ RequestType.TreesAndParks } />
                <Picker.Item label={ this.getRequestTypeString(RequestType.TrafficAndVehicles) } value={ RequestType.TrafficAndVehicles } />
                <Picker.Item label={ this.getRequestTypeString(RequestType.Streets) } value={ RequestType.Streets } />
                <Picker.Item label={ this.getRequestTypeString(RequestType.FoodAndBeverages) } value={ RequestType.FoodAndBeverages } />
                <Picker.Item label={ this.getRequestTypeString(RequestType.Housing) } value={ RequestType.Housing } />
                <Picker.Item label={ this.getRequestTypeString(RequestType.PublicConcern) } value={ RequestType.PublicConcern } />
              </Picker>
            </View>
            <View style={ Styles.dividerMargin }>
              <Text style={[ Styles.appHorizontalMargin ]}>Location</Text>
              <View style={[ Styles.appHorizontalMargin, Styles.singleLineTextInputContainer ]}>
                <TextInput
                  style={[ Styles.textInput ]}
                  onChangeText={ (text: string) => this.setState({location: text}) }
                  value={ location }
                />
              </View>
            </View>
            <View style={ Styles.dividerMargin }>
              <Text style={[ Styles.appHorizontalMargin ]}>Description</Text>
              <View style={[ Styles.appHorizontalMargin, Styles.multiLineTextInputContainer ]}>
                <TextInput
                  style={[ Styles.textInput ]}
                  onChangeText={ (text: string) => this.setState({description: text}) }
                  value={ description }
                  multiline={ true }
                />
              </View>
            </View>
            <View style={ Styles.surveyButton }>
              <Button
                onPress={ this.submitRequest }
                title='Submit request'
                color={ appMainColor } />
            </View>
          </ScrollView>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}