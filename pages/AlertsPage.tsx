import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Divider } from 'react-native-elements';
import { IDataProvider } from '../data/IDataProvider';
import { Alert, AlertType } from '../models/Alert';
import { AlertDetails } from '../components/AlertDetails';
import { Styles } from '../styles';

export interface AlertsPageProps {
  dataProvider: IDataProvider;
}

interface AlertsPageState {
  alerts: Alert[];
}

export class AlertsPage extends React.Component<AlertsPageProps, AlertsPageState> {

  constructor(props: AlertsPageProps) {
    super(props);

    this.state = {
      alerts: []
    };
  }

  componentWillMount() {
    const { dataProvider } = this.props;

    this.setState({
      alerts: dataProvider.getAlerts()
    });
  }

  render() {
    const { alerts } = this.state;
    let alertList = alerts.map(a => <AlertDetails
      key={a.Id}
      alert={a}
    />);

    return (
      <View style={[ Styles.appPageStyle ]}>
        <Text style={[ Styles.largeFont, Styles.appHorizontalMargin ]}>Alerts</Text>
        <Divider style={ Styles.dividerMargin }/>
        <ScrollView style={ Styles.scrollView }>
          {alertList}
        </ScrollView>
      </View>
    );
  }
}