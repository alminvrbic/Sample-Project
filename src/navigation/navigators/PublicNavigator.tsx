import LoginScreen from '@navigation/screens/AuthScreens/LoginScreen';
import RegisterScreen from '@navigation/screens/AuthScreens/RegisterScreen';
import WelcomeScreen from '@navigation/screens/WelcomeScreen';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {defaultStackScreenOptions} from './AppNavigator';

const PublicNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{...defaultStackScreenOptions, headerShown: true}}>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
};

export default PublicNavigator;
