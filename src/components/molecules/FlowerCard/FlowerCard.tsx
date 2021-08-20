import Text from '@components/atoms/Text';
import {Flower} from 'api/api';
import React from 'react';
import {ImageBackground, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import images from 'res/images';
import styles from './styles';

export interface FlowerCardProps {
  data: Flower;
  onPress: () => void;
}

const FlowerCard = (props: FlowerCardProps) => {
  // @ts-ignore
  const {name, latin_name, sightings, profile_picture} = props.data;

  return (
    <TouchableOpacity onPress={() => props.onPress()} style={styles.root}>
      <ImageBackground
        source={
          profile_picture !== '/images/medium/missing.jpg'
            ? {uri: `http:${profile_picture}`}
            : images.noImage
        }
        style={styles.backgroundImage}>
        <LinearGradient
          colors={['transparent', 'rgba(0,0,0,.7)']}
          style={styles.linearGradient}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.subtitle}>{latin_name}</Text>
          <Text style={styles.description}>{sightings} sightings</Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default FlowerCard;
