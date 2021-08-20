import res from '@res';
import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

interface Style {
  root: ViewStyle;
  button: ViewStyle;
  listItem: TextStyle;
}

export default StyleSheet.create<Style>({
  root: {
    padding: res.metrics.spacing3,
  },
  button: {
    width: 145,
    borderRadius: 50,
    marginTop: res.metrics.spacing3,
  },
  listItem: {
    color: '#949EA0',
    fontFamily: res.fonts.bold,
    paddingVertical: res.metrics.spacing4,
  },
});
