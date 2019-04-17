import { StyleSheet } from 'react-native';
import { AlertType } from './models/Alert';
import { EventType } from './models/Event';
import { TabBarBottom } from 'react-navigation';

export const appMainColor: string = '#f4511e';
export const whiteColor: string = '#fff';
export const grayColor: string = '#7f7f7f';

export function getAlertColor(type: AlertType): string {
  if (type === AlertType.Emergency) return 'red';
  if (type === AlertType.School) return 'yellow';
  if (type === AlertType.ParksAndRec) return 'green';
  if (type === AlertType.Traffic) return 'grey';
  if (type === AlertType.Voting) return 'blue';
  return '';
}

export function getEventColor(type: EventType): string {
  if (type === EventType.Political) return 'red';
  if (type === EventType.Recreation) return 'green';
  if (type === EventType.School) return 'yellow';
  if (type === EventType.CareerServices) return 'grey';
  if (type === EventType.Volunteering) return 'blue';
  return '';
}

export const Styles = StyleSheet.create({
  appHorizontalMargin: {
    marginHorizontal: 20
  },
  largeFont: {
    fontSize: 20
  },
  mediumFont: {
    fontSize: 15
  },
  rowFlex: {
    flexDirection: 'row'
  },
  columnFlex: {
    flexDirection: 'column'
  },
  leftMarginAuto: {
    marginLeft: 'auto'
  },
  smallDividerMargin: {
    marginTop: 5,
    marginBottom: 5
  },
  dividerMargin: {
    marginTop: 10,
    marginBottom: 10
  },
  announcementDetailsHeight: {
    maxHeight: 50
  },
  scrollView: {
    flex: 1,
    flexDirection: 'column'
  },
  contactsScrollView: {
    flex: 1,
    flexDirection: 'column'
  },
  surveyButton: {
    maxWidth: '50%',
    alignSelf: 'center',
    marginTop: 10
  },
  appPageStyle: {
    marginBottom: 10,
    marginTop: 10,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  alertIndicator: {
    height: 7,
    width: 7,
    borderRadius: 7,
    marginLeft: 1,
    marginRight: 1,
    alignSelf: 'center'
  },
  alertIndicatorSection: {
    alignSelf: 'center',
    flexDirection: 'row',
    width: 20,
    justifyContent: 'center'
  },
  alertDetailsSection: {
    marginRight: 40
  },
  profileSettingsButton: {
    marginEnd: 10,
    color: whiteColor
  },
  justifyStart: {
    justifyContent: 'flex-start'
  },
  notificationSettings: {
    justifyContent: 'space-between',
    height: 30
  },
  centeredRow: {
    alignSelf: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  justifySpace: {
    justifyContent: 'space-between'
  },
  calendar: {
    borderColor: grayColor,
    paddingBottom: 10,
    borderWidth: 1,
    width: '75%',
    alignSelf: 'center'
  }
});

export const calendarTheme = {
  selectedDayBackgroundColor: appMainColor,
  selectedDayTextColor: 'white',
  todayTextColor: appMainColor,
  'stylesheet.day.multiDot': {
    'base': {
      width:25,
      height:22,
      alignItems: 'center'
    },
    'selectedText': {
      color: 'white'
    },
    'text': {
      marginTop: 1.5
    }
  },
  'stylesheet.calendar.header': {
    'week': {
      marginTop: 0,
      flexDirection: 'row',
      justifyContent: 'space-around'
    },
    'dayHeader': {
      marginTop: 0,
      marginBottom: 0,
      width: 32,
      textAlign: 'center',
      fontSize: 13,
      fontFamily: 'System',
      color: '#b6c1cd'
    }
  }
}