import res from '@res';
import {StyleSheet, ViewStyle} from 'react-native';

interface Style {
  root: ViewStyle;
}

export default StyleSheet.create<Style>({
  root: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: res.metrics.spacing3,
  },
});
