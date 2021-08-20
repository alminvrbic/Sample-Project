import React from 'react';
import {
  Text as RNText,
  TextProps as RNTextProps,
  TextStyle,
} from 'react-native';
import {getThemedStyle, Type} from './styles';

export interface TextProps extends RNTextProps {
  type?: Type;
  style?: TextStyle | TextStyle[];
}

const Text = (props: React.PropsWithChildren<TextProps>) => {
  const {type = 'normal'}: TextProps = props;
  const style = getThemedStyle(type);

  return (
    <RNText {...props} style={[style.root, props.style]}>
      {props.children}
    </RNText>
  );
};

export default Text;
