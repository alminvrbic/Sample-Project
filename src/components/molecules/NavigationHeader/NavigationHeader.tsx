import {StackHeaderProps} from '@react-navigation/stack';
import res from '@res';
import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import DropShadow from 'react-native-drop-shadow';
import {SafeAreaView} from 'react-native-safe-area-context';
import images from 'res/images';
import styles from './styles';

type Props = StackHeaderProps;

const NavigationHeader = (props: Props) => {
  const previous = props.previous;

  return (
    <DropShadow style={styles.shadow}>
      <View style={styles.root}>
        <SafeAreaView edges={['top']}>
          <View style={styles.headerContent}>
            <Image
              resizeMode="contain"
              source={res.images.logo}
              style={{height: 25}}
            />
            {previous && (
              <TouchableOpacity
                onPress={() => props.navigation.goBack()}
                style={styles.goBack}>
                <Image
                  source={images.chevronLeft}
                  resizeMode="contain"
                  style={{
                    height: 23,
                    width: 23,
                  }}
                />
              </TouchableOpacity>
            )}
          </View>
        </SafeAreaView>
      </View>
    </DropShadow>
  );
};

export default NavigationHeader;
