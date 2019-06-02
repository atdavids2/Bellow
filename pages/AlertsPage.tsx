import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { IDataProvider } from '../data/IDataProvider';
import { Alert } from '../models/Alert';
import { AlertDetails } from '../components/AlertDetails';
import { Styles } from '../Styles';

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

    dataProvider.getAlerts().then(alerts => {
      this.setState({
        alerts: alerts
      });
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
        <View style={[ Styles.pageHeader ]}>
            <Text style={[ Styles.largeFont, Styles.appHorizontalMargin, Styles.colorBlack ]}>Alerts</Text>
          </View>
        <ScrollView style={ Styles.scrollView }>
          {alertList}
        </ScrollView>
      </View>
    );
  }
}