import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Divider } from 'react-native-elements';
import { Event, EventType } from '../models/Event';
import { Styles, getEventColor } from '../Styles';
import { formateDateToLocaleString } from '../Utilities';

export interface EventDetailsProps {
  event: Event;
}

interface EventDetailsState {
  isDescriptionExpanded: boolean;
}

export class EventDetails extends React.Component<EventDetailsProps, EventDetailsState> {
  constructor(props: EventDetailsProps) {
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
    const { event } = this.props;
    const { isDescriptionExpanded } = this.state;

    return (
      <View>
        <View style={ Styles.dividerMargin }>
          <View style={ Styles.rowFlex }>
            <View style={ Styles.alertIndicatorSection }>
              {event.Type & EventType.Political ? <View style={[ Styles.alertIndicator, {backgroundColor: getEventColor(EventType.Political)} ]} />: null}
              {event.Type & EventType.Recreation ? <View style={[ Styles.alertIndicator, {backgroundColor: getEventColor(EventType.Recreation)} ]} />: null}
              {event.Type & EventType.School ? <View style={[ Styles.alertIndicator, {backgroundColor: getEventColor(EventType.School)} ]} />: null}
              {event.Type & EventType.CareerServices ? <View style={[ Styles.alertIndicator, {backgroundColor: getEventColor(EventType.CareerServices)} ]} />: null}
              {event.Type & EventType.Volunteering ? <View style={[ Styles.alertIndicator, {backgroundColor: getEventColor(EventType.Volunteering)} ]} />: null}
            </View>
            <TouchableOpacity onPress={() => this.toggleExpandDetails()}>
              <View style={[ Styles.columnFlex, Styles.alertDetailsSection ]}>
                <View style={ Styles.rowFlex }>
                  <Text style={ Styles.colorBlack }>{ event.Name }</Text>
                  <Text style={[ Styles.leftMarginAuto, Styles.colorBlack ]}>{ formateDateToLocaleString(event.Date) }</Text>
                </View>
                <Text style={ isDescriptionExpanded ? null: Styles.announcementDetailsHeight }>{ event.Description }</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <Divider style={ Styles.dividerMargin }/>
      </View>
    );
  }
}