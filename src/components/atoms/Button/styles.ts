import res from '@res';
import deepmerge from 'deepmerge';
import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

interface Style {
  root: ViewStyle;
  spinnerWrapper: ViewStyle;
  label: TextStyle;
}

export type Color = 'primary' | 'secondary';
type ColorStyle = {[key in Color]: Partial<Style>};

export type State = 'normal' | 'disabled' | 'loading';
type StateStyle = {[key in State]: Partial<Style>};

const base = StyleSheet.create<Style>({
  root: {
    borderRadius: 5,
    alignItems: 'center',
  },
  spinnerWrapper: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontFamily: res.fonts.bold,
  },
});

const colors: ColorStyle = {
  primary: {
    root: {
      backgroundColor: res.colors.primary,
      padding: 14,
    },
    label: {
      color: '#fff',
    },
  },
  secondary: {
    root: {
      borderWidth: 2,
      borderColor: res.colors.primary,
      padding: 12,
    },
    label: {
      color: res.colors.primary,
    },
  },
};

const state: StateStyle = {
  normal: {},
  disabled: {
    root: {
      opacity: 0.5,
    },
  },
  loading: {
    label: {
      opacity: 0,
    },
  },
};

export const getThemedStyle = (color: Color, disabled: State) => {
  return deepmerge.all([base, colors[color], state[disabled]]) as Style;
};
