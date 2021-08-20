import Text from '@components/atoms/Text';
import SearchBar from '@components/molecules/SearchBar';
import React from 'react';
import {ImageBackground, View} from 'react-native';
import images from 'res/images';
import styles from './styles';

interface Props {
  numberOfSightings: number | null;
  placeholder: string;
  queryValue?: string;
  onChangeText: (text: string) => void;
  onSubmitEditing?: () => void;
}

const HomeHeader = (props: Props) => {
  const {
    numberOfSightings,
    placeholder,
    queryValue,
    onChangeText,
    onSubmitEditing,
  } = props;

  return (
    <ImageBackground source={images.homeHeader} style={styles.root}>
      <View style={styles.contentWrapper}>
        <Text style={styles.titleText}>Discover flowers around you</Text>
        <Text style={styles.subtitleText}>
          Explore between more than {numberOfSightings} sightings
        </Text>
        <SearchBar
          placeholder={placeholder}
          value={queryValue}
          onChangeText={(text) => onChangeText(text)}
          onSubmitEditing={() => onSubmitEditing}
        />
      </View>
    </ImageBackground>
  );
};

export default HomeHeader;
