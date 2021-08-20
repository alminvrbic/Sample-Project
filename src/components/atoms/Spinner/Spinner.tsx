import res from '@res';
import {withAnchorPoint} from '@utils/anchor-point';
import React from 'react';
import {Animated, Easing, Image} from 'react-native';
import {Color, getThemedStyle} from './styles';

interface Props {
  color?: Color;
}

const Spinner = React.memo(({color = 'primary', ...props}: Props) => {
  const spinValue = new Animated.Value(0);

  Animated.loop(
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    }),
  ).start();

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const style = getThemedStyle(color || 'light');

  const getSpinnerTransform = () => {
    const transform: any = {
      transform: [{rotate: spin}],
    };

    return withAnchorPoint(
      transform,
      {x: 0.5, y: 0.5},
      {width: 25, height: 25},
    );
  };

  return (
    <Animated.View
      style={[{width: 25, height: 25}, {...getSpinnerTransform()}]}>
      <Image style={style.root} source={res.images.spinner} />
    </Animated.View>
  );
});

export default Spinner;
