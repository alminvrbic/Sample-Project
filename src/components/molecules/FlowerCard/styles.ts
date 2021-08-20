import res from '@res';
import {ImageStyle, StyleSheet, TextStyle, ViewStyle} from 'react-native';

interface Style {
  root: ViewStyle;
  backgroundImage: ImageStyle;
  linearGradient: ViewStyle;
  title: TextStyle;
  subtitle: TextStyle;
  description: TextStyle;
}

export default StyleSheet.create<Style>({
  root: {},
  backgroundImage: {
    height: 220,
    width: '100%',
    borderRadius: 3,
    overflow: 'hidden',
  },
  linearGradient: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: res.metrics.spacing1,
  },
  title: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  subtitle: {
    color: '#fff',
    fontSize: 12,
    textAlign: 'center',
    fontFamily: res.fonts.light,
  },
  description: {
    color: '#fff',
    fontSize: 12,
    textAlign: 'center',
    fontFamily: res.fonts.light,
    marginBottom: res.metrics.spacing4,
    marginTop: res.metrics.spacing3,
  },
});
