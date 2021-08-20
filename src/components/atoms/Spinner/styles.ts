import deepmerge from 'deepmerge';
import {ImageStyle, StyleSheet} from 'react-native';
import res from '../../../res';

interface Style {
  root: ImageStyle;
}

export type Color = 'light' | 'dark' | 'primary';
type ColorStyle = {[key in Color]: Partial<Style>};

const base = StyleSheet.create<Style>({
  root: {
    width: 25,
    height: 25,
  },
});

const colors: ColorStyle = {
  light: {
    root: {
      tintColor: 'white',
    },
  },
  dark: {
    root: {
      tintColor: 'black',
    },
  },
  primary: {
    root: {
      tintColor: res.colors.primary,
    },
  },
};

export const getThemedStyle = (color: Color) => {
  return deepmerge.all([base, colors[color]]) as Style;
};
