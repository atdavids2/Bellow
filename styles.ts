import { StyleSheet } from 'react-native';
import { AlertType } from './models/Alert';

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

export const Styles = StyleSheet.create({
  appHorizontalMargin: {
    marginHorizontal: 20
  },
  largeFont: {
    fontSize: 20
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
    marginRight: 1
  },
  alertIndicatorSection: {
    alignSelf: 'center',
    flexDirection: 'row',
    width: 20,
    justifyContent: 'center'
  },
  alertDetailsSection: {
    marginRight: 40
  }
});