import { StyleSheet } from 'react-native';

export const appMainColor: string = '#f4511e';
export const whiteColor: string = '#fff';
export const grayColor: string = '#7f7f7f';

export const Styles = StyleSheet.create({
  appHorizontalMargin: {
    marginHorizontal: 20
  },
  largeTopMargin: {
    marginTop: 20
  },
  largeFont: {
    fontSize: 20
  },
  rowFlex: {
    flexDirection: 'row'
  },
  leftMarginAuto: {
    marginLeft: 'auto'
  },
  dividerMargin: {
    marginTop: 10,
    marginBottom: 10
  },
  appBottomMargin: {
    marginBottom: 40
  },
  announcementDetailsHeight: {
    maxHeight: 50
  },
  announcementsScrollView: {
    flex: 1,
    flexDirection: 'column'
  },
  contactsScrollView: {
    flex: 1,
    flexDirection: 'column'
  },
  surveyButton: {
    maxWidth: '50%',
    alignSelf: 'center'
  },
  appPageStyle: {
    marginBottom: 10,
    marginTop: 10,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between'
  }
});