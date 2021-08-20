import res from '@res';
import {ImageStyle, StyleSheet, TextStyle, ViewStyle} from 'react-native';

interface Style {
  root: ImageStyle;
  contentWrapper: ViewStyle;
  titleText: TextStyle;
  subtitleText: TextStyle;
}

export default StyleSheet.create<Style>({
  root: {
    width: '100%',
    height: 320,
  },
  contentWrapper: {
    flex: 1,
    padding: res.metrics.spacing3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 24,
    fontFamily: res.fonts.light,
    width: '50%',
  },
  subtitleText: {
    color: '#fff',
    fontSize: 15,
    fontFamily: res.fonts.light,
    marginVertical: res.metrics.spacing5,
  },
});
