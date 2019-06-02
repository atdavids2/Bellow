import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import { Divider } from 'react-native-elements';
import { Calendar, DateObject } from 'react-native-calendars';
import { IDataProvider } from '../data/IDataProvider';
import { Event, EventType } from '../models/Event';
import { EventDetails } from '../components/EventDetails';
import { Styles, calendarTheme, getEventColor } from '../Styles';

export interface CalendarPageProps {
  dataProvider: IDataProvider;
}

interface CalendarPageState {
  events: Event[],
  selectedDate: Date,
  markedDates: any,
  eventDates: any
};

export class CalendarPage extends React.Component<CalendarPageProps, CalendarPageState> {

  constructor(props: CalendarPageProps) {
    super(props);
    let today: Date = new Date();

    this.state = {
      events: [],
      selectedDate: today,
      markedDates: {[this.convertDateToDateObject(today)]: {selected: true}},
      eventDates: null
    };
  }

  onDaySelected = (day: DateObject) => {
    const { eventDates } = this.state;

    this.setState({
      selectedDate: new Date(day.year, day.month-1, day.day),
      markedDates: {...eventDates, [day.dateString]: {selected: true}}
    });
  }

  convertDateToDateObject = (date: Date) => {
    let month = '' + (date.getMonth() + 1);
    let day = '' + date.getDate();
    let year = date.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
  }

  componentWillMount() {
    const { dataProvider } = this.props;
    const { markedDates } = this.state;

    const political = {key: 'political', color: getEventColor(EventType.Political)};
    const recreation = {key: 'recreation', color: getEventColor(EventType.Recreation)};
    const school = {key: 'school', color: getEventColor(EventType.School)};
    const careerServices = {key: 'careerServices', color: getEventColor(EventType.CareerServices)};
    const volunteering = {key: 'volunteering', color: getEventColor(EventType.Volunteering)};
    let eventDates: any = {};

    dataProvider.getEvents().then(events => {
      for (let event of events) {
        let date = new Date(event.Date);
        let dateStr = this.convertDateToDateObject(date);
        let dotArray = [];
        if (eventDates[dateStr]) {
          dotArray = eventDates[dateStr].dots;
        }
  
        if ((event.Type & EventType.Political) && !dotArray.includes(political)) {
          dotArray.push(political);
        }
        if ((event.Type & EventType.Recreation) && !dotArray.includes(recreation)) {
          dotArray.push(recreation);
        }
        if ((event.Type & EventType.School) && !dotArray.includes(school)) {
          dotArray.push(school);
        }
        if ((event.Type & EventType.CareerServices) && !dotArray.includes(careerServices)) {
          dotArray.push(careerServices);
        }
        if ((event.Type & EventType.Volunteering) && !dotArray.includes(volunteering)) {
          dotArray.push(volunteering);
        }
        eventDates[dateStr] = {dots: dotArray};
      }
  
      this.setState({
        events: events,
        eventDates: eventDates,
        markedDates: {...eventDates, ...markedDates}
      });
    });
  }
  
  render() {
    const { events, selectedDate, markedDates } = this.state;

    let visibleEvents = events.filter(function(e) {
      let date: Date = new Date(e.Date);
      return (date.getFullYear() === selectedDate.getFullYear()
        && date.getMonth() === selectedDate.getMonth() 
        && date.getDate() === selectedDate.getDate());
    });

    let eventList = visibleEvents.map(e => <EventDetails 
      key={e.Id} 
      event={e} 
    />);

    return (
      <View style={ Styles.appPageStyle }>
        <View style={[ Styles.pageHeader ]}>
        <Calendar
          style={[ Styles.appHorizontalMargin, Styles.calendar ]}
          theme={ calendarTheme }
          current={selectedDate}
          markedDates={markedDates}
          markingType={'multi-dot'}
          onDayPress={(day) => this.onDaySelected(day)} />
        </View>
        <Text style={[ Styles.appHorizontalMargin, Styles.mediumFont, Styles.dividerMargin, Styles.colorBlack ]}>{selectedDate.toDateString()}</Text>
        <Divider style={ Styles.dividerMargin }/>
        <ScrollView style={ Styles.scrollView }>
          {eventList}
        </ScrollView>
      </View>
    );
  }
}