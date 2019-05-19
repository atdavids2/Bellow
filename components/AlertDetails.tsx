import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Divider } from 'react-native-elements';
import { Alert, AlertType } from '../models/Alert';
import { Styles, getAlertColor } from '../Styles';
import { formateDateToLocaleString } from '../Utilities';

export interface AlertDetailsProps {
  alert: Alert;
}

interface AlertDetailsState {
  isDescriptionExpanded: boolean;
}

export class AlertDetails extends React.Component<AlertDetailsProps, AlertDetailsState> {
  constructor(props: AlertDetailsProps) {
    super(props);

    this.state = {
      isDescriptionExpanded: false
    };
  }

  toggleExpandDetails = () => {
    const { isDescriptionExpanded } = this.state;

    this.setState({
      isDescriptionExpanded: !isDescriptionExpanded
    })
  }

  render() {
    const { alert } = this.props;
    const { isDescriptionExpanded } = this.state;

    return (
      <View>
        <View>
          <View style={ Styles.rowFlex }>
            <View style={ Styles.alertIndicatorSection }>
              {alert.Type & AlertType.Emergency ? <View style={[ Styles.alertIndicator, {backgroundColor: getAlertColor(AlertType.Emergency)} ]} />: null}
              {alert.Type & AlertType.School ? <View style={[ Styles.alertIndicator, {backgroundColor: getAlertColor(AlertType.School)} ]} />: null}
              {alert.Type & AlertType.ParksAndRec ? <View style={[ Styles.alertIndicator, {backgroundColor: getAlertColor(AlertType.ParksAndRec)} ]} />: null}
              {alert.Type & AlertType.Traffic ? <View style={[ Styles.alertIndicator, {backgroundColor: getAlertColor(AlertType.Traffic)} ]} />: null}
              {alert.Type & AlertType.Voting ? <View style={[ Styles.alertIndicator, {backgroundColor: getAlertColor(AlertType.Voting)} ]} />: null}
            </View>
            <TouchableOpacity onPress={() => this.toggleExpandDetails()}>
              <View style={[ Styles.columnFlex, Styles.alertDetailsSection ]}>
                <View style={ Styles.rowFlex }>
                  <Text>{ alert.Topic }</Text>
                  <Text style={[ Styles.leftMarginAuto ]}>{ formateDateToLocaleString(alert.Date) }</Text>
                </View>
                <Text style={ isDescriptionExpanded ? null: Styles.announcementDetailsHeight }>{ alert.Description }</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <Divider style={ Styles.dividerMargin }/>
      </View>
    );
  }
}