import React from 'react';
import {Text, TouchableOpacity, View, ViewStyle} from 'react-native';
import Spinner from '../Spinner';
import {Color, getThemedStyle, State} from './styles';

interface Props {
  onPress: () => void;
  title?: string;
  disabled?: boolean;
  pending?: boolean;
  style?: ViewStyle;
  color?: Color;
}

const Button = (props: Props) => {
  const {onPress, title, disabled, pending, color = 'primary'} = props;
  let state: State = 'normal';

  if (disabled) {
    state = 'disabled';
  } else if (pending) {
    state = 'loading';
  } else {
    state = 'normal';
  }

  const style = getThemedStyle(color, state);

  return (
    <TouchableOpacity
      onPress={() => onPress()}
      disabled={pending || props.disabled}>
      <View style={[style.root, props.style]}>
        {state === 'loading' && (
          <View style={style.spinnerWrapper}>
            <Spinner color={color === 'primary' ? 'light' : 'primary'} />
          </View>
        )}
        <Text style={style.label}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;
