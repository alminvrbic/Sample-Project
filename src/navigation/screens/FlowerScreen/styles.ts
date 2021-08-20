import res from '@res';
import {StyleSheet, ViewStyle} from 'react-native';

interface Style {
  root: ViewStyle;
}

export default StyleSheet.create<Style>({
  root: {
    padding: res.metrics.spacing3,
  },
});
