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
    marginBottom: res.metrics.spacing5,
    marginTop: res.metrics.spacing3,
  },
  headingText: {
    fontSize: 20,
    fontFamily: res.fonts.bold,
  },
  textInput: {
    marginBottom: res.metrics.spacing4,
  },
  button: {
    marginTop: res.metrics.spacing4,
  },
});
