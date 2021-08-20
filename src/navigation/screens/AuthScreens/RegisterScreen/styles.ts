import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import res from '../../../../res';

interface Style {
  root: ViewStyle;
  headingWrapper: ViewStyle;
  headingText: TextStyle;
  textInput: TextStyle;
  button: ViewStyle;
}

export default StyleSheet.create<Style>({
  root: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: res.metrics.spacing3,
  },
  headingWrapper: {
    alignItems: 'center',
    marginTop: res.metrics.spacing3,
    marginBottom: res.metrics.spacing5,
  },
  headingText: {
    fontSize: 20,
    fontFamily: res.fonts.bold,
  },
  textInput: {
    marginBottom: res.metrics.spacing3,
  },
  button: {
    marginTop: res.metrics.spacing4,
  },
});
