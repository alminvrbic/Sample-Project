import res from '@res';
import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

interface Style {
  root: ViewStyle;
  rootFocused: ViewStyle;

  labelWrapper: ViewStyle;
  labelWrapperActive: ViewStyle;
  label: TextStyle;
  labelActive: TextStyle;
  labelFocused: TextStyle;
  input: ViewStyle;
  inputActive: ViewStyle;

  prefixWrapper: ViewStyle;

  suffixWrapper: ViewStyle;
  suffixClear: ViewStyle;
}

export default StyleSheet.create<Style>({
  root: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 6,
    flexDirection: 'row',
    paddingVertical: res.metrics.spacing1,
    height: 50,
  },
  rootFocused: {
    borderColor: res.colors.primary,
  },

  labelWrapper: {
    justifyContent: 'center',
    paddingLeft: res.metrics.spacing2,
    height: 30,
  },
  labelWrapperActive: {
    height: 16,
  },
  label: {
    color: res.colors.textMuted,
  },
  labelActive: {
    fontSize: 12,
  },
  labelFocused: {
    color: res.colors.primary,
  },
  input: {
    paddingHorizontal: res.metrics.spacing2,
    color: res.colors.text,
    textAlignVertical: 'top',
    paddingVertical: 0,
    paddingTop: 0,
    paddingBottom: 0,
    position: 'absolute',
    height: 20,
  },
  inputActive: {
    position: 'relative',
  },

  prefixWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    paddingLeft: res.metrics.spacing2,
  },

  suffixWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    paddingRight: res.metrics.spacing2,
  },
  suffixClear: {
    padding: res.metrics.spacing1,
  },
});
