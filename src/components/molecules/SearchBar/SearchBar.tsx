import Input from '@components/atoms/Input';
import React from 'react';
import {Image, View} from 'react-native';
import images from 'res/images';
import styles from './styles';

interface Props {
  placeholder: string;
  value?: string;
  onChangeText: (text: string) => void;
  onSubmitEditing?: () => void;
}

const SearchBar = (props: Props) => {
  const {placeholder, value, onChangeText, onSubmitEditing} = props;

  return (
    <View style={styles.root}>
      <Input
        onChangeText={(text) => onChangeText(text)}
        placeholder={placeholder}
        onSubmitEditing={onSubmitEditing}
        defaultValue={value}
        style={styles.input}
      />
      <Image
        source={images.searchIcon}
        style={styles.searchIcon}
        resizeMode="contain"
      />
    </View>
  );
};

export default SearchBar;
