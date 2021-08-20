import {StyleSheet, ViewStyle} from 'react-native';
import res from '../../../res';

interface Style {
  shadow: ViewStyle;
  root: ViewStyle;
  headerContent: ViewStyle;
  goBack: ViewStyle;
}

export default StyleSheet.create<Style>({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  root: {
    backgroundColor: '#fff',
  },
  headerContent: {
    paddingVertical: res.metrics.spacing3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  goBack: {
    position: 'absolute',
    left: res.metrics.spacing2,
  },
});
