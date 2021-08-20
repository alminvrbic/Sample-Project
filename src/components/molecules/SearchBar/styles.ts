import res from '@res';
import {ImageStyle, StyleSheet, TextStyle} from 'react-native';

interface Style {
  root: ImageStyle;
  input: TextStyle;
  searchIcon: ImageStyle;
}

export default StyleSheet.create<Style>({
  root: {
    backgroundColor: '#fff',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    borderWidth: 0,
    paddingLeft: res.metrics.spacing3,
  },
  searchIcon: {
    height: 20,
    width: 20,
    zIndex: 10,
    marginHorizontal: res.metrics.spacing3,
  },
});
