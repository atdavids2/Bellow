import { StyleSheet } from 'react-native';
import { AlertType } from './models/Alert';
import { EventType } from './models/Event';

export const appMainColor: string = '#f4511e';
export const appSecondaryColor: string = '#add8e6';
export const whiteColor: string = '#fff';
export const blackColor: string = '#000000'
export const grayColor: string = '#7f7f7f';
export const blueColor: string = '#0000ff';

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
  link: {
    color: blueColor,
    textDecorationLine: 'underline'
  },
  extraLargeFont: {
    fontSize: 25
  },
  largeFont: {
    fontSize: 20
  },
  mediumFont: {
    fontSize: 15
  },
  centeredText: {
    textAlign: 'center'
  },
  alignCenter: {
    alignSelf: 'center'
  },
  loginButton: {
    width: 100,
    margin: 15
  },
  grayBorder: {
    borderWidth: 1,
    borderColor: grayColor,
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
    marginTop: 5
  },
  dividerMargin: {
    marginTop: 10
  },
  largeDividerMargin: {
    marginTop: 30,
    marginBottom: 30
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover'
  },
  announcementDetailsHeight: {
    maxHeight: 50
  },
  scrollView: {
    flex: 1,
    flexDirection: 'column'
  },
  surveyButton: {
    maxWidth: '50%',
    alignSelf: 'center',
    marginTop: 10
  },
  appPageStyle: {
    flex: 1,
    flexDirection: 'column'
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
  contactRequestButton: {
    width: 135,
    height: 135,
    borderWidth: 1,
    borderColor: blackColor,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: appSecondaryColor,
    marginHorizontal: 40
  },
  contactRequestImage: {
    color: appMainColor,
    alignSelf: 'center',
    tintColor: appMainColor,
    width: 90,
    height: 90
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
  justifyEvenly: {
    justifyContent: 'space-evenly',
    flex: 1
  },
  calendar: {
    borderColor: grayColor,
    paddingBottom: 10,
    borderWidth: 1,
    width: '75%',
    alignSelf: 'center'
  },
  singleLineTextInputContainer: {
    borderColor: grayColor,
    borderWidth: 1,
  },
  textInput: {
    padding: 0,
    marginHorizontal: 5
  },
  multiLineTextInputContainer: {
    borderColor: grayColor,
    borderWidth: 1,
    height: 100
  },
  classificationPicker: {
    height: 30
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: grayColor
  },
  pageHeader: {
    backgroundColor: appSecondaryColor,
    paddingTop: 15,
    paddingBottom: 15
  },
  pageFooter: {
    backgroundColor: appSecondaryColor,
    paddingBottom: 10
  },
  colorBlack: {
    color: blackColor
  },
  whiteBackground: {
    backgroundColor: whiteColor
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