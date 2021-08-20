import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import res from '../../../res';

interface Style {
  root: ViewStyle;
  columnWrapperStyle: ViewStyle;
  listItemWrapper: ViewStyle;
  listItemWrapperWithSpacing: ViewStyle;
  noDataAvailableWrapper: ViewStyle;
  noDataAvailableText: TextStyle;
  spinnerWrapper: ViewStyle;
}

export default StyleSheet.create<Style>({
  root: {
    paddingBottom: res.metrics.spacing3,
  },
  columnWrapperStyle: {
    marginHorizontal: -res.metrics.spacing1,
    paddingHorizontal: res.metrics.spacing3,
  },
  listItemWrapper: {
    flex: 0.5,
    paddingHorizontal: res.metrics.spacing2,
  },
  listItemWrapperWithSpacing: {
    paddingTop: res.metrics.spacing3,
  },
  noDataAvailableWrapper: {
    alignItems: 'center',
  },
  noDataAvailableText: {
    marginTop: res.metrics.spacing3,
    color: res.colors.textMuted,
  },
  spinnerWrapper: {
    paddingVertical: res.metrics.spacing3,
    alignItems: 'center',
  },
});
