import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import { Divider } from 'react-native-elements';
import { Calendar, DateObject } from 'react-native-calendars';
import { IDataProvider } from '../data/IDataProvider';
import { Event } from '../models/Event';
import { EventDetails } from '../components/EventDetails';
import { Styles, calendarTheme } from '../styles';

export interface CalendarPageProps {
  dataProvider: IDataProvider;
}

interface CalendarPageState {
  events: Event[],
  selectedDate: Date,
  markedDates: any
};

export class CalendarPage extends React.Component<CalendarPageProps, CalendarPageState> {

  constructor(props: CalendarPageProps) {
    super(props);
    let today: Date = new Date();
    let month = '' + (today.getMonth() + 1);
    let day = '' + today.getDate();
    let year = today.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    let dateStr = [year, month, day].join('-');

    this.state = {
      events: [],
      selectedDate: today,
      markedDates: {[dateStr]: {selected: true}}
    };
  }

  onDaySelected = (day: DateObject) => {

    this.setState({
      selectedDate: new Date(day.year, day.month-1, day.day),
      markedDates: {[day.dateString]: {selected: true}}
    });
  }

  componentWillMount() {
    const { dataProvider } = this.props;

    this.setState({
      events: dataProvider.getEvents()
    });
  }
  
  render() {
    const { events, selectedDate, markedDates } = this.state;

    let visibleEvents = events.filter(function(e) {
      return (e.Date.getFullYear() === selectedDate.getFullYear()
        && e.Date.getMonth() === selectedDate.getMonth() 
        && e.Date.getDate() === selectedDate.getDate());
    });

    let eventList = visibleEvents.map(e => <EventDetails 
      key={e.Id} 
      event={e} 
    />);

    return (
      <View style={ Styles.appPageStyle }>
        <Calendar
          style={[ Styles.appHorizontalMargin, Styles.calendar ]}
          theme={ calendarTheme }
          current={selectedDate}
          markedDates={markedDates}
          onDayPress={(day) => this.onDaySelected(day)} />
        <Divider style={ Styles.dividerMargin }/>
        <Text style={[ Styles.appHorizontalMargin, Styles.mediumFont ]}>{selectedDate.toDateString()}</Text>
        <Divider style={ Styles.dividerMargin }/>
        <ScrollView style={ Styles.scrollView }>
          {eventList}
        </ScrollView>
      </View>
    );
  }
}