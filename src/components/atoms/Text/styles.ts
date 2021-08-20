import res from '@res';
import deepmerge from 'deepmerge';
import {StyleSheet, TextStyle} from 'react-native';

interface Style {
  root: TextStyle;
}

export type Type = 'heading' | 'subheading' | 'normal';
type TypeStyle = {[key in Type]: Partial<Style>};

const base = StyleSheet.create<Style>({
  root: {},
});

const types: TypeStyle = {
  normal: {
    root: {
      color: res.colors.text,
      fontSize: 14,
    },
  },
  heading: {
    root: {
      fontSize: 24,
      fontFamily: res.fonts.bold,
    },
  },
  subheading: {
    root: {
      fontSize: 16,
      color: res.colors.textMuted,
    },
  },
};

export const getThemedStyle = (type: Type) => {
  return deepmerge.all([base, types[type]]) as Style;
};
