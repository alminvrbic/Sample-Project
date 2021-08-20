import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import MainTabNavigator from './MainTabNavigator';

const PrivateNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="Main" component={MainTabNavigator} />
    </Stack.Navigator>
  );
};

export default PrivateNavigator;
