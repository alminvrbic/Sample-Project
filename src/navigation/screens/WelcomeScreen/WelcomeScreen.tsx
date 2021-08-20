import Button from '@components/atoms/Button';
import Text from '@components/atoms/Text';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './styles';

interface ListItem {
  title: string;
  onPress: () => void;
}

interface Props {
  navigation: StackNavigationProp<any>;
}

const WelcomeScreen = (props: Props) => {
  const listItems: ListItem[] = [
    {
      title: 'Flowers',
      onPress: () => {},
    },
    {
      title: 'Latest Sightings',
      onPress: () => {},
    },
    {
      title: 'Favorites',
      onPress: () => {},
    },
    {
      title: 'Settings',
      onPress: () => {},
    },
    {
      title: 'Login',
      onPress: () => props.navigation.navigate('Login'),
    },
  ];

  return (
    <SafeAreaView edges={['bottom']} style={{flex: 1}}>
      <View style={styles.root}>
        {listItems.map((item, index) => {
          return (
            <TouchableOpacity key={index} onPress={() => item.onPress()}>
              <Text style={styles.listItem}>{item.title}</Text>
            </TouchableOpacity>
          );
        })}

        <Button
          title="New Account"
          onPress={() => props.navigation.navigate('Register')}
          style={styles.button}
        />
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
